import Link from "next/link";
import type { CapacityAssessmentRecord } from "@/application/assessment-store";
import { ThemeToggle } from "@/presentation/theme-toggle/ThemeToggle";
import styles from "./AssessmentEntry.module.css";

export function AssessmentEntry({
  assessments,
  createAction,
  createFailed,
}: {
  assessments: CapacityAssessmentRecord[] | null;
  createAction: () => Promise<void>;
  createFailed: boolean;
}) {
  const unavailable = assessments === null;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/assessments">
          CapSight
        </Link>
        <ThemeToggle />
      </header>
      <main className={styles.main}>
        <p className={styles.kicker}>Assessment entry</p>
        <h1>Capacity Assessments</h1>
        <p className={styles.intro}>
          Begin a blank Assessment or reopen a saved one. Request Context starts
          incomplete and must be validated before Baseline planning.
        </p>

        {unavailable || createFailed ? (
          <p className={styles.error} role="alert">
            Assessment records are temporarily unavailable. Check the database
            connection and try again.
          </p>
        ) : null}

        {!unavailable ? (
          <>
            <section className={styles.create} aria-labelledby="create-title">
              <div>
                <p className={styles.kicker}>Start work</p>
                <h2 id="create-title">New Assessment</h2>
                <p>
                  Create a saved Assessment shell. No manufacturing information
                  is required or assumed at this stage.
                </p>
              </div>
              <form action={createAction}>
                <button className={styles.createButton} type="submit">
                  Create blank Assessment <span aria-hidden="true">↗</span>
                </button>
              </form>
            </section>

            <section className={styles.recent} aria-labelledby="recent-title">
              <p className={styles.kicker}>Continue work</p>
              <h2 id="recent-title">Saved Assessments</h2>
              {assessments.length === 0 ? (
                <p className={styles.empty}>
                  No Assessments have been saved yet.
                </p>
              ) : (
                <ul className={styles.list}>
                  {assessments.map((assessment) => (
                    <li key={assessment.id}>
                      <Link href={`/assessments/${assessment.id}`}>
                        <span>Assessment record</span>
                        <code>{assessment.id}</code>
                      </Link>
                      <span className={styles.status}>
                        {assessment.requestCompleteness === "incomplete"
                          ? "Request incomplete"
                          : assessment.requestValidation === "unvalidated"
                            ? "Awaiting validation"
                            : "Request validated"}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </>
        ) : null}
      </main>
    </div>
  );
}

export function AssessmentProblem({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/assessments">
          CapSight
        </Link>
        <ThemeToggle />
      </header>
      <main className={styles.main}>
        <p className={styles.kicker}>Capacity Assessment</p>
        <h1>{title}</h1>
        <p className={styles.intro}>{message}</p>
        <Link className={styles.returnLink} href="/assessments">
          Back to Assessments <span aria-hidden="true">↗</span>
        </Link>
      </main>
    </div>
  );
}
