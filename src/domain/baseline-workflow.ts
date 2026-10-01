import type { AssessmentLifecycle } from "./assessment-lifecycle";

export type RequestReadiness =
  | { status: "incomplete" }
  | { status: "awaiting-validation" }
  | { status: "ready" };

export type BaselinePlanningReadiness =
  | { status: "blocked"; reason: "request-incomplete" | "request-unvalidated" }
  | { status: "available" };

// These describe prerequisite availability, not manufacturing rules or inputs.
export type BaselineCalculationContext = {
  planningInputs: "unresolved" | "validated";
  calculationReference: "awaiting-validation" | "validated";
};

export type BaselineCalculationBlocker =
  | "request-incomplete"
  | "request-unvalidated"
  | "planning-inputs-unresolved"
  | "calculation-reference-unvalidated";

export type BaselineCalculationReadiness =
  | {
      status: "blocked";
      blockers: [BaselineCalculationBlocker, ...BaselineCalculationBlocker[]];
    }
  | { status: "ready" };

export type BaselineWorkflow = {
  request: RequestReadiness;
  planning: BaselinePlanningReadiness;
  calculation: BaselineCalculationReadiness;
  calculationIntent: "explicit";
};

export function assessBaselineWorkflow(
  lifecycle: AssessmentLifecycle,
  context: BaselineCalculationContext,
): BaselineWorkflow {
  const request: RequestReadiness =
    lifecycle.requestCompleteness === "incomplete"
      ? { status: "incomplete" }
      : lifecycle.requestValidation === "unvalidated"
        ? { status: "awaiting-validation" }
        : { status: "ready" };

  const planning: BaselinePlanningReadiness =
    lifecycle.sections.baseline.status === "available"
      ? { status: "available" }
      : {
          status: "blocked",
          reason:
            request.status === "incomplete"
              ? "request-incomplete"
              : "request-unvalidated",
        };

  const blockers: BaselineCalculationBlocker[] = [];
  if (planning.status === "blocked") blockers.push(planning.reason);
  if (context.planningInputs === "unresolved") {
    blockers.push("planning-inputs-unresolved");
  }
  if (context.calculationReference === "awaiting-validation") {
    blockers.push("calculation-reference-unvalidated");
  }

  const [first, ...remaining] = blockers;
  return {
    request,
    planning,
    calculation:
      first === undefined
        ? { status: "ready" }
        : { status: "blocked", blockers: [first, ...remaining] },
    calculationIntent: "explicit",
  };
}
