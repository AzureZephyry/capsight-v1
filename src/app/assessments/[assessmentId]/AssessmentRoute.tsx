import { notFound } from "next/navigation";
import { loadCapacityAssessment } from "@/application/assessment-operations";
import type { AssessmentSection } from "@/domain/assessment-lifecycle";
import { prismaAssessmentStore } from "@/infrastructure/prisma-assessment-store";
import { AssessmentPage } from "@/presentation/assessment/AssessmentPage";
import { AssessmentProblem } from "@/presentation/assessment/AssessmentEntry";

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
        message="This Assessment could not be loaded right now. Check the database connection and try again."
      />
    );
  }

  return <AssessmentPage assessment={result.assessment} section={section} />;
}
