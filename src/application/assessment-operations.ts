import { initialRequestState } from "@/domain/assessment-lifecycle";
import type {
  AssessmentStore,
  CapacityAssessmentRecord,
} from "./assessment-store";

export type AssessmentResult =
  | { kind: "found"; assessment: CapacityAssessmentRecord }
  | { kind: "not-found" }
  | { kind: "unavailable" };

export async function createCapacityAssessment(
  store: AssessmentStore,
): Promise<
  | { kind: "created"; assessment: CapacityAssessmentRecord }
  | { kind: "unavailable" }
> {
  try {
    const assessment = await store.create(initialRequestState());
    return { kind: "created", assessment };
  } catch {
    return { kind: "unavailable" };
  }
}

export async function loadCapacityAssessment(
  store: AssessmentStore,
  id: string,
): Promise<AssessmentResult> {
  if (!isTechnicalAssessmentId(id)) return { kind: "not-found" };

  try {
    const assessment = await store.findById(id);
    return assessment ? { kind: "found", assessment } : { kind: "not-found" };
  } catch {
    return { kind: "unavailable" };
  }
}

export async function listCapacityAssessments(
  store: AssessmentStore,
): Promise<
  | { kind: "listed"; assessments: CapacityAssessmentRecord[] }
  | { kind: "unavailable" }
> {
  try {
    return { kind: "listed", assessments: await store.listRecent(20) };
  } catch {
    return { kind: "unavailable" };
  }
}

// A technical probe until Knowles validates meaningful editable request fields.
// No user-facing action calls this operation.
export async function advanceAssessmentRevisionForSpike(
  store: AssessmentStore,
  id: string,
  expectedRevision: number,
): Promise<
  | { kind: "updated"; revision: number }
  | { kind: "conflict" }
  | { kind: "not-found" }
  | { kind: "unavailable" }
> {
  if (!isTechnicalAssessmentId(id)) return { kind: "not-found" };
  if (!Number.isSafeInteger(expectedRevision) || expectedRevision < 1) {
    return { kind: "conflict" };
  }

  try {
    return await store.advanceRevision(id, expectedRevision);
  } catch {
    return { kind: "unavailable" };
  }
}

function isTechnicalAssessmentId(id: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
    id,
  );
}
