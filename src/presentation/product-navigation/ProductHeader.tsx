import Link from "next/link";
import { ThemeToggle } from "@/presentation/theme-toggle/ThemeToggle";
import { BrandMark } from "./BrandMark";
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
  contentId = "main-content",
}: {
  active?: "workspace" | "how-it-works";
  contentId?: string;
}) {
  return (
    <>
      <SkipToContent target={contentId} />
      <header className={styles.header}>
        <Link
          className={styles.brand}
          href="/assessments"
          aria-label="CapSight workspace"
        >
          <BrandMark className={styles.mark} />
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
