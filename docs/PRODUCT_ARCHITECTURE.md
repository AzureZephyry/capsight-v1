# CapSight Product Architecture

## Status
Current approved product architecture checkpoint — September 30, 2026.

## North Star
CapSight is a centralized shared capacity-assessment environment for Knowles IE, differentiated by closed-loop traceability from request through calculation, scenario comparison, solution context, and actual validation.

## Product Flow

```text
Request Intake + Completeness
        ↓
Baseline Capacity Assessment
        ↓
Scenario Studio + Change Explanation
        ↓
Decision Trace + Version-Aware Profiles
+ Calculation Backbone
        ↓
Reality Loop
        ↓
Solution Evaluation
        ↓
CAPEX Boundary / Handoff
```

## Shared Environment

```text
Shared IE Workspace
├── Find / Continue Work
├── Operational / Planning Intelligence
├── Dashboard / Visualizations
└── Reports / History
```

## Product Identity
Centralization is the environment. Closed-loop traceability is the product identity.

## Architecture Rules
- Capacity Assessment is the primary work object.
- Baseline is the reference planning state.
- Scenarios branch from the assessment and preserve their own calculation snapshots.
- Decision Trace belongs to a calculated result.
- Change Explanation compares deterministic traces.
- Actual Result is distinct from Scenario.
- Historical calculations retain profile/version context.
- Solution Evaluation follows Capacity Gap.
- CAPEX depth remains explicitly bounded until Knowles validates it.
- Dashboard/reporting consumes authoritative stored calculation results.
- No feature may invent Knowles manufacturing rules.


## Reference / Master Data Governance — V1
- Distinguish shared reference/master data, Calculation Profiles, assessment inputs, scenario-editable inputs, and calculated outputs.
- Current reference truth must not silently rewrite historical calculation truth.
- Calculation Runs preserve the reference/profile context actually used.
- Scenario Studio may alter only Knowles-approved scenario variables.
- Exact field classification, owners, permissions, import mechanisms, and administration workflow remain OPEN.
- `CALCULATION_REFERENCE.md` is populated only from Knowles-validated terms/formulas/rules.

## Identity / Permissions / Concurrency — V1
- Architecture is identity-ready, but exact authentication and business roles remain OPEN.
- Separate authentication from authorization.
- Prefer capability/policy boundaries over guessed role checks.
- Use optimistic concurrency as the V1 direction for mutable shared records; stale writes must not silently overwrite newer work.
- Calculation Runs are immutable snapshots.
- Decision Trace, Audit History, and Record Version/Revision are separate concepts.
- Reference/profile governance requires stronger authorization boundaries than normal assessment editing.
- Do not assume live collaborative editing, presence, notifications, or WebSockets.

## V1 Correction Rule
Locked decisions are current V1 contracts, not permanent commitments. Higher-authority Knowles evidence may supersede them; update the relevant Markdown contracts and decision ledger when that occurs.


## Data Persistence & Domain Boundaries — V1
- Capacity Assessment remains the central persistent work object.
- Baseline and Scenarios are planning states; one planning state may produce multiple immutable Calculation Runs.
- Calculation Run is the core historical calculation-evidence concept.
- Decision Trace should derive from structured run evidence where feasible rather than become a second source of calculation truth.
- Change Explanation, dashboard views, comparisons, and many reports are primarily derived from authoritative domain state.
- Actual Validation references the exact historical Calculation Run being validated.
- Solution Evaluation references the relevant calculated result/gap/context.
- Current reference truth and historical calculation context remain distinct.
- Concurrency revision, audit history, historical version, Calculation Run identity, and Calculation Profile version are separate concepts.
- Exact database, ORM, schema, retention, deletion, and CAPEX persistence remain OPEN.

## Validation & Calculation Safety — V1
- Prefer refusing to calculate over presenting an unjustified result.
- Keep request completeness, field validity, business validity, calculation readiness, execution, and result integrity conceptually distinct.
- Never substitute guessed manufacturing defaults for missing values.
- Validated defaults remain traceable as defaults.
- Distinguish missing, invalid, unavailable, incompatible, and stale states.
- Domain/server validation is authoritative; client validation is UX assistance.
- Scenario dependency/combination validity must be enforceable.
- Planning State + reference context + Calculation Profile compatibility must be enforceable.
- Failed calculations do not become successful Calculation Runs.
- `0` is not missing. Units and rounding follow only Knowles-validated rules.
- When a calculated planning state is edited, its historical run remains intact and the current state requires recalculation.
- Partial-result semantics remain OPEN.
- The Knowles golden example becomes a permanent calculation-verification test once supplied.

