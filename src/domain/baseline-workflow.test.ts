import { describe, expect, it } from "vitest";
import { assessLifecycle } from "./assessment-lifecycle";
import {
  assessBaselineWorkflow,
  type BaselineCalculationContext,
} from "./baseline-workflow";

// Synthetic prerequisite flags only; these are not manufacturing inputs or rules.
const unresolved: BaselineCalculationContext = {
  planningInputs: "unresolved",
  calculationReference: "awaiting-validation",
};
const validated: BaselineCalculationContext = {
  planningInputs: "validated",
  calculationReference: "validated",
};

describe("Baseline readiness", () => {
  it("keeps incomplete Request Context as the first open gate even with ready calculation context", () => {
    const workflow = assessBaselineWorkflow(
      assessLifecycle("incomplete", "unvalidated"),
      validated,
    );

    expect(workflow.request).toEqual({ status: "incomplete" });
    expect(workflow.planning).toEqual({
      status: "blocked",
      reason: "request-incomplete",
    });
    expect(workflow.calculation).toEqual({
      status: "blocked",
      blockers: ["request-incomplete"],
    });
  });

  it("keeps request validation as the first open gate after completeness is satisfied", () => {
    const workflow = assessBaselineWorkflow(
      assessLifecycle("complete", "unvalidated"),
      unresolved,
    );

    expect(workflow.request).toEqual({ status: "awaiting-validation" });
    expect(workflow.planning).toEqual({
      status: "blocked",
      reason: "request-unvalidated",
    });
    expect(workflow.calculation.status).toBe("blocked");
    if (workflow.calculation.status === "blocked") {
      expect(workflow.calculation.blockers[0]).toBe("request-unvalidated");
      expect(workflow.calculation.blockers).toEqual(
        expect.arrayContaining([
          "planning-inputs-unresolved",
          "calculation-reference-unvalidated",
        ]),
      );
    }
    expect(
      assessBaselineWorkflow(
        assessLifecycle("complete", "unvalidated"),
        validated,
      ).calculation,
    ).toEqual({ status: "blocked", blockers: ["request-unvalidated"] });
  });

  it("distinguishes ready Request Context and available planning from blocked calculation", () => {
    const workflow = assessBaselineWorkflow(
      assessLifecycle("complete", "validated"),
      unresolved,
    );

    expect(workflow.request).toEqual({ status: "ready" });
    expect(workflow.planning).toEqual({ status: "available" });
    expect(workflow.calculation).toEqual({
      status: "blocked",
      blockers: expect.arrayContaining([
        "planning-inputs-unresolved",
        "calculation-reference-unvalidated",
      ]),
    });
    expect(workflow.calculationIntent).toBe("explicit");
  });

  it("requires validated calculation reference even when planning inputs are validated", () => {
    expect(
      assessBaselineWorkflow(assessLifecycle("complete", "validated"), {
        planningInputs: "validated",
        calculationReference: "awaiting-validation",
      }).calculation,
    ).toEqual({
      status: "blocked",
      blockers: ["calculation-reference-unvalidated"],
    });
  });

  it("requires validated planning inputs even when calculation reference is validated", () => {
    expect(
      assessBaselineWorkflow(assessLifecycle("complete", "validated"), {
        planningInputs: "unresolved",
        calculationReference: "validated",
      }).calculation,
    ).toEqual({ status: "blocked", blockers: ["planning-inputs-unresolved"] });
  });

  it("represents ready prerequisites without calculating or changing their state", () => {
    const lifecycle = assessLifecycle("complete", "validated");
    const context = { ...validated };
    const before = structuredClone({ lifecycle, context });

    const workflow = assessBaselineWorkflow(lifecycle, context);

    expect(workflow.calculation).toEqual({ status: "ready" });
    expect(workflow.calculationIntent).toBe("explicit");
    expect({ lifecycle, context }).toEqual(before);
  });
});
