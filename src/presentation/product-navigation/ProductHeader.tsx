import Link from "next/link";
import { ThemeToggle } from "@/presentation/theme-toggle/ThemeToggle";
import styles from "./ProductHeader.module.css";

export function ProductNavigation({
  active,
}: {
  active?: "workspace" | "how-it-works";
}) {
  return (
    <nav className={styles.navigation} aria-label="CapSight">
      <Link
        href="/assessments"
        aria-current={active === "workspace" ? "page" : undefined}
      >
        Workspace
      </Link>
      <Link
        href="/how-capsight-works"
        aria-current={active === "how-it-works" ? "page" : undefined}
      >
        How CapSight Works
      </Link>
    </nav>
  );
}

export function ProductHeader({
  active,
}: {
  active?: "workspace" | "how-it-works";
}) {
  return (
    <>
      <SkipToContent />
      <header className={styles.header}>
        <Link
          className={styles.brand}
          href="/assessments"
          aria-label="CapSight workspace"
        >
          <span className={styles.mark} aria-hidden="true">
            <span />
          </span>
          <span>CapSight</span>
        </Link>
        <ProductNavigation active={active} />
        <ThemeToggle />
      </header>
    </>
  );
}

export function SkipToContent({
  target = "main-content",
}: {
  target?: string;
}) {
  return (
    <a className={styles.skipLink} href={`#${target}`}>
      Skip to content
    </a>
  );
}
