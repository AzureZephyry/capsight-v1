import { assessLifecycle } from "@/domain/assessment-lifecycle";
import type { CapacityAssessmentRecord } from "./assessment-store";

export function getAssessmentLifecycle(assessment: CapacityAssessmentRecord) {
  // TODO(KNOWLES): Completeness and validation transitions remain unavailable
  // until required Request Context fields and their rules are confirmed.
  return assessLifecycle(
    assessment.requestCompleteness,
    assessment.requestValidation,
  );
}
