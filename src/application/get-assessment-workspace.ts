import { listCapacityAssessments } from "./assessment-operations";
import type {
  AssessmentStore,
  CapacityAssessmentRecord,
} from "./assessment-store";
import { getAssessmentLifecycle } from "./get-assessment-lifecycle";
import { getBaselineWorkflow } from "./get-baseline-workflow";

export type AssessmentWorkspaceItem = CapacityAssessmentRecord & {
  lifecycle: ReturnType<typeof getAssessmentLifecycle>;
  baseline: ReturnType<typeof getBaselineWorkflow>;
};

export async function getAssessmentWorkspace(store: AssessmentStore) {
  const result = await listCapacityAssessments(store);
  if (result.kind === "unavailable") return result;
  return {
    kind: "listed" as const,
    assessments: result.assessments.map(
      (assessment): AssessmentWorkspaceItem => ({
        ...assessment,
        lifecycle: getAssessmentLifecycle(assessment),
        baseline: getBaselineWorkflow(assessment),
      }),
    ),
  };
}
