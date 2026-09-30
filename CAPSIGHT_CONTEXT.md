# CapSight Context — Locked Project Direction

_Last updated: September 30, 2026_

> **V1 STATUS:** All “locked” decisions in this document are authoritative working decisions for **CapSight V1**, not irreversible commitments. If higher-authority Knowles evidence contradicts a V1 decision, update the relevant Markdown contract and decision ledger. The newest validated truth wins.

## 1. Project Identity

- **Competition:** Knowles Engineering Innovation Hackathon / Engineering Week Hackathon
- **Team:** KnowLarps
- **Selected Topic:** Topic #1 — Production Capacity Requirement Simulator
- **System:** **CapSight**
- **Subtitle:** **Closed-Loop Production Capacity Intelligence**
- **Tagline:** **Calculate. Explain. Simulate. Validate. Decide.**

### Team

- Prince Mark Barcelon — Project Lead / System Analyst
- Ali Xander Paclibar — UI/UX Designer
- Johnreb Compendio — Frontend Developer
- Christan Jade Barnayha — Calculation & Simulation Developer

> Spell **Christan** exactly as written.

---

## Documentation Usage

`CAPSIGHT_CONTEXT.md` is the required entry point for substantial CapSight work.

Do not read every contract indiscriminately. After reading this file, load only the documentation relevant to the current task.

### Project Architecture

Use:

- `docs/PRODUCT_ARCHITECTURE.md`
- `docs/DECISIONS.md`

when work affects architecture or approved cross-project decisions.

### Implementation Sequence

Use:

- `docs/IMPLEMENTATION_ROADMAP.md`

to determine the current implementation phase and dependency order.

### UI / Frontend / Design

Use:

- `docs/DESIGN_SYSTEM.md`
- `docs/features/frontend-state-interaction-responsive.md`
- `docs/features/information-architecture-design-system.md`

plus the contract for the feature being implemented.

### Capacity Calculations

Use:

- `docs/CALCULATION_REFERENCE.md`
- `docs/features/capacity-engine.md`
- `docs/features/calculation-validation-safety.md`
- `docs/features/capacity-engine-testing-strategy.md`

Do not implement unresolved Knowles formulas, meanings, defaults, units, dependencies, or business rules.

### Persistence / Database

Use:

- `docs/features/data-persistence-domain-model.md`
- `docs/features/persistence-technology-data-access.md`
- `docs/features/application-workflow-architecture.md`

### Feature Work

Read the specific feature contract under `docs/features/` before substantially modifying that feature.

### Engineering / AI Workflow

Use:

- `docs/features/engineering-standards-ai-workflow.md`

for repository structure, coding standards, Git practices, dependency decisions, and AI-agent behavior.

### Core Rule

Load the smallest authoritative context pack that fully covers the current task.

If implementation conflicts with an approved contract, stop and resolve the conflict rather than silently changing CapSight.

## 2. Source Hierarchy — Locked

Use this order of authority when making decisions:

1. **Knowles / KEP mentor-validated operational material**
   - Actual Excel workbook
   - Mentor walkthroughs
   - Knowles reference documents
   - Validated formulas, business rules, terminology, sample calculations
2. **September 30 Knowles project orientation**
3. **Official Knowles Hackathon Guidelines**
4. **Submitted KnowLarps CapSight Proposal**
5. **KnowLarps implementation/design decisions**

If the proposal conflicts with validated Knowles requirements, **Knowles requirements win**.

### Core rule

> **Unknowns are requirements to validate — not blanks to fill with assumptions.**

Never:

- invent Knowles formulas;
- fabricate savings or ROI;
- assume unsupported integrations;
- force AI into the product;
- treat sample workbook values as universal rules;
- silently turn implementation choices into business rules.

---

## 3. What September 30 Established

The orientation established the business context and workflow, but **did not yet establish the full calculation truth**.

### Confirmed business context

- Industrial Engineering (IE) owns production capacity requirements / capacity assessment.
- The process applies to:
  - NPI / new project lines;
  - sustaining lines where demand requires additional capacity.
- Current workflow begins from a CAPEX request and goes through validation, capacity assessment, solution evaluation, and CAPEX submission.
- Current capacity planning is fragmented across multiple Excel files and versions.
- Knowles wants a centralized, accurate, transparent, faster, scalable workflow.
- Multiple IEs may work from one consistent source rather than separate files.

### Confirmed workflow

1. Receive CAPEX Request
2. Review Request Completeness
3. If incomplete, return to requester
4. Capacity Assessment
5. Solution Evaluation
6. CAPEX Submission / feedback

### Capacity assessment includes

- validate demand requirement;
- evaluate available capacity;
- review volume mix impact;
- assess shared tool capacity;
- identify capacity gap.

### Confirmed resource areas

- headcount / manpower;
- machines / equipment;
- tooling;
- fixtures;
- related logistical/support resources.

### Do not hard-code yet

Examples seen in one workbook are **not yet universal rules**, including:

- 95% machine uptime;
- 100% manual uptime;
- HC/Shift divided by 2;
- any shift-count assumptions;
- any workbook-specific constants or formulas.

---

## 4. What October 14 Is For

The October 14 mentor session is the **domain unlock** for the V1 calculation model.

Priority discovery targets:

- authoritative formulas;
- units;
- rounding conventions;
- defaults;
- exceptions;
- dependencies;
- field definitions;
- master/reference data vs user-entered scenario data vs calculated outputs;
- one sanitized golden example with known expected outputs;
- what-if scenario rules;
- actual-validation meaning/process;
- CAPEX prototype boundary;
- dashboard/report expectations;
- file import/integration expectations;
- user roles / authentication / permissions / audit/history requirements;
- technical meaning of “Real-Time Assessment.”

Until then, **the real calculation engine must not be implemented from guesses**.

---

## 5. CapSight Proposal — Product Identity That Must Be Preserved

CapSight is not merely a centralized calculator.

The submitted proposal is built around three pillars:

### 1. CALCULATE

**Capacity Engine + Scenario Studio**

Question: **What resources do we need?**

- Use Knowles-validated demand/process inputs.
- Use Knowles-validated formulas, business rules, parameters and rounding conventions.
- Support baseline and alternative scenarios using only variables Knowles confirms may change.

### 2. TRUST

**Decision Trace + Version-Aware Profiles**

Question: **How was this result produced?**

A result should remain connected to:

- scenario context;
- inputs;
- calculation profile / rule version;
- relevant intermediate results;
- validation/business/rounding rules;
- final resource requirement.

**Change Explanation** is deterministic trace comparison, not AI causal inference.

When comparing scenarios, CapSight should show **what validated inputs, rules, profiles, intermediate values, or rounding outcomes changed**, not only the final delta.

### 3. CLOSE THE LOOP

**Reality Loop**

Question: **Did reality match the plan?**

Conceptually:

`Calculated Plan → Production Happens → Actual Result → Plan vs Actual → Planner Adjusts`

V1 remains based on **manual actual-result entry using fields validated by Knowles**, unless Knowles later confirms another source/integration.

### CapSight operational flow

**CALCULATE → TRACE → SIMULATE → COMPARE → VALIDATE → ADJUST**

### Conditional only

**Constraint Radar** remains optional / conditional until Knowles validates that meaningful interdependencies and binding constraints exist in the production model.

---

## 6. The Key Product Distinction — Locked

### Knowles foundation

Knowles needs:

- centralized capacity assessment;
- consistent calculations;
- scenario simulation;
- resource requirement analysis;
- dashboard/reporting;
- transparency;
- faster reassessment;
- one shared source of information.

### CapSight uniqueness

> **Centralization is the environment. Closed-loop traceability is the product identity.**

CapSight should not stop at “What is the answer?”

It must preserve the relationship between:

- the planning result;
- the calculation context;
- the rule/profile version;
- scenario history;
- scenario-to-scenario change explanation;
- eventual planned-versus-actual validation.

A useful shorthand:

`shared truth + calculation truth + change truth + reality truth`

Future ideas should be pressure-tested against these questions:

1. Does this help Knowles calculate capacity correctly?
2. Does this preserve or improve traceability?
3. Does this help meaningful scenario comparison?
4. Does this support closing the planning-to-reality loop?

If an idea does none of these, it is probably scope drift.

---

## 7. Multi-Engineer / Centralized System Principles — Locked

CapSight must be designed as a shared system for multiple Industrial Engineers, not a single-user calculator.

### Centralized by default

- One shared source of persistent data.
- Avoid per-user/local-file copies as the system model.
- Multiple IEs should see the same authoritative assessment context.

### Multi-user by design

- The architecture must not assume only one IE uses CapSight.
- Exact roles, permissions, approvals and authentication remain **OPEN** until Knowles validates them.

### Version-aware by design

- Meaningful calculation results should preserve the context that produced them.
- Historical meaning should not be silently lost when rules/inputs change.
- Exact versioning behavior remains subject to Knowles validation.

### Real-time-ready, not real-time-assumed

Knowles used the phrase **“Real-Time Assessment”**, but its technical meaning is still unresolved.

Therefore:

- design for fast centralized reassessment;
- do not assume WebSockets, machine feeds, Oracle/SQL live integration, or collaborative Google-Docs-style editing;
- keep the exact real-time mechanism open until Knowles explains it.

---

## 8. Information Architecture Direction — Approved Principle

The central working object remains a **Capacity Assessment**, but it exists inside a **shared IE workspace**.

Conceptually:

```text
CapSight
└── Shared IE Capacity Workspace
    ├── Assessments
    │   └── Capacity Assessment
    │       ├── Planning context / inputs
    │       ├── Capacity results
    │       ├── Scenario Studio
    │       ├── Scenario comparison
    │       ├── Decision Trace
    │       └── Reality Loop
    ├── Team / operational overview
    └── Reports / history
```

### Important UX principle

**Work first, analytics second.**

The main workspace should help an IE understand active capacity work, current state, shared assessment context, and what requires action — not merely show decorative dashboard cards.

### Contextual product features

- **Decision Trace** should follow the result it explains.
- **Scenario Studio** belongs to the assessment context.
- **Scenario Comparison** compares scenarios within the same planning problem.
- **Reality Loop** remains attached to the applicable plan/result rather than becoming an isolated app.

