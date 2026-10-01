"use client";

import { useTransition } from "react";
import styles from "./AssessmentEntry.module.css";

export function RetryButton({ onRetry }: { onRetry: () => void }) {
  const [pending, startTransition] = useTransition();
  return (
    <button
      type="button"
      className={styles.returnLink}
      disabled={pending}
      onClick={() => startTransition(onRetry)}
    >
      <span role="status">{pending ? "Trying again…" : "Try again"}</span>
      <span aria-hidden="true">↗</span>
    </button>
  );
}
