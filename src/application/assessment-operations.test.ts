import { describe, expect, it, vi } from "vitest";
import {
  createCapacityAssessment,
  loadCapacityAssessment,
} from "./assessment-operations";
import {
  assessmentRecord,
  assessmentStoreStub,
} from "./assessment-test-fixtures";

describe("Assessment creation and reopening", () => {
  it("creates incomplete, unvalidated Request Context and preserves the store-assigned identity and metadata", async () => {
    // The stub supplies revision 1; this does not verify Prisma's revision default.
    const record = assessmentRecord();
    const create = vi.fn(async () => record);
    const result = await createCapacityAssessment(
      assessmentStoreStub({ create }),
    );

    expect(create).toHaveBeenCalledExactlyOnceWith({
      requestCompleteness: "incomplete",
      requestValidation: "unvalidated",
    });
    expect(result.kind).toBe("created");
    if (result.kind === "created") expect(result.assessment).toBe(record);
  });

  it("reports an unavailable create without claiming a saved Assessment or exposing technical details", async () => {
    const store = assessmentStoreStub({
      create: async () => {
        throw new Error("Private storage detail");
      },
    });

    expect(await createCapacityAssessment(store)).toEqual({
      kind: "unavailable",
    });
  });

  it("reopens an existing Assessment by technical identity without resetting its revision", async () => {
    const record = assessmentRecord({ revision: 7 });
    const findById = vi.fn(async () => record);
    const store = assessmentStoreStub({ findById });
    const result = await loadCapacityAssessment(store, record.id);

    expect(findById).toHaveBeenCalledExactlyOnceWith(record.id);
    expect(result).toEqual({ kind: "found", assessment: record });
    expect(store.create).not.toHaveBeenCalled();
    expect(store.advanceRevision).not.toHaveBeenCalled();
  });

  it("rejects an invalid technical ID before attempting persistence access", async () => {
    const store = assessmentStoreStub({});

    expect(
      await loadCapacityAssessment(store, "invalid-assessment-id"),
    ).toEqual({ kind: "not-found" });
    expect(store.findById).not.toHaveBeenCalled();
  });

  it("distinguishes missing saved work from an unavailable persistence operation", async () => {
    const id = assessmentRecord().id;
    const missing = assessmentStoreStub({ findById: async () => null });
    const unavailable = assessmentStoreStub({
      findById: async () => {
        throw new Error("Private storage detail");
      },
    });

    expect(await loadCapacityAssessment(missing, id)).toEqual({
      kind: "not-found",
    });
    expect(await loadCapacityAssessment(unavailable, id)).toEqual({
      kind: "unavailable",
    });
  });
});