Exact navigation labels and page composition are **not yet locked**.

---

## 9. Technical Stack — Locked So Far

### Core framework

- **Next.js**
- **App Router**
- **TypeScript**
- **Node.js runtime**
- **npm**

### Architecture principle

> **Next.js is the shell around CapSight — not the architecture of CapSight.**

Maintain clear separation between:

- Presentation / UI
- Application workflows
- Domain / business logic
- Infrastructure / persistence

### Capacity Engine rule

The Capacity Engine should eventually be plain TypeScript business/domain logic and should not depend on:

- React;
- UI state;
- browser APIs;
- database connections;
- Next.js framework behavior.

This protects the Knowles calculation model from presentation and framework changes.

### Server/client principle

- Server-first by default.
- Client-side only where interaction genuinely requires it.

### Persistence

- Centralized persistence is a requirement.
- Database technology and schema are **not yet locked**.
- Do not design the schema before October 14 provides the real field/domain model.

### API strategy

- Do not create APIs merely because Next.js supports them.
- Prefer clean internal application/domain boundaries first.
- External API boundaries should exist only when they serve a real requirement.

---

## 10. Styling / Design Implementation — Locked So Far

### Styling

- **CSS Modules first**
- **Global CSS custom properties / design tokens**
- **Tailwind may be considered later**, only if deliberately approved and without creating a second design language.

### UI framework

- No UI framework by default.
- Do not install shadcn/ui, Material UI, Ant Design, Chakra, Bootstrap, etc. unless a specific need justifies it and the team approves it.

### Design source of truth

- **Figma**
- **Figma MCP / connector if practical and available**

### Design philosophy

- Custom CapSight visual identity
- Purposeful, restrained, interaction-focused design
- Emil Kowalski-inspired principles, but translated into explicit CapSight rules rather than vague style imitation

### Motion

- Motion is desired.
- Motion system / library will be planned later.
- Motion must communicate cause, state, feedback, or context — not exist as decoration.

### AI design guardrails

AI assistants must not:

- invent colors, typography, spacing, radii, shadows or motion values;
- introduce a UI framework without approval;
- redesign approved screens while doing unrelated work;
- fall back to generic SaaS/dashboard styling;
- rename established CapSight product concepts without approval.

---

## 11. AI Development Workflow — Locked

### Primary agent

**Codex**

Use for:

- architecture-sensitive work;
- larger multi-file changes;
- core feature implementation;
- Capacity Engine work;
- Scenario Studio / Decision Trace / Reality Loop work;
- larger debugging/refactoring tasks.

### Routine assistant

**GitHub Copilot**

Use for:

- small/local implementation tasks;
- boilerplate;
- narrow component work;
- small fixes;
- repetitive refactors;
- routine CSS adjustments;
- narrow tests.

### Token strategy

Do not waste Codex context on routine tasks Copilot can handle safely.

When switching Codex accounts/sessions due to token limits, the new session should read the latest authoritative Markdown context before major work.

### Core AI rule

> **AI may implement CapSight. AI may not invent Knowles.**

---

## 12. AI Continuity / Anti-Drift Files — Planned

The project should maintain a compact set of authoritative Markdown documents, not a huge history dump.

### `CAPSIGHT_CONTEXT.md`

Current source of truth for:

- project identity;
- source hierarchy;
- proposal commitments;
- validated Knowles requirements;
- open requirements;
- technical stack;
- architecture;
- design rules;
- naming/terminology;
- current state;
- do-not-change rules.

### `DECISIONS.md`

Short architecture/product decision records with reason and status.

### `KNOWLES_REQUIREMENTS.md`

Separate:

- CONFIRMED
- OPEN
- DO NOT ASSUME

Keep these files compact and current. Compress outdated context instead of endlessly appending history.

---

## 13. Protected Terminology

Do not rename these product concepts unless KnowLarps explicitly approves it:

- CapSight
- Closed-Loop Production Capacity Intelligence
- Capacity Engine
- Scenario Studio
- Decision Trace
- Version-Aware Profiles
- Reality Loop
- Constraint Radar (conditional)

Technical/internal names may differ where necessary, but product terminology remains stable.

---

## 14. Do Not Build Yet

Until authoritative Knowles material validates the domain model, do not:

- implement real formulas from screenshots;
- assume shift counts;
- treat sample uptime values as universal;
- lock the database schema;
- lock user roles/permissions;
- build Oracle/SQL/machine integrations;
- build live collaborative editing;
- force AI into the product;
- fabricate quantitative business impact;
- overbuild enterprise architecture;
- redesign CapSight away from its submitted proposal.

---

## 15. Current Planning State

### Approved / locked

- CapSight proposal identity and three-pillar uniqueness
- centralized, multi-engineer system direction
- version-aware system direction
- real-time-ready but technically unresolved approach
- Next.js + App Router + TypeScript + npm
- clean domain separation and isolated Capacity Engine
- CSS Modules first
- global design tokens
- Figma as design source
- Figma MCP/connector if practical
- motion planned later
- custom CapSight visual identity
- Copilot for routine work
- Codex as primary engineering agent
- compact Markdown continuity strategy

### Still open

- exact navigation / IA labels
- detailed Figma visual language
- typography / colors / spacing / radius / motion tokens
- database choice and schema
- ORM
- authentication and permissions
- exact real-time mechanism
- chart/visualization library
- motion library
- deployment
- validated Knowles formulas / rules / rounding / units / defaults / exceptions
- final field map
- scenario rules
- actual-validation fields and process
- exact dashboard KPIs and report outputs

---

## 16. Current North Star

> **Knowles needs a centralized shared capacity-assessment workflow. CapSight differentiates itself by ensuring that every planning result remains connected to its calculation context, scenario history, rule/profile version, explanation of change, and eventual real-world validation.**

This is the direction to protect unless a higher-authority Knowles requirement forces a justified change.

---

## 17. Documentation Architecture — Locked

Major CapSight features and architectural concerns must have compact authoritative Markdown contracts. These documents describe the **current approved truth**, not a chronological dump of every discussion.

Planned documentation structure:

```text
docs/
├── DECISIONS.md
├── KNOWLES_REQUIREMENTS.md
├── PRODUCT_ARCHITECTURE.md
├── DESIGN_SYSTEM.md
├── CALCULATION_REFERENCE.md        # after Knowles validates definitions/formulas
└── features/
    ├── assessment.md
    ├── capacity-engine.md
    ├── calculation-validation-safety.md
    ├── data-persistence-domain-model.md
    ├── scenario-studio.md
    ├── decision-trace.md
    ├── version-aware-profiles.md
    ├── reality-loop.md
    ├── dashboard-reporting.md
    └── constraint-radar.md
```

### Documentation rule

- `CAPSIGHT_CONTEXT.md` is the first-read continuity file.
- Codex/Copilot should read only the context file plus the Markdown contract relevant to the current task and the necessary source files.
- Do **not** require every AI session to read every project document.
- Approved feature decisions must be reflected in their relevant Markdown contract.
- When decisions change, update the authoritative document rather than accumulating contradictory notes.

---

## 18. Stage 1 — Request Intake & Completeness — LOCKED

### Primary work object

A **Capacity Assessment** is CapSight's primary work object. It is not an isolated calculator run.

### Shared workspace

- Capacity Assessments exist in the shared IE workspace.
- They are not modeled as private per-user/local copies.
- Multiple IEs should be able to see the same authoritative assessment context.

### Assessment intake

A Capacity Assessment begins from CAPEX/request context and proceeds through an explicit **request-completeness gate** before capacity calculation.

Conceptually:

```text
CAPEX / Capacity Request
        ↓
Create / Open Capacity Assessment
        ↓
Structured Request Information
        ↓
Completeness Review
        ├── Incomplete → remains saved / returned for completion
        └── Complete   → Capacity Assessment can proceed
```

### Locked principles

1. A Capacity Assessment starts from the request context.
2. Request completeness is a business state, not merely a UI validation error.
3. Incomplete assessments may remain saved and visible.
4. Intake should use focused information groups rather than one giant spreadsheet-like form.
5. Exact intake sections and fields remain OPEN until Knowles validates the workbook/field map.
6. The request/planning context must remain connected to the baseline calculation and later traceability.
7. CapSight does not yet assume requester messaging, approval automation, email workflow, or CAPEX-system integration.
8. Exact statuses, roles, and ownership behavior remain OPEN.

---

## 19. Stage 2 — Baseline Capacity Assessment — LOCKED

After request completeness, the IE enters the main Capacity Assessment workspace.

### Baseline principle

Every complete assessment begins with a **Baseline Capacity Assessment** representing the validated planning conditions for that assessment.

The baseline is the reference planning state from which alternative scenarios may later branch.

### Calculation snapshot

When a baseline is calculated, the result must preserve a calculation context rather than silently mutate later.

Conceptually:

```text
Capacity Assessment
├── Request / Planning Context
├── Baseline
│   └── Calculation Run
│       ├── Input Snapshot
│       ├── Calculation Profile / Version
│       ├── Intermediate Results
│       ├── Applied Rules / Rounding
│       ├── Final Resource Requirements
│       └── Decision Trace
├── Scenarios
├── Comparisons
└── Actual Validation
```

### Locked principles

1. Baseline is the authoritative reference state for an assessment, not just "Scenario 1."
2. A calculated baseline preserves an immutable/traceable calculation snapshot.
3. Results should be organized around engineering questions, not blindly mirror Excel layout.
4. **Capacity Gap** is a first-class business concept because Knowles uses it to determine additional resource needs.
5. Important resource results must be inspectable through Decision Trace.
6. Scenario Studio branches from the Baseline instead of overwriting it.
7. Solution Evaluation follows capacity-gap identification, but CapSight must not yet assume it automatically recommends the best solution.
8. The assessment remains shared across multiple IEs.
9. Exact baseline inputs, process-matrix UI, formulas, capacity-gap formula, automatic-vs-manual calculation trigger, solution-evaluation behavior, and resource hierarchy remain OPEN.

### Product principle reinforced

> **CapSight ≠ Simulator. The simulator/calculator is the computational foundation. CapSight is the closed-loop planning and decision experience built around it.**

---

## 20. Stage 3 — Scenario Studio + Change Explanation — LOCKED

