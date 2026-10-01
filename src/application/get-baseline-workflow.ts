import { assessBaselineWorkflow } from "@/domain/baseline-workflow";
import type { CapacityAssessmentRecord } from "./assessment-store";
import { getAssessmentLifecycle } from "./get-assessment-lifecycle";

export function getBaselineWorkflow(assessment: CapacityAssessmentRecord) {
  // TODO(KNOWLES): Supply validated planning-input readiness and compatible
  // reference/profile context after CALCULATION_REFERENCE.md has actual validated
  // definitions, units, defaults, rounding, and dependencies. Its placeholder
  // headings do not establish calculation truth. No date or UI action unlocks it.
  return assessBaselineWorkflow(getAssessmentLifecycle(assessment), {
    planningInputs: "unresolved",
    calculationReference: "awaiting-validation",
  });
}
