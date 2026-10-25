import Link from "next/link";
import type { ReactNode } from "react";
import { getAssessmentLifecycle } from "@/application/get-assessment-lifecycle";
import { getBaselineWorkflow } from "@/application/get-baseline-workflow";
import type { CapacityAssessmentRecord } from "@/application/assessment-store";
import type {
  AssessmentLifecycle,
  AssessmentSection,
  LifecycleStage,
  LifecycleStageStatus,
  SectionPrerequisite,
} from "@/domain/assessment-lifecycle";
import { lifecycleStages } from "@/domain/assessment-lifecycle";
import type {
  BaselineCalculationBlocker,
  BaselineWorkflow,
} from "@/domain/baseline-workflow";
import { ApplicationShell } from "@/presentation/application-shell/ApplicationShell";
import { BaselineWorkspace } from "@/presentation/baseline/BaselineWorkspace";
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

const calculationBlockerDescriptions: Record<
  BaselineCalculationBlocker,
  string
> = {
  "request-incomplete": "Request Context must be complete and validated.",
  "request-unvalidated": "Request Context still requires validation.",
  "planning-inputs-unresolved":
    "Planning input definitions and requirements need confirmation with Knowles.",
  "calculation-reference-unvalidated":
    "Calculation requires validated rules and compatible calculation reference/profile context.",
};

