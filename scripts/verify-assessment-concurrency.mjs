import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { registerHooks } from "node:module";
import { loadEnvFile } from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";
import pg from "pg";

// Run the actual Application/Infrastructure TypeScript without another runner.
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

if (!process.env.DATABASE_URL && existsSync(".env.local")) {
  loadEnvFile(".env.local");
}
assert.ok(process.env.DATABASE_URL, "DATABASE_URL must be configured");

const database = new pg.Client({ connectionString: process.env.DATABASE_URL });
try {
  await database.connect();
  const { rows: before } = await database.query(
    'SELECT * FROM "CapacityAssessment" ORDER BY "createdAt", "id"',
  );
  assert.ok(before.length > 0, "An existing Assessment is required");
  const target = process.env.ASSESSMENT_ID
    ? before.find((row) => row.id === process.env.ASSESSMENT_ID)
    : before[0];
  assert.ok(target, "The selected Assessment must already exist");

  const { loadCapacityAssessment, advanceAssessmentRevisionForSpike } =
    await import("../src/application/assessment-operations.ts");
  const { prismaAssessmentStore } =
    await import("../src/infrastructure/prisma-assessment-store.ts");
  const { getAssessmentLifecycle } =
    await import("../src/application/get-assessment-lifecycle.ts");

  const loaded = await loadCapacityAssessment(prismaAssessmentStore, target.id);
  assert.equal(loaded.kind, "found", "Application load must succeed");
  const expectedRevision = loaded.assessment.revision;
  assert.equal(expectedRevision, target.revision);
  const lifecycleBefore = getAssessmentLifecycle(loaded.assessment);

  const update = await advanceAssessmentRevisionForSpike(
    prismaAssessmentStore,
    target.id,
    expectedRevision,
  );
  assert.deepEqual(update, {
    kind: "updated",
    revision: expectedRevision + 1,
  });
  const stale = await advanceAssessmentRevisionForSpike(
    prismaAssessmentStore,
    target.id,
    expectedRevision,
  );
  assert.deepEqual(stale, { kind: "conflict" });

  const reloaded = await loadCapacityAssessment(
    prismaAssessmentStore,
    target.id,
  );
  assert.equal(reloaded.kind, "found");
  assert.equal(reloaded.assessment.revision, expectedRevision + 1);
  assert.deepEqual(
    getAssessmentLifecycle(reloaded.assessment),
    lifecycleBefore,
  );

  const { rows: after } = await database.query(
    'SELECT * FROM "CapacityAssessment" ORDER BY "createdAt", "id"',
  );
  assert.equal(after.length, before.length, "No records should be created");
  for (const original of before) {
    const current = after.find((row) => row.id === original.id);
    assert.ok(current);
    if (original.id === target.id) {
      assert.equal(current.revision, expectedRevision + 1);
      assert.equal(current.requestCompleteness, original.requestCompleteness);
      assert.equal(current.requestValidation, original.requestValidation);
      assert.deepEqual(current.createdAt, original.createdAt);
    } else {
      assert.deepEqual(
        current,
        original,
        "Other Assessments must be unchanged",
      );
    }
  }
  console.log(
    JSON.stringify(
      {
        assessmentId: target.id,
        recordsBefore: before.length,
        recordsAfter: after.length,
        expectedRevision,
        update,
        stale,
        storedRevision: reloaded.assessment.revision,
        requestCompleteness: reloaded.assessment.requestCompleteness,
        requestValidation: reloaded.assessment.requestValidation,
        baselineReadiness: lifecycleBefore.sections.baseline.status,
        otherAssessmentsUnchanged: true,
      },
      null,
      2,
    ),
  );
} catch (error) {
  console.error(
    error instanceof assert.AssertionError
      ? `Concurrency verification failed: ${error.message}`
      : "Concurrency verification failed: database or runtime operation unavailable",
  );
  process.exitCode = 1;
} finally {
  await globalThis.prisma?.$disconnect();
  await database.end();
}
