import { vi } from "vitest";
import type {
  AssessmentStore,
  CapacityAssessmentRecord,
} from "./assessment-store";

// Test-only lifecycle data, unrelated to the future Knowles golden sample.
export function assessmentRecord(
  overrides: Partial<CapacityAssessmentRecord> = {},
): CapacityAssessmentRecord {
  return {
    id: "00000000-0000-4000-8000-000000000001",
    requestCompleteness: "incomplete",
    requestValidation: "unvalidated",
    revision: 1,
    createdAt: new Date("2026-01-01T00:00:00Z"),
    updatedAt: new Date("2026-01-01T00:00:00Z"),
    ...overrides,
  };
}

export function assessmentStoreStub(
  overrides: Partial<AssessmentStore>,
): AssessmentStore {
  const unexpected = async () => {
    throw new Error("Unexpected store operation in a unit test");
  };
  return {
    create: vi.fn(unexpected),
    findById: vi.fn(unexpected),
    listRecent: vi.fn(unexpected),
    advanceRevision: vi.fn(unexpected),
    ...overrides,
  };
}
