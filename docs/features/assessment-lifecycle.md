# Assessment Lifecycle

## Status

Approved lifecycle contract. Phase 3 Assessment persistence is implemented; database migration, persisted reads, and revision conflict handling have been verified. A bounded local Chromium journey against real PostgreSQL in an isolated temporary verification database has now verified persisted create/list/open/navigation/reload/reopen behavior. This check is outside default database-free E2E CI and does not validate Knowles calculations.

## Purpose

Define the Capacity Assessment's request gate, lifecycle orientation, and section access without inventing Knowles fields or implying that unsaved work is persistent.

## Proposal / Requirement Basis

The confirmed workflow is INPUT → VALIDATE → ANALYZE → DEVELOP → SUBMISSION. Request completeness is a distinct gate before trustworthy capacity analysis. The approved Phase 2 sequencing decision delivers lifecycle UX and routing; persistent create/read/update/reopen moves to Phase 3.

The supplied Knowles **Production Capacity Requirement Calculator** presentation (September 30, 2026) directly confirms this CAPEX Assessment Flow:

```text
Receive CAPEX Request (NPI or Sustaining Capacity Increase)
→ Review Request Completeness
→ Complete information?
   NO  → Return to Requestor for Completion
   YES → Capacity Assessment
       → Solution Evaluation
       → CAPEX Submission (CAPEX cost; submit to requestor and wait for feedback)
```

The Requestor shall provide these six information items:

1. Affected model line / PN.
2. If new PN: attach the routing with PDT.
3. Volume and Volume Mix.
4. Days/week scenario — deck states **Default: 6 days/week**.
5. Supplier Tooling.
6. If using existing capacity from other models: how much of the tool capacity should be retained.