### Scenario model

- Every scenario belongs to a Capacity Assessment.
- Baseline is the reference context.
- Alternative scenarios do not overwrite the Baseline.
- V1 uses Baseline → alternatives unless Knowles later validates a need for more complex lineage.
- Exact editable scenario variables remain OPEN until Knowles confirms them.

Conceptually:

```text
Capacity Assessment
        │
     Baseline
      /  |  \
     /   |   \
Scenario A  Scenario B  Scenario C
```

### Calculation integrity

Every calculated scenario preserves its own:

- input snapshot;
- calculation profile/version;
- relevant intermediate values;
- applied rules/rounding;
- resource requirements;
- Decision Trace.

### Change Explanation

Change Explanation is **Decision Trace applied to two planning states and compared**. It is not a separate AI explanation system.

Comparison must distinguish, when relevant:

- changed input;
- unchanged input;
- changed calculation profile/rule version;
- changed intermediate value;
- changed rounding/business-rule outcome;
- changed final requirement.

CapSight must not infer unsupported causal explanations.

### Feature distinction

```text
SCENARIO STUDIO
"What if?"

        ↓

COMPARISON / CHANGE EXPLANATION
"What changed?"

        ↓

DECISION TRACE
"How was this number produced?"
```

### Responsive principle

Scenario comparison must preserve information across device sizes. Desktop may use side-by-side comparison; smaller devices may stack the same information vertically. No important meaning may depend on hover or desktop-only layout.

---

## 21. Stage 4 — Decision Trace + Version-Aware Profiles + Calculation Backbone — LOCKED

### TRUST pillar

Decision Trace is a first-class explanation layer. It is not a console log, generic history table, or AI-generated narrative.

### Trace relationship

A Decision Trace belongs to a **specific calculated result within a scenario/planning context**.

### Trace depth

Decision Trace should support layered inspection so transparency does not become information overload:

```text
1. RESULT
   What did CapSight calculate?

2. TRACE
   How did the calculation progress?

3. CALCULATION BACKBONE
   What definitions, formulas, variables, units,
   dependencies, rules, and rounding produced it?

4. VERSION CONTEXT
   Which validated calculation profile produced
   this exact historical result?
```

### Calculation backbone

Where Knowles validates the information, a trace should be able to expose:

- definition of a term/result;
- unit;
- source/category of the value where meaningful (for example assessment input, reference/master data, calculated result, validated default);
- formula or validated business rule;
- variable definitions;
- actual values substituted in the calculation;
- intermediate results;
- validation rules;
- rounding rules;
- dependencies/exceptions;
- final resource requirement.

No definition, formula, unit, or rule may be invented from general manufacturing knowledge.

### One source of truth for executed logic and explanation

The implementation must avoid separately hard-coding one formula in the Capacity Engine and another textual formula in the Decision Trace UI.

Conceptually, a validated calculation rule should carry enough structured metadata for both execution and explanation:

```text
Validated Rule / Calculation Definition
├── identifier
├── version
├── definition
├── formula representation
├── variables / units
├── calculation logic
├── dependencies / exceptions
└── rounding / business rules
       ├── used by Capacity Engine
       └── exposed by Decision Trace
```

Exact technical representation remains to be designed after Knowles validation.

### Version-Aware Profiles

Every meaningful calculation run retains the calculation profile/version that produced it.

Historical results must not silently change when:

- reference data changes;
- validated formulas change;
- rounding/business rules change;
- a new profile becomes current.

A recalculation under a new profile creates a new calculation context rather than rewriting historical meaning.

### Important distinction

CapSight must preserve the difference between:

- an **input change**;
- a **calculation profile/rule change**;
- a **result change**.

This is necessary for trustworthy Change Explanation.

### Definitions should be contextual

Definitions/formula information should be accessible where the engineer encounters the related value, rather than requiring the user to leave the workflow and search a disconnected glossary. A centralized reference view may still exist later if useful.

### Future reference document

After Knowles validates the workbook and domain terms, maintain a compact authoritative `docs/CALCULATION_REFERENCE.md` or equivalent covering validated terminology, units, formulas, dependencies, defaults, exceptions, and rounding behavior.

---

## 22. Stage 5 — Reality Loop — LOCKED

### CLOSE THE LOOP pillar

Reality Loop keeps the actual production outcome connected to the planning state that produced the original decision.

Conceptually:

```text
Capacity Assessment
        ↓
Calculated Planning State
(Baseline or specific selected scenario)
        ↓
Production / Implementation
        ↓
Actual Observation
        ↓
Plan vs Actual
        ↓
Variance
        ↓
Planner Response / Next Adjustment
```

### Distinct domain concepts

**Scenario** and **Actual Result** are not interchangeable.

- Scenario = hypothetical planning condition ("What if?")
- Actual Result = observed production condition/outcome ("What happened?")

Do not model actual production merely as a special scenario.

### Historical plan integrity

Actual validation must reference the **specific historical planning/calculation state** it is validating.

If rules or reference data change later, Reality Loop must still compare actual performance against the original plan/profile that was used for the decision—not against today's silently recalculated value.

### Actual evidence context

Where Knowles validates it, an actual-validation record may preserve:

- observed values;
- observation timing;
- relevant production context;
- source/method;
- which planning state is being validated;
- variance;
- user/audit identity if required.

Exact fields, timing, sources, roles, tolerances, revision behavior, and approval rules remain OPEN.

### Variance transparency

Where formal Knowles rules exist, plan-vs-actual variance should itself be inspectable:

- what planned value is being used;
- where that planned value came from (Decision Trace);
- what actual value was recorded;
- how variance/tolerance was calculated;
- what validated rule or definition applies.

### No unsupported root-cause claims

Reality Loop may show factual differences and deterministic variance. It must not invent causal claims or AI root-cause explanations without validated evidence/rules.

### Adjust does NOT mean self-learning

`VALIDATE → ADJUST` means the system gives the IE visible evidence for the next planning decision.

Reality Loop does **not**:

- retrain itself;
- automatically change formulas;
- automatically optimize planning logic;
- fabricate improvements or savings.

### V1 boundary

V1 remains **manual actual-result entry using Knowles-validated fields**.

No direct machine, Oracle, SQL, internal-database, API, or shop-floor integration is assumed. File import/direct integration may be evaluated only if Knowles confirms the need, source, access path, and prototype boundary.

### Operational goal

Reality Loop should help reduce fragmented/repetitive validation and rework. It must not merely digitize every tedious validation step from the current Excel process.

### Responsive visualization rule

Where plan-vs-actual charts/visuals are useful, they may use purposeful animation, but the underlying values and meaning must remain fully accessible on mobile, tablet, and desktop and must not depend on hover.

---

## 23. Cross-Cutting Product & Responsive Design Rules — LOCKED

### Innovation rule

CapSight should not pursue innovation through random technology or buzzword features. Innovation should come from how planning information behaves:

- results are explorable;
- scenarios preserve lineage/context;
- comparisons explain meaningful differences;
- historical calculations retain rule/profile meaning;
- actual production evidence remains connected to the original plan;
- multiple IEs operate around the same shared planning truth.

### Decision-chain principle

> **Keep the decision connected from request → calculation → explanation → alternatives → reality.**

### Responsive information preservation

CapSight must work across phone, tablet, laptop, and desktop.

Responsive design means preserving **information and meaning**, not simply shrinking desktop layouts.

- Side-by-side comparison may become stacked comparison.
- Rich visualizations may simplify on small screens.
- Exact values and statuses remain visible.
- No critical interaction or meaning may require hover.
- Touch targets and interaction patterns must support touch devices.

### Animated charts

Animated charts/visualizations are allowed and encouraged when they improve comprehension, state change, or comparison.

They must:

- be responsive;
- remain readable without animation;
- preserve exact underlying values;
- not depend on hover;
- simplify gracefully on small devices;
- use motion to communicate change/cause/state rather than decoration.

The chart library and motion library remain OPEN and will be selected later based on real visualization needs.

---

## 24. Stage 6 — Solution Evaluation + CAPEX Boundary — LOCKED

### Position in the workflow

Solution Evaluation follows identification of the Capacity Gap and remains inside the same Capacity Assessment.

Confirmed Knowles solution-evaluation categories:

- existing capacity optimization;
- equipment transfer / reallocation;
- new tooling requirement;
- new equipment requirement.

CAPEX cost and downstream submission/feedback are part of the confirmed business flow, but the prototype depth remains OPEN.

### Locked principles

1. Solution Evaluation follows the identified Capacity Gap.
2. It remains connected to the same Capacity Assessment, scenario/planning state, calculation run, and Decision Trace.
3. CapSight supports engineering evaluation but does **not** automatically recommend a solution unless Knowles provides validated decision logic.
4. Where a solution alternative changes validated planning conditions, Scenario Studio may be used to evaluate the alternative instead of creating disconnected calculations.
5. CAPEX cost is part of the confirmed downstream context, but no cost formula/model may be invented.
6. Any calculated cost/resource figure must remain traceable to the calculation state/profile that produced it.
7. CapSight must keep a clean handoff boundary after Solution Evaluation until Knowles confirms how much CAPEX workflow belongs inside the prototype.
8. Do not turn CapSight into procurement/ERP software without explicit Knowles validation.

### CAPEX boundary — OPEN

Possible prototype depths remain unresolved:

- calculation support only;
- CAPEX-ready output/report;
- submission/status/feedback tracking;
- deeper workflow/approvals.

Do not assume:

- procurement workflows;
- vendor management;
- budget-management modules;
- approvals/signatures;
- requester accounts;
- notifications;
- CAPEX-system integration.

### Decision-context principle

CapSight should preserve the chain:

```text
Request
  ↓
Capacity Calculation
  ↓
Decision Trace
  ↓
Scenarios / Comparisons
  ↓
Capacity Gap
  ↓
Solution Evaluation
  ↓
CAPEX-related context / handoff
```

The goal is a coherent capacity decision record, not a collection of disconnected forms.

---

## 25. Stage 7 — Shared IE Workspace + Dashboard + Reporting — LOCKED

### Shared IE Workspace

CapSight's primary team entry point is a **shared IE Capacity Workspace** centered on real Capacity Assessments.

The workspace is **work-first, analytics-second**.

