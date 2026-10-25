# CapSight Decision Ledger

This file records current V1 architecture/product decisions. It is not a transcript. When a higher-authority Knowles source changes a decision, mark the old decision superseded and add the replacement.

## D001 — Capacity Assessment is the primary work object
**Status:** Active — V1

## D002 — Baseline is the reference planning state
**Status:** Active — V1

## D003 — Scenario Studio preserves alternatives without overwriting Baseline
**Status:** Active — V1

## D004 — Decision Trace is deterministic and result-contextual
**Status:** Active — V1

## D005 — Calculation Backbone may expose validated definitions/formulas/units/rules
**Status:** Active — V1

## D006 — Historical calculations retain Calculation Profile/version context
**Status:** Active — V1

## D007 — Reality Loop keeps actual evidence attached to the historical plan being validated
**Status:** Active — V1

## D008 — Solution Evaluation follows Capacity Gap; CAPEX depth remains bounded/open
**Status:** Active — V1

## D009 — Shared IE Workspace is work-first; dashboards are evidence-linked intelligence
**Status:** Active — V1

## D010 — Separate shared reference data, Calculation Profiles, assessment inputs, scenario inputs, and outputs
**Status:** Active — V1

## D011 — Current reference updates do not rewrite historical calculation truth
**Status:** Active — V1

## D012 — Architecture is identity-ready without invented Knowles roles
**Status:** Active — V1

## D013 — Optimistic concurrency is the V1 direction for mutable shared records
**Status:** Active — V1

## D014 — Decision Trace, Audit History, and Record Version/Revision are separate concepts
**Status:** Active — V1

## D015 — V1 locks are correctable working contracts
**Status:** Active — V1
Higher-authority Knowles evidence supersedes conflicting V1 decisions. Update contracts rather than preserving outdated architecture.


## D016 — Persistence follows domain meaning, not UI screens
**Status:** Active — V1

## D017 — Planning State and Calculation Run are distinct
**Status:** Active — V1
A Baseline or Scenario may be calculated more than once, producing multiple immutable Calculation Runs.

## D018 — Calculation Run is the core historical calculation-evidence concept
**Status:** Active — V1

## D019 — Actual Validation references the exact historical Calculation Run being validated
**Status:** Active — V1

## D020 — Derived views do not become parallel calculation truth
**Status:** Active — V1
Decision Trace, Change Explanation, dashboards, comparisons, and reports should derive from authoritative domain evidence where feasible.

## D021 — Concurrency revision, audit history, historical version, Calculation Run, and profile version remain distinct
**Status:** Active — V1

## D022 — CapSight fails safely rather than presenting unjustified calculations
**Status:** Active — V1

## D023 — Missing values never silently become guessed manufacturing defaults
**Status:** Active — V1

## D024 — Domain/server validation is authoritative
**Status:** Active — V1
Client-side validation exists for responsive UX, not as the sole business-rule gate.

## D025 — A failed calculation is not a successful Calculation Run
**Status:** Active — V1

## D026 — Units and rounding are explicit Knowles-validated calculation concerns
**Status:** Active — V1

## D027 — Editing a calculated Planning State invalidates current-result freshness without mutating historical runs
**Status:** Active — V1

## D028 — Knowles golden example becomes a permanent domain verification test
**Status:** Active — V1, pending receipt of the authoritative example.

## D029 — Capacity Engine is deterministic and environment-independent
**Status:** Active — V1
Same validated Planning State snapshot + reference context + Calculation Profile must produce the same result/evidence. Hidden current database/UI/time/global state must not alter calculation behavior.

## D030 — Capacity Engine receives domain context and never owns persistence/infrastructure
**Status:** Active — V1
The application layer loads/validates context and persists successful Calculation Runs; the engine calculates only.

## D031 — Prefer explicit TypeScript domain calculations over a premature generic rule engine/DSL
**Status:** Active — V1
Revisit only if validated Knowles requirements genuinely demand dynamic rule configuration.

## D032 — Calculation evidence is generated during engine execution
**Status:** Active — V1
Decision Trace must present actual domain evidence from execution rather than reconstructing explanations after the result exists.

## D033 — Executed rules and displayed calculation explanations share authoritative definitions where feasible
**Status:** Active — V1
This prevents formula/explanation drift.

## D034 — Knowles golden example is the primary calculation acceptance test
**Status:** Active — V1, pending receipt of the authoritative sanitized case.

## D035 — Calculation correctness includes trace/comparison reproducibility, not only final numbers
**Status:** Active — V1
Decision Trace evidence, Change Explanation behavior, and historical profile/reference reproducibility are testable correctness concerns.

## D036 — AI must stop at unknown calculation truth
**Status:** Active — V1
If an authoritative formula/unit/rule/dependency is still OPEN in `CALCULATION_REFERENCE.md`, Codex/Copilot must not invent it.


