import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { assessmentRecord } from "@/application/assessment-test-fixtures";
import { AssessmentPage } from "./AssessmentPage";

function savedValue(markup: string, label: string) {
  const match = markup.match(new RegExp(`<dt>${label}</dt><dd>(.*?)</dd>`));
  expect(match, `Saved state definition: ${label}`).not.toBeNull();
  return match![1].replace(/<[^>]+>/g, "");
}

describe("Assessment Overview orientation", () => {
  it.each([
    [
      "incomplete",
      "unvalidated",
      "Incomplete",
      "Unvalidated",
      "Input",
      "Review Request Context",
    ],
    [
      "complete",
      "unvalidated",
      "Complete",
      "Unvalidated",
      "Validate",
      "Review Request Context",
    ],
    [
      "complete",
      "validated",
      "Complete",
      "Validated",
      "Analyze",
      "Review Baseline readiness",
    ],
  ] as const)(
    "renders saved %s / %s state while calculation remains blocked",
    (
      requestCompleteness,
      requestValidation,
      completenessLabel,
      validationLabel,
      stage,
      nextAction,
    ) => {
      const assessment = assessmentRecord({
        requestCompleteness,
        requestValidation,
        revision: 9,
      });
      const markup = renderToStaticMarkup(
        <AssessmentPage assessment={assessment} section="overview" />,
      );

      expect(savedValue(markup, "Request completeness")).toBe(
        completenessLabel,
      );
      expect(savedValue(markup, "Request validation")).toBe(validationLabel);
      expect(savedValue(markup, "Saved revision")).toBe("9");
      expect(savedValue(markup, "Calculation readiness")).toBe("Blocked");
      expect(markup).toContain(`Current stage: <strong>${stage}</strong>`);
      expect(markup).toContain("Calculation requires validated rules");

      const summary = markup.match(
        /<section[^>]*aria-labelledby="readiness-title"[^>]*>(.*?)<\/section>/,
      )![1];
      expect(summary).toContain(nextAction);
      expect(summary).toContain(
        `href="/assessments/${assessment.id}/${requestValidation === "validated" ? "baseline" : "request-context"}"`,
      );
      if (requestValidation === "validated") {
        expect(summary).toContain("Request Context is complete and validated");
        expect(markup).not.toContain(
          "Request Context still requires validation.",
        );
      }
    },
  );

  it("explains the operational sequence and incomplete branch without adding business actions", () => {
    const assessment = assessmentRecord();
    const markup = renderToStaticMarkup(
      <AssessmentPage assessment={assessment} section="overview" />,
    );
    const flow = markup.match(
      /<section[^>]*aria-labelledby="lifecycle-title"[^>]*>(.*?)<\/section>/,
    )![1];
    const headings = [...flow.matchAll(/<h3>(.*?)<\/h3>/g)].map(
      (match) => match[1],
    );

    expect(headings.slice(0, 5)).toEqual([
      "Receive CAPEX Request",
      "Review Request Completeness",
      "Capacity Assessment",
      "Solution Evaluation",
      "CAPEX Submission",
    ]);
    expect(flow).toContain("Return to Requestor for Completion.");
    expect(flow).toContain("Continue to Capacity Assessment.");
    expect(flow).toContain("CAPEX submission are not yet available");
    expect(flow).not.toMatch(/<(?:a|button|form)\b/);
    expect(markup).toContain(`href="/assessments/${assessment.id}/solution"`);
  });
});
