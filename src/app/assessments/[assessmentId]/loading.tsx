import Link from "next/link";
import { ProductHeader } from "@/presentation/product-navigation/ProductHeader";
import styles from "@/presentation/assessment/AssessmentEntry.module.css";

export default function LoadingAssessment() {
  return (
    <div className={styles.page}>
      <ProductHeader />
      <main className={styles.main} id="main-content" tabIndex={-1}>
        <p className={styles.kicker}>Capacity Assessment</p>
        <h1>Opening Assessment</h1>
        <p className={styles.loading} role="status">
          Loading saved Assessment and workflow readiness…
        </p>
        <Link className={styles.returnLink} href="/assessments">
          Back to Workspace <span aria-hidden="true">↗</span>
        </Link>
      </main>
    </div>
  );
}
