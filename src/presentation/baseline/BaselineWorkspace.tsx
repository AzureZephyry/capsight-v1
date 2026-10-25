import Link from "next/link";
import type {
  BaselineCalculationBlocker,
  BaselineWorkflow,
  RequestReadiness,
} from "@/domain/baseline-workflow";
import { EvidenceLedger } from "@/presentation/selection-connection/EvidenceLedger";
import styles from "./BaselineWorkspace.module.css";

const requestLabels: Record<RequestReadiness["status"], string> = {
  incomplete: "Incomplete · Not validated",
  "awaiting-validation": "Awaiting validation",
  ready: "Complete and validated",
};

const blockerCopy: Record<BaselineCalculationBlocker, string> = {
  "request-incomplete":
    "Request Context must be completed and validated first.",
  "request-unvalidated": "Request Context must be validated first.",
  "planning-inputs-unresolved":
    "The required planning inputs and their validation rules are still being confirmed with Knowles.",
  "calculation-reference-unvalidated":
    "Calculation definitions and profile requirements, including units, defaults, rounding, and dependencies, are awaiting validation.",
};

export function BaselineWorkspace({
  workflow,
  requestContextHref,
}: {
  workflow: BaselineWorkflow;
  requestContextHref: string;
}) {
  return (
    <div className={styles.workspace}>
      <section className={styles.planning} aria-labelledby="baseline-planning">
        <div className={styles.planningCopy}>
          <p className={styles.kicker}>Reference planning state</p>
          <h2 id="baseline-planning">
            {workflow.planning.status === "blocked"
              ? "Request Context comes first"
              : "Baseline is available for planning"}
          </h2>
          <p>
            Baseline establishes the reference planning condition for this
            Assessment. Future Scenarios will explore alternatives from a valid
            Baseline while preserving its reference context.
          </p>
          {workflow.planning.status === "blocked" ? (
            <p>{blockerCopy[workflow.planning.reason]}</p>
          ) : (
            <p>
              Request prerequisites are satisfied. Planning information can be
              prepared once its required fields and rules are confirmed.
            </p>
          )}
        </div>
        <div className={styles.nextAction}>
          <span
            className={
              workflow.planning.status === "blocked"
                ? styles.blockedStatus
                : styles.availableStatus
            }
          >
            {workflow.planning.status === "blocked"
              ? "Planning blocked"
              : "Planning available"}
          </span>
          <p>
            {workflow.planning.status === "blocked"
              ? "Next step"
              : "Request foundation"}
          </p>
          <Link className={styles.actionLink} href={requestContextHref}>
            Review Request Context <span aria-hidden="true">↗</span>
          </Link>
          {workflow.planning.status === "blocked" ? (
            <small>
              Intake concepts are confirmed. Their field definitions and
              validation rules are still being aligned with Knowles.
            </small>
          ) : null}
        </div>
      </section>

      <section
        className={styles.readiness}
        aria-labelledby="baseline-readiness"
      >
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.kicker}>Before calculation</p>
            <h2 id="baseline-readiness">Baseline readiness</h2>
          </div>
          <p>
            Planning access and calculation readiness are checked separately.
          </p>
        </div>
        <EvidenceLedger
          label="Baseline readiness explanations"
          items={[
            {
              label: "Request Context",
              status: requestLabels[workflow.request.status],
              heading: "Begin with the request.",
              content: (
                <p>
                  Completeness and validation establish whether capacity
                  planning can begin. Request information must be complete and
                  validated before Baseline planning.
                </p>
              ),
            },
            {
              label: "Planning context",
              status:
                workflow.planning.status === "blocked"
                  ? "Waiting for Request Context"
                  : "Available for planning",
              heading: "A reference with an agreed meaning.",
              content: (
                <p>
                  Baseline planning follows a complete, validated request. Its
                  input definitions and validation rules must also be confirmed.
                </p>
              ),
            },
            {
              label: "Calculation readiness",
              status:
                workflow.calculation.status === "blocked"
                  ? "Not ready to calculate"
                  : "Prerequisites satisfied",
              heading: "Calculation has its own prerequisites.",
              content: (
                <p>
                  {workflow.calculation.status === "blocked"
                    ? "Planning access does not establish calculation readiness. Each open prerequisite below must be resolved with authoritative Knowles material."
                    : "Readiness is confirmed. Calculation execution will be introduced with the validated Capacity Engine."}
                </p>
              ),
            },
          ]}
        />
        {workflow.calculation.status === "blocked" ? (
          <div className={styles.openGates}>
            <h3>Open calculation prerequisites</h3>
            <ul className={styles.blockerList}>
              {workflow.calculation.blockers.map((blocker) => (
                <li key={blocker}>{blockerCopy[blocker]}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      <section
        className={styles.responsibilities}
        aria-labelledby="capacity-responsibilities"
      >
        <p className={styles.kicker}>Confirmed by Knowles</p>
        <h2 id="capacity-responsibilities">
          Capacity Assessment responsibilities
        </h2>
        <ul className={styles.responsibilityList}>
          <li>Validate demand requirement</li>
          <li>Evaluate available capacity</li>
          <li>Review volume mix impact</li>
          <li>Assess shared tool capacity</li>
          <li>Identify capacity gap</li>
        </ul>
        <p>
          These responsibilities define the purpose of the assessment. The
          formulas, units, calculation order, and rules needed to perform this
          work are still under Knowles validation. A complete request alone does
          not make Baseline ready to calculate.
        </p>
      </section>

      <section
        className={styles.calculation}
        aria-labelledby="calculation-intent"
      >
        <p className={styles.kicker}>Calculation workflow</p>
        <h2 id="calculation-intent">Calculate when the foundation is ready</h2>
        <p>
          Calculation will be an intentional action after readiness is
          confirmed. Each successful calculation will create a Calculation Run
          with its own authoritative result and traceable context. Changes to
          planning inputs will require an explicit calculation of the revised
          state.
        </p>
        <p className={styles.resultNotice}>
          No Baseline calculation has been performed. Resource requirements,
          capacity gap interpretation, and Decision Trace become available with
          a successful Calculation Run.
        </p>
      </section>
    </div>
  );
}
