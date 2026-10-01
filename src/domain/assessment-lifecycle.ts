export const lifecycleStages = [
  "input",
  "validate",
  "analyze",
  "develop",
  "submission",
] as const;

export type LifecycleStage = (typeof lifecycleStages)[number];
export type LifecycleStageStatus =
  "completed" | "current" | "upcoming" | "blocked";

export type AssessmentSection =
  | "overview"
  | "request-context"
  | "baseline"
  | "scenarios"
  | "solution"
  | "reality";

export type RequestCompleteness = "incomplete" | "complete";
export type RequestValidation = "unvalidated" | "validated";

export function initialRequestState(): {
  requestCompleteness: RequestCompleteness;
  requestValidation: RequestValidation;
} {
  return {
    requestCompleteness: "incomplete",
    requestValidation: "unvalidated",
  };
}
export type SectionPrerequisite =
  | "request-validation"
  | "valid-baseline"
  | "capacity-analysis"
  | "historical-plan";

export type SectionReadiness =
  | { status: "available" }
  | { status: "blocked"; prerequisite: SectionPrerequisite };

export type AssessmentLifecycle = {
  requestCompleteness: RequestCompleteness;
  requestValidation: RequestValidation;
  currentStage: LifecycleStage;
  stages: Record<LifecycleStage, LifecycleStageStatus>;
  sections: Record<AssessmentSection, SectionReadiness>;
};

export function assessLifecycle(
  requestCompleteness: RequestCompleteness,
  requestValidation: RequestValidation,
): AssessmentLifecycle {
  const requestIsComplete = requestCompleteness === "complete";
  const requestIsValidated =
    requestIsComplete && requestValidation === "validated";

  return {
    requestCompleteness,
    requestValidation: requestIsValidated ? "validated" : "unvalidated",
    currentStage: !requestIsComplete
      ? "input"
      : !requestIsValidated
        ? "validate"
        : "analyze",
    stages: {
      input: requestIsComplete ? "completed" : "current",
      validate: !requestIsComplete
        ? "blocked"
        : requestIsValidated
          ? "completed"
          : "current",
      analyze: requestIsValidated ? "current" : "upcoming",
      develop: "upcoming",
      submission: "upcoming",
    },
    sections: {
      overview: { status: "available" },
      "request-context": { status: "available" },
      baseline: requestIsValidated
        ? { status: "available" }
        : { status: "blocked", prerequisite: "request-validation" },
      scenarios: { status: "blocked", prerequisite: "valid-baseline" },
      solution: { status: "blocked", prerequisite: "capacity-analysis" },
      reality: { status: "blocked", prerequisite: "historical-plan" },
    },
  };
}
