# Version-Aware Profiles

## Status
V1 approved product/architecture contract.

## Purpose
Preserve which validated calculation context produced a result so historical calculations remain understandable when formulas, defaults, reference data, rounding, or business rules change.

## Principle
A historical result never silently changes because a newer Calculation Profile or reference context becomes current.

## Calculation Profile
A profile is a controlled package/context of validated calculation logic. It may eventually cover formulas, required inputs, units, defaults, validation rules, dependencies, exceptions, and rounding.

Exact structure remains OPEN until Knowles validation.

## Historical Runs
Every meaningful Calculation Run retains enough profile/reference identity or snapshot context to explain what actually produced the result.

## Distinctions
Keep separate:
- input change;
- profile/rule change;
- reference-data change;
- result change.

These distinctions support trustworthy Change Explanation.

## Governance
Profile/reference changes require a stronger governance boundary than ordinary assessment input editing. Exact owners, publishing workflow, approvals, and permissions remain OPEN.
