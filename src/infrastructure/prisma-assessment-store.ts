import { PrismaPg } from "@prisma/adapter-pg";
import {
  CapacityAssessment as PrismaAssessment,
  PrismaClient,
  RequestCompleteness,
  RequestValidation,
} from "@/generated/prisma/client";
import type {
  AssessmentStore,
  CapacityAssessmentRecord,
  RevisionAdvanceResult,
} from "@/application/assessment-store";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function getPrismaClient(): PrismaClient {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error("Assessment database unavailable");

  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({
      adapter: new PrismaPg({ connectionString }),
    });
  }
  return globalForPrisma.prisma;
}

function toAssessment(record: PrismaAssessment): CapacityAssessmentRecord {
  return {
    id: record.id,
    requestCompleteness:
      record.requestCompleteness === RequestCompleteness.COMPLETE
        ? "complete"
        : "incomplete",
    requestValidation:
      record.requestValidation === RequestValidation.VALIDATED
        ? "validated"
        : "unvalidated",
    revision: record.revision,
    createdAt: record.createdAt,
    updatedAt: record.updatedAt,
  };
}

export const prismaAssessmentStore: AssessmentStore = {
  async create(request) {
    const record = await getPrismaClient().capacityAssessment.create({
      data: {
        requestCompleteness:
          request.requestCompleteness === "complete"
            ? RequestCompleteness.COMPLETE
            : RequestCompleteness.INCOMPLETE,
        requestValidation:
          request.requestValidation === "validated"
            ? RequestValidation.VALIDATED
            : RequestValidation.UNVALIDATED,
      },
    });
    return toAssessment(record);
  },

  async findById(id) {
    const record = await getPrismaClient().capacityAssessment.findUnique({
      where: { id },
    });
    return record ? toAssessment(record) : null;
  },

  async listRecent(limit) {
    const records = await getPrismaClient().capacityAssessment.findMany({
      orderBy: { createdAt: "desc" },
      take: limit,
    });
    return records.map(toAssessment);
  },

  async advanceRevision(id, expectedRevision): Promise<RevisionAdvanceResult> {
    const client = getPrismaClient();
    const updated = await client.capacityAssessment.updateMany({
      where: { id, revision: expectedRevision },
      data: { revision: { increment: 1 } },
    });

    if (updated.count === 1) {
      return { kind: "updated", revision: expectedRevision + 1 };
    }

    const existing = await client.capacityAssessment.findUnique({
      where: { id },
      select: { id: true },
    });
    return { kind: existing ? "conflict" : "not-found" };
  },
};
