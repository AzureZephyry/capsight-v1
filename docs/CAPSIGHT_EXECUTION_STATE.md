# CapSight Execution State

_Current checkpoint: October 1, 2026_

## Purpose

Record the current implementation checkpoint, completed engineering checkpoints, active focus, and expected execution path. Read this checkpoint after the durable product context; it summarizes current position and links to the governing contracts.

| Document                                               | Role                                                                             |
| ------------------------------------------------------ | -------------------------------------------------------------------------------- |
| [CAPSIGHT_CONTEXT.md](../CAPSIGHT_CONTEXT.md)          | Durable product/context truth and source hierarchy                               |
| [IMPLEMENTATION_ROADMAP.md](IMPLEMENTATION_ROADMAP.md) | Planned implementation sequence and prerequisites                                |
| [DECISIONS.md](DECISIONS.md)                           | Durable decisions and supersessions                                              |
| CAPSIGHT_EXECUTION_STATE.md                            | Current position, completed checkpoints, active focus, and provisional next path |

## 1. Current Product Position

These are **CapSight Implementation Phases**. Engineering Hackathon phases describe the separate official event timeline in the context document.

| Phase | Implementation checkpoint            | Status                 |
| ----- | ------------------------------------ | ---------------------- |
| 0     | Repository / Development Foundation  | **COMPLETE**           |
| 1     | Visual Direction + Application Shell | **COMPLETE**           |
| 2     | Assessment Lifecycle                 | **COMPLETE**           |
| 3     | Assessment Persistence Spike         | **COMPLETE**           |
| 4     | Baseline Workflow Shell              | **COMPLETE**           |
| 5     | Knowles Truth Assimilation           | **CURRENT / ENTERING** |

COMPLETE refers to the delivered pre-Knowles scope: the persistence spike supports blank Assessments and revision protection; Baseline is a readiness shell. Manufacturing fields, user-facing edit/save transitions, and calculations remain gated. Phase 5A alignment-readiness preparation is complete: the requirements ledger and calculation capture structure are ready, with no new calculation truth assimilated.

CapSight is preparing for Phase 5. **October 14, 2026 is the first major Knowles/KEP alignment and validation checkpoint.** It does not guarantee every formula, rule, field definition, dependency, or golden sample. Validation may continue throughout the October 2026–March 2027 mentorship period. Validated operational truth gates implementation, regardless of calendar date; Phase 5 is not complete.

## 2. Pre-Alignment Engineering Work Completed

These increments strengthened the implementation foundation but **did not advance the numbered CapSight Implementation Phases**.

| Pre-alignment increment                            | Completed checkpoint                                                                               |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 1 — Product Experience                             | Shared Workspace, How CapSight Works, product identity/experience refinement                       |
| 2 — Product Hardening                              | Theme persistence, failure/loading handling, accessibility/responsive hardening, CI foundation     |
| 3 — Automated Verification Foundation              | Vitest and Domain/Application automated tests                                                      |
| 4 — Browser / E2E Verification Foundation          | Playwright and real-browser verification of database-independent product behavior                  |
| 5 — Architecture Guardrails + Developer Experience | ESLint architecture enforcement, `npm run verify`, fresh-clone/team workflow, developer onboarding |

**Completed bounded follow-ups:** `.mts` architecture-guard coverage; Create Assessment accessible-name fix; persisted Assessment browser journey verification using isolated real PostgreSQL. These are foundation follow-ups, not additional numbered implementation phases.

## 3. Current Verified Foundation

| Area                      | Available / verified scope                                                                                                                                                                                                                                                                            |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Application foundation    | Next.js App Router, strict TypeScript, layered Presentation/Application/Domain/Infrastructure boundaries, working visual direction and application shell                                                                                                                                              |
| Persistence               | PostgreSQL + Prisma; blank Assessment creation, stored lifecycle state, technical UUID routing, initial revision **1**, and verified optimistic revision-conflict protection                                                                                                                          |
| Workflow                  | Assessment lifecycle/readiness and Baseline workflow/readiness shell; request, planning, and calculation gates remain separate                                                                                                                                                                        |
| Product experience        | Shared Workspace, How CapSight Works, explicit Light/Dark theme persistence, responsive/accessibility and loading/failure-state hardening                                                                                                                                                             |
| Engineering               | GitHub Actions CI, Vitest Domain/Application tests, Playwright Chromium E2E tests, architecture lint guardrails including `.mts`, and the developer verification/onboarding workflow                                                                                                                  |
| Persisted browser journey | **Create → list → open → navigate → reload → return to Workspace → reopen** passed against real PostgreSQL in an isolated temporary database; one Assessment retained the same UUID, `INCOMPLETE` / `UNVALIDATED` state, revision **1**, and timestamps, with no duplicates or read-induced mutations |

The persisted journey was a bounded local check; its temporary resources were cleaned up and the normal development database remained unchanged. It is outside default database-free E2E CI. The latest foundation checks passed `npm run verify` and `npm run test:e2e`; see [Assessment Lifecycle](features/assessment-lifecycle.md), [testing strategy](features/capacity-engine-testing-strategy.md), and [README](../README.md) for evidence, boundaries, and commands.

Calculation correctness is **not validated**, and no validated calculation rules are recorded. Scenario Studio, Solution Evaluation, and Reality currently provide gated contextual routes, not implemented domain workflows or results.