## D037 — CapSight V1 has one specification and may have two separate codebases
**Status:** Active — V1
Prince's independent implementation and the KnowLarps collaborative implementation follow the same authoritative CapSight Markdown contracts, product semantics, Knowles requirements, and calculation truth. They are not separate product variants and do not receive separate requirement/feature specifications. Either implementation may become the strongest base for the competition presentation.

## D038 — Presentation → Application → Domain is the primary dependency direction
**Status:** Active — V1
Infrastructure supplies technical implementations at application/domain boundaries. Domain logic must not depend on React, Next.js routing, HTTP, ORM/database clients, CSS, or browser APIs.

## D039 — Application layer owns CapSight use-case orchestration
**Status:** Active — V1
Application workflows coordinate authorization/capability checks, concurrency, context loading, validation, domain execution, transactional persistence, and structured outcomes. They do not replace domain/calculation logic.

## D040 — Server Actions and Route Handlers are adapters, not business-logic containers
**Status:** Active — V1
Do not bury CapSight manufacturing/domain rules inside framework entry points. APIs are created only where a real HTTP/external boundary warrants them.

## D041 — Server-first rendering; client state is temporary interaction state
**Status:** Active — V1
Prefer Server Components for server-readable/renderable work. Client Components are used for genuine interaction. Client state cannot become authoritative calculation, permission, reference, or domain truth.

## D042 — CapSight application operations use domain language and avoid mega-services
**Status:** Active — V1
Prefer focused operations such as `createCapacityAssessment`, `createScenario`, `runCapacityCalculation`, and `recordActualValidation` over generic helper/service managers or one giant `CapSightService`.

## D043 — Run Capacity Calculation is an explicit application workflow
**Status:** Active — V1
The workflow resolves the Assessment/Planning State, reference context and Calculation Profile; enforces authorization/concurrency/readiness; invokes the Capacity Engine; and persists one coherent successful Calculation Run with required evidence.

## D044 — Application/Infrastructure boundaries own transactional consistency and optimistic concurrency
**Status:** Active — V1
Critical multi-record writes must not leave partial domain state. Stale edits must not silently overwrite newer shared work.

## D045 — Protected actions require server-side authorization
**Status:** Active — V1
UI visibility is usability, not security. Exact Knowles roles/permissions remain OPEN.

## D046 — Distinct domain workflows must not collapse into generic CRUD
**Status:** Active — V1
Scenario creation/calculation, comparison, Reality Loop validation, Solution Evaluation, and governed reference/profile changes remain semantically distinct application workflows.

## D047 — Imported/external data is mapped and validated before becoming trusted CapSight data
**Status:** Active — V1
Workbook/API/internal-system input never bypasses application/domain validation merely because the source is external or official.

## D048 — Core business behavior is not hidden in ORM hooks, database triggers, or framework lifecycle code
**Status:** Active — V1
Important calculation/workflow behavior remains explicit through the Application layer.

## D049 — Authoritative Calculation Runs are intentionally created
**Status:** Active — V1
Editing inputs may mark a Planning State as needing recalculation but does not automatically create a historical Calculation Run. Temporary/live preview calculation, if later implemented, remains distinct from a persisted authoritative run.

## D050 — Architecture discipline must not become unnecessary enterprise ceremony
**Status:** Active — V1
Avoid command buses, mediator frameworks, generic repository factories, abstract factories, or comparable ceremony unless real CapSight complexity/requirements justify them.

## D051 — Main V1 planning is capped at 18 stages
**Status:** Active — V1
Stages 14–18 finish frontend interaction, information/design architecture, persistence technology, engineering/AI workflow, and the implementation/competition roadmap. After Stage 18, implementation begins. New Knowles evidence normally revises existing contracts instead of creating extra stages for minor decisions.

## D052 — Frontend state is classified by responsibility
**Status:** Active — V1
Distinguish authoritative server/domain state, form/draft state, interaction state, and derived view state. Persisted CapSight truth must not become a giant client-side store.

## D053 — Explicit save is the V1 default for meaningful domain edits
**Status:** Active — V1
Draft and persisted values are distinct. Autosave is not assumed. Client validation supports UX while server/application/domain validation remains authoritative.

## D054 — No global client-state library by default
**Status:** Active — V1
Prefer Server Components, URL state where useful, local form/interaction state, and server persistence. Add Redux/Zustand/MobX or comparable tooling only if real interaction complexity demonstrates a need.

## D055 — Calculation-result freshness must be visible
**Status:** Active — V1
Editing a previously calculated Planning State preserves the historical Calculation Run but marks the current state as requiring recalculation. Temporary preview state, if introduced, remains distinct from authoritative persisted results.

