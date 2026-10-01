# CapSight V1 — Implementation Roadmap & Competition Readiness

_Status: APPROVED V1 — Stage 18_

> This document defines **implementation order and readiness gates** for the single CapSight V1 specification. It applies to both separate codebases. It does not create separate product variants.

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

Establish Baseline as the reference Planning State. Support editable planning-context structure, saving, revision tracking, and calculation-readiness state without fabricating real Knowles capacity logic. Clearly label synthetic development data.

## Phase 5 — October 14 Knowles Truth Assimilation

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

Then verify the complete Knowles golden case. Select the actual automated test framework at implementation time based on understandability and project fit.

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

Implementation Phase 3 has configured the minimal Assessment persistence slice: Prisma/PostgreSQL schema, generated client, data-access boundary, Application operations, and ID-scoped Assessment routes. PostgreSQL is now reachable, the initial migration is confirmed applied, and two incomplete/unvalidated Assessments exist. The actual Application/Infrastructure update path advanced one existing record from revision 1 to 2 and rejected a repeated expected revision 1 as a conflict; the second record remained unchanged. Browser create/reload/reopen verification remains pending. This checkpoint does not advance the manufacturing schema or calculation phases.
