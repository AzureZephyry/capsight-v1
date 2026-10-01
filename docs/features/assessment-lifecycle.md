# Assessment Lifecycle

## Status

Approved lifecycle contract. Phase 3 Assessment persistence is implemented; database migration, persisted reads, and revision conflict handling have been verified. Browser create/reload/reopen verification remains pending.

## Purpose

Define the Capacity Assessment's request gate, lifecycle orientation, and section access without inventing Knowles fields or implying that unsaved work is persistent.

## Proposal / Requirement Basis

The confirmed workflow is INPUT → VALIDATE → ANALYZE → DEVELOP → SUBMISSION. Request completeness is a distinct gate before trustworthy capacity analysis. The approved Phase 2 sequencing decision delivers lifecycle UX and routing; persistent create/read/update/reopen moves to Phase 3.

## User Problem

An Industrial Engineer needs to see where capacity work stands, what is missing, why progression is blocked, and the next useful action.

## Role in CapSight

Capacity Assessment is the central work object. Request Context belongs to it. Baseline follows validated request context; Scenarios, Solution Evaluation, and Reality depend on later validated work.

## Relationships

- Overview summarizes lifecycle, request readiness, blockers, and next action.
- Request Context holds the future Knowles-validated intake fields.
- Baseline requires complete and validated request context.
- Scenarios require a valid Baseline. Solution follows capacity analysis and gap identification. Reality requires a historical plan to validate.
- CAPEX context may inform an Assessment, but CapSight does not assume a procurement workflow.

## Confirmed Behavior

- Incomplete request context may exist and remain visible.
- Incomplete or unvalidated request context never becomes calculation-ready.
- All six Assessment sections remain navigable. Unavailable sections explain their prerequisite and give a relevant path back.
- A newly created Phase 3 Assessment shell stores incomplete and unvalidated Request Context state. Until a database is configured and migrated, the application reports records as unavailable rather than implying they are saved.
- Completeness, validation, and calculation readiness are distinct concepts. No field-level completeness rule is implemented before Knowles defines the required fields.

## Open Questions

- Exact Request Context fields, definitions, requiredness, and validation rules.
- The validated transition from request completeness to request validation.
- Validated Request Context fields and editable data shape.

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
