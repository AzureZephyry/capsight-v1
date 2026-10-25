# Baseline Workflow

## Status

CapSight Implementation Phase 4 workflow shell. Planning fields and calculation truth await authoritative Knowles validation.

## Purpose

Make Baseline's role, prerequisites, and next action clear while preserving a boundary for later intentional calculation.

## Proposal / Requirement Basis

Baseline is the Assessment's reference planning state (D002, D119). Request Context must be complete and validated before Baseline planning. Calculation truth is gated by `CALCULATION_REFERENCE.md` (D120, D122); its prepared capture structure contains no validated rules.

The supplied Knowles **Production Capacity Requirement Calculator** presentation (September 30, 2026) directly confirms the Capacity Assessment business responsibilities:

- Validate demand requirement.
- Evaluate available capacity.
- Review volume mix impact.
- Assess shared tool capacity.
- Identify capacity gap.

These establish assessment purpose and responsibility, not mathematical definitions, calculation order, output specifications, units, persisted schema, or an engine interface. The [Knowles requirements ledger](../KNOWLES_REQUIREMENTS.md) records provenance and unresolved questions; this evidence does not unlock calculation readiness.

## User Problem

An Industrial Engineer needs to distinguish a request blocker from planning access and calculation readiness, and understand what can be done next.

## Role in CapSight

Baseline establishes the reference planning condition. Scenarios later explore alternatives from a valid Baseline. An intentional successful calculation later creates a Calculation Run with authoritative results and traceable context.

## Relationships

- Capacity Assessment supplies persisted identity, request completeness, and request validation.
- Assessment lifecycle determines whether Baseline planning is available.
- Calculation readiness additionally requires validated planning inputs and authoritative, compatible calculation reference/profile context.
- Results, capacity gap interpretation, and Decision Trace follow a successful Calculation Run; they are not Phase 4 outputs.

## Confirmed Behavior

- Request readiness distinguishes incomplete, awaiting validation, and ready.
- Baseline planning distinguishes blocked by request prerequisites from available for planning.
- Calculation readiness is separately blocked by request prerequisites, unresolved planning inputs, and unvalidated calculation definitions/profile requirements. The Domain can represent ready prerequisites for later integration without providing calculation execution.
- The current Application query supplies unresolved planning inputs and awaiting-validation calculation reference because validated definitions do not yet exist. A ready request alone does not unlock calculation.
- Current persisted Assessments remain incomplete/unvalidated; Request Context is their first open gate.
- Calculation is intentional. Reading, navigating, or changing future inputs does not execute the engine or create a run.
- This shell performs no persistence mutations and adds no Baseline schema, editable fields, formulas, previews, calculation controls, or results.

## Open Questions

Exact planning fields, requiredness, units, default applicability, formulas, rounding, dependencies, exceptions, reference/profile compatibility, and the sanitized golden example await Knowles validation. CapSight Implementation Phase 5 is active as received evidence is assimilated and continues incrementally. The [project context](../../CAPSIGHT_CONTEXT.md#4-official-engineering-hackathon-timeline-and-organizational-status) records current kickoff scheduling; alignment does not guarantee completion of domain truth. Field classification and the relevant validated reference truth must precede corresponding implementation, regardless of calendar date.

## Do Not Assume

No example manufacturing values, guessed input fields, lifecycle overrides, date-based unlock, or automatic calculation. A technical Assessment revision is not calculation history.

## UX / Interaction Decisions

The page identifies Baseline as the reference planning state, places the first request blocker and Request Context action first, then shows Request, Planning Context, and Calculation Readiness as separate labeled rows. Future calculation behavior is explained in prose; empty result cards and inactive calculation buttons are omitted.

The approved Immersive Engineering presentation makes those readiness rows selectable controls linked to an explanatory annotation. The server still supplies their actual statuses. All open calculation prerequisites remain in a separate visible list regardless of selection; changing the selected explanation never changes readiness, calculates or persists data. Shared materials/motion follow [DESIGN_SYSTEM.md](../DESIGN_SYSTEM.md), including static reduced-motion relationships.

Baseline alone uses a compact lifecycle line with the current stage and a same-Assessment link to Overview's full lifecycle. This avoids repeating the full strip above a growing engineering workspace while preserving orientation, saved identity, and navigation. Overview now presents the full operational-flow reference and saved-state orientation; other contextual routes retain the full lifecycle strip. Narrow layouts stack the readiness rows and next action while keeping their information visible. Existing theme tokens, focus states, and reduced-motion behavior apply.

## Technical Boundaries

`assessBaselineWorkflow` owns readiness semantics in Domain and reuses Assessment lifecycle gating. `getBaselineWorkflow` derives the read model from the loaded persisted Assessment and the conservative calculation-reference integration point. Presentation translates these outcomes into task language. Prisma and the Phase 3 store remain unchanged.

## Validation Requirements

Verify incomplete/unvalidated requests cannot be bypassed by otherwise ready calculation context; a validated request still cannot calculate with unresolved inputs or reference truth; reading readiness never mutates an Assessment. Verify persisted Baseline navigation/reload, missing-ID safety, theme switching, keyboard access, and narrow layouts. No calculation correctness claim is possible in Phase 4.

## Current Implementation State

Phase 4 implements the Domain/read-query boundary and a dedicated server-rendered Baseline workspace. Real request transitions, planning inputs/edit/save, Capacity Engine, Calculation Runs, outputs, and trace integration remain deferred. The concrete calculation-domain integration point is marked `TODO(KNOWLES)` in `src/application/get-baseline-workflow.ts`.

The bounded Phase 5 workflow refinement adds a read-only explanation of the five confirmed Capacity Assessment responsibilities and their unresolved calculation rules. Existing request/planning/calculation readiness remains intact; no inputs, calculations, results, or persistence mutations were introduced.

Readiness checks cover request prerequisites, independently unresolved inputs/reference truth, future prerequisite-ready semantics, and read-only Application derivation without a new test framework. The production Baseline route was verified against an existing PostgreSQL Assessment: URL reload, keyboard navigation to Request Context, Overview's full lifecycle, safe missing-ID behavior, both themes at 320/390/768/1024/1440-pixel widths, visible focus, and reduced motion passed. Direct database comparison confirmed both records remained unchanged. No calculation exists or was tested.
