# Assessment Lifecycle

## Status

Approved Phase 2 working contract. Request field definitions and persistent Assessment records remain pending.

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
- The current Phase 2 shell has no saved Assessment record and reports request context as incomplete and unvalidated.
- Completeness, validation, and calculation readiness are distinct concepts. No field-level completeness rule is implemented before Knowles defines the required fields.

## Open Questions

- Exact Request Context fields, definitions, requiredness, and validation rules.
- The validated transition from request completeness to request validation.
- Persistent Assessment identity and editable data shape for Phase 3.

## Do Not Assume

Do not invent manufacturing or request fields, request owners, dates, identifiers, default values, completion toggles, calculation readiness, or persisted records. Do not simulate persistence in browser or process memory.

## UX / Interaction Decisions

Use INPUT, VALIDATE, ANALYZE, DEVELOP, and SUBMISSION in the lifecycle indicator. Status text accompanies color. Overview and Request Context are available; later sections open contextual not-ready views instead of dead navigation or fabricated results. Explain the first actionable prerequisite in plain language.

## Technical Boundaries

Presentation renders application-provided readiness. Domain owns request completeness and prerequisite semantics; application supplies the current pre-Knowles state. Phase 2 uses server-rendered routes without persistence, database models, or new state libraries.

## Validation Requirements

Verify that each route renders, active navigation identifies location, incomplete request context blocks Baseline, later sections explain their prerequisites, and all status/action information remains available at narrow widths and in both themes.

## Current Implementation State

Phase 2 implements the routed lifecycle shell and honest incomplete/unvalidated state. Persistent Assessment operations are deferred to Phase 3. The required request field map is TODO(KNOWLES).