It should help IEs:

- find and continue assessments;
- identify incomplete or active work;
- open calculated assessments;
- revisit scenarios/comparisons;
- locate validation/history;
- discover records as the centralized system grows.

Exact status names, columns, filters, priorities, and attention rules remain OPEN until Knowles validates the operational model.

### Dashboard principle

The official Interactive Dashboard requirement must be fulfilled through meaningful operational/planning intelligence, not vanity metrics or decorative charts.

CapSight distinguishes:

- **shared-level intelligence** — visibility across multiple assessments;
- **assessment-level intelligence** — requirements, gaps, scenarios, traces, comparison, and plan-vs-actual evidence inside one assessment.

Exact KPIs, aggregation rules, dashboard metrics, charts, and exports remain OPEN.

### Visualization rules

Animated charts/visualizations are encouraged when they improve understanding of:

- state;
- scenario change;
- resource comparison;
- capacity gap;
- plan vs actual;
- other validated planning relationships.

Motion must explain change/state, not exist as decoration.

All visualizations must:

- preserve exact underlying values;
- remain usable without animation;
- work across desktop, laptop, tablet, and phone;
- avoid hover-only meaning;
- simplify gracefully on smaller devices;
- support touch interaction where needed.

### Evidence-linked interaction

Where useful, dashboard/visualization elements should connect back to the underlying:

- Capacity Assessment;
- resource result;
- Decision Trace;
- Scenario Comparison / Change Explanation;
- Reality Loop evidence.

Charts should be entry points into evidence, not detached decorations.

### Reporting principles

Planning reports and exports must preserve enough calculation context to prevent results from becoming orphan numbers.

Where validated, reports should retain relevant context such as:

- assessment identity;
- planning/scenario state;
- calculation profile/version;
- calculation timestamp/context;
- resource results and gaps;
- other Knowles-required reporting information.

Dashboard/report surfaces must consume the same authoritative stored calculation state as CapSight. Do **not** implement separate report/dashboard formulas that can diverge from the Capacity Engine.

### Collaboration boundary

CapSight remains history-ready and multi-user by design, but do not invent:

- comments;
- mentions;
- assignments;
- notifications;
- activity feeds;
- live cursors;
- collaborative simultaneous editing.

These remain requirement-validation items.

---

## 26. Current Locked Workflow Checkpoint

The approved CapSight product flow is now:

```text
STAGE 1
Request Intake + Completeness
        ↓
STAGE 2
Baseline Capacity Assessment
        ↓
STAGE 3
Scenario Studio + Change Explanation
        ↓
STAGE 4
Decision Trace + Version-Aware Profiles
+ Calculation Backbone
        ↓
STAGE 5
Reality Loop
        ↓
STAGE 6
Solution Evaluation + CAPEX Boundary
```

Surrounding the workflow:

```text
SHARED IE WORKSPACE
├── Find / Continue Work
├── Operational / Planning Intelligence
├── Dashboard / Visualizations
└── Reports / History
```

Cross-cutting throughout:

- centralized shared source of truth;
- multi-engineer use;
- historical calculation integrity;
- Decision Trace and calculation-backbone transparency;
- Version-Aware Profiles;
- responsive device support;
- purposeful animation/visualization;
- one authoritative calculation state feeding UI/dashboard/reports;
- no invented Knowles domain logic;
- CapSight proposal identity remains protected.

## 27. Stage 8 — Reference / Master Data + Calculation Profile Governance — V1 LOCKED

### Core separation

CapSight distinguishes:

- **shared reference/master data** — centrally maintained operational data used across assessments;
- **calculation profiles** — validated calculation logic/rule context;
- **assessment inputs** — request/planning-specific values;
- **scenario-editable inputs** — only fields Knowles explicitly approves for what-if analysis;
- **calculated outputs** — values produced by the Capacity Engine.

Exact field classification remains OPEN until Knowles validates the field map.

### Historical integrity

Current reference truth and historical calculation truth are distinct. Updating a shared reference value must not silently rewrite a prior calculation. Historical calculation runs retain the exact reference/profile context they actually used.

### Calculation Profile principle

A Calculation Profile is a controlled package of validated calculation logic, which may eventually include formulas, business rules, rounding, defaults, dependencies, exceptions, and compatible reference context. Exact structure remains OPEN.

### Governance boundary

- Shared reference/rule data must not be casually editable as if it were scenario input.
- Scenario Studio may alter only fields classified as approved scenario variables.
- Exact owners, permissions, approval/publishing process, import method, and administration UI remain OPEN.
- Do not build a large admin/master-data subsystem before Knowles confirms how this information should be maintained.

### Provenance

Decision Trace should be able to preserve useful value provenance, for example whether a value came from assessment input, shared reference data, a validated default/profile, or calculation output. Exact taxonomy remains OPEN.

### Version / revision principle

Meaningful reference/profile changes should preserve historical context rather than erasing the previous state. This is version-awareness, not a Git-like branching system.

### Documentation

Maintain:

- `docs/features/reference-data.md`
- `docs/features/calculation-profiles.md`
- `docs/CALCULATION_REFERENCE.md` only after Knowles validates definitions/formulas

---

## 28. Stage 9 — Identity, Permissions, Audit & Multi-Engineer Concurrency — V1 LOCKED

### Identity-ready, roles still OPEN

CapSight must be capable of associating important domain actions/records with an actor identity where useful, but no Knowles-specific roles are invented yet. Authentication technology, user-role names, approval flows, and exact permissions remain OPEN.

### Authentication vs authorization

Keep these concerns separate:

- **authentication:** who is the user?
- **authorization:** what action is the user allowed to perform?

Prefer capability/policy boundaries over hard-coded guessed business-role checks.

### Multi-engineer concurrency

Shared access does not imply Google-Docs-style simultaneous editing. V1 direction is **optimistic concurrency** for mutable shared records so stale writes cannot silently overwrite newer work.

Conceptually:

```text
IE A opens revision 12
IE B opens revision 12
IE A saves → revision 13
IE B tries to save revision 12 → conflict detected, no silent overwrite
```

Exact conflict-resolution UX remains to be designed.

### Calculation runs

Calculation Runs remain immutable snapshots. Input/rule changes create a new calculation context rather than mutating a historical result.

### Distinct historical concepts

Do not blur:

- **Decision Trace** — how a result was calculated;
- **Audit History** — what meaningful actions happened to a record over time;
- **Version / Revision** — which state of a mutable record existed.

### Audit scope

If Knowles requires audit/history, prioritize meaningful domain events such as assessment creation/update, calculation, scenario creation, actual validation, reference-data revision, and calculation-profile changes. Do not log UI noise as product-level audit events.

### Stronger governance boundary

Reference/master data and Calculation Profile changes require a stronger authorization/governance boundary than ordinary assessment inputs, but exact owners/roles remain OPEN.

### Still OPEN

- authentication provider / SSO method;
- Knowles role names;
- permissions matrix;
- approval workflows;
- autosave;
- live presence;
- notifications;
- real-time collaborative editing;
- exact audit retention/exposure.

---

## 29. V1 Locking / Correction Rule — LOCKED

> **V1 locks are authoritative working decisions, not irreversible commitments.**

When higher-authority Knowles evidence contradicts a V1 decision:

1. update the relevant feature/architecture Markdown contract;
2. update `CAPSIGHT_CONTEXT.md`;
3. record the superseding decision in `docs/DECISIONS.md`;
4. preserve the reason/source for the correction;
5. treat the newest validated truth as authoritative.

Do not preserve an outdated implementation merely because it was previously called “locked.”

## 30. Stage 10 — Data Persistence & Domain Model Boundaries — V1 LOCKED

### Core principle
> **Persistence follows domain meaning, not UI screens.**

### Domain categories
CapSight distinguishes:
- working / mutable state;
- calculation evidence;
- shared governed data;
- derived views.

### Capacity Assessment and Planning States
- Capacity Assessment remains the central persistent work object.
- Baseline and Scenarios are distinct planning states under an Assessment.
- `Planning State` may be used internally as an architectural abstraction, but product semantics remain Baseline vs Scenario.

### Calculation Run
- Planning State and Calculation Run are different concepts.
- One Baseline/Scenario may be recalculated multiple times, producing multiple Calculation Runs.
- A Calculation Run is a core historical evidence concept and preserves enough context to identify what CapSight actually calculated at that moment.
- Historical Calculation Runs are not silently mutated.

Conceptually a run may preserve:
- input snapshot;
- reference/profile context;
- relevant intermediate values;
- applied validated rules;
- rounding/validation outcomes;
- final resource results;
- evidence required by Decision Trace.

### Derived information
Decision Trace should preferably render from structured Calculation Run evidence. Change Explanation, dashboards, comparisons, and many reports are primarily derived views rather than independent calculation truth unless a validated requirement says otherwise.

### Reality / Solution linkage
- Actual Validation references the **exact historical Calculation Run** being validated, not merely a Scenario name.
- Solution Evaluation remains connected to the relevant calculated requirement/gap/context.
- CAPEX persistence remains OPEN until the downstream boundary is validated.

### Distinct version concepts
Do not blur:
- concurrency revision;
- historical record version/snapshot;
- audit event;
- Calculation Run identity;
- Calculation Profile version;
- Decision Trace.

### Still OPEN
Database, ORM, table/schema design, retention, deletion/archive policy, report persistence, and historical snapshot strategy remain OPEN.

---

## 31. Stage 11 — Validation, Error Handling & Calculation Safety — V1 LOCKED

### Safety principle
> **CapSight prefers refusing to calculate over confidently presenting an unjustified result.**

### Validation layers
Keep distinct:

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

### No guessed defaults
- Missing values never silently become guessed manufacturing defaults.
- Knowles-approved defaults may be applied only when validated and remain traceable as defaults.

### State semantics
Distinguish missing, invalid, unavailable, incompatible, and stale information. Blocking/warning/informational severity exists conceptually, but exact manufacturing severity rules come from Knowles.

### One authoritative validation backbone
- UI validation provides immediate feedback.
- Domain/server validation remains authoritative.
- Capacity Engine prerequisites and Decision Trace explanation should use the same validated rule definitions where feasible.

