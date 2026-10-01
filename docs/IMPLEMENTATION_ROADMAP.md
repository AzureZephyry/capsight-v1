# CapSight V1 — Implementation Roadmap & Competition Readiness

_Status: APPROVED V1 — Stage 18_

> This document defines **implementation order and readiness gates** for the single CapSight V1 specification. It applies to both separate codebases. It does not create separate product variants.

All numbered phases in this roadmap are **CapSight Implementation Phases**. **Engineering Hackathon Phases** describe the separate official event timeline recorded in `../CAPSIGHT_CONTEXT.md`; their numbers do not map to this implementation sequence.

## Governing Rules

- Build vertically, not all-at-once.
- Do not invent Knowles manufacturing truth to unblock coding.
- `CALCULATION_REFERENCE.md` gates real Capacity Engine logic.
- Working, truthful core functionality outranks broad but incomplete scope.
- Visual design is refined collaboratively during implementation according to Prince's taste and the assistant's design recommendations.
- Both codebases follow the same CapSight contracts but may progress at different speeds.

## Phase 0 — Repository & Development Foundation

Set up and verify:

- Next.js App Router;
- TypeScript;
- npm;
- ESLint;
- Prettier;
- CSS Modules;
- approved layered source structure;
- environment handling;
- authoritative Markdown contracts;
- Git repository and basic AI instructions.

Verification gate: development server, production build, lint, and typecheck succeed with the available scaffold tooling.

## Phase 1 — Design Direction & Application Shell

Establish only enough approved visual language and Figma direction to make implementation coherent:

- initial typography direction;
- surface hierarchy;
- spacing direction;
- navigation concept;
- responsive shell;
- core UI primitives;
- Workspace shell;
- Capacity Assessment shell.

Exact aesthetics remain implementation-led and Prince-approved.

## Phase 2 — Capacity Assessment Lifecycle

Establish the Assessment lifecycle UX before persistence:

```text
Overview → Request Context → Baseline → Scenarios → Solution → Reality
```

Provide Assessment routing, the INPUT → VALIDATE → ANALYZE → DEVELOP → SUBMISSION lifecycle indicator, request completeness/readiness representation, workflow gating, contextual blocked states, and a Request Context shell. With Knowles request fields unresolved, the current request remains incomplete and unvalidated. Phase 2 does not create or save persistent Assessments.

## Phase 3 — PostgreSQL + Prisma Persistence Spike

Introduce persistent Assessment create/read/update/edit/save/reopen behavior and prove the stack with a tiny slice:

```text
Create Assessment
→ Persist
→ Retrieve
→ Update
→ Reopen
→ Revision conflict protection
```

Use only fields safe under validated requirements. Do not build the full manufacturing schema yet.

## Phase 4 — Baseline Planning Workflow Shell

Establish Baseline as the reference Planning State and distinguish request readiness, planning access, and calculation readiness. Editable planning context, saving, and revision tracking begin when authoritative planning fields exist; the current Phase 4 shell derives readiness without placeholder inputs or schema expansion. Real calculation waits for Knowles truth, and any development fixtures remain clearly synthetic.

## Phase 5 — Knowles Truth Assimilation

CapSight Implementation Phase 5 begins with the October 14, 2026 alignment checkpoint and continues as authoritative operational material is validated. October 14 is **the first major Knowles/KEP alignment and validation checkpoint**, with no guarantee that all required calculation truth will be validated that day. Validation may continue throughout Engineering Hackathon Phase 2, October 2026 to March 2027. Actual calculation implementation is gated by authoritative Knowles operational truth, regardless of calendar date.

CapSight Implementation Phase 5 may remain partially open while development continues on independently validated areas. Corresponding documentation and dependencies must be reconciled before implementation; unresolved truth required by a change still blocks that change. The calendar does not complete this phase automatically.

### CapSight Implementation Phase 5A — Knowles Alignment Readiness

Prepare for Engineering Hackathon Phase 1, **Event Kick-off and Detailed Project Alignment**, October 14, 2026. This preparation does not perform Knowles Truth Assimilation or implement application features.

