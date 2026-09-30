# Calculation Validation & Safety

## Status
V1 approved working contract — September 30, 2026.

> V1 locks are correctable. Higher-authority Knowles evidence supersedes this contract when necessary.

## Purpose
Ensure CapSight never presents a polished result that it cannot justify from validated planning data, reference context, and calculation rules.

## Safety Principle
> CapSight prefers refusing to calculate over confidently presenting an unjustified result.

## Validation Layers
CapSight conceptually distinguishes:

```text
Request Completeness
        ↓
Field Validity
        ↓
Domain / Business Validity
        ↓
Calculation Readiness
        ↓
Calculation Execution
        ↓
Result Integrity
```

These must not collapse into one generic `isValid` flag.

## Request Completeness
The Stage 1 completeness gate decides whether the request contains the information required to proceed into Capacity Assessment.

Incomplete request state is a business workflow state, not merely a red field error.

## Field Validity
Where Knowles validates the rules, field validation may cover:
- requiredness;
- type/format;
- unit;
- range;
- allowed values.

Exact ranges and field rules remain OPEN until Knowles validates them.

## Domain / Business Validity
Individually valid values may still form an invalid combination. Dependencies and invalid combinations must be validated according to Knowles rules.

Scenario Studio must not treat "every field is individually valid" as proof that the scenario is valid.

## Calculation Readiness
Before the Capacity Engine executes, CapSight must be able to determine whether the selected Planning State + reference context + Calculation Profile contains everything required for a trustworthy calculation.

## No Guessed Defaults
Missing values must never silently become guessed manufacturing defaults.

Workbook examples such as uptime values or shift assumptions must not be used as defaults unless Knowles validates them as such.

When Knowles approves a default, Decision Trace should be able to identify that it was a validated default rather than a user-entered value.

## Error-State Semantics
Keep these concepts distinguishable:

- **Missing** — required information was not supplied.
- **Invalid** — a supplied value violates a validated rule.
- **Unavailable** — required source/reference information cannot currently be obtained.
- **Incompatible** — individually valid values/context cannot be used together under the applicable rules.
- **Stale** — the editable/current context is behind a newer shared/reference state.

## Severity
Conceptually distinguish:
- **Blocking** — trustworthy calculation cannot proceed.
- **Warning** — calculation may proceed under a validated condition, but attention is required.
- **Information** — explanatory context only.

Exact manufacturing severity classifications must come from Knowles.

## Validation UX
Validation feedback should make clear, where possible:
- what is wrong;
- where it occurs;
- why it matters;
- what the IE can do next.

Validation must remain contextual and responsive across devices; no required resolution path may depend on a desktop-only side panel or hover state.

## One Authoritative Validation Backbone
Avoid duplicating business rules independently across UI, server, and Capacity Engine.

Conceptually:

```text
Validated Domain Rule
├── UI guidance / immediate feedback
├── authoritative server/domain validation
├── Capacity Engine prerequisites
└── Decision Trace explanation
```

Client-side validation improves UX. Domain/server validation remains authoritative.

## Calculation Profile Responsibility
A Calculation Profile may eventually govern or reference validated:
- required inputs;
- units;
- ranges;
- dependencies;
- defaults;
- exceptions;
- rounding;
- calculation rules.

Exact representation remains OPEN until Knowles provides calculation truth.

## Reference/Profile Compatibility
The architecture must be capable of checking whether a Planning State, reference context, and Calculation Profile are compatible before calculation.

Do not silently combine incompatible historical/current contexts.

## Stale Context
A newer reference/profile context must not silently change the meaning of an existing planning state or historical run.

If current working state no longer matches the context of its last successful calculation, CapSight should make that state visible and require an explicit recalculation path.

## Calculation Failure
A failed/blocked calculation is **not** a successful Calculation Run.

Never disguise failure as:
- zero;
- `N/A` inside an otherwise successful result;
- `NaN`;
- `Infinity`;
- `undefined`;
- a raw exception/stack trace.

Technical errors must be translated into meaningful domain failure states for the IE while developer diagnostics remain separate.

## Zero vs Missing
`0`, `null`, blank, missing, and undefined values are not interchangeable.

Implementation must avoid truthy/falsy shortcuts that incorrectly reject or replace meaningful zero values.

## Units
Where units matter, the calculation model must keep the value associated with the validated unit/definition. Arbitrary unit conversion must not be invented.

## Rounding
Rounding occurs only where Knowles validates that it occurs, using the validated method for the relevant calculation/resource.

Do not globally apply `ceil`, `floor`, `round`, or another rounding strategy without domain evidence.

Decision Trace should expose applied rounding when it materially affects the final requirement.

## Partial Results
Whether one failed resource subcalculation invalidates the entire calculation or permits partial results remains OPEN pending Knowles validation.

## Planning-State Recalculation
When inputs in a previously calculated Planning State change:
- the historical Calculation Run remains intact;
- the current Planning State must no longer present that old run as if it represents the current inputs;
- the current state becomes conceptually **needs recalculation** until a new valid run is produced.

Exact UI wording remains OPEN.

## Reality Loop Validation
Actual observations receive their own validated field, unit, compatibility, and comparison rules once Knowles defines the operational process.

## Golden Example
Once Knowles supplies one sanitized sample with known inputs and expected outputs, that case becomes a permanent domain verification test for the Capacity Engine.

## Do Not Assume
Do not invent:
- validation ranges;
- default values;
- warning vs blocking classifications;
- scenario compatibility rules;
- partial-result semantics;
- unit conversions;
- rounding behavior;
- fallback formulas;
- recovery behavior that alters manufacturing meaning.
