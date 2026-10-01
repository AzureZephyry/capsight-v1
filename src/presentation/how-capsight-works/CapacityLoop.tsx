"use client";

import { useState } from "react";
import styles from "./HowCapSightWorks.module.css";

const steps = [
  {
    name: "Calculate",
    title: "Establish the reference plan.",
    description:
      "A Baseline will turn validated planning inputs and Knowles-approved rules into traceable resource requirements. Calculation begins only when its prerequisites are satisfied.",
    connection: "The result becomes the starting point for explanation.",
  },
  {
    name: "Explain",
    title: "Understand where the result came from.",
    description:
      "Decision Trace will connect each result to the values, definitions, meaningful intermediate steps, rounding and historical calculation profile that produced it.",
    connection:
      "A clear explanation gives alternatives a trustworthy foundation.",
  },
  {
    name: "Simulate",
    title: "Explore a different planning condition.",
    description:
      "Scenario Studio will change only approved variables in alternatives anchored to a valid Baseline. Each alternative preserves the Baseline rather than overwriting it.",
    connection: "Alternatives create distinct planning results to compare.",
  },
  {
    name: "Compare",
    title: "See what actually changed.",
    description:
      "Change Explanation will compare calculation evidence: inputs, rules, reference context, intermediate steps and results. It will show differences without inventing causes.",
    connection:
      "Comparison helps the engineer choose a plan to evaluate in practice.",
  },
  {
    name: "Validate",
    title: "Connect the plan to actual observations.",
    description:
      "Reality Loop will compare Knowles-validated actual observations with the exact historical calculation they evaluate. New rules will not silently change the original plan.",
    connection:
      "Observed differences provide evidence for the next planning decision.",
  },
  {
    name: "Adjust",
    title: "Make the next decision with evidence.",
    description:
      "The engineer will use plan-versus-actual evidence to inform the next planning adjustment. CapSight will not silently change formulas, learn new rules or claim unsupported causes.",
    connection:
      "The next planning condition returns to Calculate, closing the loop.",
  },
] as const;

export function CapacityLoop() {
  const [selected, setSelected] = useState(0);
  const step = steps[selected];
  return (
    <section className={styles.loop} aria-labelledby="loop-title">
      <div className={styles.loopHeading}>
        <p className={styles.kicker}>The operational loop</p>
        <h2 id="loop-title">One connected process.</h2>
        <p>Select a step to see how it connects.</p>
      </div>
      <div className={styles.orbit}>
        <svg
          className={styles.orbitLine}
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <marker
              id="loop-arrow"
              markerWidth="8"
              markerHeight="8"
              refX="4"
              refY="4"
              orient="auto"
            >
              <path d="M1 1 6 4 1 7" stroke="currentColor" strokeWidth="1" />
            </marker>
          </defs>
          <path
            d="M200 38 C290 38 362 110 362 200 S290 362 200 362 S38 290 38 200 S110 38 200 38"
            stroke="currentColor"
            strokeWidth="1"
            markerEnd="url(#loop-arrow)"
          />
          <circle
            cx="200"
            cy="200"
            r="112"
            stroke="currentColor"
            strokeDasharray="2 7"
            opacity=".5"
          />
        </svg>
        <div className={styles.loopCenter} aria-hidden="true">
          <span className={styles.centerMark}>
            <i />
            <i />
            <i />
          </span>
          <span>
            Closed-loop
            <br />
            capacity intelligence
          </span>
        </div>
        <ol className={styles.steps}>
          {steps.map((item, index) => (
            <li key={item.name}>
              <button
                type="button"
                aria-pressed={selected === index}
                aria-controls="loop-detail"
                onClick={() => setSelected(index)}
              >
                <span className={styles.stepNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div
        id="loop-detail"
        className={styles.loopDetail}
        aria-live="polite"
        aria-atomic="true"
      >
        <div className={styles.detailContent} key={step.name}>
          <p className={styles.detailLabel}>
            {step.name} · Designed capability
          </p>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
          <p className={styles.connection}>
            <span aria-hidden="true">↳</span> {step.connection}
          </p>
        </div>
      </div>
      <p className={styles.loopNote}>
        Adjust informs the next Calculate. These capabilities are planned;
        calculations and actual validation are not available yet.
      </p>
    </section>
  );
}
