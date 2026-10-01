# Persistence Technology & Data-Access Implementation Strategy

## Status
V1 approved working contract — September 30, 2026.

> V1 locks are authoritative working decisions, not irreversible commitments. Higher-authority Knowles evidence or a failed implementation spike may justify revising this contract through the normal decision process.

## Purpose
Define the V1 persistence technology direction and data-access discipline without prematurely inventing Knowles manufacturing fields or allowing the database/ORM to become the product architecture.

## Technology Direction
```text
Next.js App Router
        +
TypeScript / Node.js
        ↓
Application / Domain
        ↓
Prisma
        ↓
PostgreSQL
```

- **PostgreSQL** is the preferred V1 relational database.
- **Prisma** is the preferred V1 ORM/data-access technology.
- Prisma remains subject to a small implementation spike before large schema investment.
- PostgreSQL hosting/provider remains OPEN.
- Authentication provider remains OPEN.

## Domain Boundary
Prisma/database models do not replace CapSight domain concepts. The Capacity Engine must not import Prisma, query the database, read framework state, or derive manufacturing truth from persistence structure.

Application orchestration resolves and validates the required calculation context before invoking the engine.

## Schema Boundary
Separate:

1. **CapSight structural schema** — validated relationships such as Assessment, Planning State/Scenario identity, Calculation Run shell, profile/reference context, Actual Validation, and Solution Evaluation.
2. **Knowles manufacturing/calculation schema** — routing, UPH/process matrix, tooling, fixtures, equipment, volume mix, resource dependencies, and other fields whose exact structure remains pending authoritative Knowles discovery.

The first may begin earlier. The second must not be invented from screenshots/examples.

## Relational vs JSON
Prefer relational structure for domain information that needs meaningful relationships, search, filters, governance, indexing, constraints, or frequent targeted querying.

JSON may be appropriate selectively for immutable calculation snapshots/evidence where preserving the historical shape is useful. Do not use JSON merely to avoid understanding the domain.

## Historical Persistence Rules
- Calculation Runs are append-oriented historical evidence.
- A planning change creates a new calculation context/run rather than silently updating an old run.
- Mutable working records and historical evidence do not expose identical mutation behavior.
- Historical runs remain attributable to the Calculation Profile revision and relevant reference context actually used.
- Current reference truth and historical calculation truth remain separate.

## Identity & Timestamps
- Technical database IDs have no assumed business meaning.
- The Phase 3 Assessment spike uses a generated PostgreSQL UUID as a technical route/database ID. This does not define a human-readable business identifier or prescribe IDs for later entities.
- Human-readable assessment/request identifiers remain separate and must follow Knowles terminology if one exists.
- Add timestamps according to explicit semantic purpose (`created`, `updated`, `calculated`, `observed`, `effective`, etc.) rather than automatically adding every possible timestamp to every record.

## Concurrency & Transactions
- Editable shared records support optimistic-concurrency revision checking.
- Meaningful multi-record writes use PostgreSQL/Prisma transactions where needed to avoid partial persistence.
- Transaction responsibility belongs to the Application/Infrastructure boundary, not the Capacity Engine.

## Data-Access Rules
- Do not scatter direct Prisma queries through React components, Server Actions, or route handlers as business logic.
- Use focused data-access/application boundaries that follow actual CapSight workflows.
- Do not prematurely create `GenericRepository<T>`, repository factories, or comparable framework ceremony.
- Targeted read models are allowed for workspace summaries and other query-specific views.
- Avoid loading full assessment histories, all Calculation Runs, all evidence, and all related records when a view only needs a small subset.
- Decision Trace/evidence may load progressively where useful.

## Constraints & Indexes
- Database constraints should protect structural persistence invariants.
- Manufacturing/business validity remains primarily Domain-layer responsibility.
- Indexing follows validated query/search patterns rather than speculative optimization.

## Migrations
- Schema changes are version-controlled and reproducible.
- Commit migrations with the codebase.
- Do not normally change competition/production schema manually through provider dashboards.
- The two independent codebases may have different migration histories, but both implement the same approved CapSight domain specification.

## Seed & Test Data
### Development seed
Synthetic data used to make the application usable during UI/workflow development.

### Golden calculation fixture
Knowles-approved sanitized inputs and expected outputs used to verify Capacity Engine correctness.

These are separate artifacts.

Knowles-sensitive internal data must not be committed casually to Git.

## Environment Separation
At minimum distinguish:
- development;
- competition/production.

A preview/staging environment may be added if useful later.

Prince's independent CapSight V1 implementation and the KnowLarps team implementation use separate database instances while under separate development.

## Authentication Boundary
Use a suitable authentication system/provider for credentials rather than storing raw passwords ourselves. Exact provider and Knowles login requirements remain OPEN.

## Deletion / Retention
Hard delete, soft delete, archive, cascade, retention periods, and immutable-history policy remain OPEN. Preserve historical calculation evidence conservatively until Knowles gives a reason to do otherwise.

## Post-Knowles Field Mapping
Before final manufacturing schema design, classify each validated field as one of:
- `REFERENCE_DATA`
- `ASSESSMENT_INPUT`
- `SCENARIO_EDITABLE`
- `CALCULATED`
- `DEFAULT`
- `DERIVED`

Then determine ownership, versioning, domain type, persistence shape, and relationships.

## Persistence Spike
Before large schema investment, prove a minimal safe slice:

```text
Create Assessment
    ↓
Persist
    ↓
Retrieve
    ↓
Update with revision protection
```

This validates the Next.js + Prisma + PostgreSQL stack without depending on unknown manufacturing formulas.

## Do Not Assume
Do not yet lock:
- PostgreSQL provider/hosting;
- authentication provider;
- technical ID strategies beyond the Phase 3 Assessment UUID;
- final human-readable identifier format;
- full manufacturing schema;
- exact JSON snapshot/evidence boundaries;
- final indexing strategy;
- exact deletion/archive/retention rules;
- provider-specific backup/recovery details;
- staging/preview topology.

## Implementation State
Phase 3 adds a minimal `CapacityAssessment` Prisma model, generated Prisma Client, a PostgreSQL adapter, a focused Infrastructure store, and Application operations for create, load, recent list, and revision-checked update. Request completeness and validation are persisted; lifecycle/readiness are derived from those states by Domain rules. The update uses a conditional `id + revision` write and reports a stale revision as a conflict. It is a technical probe only until validated Request Context fields support meaningful edits.

The schema validates and Prisma Client generates. PostgreSQL is now reachable and its migration ledger confirms successful application of `20261001021931_init`. On October 1, 2026, the actual Application/Infrastructure concurrency path was exercised against one of two existing Assessments: expected revision 1 advanced to 2; reusing revision 1 returned `conflict`. Direct PostgreSQL inspection confirmed no further revision change, preserved incomplete/unvalidated lifecycle state, and no changes to the other Assessment. The reproducible development probe is `scripts/verify-assessment-concurrency.mjs`; each successful run advances one existing record once. Browser create/reload/reopen behavior was not reverified during this concurrency check.