## D056 — Responsive design is information-preserving
**Status:** Active — V1
Desktop, tablet, and phone layouts may transform, but important values, units, labels, warnings, status, calculation context, and trace access may not be silently removed for smaller screens.

## D057 — Critical chart/table information cannot depend on hover
**Status:** Active — V1
Touch/mobile and keyboard-accessible alternatives must preserve the information needed to understand important visualizations and structured data.

## D058 — Frontend feedback is scoped and truthful
**Status:** Active — V1
Use localized loading, contextual errors, human-readable conflicts, restrained save success, and selective optimistic UI. The interface must acknowledge actions without falsely representing unconfirmed server/domain success.

## D059 — Accessibility is part of V1 architecture
**Status:** Active — V1
Semantic controls, keyboard/focus behavior, sufficient contrast, and non-color-only meaning are implementation requirements rather than optional polish.

## D060 — Final CapSight visual design is intentionally implementation-led
**Status:** Active — V1
Stage 14 does not lock palette, typography, density, radius, shadow, iconography, decorative treatment, component styling, or motion character. These will be chosen collaboratively during web-app implementation based on Prince's taste and the assistant's design judgment, with Prince approving the resulting direction. Approved functional/responsive/accessibility constraints remain binding.


## D061 — CapSight information architecture centers on Shared Workspace and Capacity Assessment
**Status:** Active — V1
Navigation follows the IE workflow rather than exposing every architectural feature as a top-level module. The Shared Workspace is the work-entry/discovery surface; opening an Assessment preserves contextual navigation through its planning lifecycle.

## D062 — Baseline remains the reference planning state in navigation and presentation
**Status:** Active — V1
Baseline must remain visually and semantically distinct from ordinary Scenarios.

## D063 — Scenario, Comparison, Solution Evaluation, Reality, Decision Trace, and Calculation Backbone are contextual
**Status:** Active — V1
Scenario Studio, Comparison, Solution Evaluation, and Reality remain within their Capacity Assessment. Decision Trace is primarily entered from the result it explains, and calculation definitions/formulas are progressively accessible through contextual Calculation Backbone drilldown.

## D064 — Capacity Gap leads toward Solution Evaluation; CAPEX remains downstream
**Status:** Active — V1
Capacity Gap should provide a natural contextual path into Solution Evaluation. CAPEX remains subordinate to Solution Evaluation/handoff until Knowles validates a broader product responsibility.

## D065 — Reporting derives from authoritative Assessment/Calculation truth
**Status:** Active — V1
Exact reporting navigation prominence remains OPEN.

## D066 — Reference/master data and Calculation Profile governance remain separate from normal assessment editing
**Status:** Active — V1
Exact visibility, ownership, and permissions remain OPEN pending Knowles validation.

## D067 — Workspace discovery and deep-link context are architectural requirements
**Status:** Active — V1
Workspace is search/filter/sort-ready using validated assessment fields. Deep links and drilldowns must preserve understandable Assessment/Planning State/Calculation Run context and back-navigation.

## D068 — Responsive navigation may transform visually but not semantically
**Status:** Active — V1
The underlying information hierarchy remains the same across desktop, laptop, tablet, and phone.

## D069 — Design system uses Primitives → CapSight Patterns → Product Features
**Status:** Active — V1
These are useful abstraction levels without requiring unnecessary genericization.

## D070 — Design tokens and status semantics are meaning-driven
**Status:** Active — V1
Use semantic design tokens rather than scattered literal styling values, and keep domain/status terminology plus visual semantics consistent across the application.

## D071 — Repeated interactions and visualizations share a coherent CapSight grammar
**Status:** Active — V1
Equivalent interaction problems should reuse shared product patterns, and charts/visualizations should eventually share consistent information and interaction behavior.

## D072 — Final CapSight visual design remains intentionally open until implementation
**Status:** Active — V1
Exact visual design will be decided collaboratively according to Prince's taste and the assistant's design recommendations, with Prince approving the direction. Figma may serve as the visual source of truth, and CapSight should pursue a distinctive crafted engineering-product identity rather than a generic SaaS/template appearance.

## D073 — Stage 15 information/design architecture applies identically to both CapSight V1 codebases
**Status:** Active — V1
There remains one CapSight V1 specification and one authoritative Markdown contract set.

## D074 — PostgreSQL is the preferred CapSight V1 relational database
**Status:** Active — V1
Use PostgreSQL as the default persistence direction for the centralized, shared, multi-user CapSight application. Hosting/provider remains OPEN.

## D075 — Prisma is the preferred V1 ORM/data-access technology, subject to a persistence spike
**Status:** Active — V1
Validate Next.js + Prisma + PostgreSQL through a small Assessment create/read/update-with-revision slice before large schema investment.

## D076 — Database/ORM models do not define the CapSight domain
**Status:** Active — V1
Prisma remains infrastructure. Domain concepts and the Capacity Engine must not depend on Prisma representations or queries.

