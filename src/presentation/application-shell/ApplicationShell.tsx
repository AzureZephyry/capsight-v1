import type { ReactNode } from "react";
import type { AssessmentSection } from "@/domain/assessment-lifecycle";
import { assessmentNavigation } from "@/presentation/assessment/section-presentation";
import { ProductHeader } from "@/presentation/product-navigation/ProductHeader";
import { AssessmentNavigation } from "./AssessmentNavigation";
import styles from "./ApplicationShell.module.css";

export function ApplicationShell({
  section,
  assessmentId,
  children,
  pending = false,
}: {
  section: AssessmentSection;
  assessmentId: string;
  children: ReactNode;
  pending?: boolean;
}) {
  const navigation = assessmentNavigation(assessmentId);
  const sectionIndex = navigation.findIndex((item) => item.section === section);
  const current = navigation[sectionIndex];
  return (
    <div className={styles.shell}>
      <div className={styles.chrome}>
        <ProductHeader contentId={section} />
        <div className={styles.context}>
          <span>
            Assessment workspace <span aria-hidden="true">/</span>{" "}
            <strong>{current.label}</strong>
          </span>
          <span>{pending ? "Opening Assessment" : "Saved Assessment"}</span>
        </div>
        <AssessmentNavigation items={navigation} current={section} />
      </div>
      <main className={styles.main} id={section} tabIndex={-1}>
        <div className={styles.introduction}>
          <div className={styles.introCopy}>
            <p className={styles.eyebrow}>Assessment workspace</p>
            <h1>
              {section === "overview" ? "Capacity Assessment" : current.label}
            </h1>
            <p className={styles.description}>{current.description}</p>
          </div>
          <span className={styles.detailIndex} aria-hidden="true">
            {String(sectionIndex + 1).padStart(2, "0")} / 06
          </span>
        </div>
        <div className={styles.sectionContent} key={section}>
          {children}
        </div>
      </main>
    </div>
  );
}
