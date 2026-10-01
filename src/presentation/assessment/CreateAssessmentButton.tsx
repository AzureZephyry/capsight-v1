"use client";
import { useEffect, useRef, type RefObject } from "react";
import { useFormStatus } from "react-dom";
import styles from "./AssessmentEntry.module.css";

export function CreateAssessmentForm({
  createAction,
}: {
  createAction: () => Promise<void>;
}) {
  const submissionLockRef = useRef(false);
  return (
    <form
      action={createAction}
      onSubmit={(event) => {
        // Block a second submit before React can render the pending button.
        if (submissionLockRef.current) event.preventDefault();
        else submissionLockRef.current = true;
      }}
    >
      <CreateAssessmentButton submissionLockRef={submissionLockRef} />
    </form>
  );
}

function CreateAssessmentButton({
  submissionLockRef,
}: {
  submissionLockRef: RefObject<boolean>;
}) {
  const { pending } = useFormStatus();
  useEffect(() => {
    if (!pending) submissionLockRef.current = false;
  }, [pending, submissionLockRef]);
  return (
    <button className={styles.createButton} type="submit" disabled={pending}>
      <span role="status">
        {pending ? "Creating Assessment…" : "Create Assessment"}
      </span>
      <span aria-hidden="true">{pending ? "·" : "+"}</span>
    </button>
  );
}