### Calculation Profile safety
Profiles may eventually govern required inputs, units, ranges, dependencies, defaults, exceptions, rounding, and formulas. Planning State + reference context + Calculation Profile compatibility must be enforceable.

### Failure integrity
- A failed calculation is not a successful Calculation Run.
- Never surface `NaN`, `Infinity`, `undefined`, raw stack traces, or fabricated zero values as engineering results.
- `0`, null, blank, missing, and undefined are semantically distinct.
- Units and rounding are explicit Knowles-validated concerns.

### Recalculation freshness
If a previously calculated Planning State is edited, the historical run remains intact but the current Planning State must no longer present that old run as if it represents current inputs. It becomes conceptually **needs recalculation** until a new valid run is produced.

### Partial results
Whether one failed resource subcalculation invalidates the whole run or permits partial results remains OPEN.

### Golden example
Once Knowles supplies a sanitized sample with known expected outputs, it becomes a permanent domain verification test for the Capacity Engine.

### Next planning stage

**Stage 12 — Capacity Engine Architecture & Testing Strategy** — define how the plain-TypeScript calculation core, validated rule definitions, calculation evidence, tests, and error/result boundaries should be structured without inventing Knowles formulas.

---

## 32. Stage 12 — Capacity Engine Architecture & Testing Strategy — V1 LOCKED

### Deterministic engine contract
> **Same validated Planning State snapshot + same validated reference context + same Calculation Profile = same result and calculation evidence.**

The Capacity Engine must remain independent from hidden environmental state. Time, current database contents, browser/UI state, and global mutable configuration must not change the calculation unless that information is explicitly supplied as validated calculation context.

### Engine boundary
The Capacity Engine:
- remains plain TypeScript domain logic;
- receives the full validated calculation context as input;
- does not query the database, call APIs, read React/Next.js UI state, or persist records itself;
- returns calculation output plus domain-meaningful evidence required for traceability.

The application layer is responsible for loading inputs/reference/profile context, invoking validation, calling the engine, and persisting the resulting Calculation Run.

### Rule representation
- Do not build a generic dynamic rules engine, expression DSL, or formula interpreter before Knowles' real formulas justify one.
- Prefer explicit TypeScript domain calculations with structured validated rule metadata.
- Validated rules should have stable semantic identities where useful for traceability/comparison.
- Formula/rule explanation metadata should come from the same authoritative calculation definition used for execution wherever feasible.

### Calculation evidence
Evidence is captured **during calculation**, not reconstructed afterward. It should contain domain-meaningful steps only, such as validated inputs/values used, relevant intermediate outputs, applied rule identity, validated rounding/default behavior, and final requirement.

Decision Trace presents this actual evidence. It must not infer how a result "probably" happened after the fact.

### Failure model
Expected domain failures (for example, missing validated dependencies or incompatible calculation context) should be represented as structured calculation outcomes rather than raw software crashes. Unexpected programming defects remain technical errors and are handled/logged separately.

A failed execution never becomes a successful Calculation Run.

### Types, units, precision, and dependencies
- Important domain quantities retain explicit unit semantics.
- Exact unit type strategy remains OPEN until Knowles supplies calculation truth.
- Numeric precision strategy remains OPEN; do not assume JavaScript floating-point behavior is always sufficient and do not add a decimal library prematurely.
- Calculation order, dependency graph, and module boundaries must follow the real validated Knowles model rather than premature abstraction.

### Testing strategy
The sanitized Knowles golden example becomes the primary end-to-end acceptance test once provided.

Testing then expands around validated behavior:
- individual formula/rule tests;
- validated boundary conditions;
- rounding boundaries;
- dependencies and exceptions;
- scenario comparison/Change Explanation behavior;
- Decision Trace evidence correctness;
- historical profile/reference reproducibility;
- Reality Loop variance rules once defined.

Every confirmed calculation defect should receive a regression test.

Testing quality is judged by protection of critical calculation behavior, not a vanity coverage percentage.

### Data confidentiality
Do not commit sensitive Knowles production data, model names, costs, or internal operational records as test fixtures unless Knowles explicitly permits it. Prefer sanitized/approved golden cases.

### AI implementation rule
Before implementing real Capacity Engine formulas, Codex/Copilot must read the relevant current contracts, especially:
- `CAPSIGHT_CONTEXT.md`;
- `docs/features/capacity-engine.md`;
- `docs/features/calculation-validation-safety.md`;
- `docs/CALCULATION_REFERENCE.md`;
- the validated Knowles source/sample used for that task.

If `CALCULATION_REFERENCE.md` still marks a formula, unit, rounding rule, dependency, or definition as unknown, AI must not invent it.

### Team understanding
AI may accelerate implementation and testing, but the team must understand and be able to explain the manufacturing logic. Christan's Calculation & Simulation role must be able to defend what each implemented formula means, where it came from, and why the expected outputs are correct.

### Still OPEN
- exact TypeScript rule representation;
- exact engine input/output types;
- exact structured success/failure type;
- testing framework;
- numeric precision library/strategy;
- unit type strategy;
- module boundaries;
- rule execution order/dependency structure;
- performance targets;
- partial-result semantics.

### Next planning stage
**Stage 13 — Application / Workflow Architecture**: define how the Next.js application layer coordinates Assessment loading, validation, Capacity Engine execution, persistence, scenarios, Decision Trace, Reality Loop, and other features without placing manufacturing logic inside React components, Server Actions, or route handlers.


---

## 33. Stage 13 — Application / Workflow Architecture — V1 LOCKED

### One CapSight V1, two codebases
CapSight remains **one product specification, one architecture, one Knowles/domain truth, and one authoritative Markdown set**.

Two separate codebases may implement that same CapSight V1:
- Prince's independently built implementation;
- the KnowLarps collaborative implementation.

They are not different product variants and do not get separate requirement/feature contracts. If either codebase reveals a genuine CapSight architecture problem, evaluate the issue at the product level; if the correction is approved, update the shared Markdown truth and both implementations follow it.

Either implementation may become the strongest base for the competition presentation. This does not change the product/domain specification.

### Primary dependency direction

```text
Presentation
     ↓
Application
     ↓
Domain

Infrastructure supplies technical implementations at the application/domain boundaries.
```

### Presentation responsibility
Presentation handles:
- pages/layouts;
- Server and Client Components;
- forms, dialogs, tables and charts;
- responsive behavior;
- loading/error/interaction states;
- collection and display of user intent/outcomes.

Presentation does **not** own Knowles manufacturing rules, calculation truth, permissions truth, or persistent domain truth.

### Application responsibility
The Application layer coordinates meaningful CapSight use cases such as:
- create/update Capacity Assessment;
- update planning/request context;
- create Scenario;
- run Capacity Calculation;
- compare Calculation Runs;
- record Actual Validation;
- perform Solution Evaluation;
- execute governed reference/profile changes where authorized.

Application orchestrates context loading, authorization/capability checks, concurrency checks, validation, domain execution, persistence consistency, and structured outcomes. It does not replace the Capacity Engine or domain model.

### Domain responsibility
The Domain layer owns CapSight meaning and validated business behavior, including:
- Capacity Assessment, Baseline, Scenario and Calculation Run semantics;
- calculation/validation rules;
- Capacity Engine behavior;
- calculation evidence;
- comparison/Change Explanation semantics;
- resource/gap meaning;
- Reality Loop domain behavior once validated.

Domain code remains independent of React, Next.js routing, HTTP, ORM/database clients, CSS, and browser APIs.

### Infrastructure responsibility
Infrastructure handles technical mechanisms such as:
- persistence/database access;
- authentication provider integration;
- import/file adapters;
- report/export mechanics;
- future external/internal-system integrations.

Infrastructure does not become an alternative source of business truth.

### Next.js boundaries
- **Server Actions** and **Route Handlers** are framework adapters/entry points, not the place to bury CapSight business logic.
- Do not create APIs for every internal workflow; use an HTTP/API boundary only where it genuinely helps or is required.
- Prefer Server Components for server-readable/renderable work.
- Use Client Components for genuine interaction; client state may hold temporary UI/form state but never becomes authoritative calculation/domain truth.

### Reads vs state-changing actions
Keep read intent and mutation intent conceptually distinct without introducing a formal CQRS framework unless later justified.

Use CapSight language in application operations. Prefer names such as `createCapacityAssessment`, `createScenario`, `runCapacityCalculation`, and `recordActualValidation` over generic `dataService`, `helperManager`, or one giant `CapSightService`.

### Authoritative calculation workflow
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
Application persists one coherent successful Calculation Run
        ↓
