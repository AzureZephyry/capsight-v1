"use client";

import { AssessmentProblem } from "@/presentation/assessment/AssessmentEntry";
import { RetryButton } from "@/presentation/assessment/RetryButton";
import { themeBootstrap } from "@/presentation/theme-toggle/theme-preference";
import "./globals.css";

export default function GlobalError({ retry }: { retry: () => void }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <title>CapSight · Page unavailable</title>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>
        <AssessmentProblem
          title="CapSight could not open this page"
          message="Try again in a moment. If the problem continues, reopen the Workspace."
        >
          <RetryButton onRetry={retry} />
        </AssessmentProblem>
      </body>
    </html>
  );
}