## Capacity Engine Architecture & Testing — V1
- Capacity Engine is deterministic: the same validated planning snapshot, reference context, and Calculation Profile must produce the same result/evidence.
- The engine receives calculation context; it does not query persistence, APIs, UI state, or hidden global configuration.
- Capacity Engine remains plain TypeScript and does not persist Calculation Runs itself.
- Application orchestration loads/validates context, calls the engine, and persists successful runs.
- Prefer explicit validated TypeScript domain calculations over a premature generic rule DSL/engine.
- Rules may carry stable semantic identity and explanation metadata; executed logic and displayed explanation should share the same authoritative definition where feasible.
- Calculation evidence is emitted during execution and contains domain-meaningful steps needed by Decision Trace and Change Explanation.
- Expected domain calculation failures are structured outcomes; unexpected programming defects remain technical errors.
- Unit and precision strategies remain OPEN until authoritative formulas are known.
- The sanitized Knowles golden example becomes the primary end-to-end calculation acceptance test.
- Tests prioritize validated formulas, boundaries, rounding, dependencies/exceptions, trace evidence, comparison behavior, and historical reproducibility.
- Every confirmed calculation defect receives a regression test.
- Sensitive Knowles data must not be casually committed as test fixtures.
- AI must not implement any calculation truth still marked OPEN in `CALCULATION_REFERENCE.md`.


## Application / Workflow Architecture — V1

### One specification, two implementations
CapSight V1 has one authoritative product/domain architecture and Markdown contract set. Prince's independent codebase and the KnowLarps collaborative codebase both implement the same CapSight V1; they are not separate product variants. Neither codebase owns its own manufacturing/domain truth. Approved corrections discovered in either implementation update the shared CapSight contracts and apply to both.

### Layer responsibilities

```text
Presentation
     ↓
Application
     ↓
Domain

Infrastructure supplies technical implementations at the boundaries.
```

- **Presentation:** rendering, interaction, forms, responsive UI, charts/tables/dialogs, loading/error UX, and user intent.
- **Application:** use-case orchestration, authorization/capability checks, concurrency checks, context loading, validation coordination, domain invocation, transactional persistence, and structured outcomes.
- **Domain:** CapSight concepts, calculation/validation semantics, Capacity Engine behavior, calculation evidence, comparison semantics, and other validated business rules.
- **Infrastructure:** database/persistence, auth-provider integration, import/export adapters, and future external-system integration.

### Framework boundaries
- Server Actions and Route Handlers are adapters/entry points, not the home of CapSight business logic.
- Do not build APIs for every internal workflow without a real HTTP/external boundary.
- Prefer Server Components for server-readable/renderable work; use Client Components where genuine interaction requires them.
- Client state may hold temporary interaction/form state but is never authoritative calculation/domain truth.

### Workflow rules
- Use application operations named in CapSight language rather than generic helper/service abstractions.
- Avoid one giant `CapSightService` and avoid excessive enterprise ceremony.
- `Run Capacity Calculation` explicitly coordinates context resolution, authorization/concurrency, validation, Capacity Engine execution, and coherent persistence of a successful Calculation Run.
- Expected domain failures return structured outcomes; raw technical exceptions are not user-facing domain results.
- Server-side authorization is required for protected actions; hidden UI controls are not authorization.
- Optimistic-concurrency enforcement belongs to application/persistence workflows.
- Scenario creation, scenario calculation, comparison, Reality Loop, Solution Evaluation, and reference/profile governance remain distinct workflows.
- External/imported data is mapped and validated before becoming trusted domain data.
- Core calculation behavior must not be hidden in ORM hooks, database triggers, or framework lifecycle behavior.
- Authoritative Calculation Runs are intentionally created; editing inputs alone does not create historical runs automatically.
- Live/interactive previews may exist later, but preview state and persisted Calculation Runs remain distinct.

### Open implementation choices
Exact use-case folder structure, persistence/repository contracts, authentication provider, route/server-action split, DTO/mapping strategy, live-preview design, PostgreSQL hosting/provider, final schema, and detailed transaction/data-access implementation remain OPEN. PostgreSQL and Prisma are now the preferred V1 database/ORM direction, subject to the approved persistence spike.