Presentation renders result / trace / next actions
```

A domain validation failure returns a structured application outcome. Raw technical exceptions are not normal UX outcomes.

### Consistency and authorization
- Application/Infrastructure boundaries own transaction/consistency concerns for multi-record writes.
- Server-side authorization/capability checks are required for protected actions; hiding controls in the UI is not authorization.
- Optimistic concurrency belongs to application/persistence workflows; stale edits must not silently overwrite newer shared work.

### Workflow boundaries
Keep distinct workflows for:
- Scenario creation/editing vs Scenario calculation;
- comparison / Change Explanation;
- Reality Loop actual validation;
- Solution Evaluation;
- governed reference/master-data and Calculation Profile changes.

Do not reduce every feature to generic CRUD.

### Derived workflows
Comparison, Change Explanation, dashboards, and similar derived views should consume authoritative stored evidence/state and do not automatically require new persistent domain records.

### External/import boundaries
Future workbook, API, or internal-system input must flow through explicit mapping/parsing and application/domain validation before becoming trusted CapSight data. External data is not automatically valid.

### Persistence hooks
Do not hide core calculation workflows inside ORM hooks, database triggers, or framework lifecycle behavior. Important CapSight actions must remain explicit and traceable through the Application layer.

### Intentional Calculation Runs
> **Authoritative Calculation Runs are created intentionally.**

Editing a planning input may invalidate current-result freshness, but it does not automatically create a new historical Calculation Run on every edit/keystroke.

Live/interactive preview calculation may be explored later, but a temporary preview and a persisted authoritative Calculation Run remain separate concepts.

### Architectural restraint
Next.js is the delivery/application shell for CapSight, not the CapSight domain itself. Apply enough architecture to protect correctness and maintainability, but avoid unnecessary enterprise ceremony such as command buses, mediator frameworks, generic repository factories, or abstract factories unless real requirements justify them.

### Still OPEN
- exact use-case/module folder structure;
- exact repository/data-access contracts;
- exact transaction implementation;
- exact authentication provider;
- exact route/server-action split;
- whether live calculation preview is desirable/feasible;
- exact mapping/DTO strategy;
- exact persistence technology and ORM.

### Remaining V1 planning roadmap
The main architecture/planning sequence is capped at **18 stages** unless higher-authority Knowles evidence creates a genuinely new planning need:

- **Stage 14 — Frontend State, Interaction & Responsive Application Architecture**
- **Stage 15 — Information Architecture, Navigation & Design-System Application**
- **Stage 16 — Persistence Technology & Data-Access Implementation Strategy**
- **Stage 17 — Project Structure, Engineering Standards & AI Development Workflow**
- **Stage 18 — V1 Implementation Roadmap & Competition Readiness Plan**

After Stage 18, implementation begins. Later discoveries should normally revise the relevant existing contract rather than extending the stage count for minor decisions.

### Next planning stage
**Stage 14 — Frontend State, Interaction & Responsive Application Architecture**: define form/unsaved-edit behavior, Scenario Studio interactions, loading/error states, responsive comparison/chart patterns, dialogs, temporary client state, and server/client boundaries without turning the frontend into a second domain layer.

---

## 34. Stage 14 — Frontend State, Interaction & Responsive Application Architecture — V1 LOCKED

### Approval scope
Stage 14 is approved for **frontend state, interaction behavior, responsiveness, accessibility, and server/client responsibility**.

**Visual design specifics are intentionally NOT locked by this stage.** Color palette, typography, visual density, component styling, motion character, decorative treatment, radius/shadow language, and other aesthetic choices will be decided collaboratively during implementation based on **Prince's taste and the assistant's design judgment**, with Prince retaining approval before a visual direction becomes authoritative. The same design direction applies to CapSight V1 regardless of which codebase is being implemented.

This does not weaken the approved UX constraints below: the interface must still preserve engineering meaning, remain responsive, accessible, understandable, and consistent.

### Frontend state model
CapSight distinguishes four frontend-state categories:

1. **Authoritative server/domain state** — persisted CapSight records and calculation truth.
2. **Form/draft state** — values currently being edited but not yet authoritatively persisted.
3. **Interaction state** — selections, expanded panels, dialogs, active views, temporary UI behavior.
4. **Derived view state** — safe display-only values recomputed from authoritative state.

Authoritative CapSight records must not be maintained as one giant client-side source of truth.

### Saved vs draft state
Persisted data and the user's current draft are distinct. Meaningful editing flows should be able to represent states such as:

`Clean → Dirty/Unsaved → Saving → Saved / Save Failed / Conflict`

For V1, **explicit save is the default for meaningful domain edits**. Autosave is not assumed. Client-side validation may provide immediate guidance, but application/domain validation remains authoritative.

### Form and workflow interaction
- Long forms are grouped by workflow/domain meaning, not by database tables.
- CapSight should support iterative navigation rather than force an irreversible wizard experience.
- Recoverable save/validation/concurrency failures should preserve the user's draft wherever practical.
- Meaningful unsaved work must not be silently discarded on navigation where the application can reasonably warn the user.
- Disabled important actions should communicate why they are unavailable when the reason is not obvious.
- Destructive actions require proportionate confirmation or recovery behavior.

### Scenario Studio and client interaction
Scenario Studio may use richer client state for temporary edits, selection, comparison targets, expandable details, chart modes, and potential preview interaction. However:

- persisted Scenario state remains server/application-owned;
- official calculated results remain authoritative server/domain state;
- temporary preview calculations, if later introduced, are visually and semantically distinct from persisted Calculation Runs;
- editing inputs after a calculation makes the current planning state **need recalculation** without mutating historical runs.

### State-management restraint
- Do not introduce Redux, Zustand, MobX, or another global-state library by default.
- Prefer Server Components, route/search parameters where meaningful, local component/form state, and server persistence first.
- Add a global client-state tool only when real cross-tree interaction complexity demonstrates a need.
- Do not mirror server data into client state without a real draft/interaction reason.
- Avoid effect-driven synchronization webs; explicit data flow and user actions are preferred.

Exact form, caching/query, and global-state libraries remain OPEN.

### Loading, mutation, error, and conflict UX
- Localized loading should preserve surrounding context where possible instead of blanking the entire application.
- Optimistic UI is suitable for low-risk local interactions but must be cautious for meaningful domain mutations.
- Successful saves should usually use restrained feedback; failures and conflicts deserve stronger visibility.
- Concurrency conflicts must be explained in human workflow language, not raw `409`/technical responses.
- Errors should appear at the scope where they occur: field, section, calculation, or application/system level.
- Toasts may supplement feedback but are not the sole error architecture.
- Empty states should explain the context and a useful next action.

### Result freshness and calculation trust
A previously successful Calculation Run remains historical evidence. If its Planning State is later edited, CapSight must clearly communicate that the historical result no longer represents the current draft and that recalculation is required.

A temporary/live preview, if eventually supported, must not be mistaken for an authoritative persisted Calculation Run or be used as historical/Reality Loop evidence unless explicitly committed through the approved calculation workflow.

### Responsive architecture
> **Responsive means information-preserving, not merely layout-shrinking.**

- Layout may transform between desktop, laptop, tablet, and phone.
- Important engineering meaning — values, units, labels, warnings, profile/version context, status, and trace access — must remain available.
- Tables receive deliberate mobile strategies such as stacked records, compact cards, prioritized columns, expandable detail, or horizontal comparison only where necessary.
- Charts cannot rely on hover for critical information; touch, labels, legends, focus, or adjacent detail must provide equivalent access.
- Information hierarchy may change by device, but important context may not simply disappear.
- Responsive behavior should be planned component-by-component rather than patched after desktop implementation.

### Motion and interaction
Motion is allowed and encouraged when it helps explain state or change, such as scenario comparison, variance, transitions into detail, or calculation-state changes. Motion is not decorative justification by itself.

- Critical meaning must remain understandable without animation.
- Reduced-motion preferences should be respected.
- Interactions should acknowledge user input immediately without falsely claiming server success.

### Accessibility baseline
V1 frontend architecture includes:
- keyboard-operable controls where applicable;
- visible focus behavior;
- semantic interactive elements;
- screen-reader labels where needed;
- sufficient contrast;
- no status or meaning conveyed by color alone.

Accessibility is part of the component/interaction architecture, not a final polish pass.

### Decision Trace interaction
Decision Trace uses progressive disclosure rather than displaying every formula, variable, intermediate value, rule, and version detail at once.

Conceptually:

`Result → Trace Summary → Calculation Steps → Formula/Variable Detail → Profile/Version Context`

The exact presentation and visual design remain OPEN for implementation.

### Shared interaction consistency
CapSight should reuse consistent interaction patterns for equivalent concepts such as forms, status, detail disclosure, dialogs/drawers, tables, charts, and errors. Exact visual components/design tokens will be chosen during implementation based on Prince + assistant design direction rather than pre-locked in architecture planning.

### Still OPEN
- exact aesthetic/visual direction;
- final color palette and typography;
- density, radius, shadow, iconography, and component styling;
- exact motion vocabulary and motion library;
- exact form library;
- exact schema/form-validation library;
- exact client caching/query library;
- whether a global state library becomes necessary;
- exact route/search-param conventions;
- exact unsaved-navigation implementation;
- exact concurrency reconciliation UI;
- whether live Scenario preview is implemented;
- exact table/chart responsive patterns per final data shape.

### Next planning stage
**Stage 15 — Information Architecture, Navigation & Design-System Application.** Stage 15 should define the screen/navigation hierarchy and reusable interaction/design vocabulary needed by CapSight, while keeping final aesthetic choices collaborative and implementation-led rather than freezing Prince's visual taste prematurely.


## Stage 15 — Information Architecture, Navigation & Design-System Application — APPROVED V1

Stage 15 is approved without changing any previously approved CapSight contracts.

### Approved V1 locks
1. CapSight information architecture centers on two primary contexts: **Shared Workspace** and **Capacity Assessment**.
2. Navigation follows the IE workflow rather than exposing every architectural feature as a top-level module.
3. The Shared Workspace is the work-entry/discovery surface; it is not a detached analytics-only dashboard.
4. Opening an Assessment creates persistent assessment context across its planning workflow.
5. Baseline is visually and semantically distinguished as the reference planning state rather than being treated as an ordinary scenario.
6. Scenario Studio, Comparison, Solution Evaluation and Reality remain contextual to their Capacity Assessment.
7. Decision Trace is primarily accessed from the result/calculation it explains rather than treated as a disconnected primary module.
8. Calculation definitions/formulas are progressively accessible through contextual Trace/Calculation Backbone drilldown.
9. Capacity Gap should provide a natural contextual path toward Solution Evaluation.
10. CAPEX remains subordinate to Solution Evaluation/handoff until Knowles validates a broader CapSight responsibility.
11. Reality Loop remains within the Assessment lifecycle, preserving the Plan → Actual relationship.
12. Reporting derives from authoritative Assessment/Calculation information; its exact navigation prominence remains OPEN.
13. Reference/master data and Calculation Profile governance remain architecturally separate from ordinary assessment editing.
14. Workspace discovery supports future search/filter/sort based on validated assessment fields.
15. Deep links preserve assessment/planning/calculation context.
16. Increasing navigation depth must retain understandable location/back-navigation context.
17. Responsive navigation may visually transform by device, but the underlying information hierarchy remains the same.
18. The design system maintains **Primitives → CapSight Patterns → Product Features** as useful levels without forcing unnecessary abstraction.
19. Design tokens should represent semantic design meaning rather than scattered literal styling values.
20. Status terminology and visual semantics remain consistent across the application.
21. Repeated interaction problems should use shared CapSight patterns rather than each feature inventing unrelated behavior.
22. Charts/visualizations should eventually share a consistent CapSight information/interaction grammar.
23. **Exact visual design remains intentionally OPEN until implementation and is decided collaboratively according to Prince's taste and the assistant's design recommendations.**
24. Figma may serve as the visual source of truth for approved UI/design direction, with implementation tokens aligned to it.
25. CapSight should pursue a distinctive, crafted engineering-product identity rather than a generic SaaS/template appearance.
26. These information architecture and design-system rules apply identically to both codebases implementing the single CapSight V1.

### Information architecture backbone

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

Navigation follows the IE's work. Scenario Studio, Comparison, Solution Evaluation, Reality, Decision Trace, and the Calculation Backbone remain contextual rather than becoming disconnected top-level modules.

### Design-system boundary
CapSight maintains the useful levels **Primitives → CapSight Patterns → Product Features**. Semantic design tokens, consistent status language, reusable interaction patterns, and a coherent visualization grammar are approved directions.

The final palette, typography, density, radius, shadow, surfaces, iconography, navigation styling, chart appearance, page composition, microinteractions, and motion personality remain OPEN until implementation. They will be designed collaboratively according to Prince's taste and the assistant's design recommendations, with Prince approving the direction.

### Next planning stage
**Stage 16 — Persistence Technology & Data-Access Implementation Strategy.**

## Stage 16 — Persistence Technology & Data-Access Implementation Strategy — APPROVED V1

Stage 16 is approved without changing any unrelated previously approved CapSight contracts.

### Approved V1 technology direction
- **PostgreSQL** is the preferred CapSight V1 relational database technology.
- **Prisma** is the preferred V1 ORM/data-access technology, subject to a small implementation spike before large schema investment.
- PostgreSQL hosting/provider remains **OPEN** until deployment planning.
- Authentication provider remains **OPEN**.
- Final Knowles manufacturing schema remains **OPEN pending authoritative workbook/formula discovery**.

### Approved V1 locks
1. **PostgreSQL is the preferred CapSight V1 relational database technology.**
2. A relational model fits CapSight's centralized, multi-user, assessment/scenario/calculation/history relationships better than a local-only persistence approach.
3. PostgreSQL hosting/provider remains OPEN until deployment planning.
4. **Prisma is the preferred V1 ORM/data-access technology**, subject to a small implementation spike before large schema investment.
5. Prisma/database models do not replace CapSight domain models.
6. Capacity Engine remains completely independent of Prisma/database access.
7. Final Knowles manufacturing schema must not be invented before authoritative workbook/formula discovery.
8. Stable CapSight structural relationships may be modeled before the manufacturing-specific fields are finalized.
9. Prefer relational structure for important searchable/governed relationships; JSON is allowed selectively for immutable snapshots/evidence where justified.
10. Calculation Runs are append-oriented historical evidence and are not silently updated when planning inputs change.
11. Mutable working records and historical evidence receive different persistence behavior.
12. Calculation Profile revisions and relevant reference-data history must remain traceable from historical Calculation Runs.
13. Current reference truth and historical calculation context remain separate.
14. Technical database IDs carry no assumed business meaning; exact ID strategy remains OPEN.
15. Human-readable business identifiers remain separate and must follow Knowles terminology if one exists.
16. Timestamp fields are added according to explicit semantic purpose rather than automatically.
17. Editable shared records support optimistic-concurrency revision checking.
18. Application-level workflows use database transactions where multiple persistence operations must remain consistent.
19. UI/framework code should not scatter direct Prisma business queries throughout the application.
20. Avoid premature generic repository abstractions; data-access boundaries should follow actual CapSight workflows.
21. Read models may be optimized for their view/use case without loading complete domain graphs.
22. Avoid fetching entire assessment histories/evidence when the current view does not require them.
23. Trace/evidence data may be progressively loaded where useful.
24. Indexing follows validated query/search patterns rather than premature optimization.
25. Database constraints protect structural persistence invariants; manufacturing/business rules remain primarily in the Domain layer.
26. Database migrations are version-controlled and reproducible.
27. Schema changes are performed through migrations rather than manual environment-specific edits.
28. Development seed data is explicitly synthetic until approved sanitized Knowles data exists.
29. Development seeds and golden calculation fixtures remain separate concepts.
30. Knowles-sensitive production data and secrets must not be committed to Git.
31. Development and competition/production databases remain separate environments.
32. The independent and team CapSight codebases use **separate database instances**, despite implementing the same product specification.
33. Backup/recovery relies on proportionate managed infrastructure rather than building unnecessary custom enterprise systems.
34. Authentication/security credentials are handled by a suitable auth system rather than custom password storage; exact provider remains OPEN.
35. Deletion/archive/retention policy remains OPEN, with historical calculation evidence treated conservatively.
36. After Knowles validation, fields are classified by role — reference, assessment input, scenario-editable, calculated, default, derived — before final schema design.
37. A small PostgreSQL + Prisma persistence spike should validate the stack before large-scale schema implementation.
38. Early persistence can implement stable Assessment/Planning State/Scenario/Calculation Run structure without inventing unknown calculator fields.
39. The final persistence design must preserve the information required for CapSight's traceability and historical reproducibility.
40. These persistence rules apply to both codebases implementing the single CapSight V1.

### Persistence shape principles
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

The ORM/database remains infrastructure. The Capacity Engine receives validated calculation context and never queries persistence directly.

### Structural schema vs Knowles calculation schema
CapSight may model stable product relationships first, such as Capacity Assessment, Planning State, Scenario identity, Calculation Run shell, profile/reference context, Actual Validation, and Solution Evaluation. Manufacturing-specific fields and relationships — routing, UPH/process matrix, tooling, equipment, fixtures, volume mix, resource dependencies, and similar operational data — wait for authoritative Knowles validation.

### Relational data vs JSON
Use relational structure for important searchable, governed, related, and indexed domain information. JSON may be used selectively where immutable calculation snapshots/evidence benefit from preserving a structured historical shape. Do not use `JSON` as a substitute for understanding the domain.

### Historical integrity
- Calculation Runs are append-oriented historical evidence.
- Calculation Profile revisions and relevant reference-data revisions/context must remain traceable from historical runs.
- Current reference truth must not overwrite historical calculation truth.
- Mutable working records and historical evidence must not expose identical mutation behavior.

### Data-access discipline
- Do not scatter direct Prisma calls through React/UI/framework code.
- Use application/data-access boundaries that follow CapSight use cases.
- Avoid premature `GenericRepository<T>`-style abstractions.
- Allow targeted read models for workspace summaries, result views, and other query-specific needs instead of loading full domain graphs.
- Load trace/evidence progressively where beneficial.

### Concurrency and transaction behavior
Editable shared records retain optimistic-concurrency revision checking. Multi-record persistence operations that form one meaningful application action use transactions where needed so partial writes do not create inconsistent calculation/history state.

### Migration and environment rules
- Schema changes are version-controlled through migrations.
- Do not manually patch production/competition database structure as the normal change mechanism.
- Development seed data is synthetic unless Knowles explicitly approves sanitized data.
- Golden calculation fixtures remain separate from ordinary development seeds.
- Sensitive Knowles data and secrets are not committed to Git.
- Development and competition/production databases remain separate.
- Prince's independent codebase and the team codebase use separate database instances.

### Still OPEN
- PostgreSQL hosting/provider;
- authentication provider;
- exact technical ID strategy;
- exact human-readable business identifier format;
- final Knowles manufacturing schema;
- exact relational-vs-JSON boundaries for calculation snapshots/evidence;
- final indexing strategy;
- final retention/archive/delete policy;
- backup/recovery provider details;
- exact production/preview hosting topology.

### Next planning stage
**Stage 17 — Project Structure, Engineering Standards & AI Development Workflow.**

## Stage 17 — Project Structure, Engineering Standards & AI Development Workflow — APPROVED V1

Stage 17 is approved with one explicit correction: **Vitest is NOT locked. The unit/domain/application testing framework remains OPEN until implementation.** The rest of the Stage 17 direction is approved.

### Project structure direction
CapSight uses a layered source structure centered on:

```text
src/
├── app/             # Next.js routes/layouts/thin framework entry points
├── presentation/    # components, forms, charts, feature UI
├── application/     # CapSight use-case/workflow orchestration
├── domain/          # CapSight domain model, validation, calculation, trace
├── infrastructure/  # Prisma/database, auth, import/export/integration adapters
└── shared/          # genuinely cross-cutting UI/types/utilities/config only
```

Supporting project areas may include `prisma/`, `docs/`, `tests/e2e/`, and `public/`. Folders are created only when they are actually needed; the structure is a dependency/ownership guide, not a requirement to scaffold empty directories.

### Layer protection
- `domain/` remains framework- and database-independent.
- Capacity Engine receives especially strict isolation and must not depend upward on application, infrastructure, presentation, or Next.js layers.
- `app/` stays thin and framework-focused.
- `shared/` must not become a dumping ground for CapSight domain/application logic.
- Prisma records remain infrastructure representations and do not become the universal domain/presentation model.
- `"use client"` is introduced only at genuine interactive boundaries.

### TypeScript and code standards
- TypeScript strict mode remains enabled.
- Avoid `any`, especially in domain/calculation code; unknown external values should enter as `unknown` and be validated/mapped.
- Use exact CapSight terminology in code (`Capacity Assessment`, `Baseline`, `Scenario`, `Calculation Run`, `Decision Trace`, `Reality Loop`, `Calculation Profile`, etc.) rather than casual renaming.
- ESLint + Prettier are the preferred linting/formatting direction; cosmetic formatting details are selected during scaffolding.
- Prefer one simple root import alias and avoid unnecessary alias/barrel-file complexity.
- Comments should explain non-obvious reasoning/domain intent rather than narrating obvious code.
- Temporary debug output, scratch notes, dead code, and unused development artifacts should not remain in committed production code.

### Testing direction
- Automated tests remain required for the Capacity Engine/domain behaviors defined in the Stage 12 testing contract.
- **The unit/domain/application testing framework remains OPEN. Vitest is not an approved/locked dependency.**
- Choose the smallest testing tool the team can understand and maintain while still supporting plain-TypeScript domain tests, the Knowles golden case, regression tests, and required workflow verification.
- Playwright remains the preferred later E2E option for a small set of critical competition workflows, subject to implementation-time confirmation.
- Compilation alone is not evidence of manufacturing/calculation correctness.

### Runtime and package-management standards
- Use predictable npm scripts such as `dev`, `build`, `lint`, `typecheck`, and `test` once the related tooling exists.
- Pin/document the supported Node.js version during scaffold setup.
- npm remains the package manager and `package-lock.json` is committed.
- Centralize environment-variable access; secrets remain outside Git and `.env.example` documents required variable names without credentials.

### Git and repository workflow
Both repositories implement the same CapSight V1 specification and architecture, but contributor workflow may differ:

- **Prince independent implementation:** may move aggressively; `main` should remain reasonably runnable, with feature branches used where they add value for risky/large changes.
- **KnowLarps team implementation:** use short-lived feature branches and lightweight pull-request review for substantial changes; avoid long-lived per-developer branches.
- Prefer small, meaningful commits and lightweight Conventional Commit prefixes such as `feat:`, `fix:`, `refactor:`, `test:`, `docs:`, and `chore:`.
- The two repositories synchronize through the **shared CapSight specification**, not automatic source-code copying.
- Source-code convergence, if later desirable, is an explicit team decision rather than an automatic synchronization mechanism.

### AI development governance
- `CAPSIGHT_CONTEXT.md` remains the mandatory AI entry point for substantial work.
- After context, AI reads only the authoritative contracts relevant to the task rather than indiscriminately loading every document.
- Calculation work must read `CALCULATION_REFERENCE.md` plus the relevant Capacity Engine/validation contracts.
- If Knowles calculation truth is unresolved, AI must stop at the unresolved requirement rather than invent a formula, unit, meaning, range, default, dependency, or business rule.
- AI inspects relevant existing code and contracts before substantial modification.
- New meaningful dependencies require explicit approval before adoption.
- AI may not violate approved architecture merely to make a task faster/easier.
- Contract/code conflicts must be surfaced rather than silently resolved.
- AI must not casually rewrite authoritative Markdown to match an implementation deviation; architectural changes are discussed/approved first, then contracts are intentionally updated.
- Thin tool-specific instruction files may point agents to the authoritative contracts but must not duplicate the product specification.
- Codex remains primary for architecture-sensitive, multi-file, domain, persistence, calculation, deep debugging, refactor, and complex test work.
- Copilot remains preferred for localized implementation assistance, repetitive changes, CSS, boilerplate, minor fixes, and simple tests.
- UI implementation must follow approved Figma/design-system direction rather than AI-selected aesthetics.
- AI tasks should be bounded and explicit in scope.
- Significant implementations must be verified with appropriate available checks (`lint`, `typecheck`, tests, build) according to task scope.

### Unresolved-work markers
- `TODO(KNOWLES)` identifies unresolved authoritative Knowles/domain requirements.
- `TODO(V1)` may identify limited implementation work and must not become a substitute for completing critical logic.
- Synthetic/demo data must identify itself clearly and must not masquerade as validated Knowles truth.

### CI and documentation
- Add lightweight CI after the scaffold stabilizes, checking the available install/typecheck/lint/test/build steps appropriate to the project.
- Approved requirement/architecture changes update the shared authoritative Markdown contracts, then both implementations intentionally adapt to the new truth.
- `README.md` documents how to install/run/develop/test the codebase; `CAPSIGHT_CONTEXT.md` remains the product-context authority.
- Avoid unnecessary enterprise abstractions. CapSight's architecture must remain understandable and defensible by Prince and the team.

## Stage 18 — V1 Implementation Roadmap & Competition Readiness Plan — APPROVED V1

Stage 18 completes the planned CapSight V1 architecture/planning cycle. Future discoveries — especially higher-authority Knowles evidence — revise the relevant existing contracts instead of automatically creating endless new planning stages.

### Implementation sequence
CapSight is built through vertical capability slices rather than attempting every feature at once:

```text
FOUNDATION
    ↓
