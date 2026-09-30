# Application / Workflow Architecture

## Status
V1 LOCKED / correctable working contract — approved Stage 13.

## Purpose
Define how the Next.js application coordinates CapSight workflows without allowing framework entry points, UI components, persistence code, or external integrations to become the business/domain layer.

## Proposal / Requirement Basis
CapSight must support a centralized multi-engineer workflow while preserving calculation correctness, traceability, version context, scenario comparison, and eventual actual validation. This contract protects those behaviors from framework and persistence coupling.

## User Problem
Industrial Engineers need a coherent system where actions such as creating assessments, calculating baseline/scenarios, comparing results, and recording actual validation behave consistently and safely. The technical implementation must not create different business rules depending on which screen, API, or storage mechanism triggered the action.

## Role in CapSight
Application architecture is the orchestration bridge between the CapSight UI, domain/calculation model, and technical infrastructure.

## Relationships
- Presentation captures user intent and renders application outcomes.
- Application coordinates use cases and boundaries.
- Domain owns CapSight meaning, validation semantics, calculations, evidence, and comparisons.
- Infrastructure implements persistence/auth/import/export/integration mechanisms.
- Capacity Engine remains plain TypeScript domain logic.
- Calculation Runs are persisted only after a successful intentional calculation workflow.

## Confirmed Behavior

### One CapSight V1, two codebases
Prince's independent implementation and the KnowLarps collaborative implementation are two codebases implementing the **same CapSight V1**. They share the same authoritative Markdown contracts and Knowles/domain truth. Do not create implementation-specific requirement or feature specifications.

If either implementation exposes a genuine product/architecture flaw, review it as a CapSight-level issue. Once approved, update the shared contracts and apply the correction to both implementations.

### Dependency direction

```text
Presentation
     ↓
Application
     ↓
Domain

Infrastructure supplies technical implementations at the application/domain boundaries.
```

### Presentation
Presentation may own:
- pages/layouts;
- Server and Client Components;
- forms/dialogs/tables/charts;
- responsive rendering;
- temporary form and interaction state;
- loading/error/empty-state UX;
- translating structured application outcomes into human-readable UI.

Presentation must not own authoritative formulas, domain validation truth, permissions truth, reference truth, or persistence truth.

### Application
Application coordinates meaningful CapSight use cases, including conceptually:
- create/update Capacity Assessment;
- update planning/request context;
- create Scenario;
- run Capacity Calculation;
- compare Calculation Runs;
- record Actual Validation;
- perform Solution Evaluation;
- execute governed reference/profile changes where permitted.

Application handles orchestration concerns such as:
- authorization/capability checks;
- optimistic concurrency checks;
- loading required context;
- mapping/parsing boundary data;
- domain validation coordination;
- calling domain/Capacity Engine logic;
- coherent/transactional persistence;
- structured success/failure outcomes.

### Domain
Domain owns:
- Capacity Assessment, Baseline, Scenario, Calculation Run and related semantics;
- validated calculation/validation rules;
- Capacity Engine behavior;
- calculation evidence;
- scenario/run comparison semantics;
- Capacity Gap/resource meaning;
- Reality Loop domain behavior when validated.

Domain must not depend on React, Next.js routes/actions, HTTP, ORM/database clients, CSS, or browser APIs.

### Infrastructure
Infrastructure owns technical mechanisms such as:
- persistence/database access;
- authentication-provider integration;
- workbook/file/API adapters;
- report/export mechanics;
- future external/internal-system integrations.

Infrastructure is not a parallel source of business truth.

### Next.js adapters
- Server Actions are entry/adaptation points, not business-logic containers.
- Route Handlers follow the same rule.
- Do not create APIs for every internal workflow without a genuine HTTP/external boundary.
- Prefer Server Components for server-readable/renderable work.
- Use Client Components where genuine interaction requires them.
- Client state is temporary interaction/form state, never authoritative calculation/domain truth.