## D077 — Final Knowles manufacturing schema waits for authoritative discovery
**Status:** Active — V1
Do not invent routing, process-matrix, UPH, tooling, equipment, fixture, volume-mix, resource-dependency, or comparable manufacturing schema from incomplete examples/screenshots.

## D078 — Stable CapSight structure may be persisted before manufacturing-specific fields are known
**Status:** Active — V1
Assessment, Planning State/Scenario identity, Calculation Run shell, and other validated structural relationships may be implemented without fabricating calculator inputs.

## D079 — Prefer relational structure; use JSON selectively for immutable snapshots/evidence
**Status:** Active — V1
Do not use `JSON` as a substitute for domain modeling. JSON is allowed where historical snapshot/evidence flexibility is genuinely useful.

## D080 — Calculation Runs are append-oriented historical evidence
**Status:** Active — V1
Planning changes produce new calculation context/runs rather than silent updates to historical calculated evidence.

## D081 — Historical runs retain traceable profile/reference context
**Status:** Active — V1
Calculation Profile revisions and relevant reference-data history/context must remain attributable to the run that used them; current truth does not rewrite historical truth.

## D082 — Technical IDs and business identifiers remain separate
**Status:** Active — V1
Technical database IDs carry no assumed business meaning. Exact technical ID strategy and any Knowles-facing identifier format remain OPEN.

## D083 — Editable records support optimistic-concurrency revisions
**Status:** Active — V1
Persistence must support stale-write protection for mutable shared records.

## D084 — Coherent multi-record application operations use transactions where needed
**Status:** Active — V1
Critical persistence operations such as a successful Calculation Run and its required evidence/context must not be left partially written.

## D085 — Prisma queries do not become scattered UI/framework business logic
**Status:** Active — V1
Data access follows application workflows. Avoid both direct Prisma sprawl and premature generic repository factories.

## D086 — Read models and progressive loading are allowed
**Status:** Active — V1
Workspace summaries, result pages, and trace views may use targeted query/read shapes rather than loading complete domain graphs or full histories unnecessarily.

## D087 — Migrations are version-controlled and reproducible
**Status:** Active — V1
Schema changes flow through committed migrations rather than ad hoc manual database edits as the normal mechanism.

## D088 — Synthetic seeds and golden calculation fixtures are separate
**Status:** Active — V1
Development seeds exist for app/UI development. Knowles-approved golden cases exist for calculation verification and must not be conflated with generic seed data.

## D089 — Sensitive Knowles data and secrets stay out of Git
**Status:** Active — V1
Only approved/sanitized data belongs in repository fixtures. Credentials remain environment-managed.

## D090 — Development and competition/production environments use separate databases
**Status:** Active — V1
Local/development work must not use the live competition database as its normal persistence target.

## D091 — The two CapSight V1 codebases use separate database instances
**Status:** Active — V1
Prince's independent build and the KnowLarps team build implement the same specification but must not mutate one shared development database/schema while being built independently.

## D092 — Deletion/retention remains OPEN and historical evidence is conservative
**Status:** Active — V1
Do not add universal soft-delete/cascade rules by habit. Preserve calculation evidence required for traceability until Knowles requirements justify a specific policy.

## D093 — Authentication credentials are delegated to an appropriate auth system
**Status:** Active — V1
Do not implement custom raw-password storage. Exact authentication provider remains OPEN.

## D094 — CapSight source organization follows the approved layered architecture
**Status:** Active — V1
Use `app`, `presentation`, `application`, `domain`, `infrastructure`, and genuinely cross-cutting `shared` areas as the primary project-structure direction. Create folders only when needed; do not scaffold ceremony for its own sake.

## D095 — Domain and Capacity Engine remain protected from framework/persistence dependencies
**Status:** Active — V1
`domain` remains framework/database independent, and Capacity Engine receives especially strict isolation from Next.js, React, Prisma, HTTP, browser APIs, and persistence concerns.

## D096 — `app` stays thin; `shared` is not a junk drawer
**Status:** Active — V1
Framework entry points delegate to application/domain boundaries, while CapSight-specific business logic must not be hidden in generic helpers/shared utilities.

## D097 — TypeScript strictness and validated external boundaries are required
**Status:** Active — V1
Keep strict mode enabled, avoid `any` in domain/calculation code, and prefer `unknown` plus explicit validation/mapping for external/raw inputs.

## D098 — Code uses approved CapSight terminology
**Status:** Active — V1
Do not casually rename core concepts such as Capacity Assessment, Baseline, Scenario, Calculation Run, Decision Trace, Reality Loop, or Calculation Profile because an implementation agent prefers different terminology.

