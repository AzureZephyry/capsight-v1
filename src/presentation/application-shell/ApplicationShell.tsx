import type { ReactNode } from "react";
import Link from "next/link";
import type { AssessmentSection } from "@/domain/assessment-lifecycle";
import { assessmentNavigation } from "@/presentation/assessment/section-presentation";
import { ThemeToggle } from "@/presentation/theme-toggle/ThemeToggle";
import {
  ProductNavigation,
  SkipToContent,
} from "@/presentation/product-navigation/ProductHeader";
import styles from "./ApplicationShell.module.css";

export function ApplicationShell({
  section,
  assessmentId,
  children,
}: {
  section: AssessmentSection;
  assessmentId: string;
  children: ReactNode;
}) {
  const navigation = assessmentNavigation(assessmentId);
  const sectionIndex = navigation.findIndex((item) => item.section === section);
  const current = navigation[sectionIndex];

  return (
    <div className={styles.shell}>
      <SkipToContent target={section} />
      <aside className={styles.sidebar}>
        <div className={styles.brand} aria-label="CapSight">
          <span className={styles.brandMark} aria-hidden="true">
            <span />
          </span>
          <span className={styles.brandText}>
            <strong>CapSight</strong>
            <small>Capacity intelligence</small>
          </span>
        </div>

        <nav className={styles.navigation} aria-label="Capacity Assessment">
          <p className={styles.navHeading}>Assessment workflow</p>
          <ol className={styles.navList}>
            {navigation.map((item, index) => (
              <li className={styles.navItem} key={item.section}>
                <Link
                  aria-current={section === item.section ? "page" : undefined}
                  className={
                    section === item.section
                      ? styles.navCurrent
                      : styles.navFuture
                  }
                  href={item.href}
                >
                  <span className={styles.navNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <p className={styles.sidebarNote}>
          Calculate. Explain. Simulate. Validate. Decide.
        </p>
      </aside>

      <div className={styles.workspace}>
        <header className={styles.topbar}>
          <div className={styles.location}>
            <span className={styles.locationOverline}>
              <Link href="/assessments">Workspace</Link> / Assessment workflow
            </span>
            <span className={styles.locationTitle}>{current.label}</span>
          </div>
          <div className={styles.productControls}>
            <ProductNavigation />
            <ThemeToggle />
          </div>
        </header>

        <main className={styles.main} id={section} tabIndex={-1}>
          <div className={styles.introduction}>
            <div className={styles.introCopy}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowLine} aria-hidden="true" />
                Assessment workspace
              </p>
              <h1>
                {section === "overview" ? "Capacity Assessment" : current.label}
              </h1>
              <p className={styles.description}>{current.description}</p>
            </div>
            <div className={styles.introDetail} aria-hidden="true">
              <span className={styles.detailIndex}>
                {String(sectionIndex + 1).padStart(2, "0")} / 06
              </span>
              <span className={styles.detailRule} />
              <span className={styles.detailLabel}>{current.label}</span>
            </div>
          </div>

          {children}
        </main>
      </div>
    </div>
  );
}