## V1 Planning Boundary
The main planning sequence is capped at 18 stages. After approved Stages 14–18 (frontend interaction, information/design architecture, persistence technology, engineering/AI workflow, and implementation roadmap), implementation begins. Higher-authority Knowles evidence may revise an existing contract without requiring a new numbered stage.

## Frontend State, Interaction & Responsive Architecture — V1

### State ownership
- Separate authoritative server/domain state, form/draft state, interaction state, and derived view state.
- Persisted domain records remain server/application-owned; do not maintain the entire application as global client state.
- Draft edits may temporarily differ from persisted data and should expose meaningful clean/dirty/saving/saved/error/conflict states.
- Explicit save is the V1 default for meaningful domain mutations; autosave is not assumed.
- Client validation improves immediacy; server/application/domain validation remains authoritative.

### Interaction architecture
- Group long forms by workflow/domain meaning rather than database shape.
- Support iterative assessment navigation instead of an irreversible wizard by default.
- Preserve drafts on recoverable failures where practical and warn before silently discarding meaningful unsaved work.
- Use localized loading and scoped errors; do not turn every operation into a full-screen spinner or every failure into a toast.
- Optimistic UI is selective and should not falsely represent a domain mutation as saved before authoritative confirmation.
- Human-readable concurrency conflict handling is required.
- Editing a calculated Planning State marks current results as stale/needs recalculation while preserving historical Calculation Runs.
- Preview calculations, if introduced, remain distinct from authoritative persisted Calculation Runs.

### Client-state restraint
- Do not add a global state library by default.
- Prefer Server Components, URL state where appropriate, local draft/interaction state, and server persistence.
- Avoid unnecessary mirroring of server data into React state and effect-driven synchronization webs.
- Exact form, query/cache, schema-validation, and global-state libraries remain OPEN.

### Responsive and accessible behavior
- Responsive design is information-preserving, not merely smaller.
- Critical values, units, labels, status, warnings, calculation context, and trace access remain available on desktop, laptop, tablet, and phone.
- Tables and charts need deliberate touch/mobile strategies; critical information cannot depend on hover.
- Motion should explain state/change, must not carry unique meaning, and should respect reduced-motion preferences.
- Accessibility includes semantic controls, keyboard/focus behavior, sufficient contrast, and non-color-only status.

### Visual-design authority
Stage 14 does **not** lock CapSight's final aesthetic. Visual choices — palette, typography, density, radius, shadow, iconography, component styling, and motion character — will be chosen collaboratively during implementation according to **Prince's taste and the assistant's design judgment**, with Prince approving the direction before it becomes authoritative. Functional, responsive, accessibility, traceability, and consistency requirements remain binding regardless of aesthetic direction.


## Information Architecture, Navigation & Design-System Application — V1

### Primary product contexts
CapSight information architecture centers on two primary contexts:

```text
CapSight
│
├── Shared Workspace
│   ├── Assessments
│   ├── Search / discovery
│   └── Shared planning intelligence
│
└── Capacity Assessment
    ├── Request / Planning Context
    ├── Baseline
    ├── Scenarios
    ├── Comparison
    ├── Solution Evaluation
    ├── Reality
    └── Reporting / handoff
```

- Navigation follows the IE workflow rather than exposing every architectural feature as a top-level module.
- The Shared Workspace is the work-entry/discovery surface, not a detached analytics-only dashboard.
- Opening an Assessment preserves assessment context across its planning workflow.
- Baseline remains the reference planning state and is not presented as an ordinary scenario.
- Scenario Studio, Comparison, Solution Evaluation, and Reality remain contextual to their Assessment.
- Decision Trace is primarily reached from the calculation/result it explains.
- Formula/definition detail is progressively accessible through the Calculation Backbone.
- Capacity Gap provides a natural contextual path into Solution Evaluation.
- CAPEX remains subordinate to Solution Evaluation/handoff until Knowles validates broader ownership.
- Reality Loop remains within the Assessment lifecycle and preserves Plan → Actual linkage.
- Reporting derives from authoritative Assessment/Calculation information; exact navigation prominence remains OPEN.
- Reference/master data and Calculation Profile governance remain architecturally separate from normal assessment editing.
- Workspace discovery is search/filter/sort-ready based on validated fields.
- Deep links preserve Assessment/Planning State/Calculation Run context where applicable.
- Increasing navigation depth retains understandable location/back-navigation context.
- Responsive navigation may transform visually while preserving the same information hierarchy.