## 4. Current Active Focus

**CURRENT FOCUS: KNOWLES ALIGNMENT PREPARATION / TRUTH MAPPING**

Major Knowles-dependent web-app implementation is intentionally held until authoritative operational evidence is available, validated, and reconciled into the affected contracts. Work continues on bug fixes, regressions, and already-validated requirements. CapSight remains active; speculative domain implementation is held while validation proceeds.

## 5. Current Implementation Gates

**BLOCKED where required truth remains OPEN or needs CLARIFICATION.** The [Knowles requirements ledger](KNOWLES_REQUIREMENTS.md) tracks the questions, evidence, provenance, and affected contracts. Do not invent:

- Request Context manufacturing fields; exact formulas; U/S meaning, unit, or relevance; units, rounding, defaults, exceptions, calculation dependencies, or Capacity Gap mathematics.
- Scenario-editable variables, ranges, dependencies, or invalid combinations; reference/profile ownership.
- Solution Evaluation rules; Reality/actual fields; the meaning of Real-Time Assessment; CAPEX detail; roles/permissions or integrations.
- Authoritative worked/golden-sample outputs. Synthetic lifecycle fixtures are not calculation acceptance evidence.

> "Unknowns are treated as requirements to validate — not blanks to fill with assumptions."

## 6. Current Expected Post-Phase-5 Sequence

**PROVISIONAL AFTER PHASE 5**

This sequence reflects the current product architecture and dependency order in the [implementation roadmap](IMPLEMENTATION_ROADMAP.md). Authoritative Knowles evidence may require phases to be **renamed, split, merged, reordered, redirected, or removed**. Reconcile the affected contracts and decisions before changing the execution path; the current plan is not frozen.

| Phase | Current expected capability               |
| ----- | ----------------------------------------- |
| 6     | Calculation Reference                     |
| 7     | Capacity Engine                           |
| 8     | Baseline Calculation Vertical Slice       |
| 9     | Decision Trace                            |
| 10    | Scenario Studio                           |
| 11    | Compare — Comparison & Change Explanation |
| 12    | Solution Evaluation                       |
| 13    | CAPEX Boundary                            |
| 14    | Reality Loop                              |
| 15    | Workspace Intelligence                    |
| 16    | Reporting                                 |
| 17    | Visual Refinement                         |
| 18    | Competition Hardening                     |

## 7. Roadmap Change Rule

When authoritative Knowles evidence contradicts an assumption, changes dependencies, reveals a missing operational stage, removes a planned requirement, changes priority, or changes calculation structure:

1. Capture the authoritative evidence and provenance.
2. Update [KNOWLES_REQUIREMENTS.md](KNOWLES_REQUIREMENTS.md).
3. Update affected feature contracts.
4. Update [CALCULATION_REFERENCE.md](CALCULATION_REFERENCE.md) where calculation truth is affected.
5. Update [DECISIONS.md](DECISIONS.md) if a durable decision changes, including supersession where appropriate.
6. Update [IMPLEMENTATION_ROADMAP.md](IMPLEMENTATION_ROADMAP.md) if the roadmap changes.
7. Update this execution checkpoint to reflect the new current path.
8. Only then implement newly validated behavior with its prerequisites satisfied.

Do not preserve obsolete plans merely because they were previously written. Follow the context's source hierarchy and V1 correction rule when resolving contradictory evidence.

## 8. Phase 5 Working Method

> "Capture their wording first. Interpret later."

Knowles evidence → capture exact wording/provenance → distinguish confirmed vs open → update KNOWLES_REQUIREMENTS → update affected contracts → populate validated Calculation Reference rules → implement only what is unlocked → verify → repeat as more evidence arrives.

Use the ledger's [assimilation procedure](KNOWLES_REQUIREMENTS.md#assimilation-procedure). Keep unresolved details and missing provenance explicit. Independently validated areas may proceed while unrelated questions remain open; unresolved dependencies still block the corresponding change.

## 9. Next Immediate Project Activity

**Knowles Alignment Preparation / Truth Map**

Prepare validation questions and evidence capture for:

1. Request Intake & Completeness
2. Capacity calculation truth
3. Calculation dependencies / sequence
4. Baseline definition
5. Capacity Gap
6. Scenario Studio rules
7. Reference/Profile data
8. Solution Evaluation
9. Reality / actual data + Real-Time Assessment
10. CAPEX boundary
11. People / responsibilities / permissions / integrations
12. Authoritative worked / golden example

This is preparation for validation, **not permission to implement these areas**. Use the existing ledger and capture templates without filling unknown answers with assumptions.

## 10. Resume Checklist

Before substantial work:

1. Read [CAPSIGHT_CONTEXT.md](../CAPSIGHT_CONTEXT.md).
2. Read this execution checkpoint.
3. Read [IMPLEMENTATION_ROADMAP.md](IMPLEMENTATION_ROADMAP.md).
4. Read relevant feature contracts.
5. Read [KNOWLES_REQUIREMENTS.md](KNOWLES_REQUIREMENTS.md) for domain work.
6. Read [CALCULATION_REFERENCE.md](CALCULATION_REFERENCE.md) for calculation work.
7. Inspect the existing implementation and repository instructions.
8. Verify whether requested behavior is validated or still OPEN.
9. Never infer missing Knowles truth.
10. Preserve approved architecture and testing boundaries.
