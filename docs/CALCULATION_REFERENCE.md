# CapSight Calculation Reference

## Status
CapSight Implementation Phase 5 is active; the Phase 5A rule capture structure remains prepared. Received deck evidence now informs discovery below. **No validated calculation rules are recorded. Do not populate from assumptions.**

This document receives Knowles-validated terminology, units, formulas, variables, dependencies, defaults, exceptions, rounding rules, and calculation evidence incrementally as authoritative operational material is validated. Its structure is not calculation truth. The [project context](../CAPSIGHT_CONTEXT.md#4-official-engineering-hackathon-timeline-and-organizational-status) records current kickoff scheduling; alignment does not guarantee that required rules or evidence will be complete. Assimilation is already active and validation may continue throughout the October 2026–March 2027 mentorship period.

## Discovery Status — Confirmed Concepts, OPEN Mathematics

The supplied Knowles **Production Capacity Requirement Calculator** presentation (September 30, 2026) confirms the relevance of demand requirement, available capacity, volume mix impact, shared tool capacity, capacity gap, Days/week scenario, and retained tool capacity when using existing capacity from other models. See [KNOWLES_REQUIREMENTS.md](KNOWLES_REQUIREMENTS.md) for source provenance, exact statements, and remaining validation questions.

The deck states **Default: 6 days/week** for the Days/week scenario. The existence of that stated default is confirmed; its applicability to assessments, valid alternatives, selection/derivation rules, and calculation use remain OPEN. It is not an executable or universal default.

These concepts have no validated mathematical definitions, units, dependency/order, rounding, exceptions, or exact formulas recorded here. No output specification or engine interface follows from the responsibility list. Discovery evidence does not populate the rule records below or unlock implementation requiring unresolved details.

## Rule
General manufacturing knowledge, screenshots, or guessed spreadsheet relationships must not be promoted into authoritative CapSight calculation logic.

This reference remains mandatory before corresponding real calculation implementation. Read it with [KNOWLES_REQUIREMENTS.md](KNOWLES_REQUIREMENTS.md), the [Capacity Engine](features/capacity-engine.md), [validation/safety](features/calculation-validation-safety.md), [testing](features/capacity-engine-testing-strategy.md), and the relevant validated operational source. Follow the requirements ledger's assimilation procedure before coding.

## Rule Capture Template

Use the following fields for each real rule when authoritative evidence is available. This is a reusable capture template, not a populated rule or an executable profile/schema design. Do not create artificial rules to fill it.

| Field | Required capture |
| --- | --- |
| Stable rule identity / name | Assign a stable semantic identity to the actual documented rule; retain it for traceability and revisions. |
| Business meaning / applicability | Record what the rule determines, its operational meaning, and the validated conditions/resource context in which it applies. |
| Formula / business rule | Record the exact validated formula or decision rule without extrapolating from example values. |
| Inputs / variable definitions | Identify each input, its definition, and its validated field classification/source. |
| Input units | Record the unit for every input and any explicitly validated conversion. |
| Output meaning / unit | Record what each result means and its validated unit. |
| Prerequisites / dependencies | Record required inputs/reference/profile context, dependent rules/intermediates, compatibility requirements, and execution order. |
| Rounding / numeric behavior | Record method, precision, point of application, and authoritative boundary evidence. Do not assume one global rounding policy. |
| Allowed / default behavior | Record validated ranges/allowed values, conditional requiredness, missing/zero handling, and any explicitly approved default with its applicability. |
| Exceptional conditions | Record exceptions/edge cases and validated failure, severity, or partial-result behavior where applicable. |
| Source / provenance | Record the workbook/reference/walkthrough locator and version, source date, validator where recorded, and the exact confirmed statement. |
| Validation date / status | Record when the statement was validated and which details remain OPEN; distinguish source date from validation date. |
| Sample / golden evidence | Link approved sanitized inputs, expected outputs, intermediate evidence where available, dependency/rounding behavior, and exceptions used. Synthetic fixtures are not golden evidence. |
| Affected contracts / context | Link the requirements entry and relevant feature/domain contracts, including applicable profile/reference version context when validated. |
| Implementation / verification status | State whether the rule is unimplemented, implemented, or verified, with the actual evidence/test reference and remaining limitations. Documentation confirmation alone is not implementation or verification. |

Unknown details in a future record must be explicitly OPEN, never guessed or silently treated as not applicable. Record “not applicable” only when supported by authoritative evidence. A partially documented rule does not authorize implementation that depends on its unresolved details.

Historical results must retain the rule/profile/reference context actually used; newer validated material must not silently rewrite old calculation evidence.

## Validated Rule Records

None yet. The discovery statements above introduce no executable formula, unit definition, applicable default rule, rounding rule, dependency, exception, or expected calculation sample value.
