"use client";
import { useFormStatus } from "react-dom";
import styles from "./AssessmentEntry.module.css";

export function CreateAssessmentButton() {
  const { pending } = useFormStatus();
  return (
    <button className={styles.createButton} type="submit" disabled={pending}>
      <span role="status">
        {pending ? "Creating Assessment…" : "Create Assessment"}
      </span>
      <span aria-hidden="true">{pending ? "·" : "+"}</span>
    </button>
  );
}