## D099 — ESLint + Prettier are the preferred formatting/lint direction
**Status:** Active — V1
Exact cosmetic rules remain scaffold-time choices. Use a simple import-alias strategy and avoid unnecessary barrel complexity.

## D100 — Testing remains mandatory but the unit/domain testing framework is OPEN
**Status:** Superseded by D146 — earlier framework decision retained for history
Vitest is **not** locked. Select a testing framework during implementation based on team familiarity, maintainability, and ability to support the Stage 12 golden-case/domain/regression strategy. Playwright remains the preferred later E2E direction for critical competition flows, subject to confirmation.

## D101 — Node/npm environment is reproducible
**Status:** Active — V1
Pin/document the supported Node version, use npm, commit `package-lock.json`, expose predictable project scripts, centralize environment access, and keep real secrets out of Git.

## D102 — The two codebases share engineering architecture but may use different Git workflows
**Status:** Active — V1
Prince's independent repo may use a lighter solo workflow; the team repo should use short-lived feature branches and lightweight review for substantial changes. Keep `main` reasonably runnable/demoable.

## D103 — The two repositories synchronize through the CapSight specification, not automatic source copying
**Status:** Active — V1
Implementation discoveries that affect the product are evaluated as CapSight decisions, documented once in the shared contracts, then intentionally applied to both codebases.

## D104 — `CAPSIGHT_CONTEXT.md` is the mandatory AI entry point for substantial work
**Status:** Active — V1
After context, AI reads only the relevant authoritative contracts for the task rather than indiscriminately loading all documentation.

## D105 — Calculation truth is a hard AI gate
**Status:** Active — V1
Calculation work must consult `CALCULATION_REFERENCE.md` and relevant engine/validation contracts. Unknown Knowles formulas, terminology, units, defaults, ranges, dependencies, or business rules must not be invented.

## D106 — AI inspects before modifying and may not bypass approved architecture
**Status:** Active — V1
Substantial AI work must inspect relevant code/contracts, remain bounded in scope, surface code/contract conflicts, and request approval for meaningful new dependencies or architecture changes.

## D107 — Authoritative Markdown cannot be casually rewritten to justify implementation drift
**Status:** Active — V1
If implementation reveals a problem, report and evaluate the architecture/product decision first. Update contracts intentionally only after the correction is approved.

## D108 — Codex and Copilot retain distinct default roles
**Status:** Active — V1
Codex is primary for architecture-sensitive, multi-file, domain, persistence, calculation, deep-debugging/refactor work. Copilot is preferred for localized support, repetitive changes, CSS, boilerplate, minor fixes, and simple tests.

## D109 — UI implementation follows approved design direction rather than AI-selected aesthetics
**Status:** Active — V1
Figma/design-system decisions approved by Prince remain authoritative for implementation. AI must not invent a competing visual direction.

## D110 — Significant implementation work includes verification
**Status:** Active — V1
Use appropriate available lint/typecheck/test/build checks according to task scope. Compilation alone does not prove domain or calculation correctness.

## D111 — Unresolved Knowles truth and synthetic data are explicitly marked
**Status:** Active — V1
Use `TODO(KNOWLES)` for unresolved authoritative domain questions; `TODO(V1)` may mark limited implementation work. Synthetic/demo data must identify itself and never masquerade as validated Knowles truth.

## D112 — Add lightweight CI after scaffold stabilization
**Status:** Active — V1
CI should run the available reproducibility/quality checks appropriate to the established toolchain without introducing unnecessary enterprise ceremony.

## D113 — README is operational documentation; CapSight contracts remain product authority
**Status:** Active — V1
README explains setup/run/test workflows. `CAPSIGHT_CONTEXT.md` and the authoritative Markdown contracts define the product/architecture truth.

## D114 — CapSight implementation proceeds through vertical capability slices
**Status:** Active — V1
Do not attempt the dashboard, calculator, scenarios, trace, Reality Loop, reporting, persistence, and polish simultaneously. Build a verified foundation and then complete meaningful capability slices in dependency order.

## D115 — Repository/tooling foundation is verified before feature expansion
**Status:** Active — V1
Scaffold Next.js/TypeScript/npm/lint/format/CSS Modules/layer structure/environment/documentation first and verify development/build/lint/typecheck behavior before major feature work.

## D116 — Visual direction and application shell begin early, but exact aesthetics remain implementation-led
**Status:** Active — V1
Establish enough Prince-approved visual language, responsive shell, navigation, primitives, and Figma direction to guide consistent implementation. Stage 18 does not replace the existing rule that exact visual design is decided collaboratively during implementation.

## D117 — Capacity Assessment lifecycle is the first real product workflow
**Status:** Active — V1
Create/open/edit/save/reopen Assessment work before manufacturing calculations are implemented. Only validated/safe metadata is used before Knowles field discovery.

