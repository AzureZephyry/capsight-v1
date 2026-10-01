import { describe, expect, it } from "vitest";
import { assessLifecycle, initialRequestState } from "./assessment-lifecycle";

describe("Assessment lifecycle", () => {
  it("begins with incomplete and unvalidated Request Context", () => {
    expect(initialRequestState()).toEqual({
      requestCompleteness: "incomplete",
      requestValidation: "unvalidated",
    });
  });

  it("keeps incomplete Request Context at Input with validation blocked", () => {
    const lifecycle = assessLifecycle("incomplete", "unvalidated");

    expect(lifecycle.currentStage).toBe("input");
    expect(lifecycle.stages).toMatchObject({
      input: "current",
      validate: "blocked",
      analyze: "upcoming",
    });
    expect(lifecycle.sections.overview).toEqual({ status: "available" });
    expect(lifecycle.sections["request-context"]).toEqual({
      status: "available",
    });
    expect(lifecycle.sections.baseline).toEqual({
      status: "blocked",
      prerequisite: "request-validation",
    });
  });

  it("does not accept a validated flag as a bypass for an incomplete request", () => {
    const lifecycle = assessLifecycle("incomplete", "validated");

    expect(lifecycle.requestValidation).toBe("unvalidated");
    expect(lifecycle.currentStage).toBe("input");
    expect(lifecycle.stages.validate).toBe("blocked");
    expect(lifecycle.sections.baseline.status).toBe("blocked");
  });

  it("moves a complete but unvalidated request to Validate, not Analyze", () => {
    const lifecycle = assessLifecycle("complete", "unvalidated");

    expect(lifecycle.currentStage).toBe("validate");
    expect(lifecycle.stages).toMatchObject({
      input: "completed",
      validate: "current",
      analyze: "upcoming",
    });
    expect(lifecycle.sections.baseline).toEqual({
      status: "blocked",
      prerequisite: "request-validation",
    });
  });

  it("opens Baseline planning after request validation while preserving downstream prerequisites", () => {
    const lifecycle = assessLifecycle("complete", "validated");

    expect(lifecycle.currentStage).toBe("analyze");
    expect(lifecycle.stages).toMatchObject({
      input: "completed",
      validate: "completed",
      analyze: "current",
      develop: "upcoming",
      submission: "upcoming",
    });
    expect(lifecycle.sections.baseline).toEqual({ status: "available" });
    expect(lifecycle.sections.scenarios).toEqual({
      status: "blocked",
      prerequisite: "valid-baseline",
    });
    expect(lifecycle.sections.solution).toEqual({
      status: "blocked",
      prerequisite: "capacity-analysis",
    });
    expect(lifecycle.sections.reality).toEqual({
      status: "blocked",
      prerequisite: "historical-plan",
    });
  });
});
