import Link from "next/link";
import { ProductHeader } from "@/presentation/product-navigation/ProductHeader";
import { CapacityLoop } from "./CapacityLoop";
import styles from "./HowCapSightWorks.module.css";

export function HowCapSightWorks() {
  return (
    <div className={styles.page}>
      <ProductHeader active="how-it-works" />
      <main id="main-content" className={styles.main} tabIndex={-1}>
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>How CapSight Works</p>
            <h1>
              Every decision,
              <br />
              <em>connected.</em>
            </h1>
            <p className={styles.subtitle}>
              Closed-Loop Production Capacity Intelligence
            </p>
            <p className={styles.lead}>
              CapSight is designed to connect capacity planning with clear
              explanations, meaningful alternatives and actual observations. One
              Assessment keeps that story together.
            </p>
            <a className={styles.textLink} href="#capabilities">
              Explore the capabilities <span aria-hidden="true">↓</span>
            </a>
          </div>
          <CapacityLoop />
          <div className={styles.today}>
            <p className={styles.kicker}>Available today</p>
            <p>
              Create, save and reopen blank Assessments. Review the request gate
              and Baseline readiness. Required fields and calculation rules are
              being confirmed with Knowles.
            </p>
            <Link className={styles.workspaceLink} href="/assessments">
              Open Shared Workspace <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <section
          className={styles.capabilities}
          id="capabilities"
          aria-labelledby="capabilities-title"
        >
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>
              Designed for the complete planning story
            </p>
            <h2 id="capabilities-title">More than a final number.</h2>
            <p>
              These planned capabilities will build on validated inputs and
              calculations. They are not available in the current workspace.
            </p>
          </div>
          <article className={styles.feature}>
            <div className={styles.featureName}>
              <span className={styles.featureIndex} aria-hidden="true">
                01 / TRUST
              </span>
              <h3>Decision Trace</h3>
            </div>
            <div className={styles.featureCopy}>
              <h4>Follow the evidence behind a result.</h4>
              <p>
                Inspect the definitions, inputs, meaningful intermediate values
                and rounding that explain why a result exists. Version-Aware
                Profiles will preserve the historical rules and reference
                context used at the time.
              </p>
              <p className={styles.featureStatus}>
                Planned · Requires validated calculations
              </p>
            </div>
            <div
              className={styles.traceDiagram}
              aria-label="Result connects to evidence and meaning"
            >
              <span>Result</span>
              <span>↓ Evidence</span>
              <span>↓ Meaning</span>
            </div>
          </article>
          <article className={styles.feature}>
            <div className={styles.featureName}>
              <span className={styles.featureIndex} aria-hidden="true">
                02 / EXPLORE
              </span>
              <h3>Scenario Studio</h3>
            </div>
            <div className={styles.featureCopy}>
              <h4>Explore alternatives. Preserve the reference.</h4>
              <p>
                A valid Baseline anchors the planning process. Approved scenario
                variables will let engineers explore alternatives without
                overwriting it. Change Explanation will reveal the differences
                between calculated plans.
              </p>
              <p className={styles.featureStatus}>
                Planned · Requires a valid Baseline and approved variables
              </p>
            </div>
            <div className={styles.branchDiagram}>
              <span>Baseline</span>
              <span aria-hidden="true">↙ &nbsp; ↘</span>
              <span>Approved alternatives</span>
            </div>
          </article>
          <article className={styles.feature}>
            <div className={styles.featureName}>
              <span className={styles.featureIndex} aria-hidden="true">
                03 / CLOSE THE LOOP
              </span>
              <h3>Reality Loop</h3>
            </div>
            <div className={styles.featureCopy}>
              <h4>Bring actual observations back to the plan.</h4>
              <p>
                Compare actual production observations with the exact historical
                plan they evaluate. Evidence of the difference will support the
                engineer’s next adjustment, without invented causes or automatic
                changes to calculation rules.
              </p>
              <p className={styles.featureStatus}>
                Planned · Requires validated actual fields and historical
                calculations
              </p>
            </div>
            <div className={styles.realityDiagram}>
              <span>Historical plan</span>
              <span aria-hidden="true">↕</span>
              <span>Actual observations</span>
            </div>
          </article>
        </section>
        <section className={styles.closing} aria-labelledby="closing-title">
          <p className={styles.kicker}>The CapSight promise</p>
          <h2 id="closing-title">
            Calculate. Explain. Simulate.
            <br />
            <em>Validate. Decide.</em>
          </h2>
          <p>
            The tagline describes the promise. The operational loop closes with{" "}
            <strong>Adjust</strong>: evidence informs the next planning
            decision.
          </p>
          <Link className={styles.workspaceLink} href="/assessments">
            Return to your workspace <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
    </div>
  );
}
