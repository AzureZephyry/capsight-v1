import { assessLifecycle } from "@/domain/assessment-lifecycle";

export function getAssessmentLifecycle() {
  // TODO(KNOWLES): Replace this fixed incomplete state when the required
  // Request Context fields and validation rules are confirmed.
  return assessLifecycle("incomplete", "unvalidated");
}