APPLICATION SHELL + DESIGN DIRECTION
    ↓
ASSESSMENT LIFECYCLE
    ↓
PERSISTENCE SPIKE
    ↓
BASELINE WORKFLOW SHELL
    ↓
OCTOBER 14 KNOWLES DOMAIN GATE
    ↓
CALCULATION REFERENCE
    ↓
REAL CAPACITY ENGINE
    ↓
BASELINE CALCULATION + DECISION TRACE
    ↓
SCENARIO STUDIO + COMPARISON
    ↓
SOLUTION / CAPEX BOUNDARY / REALITY LOOP
    ↓
WORKSPACE INTELLIGENCE + REPORTING
    ↓
VISUAL REFINEMENT
    ↓
COMPETITION HARDENING
```

### Before October 14
Safe implementation work includes:
- repository/tooling foundation;
- Next.js application shell;
- Prince-approved initial design direction and Figma work where useful;
- Capacity Assessment lifecycle;
- PostgreSQL + Prisma persistence spike;
- Baseline/planning-state workflow shell;
- concurrency/revision foundations;
- clearly synthetic/demo data where needed.

Do **not** invent Knowles manufacturing fields or real capacity formulas to make the app appear complete.

### October 14 calculation-domain gate
Before real Capacity Engine implementation:
1. assimilate Knowles terminology, definitions, units, formulas, defaults, rounding, exceptions, dependencies, and scenario rules;
2. classify relevant fields as `REFERENCE_DATA`, `ASSESSMENT_INPUT`, `SCENARIO_EDITABLE`, `CALCULATED`, `DEFAULT`, or `DERIVED`;
3. obtain/construct only Knowles-approved sanitized calculation examples;
4. populate `CALCULATION_REFERENCE.md` with validated calculation truth;
5. keep unresolved items explicitly OPEN / `TODO(KNOWLES)` rather than filling gaps with assumptions.

### Capacity Engine build order
Implement validated rules incrementally, understand each rule, verify it, then combine them into the golden end-to-end calculation case. The unit/domain/application testing framework remains OPEN and is selected during implementation based on understandability and project needs.

### First complete vertical slice
The first complete domain slice is:

```text
Capacity Assessment
      ↓
