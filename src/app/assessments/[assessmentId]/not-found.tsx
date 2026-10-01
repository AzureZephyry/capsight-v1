import { AssessmentProblem } from "@/presentation/assessment/AssessmentEntry";

export default function AssessmentNotFound() {
  return (
    <AssessmentProblem
      title="Assessment not found"
      message="This link does not match a saved Assessment. Check the link or return to the saved Assessment list."
    />
  );
}