const operationalFlow: {
  stage: LifecycleStage;
  title: string;
  detail: string;
}[] = [
  {
    stage: "input",
    title: "Receive CAPEX Request",
    detail: "NPI or Sustaining Capacity Increase.",
  },
  {
    stage: "validate",
    title: "Review Request Completeness",
    detail: "Check whether the request information is complete.",
  },
  {
    stage: "analyze",
    title: "Capacity Assessment",
    detail:
      "Validate demand, evaluate available capacity, review volume mix and shared tools, and identify the capacity gap.",
  },
  {
    stage: "develop",
    title: "Solution Evaluation",
    detail:
      "Existing capacity optimization, equipment transfer / reallocation, new tooling, or new equipment.",
  },
  {
    stage: "submission",
    title: "CAPEX Submission",
    detail:
      "CAPEX cost, submission to the Requestor, and waiting for feedback.",
  },
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
          Saved Assessment
        </p>
        {section !== "overview" ? (
          <LifecycleIndicator
            lifecycle={lifecycle}
            compact={section === "baseline"}
            overviewHref={navigation[0].href}
          />
        ) : null}
        {section === "overview" ? (
          <Overview
            assessment={assessment}
            lifecycle={lifecycle}
            workflow={getBaselineWorkflow(assessment)}
            navigation={navigation}
            requestContextHref={requestContextHref}
          />
        ) : section === "request-context" ? (
          <RequestContext
            lifecycle={lifecycle}
            overviewHref={navigation[0].href}
          />
        ) : section === "baseline" ? (
          <BaselineWorkspace
            workflow={getBaselineWorkflow(assessment)}
            requestContextHref={requestContextHref}
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

function LifecycleIndicator({
  lifecycle,
  compact,
  overviewHref,
}: {
  lifecycle: AssessmentLifecycle;
  compact: boolean;
  overviewHref: string;
}) {
  if (compact) {
    return (
      <section
        className={styles.compactLifecycle}
        aria-label="Assessment lifecycle"
      >
        <p>
          Assessment lifecycle <span aria-hidden="true">/</span> Current stage:{" "}
          <strong>{stageLabels[lifecycle.currentStage]}</strong>
        </p>
        <Link href={overviewHref}>View full lifecycle in Overview</Link>
      </section>
    );
  }
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
  assessment,
  lifecycle,
  workflow,
  navigation,
  requestContextHref,
}: {
  assessment: CapacityAssessmentRecord;
  lifecycle: AssessmentLifecycle;
  workflow: BaselineWorkflow;
  navigation: ReturnType<typeof assessmentNavigation>;
  requestContextHref: string;
}) {
  const requestCopy = {
    incomplete: {
      heading: "Request Context is incomplete",
      detail:
        "Request information must be complete and validated before Baseline planning can begin. Field definitions and validation rules are pending alignment.",
    },
    "awaiting-validation": {
      heading: "Request Context awaits validation",
      detail:
        "The saved request is complete. Validation is still needed before Baseline planning can begin.",
    },
    ready: {
      heading: "Request Context is complete and validated",
      detail:
        "Request prerequisites for Baseline planning are satisfied. Calculation readiness is checked separately.",
    },
  }[workflow.request.status];
  const nextItem = navigation.find((item) => item.section === "baseline")!;
  const requestReady = workflow.request.status === "ready";

  return (
    <div className={styles.overview}>
      <section className={styles.readiness} aria-labelledby="readiness-title">
        <div className={styles.readinessCopy}>
          <p className={styles.kicker}>This saved Assessment</p>
          <h2 id="readiness-title">{requestCopy.heading}</h2>
          <p>
            A workspace for a CAPEX request and its capacity planning. The state
            below comes from this saved Assessment.
          </p>
          <dl className={styles.savedState} aria-label="Saved Assessment state">
            <div>
              <dt>Request completeness</dt>
              <dd>
                {assessment.requestCompleteness === "complete"
                  ? "Complete"
                  : "Incomplete"}
              </dd>
            </div>
            <div>
              <dt>Request validation</dt>
              <dd>
                {assessment.requestValidation === "validated"
                  ? "Validated"
                  : "Unvalidated"}
              </dd>
            </div>
            <div>
              <dt>Calculation readiness</dt>
              <dd>
                {workflow.calculation.status === "ready" ? "Ready" : "Blocked"}
              </dd>
            </div>
            <div>
              <dt>Saved revision</dt>
              <dd>{assessment.revision}</dd>
            </div>
          </dl>
        </div>
        <div className={styles.nextAction}>
          <p>Continue inspecting</p>
          <Link
            className={styles.actionLink}
            href={requestReady ? nextItem.href : requestContextHref}
          >
            {requestReady
              ? "Review Baseline readiness"
              : "Review Request Context"}{" "}
            <span aria-hidden="true">↗</span>
          </Link>
          <span className={styles.nextExplanation}>{requestCopy.detail}</span>
        </div>
      </section>

      <section aria-labelledby="lifecycle-title">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.kicker}>Confirmed Knowles process</p>
            <h2 id="lifecycle-title">Knowles operational flow</h2>
          </div>
          <p className={styles.currentStage}>
            Current stage:{" "}
            <strong>{stageLabels[lifecycle.currentStage]}</strong>
          </p>
        </div>
        <ol className={styles.processList}>
          {operationalFlow.map((step) => (
            <li key={step.stage}>
              <span className={styles.processBand}>
                {stageLabels[step.stage]}
              </span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
        <div className={styles.completenessBranch}>
          <h3>At completeness review: complete information?</h3>
          <dl>
            <div>
              <dt>No — incomplete</dt>
              <dd>Return to Requestor for Completion.</dd>
            </div>
            <div>
              <dt>Yes — complete</dt>
              <dd>Continue to Capacity Assessment.</dd>
            </div>
          </dl>
        </div>
        <p className={styles.processNote}>
          These steps describe the operational process. CapSight currently saves
          Assessments and shows request readiness. Editable request review,
          capacity calculations, solution selection, and CAPEX submission are
          not yet available. The six Assessment sections provide context for
          this work; they are not a record of completed process steps.
        </p>
      </section>

      <div className={styles.orientationDetails}>
        <section aria-labelledby="calculation-gates-title">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.kicker}>Before calculation</p>
              <h2 id="calculation-gates-title">
                {workflow.calculation.status === "blocked"
                  ? "What keeps calculation blocked"
                  : "Calculation prerequisites are ready"}
              </h2>
            </div>
          </div>
          {workflow.calculation.status === "blocked" ? (
            <ul className={styles.calculationGates}>
              {workflow.calculation.blockers.map((blocker) => (
                <li key={blocker}>{calculationBlockerDescriptions[blocker]}</li>
              ))}
            </ul>
          ) : null}
          <p className={styles.processNote}>
            A complete, validated request alone does not make calculation ready.
            Saved revision is not calculation history, and navigating does not
            run a calculation.
          </p>
        </section>

        <section
          className={styles.downstream}
          aria-labelledby="downstream-title"
        >
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.kicker}>Explore this Assessment</p>
              <h2 id="downstream-title">What you can inspect</h2>
            </div>
          </div>
          <ul className={styles.sectionList}>
            {navigation
              .filter((item) => item.section !== "overview")
              .map((item) => {
                const readiness = lifecycle.sections[item.section];
                return (
                  <li className={styles.sectionRow} key={item.section}>
                    <div>
                      <Link href={item.href}>{item.label}</Link>
                      <p>
                        {readiness.status === "blocked"
                          ? prerequisiteDescriptions[readiness.prerequisite]
                          : item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
          </ul>
        </section>
      </div>
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
          A CAPEX request for NPI or Sustaining Capacity Increase begins with
          information from the Requestor. Completeness review determines whether
          it can proceed to Capacity Assessment.
        </p>
        <section
          className={styles.intakeSection}
          aria-labelledby="intake-title"
        >
          <h3 id="intake-title">Confirmed intake information</h3>
          <p>Confirmed by Knowles · September 30, 2026</p>
          <ul className={styles.intakeList}>
            <IntakeTopic label="Affected model line / PN">
              <p>
                Field structure and validation requirements still need alignment
                with Knowles.
              </p>
            </IntakeTopic>
            <IntakeTopic label="Routing with PDT">
              <p>For a new PN.</p>
              <p>The definition of PDT remains under validation.</p>
            </IntakeTopic>
            <IntakeTopic label="Volume and Volume Mix">
              <p>
                Volume units and time basis, and Volume Mix representation,
                still need validation.
              </p>
            </IntakeTopic>
            <IntakeTopic label="Days/week scenario">
              <p>
                Knowles states “Default: 6 days/week”. Applicability is still
                being validated; no default is applied here.
              </p>
            </IntakeTopic>
            <IntakeTopic label="Supplier Tooling">
              <p>
                Field structure and validation requirements still need alignment
                with Knowles.
              </p>
            </IntakeTopic>
            <IntakeTopic label="Retained tool capacity">
              <p>
                When using existing capacity from other models: how much tool
                capacity should be retained.
              </p>
              <p>Tool capacity measures still need validation.</p>
            </IntakeTopic>
          </ul>
        </section>
        <section
          className={styles.alignmentNote}
          aria-labelledby="intake-alignment-title"
        >
          <h3 id="intake-alignment-title">Still to align with Knowles</h3>
          <p>
            Field structure, definitions including PDT, Volume units and time
            basis, Volume Mix representation, and tool capacity measures still
            need validation. Default applicability and mandatory or conditional
            requirements also remain open.
          </p>
          <p>
            Editable fields will follow that alignment so the information you
            enter has an agreed meaning and validation rule.
          </p>
        </section>
      </section>
      <aside className={styles.gatePanel} aria-labelledby="gate-title">
        <p className={styles.kicker}>Current gate</p>
        <h2 id="gate-title">Request status</h2>
        <p>
          Baseline planning requires a complete and validated request. The saved
          completeness and validation states are shown below.
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
        <section
          className={styles.reviewFlow}
          aria-labelledby="review-flow-title"
        >
          <h3 id="review-flow-title">Confirmed completeness flow</h3>
          <dl>
            <div>
              <dt>Incomplete information</dt>
              <dd>Return to Requestor for Completion</dd>
            </div>
            <div>
              <dt>Complete information</dt>
              <dd>Continue to Capacity Assessment</dd>
            </div>
          </dl>
          <p>
            Return and resubmission actions are not available yet. Completeness
            alone does not establish calculation readiness.
          </p>
        </section>
        <Link className={styles.textLink} href={overviewHref}>
          Return to Overview <span aria-hidden="true">↗</span>
        </Link>
      </aside>
    </div>
  );
}

function IntakeTopic({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <li>
      <details>
        <summary>{label}</summary>
        <div>{children}</div>
      </details>
    </li>
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
    <>
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
            Its required fields are still being confirmed, so no capacity work
            or results are available yet.
          </p>
        </div>
        <Link className={styles.actionLink} href={requestContextHref}>
          Review Request Context <span aria-hidden="true">↗</span>
        </Link>
      </section>
      {section === "solution" ? <SolutionContext /> : null}
    </>
  );
}

function SolutionContext() {
  return (
    <section
      className={styles.solutionContext}
      aria-labelledby="solution-directions-title"
    >
      <p className={styles.kicker}>Confirmed by Knowles</p>
      <h2 id="solution-directions-title">Solution Evaluation directions</h2>
      <p>
        Future capacity analysis and an identified gap will support evaluation
        of these directions. Which apply, and the detailed evaluation rules,
        still need Knowles validation.
      </p>
      <ul className={styles.solutionList}>
        <li>Existing capacity optimization</li>
        <li>Equipment transfer / reallocation</li>
        <li>New tooling requirement</li>
        <li>New equipment requirement</li>
      </ul>
      <h3>Downstream CAPEX handoff</h3>
      <p>
        Knowles’ workflow includes CAPEX cost, submission to the Requestor, and
        waiting for feedback. How costs are provided, what follows feedback, and
        how much of this handoff CapSight will support remain under validation.
      </p>
    </section>
  );
}
