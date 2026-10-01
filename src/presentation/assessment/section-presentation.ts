import type { AssessmentSection } from "@/domain/assessment-lifecycle";

export function assessmentNavigation(assessmentId: string): {
  section: AssessmentSection;
  label: string;
  href: string;
  description: string;
}[] {
  const base = `/assessments/${assessmentId}`;
  return [
    {
      section: "overview",
      label: "Overview",
      href: base,
      description:
        "See the current request gate, lifecycle position, and next step for capacity work.",
    },
    {
      section: "request-context",
      label: "Request Context",
      href: `${base}/request-context`,
      description:
        "Understand what the request must establish before capacity planning can begin.",
    },
    {
      section: "baseline",
      label: "Baseline",
      href: `${base}/baseline`,
      description: "The reference planning state for capacity analysis.",
    },
    {
      section: "scenarios",
      label: "Scenarios",
      href: `${base}/scenarios`,
      description: "Alternative planning states branch from a valid Baseline.",
    },
    {
      section: "solution",
      label: "Solution",
      href: `${base}/solution`,
      description: "Evaluate the response to a validated capacity gap.",
    },
    {
      section: "reality",
      label: "Reality",
      href: `${base}/reality`,
      description: "Connect an executed plan to later actual validation.",
    },
  ];
}
