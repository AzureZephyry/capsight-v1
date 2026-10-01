import { listCapacityAssessments } from "@/application/assessment-operations";
import { prismaAssessmentStore } from "@/infrastructure/prisma-assessment-store";
import { AssessmentEntry } from "@/presentation/assessment/AssessmentEntry";
import { createAssessmentAction } from "./actions";

export const dynamic = "force-dynamic";

export default async function AssessmentsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const [result, query] = await Promise.all([
    listCapacityAssessments(prismaAssessmentStore),
    searchParams,
  ]);

  return (
    <AssessmentEntry
      assessments={result.kind === "listed" ? result.assessments : null}
      createAction={createAssessmentAction}
      createFailed={query.status === "unavailable"}
    />
  );
}
