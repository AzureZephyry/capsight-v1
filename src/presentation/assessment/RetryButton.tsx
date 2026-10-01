"use client";

import { useTransition } from "react";
import styles from "./AssessmentEntry.module.css";

export function RetryButton({ onRetry }: { onRetry: () => void }) {
  const [pending, startTransition] = useTransition();
  const label = pending ? "Trying again…" : "Try again";
  return (
    <button
      aria-label={label}
      type="button"
      className={styles.returnLink}
      disabled={pending}
      onClick={() => startTransition(onRetry)}
    >
      <span role="status">{label}</span>
      <span aria-hidden="true">↗</span>
    </button>
  );
}
