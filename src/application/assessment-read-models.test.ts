import { describe, expect, it, vi } from "vitest";
import {
  assessmentRecord,
  assessmentStoreStub,
} from "./assessment-test-fixtures";
import { getAssessmentLifecycle } from "./get-assessment-lifecycle";
import { getBaselineWorkflow } from "./get-baseline-workflow";
import { getAssessmentWorkspace } from "./get-assessment-workspace";

describe("Assessment read models", () => {
  it("derives the validation stage from saved request state without changing the Assessment", () => {
    const record = assessmentRecord({
      requestCompleteness: "complete",
      revision: 9,
    });
    const before = structuredClone(record);

    expect(getAssessmentLifecycle(record)).toMatchObject({
      currentStage: "validate",
      requestCompleteness: "complete",
      requestValidation: "unvalidated",
    });
    expect(record).toEqual(before);
  });

  it("keeps calculation blocked for validated Request Context until authoritative calculation context is available", () => {
    const record = assessmentRecord({
      requestCompleteness: "complete",
      requestValidation: "validated",
    });
    const before = structuredClone(record);
    const workflow = getBaselineWorkflow(record);

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
    expect(getBaselineWorkflow(record)).toEqual(workflow);
    expect(record).toEqual(before);
  });

  it("derives Workspace lifecycle and first open gates from saved state without saving or advancing revisions", async () => {
    const records = [
      assessmentRecord(),
      assessmentRecord({
        id: "00000000-0000-4000-8000-000000000002",
        requestCompleteness: "complete",
        requestValidation: "validated",
      }),
    ];
    const before = structuredClone(records);
    const listRecent = vi.fn(async () => records);
    const store = assessmentStoreStub({ listRecent });
    const result = await getAssessmentWorkspace(store);

    expect(listRecent).toHaveBeenCalledExactlyOnceWith(20);
    expect(result.kind).toBe("listed");
    if (result.kind !== "listed")
      throw new Error("Expected a listed Workspace");
    expect(result.assessments).toHaveLength(2);
    const [incomplete, validated] = result.assessments;
    expect(incomplete.lifecycle.currentStage).toBe("input");
    expect(validated.lifecycle.currentStage).toBe("analyze");
    expect(incomplete.baseline.calculation.status).toBe("blocked");
    expect(validated.baseline.calculation.status).toBe("blocked");
    if (incomplete.baseline.calculation.status === "blocked") {
      expect(incomplete.baseline.calculation.blockers[0]).toBe(
        "request-incomplete",
      );
    }
    if (validated.baseline.calculation.status === "blocked") {
      expect(validated.baseline.calculation.blockers[0]).toBe(
        "planning-inputs-unresolved",
      );
    }
    expect(store.create).not.toHaveBeenCalled();
    expect(store.advanceRevision).not.toHaveBeenCalled();
    expect(records).toEqual(before);
  });

  it("represents an empty saved Workspace without creating a synthetic Assessment", async () => {
    const store = assessmentStoreStub({ listRecent: async () => [] });

    expect(await getAssessmentWorkspace(store)).toEqual({
      kind: "listed",
      assessments: [],
    });
    expect(store.create).not.toHaveBeenCalled();
  });

  it("reports unavailable saved work without exposing private storage errors", async () => {
    const store = assessmentStoreStub({
      listRecent: async () => {
        throw new Error("Private storage detail");
      },
    });

    expect(await getAssessmentWorkspace(store)).toEqual({
      kind: "unavailable",
    });
  });
});
