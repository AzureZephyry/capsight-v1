import type { AssessmentSection } from "@/domain/assessment-lifecycle";

export const assessmentNavigation: {
  section: AssessmentSection;
  label: string;
  href: string;
  description: string;
}[] = [
  {
    section: "overview",
    label: "Overview",
    href: "/assessment",
    description:
      "See the current request gate, lifecycle position, and next step for capacity work.",
  },
  {
    section: "request-context",
    label: "Request Context",
    href: "/assessment/request-context",
    description:
      "Understand what the request must establish before capacity planning can begin.",
  },
  {
    section: "baseline",
    label: "Baseline",
    href: "/assessment/baseline",
    description: "The reference planning state for capacity analysis.",
  },
  {
    section: "scenarios",
    label: "Scenarios",
    href: "/assessment/scenarios",
    description: "Alternative planning states branch from a valid Baseline.",
  },
  {
    section: "solution",
    label: "Solution",
    href: "/assessment/solution",
    description: "Evaluate the response to a validated capacity gap.",
  },
  {
    section: "reality",
    label: "Reality",
    href: "/assessment/reality",
    description: "Connect an executed plan to later actual validation.",
  },
];
