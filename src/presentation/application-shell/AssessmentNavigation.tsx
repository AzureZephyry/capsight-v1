"use client";

import Link, { useLinkStatus } from "next/link";
import { useEffect, useRef } from "react";
import styles from "./ApplicationShell.module.css";

function NavigationLabel({ label, index }: { label: string; index: number }) {
  const { pending } = useLinkStatus();
  return (
    <>
      <span className={styles.navNumber}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <span>{label}</span>
      <span
        className={styles.pending}
        aria-hidden="true"
        data-pending={pending}
      />
      {pending ? (
        <span className={styles.srOnly} role="status">
          Opening {label}…
        </span>
      ) : null}
    </>
  );
}

export function AssessmentNavigation({
  items,
  current,
}: {
  items: { section: string; label: string; href: string }[];
  current: string;
}) {
  const rail = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const list = rail.current;
    const active = list?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!list || !active) return;
    const center = () => {
      list.scrollLeft =
        active.offsetLeft - list.clientWidth / 2 + active.offsetWidth / 2;
    };
    center();
    const observer = new ResizeObserver(center);
    observer.observe(list);
    observer.observe(active);
    return () => observer.disconnect();
  }, [current]);
  return (
    <nav className={styles.navigation} aria-label="Capacity Assessment">
      <ol className={styles.navList} ref={rail}>
        {items.map((item, index) => (
          <li key={item.section}>
            <Link
              href={item.href}
              aria-current={current === item.section ? "page" : undefined}
            >
              <NavigationLabel label={item.label} index={index} />
            </Link>
          </li>
        ))}
      </ol>
      <p className={styles.railHint}>
        Assessment sections · scroll to explore{" "}
        <span aria-hidden="true">↔</span>
      </p>
    </nav>
  );
}
