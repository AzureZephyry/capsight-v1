# Decision Trace

## Status
V1 approved product/architecture contract.

## Purpose
Explain how a specific calculated result was produced without AI inference or a second source of calculation truth.

## Relationship
Decision Trace belongs to a specific calculated result / Calculation Run in a specific planning context.

## Layers
1. **Result** — what CapSight calculated.
2. **Trace** — how the calculation progressed.
3. **Calculation Backbone** — validated definitions, formulas/rules, variables, units, source/provenance, intermediate values, dependencies, defaults, exceptions, and rounding where applicable.
4. **Version Context** — which Calculation Profile/reference context produced the historical result.

## Deterministic Only
Decision Trace must not invent causal explanations. It exposes structured calculation evidence and validated definitions/rules.

## Change Explanation
Change Explanation compares trace evidence from two planning/calculation states and surfaces meaningful differences such as changed inputs, profile/rule version, intermediate values, rounding outcomes, and final requirements.

## Formula / Explanation Consistency
Displayed formula/rule information should come from the same validated calculation definition used by the Capacity Engine where feasible. Never maintain a manually typed explanation that can silently diverge from executed logic.

## Historical Integrity
Historical traces must reflect the formula, definitions, units, defaults, and profile/reference context that actually produced the historical result, not whatever is current today.

## Validation Evidence
Where meaningful, Decision Trace may expose validated defaults, input provenance, units, validation/rounding rules, and result-integrity context used by the calculation.

## Responsive UX
Trace is layered and contextual. Deep technical detail should be inspectable without forcing every user to read a raw log or wide table. Mobile/tablet layouts must preserve the same meaning.

## Open
Exact trace fields, export behavior, technical persistence representation, and depth of intermediate evidence remain pending Knowles validation.
