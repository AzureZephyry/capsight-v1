"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import styles from "./AssessmentEntry.module.css";

export function RetryWorkspaceButton() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  return (
    <button
      type="button"
      className={styles.returnLink}
      disabled={pending}
      onClick={() => startTransition(() => router.refresh())}
    >
      <span role="status">{pending ? "Trying again…" : "Try again"}</span>
      <span aria-hidden="true">↗</span>
    </button>
  );
}
