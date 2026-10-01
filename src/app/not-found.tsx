import { AssessmentProblem } from "@/presentation/assessment/AssessmentEntry";

export default function NotFound() {
  return (
    <AssessmentProblem
      title="Page not found"
      message="Check the link or return to the Workspace to find saved work."
    />
  );
}
