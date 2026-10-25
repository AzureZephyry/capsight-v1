"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { ApplicationShell } from "@/presentation/application-shell/ApplicationShell";
import { assessmentNavigation } from "./section-presentation";
import styles from "./AssessmentEntry.module.css";

export function AssessmentLoading() {
  const { assessmentId } = useParams<{ assessmentId: string }>();
  const pathname = usePathname();
  const current = assessmentNavigation(assessmentId).find(
    (item) => item.href === pathname,
  );
  return (
    <ApplicationShell
      assessmentId={assessmentId}
      section={current?.section ?? "overview"}
      pending
    >
      <p className={styles.loading} role="status">
        Loading saved Assessment and workflow readiness…
      </p>
      <Link className={styles.returnLink} href="/assessments">
        Back to Workspace <span aria-hidden="true">↗</span>
      </Link>
    </ApplicationShell>
  );
}
