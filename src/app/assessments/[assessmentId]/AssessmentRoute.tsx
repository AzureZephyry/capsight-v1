import { notFound } from "next/navigation";
import { loadCapacityAssessment } from "@/application/assessment-operations";
import type { AssessmentSection } from "@/domain/assessment-lifecycle";
import { prismaAssessmentStore } from "@/infrastructure/prisma-assessment-store";
import { AssessmentPage } from "@/presentation/assessment/AssessmentPage";
import { AssessmentProblem } from "@/presentation/assessment/AssessmentEntry";
import { RetryWorkspaceButton } from "@/presentation/assessment/RetryWorkspaceButton";

export async function AssessmentRoute({
  assessmentId,
  section,
}: {
  assessmentId: string;
  section: AssessmentSection;
}) {
  const result = await loadCapacityAssessment(
    prismaAssessmentStore,
    assessmentId,
  );

  if (result.kind === "not-found") notFound();
  if (result.kind === "unavailable") {
    return (
      <AssessmentProblem
        title="Assessment temporarily unavailable"
        message="This Assessment could not be loaded right now. Try again in a moment or return to the Workspace."
      >
        <RetryWorkspaceButton />
      </AssessmentProblem>
    );
  }

  return <AssessmentPage assessment={result.assessment} section={section} />;
}