These are confirmed intake labels and source conditions, not an exact field schema, validated completeness algorithm, or universally applicable default. Definitions, units, ranges, ownership, applicability, and return/resubmission/editing behavior remain OPEN in the [Knowles requirements ledger](../KNOWLES_REQUIREMENTS.md#open-questions), which records provenance and remaining questions. The deck's completeness YES branch is compatible with the current software gates; it does not remove separate request validation or establish calculation readiness.

## User Problem

An Industrial Engineer needs to see where capacity work stands, what is missing, why progression is blocked, and the next useful action.

## Role in CapSight

Capacity Assessment is the central work object. Request Context belongs to it. Baseline follows validated request context; Scenarios, Solution Evaluation, and Reality depend on later validated work.

## Relationships

- Overview summarizes lifecycle, request readiness, blockers, and next action.
- Request Context will hold the confirmed intake information once its exact field definitions and rules are validated.
- Baseline requires complete and validated request context.
- Scenarios require a valid Baseline. Solution follows capacity analysis and gap identification. Reality requires a historical plan to validate.
- CAPEX context may inform an Assessment, but CapSight does not assume a procurement workflow.

## Confirmed Behavior

- Incomplete request context may exist and remain visible.
- Incomplete or unvalidated request context never becomes calculation-ready.
- All six Assessment sections remain navigable. Unavailable sections explain their prerequisite and give a relevant path back.
- A newly created Phase 3 Assessment shell stores incomplete and unvalidated Request Context state. Until a database is configured and migrated, the application reports records as unavailable rather than implying they are saved.
- Completeness, validation, and calculation readiness are distinct concepts. The six source information items are known; field-level completeness rules remain unimplemented until their exact definitions and requiredness are validated.

## Open Questions

- Exact mapping of the six confirmed intake items to Request Context fields, definitions, requiredness, units, default applicability, and validation rules.
- The validated transition from request completeness to request validation.
- Completeness authority, return/resubmission process, whether information can change after assessment begins, and the validated editable data shape; see the ledger's precise questions.

## Do Not Assume

Do not invent manufacturing or request fields, request owners, dates, identifiers, default values, completion toggles, calculation readiness, or persisted records. Do not simulate persistence in browser or process memory.

## UX / Interaction Decisions

Use INPUT, VALIDATE, ANALYZE, DEVELOP, and SUBMISSION in the lifecycle indicator. Status text accompanies color. Overview and Request Context are available; later sections open contextual not-ready views instead of dead navigation or fabricated results. Explain the first actionable prerequisite in plain language.

Phase 4 gives Baseline a dedicated readiness workspace. Baseline uses a compact current-stage line linked to Overview's full lifecycle to preserve room for planning work. Request readiness, planning access, and calculation readiness remain distinct; see `baseline-workflow.md`. Request prerequisites and lifecycle transitions are unchanged.

## Technical Boundaries

Presentation renders application-provided readiness. Domain owns request completeness and prerequisite semantics; application supplies the current pre-Knowles state. Phase 2 uses server-rendered routes without persistence, database models, or new state libraries.

## Validation Requirements

Verify that each route renders, active navigation identifies location, incomplete request context blocks Baseline, later sections explain their prerequisites, and all status/action information remains available at narrow widths and in both themes.

## Current Implementation State

Phase 2's routed lifecycle shell now loads a Phase 3 Assessment by technical UUID. The Application layer derives readiness from persisted request state; no user-facing completeness or validation control has been added. PostgreSQL inspection and the Application/Infrastructure concurrency probe confirmed incomplete/unvalidated state remains intact when revision 1 advances to 2, Baseline remains blocked, and a repeated expected revision 1 returns a conflict without changing the stored revision. Browser create/reload/reopen verification was not repeated during this check. The required request field map and transition rules remain TODO(KNOWLES).

The bounded Phase 5 workflow refinement presents the six confirmed intake concepts, the operational completeness branch, and remaining field/rule alignment as read-only Request Context information. Solution exposes the four confirmed evaluation directions and downstream CAPEX cost/submission/feedback context while retaining its blocked state. These are explanatory sections only: no inputs, default application, completeness/return/resubmission actions, solution selection, costs, or feedback workflow were added. The six-section navigation and persisted lifecycle/readiness behavior remain unchanged.

The subsequent Phase 5 Assessment Orientation & State Visibility increment makes Overview an orientation surface: saved request completeness/validation and revision are displayed alongside calculation readiness from the existing Application query. Application-provided blockers explain calculation gating; a validated request alone still cannot calculate. The current request gate remains derived from the existing lifecycle. Overview's full INPUT → VALIDATE → ANALYZE → DEVELOP → SUBMISSION reference now names the confirmed operational steps and both completeness branches, without assigning completion from navigation or implying implemented submission/evaluation actions. Same-Assessment inspection links guide the next review; the primary link follows existing request readiness. Other routes retain their lifecycle indicators. Workspace already exposes saved request state, timestamps, first open gate, and reopen links and is unchanged.

Database-free, server-rendered Presentation regression tests use existing Vitest and React DOM to cover the three approved request-readiness states, persistent-state labels, continued calculation blocking, same-Assessment navigation, and the operational sequence/branch. These synthetic lifecycle fixtures do not prove database persistence or Knowles calculations. No Domain/Application/Infrastructure, persistence, route, package, or deployment behavior changes are introduced by this increment.

On October 1, 2026, a separate bounded local Playwright/Chromium check against the current production build and real PostgreSQL completed: empty Workspace → create exactly one blank Assessment through the UI → persisted Workspace listing → open → navigate all six workflow areas → real Baseline reload → return to Workspace → reopen the same Assessment. Its technical UUID, request completeness `INCOMPLETE`, request validation `UNVALIDATED`, revision **1**, and stored timestamps remained unchanged after creation. Baseline planning and calculation readiness stayed blocked by the incomplete/unvalidated request and unresolved planning inputs/calculation truth; downstream sections remained gated. No duplicate Assessment or product defect was found.

Only the existing committed migration was deployed to the unique temporary verification database. The temporary application/browser processes and verification files were removed, and the exact temporary database was dropped after rechecking its identity. Read-only data/schema comparisons confirmed the normal development database was unchanged, and `.env.local` was unchanged. This is local verification evidence, not permanent database-backed browser automation or default E2E CI coverage; no manufacturing data or calculation correctness was tested. Editable request transitions and later Knowles-dependent workflows remain unverified.