- Establish [KNOWLES_REQUIREMENTS.md](KNOWLES_REQUIREMENTS.md) as the operational requirements ledger, with confirmed provenance, open validation questions, affected contracts, and golden sample requirements.
- Prepare [CALCULATION_REFERENCE.md](CALCULATION_REFERENCE.md) to capture validated rules without creating formulas or sample values.
- Define source capture → validated statement → requirements ledger → affected contract → calculation reference when applicable → durable decision when appropriate → impact review → implementation → evidence verification.

Readiness completion means the capture structure and reconciliation procedure are ready. It does not mean any unresolved operational answer has been validated.

### CapSight Implementation Phase 5 — Incremental Truth Assimilation

Before real calculation coding, capture:

- terminology and definitions;
- units;
- formulas;
- defaults;
- rounding;
- exceptions;
- dependencies;
- field ownership/classification;
- scenario variables/limits/invalid combinations;
- actual-validation semantics;
- CAPEX boundary;
- output/report expectations;
- sanitized golden example with known expected outputs.

Classify relevant fields as:

```text
REFERENCE_DATA
ASSESSMENT_INPUT
SCENARIO_EDITABLE
CALCULATED
DEFAULT
DERIVED
```

Unresolved items remain OPEN / `TODO(KNOWLES)`.

Use the validation matrix and assimilation procedure in [KNOWLES_REQUIREMENTS.md](KNOWLES_REQUIREMENTS.md). Confirmations update the affected existing contracts; informal meeting notes do not directly authorize coding.

## Phase 6 — Populate `CALCULATION_REFERENCE.md`

For each validated calculation, capture at minimum:

- stable rule identity/name;
- definition/purpose;
- input variables;
- units;
- validated formula;
- dependencies;
- defaults;
- rounding;
- exceptions;
- known expected result/example;
- source/validation context.

Do this before corresponding real engine implementation.

## Phase 7 — Capacity Engine V1

Implement plain-TypeScript domain calculations rule-by-rule. Keep React, Next.js, Prisma, HTTP, CSS, and persistence out of the engine.

For each rule:

```text
Understand → Implement → Verify → Add/Update Test
```

Then verify the complete Knowles golden case. Vitest is now approved for Domain/Application tests and future Capacity Engine unit/regression tests; authoritative Knowles rules and expected outputs still gate calculation verification. Separately approved Playwright covers browser/E2E behavior without replacing calculation evidence.

## Phase 8 — Baseline Calculation Vertical Slice

Complete the first full CapSight domain loop:

```text
Assessment
→ Baseline inputs
→ Validation/readiness
→ Capacity Engine
→ Persisted Calculation Run
→ Resource Requirements
→ Capacity Gap
→ Decision Trace
```

This is the first major competition-capable milestone.

## Phase 9 — Decision Trace Product Experience

Expose calculation evidence progressively:

```text
Result
→ Trace summary
→ Calculation steps
→ Formula / variables / units / rounding
→ Profile/version context
```

Acceptance goal: a teammate can explain where a result came from without reading source code.

## Phase 10 — Scenario Studio

Create alternatives from the Assessment/Baseline context, change only Knowles-approved scenario variables, validate, calculate, and persist separate Calculation Runs. Keep the V1 scenario relationship simple unless Knowles validates more complexity.

## Phase 11 — Comparison & Change Explanation

Compare two selected Calculation Runs and deterministically expose changed inputs, reference/profile context, meaningful intermediate evidence, resource outputs, and gaps. Do not invent causal reasoning.

## Phase 12 — Solution Evaluation

Connect validated Capacity Gap to the confirmed solution categories:

- existing capacity optimization;
- equipment transfer/reallocation;
- new tooling;
- new equipment.

Do not auto-recommend unless Knowles validates deterministic recommendation logic.

## Phase 13 — CAPEX Boundary

Implement only the CAPEX depth Knowles validates. Do not expand into procurement/ERP behavior without explicit requirement evidence.

## Phase 14 — Reality Loop

Attach validated actual observations to the exact historical Calculation Run they evaluate. Provide Plan vs Actual and deterministic variance behavior using Knowles-confirmed actual fields and rules. V1 remains manual-entry unless a real integration is validated.

## Phase 15 — Shared Workspace Intelligence

Once authoritative domain data exists, add meaningful work-oriented summaries/search/filter/sort and only validated/defensible planning intelligence. Avoid vanity metrics.