## D118 — PostgreSQL + Prisma starts as a small persistence spike
**Status:** Active — V1
Prove Assessment create/read/update plus revision-conflict protection before large schema investment. Do not build the full manufacturing schema during the spike.

## D119 — Baseline workflow may exist before real Knowles calculations without fabricated domain truth
**Status:** Active — V1
Build Planning State/Baseline workflow structure and readiness concepts using clearly synthetic development data where needed; do not invent real Knowles formulas, defaults, or fields.

## D120 — Authoritative Knowles operational truth gates calculation implementation
**Status:** Active — V1
Real Capacity Engine implementation waits for authoritative Knowles discovery of terminology, formulas, units, rounding, defaults, exceptions, dependencies, scenario rules, and representative expected outputs.

**Historical scheduling context — as recorded at the October 7, 2026 checkpoint:**

The newer team communication postpones kick-off/project alignment from October 14 to **October 28, 2026**, now the first major Knowles/KEP live kick-off/alignment checkpoint. The earlier kickoff date is superseded; October 28 is not a guaranteed date for complete calculation-domain validation. CapSight Implementation Phase 5 is already active as authoritative evidence arrives and is assimilated. Validation may continue throughout the Engineering Hackathon mentorship/development period from October 2026 to March 2027. The calendar date does not unlock implementation; the corresponding authoritative operational truth must be validated. See the evidence provenance in [KNOWLES_REQUIREMENTS.md](KNOWLES_REQUIREMENTS.md).

