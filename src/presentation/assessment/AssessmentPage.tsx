import Link from "next/link";
import { getAssessmentLifecycle } from "@/application/get-assessment-lifecycle";
import type { CapacityAssessmentRecord } from "@/application/assessment-store";
import type {
  AssessmentLifecycle,
  AssessmentSection,
  LifecycleStage,
  LifecycleStageStatus,
  SectionPrerequisite,
} from "@/domain/assessment-lifecycle";
import { lifecycleStages } from "@/domain/assessment-lifecycle";
import { ApplicationShell } from "@/presentation/application-shell/ApplicationShell";
import { assessmentNavigation } from "./section-presentation";
import styles from "./AssessmentPage.module.css";

const stageLabels: Record<LifecycleStage, string> = {
  input: "Input",
  validate: "Validate",
  analyze: "Analyze",
  develop: "Develop",
  submission: "Submission",
};

const statusLabels: Record<LifecycleStageStatus, string> = {
  completed: "Completed",
  current: "Current",
  upcoming: "Upcoming",
  blocked: "Blocked",
};

const prerequisiteDescriptions: Record<SectionPrerequisite, string> = {
  "request-validation":
    "Request information must be complete and validated before Baseline planning can begin.",
  "valid-baseline":
    "Scenarios need a valid Baseline before alternative planning can begin.",
  "capacity-analysis":
    "Solution evaluation follows capacity analysis and identification of a capacity gap.",
  "historical-plan":
    "Reality validation needs an executed historical plan to compare with actual results.",
};

const downstreamSections: AssessmentSection[] = [
  "baseline",
  "scenarios",
  "solution",
  "reality",
];

export function AssessmentPage({
  section,
  assessment,
}: {
  section: AssessmentSection;
  assessment: CapacityAssessmentRecord;
}) {
  const lifecycle = getAssessmentLifecycle(assessment);
  const navigation = assessmentNavigation(assessment.id);
  const requestContextHref = `/assessments/${assessment.id}/request-context`;

  return (
    <ApplicationShell assessmentId={assessment.id} section={section}>
      <div className={styles.content}>
        <p className={styles.recordNotice}>
          <span className={styles.recordNoticeMark} aria-hidden="true" />
          Saved Assessment · Technical ID:{" "}
          <span className={styles.recordId}>{assessment.id}</span>
        </p>
        <LifecycleIndicator lifecycle={lifecycle} />
        {section === "overview" ? (
          <Overview
            lifecycle={lifecycle}
            navigation={navigation}
            requestContextHref={requestContextHref}
          />
        ) : section === "request-context" ? (
          <RequestContext
            lifecycle={lifecycle}
            overviewHref={navigation[0].href}
          />
        ) : (
          <BlockedSection
            section={section}
            lifecycle={lifecycle}
            navigation={navigation}
            requestContextHref={requestContextHref}
          />
        )}
      </div>
    </ApplicationShell>
  );
}

