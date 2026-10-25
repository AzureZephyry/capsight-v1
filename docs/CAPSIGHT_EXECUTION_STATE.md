# CapSight Execution State

_Current source checkpoint: October 25, 2026 — Immersive Engineering finalization; release promotion blocked by the Next.js security gate._

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
| 5     | Knowles Truth Assimilation           | **CURRENT / ACTIVE**   |

COMPLETE refers to the delivered pre-Knowles scope: the persistence spike supports blank Assessments and revision protection; Baseline is a readiness shell. Manufacturing fields, user-facing edit/save transitions, and calculations remain gated. Phase 5A alignment-readiness preparation is complete. Phase 5 is now actively assimilating authoritative operational evidence from the supplied **Production Capacity Requirement Calculator** presentation (September 30, 2026): intake items, completeness flow, assessment/solution/submission responsibilities, and system intent are recorded in the [requirements ledger](KNOWLES_REQUIREMENTS.md). Exact semantics/rules remain OPEN; no validated calculation rules are recorded.

The [context's timeline and organizational status](../CAPSIGHT_CONTEXT.md#4-official-engineering-hackathon-timeline-and-organizational-status) records the current kickoff and its scheduling history. Assimilation is already active and does not wait for that date. Alignment does not guarantee every formula, rule, field definition, unit, rounding rule, dependency, scenario variable, calculation profile rule, or golden sample. Validation may continue throughout the October 2026–March 2027 mentorship period. Validated operational truth gates implementation, regardless of calendar date; Phase 5 is not complete.

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

**Mentor demo source/release policy:** `main` holds development/accepted history; protected Vercel Production tracks `demo/mentor-review`. Release only an explicitly approved, verified `main` SHA by safe fast-forward after CI passes. The [deployment guide](MENTOR_DEMO_DEPLOYMENT.md) records the October 25 pre-release live audit, previous known-good deployment, Authentication/environment scope and rollback procedure. That dated snapshot establishes what was observed before promotion, not success of a future release. Local development data remains separate; Phase 5 remains **CURRENT / ACTIVE**, with the same Knowles gates.

### Approved visual/interaction milestone — October 25, 2026

**Release status: NO-GO for push/Production promotion.** The fresh dependency audit identifies an applicable Next.js Server Actions denial-of-service advisory in the existing 16.3.8 runtime. A separately reviewed security upgrade and renewed verification are required; local UI test success does not clear this gate. See the [deployment guide](MENTOR_DEMO_DEPLOYMENT.md#current-authorized-release-policy--october-25-2026). No dependency fix or hosted deployment is claimed.

**Immersive Engineering**, from Visual Lab Experiment 05, Variant B, is integrated across Shared Workspace, How CapSight Works and the six real Assessment sections. [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) governs local editorial/technical typography, CapSight palette/materials, upright orbital selection and bounded lighting, connected explanations, native topic disclosures and shared working/loading chrome. No third-party skill runtime or animation dependency was installed. Experiments remain outside the repository.

The implementation-pass evidence is **25 Vitest / 10 database-free Chromium tests passing, with typecheck/lint/format/build passing**, plus 80 route/viewport/theme checks at desktop, tablet, 375px, 320px and short landscape. Real local creation, six-section navigation, reload/reopen and Back/Forward passed; seven pre-existing local records were unchanged and one deliberate local test record was retained. Fresh release verification and read-only hosted smoke tests are separate. Physical devices, Safari/Firefox, NVDA/VoiceOver and low-end performance profiling remain unverified.

Source changes are presentation/font/test changes; persistence operations, schema, dependencies, domain/application readiness and engineering gates remain unchanged. Every open calculation prerequisite stays visible independently of annotation selection. This unnumbered milestone **does not complete Phase 5 or Phase 17** and unlocks no calculation feature.

**Finalization recheck — October 25, 2026:** `npm run verify` passed (typecheck, lint, format, 25 Vitest tests and production build); `npm run test:e2e` passed all 10 Chromium tests. Another 80 layout/theme checks passed without document overflow or hidden active navigation. Fresh safe local creation/reopen/history/six-section checks passed; a second deliberate local test record was retained. These functional results do **not** clear the separate Next.js security gate; push and Production promotion remain held. Hosted review was read-only, with existing visible record identity/state/date evidence unchanged.

## 4. Current Active Focus

**CURRENT FOCUS: KNOWLES TRUTH ASSIMILATION + ALIGNMENT PREPARATION**

Assimilate received evidence, refine unresolved questions, and prepare for November 4. Major Knowles-dependent web-app implementation is intentionally held until the evidence required by each change is validated and reconciled into the affected contracts. Work continues on bug fixes, regressions, validated requirements and separately approved visual work. The October 24 reconciliation changed documentation only; the later visual milestone changes presentation without engineering invention. Potential domain implementation unlocks still require separate review.

**Current meeting-preparation artifact:** [Mentor Alignment Playbook](MENTOR_ALIGNMENT_PLAYBOOK.md) provides the short product walkthrough, prioritized discovery questions, team-call/backup checklist, evidence capture, and post-meeting assimilation/entry review. Detailed organizational facts and provenance remain in the [context](../CAPSIGHT_CONTEXT.md#organizational-status--reconciled-october-24-2026). Preparation adds no manufacturing truth and starts no Phase 6; the requirements ledger and affected contracts remain the authorities.

## 5. Current Implementation Gates

**BLOCKED where required truth remains OPEN or needs CLARIFICATION.** The [Knowles requirements ledger](KNOWLES_REQUIREMENTS.md) tracks the questions, evidence, provenance, and affected contracts. Do not invent:

- Exact Request Context field definitions/schema and requiredness for the six confirmed intake items; exact formulas; U/S meaning, unit, or relevance; units, rounding, default applicability (including the deck-stated 6 days/week), exceptions, calculation dependencies, or Capacity Gap mathematics.
- Scenario-editable variables, ranges, dependencies, or invalid combinations; reference/profile ownership.
- Solution Evaluation rules; Reality/actual fields; Real-Time Assessment conditions, ownership, latency, and technical mechanism (rapid shop-floor adjustment intent is confirmed); CAPEX cost/feedback rules and system boundary; roles/permissions or integrations.
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

**Knowles Truth Assimilation + Alignment Preparation**

Continue assimilating received evidence and refining validation questions/evidence capture for continued alignment across:

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

The received deck's confirmed existence/business-intent statements are recorded; remaining field semantics, rules, and calculations still need validation. This is evidence reconciliation and alignment preparation, **not permission to implement these areas**. Use the existing ledger and capture templates without filling unknown answers with assumptions.

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