**Organizational update — October 24, 2026:** The current kickoff schedule and rescheduling provenance are maintained in the [project context](../CAPSIGHT_CONTEXT.md#4-official-engineering-hackathon-timeline-and-organizational-status). The dates above describe the earlier checkpoint; D120's calculation-validation gate is unchanged.

## D121 — Knowles fields are classified before final manufacturing-schema design
**Status:** Active — V1
Classify relevant fields as `REFERENCE_DATA`, `ASSESSMENT_INPUT`, `SCENARIO_EDITABLE`, `CALCULATED`, `DEFAULT`, or `DERIVED` before locking final persistence/input structures.

## D122 — `CALCULATION_REFERENCE.md` gates corresponding real calculation implementation
**Status:** Active — V1
Populate validated formula/definition/unit/rounding/dependency truth before asking Codex/Christan to implement that calculation. Unknown items remain OPEN / `TODO(KNOWLES)`.

## D123 — Capacity Engine is implemented rule-by-rule and verified against Knowles truth
**Status:** Active — V1
Understand, implement, and verify validated rules incrementally before combining them into the golden end-to-end calculation case.

## D124 — Testing framework selection remains implementation-time and familiarity-driven
**Status:** Superseded by D146 — earlier framework decision retained for history
Automated verification remains required, but the unit/domain/application test framework is not pre-locked. Select a tool the team can understand and maintain while supporting the golden case, rule tests, and regressions.

## D125 — Baseline Calculation is the first complete domain vertical slice
**Status:** Active — V1
The first full slice is Assessment → validated Baseline inputs → readiness validation → Capacity Engine → immutable Calculation Run → resource requirements/capacity gap → Decision Trace.

## D126 — Decision Trace is completed from execution evidence before advanced scenario work depends on it
**Status:** Active — V1
Traceability is part of calculation correctness and the TRUST pillar, not optional polish added after scenarios.

## D127 — Scenario Studio follows the working Baseline/Engine foundation
**Status:** Active — V1
Scenarios modify only Knowles-approved scenario variables, validate, and produce their own Calculation Runs without overwriting Baseline truth.

## D128 — Comparison and Change Explanation follow persisted calculation evidence
**Status:** Active — V1
Comparison is deterministic and identifies changed inputs/profile/reference/intermediate/result context without inventing business causality.

## D129 — Solution Evaluation follows validated Capacity Gap
**Status:** Active — V1
Implement Solution Evaluation after trustworthy calculated gaps exist and use only the confirmed solution categories/rules Knowles validates.

## D130 — CAPEX implementation remains strictly bounded by Knowles validation
**Status:** Active — V1
Do not expand CapSight into procurement/ERP or deeper CAPEX workflow unless Knowles explicitly validates that scope.

## D131 — Reality Loop follows stable planning/calculation history
**Status:** Active — V1
Implement actual validation against exact historical Calculation Runs using Knowles-validated actual fields and comparison rules; do not invent live feeds, root-cause AI, or self-learning behavior.

## D132 — Shared Workspace intelligence is derived from authoritative CapSight data
**Status:** Active — V1
Develop workspace/dashboard intelligence after trustworthy domain data exists rather than inventing early vanity KPIs.

## D133 — Reporting implements validated Knowles communication/output needs
**Status:** Active — V1
Reports preserve relevant Assessment/Calculation Run/profile/scenario context and do not become a second calculation truth.

## D134 — Visual polish follows core workflow reliability
**Status:** Active — V1
Refine hierarchy, motion, charts, responsive behavior, empty/loading states, touch behavior, trace readability, and comparisons after the underlying workflows are reliable.

## D135 — Competition hardening explicitly verifies correctness, resilience, and responsiveness
**Status:** Active — V1
Before presentation, verify validated formulas/units/rounding, golden-case outputs, navigation/refresh/database resilience, stale-state behavior, draft safety, and critical responsive flows.

## D136 — CapSight uses a rehearsed demo-safe path
**Status:** Active — V1
The live demo should tell the product story through Assessment → Baseline → Decision Trace → Scenario → Comparison → Gap/Solution context → Reality Loop rather than randomly touring screens.

## D137 — Demo/test data should preferably be Knowles-approved and sanitized
**Status:** Active — V1
Use predictable, defensible sanitized data where possible; do not casually demo with sensitive production information or invented “Knowles” truth.

## D138 — Working core outranks broad incomplete feature count
**Status:** Active — V1
Assessment, Baseline Calculation, Resource Requirements, Capacity Gap, Scenario Studio, Comparison, and Decision Trace are core. Solution Evaluation, Reality Loop, and Shared Workspace are strong priorities. Conditional features must not destabilize the core.

## D139 — Constraint Radar remains conditional through implementation
**Status:** Active — V1
Reduce or omit Constraint Radar if Knowles does not validate meaningful interdependencies and defensible binding-constraint logic.

## D140 — Implementation-time feature creep requires explicit value validation
**Status:** Active — V1
New AI/team feature suggestions are accepted only when justified by Knowles requirements, CapSight's approved proposition, available time, and clear competition value; otherwise defer or reject them.

## D141 — Both codebases follow the same roadmap but may progress independently
**Status:** Active — V1
Prince's independent build and the KnowLarps team build implement the same contracts and sequencing principles without artificial pace synchronization.

## D142 — A later convergence checkpoint selects the strongest competition foundation
**Status:** Active — V1
Compare both implementations on requirement coverage, calculation correctness, stability, UX/responsiveness, traceability, demo readiness, technical debt, and team understanding. Neither codebase is predetermined as the final submission, and Prince's independent build remains fully eligible.

## D143 — CapSight V1 completion is defined by the approved traceable capacity-planning workflow
**Status:** Active — V1
V1 is not defined as “every imaginable feature implemented.” It requires a functioning validated Baseline, traceable resource calculation, approved scenario simulation/comparison, capacity-gap evaluation, and the approved downstream solution/actual-validation depth across the supported responsive interface.

## D144 — Competition readiness is distinct from feature completeness
**Status:** Active — V1
The selected competition build must be **Correct, Stable, Explainable, Responsive, Demonstrable, and Team-understood**.

## D145 — Stage 18 completes the planned V1 architecture/planning cycle
**Status:** Active — V1
Stages 1–18 are the completed V1 planning cycle. Future Knowles discoveries revise existing authoritative contracts rather than automatically producing endless new planning stages. The next work is Implementation Phase 0, not Stage 19.

## D146 — Vitest is approved for Domain/Application and Capacity Engine unit/regression tests
**Status:** Active — V1; supersedes D100 and D124 framework selection

The user explicitly approves Vitest during the third, unnumbered Pre-Alignment Product Experience increment — Automated Verification Foundation. Use deterministic Node tests for authoritative Domain/Application behavior and future Capacity Engine unit/regression tests. `npm test` runs once and is included in CI without PostgreSQL or secrets.

This decision resolved only unit/domain/application tooling; the separate browser/E2E decision is now recorded in D147. Test-only stores do not prove Prisma/PostgreSQL behavior, and synthetic lifecycle states do not replace the Knowles golden sample. Real persistence verification remains manual/local; golden-sample acceptance and calculation expectations remain gated by authoritative Knowles evidence.

## D147 — Playwright is approved for real browser/E2E verification
**Status:** Active — V1; resolves the earlier preferred-but-unconfirmed browser framework direction

The user explicitly approves Playwright during the fourth and final planned, unnumbered Pre-Alignment Product Experience engineering foundation increment — Browser / E2E Verification Foundation. Use Chromium only for the initial real-browser suite, separate from Vitest Domain/Application tests. Run against a completed production build with a managed server and database access unconfigured; default browser tests require no PostgreSQL, database URL, or application secrets. No mocked Prisma, fake persisted Assessments, browser component-testing framework, or visual regression service is introduced.

Database-backed browser journeys remain a separate future integration layer. PostgreSQL verification scripts retain their manual/local persistence role. Future Knowles golden-sample tests remain calculation acceptance/regression evidence and require authoritative operational truth; neither unit nor browser success supplies that truth.

## D148 — Existing architecture boundaries are enforced with existing ESLint tooling
**Status:** Active — V1

The fifth, unnumbered Pre-Alignment increment — Architecture Guardrails + Developer Experience — protects the already conforming dependency graph using the existing ESLint/import-plugin stack, without new dependencies, contract moves, or production refactoring. Domain/future Capacity Engine remain plain TypeScript; Application uses Domain and injected contracts; Infrastructure may implement the Application `AssessmentStore`; Presentation may consume Application/Domain models; thin `app` adapters compose them. Exact restrictions and limits are recorded in Engineering Standards.

`npm run verify` reuses Prisma generation → typecheck → lint → format check → Vitest → production build, exits on failure, and requires no database, secrets, browsers, or external network after dependency installation. Playwright and manual PostgreSQL checks remain separate. CI retains its explicit stages. Onboarding applies committed migrations with `prisma migrate deploy` only against the deliberately configured development database; existing `db:migrate` remains migration-authoring tooling, not the default clone setup command. This decision does not authorize database mutation during the increment or change any product/Knowles truth.

## D149 — Mentor demonstration uses an isolated, protected Preview environment
_Original entry preserved as recorded at the October 7, 2026 checkpoint; its initial setup status is historical._

**Status:** Active — bounded engineering target; external setup pending

The user approves repository readiness for a future Vercel Preview from `demo/mentor-review`, normally tracking an approved `main` checkpoint, with a completely separate managed PostgreSQL demo database. Local `capsight_dev` stays local. Access uses deployment-level protection and controlled sharing; this does not decide CapSight authentication, business roles, production hosting, or Knowles requirements. Only blank Assessments are currently supported; synthetic information is permitted only if supported later, and sensitive operational/employee/CAPEX data is excluded.

`npm run build` generates the ignored Prisma Client before compilation, independently of database connectivity and dependency caching. `db:migrate:deploy` applies reviewed, committed migrations only as a deliberate setup operation against a confirmed target; install, build, startup, and default CI do not migrate or seed. Existing verification and explicit CI stages remain. The [mentor demo guide](MENTOR_DEMO_DEPLOYMENT.md) records the later manual setup, access checks, and cleanup. This preparation creates no external resources and does not advance CapSight Implementation Phase 5.

**Implementation clarification — October 24, 2026:** The project lead confirms a subsequently implemented, previously verified protected mentor demo with Production Branch Tracking set to `demo/mentor-review`. This observed configuration differs from the original Preview-oriented intent above. See the [deployment history](MENTOR_DEMO_DEPLOYMENT.md#deployment-history--reconciled-october-24-2026) for the reported milestones and provenance. Present live state was not revalidated. This records a later implementation, not a retroactive approval or a new/superseding hosting-policy decision.

## D150 — Immersive Engineering is the approved application-wide visual direction

**Status:** Active — approved October 25, 2026; resolves the earlier open aesthetic selection

The project lead selects Visual Lab Experiment 05, Variant B, for the real CapSight application. [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) owns the approved tokens, local Plex/Source Serif typography, upright orbit/bounded pointer light, connected explanations, readiness annotations, editorial materials and shared navigation/loading composition. Interface Skills, Hallmark, Taste Skill, UI UX Pro Max and Diagram Design informed the experiment; none is a runtime dependency. Original experiments remain outside the production repository.

Preserve real IDs, saved state, server/domain authority, native routes/history, readiness, error/pending behavior, keyboard access and reduced-motion equivalence. Animation supplies no manufacturing evidence and never delays ordinary controls. Phase 5 remains CURRENT / ACTIVE; no Capacity Engine, scenario or calculation truth is approved by this milestone. Future aesthetic refinement remains subject to project-lead approval.

## D151 — Two permanent branches separate accepted development from the protected mentor Production release

**Status:** Active — explicit release authorization/policy recorded October 25, 2026; supersedes D149's Preview-only hosting target for this mentor deployment

`main` holds development/accepted history. `demo/mentor-review` is the protected mentor demonstration branch and Vercel Production tracking branch. After auditing the complete branch difference, passing local verification/CI and receiving release authorization, advance the demo branch normally by fast-forward to the exact approved `main` SHA. Never force-push, rewrite history or change Production Branch settings to bypass the release path. Ordinary development pushes do not authorize Production promotion.

Preserve Vercel Authentication, separate hosted demo data and environment scopes. Record the previous ready deployment/branch SHA before release, verify the new source/domain/READY status, and use read-only hosted smoke tests. Supported Vercel rollback restores a known-good deployment when needed; never force-reset Git. [MENTOR_DEMO_DEPLOYMENT.md](MENTOR_DEMO_DEPLOYMENT.md) owns operational checks and dated evidence. D149's original intent and historical clarification remain preserved. This policy does not decide final CapSight hosting, product authentication/roles or Knowles requirements.
