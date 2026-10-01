"use server";

import { redirect } from "next/navigation";
import { createCapacityAssessment } from "@/application/assessment-operations";
import { prismaAssessmentStore } from "@/infrastructure/prisma-assessment-store";

export async function createAssessmentAction() {
  const result = await createCapacityAssessment(prismaAssessmentStore);
  if (result.kind === "created") {
    redirect(`/assessments/${result.assessment.id}`);
  }
  redirect("/assessments?status=unavailable");
}
