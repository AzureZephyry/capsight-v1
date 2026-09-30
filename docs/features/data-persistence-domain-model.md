# Data Persistence & Domain Model Boundaries

## Status
V1 approved working contract — September 30, 2026.

> V1 locks are correctable. Higher-authority Knowles evidence supersedes this contract when necessary.

## Purpose
Define what CapSight must conceptually remember and which domain concepts must remain distinct **without** prematurely designing database tables, ORM models, or a final schema.

## Core Principle
> Persistence follows domain meaning, not UI screens.

A screen called `Scenarios`, `Trace`, or `Dashboard` does not automatically justify a corresponding database entity.

## Domain Categories
CapSight distinguishes:

1. **Working / mutable state** — information an IE is actively preparing or revising.
2. **Calculation evidence** — historical evidence of what the Capacity Engine actually calculated.
3. **Shared governed data** — reference/master data and validated calculation logic.
4. **Derived views** — comparisons, dashboards, reports, and explanations that can be reproduced from authoritative state where appropriate.

## Capacity Assessment
- The **Capacity Assessment** remains the central persistent work object.
- It carries request/planning context and contains the Baseline, alternative Scenarios, Solution Evaluation context, and Reality Loop context.
- The assessment is mutable shared work and may use a concurrency revision number.

## Planning State
`Planning State` is an architectural concept that may represent either:
- the **Baseline**; or
- an alternative **Scenario**.

The abstraction must not erase their product distinction:
- Baseline = reference planning condition.
- Scenario = alternative planning condition.

A Planning State may be recalculated multiple times.

## Calculation Run
A **Calculation Run** is a core historical evidence concept representing one execution of the Capacity Engine against a specific planning state and calculation context.

A Calculation Run may preserve enough context to identify:
- the Planning State used;
- input snapshot;
- relevant reference context/snapshot;
- Calculation Profile/version;
- relevant intermediate values;
- applied validated rules;
- rounding/validation outcomes;
- final resource results;
- evidence required to produce Decision Trace.

### Integrity rule
- Historical Calculation Runs are not silently mutated.
- Changed planning inputs, reference context, or calculation logic produce a new calculation context/run rather than rewriting historical evidence.

## Planning State vs Calculation Run
A Scenario is not a calculation result.

Conceptually:

```text
Scenario A
├── Calculation Run 1
├── Calculation Run 2
└── Calculation Run 3
```

This avoids recreating spreadsheet naming/version patterns such as `Scenario_Final_v2`.

## Decision Trace
Decision Trace should preferably be rendered from structured calculation evidence associated with a Calculation Run rather than become a second manually-maintained calculation truth.

Whether a dedicated persisted trace representation is useful remains an implementation decision.

## Change Explanation
Change Explanation is primarily a **derived comparison** between calculation/trace evidence from two compatible planning/calculation states.

Do not create a separate source of truth for explanations unless a validated requirement justifies persistence.

## Resource Results & Capacity Gap
- Resource Requirements and Capacity Gap belong to the relevant calculated result/run.
- They are first-class business concepts but are not automatically top-level persistence entities.
- Exact representation waits for validated formulas and resource relationships.

## Reference Data & Calculation Profile Context
A historical Calculation Run must not depend only on whatever reference data/profile is current today.

Possible future implementation strategies include:
- immutable references to exact revisions;
- snapshots of relevant values/rules;
- a controlled combination of both.

Exact strategy remains OPEN.

## Reality Loop
Actual Validation / Actual Observation is distinct from Scenario.

It must reference the **exact historical Calculation Run** being validated, not merely the Scenario name, because a Scenario may have multiple Calculation Runs.

Exact actual fields, source, timing, and retention rules remain OPEN.

## Solution Evaluation
Solution Evaluation remains connected to the relevant calculated requirement/gap and the calculation context that produced it.

If a solution alternative changes planning conditions, it may connect to a Scenario/Calculation Run rather than becoming a disconnected calculation.

## CAPEX Persistence
CAPEX workflow persistence remains OPEN until Knowles validates whether CapSight:
- only supplies CAPEX-related figures;
- generates a CAPEX-ready output/report;
- tracks submission/feedback; or
- owns a deeper downstream workflow.

Do not invent a CAPEX workflow entity model before that boundary is known.

## Revision vs History vs Calculation Identity
These concepts remain separate:

- **Concurrency Revision** — protects mutable shared records from stale writes.
- **Historical Snapshot/Version** — represents a meaningful prior record state if required.
- **Audit Event** — records a meaningful action/event if required.
- **Calculation Run** — identifies one Capacity Engine execution.
- **Calculation Profile Version** — identifies the validated rule/profile context used.
- **Decision Trace** — explains how a result was produced.

A single generic `version` field must not be used to mean all of the above.

## Dashboard & Reporting
Dashboard, comparison, and most reporting surfaces should be derived from authoritative persisted domain state rather than maintain parallel calculation truth.

Caching/projections may be added later for performance without changing this principle.

## Deletion / Retention
Exact hard-delete, soft-delete, archive, retention, and immutable-history policies remain OPEN.

CapSight must not casually destroy historical calculation evidence required by Decision Trace, Change Explanation, Version-Aware Profiles, or Reality Loop.

## Stage 16 Technology Update
Stage 16 supersedes the earlier OPEN status for database/ORM direction:
- **PostgreSQL** is the preferred V1 relational database technology.
- **Prisma** is the preferred V1 ORM/data-access technology, subject to a small implementation spike.
- Provider/hosting, final schema shape, exact ID strategy, and exact relational-vs-JSON boundaries remain OPEN.
- This technology choice does not change the domain boundaries in this contract.

## Do Not Assume
Do not yet lock:
- PostgreSQL hosting/provider;
- final table/schema shape;
- exact ID format;
- exact JSON vs relational representation for snapshots/evidence;
- retention periods;
- deletion semantics;
- report persistence;
- CAPEX persistence;
- full assessment revision history.