### Design-system application
- Maintain **Primitives → CapSight Patterns → Product Features** as useful design-system levels without forcing unnecessary abstraction.
- Use semantic design tokens rather than scattered literal styling values.
- Keep status terminology and visual semantics consistent across the application.
- Reuse shared interaction patterns for repeated interaction problems.
- Charts and visualizations should share a coherent CapSight information/interaction grammar.
- Figma may serve as the visual source of truth for approved UI direction, with implementation tokens aligned to it.
- CapSight should pursue a distinctive, crafted engineering-product identity rather than a generic SaaS/template appearance.

### Visual-design boundary
Exact visual design remains intentionally OPEN until implementation and will be decided collaboratively according to **Prince's taste and the assistant's design recommendations**, with Prince approving the direction. Palette, typography, density, radius, shadow, surfaces, navigation treatment, iconography, chart appearance, page composition, microinteractions, and motion character are not locked by Stage 15.

These rules apply identically to both separate codebases implementing the single CapSight V1 specification.

## Persistence Technology & Data Access — V1
- **PostgreSQL** is the preferred V1 relational database technology.
- **Prisma** is the preferred V1 ORM/data-access technology, subject to a small implementation spike before large schema investment.
- PostgreSQL provider/hosting remains OPEN.
- Prisma/database models are infrastructure representations and do not replace CapSight domain models.
- Capacity Engine remains persistence-independent and never imports or queries Prisma directly.
- Stable CapSight structural relationships may be modeled before Knowles-specific manufacturing fields are known.
- Final manufacturing schema waits for authoritative Knowles workbook/formula/field validation.
- Prefer relational structure for important searchable/governed relationships; use JSON selectively for immutable snapshots/evidence where justified.
- Calculation Runs are append-oriented historical evidence; mutable working records and historical evidence use different persistence behavior.
- Historical runs preserve traceable Calculation Profile/reference context.
- Current reference truth and historical calculation truth remain separate.
- Editable shared records retain optimistic-concurrency revision checking.
- Application workflows use database transactions when a meaningful multi-record operation must remain coherent.
- UI/framework code must not scatter direct Prisma business queries across the application.
- Avoid premature generic repository abstractions; data-access boundaries follow actual CapSight workflows.
- Targeted read models and progressive trace/evidence loading are allowed to avoid fetching complete domain graphs unnecessarily.
- Database migrations are version-controlled and reproducible; schema changes are not normally applied through manual environment edits.
- Development seed data is synthetic unless Knowles approves sanitized data; golden calculation fixtures remain separate.
- Sensitive Knowles data and secrets are not committed to Git.
- Development and competition/production databases remain separate.
- Prince's independent implementation and the team implementation use separate database instances while implementing the same CapSight V1 specification.
- Deletion/archive/retention policy remains OPEN and historical calculation evidence is treated conservatively.
- Exact provider, auth provider, ID strategy, final schema, index strategy, and backup details remain OPEN.

## Project Structure, Engineering Standards & AI Development Workflow — V1

### Source/layer organization
CapSight code is organized around the approved dependency boundaries: `app`, `presentation`, `application`, `domain`, `infrastructure`, and genuinely cross-cutting `shared` code. Folders are introduced when needed rather than pre-created for ceremony.

- `domain` stays framework/database independent.
- Capacity Engine is strictly isolated from Next.js, Prisma, React, HTTP, browser APIs, and persistence concerns.
- `app` remains thin and framework-focused.
- `shared` is not a miscellaneous home for domain logic.
- Prisma records remain infrastructure representations and require deliberate mapping/boundary usage.
- Client Components are introduced only at genuine interaction boundaries.

### Engineering standards
- TypeScript strict mode remains enabled; avoid `any`, especially in calculation/domain code.
- External/unknown inputs are validated/mapped rather than blindly cast.
- Source code uses approved CapSight terminology consistently.
- ESLint + Prettier are the preferred lint/format direction; exact cosmetic rules are scaffold-time choices.
- Keep import aliases simple and avoid unnecessary barrel/export indirection.
- Use predictable npm scripts and a pinned/documented Node version; npm + committed `package-lock.json` remain standard.
- Environment-variable access is centralized; secrets are never committed.