## Phase 16 — Reporting / Presentation Outputs

Implement Knowles-confirmed reports/exports/handoff artifacts while preserving relevant Assessment, Calculation Run, Scenario, and Calculation Profile/version context.

## Phase 17 — Visual Refinement

After the workflows are reliable, refine:

- visual hierarchy;
- typography/spacing/density;
- charts;
- transitions/microinteractions;
- responsive transformations;
- touch behavior;
- empty/loading/error states;
- trace and comparison readability.

## Phase 18 — Competition Hardening

### Correctness
- validated formulas, units, defaults, rounding, exceptions;
- golden case matches;
- scenario rules match Knowles truth;
- no critical unresolved `TODO(KNOWLES)` in the demo path.

### Reliability
- refresh/reload/navigation work;
- database behavior is stable;
- no obvious stale-state errors;
- recoverable failures preserve user work where designed;
- no broken routes or runtime crashes in the demo path.

### Responsive behavior
Test at minimum phone, tablet-like, laptop, and desktop widths, with deliberate attention to Scenario Studio, Comparison, Decision Trace, tables, and charts.

### Demo safety
Remove placeholder copy, fake buttons, unfinished screens, mystery loading, console/debug artifacts, and unsupported claims from the demo path.

## Demo-Safe Story

Rehearse a single clear path:

1. Centralized Capacity Assessment.
2. Validated Baseline resource requirement.
3. Decision Trace: why the result exists.
4. One approved scenario change.
5. Scenario result.
6. Deterministic comparison / Change Explanation.
7. Capacity-gap and solution context.
8. Reality Loop plan-vs-actual continuation.

This tells the CapSight story:

> **Calculate → Explain → Simulate → Validate → Decide**

Prefer a Knowles-approved sanitized dataset so the demo remains predictable and defensible.

## Competition Scope Priority

### Core
- Capacity Assessment;
- Baseline Calculation;
- Resource Requirements;
- Capacity Gap;
- Scenario Studio;
- Comparison;
- Decision Trace.

### Strong priority
- Solution Evaluation;
- Reality Loop;
- Shared Workspace.

### Conditional / validated depth
- Constraint Radar;
- deep CAPEX workflow;
- live integrations;
- advanced reporting.

If a conditional feature cannot be validated or completed safely, reduce/omit it rather than weaken the working core.

## Two-Codebase Convergence

Both codebases follow the same CapSight contracts and roadmap but may advance independently. Before competition, compare them objectively on:

- requirement coverage;
- calculation correctness;
- stability;
- UX/responsiveness;
- traceability;
- demo readiness;
- technical debt;
- team understanding.

Neither codebase is predetermined as the final submission. Prince's independent implementation remains fully eligible to become the competition foundation. Select the strongest base and intentionally integrate useful contributions where appropriate.

## V1 Complete

CapSight V1 is complete when a user can create/open a Capacity Assessment, establish a validated Baseline, produce traceable resource requirements using Knowles-approved calculations, simulate approved alternatives, compare calculation states, evaluate resulting capacity gaps, and preserve the planning context required for the approved downstream solution/actual-validation workflows across the supported responsive interface.

Knowles-required Solution Evaluation, Reality Loop, reporting, and CAPEX context must reach their approved V1 depth before submission.

## Competition Ready

The selected build must be:

> **Correct + Stable + Explainable + Responsive + Demonstrable + Team-understood**

## Feature-Creep Rule

New ideas during implementation are accepted only if justified by Knowles requirements, CapSight's approved proposition, available time, and clear competition value. Otherwise they are deferred or rejected.

## Planning Cycle Complete

**Stages 1–18 are approved.** Future validated discoveries update the relevant existing contract. The next work is **Implementation Phase 0 — Repository & Development Foundation**, not Stage 19.

## Current Implementation Checkpoint