Validated Baseline Inputs
      ↓
Calculation Readiness
      ↓
Capacity Engine
      ↓
Immutable Calculation Run
      ↓
Resource Requirements + Capacity Gap
      ↓
Decision Trace
```

Only after this foundation is reliable should Scenario Studio and advanced comparison become primary implementation work.

### Feature sequencing after the baseline slice
1. Decision Trace from real engine evidence.
2. Scenario Studio using only Knowles-approved scenario variables.
3. Comparison + deterministic Change Explanation.
4. Solution Evaluation using validated capacity gaps and confirmed solution categories.
5. CAPEX support only to the depth Knowles validates.
6. Reality Loop using exact historical Calculation Runs and validated actual fields.
7. Shared Workspace intelligence based on authoritative stored domain data.
8. Reporting/output behavior based on Knowles-confirmed communication needs.
9. Visual/motion refinement after core workflows are reliable.
10. Competition hardening and demo rehearsal.

### Competition priority
Working, truthful core functionality is more important than broad but incomplete feature count.

**Core priority:** Assessment, Baseline Calculation, Resource Requirements, Capacity Gap, Scenario Studio, Comparison, Decision Trace.

**Strong priority:** Solution Evaluation, Reality Loop, Shared Workspace.

**Conditional / validated scope:** Constraint Radar, deep CAPEX workflow, live integrations, advanced reporting.

Constraint Radar remains conditional and must be reduced or omitted if Knowles does not validate meaningful binding-constraint logic.

### Competition readiness
Competition readiness is not the same as feature completeness. The selected competition build must be:

> **Correct + Stable + Explainable + Responsive + Demonstrable + Team-understood**

Hardening includes:
- Knowles-validated formula/units/rounding verification;
- golden case verification;
- no unresolved critical `TODO(KNOWLES)` items in the demo path;
- resilient navigation/refresh/database behavior;
- stale-state and draft-safety checks;
- responsive testing across phone, tablet-like, laptop, and desktop widths;
- no broken routes, fake buttons, placeholder copy, unexplained loading, or obvious console/runtime errors in the demo path;
- deliberate review of Scenario Studio, Comparison, Decision Trace, charts, and tables on small screens.

### Demo-safe path
The live demonstration should follow a rehearsed product story rather than randomly touring pages:

1. Show the centralized Capacity Assessment.
2. Show the validated Baseline requirement.
3. Show why CapSight produced the result through Decision Trace.
4. Change/open one approved scenario condition.
5. Show the scenario calculation.
6. Show deterministic Change Explanation / comparison.
7. Show resulting capacity-gap and solution context.
8. Show how planned results can later be validated against actuals through Reality Loop.

This demonstrates CapSight's core identity:

> **Calculate → Explain → Simulate → Validate → Decide**

Use Knowles-approved sanitized data where possible so the demo is predictable and defensible.

### Two-codebase implementation rule
Both separate codebases implement the same CapSight V1 contracts and use the same roadmap, but they may progress at different speeds. Neither codebase is predetermined as the final submission. Prince's independent build remains fully eligible to become the competition foundation.

Closer to competition, perform a convergence checkpoint comparing both implementations on:
- requirement coverage;
- calculation correctness;
- stability;
- UX/responsiveness;
- traceability;
- demo readiness;
- technical debt;
- team understanding.

Select the strongest competition foundation and intentionally integrate useful contributions where appropriate; do not pretend authorship/contribution history is something it is not.

### V1 complete
CapSight V1 is complete when a user can create/open a Capacity Assessment, establish a validated Baseline, produce traceable resource requirements using Knowles-approved calculations, simulate approved alternatives, compare calculation states, evaluate resulting capacity gaps, and preserve the planning context required for the approved downstream solution/actual-validation workflows across the supported responsive interface.

Features that Knowles validates as required — including Solution Evaluation, Reality Loop, reports, and necessary CAPEX context — must reach their approved V1 depth before competition submission.

### Feature-creep boundary
During implementation, new AI/team suggestions are accepted only if they are justified by:
- a Knowles requirement;
- CapSight's approved product proposition;
- available implementation time;
- clear competition value.

Otherwise they are deferred or rejected. Stage 18 protects the finish line.

### Planning-cycle status
**Stages 1–18 are APPROVED V1. The main architecture/planning cycle is complete.**

The next work is **Implementation Phase 0 — Repository & Development Foundation**, not Stage 19.

