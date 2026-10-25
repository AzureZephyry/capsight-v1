"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { BrandMark } from "@/presentation/product-navigation/BrandMark";
import { useSelectionConnection } from "@/presentation/selection-connection/useSelectionConnection";
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
  const root = useRef<HTMLElement>(null);
  const orbit = useRef<HTMLDivElement>(null);
  const line = useRef<SVGPathElement>(null);
  const arc = useRef<SVGPathElement>(null);
  useSelectionConnection(root, line, selected);
  const step = steps[selected];
  const angle = selected * 60 - 90;
  const point = (degrees: number, radius: number) => ({
    x: Number((300 + Math.cos((degrees * Math.PI) / 180) * radius).toFixed(3)),
    y: Number((300 + Math.sin((degrees * Math.PI) / 180) * radius).toFixed(3)),
  });
  const start = point(angle + 10, 240);
  const end = point(angle + 50, 240);
  const node = point(angle, 240);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;
    const animation = arc.current?.animate(
      [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }],
      { duration: 480, easing: "cubic-bezier(.2,0,0,1)" },
    );
    const cancel = () => {
      if (motion.matches) animation?.cancel();
    };
    motion.addEventListener("change", cancel);
    return () => {
      animation?.cancel();
      motion.removeEventListener("change", cancel);
    };
  }, [selected]);

  useEffect(() => {
    const field = orbit.current;
    if (!field) return;
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let x = 50;
    let y = 40;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      field.style.removeProperty("--glow-x");
      field.style.removeProperty("--glow-y");
      field.style.removeProperty("--glow-power");
    };
    const move = (event: PointerEvent) => {
      if (!pointer.matches || motion.matches) return;
      const bounds = field.getBoundingClientRect();
      x = Math.max(
        0,
        Math.min(100, ((event.clientX - bounds.left) / bounds.width) * 100),
      );
      y = Math.max(
        0,
        Math.min(100, ((event.clientY - bounds.top) / bounds.height) * 100),
      );
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        field.style.setProperty("--glow-x", `${x}%`);
        field.style.setProperty("--glow-y", `${y}%`);
        field.style.setProperty("--glow-power", "1");
      });
    };
    field.addEventListener("pointermove", move, { passive: true });
    field.addEventListener("pointerleave", reset);
    motion.addEventListener("change", reset);
    pointer.addEventListener("change", reset);
    return () => {
      reset();
      field.removeEventListener("pointermove", move);
      field.removeEventListener("pointerleave", reset);
      motion.removeEventListener("change", reset);
      pointer.removeEventListener("change", reset);
    };
  }, []);

  return (
    <section className={styles.loop} aria-labelledby="loop-title" ref={root}>
      <div className={styles.loopHeading}>
        <h2 id="loop-title">One connected process.</h2>
        <p>Select a step to follow its connection.</p>
      </div>
      <div className={styles.orbit} ref={orbit}>
        <div className={styles.lightClip} aria-hidden="true">
          <div className={styles.cursorLight} />
        </div>
        <svg
          className={styles.orbitLine}
          viewBox="0 0 600 600"
          aria-hidden="true"
        >
          <circle className={styles.outerRing} cx="300" cy="300" r="278" />
          <circle className={styles.guideRing} cx="300" cy="300" r="240" />
          <circle className={styles.dottedRing} cx="300" cy="300" r="178" />
          <circle className={styles.guideRing} cx="300" cy="300" r="132" />
          <g
            className={styles.referenceRing}
            style={{ transform: `rotate(${selected * 60}deg)` }}
          >
            {Array.from({ length: 72 }, (_, index) => {
              const a = point(index * 5, index % 6 === 0 ? 260 : 266);
              const b = point(index * 5, 272);
              return <line key={index} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />;
            })}
          </g>
          <line
            className={styles.selectionRay}
            x1="300"
            y1="300"
            x2={node.x}
            y2={node.y}
          />
          <path
            ref={arc}
            className={styles.selectedArc}
            pathLength="1"
            d={`M ${start.x} ${start.y} A 240 240 0 0 1 ${end.x} ${end.y}`}
          />
        </svg>
        <div className={styles.loopCenter} aria-hidden="true">
          <BrandMark className={styles.centerMark} />
          <span className={styles.centerWord}>{step.name}</span>
          <span className={styles.centerCaption}>Designed capability</span>
        </div>
        <ol className={styles.steps}>
          {steps.map((item, index) => {
            const position = point(index * 60 - 90, 240);
            return (
              <li
                key={item.name}
                style={
                  {
                    "--x": `${position.x / 6}%`,
                    "--y": `${position.y / 6}%`,
                  } as CSSProperties
                }
              >
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
            );
          })}
        </ol>
        <span
          className={styles.connectionSource}
          data-connection-source="true"
          aria-hidden="true"
        />
      </div>
      <svg className={styles.storyWiring} aria-hidden="true">
        <path ref={line} pathLength="1" />
      </svg>
      <div
        id="loop-detail"
        className={styles.loopDetail}
        aria-live="polite"
        aria-atomic="true"
      >
        <span
          className={styles.notePin}
          data-connection-target
          aria-hidden="true"
        />
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
        calculations and actual validation are not available yet. This
        product-story loop is distinct from the Assessment sections and Knowles
        operational stages. The geometry shows relationships, not live
        production data.
      </p>
    </section>
  );
}