Implementation Phase 3 has configured the minimal Assessment persistence slice: Prisma/PostgreSQL schema, generated client, data-access boundary, Application operations, and ID-scoped Assessment routes. PostgreSQL is now reachable, the initial migration is confirmed applied, and two incomplete/unvalidated Assessments exist. The actual Application/Infrastructure update path advanced one existing record from revision 1 to 2 and rejected a repeated expected revision 1 as a conflict; the second record remained unchanged. A separate bounded local Chromium create/reload/reopen check has now passed against real PostgreSQL in an isolated temporary verification database; see [Assessment Lifecycle](features/assessment-lifecycle.md) for the complete journey and preserved state. The default database-free E2E CI remains unchanged, and this check does not validate Knowles calculations. This checkpoint does not advance the manufacturing schema or calculation phases.

Phase 4 adds the Baseline Domain/read-query boundary and a focused readiness workspace. The current incomplete/unvalidated request remains the first blocker; unresolved planning inputs and calculation definitions are explained separately. Baseline's compact lifecycle links to the full Overview lifecycle. Readiness gates, persisted Baseline reload, keyboard Request Context navigation, missing-ID behavior, both themes, and narrow layouts have been verified without changing either stored Assessment. Persistence/schema, manufacturing fields, and calculation truth are unchanged. CapSight Implementation Phase 5 receives explicit integration points for validated input readiness and compatible reference/profile context; these remain `TODO(KNOWLES)` until authoritative discovery.

CapSight Implementation Phase 5A prepares `KNOWLES_REQUIREMENTS.md`, the calculation-rule capture template, and the context/roadmap entry points. No new calculation truth is assimilated and no application behavior changes in this readiness pass.

The **Pre-Alignment Product Experience Sprint — Shared Workspace + How CapSight Works** follows completed CapSight Implementation Phase 5A as a bounded, unnumbered increment. `/assessments` now presents persisted work with dates, request state, existing Domain-derived stage/readiness, contextual next actions, blank creation/reopening, and safe loading/empty/unavailable/create-failure states. `/how-capsight-works` explains the designed closed-loop product separately from currently available functionality. Product header navigation links these two experiences without changing the six Assessment workflow steps. The existing schema, dependencies, persistence operations, calculation architecture, readiness gates, and October 14 interpretation are unchanged. This increment does not complete the later workspace intelligence/reporting phases or advance Knowles-dependent implementation.

The second **Pre-Alignment Product Experience increment — Product Hardening** is also unnumbered. It adds explicit Light/Dark preference persistence with Light as the default, safe route/root failure recovery, persisted Assessment loading, focused accessibility/responsive refinements, safe runtime environment diagnostics, and database-free compilation CI. Existing verification scripts remain useful; npm audit reported no vulnerabilities at that checkpoint. No dependencies, database schema/migrations, calculation rules, readiness behavior, or Knowles-dependent scope changed in that increment.

The third **Pre-Alignment Product Experience increment — Automated Verification Foundation** is unnumbered. It selects Vitest for Domain/Application and future Capacity Engine unit/regression tests, adds deterministic lifecycle/Baseline/creation/Workspace coverage, and includes `npm test` in the existing CI checks. Tests require no database or secrets. Both manual verification scripts are retained with their distinct roles documented. Production behavior, persistence/schema, calculation architecture, Knowles truth, and the October 14 interpretation are unchanged; browser/E2E selection and Knowles golden-sample verification were separate, pending concerns at that checkpoint.

The fourth and final planned **Pre-Alignment Product Experience engineering foundation increment — Browser / E2E Verification Foundation** is unnumbered. It approves Playwright, adds a small Chromium suite for existing product navigation, How CapSight Works, theme persistence, safe recovery, keyboard access, and representative responsive layouts, and extends CI after its existing production build. The default suite requires no database or secrets and does not verify persisted Assessment journeys. Vitest, manual PostgreSQL verification, and future Knowles golden-sample acceptance/regression retain their distinct roles. This increment does not advance Knowles-dependent phases or begin the broader human-facing Documentation Sprint.

The subsequently requested fifth **Pre-Alignment increment — Architecture Guardrails + Developer Experience** is also unnumbered. Existing ESLint tooling protects the conforming layer dependencies, including future Capacity Engine isolation; `npm run verify` provides database-independent local verification; onboarding distinguishes committed migration application from migration authoring. A source-only rehearsal verifies teammate setup. The explicit CI stages and separate Vitest, Playwright, PostgreSQL, and future Knowles golden-sample roles remain intact. No production behavior, schema, dependencies, calculation truth, or October 14 interpretation changes.