### Testing/tooling boundary
The Stage 12 testing strategy remains binding. **Vitest is approved for Domain/Application unit tests and future Capacity Engine unit/regression tests.** Golden-case expectations still require authoritative Knowles evidence. Unit stubs do not establish PostgreSQL or browser correctness; real persistence verification and future browser/E2E testing remain distinct layers. The browser/E2E framework is not selected; Playwright remains the preferred later direction for a small set of critical competition workflows, subject to implementation confirmation.

### Repository workflow
Both codebases implement the same CapSight V1 contracts. Prince's independent repo may use a lighter solo Git workflow; the team repo should use short-lived feature branches and lightweight review for substantial changes. Keep `main` reasonably runnable, use meaningful commits, and synchronize product truth through the shared contracts rather than automatic source copying.

### AI governance
- `CAPSIGHT_CONTEXT.md` is the mandatory substantial-work entry point.
- Read only the relevant feature/architecture contracts after context.
- Calculation work must consult `CALCULATION_REFERENCE.md`; unresolved Knowles truth must not be invented.
- AI inspects before modifying, keeps tasks bounded, and verifies significant changes with appropriate checks.
- Meaningful new dependencies require approval.
- AI cannot bypass approved architecture for convenience, silently resolve code/contract conflicts, or rewrite authoritative docs to justify implementation drift.
- Codex remains primary for architecture-sensitive/multi-file/domain/persistence work; Copilot remains preferred for localized support.
- UI work follows Prince-approved design/Figma direction rather than AI-selected aesthetics.

### Documentation/CI discipline
Use `TODO(KNOWLES)` for unresolved authoritative domain questions and clearly label synthetic/demo data. Add lightweight CI after scaffolding stabilizes. README documents project operation; authoritative product truth remains in the CapSight contracts.

## Implementation Roadmap & Competition Readiness — V1

CapSight implementation proceeds through vertical capability slices rather than simultaneous full-feature construction.

### Ordered delivery direction
1. Repository/tooling/layer foundation and verification.
2. Initial Prince-approved design direction plus responsive application shell.
3. Capacity Assessment lifecycle.
4. Small PostgreSQL + Prisma persistence spike.
5. Baseline/planning-state workflow shell without invented manufacturing logic.
6. Knowles domain assimilation and field classification, beginning with the October 14 alignment checkpoint and continuing as authoritative operational material is validated.
7. Populate `CALCULATION_REFERENCE.md` with validated truth.
8. Implement/test the plain-TypeScript Capacity Engine rule-by-rule.
9. Complete the Baseline vertical slice through persisted Calculation Run + Decision Trace.
10. Add Scenario Studio, Comparison, and deterministic Change Explanation.
11. Add Solution Evaluation and only validated CAPEX scope.
12. Add Reality Loop using exact historical Calculation Runs and validated actual fields.
13. Build Shared Workspace intelligence and reporting from authoritative stored truth.
14. Refine visual/motion/responsive quality.
15. Competition hardening and demo rehearsal.

### Domain gate
Real Capacity Engine logic is blocked until Knowles validates the relevant formulas, units, rounding, defaults, exceptions, dependencies, terminology, scenario rules, and a defensible example. Unknowns remain explicit requirements rather than guessed implementation details.

### Priority and scope protection
- Working core functionality outranks broad incomplete feature count.
- Constraint Radar remains conditional.
- CAPEX depth remains bounded by validated Knowles responsibility.
- Live integrations are not implemented without validated need/access.
- AI/team feature suggestions do not bypass the approved roadmap merely because they are easy to generate.

### Competition build selection
Prince's independent codebase and the KnowLarps team codebase remain separate implementations of the same CapSight V1 specification. Either may become the competition foundation. A later convergence checkpoint compares requirement coverage, correctness, stability, UX/responsiveness, traceability, demo readiness, technical debt, and team understanding before selecting the strongest base.

### Completion definitions
**V1 Complete:** the approved traceable capacity-planning workflow works across the supported responsive interface using validated Knowles calculations and approved downstream workflow depth.

**Competition Ready:** the selected build is **Correct, Stable, Explainable, Responsive, Demonstrable, and Team-understood**.

Stage 18 completes the planned V1 architecture/planning cycle. Future validated discoveries revise the relevant existing contracts; they do not automatically create additional planning stages.

