import { ThemeToggle } from "@/presentation/theme-toggle/ThemeToggle";
import styles from "./ApplicationShell.module.css";

const workflowSections = [
  "Overview",
  "Request Context",
  "Baseline",
  "Scenarios",
  "Solution",
  "Reality",
] as const;

export function ApplicationShell() {
  return (
    <div className={styles.shell}>
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
            {workflowSections.map((section, index) => (
              <li className={styles.navItem} key={section}>
                {index === 0 ? (
                  <a
                    aria-current="page"
                    className={styles.navCurrent}
                    href="#overview"
                  >
                    <span className={styles.navNumber}>01</span>
                    <span>{section}</span>
                  </a>
                ) : (
                  <span className={styles.navFuture}>
                    <span className={styles.navNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{section}</span>
                  </span>
                )}
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
              CapSight / Capacity Assessment
            </span>
            <span className={styles.locationTitle}>Overview</span>
          </div>
          <ThemeToggle />
        </header>

        <main className={styles.main} id="overview">
          <div className={styles.introduction}>
            <div className={styles.introCopy}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowLine} aria-hidden="true" />
                Assessment workspace
              </p>
              <h1>Capacity Assessment</h1>
              <p className={styles.description}>
                A shared place to work through production capacity requirements,
                from request context to planning and real-world validation.
              </p>
            </div>
            <div className={styles.introDetail} aria-hidden="true">
              <span className={styles.detailIndex}>01 / 06</span>
              <span className={styles.detailRule} />
              <span className={styles.detailLabel}>Overview</span>
            </div>
          </div>

          <section className={styles.placeholder} aria-labelledby="shell-title">
            <div className={styles.placeholderSymbol} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className={styles.placeholderCopy}>
              <p className={styles.placeholderKicker}>Application shell</p>
              <h2 id="shell-title">Ready for the assessment workflow</h2>
              <p>
                This is the Phase 1 interface foundation. Assessment features
                and validated capacity information will be added in later
                phases.
              </p>
            </div>
            <span className={styles.placeholderStatus}>Phase 1 foundation</span>
          </section>
        </main>
      </div>
    </div>
  );
}
