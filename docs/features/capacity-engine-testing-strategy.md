# Capacity Engine Testing Strategy

## Status
V1 testing contract — Stage 12 approved. Test cases that require real Knowles formulas remain pending authoritative validation.

## Purpose
Protect CapSight's calculation correctness, traceability, and historical reproducibility as real Knowles rules are implemented.

## Primary Acceptance Test
The sanitized Knowles golden example, once obtained, is the primary end-to-end acceptance test:

```text
Known validated inputs/reference/profile
            ↓
       Capacity Engine
            ↓
Known expected Knowles outputs
```

CapSight is wrong if the authoritative golden case does not match.

## Testing Priorities
After the golden case, add tests for the actual validated domain model:
- formula/rule correctness;
- boundary values;
- rounding boundaries;
- validated defaults;
- dependencies and exceptions;
- scenario-validity-sensitive calculations;
- Decision Trace evidence;
- Change Explanation comparison;
- historical profile/reference reproducibility;
- Reality Loop variance calculations when defined.

## Regression Rule
Every confirmed calculation defect should receive a regression test reproducing the failure before/with the fix.

## Traceability Is Part of Correctness
A numerically correct final result with incorrect trace evidence is still a CapSight defect. Tests may verify important rule identity, values used, defaults/rounding applied, and historical profile/reference context where relevant.

## Coverage Philosophy
Do not optimize for an arbitrary coverage percentage. Prioritize domain risk, calculation boundaries, exceptions, and evidence correctness.

## Tooling
The unit/domain/application testing framework remains **OPEN**. **Vitest is not locked.** Choose the smallest tool the team can understand and maintain while cleanly supporting plain-TypeScript domain tests, the Knowles golden case, regression tests, and the project workflow.

Playwright remains the preferred later E2E direction for a small set of critical competition workflows, subject to implementation-time confirmation.

## Test Data Safety
Use Knowles-approved sanitized fixtures. Do not commit confidential production details, costs, internal model identifiers, or restricted workbook data to public source control without permission.

## Do Not Assume
Do not create domain test expectations from generic manufacturing knowledge or screenshots. Expected results come from validated Knowles rules/examples.
