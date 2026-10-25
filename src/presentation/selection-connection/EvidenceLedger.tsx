"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import { useSelectionConnection } from "./useSelectionConnection";
import styles from "./EvidenceLedger.module.css";

export type EvidenceItem = {
  label: string;
  status: string;
  heading: string;
  content: ReactNode;
};

export function EvidenceLedger({
  items,
  label,
}: {
  items: EvidenceItem[];
  label: string;
}) {
  const [selected, setSelected] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const line = useRef<SVGPathElement>(null);
  const id = useId();
  useSelectionConnection(root, line, selected);
  const item = items[selected];
  return (
    <div className={styles.ledger} ref={root}>
      <div className={styles.controls} role="group" aria-label={label}>
        {items.map((entry, index) => (
          <button
            key={entry.label}
            type="button"
            aria-pressed={index === selected}
            aria-controls={id}
            data-connection-source={index === selected ? "true" : undefined}
            onClick={() => setSelected(index)}
          >
            <span className={styles.index} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>
              <strong>{entry.label}</strong>
              <small>{entry.status}</small>
            </span>
            <span className={styles.indicator} aria-hidden="true">
              {index === selected ? "−" : "+"}
            </span>
          </button>
        ))}
      </div>
      <svg className={styles.wiring} aria-hidden="true">
        <path ref={line} pathLength="1" />
      </svg>
      <div
        id={id}
        className={styles.annotation}
        aria-live="polite"
        aria-atomic="true"
      >
        <span
          className={styles.pin}
          data-connection-target
          aria-hidden="true"
        />
        <div className={styles.reveal} key={item.label}>
          <p className={styles.label}>{item.label} · Explanation</p>
          <h3>{item.heading}</h3>
          <div className={styles.content}>{item.content}</div>
        </div>
      </div>
    </div>
  );
}
