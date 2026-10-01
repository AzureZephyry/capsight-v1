# Capacity Engine Testing Strategy

## Status
V1 testing contract — Stage 12 approved. Test cases that require real Knowles formulas remain pending authoritative validation.

## Purpose
Protect CapSight's calculation correctness, traceability, and historical reproducibility as real Knowles rules are implemented.

## Primary Acceptance Test
The sanitized Knowles golden example, once obtained, is the primary end-to-end acceptance test:

```text
Known validated inputs/reference/profile
            ↓
       Capacity Engine
            ↓
Known expected Knowles outputs
```

CapSight is wrong if the authoritative golden case does not match.

## Testing Priorities
After the golden case, add tests for the actual validated domain model:
- formula/rule correctness;
- boundary values;
- rounding boundaries;
- validated defaults;
- dependencies and exceptions;
- scenario-validity-sensitive calculations;
- Decision Trace evidence;
- Change Explanation comparison;
- historical profile/reference reproducibility;
- Reality Loop variance calculations when defined.

## Regression Rule
Every confirmed calculation defect should receive a regression test reproducing the failure before/with the fix.

## Traceability Is Part of Correctness
A numerically correct final result with incorrect trace evidence is still a CapSight defect. Tests may verify important rule identity, values used, defaults/rounding applied, and historical profile/reference context where relevant.

## Coverage Philosophy
Do not optimize for an arbitrary coverage percentage. Prioritize domain risk, calculation boundaries, exceptions, and evidence correctness.

## Tooling
**Vitest is approved for Domain/Application unit tests and future Capacity Engine unit/regression tests.** This resolves the earlier OPEN framework decision; it does not select a browser/E2E framework.

Playwright remains the preferred later E2E direction for a small set of critical competition workflows, subject to implementation-time confirmation.

## Verification Layers

| Layer | Tool / execution | What it verifies and what remains gated |
| --- | --- | --- |
| Domain/Application unit tests | Vitest; `npm test` locally and in CI | Deterministic product rules and isolated use cases. No PostgreSQL, `DATABASE_URL`, secrets, browser, or network is required. Test stores do not prove persistence correctness. |
| Local persistence/integration verification | Manual development PostgreSQL verification, including `scripts/verify-assessment-concurrency.mjs` | Actual Application/Infrastructure updates, revision conflicts, and stored state. The concurrency probe advances an existing record's current revision; keep it outside automatic CI and use only a development database. |
| Future Knowles golden-sample acceptance/regression | Capacity Engine tests using approved sanitized evidence; Vitest for unit/regression execution | Calculation outputs, trace, and historical context against independently validated Knowles expectations. Blocked until authoritative rules and golden inputs/outputs exist; synthetic lifecycle fixtures are not a golden sample. |
| Future browser/E2E verification | Framework not selected; Playwright remains preferred subject to confirmation | Full user flows, navigation, rendering, and browser behavior. Vitest unit tests do not establish these results. |

## Current Automated Foundation

Colocated `*.test.ts` files in `src/domain` and `src/application` protect Assessment lifecycle stages and prerequisite gates, separate Baseline request/planning/calculation readiness, explicit calculation intent, blank creation, safe load failures, and read-only Workspace derivation. Fixtures contain only synthetic lifecycle state and technical metadata. Fixed dates and tiny test-only `AssessmentStore` stubs keep the suite isolated and deterministic.

`vitest.config.ts` uses the Node environment and existing `@/` source alias. `npm test` executes `vitest run` once, exits, and returns nonzero on failure; no setup/bootstrap or browser libraries are needed. CI runs the same suite without database services or credentials.

Prisma owns the initial stored revision default of **1**. A unit stub returning revision 1 only verifies preservation of store metadata; it does not verify that database default. Actual revision/default and concurrency behavior belong to real persistence verification.

`scripts/verify-baseline-workflow.mjs` is retained as an optional, non-mutating TypeScript compiler/Node module-loading smoke check. Its readiness assertions overlap the durable Vitest suite; it is not an additional database or calculation acceptance test and is not required in CI.

## Test Data Safety
Use Knowles-approved sanitized fixtures. Do not commit confidential production details, costs, internal model identifiers, or restricted workbook data to public source control without permission.

## Do Not Assume
Do not create domain test expectations from generic manufacturing knowledge or screenshots. Expected results come from validated Knowles rules/examples.
