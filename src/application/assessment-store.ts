import type {
  RequestCompleteness,
  RequestValidation,
} from "@/domain/assessment-lifecycle";

export type CapacityAssessmentRecord = {
  id: string;
  requestCompleteness: RequestCompleteness;
  requestValidation: RequestValidation;
  revision: number;
  createdAt: Date;
  updatedAt: Date;
};

export type RevisionAdvanceResult =
  | { kind: "updated"; revision: number }
  | { kind: "conflict" }
  | { kind: "not-found" };

export interface AssessmentStore {
  create(request: {
    requestCompleteness: RequestCompleteness;
    requestValidation: RequestValidation;
  }): Promise<CapacityAssessmentRecord>;
  findById(id: string): Promise<CapacityAssessmentRecord | null>;
  listRecent(limit: number): Promise<CapacityAssessmentRecord[]>;
  advanceRevision(
    id: string,
    expectedRevision: number,
  ): Promise<RevisionAdvanceResult>;
}
