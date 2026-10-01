import { Suspense } from "react";
import { getAssessmentWorkspace } from "@/application/get-assessment-workspace";
import { prismaAssessmentStore } from "@/infrastructure/prisma-assessment-store";
import {
  AssessmentEntry,
  AssessmentWorkspace,
  WorkspaceLoading,
} from "@/presentation/assessment/AssessmentEntry";
import { createAssessmentAction } from "./actions";

export const dynamic = "force-dynamic";

export default function AssessmentsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  return (
    <AssessmentEntry>
      <Suspense fallback={<WorkspaceLoading />}>
        <WorkspaceRecords searchParams={searchParams} />
      </Suspense>
    </AssessmentEntry>
  );
}

async function WorkspaceRecords({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const [result, query] = await Promise.all([
    getAssessmentWorkspace(prismaAssessmentStore),
    searchParams,
  ]);

  return (
    <AssessmentWorkspace
      assessments={result.kind === "listed" ? result.assessments : null}
      createAction={createAssessmentAction}
      createFailed={query.status === "unavailable"}
    />
  );
}
