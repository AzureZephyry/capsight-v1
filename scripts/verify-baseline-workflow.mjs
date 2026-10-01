import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { registerHooks } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";

// Use the installed TypeScript compiler; no test framework or database writes.
const sourceRoot = new URL("../src/", import.meta.url);
registerHooks({
  resolve(specifier, context, nextResolve) {
    const candidate = specifier.startsWith("@/")
      ? new URL(specifier.slice(2), sourceRoot)
      : specifier.startsWith(".") && context.parentURL
        ? new URL(specifier, context.parentURL)
        : null;
    if (candidate?.protocol === "file:") {
      const path = fileURLToPath(candidate);
      if (!existsSync(path) && existsSync(`${path}.ts`)) {
        return nextResolve(pathToFileURL(`${path}.ts`).href, context);
      }
    }
    return nextResolve(specifier, context);
  },
  load(url, context, nextLoad) {
    const result = nextLoad(url, context);
    if (url.startsWith(sourceRoot.href) && url.endsWith(".ts")) {
      return {
        ...result,
        format: "module",
        source: ts.transpileModule(String(result.source), {
          compilerOptions: {
            module: ts.ModuleKind.ESNext,
            target: ts.ScriptTarget.ES2022,
          },
        }).outputText,
      };
    }
    return result;
  },
});

const { assessLifecycle } =
  await import("../src/domain/assessment-lifecycle.ts");
const { assessBaselineWorkflow } =
  await import("../src/domain/baseline-workflow.ts");
const { getBaselineWorkflow } =
  await import("../src/application/get-baseline-workflow.ts");
const unresolved = {
  planningInputs: "unresolved",
  calculationReference: "awaiting-validation",
};
const validated = {
  planningInputs: "validated",
  calculationReference: "validated",
};

// A validated calculation context must never bypass incomplete/unvalidated requests.
for (const completeness of ["incomplete", "complete"]) {
  for (const validation of ["unvalidated", "validated"]) {
    const lifecycle = assessLifecycle(completeness, validation);
    const current = assessBaselineWorkflow(lifecycle, unresolved);
    assert.equal(current.calculation.status, "blocked");
    assert.ok(
      current.calculation.blockers.includes("planning-inputs-unresolved"),
    );
    assert.ok(
      current.calculation.blockers.includes(
        "calculation-reference-unvalidated",
      ),
    );
    assert.equal(current.calculationIntent, "explicit");
    const future = assessBaselineWorkflow(lifecycle, validated);
    if (completeness === "complete" && validation === "validated") {
      assert.equal(future.request.status, "ready");
      assert.equal(future.planning.status, "available");
      assert.equal(future.calculation.status, "ready");
    } else {
      assert.equal(future.planning.status, "blocked");
      assert.equal(future.calculation.status, "blocked");
    }
  }
}

const requestReady = assessLifecycle("complete", "validated");
const missingDefinitions = assessBaselineWorkflow(requestReady, {
  planningInputs: "validated",
  calculationReference: "awaiting-validation",
});
assert.deepEqual(missingDefinitions.calculation, {
  status: "blocked",
  blockers: ["calculation-reference-unvalidated"],
});
const missingInputs = assessBaselineWorkflow(requestReady, {
  planningInputs: "unresolved",
  calculationReference: "validated",
});
assert.deepEqual(missingInputs.calculation, {
  status: "blocked",
  blockers: ["planning-inputs-unresolved"],
});

// Application integration remains conservatively blocked even for a ready request.
const record = {
  id: "00000000-0000-4000-8000-000000000000",
  requestCompleteness: "complete",
  requestValidation: "validated",
  revision: 2,
  createdAt: new Date(0),
  updatedAt: new Date(0),
};
const before = structuredClone(record);
const workflow = getBaselineWorkflow(record);
assert.equal(workflow.request.status, "ready");
assert.equal(workflow.planning.status, "available");
assert.deepEqual(workflow.calculation, {
  status: "blocked",
  blockers: ["planning-inputs-unresolved", "calculation-reference-unvalidated"],
});
assert.deepEqual(
  record,
  before,
  "Readiness derivation must not mutate Assessment state",
);

console.log(
  "Baseline readiness gates verified; no calculations or database writes performed.",
);
