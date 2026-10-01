"use client";

import { AssessmentProblem } from "@/presentation/assessment/AssessmentEntry";
import { RetryButton } from "@/presentation/assessment/RetryButton";

export default function ErrorPage({ retry }: { retry: () => void }) {
  return (
    <AssessmentProblem
      title="This page could not be loaded"
      message="Something interrupted this page. Try again in a moment or return to the Workspace."
    >
      <RetryButton onRetry={retry} />
    </AssessmentProblem>
  );
}