function LifecycleIndicator({ lifecycle }: { lifecycle: AssessmentLifecycle }) {
  return (
    <section className={styles.lifecycle} aria-labelledby="lifecycle-title">
      <div className={styles.sectionHeading}>
        <div>
          <p className={styles.kicker}>Workflow position</p>
          <h2 id="lifecycle-title">Assessment lifecycle</h2>
        </div>
        <p className={styles.currentStage}>
          Current stage: <strong>{stageLabels[lifecycle.currentStage]}</strong>
        </p>
      </div>
      <ol className={styles.stageList}>
        {lifecycleStages.map((stage, index) => {
          const status = lifecycle.stages[stage];
          return (
            <li
              aria-current={status === "current" ? "step" : undefined}
              className={`${styles.stage} ${styles[status]}`}
              key={stage}
            >
              <span className={styles.stageNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.stageText}>
                <strong>{stageLabels[stage]}</strong>
                <small>{statusLabels[status]}</small>
              </span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function Overview({
  lifecycle,
  navigation,
  requestContextHref,
}: {
  lifecycle: AssessmentLifecycle;
  navigation: ReturnType<typeof assessmentNavigation>;
  requestContextHref: string;
}) {
  const requestIncomplete = lifecycle.requestCompleteness === "incomplete";

  return (
    <div className={styles.overview}>
      <section className={styles.readiness} aria-labelledby="readiness-title">
        <div className={styles.readinessCopy}>
          <p className={styles.kicker}>Request readiness</p>
          <h2 id="readiness-title">
            {requestIncomplete
              ? "Request Context is incomplete"
              : "Request Context needs validation"}
          </h2>
          <p>
            The required request information has not yet been confirmed and
            validated. Baseline planning cannot proceed from this state.
          </p>
        </div>
        <div className={styles.nextAction}>
          <span className={styles.stateTag}>Blocks Baseline</span>
          <p>Next step</p>
          <Link className={styles.actionLink} href={requestContextHref}>
            Review Request Context <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className={styles.downstream} aria-labelledby="downstream-title">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.kicker}>What follows</p>
            <h2 id="downstream-title">Downstream sections</h2>
          </div>
          <p className={styles.sectionAside}>
            Each section remains open for context while its work is gated.
          </p>
        </div>
        <ul className={styles.sectionList}>
          {downstreamSections.map((section) => {
            const readiness = lifecycle.sections[section];
            const item = navigation.find((entry) => entry.section === section);
            if (!item || readiness.status !== "blocked") return null;

            return (
              <li className={styles.sectionRow} key={section}>
                <div>
                  <Link href={item.href}>{item.label}</Link>
                  <p>{prerequisiteDescriptions[readiness.prerequisite]}</p>
                </div>
                <span className={styles.rowStatus}>Not ready</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

function RequestContext({
  lifecycle,
  overviewHref,
}: {
  lifecycle: AssessmentLifecycle;
  overviewHref: string;
}) {
  return (
    <div className={styles.requestGrid}>
      <section className={styles.requestMain} aria-labelledby="request-title">
        <p className={styles.kicker}>Request intake</p>
        <h2 id="request-title">Establish the planning context</h2>
        <p>
          Request Context gathers the information needed to decide whether a
          capacity assessment can proceed. Its completeness must be checked
          before the request can be validated.
        </p>
        <div className={styles.fieldShell}>
          <span className={styles.fieldSymbol} aria-hidden="true">
            ◇
          </span>
          <div>
            <h3>Required request information</h3>
            <p>
              The required fields and validation rules are still being confirmed
              with Knowles. They will be grouped here once defined; there are no
              request inputs to enter yet.
            </p>
          </div>
        </div>
      </section>
      <aside className={styles.gatePanel} aria-labelledby="gate-title">
        <p className={styles.kicker}>Current gate</p>
        <h2 id="gate-title">Incomplete and unvalidated</h2>
        <p>
          This request cannot move into Baseline planning until the required
          information is known, supplied, and validated.
        </p>
        <div className={styles.gateStatus}>
          <span>Request completeness</span>
          <strong>
            {lifecycle.requestCompleteness === "incomplete"
              ? "Incomplete"
              : "Complete"}
          </strong>
        </div>
        <div className={styles.gateStatus}>
          <span>Request validation</span>
          <strong>
            {lifecycle.requestValidation === "unvalidated"
              ? "Not validated"
              : "Validated"}
          </strong>
        </div>
        <Link className={styles.textLink} href={overviewHref}>
          Return to Overview <span aria-hidden="true">↗</span>
        </Link>
      </aside>
    </div>
  );
}

function BlockedSection({
  section,
  lifecycle,
  navigation,
  requestContextHref,
}: {
  section: AssessmentSection;
  lifecycle: AssessmentLifecycle;
  navigation: ReturnType<typeof assessmentNavigation>;
  requestContextHref: string;
}) {
  const item = navigation.find((entry) => entry.section === section);
  const readiness = lifecycle.sections[section];
  if (!item) return null;

  return (
    <section className={styles.blockedPanel} aria-labelledby="blocked-title">
      <p className={styles.kicker}>Section readiness</p>
      <span className={styles.stateTag}>Not ready</span>
      <h2 id="blocked-title">{item.label} is not ready yet</h2>
      <p>
        {readiness.status === "blocked"
          ? prerequisiteDescriptions[readiness.prerequisite]
          : "This section's workflow will follow its validated prerequisite."}
      </p>
      <div className={styles.blockerDetail}>
        <span>First open gate</span>
        <strong>Complete and validate Request Context</strong>
        <p>
          Its required fields are still being confirmed, so no capacity work or
          results are available yet.
        </p>
      </div>
      <Link className={styles.actionLink} href={requestContextHref}>
        Review Request Context <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