### Read vs mutation intent
Keep read/query intent distinguishable from state-changing command intent without introducing a formal CQRS framework unless future complexity justifies one.

### Domain language
Application operations should read like CapSight. Prefer focused names such as:
- `createCapacityAssessment`;
- `updatePlanningContext`;
- `createScenario`;
- `runCapacityCalculation`;
- `compareCalculationRuns`;
- `recordActualValidation`.

Avoid vague mega-services and generic helper/manager abstractions.

### Calculation workflow
Conceptually:

```text
User requests calculation
        ↓
Presentation adapter
        ↓
Application use case
        ↓
Load Assessment + Planning State
        ↓
Resolve reference context + Calculation Profile
        ↓
Authorize / concurrency check / validate readiness
        ↓
Capacity Engine
        ↓
Result + calculation evidence
        ↓
Persist one coherent successful Calculation Run
        ↓
Return structured application outcome
```

Expected domain failures are returned as structured outcomes. Raw technical exceptions remain developer/system errors, not normal engineering results.

### Transactions and concurrency
Application/Infrastructure boundaries own consistency for critical multi-record writes. Do not leave a Calculation Run with partial result/evidence state because one persistence step failed.

Optimistic concurrency belongs at this boundary. Stale edits must not silently overwrite a newer revision.

### Authorization
Protected operations require server-side authorization/capability checks. Hiding a control in the UI is not authorization.

### Distinct workflows
Do not collapse these into generic CRUD:
- Scenario creation/editing;
- Scenario calculation;
- comparison / Change Explanation;
- Actual Validation / Reality Loop;
- Solution Evaluation;
- reference/master-data governance;
- Calculation Profile governance.

### External data
Future workbook/API/internal-system inputs must pass through an adapter/mapping boundary and application/domain validation before becoming trusted CapSight data.

### Explicit business behavior
Do not hide calculation or important workflow behavior inside ORM hooks, database triggers, or framework lifecycle callbacks.

### Intentional Calculation Runs
Editing a Planning State may mark it as needing recalculation, but does not automatically create a historical Calculation Run.

Live/interactive preview calculation may be evaluated later. A preview is temporary and remains distinct from an authoritative persisted Calculation Run.

### Architectural restraint
Use enough layering to protect correctness, traceability, testing, and changeability. Do not add enterprise ceremony such as command buses, mediator frameworks, generic repository factories, or abstract factories without a concrete CapSight need.

## Open Questions
- Exact module/use-case folder layout.
- Exact repository/data-access interfaces, if any.
- Exact database transaction mechanism.
- Authentication provider and Knowles authorization model.
- Exact Server Action vs Route Handler split.
- DTO/mapping strategy.
- Live Scenario Studio preview feasibility/behavior.
- Database and ORM choice.

## Do Not Assume
- Every workflow needs an API endpoint.
- Every domain concept needs a generic repository.
- Client-side validation/permissions are authoritative.
- Saving an input automatically means creating a Calculation Run.
- External or workbook data can bypass validation.
- Two codebases mean two CapSight specifications.

## UX / Interaction Decisions
- Structured application failures must map to understandable engineering feedback rather than raw framework/database errors.
- Client interaction may be rich and animated, but authoritative domain state remains server/domain controlled.
- The exact loading/optimistic/unsaved-edit patterns are deferred to Stage 14.

## Technical Boundaries
- Next.js is the delivery/application shell, not the domain model.
- Capacity Engine remains framework/persistence independent.
- Application coordinates; Domain decides/calculates; Infrastructure implements technical mechanisms.
- Both codebases follow this same contract.

## Validation Requirements
Before implementation of a use case, verify:
1. The use case is supported by approved product/domain contracts.
2. Any required Knowles business rules are validated rather than invented.
3. Server-side authorization/concurrency/validation boundaries are respected where applicable.
4. Calculation workflows persist only successful authoritative runs.
5. Imported/external data is mapped/validated before domain acceptance.

## Current Implementation State
Planning only. No implementation is locked by this document yet.
