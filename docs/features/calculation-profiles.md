# Calculation Profiles

## Status
V1 LOCKED concept; exact profile structure and publishing/governance remain OPEN.

## Purpose
Preserve the validated calculation-rule context that makes a Capacity Engine result reproducible and explainable.

## Concept
A Calculation Profile is a controlled package of validated calculation logic, potentially including formulas, business rules, rounding, defaults, dependencies, exceptions, and compatible reference context.

## Locked Principles
- Every meaningful Calculation Run retains the Calculation Profile/version that produced it.
- Historical results do not silently adopt a newer profile.
- Recalculation under changed logic creates a new calculation context.
- The Capacity Engine and Decision Trace should derive execution/explanation from the same validated rule source rather than duplicate formulas manually.
- Profile/rule changes require a stronger governance boundary than ordinary assessment inputs.

## Open Questions
- Exact contents of a profile
- How profile versions are created
- Who may create/publish/retire profiles
- Effective dating
- Compatibility with reference-data revisions
- Whether old profiles remain selectable
- Whether a profile is chosen manually or resolved by context

## Do Not Assume
- Git-like branching/merging
- guessed role names
- automatic formula inference
- formulas reverse-engineered from screenshots
