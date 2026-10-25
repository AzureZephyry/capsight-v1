import type { ReactNode } from "react";
import Link from "next/link";
import type { AssessmentWorkspaceItem } from "@/application/get-assessment-workspace";
import type { BaselineCalculationBlocker } from "@/domain/baseline-workflow";
import { ProductHeader } from "@/presentation/product-navigation/ProductHeader";
import { CreateAssessmentForm } from "./CreateAssessmentButton";
import { RetryWorkspaceButton } from "./RetryWorkspaceButton";
import styles from "./AssessmentEntry.module.css";

const gateLabels: Record<BaselineCalculationBlocker, string> = {
  "request-incomplete": "Request Context incomplete",
  "request-unvalidated": "Request validation needed",
  "planning-inputs-unresolved": "Planning inputs awaiting confirmation",
  "calculation-reference-unvalidated": "Calculation rules awaiting validation",
};
const dateFormat = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Asia/Manila",
  hour12: true,
});

export function AssessmentEntry({ children }: { children: ReactNode }) {
  return (
    <div className={styles.page}>
      <ProductHeader active="workspace" />
      <main className={styles.main} id="main-content" tabIndex={-1}>
        <div className={styles.introduction}>
          <div>
            <p className={styles.kicker}>Capacity intelligence · Shared work</p>
            <h1>
              Shared Workspace<span className={styles.titleDot}>.</span>
            </h1>
            <p className={styles.intro}>
              Find saved capacity work, see its first open gate, and pick up
              where you left off.
            </p>
          </div>
          <aside className={styles.orientation} aria-label="Discover CapSight">
            <svg viewBox="0 0 240 110" fill="none" aria-hidden="true">
              <circle cx="120" cy="138" r="106" />
              <circle cx="120" cy="138" r="78" />
              <path d="M 32 79 A 106 106 0 0 1 207 79" />
              <path d="M 120 32 V 80" />
            </svg>
            <p>One Assessment. A connected planning story.</p>
            <Link href="/how-capsight-works">
              Discover how CapSight works <span aria-hidden="true">↗</span>
            </Link>
          </aside>
        </div>
        {children}
      </main>
    </div>
  );
}
export function WorkspaceLoading() {
  return (
    <p className={styles.loading} role="status">
      Loading saved Assessments…
    </p>
  );
}
export function AssessmentWorkspace({
  assessments,
  createAction,
  createFailed,
}: {
  assessments: AssessmentWorkspaceItem[] | null;
  createAction: () => Promise<void>;
  createFailed: boolean;
}) {
  if (assessments === null)
    return (
      <section className={styles.empty} aria-labelledby="unavailable-title">
        <p className={styles.kicker}>Workspace unavailable</p>
        <h2 id="unavailable-title">Saved work is temporarily unavailable</h2>
        <p role="alert">
          We couldn’t load your Assessments. Try again in a moment. You can
          create or reopen work once the connection is restored.
        </p>
        <RetryWorkspaceButton />
      </section>
    );
  return (
    <>
      {createFailed ? (
        <p className={styles.error} role="alert">
          We couldn’t confirm that your new Assessment was saved. Review the
          list before trying again.
        </p>
      ) : null}
      <section aria-labelledby="recent-title">
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.kicker}>Continue work</p>
            <h2 id="recent-title">Recent Assessments</h2>
            <p className={styles.listNote}>
              Newest first · Dates shown in Philippine time
              {assessments.length === 20
                ? " · Latest 20 saved Assessments"
                : ""}
            </p>
          </div>
          <CreateAssessmentForm createAction={createAction} />
        </div>
        {assessments.length === 0 ? (
          <div className={styles.empty}>
            <span className={styles.emptyMark} aria-hidden="true">
              ↗
            </span>
            <h3>Your capacity work starts here</h3>
            <p>
              An Assessment keeps a request and its capacity planning in one
              place. Create a blank Assessment to begin; it starts incomplete
              and unvalidated.
            </p>
          </div>
        ) : (
          <ul className={styles.list}>
            {assessments.map((assessment) => {
              const blocker =
                assessment.baseline.calculation.status === "blocked"
                  ? assessment.baseline.calculation.blockers[0]
                  : undefined;
              const requestGate =
                blocker === "request-incomplete" ||
                blocker === "request-unvalidated";
              const nextHref = `/assessments/${assessment.id}/${requestGate ? "request-context" : "baseline"}`;
              return (
                <li className={styles.row} key={assessment.id}>
                  <div className={styles.identity}>
                    <span className={styles.saved}>Saved Assessment</span>
                    <Link
                      className={styles.assessmentLink}
                      href={`/assessments/${assessment.id}`}
                      aria-describedby={`created-${assessment.id}`}
                    >
                      Assessment <span aria-hidden="true">↗</span>
                    </Link>
                    <dl className={styles.dates}>
                      <div id={`created-${assessment.id}`}>
                        <dt>Created</dt>
                        <dd>
                          <time dateTime={assessment.createdAt.toISOString()}>
                            {dateFormat.format(assessment.createdAt)}
                          </time>
                        </dd>
                      </div>
                      <div>
                        <dt>Updated</dt>
                        <dd>
                          <time dateTime={assessment.updatedAt.toISOString()}>
                            {dateFormat.format(assessment.updatedAt)}
                          </time>
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className={styles.state}>
                    <span className={styles.stage}>
                      {assessment.lifecycle.currentStage.toUpperCase()}
                    </span>
                    <dl className={styles.requestState}>
                      <div>
                        <dt>Request</dt>
                        <dd>
                          {assessment.requestCompleteness === "incomplete"
                            ? "Incomplete"
                            : "Complete"}
                        </dd>
                      </div>
                      <div>
                        <dt>Validation</dt>
                        <dd>
                          {assessment.requestValidation === "unvalidated"
                            ? "Not validated"
                            : "Validated"}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className={styles.next}>
                    <p className={styles.gateLabel}>First open gate</p>
                    <p className={styles.gate}>
                      {blocker
                        ? gateLabels[blocker]
                        : "Calculation prerequisites satisfied"}
                    </p>
                    <Link
                      className={styles.nextLink}
                      href={nextHref}
                      aria-describedby={`created-${assessment.id}`}
                    >
                      {requestGate
                        ? "Review Request Context"
                        : "Review Baseline readiness"}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        <p className={styles.footnote}>
          Blank Assessments are saved without manufacturing inputs. Required
          Request Context fields are being confirmed with Knowles; there are no
          inputs to enter yet.
        </p>
      </section>
    </>
  );
}
export function AssessmentProblem({
  title,
  message,
  children,
}: {
  title: string;
  message: string;
  children?: ReactNode;
}) {
  return (
    <div className={styles.page}>
      <ProductHeader />
      <main className={styles.main} id="main-content" tabIndex={-1}>
        <p className={styles.kicker}>Capacity Assessment</p>
        <h1>{title}</h1>
        <p className={styles.intro}>{message}</p>
        <div className={styles.recovery}>
          {children}
          <Link className={styles.returnLink} href="/assessments">
            Back to Workspace <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
