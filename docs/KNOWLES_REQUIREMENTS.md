# Knowles Requirements

## Status

CapSight Implementation Phase 5 — Knowles Truth Assimilation is **CURRENT / ACTIVE**. Phase 5A prepared this ledger; received authoritative operational evidence is now being assimilated. Phase 5 is not complete, and no validated calculation rules are recorded.

> Unknowns are treated as requirements to validate — not blanks to fill with assumptions.

Confirmed information below comes from existing authoritative project documentation and the supplied Knowles presentation content. High-level intake information items and business responsibilities are confirmed; their exact field map and rules remain OPEN. No validated formulas or Knowles golden sample are recorded yet. OPEN items are validation requirements; CLARIFICATION items first need their meaning or relevance established. Neither status authorizes implementation.

Current kickoff scheduling, organizational status, and rescheduling provenance are maintained in [CAPSIGHT_CONTEXT.md, section 4](../CAPSIGHT_CONTEXT.md#4-official-engineering-hackathon-timeline-and-organizational-status). Alignment does not guarantee complete domain truth. Evidence assimilation is already active; unresolved items remain open afterward, and validation may continue during Engineering Hackathon Phase 2, October 2026 to March 2027. Engineering Hackathon phases and CapSight Implementation phases are separate sequences.

## Authority and Source Hierarchy

Preserve the hierarchy in [CAPSIGHT_CONTEXT.md, section 2](../CAPSIGHT_CONTEXT.md):

1. Knowles / KEP mentor-validated operational material: actual workbook, mentor walkthroughs, reference documents, validated formulas/business rules/terminology/sample calculations.
2. September 30 Knowles project orientation.
3. Official Knowles Hackathon Guidelines.
4. Submitted KnowLarps CapSight Proposal.
5. KnowLarps implementation/design decisions.

This ledger is authoritative for reconciled Knowles-derived requirements and their validation status; it does not replace the underlying evidence or change its priority. Feature/domain contracts specify the affected CapSight behavior. [CALCULATION_REFERENCE.md](CALCULATION_REFERENCE.md) remains mandatory authority before corresponding calculation implementation. Team architecture choices and proposal commitments are not proof of Knowles field or formula truth.

Keep only operational requirements, clarification questions, provenance, and affected-contract links here. Meeting transcripts, implementation logs, and speculative feature ideas do not belong in this ledger. Informal meeting notes alone are not implementation authority: validated statements must first be reconciled through the procedure below.

## Received Authoritative Evidence

### Knowles operational/manufacturing evidence

Assimilated on October 7, 2026:

| Source | Source date | Scope / provenance |
| --- | --- | --- |
| Knowles presentation: **Production Capacity Requirement Calculator** | September 30, 2026 | User-designated authoritative operational evidence. Supplied presentation content establishes CAPEX Assessment Flow, intake information items, assessment/solution/submission responsibilities, and system-quality intent. The deck file, slide locators/version, named validator, and separate validation date were not supplied; do not invent them or infer mathematical rules. |

### Organizer/logistics evidence — not manufacturing validation

Preserve scheduling provenance separately from operational requirements. The initial postponement was recorded at the October 7 checkpoint; the later organizational confirmation was reconciled October 24. Reconciliation dates do not establish the dates of the underlying communications. These sources establish logistics only, not manufacturing authority or calculation readiness.

| Source | Source date | Scope / provenance |
| --- | --- | --- |
| Newer team communication postponing kick-off/project alignment | Communication date not supplied | Historical record from the October 7 checkpoint: user-supplied explicit postponement to October 28, 2026 superseded the originally announced October 14 kickoff date. It did not establish complete domain validation or change the other event dates. |
| KnowLarps organizational announcements and project-lead follow-up confirmation — reconciled October 24, 2026 | Individual communication dates not supplied | Subsequent rescheduling confirmation and organizational status are recorded in the [project context](../CAPSIGHT_CONTEXT.md#4-official-engineering-hackathon-timeline-and-organizational-status). Organizer/logistics evidence supplies no new validated calculation formulas, variable definitions, units, rounding, Capacity Gap equations, or scenario-calculation dependencies. Phase 5 remains active. |

In the evidence and validation tables below, **Deck (September 30, 2026)** refers to the supplied content of that named presentation, with the provenance limits above. Confirmation is limited to the stated existence, flow, or business intent; it does not confirm field/schema design or calculation rules.

## Confirmed Operational Workflow

The September 30, 2026 Knowles project orientation, recorded in [CAPSIGHT_CONTEXT.md, section 3](../CAPSIGHT_CONTEXT.md), establishes the existing business context below. The supplied deck provides stronger direct flow and responsibility evidence in the following section; neither source supplies a validated calculation workbook.

| Confirmed operational statement | Affected CapSight contract |
| --- | --- |
| Industrial Engineering owns production capacity requirements / capacity assessment for NPI/new project lines and sustaining lines needing additional capacity. | [Product architecture](PRODUCT_ARCHITECTURE.md); [Assessment lifecycle](features/assessment-lifecycle.md) |
| Receive CAPEX Request → review completeness → return to requester if incomplete → Capacity Assessment → Solution Evaluation → CAPEX submission/feedback. | [Assessment lifecycle](features/assessment-lifecycle.md); [Baseline workflow](features/baseline-workflow.md); Solution Evaluation/CAPEX contract in context, Stage 6 |
| Assessment covers demand requirements, available capacity, volume mix impact, shared tool capacity, and Capacity Gap. | [Baseline workflow](features/baseline-workflow.md); [Capacity Engine](features/capacity-engine.md) |
| Resource areas include headcount/manpower, machines/equipment, tooling, fixtures, and related logistical/support resources. | [Capacity Engine](features/capacity-engine.md); [Calculation reference](CALCULATION_REFERENCE.md) |

These statements establish workflow and areas of assessment, not exact inputs, units, formulas, or automatic transitions. Returning an incomplete request does not establish a messaging or approval integration.

## Deck Evidence: Confirmed Existence / Business Intent

All statements in this table are sourced to **Deck (September 30, 2026)**. OPEN details remain validation requirements, not permission to fill in a design.

| Area | Confirmed source statement | OPEN semantics / rule / implementation | Affected contract |
| --- | --- | --- | --- |
| Request context | Receive CAPEX Request: **NPI or Sustaining Capacity Increase**. | Exact request-type representation, classification criteria, and fields. | [Assessment lifecycle](features/assessment-lifecycle.md) |
| Intake item 1 | **Affected model line / PN**. | One field, multiple fields, or relationship; definitions, types, ownership, and validation. | [Assessment lifecycle](features/assessment-lifecycle.md) |
| Intake item 2 | **If new PN: attach the routing with PDT**. | What qualifies as new; routing source/structure and attachment mechanism; PDT meaning/structure. | [Assessment lifecycle](features/assessment-lifecycle.md) |
| Intake item 3 | **Volume and Volume Mix**. | Volume unit/time basis and Volume Mix representation, constraints, and calculation use. | [Assessment lifecycle](features/assessment-lifecycle.md); [Calculation reference](CALCULATION_REFERENCE.md) |
| Intake item 4 | **Days/week scenario**; deck states **Default: 6 days/week**. | Manual/derived selection, default applicability, valid alternatives, and calculation use. This is a deck-stated default, not a universal or implemented default. | [Assessment lifecycle](features/assessment-lifecycle.md); [Calculation reference](CALCULATION_REFERENCE.md) |
| Intake item 5 | **Supplier Tooling**. | Exact meaning, representation, ownership, constraints, and calculation use. | [Assessment lifecycle](features/assessment-lifecycle.md) |
| Intake item 6 | **If using existing capacity from other models: how much of the tool capacity should be retained**. | Retained capacity meaning, expression, measurement/units, conditions, and calculation use. | [Assessment lifecycle](features/assessment-lifecycle.md); [Calculation reference](CALCULATION_REFERENCE.md) |
| Completeness | Requestor shall provide the six listed information items. **Complete information? NO → Return to Requestor for Completion; YES → Continue to Capacity Assessment.** | Exact mandatory/conditional rules, presence vs engineering validation, deciding authority, resubmission/editing process. No software transition or approval mechanism is defined. | [Assessment lifecycle](features/assessment-lifecycle.md); [safety](features/calculation-validation-safety.md) |
| Capacity Assessment | **Validate demand requirement; Evaluate available capacity; Review volume mix impact; Assess shared tool capacity; Identify capacity gap.** | Mathematical definitions, units, formulas, dependencies/order, rounding, exceptions, and exact outputs. These are responsibilities, not an engine execution sequence. | [Baseline workflow](features/baseline-workflow.md); [Calculation reference](CALCULATION_REFERENCE.md) |
| Solution Evaluation | **Existing capacity optimization; Equipment transfer / reallocation; New tooling requirement; New equipment requirement.** | Evaluation criteria, resource/cost rules, and recommendation logic. No automatic recommendation is authorized. | Solution Evaluation contract in context, Stage 6 |
| CAPEX Submission | **CAPEX cost; Submit CAPEX to requestor and wait for feedback.** | Cost source/computation, feedback meaning, subsequent steps, and CapSight's tracking boundary. No approval workflow, procurement integration, roles, or permissions are established. | CAPEX boundary in context, Stage 6 |
| Process bands | **INPUT → VALIDATE → ANALYZE → DEVELOP → SUBMISSION**. | Exact software statuses and transition rules beyond the approved lifecycle gates. | [Assessment lifecycle](features/assessment-lifecycle.md) |
| Centralized data use | All IEs work from one consistent source instead of different files. | Exact data ownership, sources, synchronization, and access rules. | [Product architecture](PRODUCT_ARCHITECTURE.md); [reference data](features/reference-data.md) |
| Accuracy | Validated and updated data reduce variation. | Exact validation, maintenance, freshness, and acceptance rules. | [safety](features/calculation-validation-safety.md); [reference data](features/reference-data.md) |
| Transparency | Everyone sees the same numbers, improving collaboration and decision-making. | Exact visibility/permission and reporting requirements. | [Product architecture](PRODUCT_ARCHITECTURE.md) |
| Real-Time Assessment | Capacity and production requirements can be **quickly adjusted to match shop-floor conditions**. | Which conditions, who updates them, required latency, actual/current data source, and technical mechanism. No WebSockets, machine feeds, streaming, database subscriptions, automatic equipment integration, or polling is established. | [Context section 7](../CAPSIGHT_CONTEXT.md); [application workflow](features/application-workflow-architecture.md) |
| Scalability | Handle growing production needs without adding complexity. | Quantified scale, limits, and acceptance criteria. | [Product architecture](PRODUCT_ARCHITECTURE.md) |
| Time Efficiency | Faster calculations with less manual consolidation and checking. | Quantified response/performance targets and exact consolidation mechanisms. | [Product architecture](PRODUCT_ARCHITECTURE.md); [application workflow](features/application-workflow-architecture.md) |

## Confirmed Solution Categories

The [Solution Evaluation/CAPEX contract in CAPSIGHT_CONTEXT.md, Stage 6](../CAPSIGHT_CONTEXT.md) records these confirmed Knowles categories:

- existing capacity optimization;
- equipment transfer / reallocation;
- new tooling requirement;
- new equipment requirement.

The supplied **Production Capacity Requirement Calculator** deck (September 30, 2026) now directly confirms all four categories. This adds source provenance to the existing Stage 6 confirmation without supplying evaluation rules.

CAPEX cost and downstream submission/feedback belong to the confirmed business flow. Category-specific evaluation rules, cost formulas, recommendation logic, and prototype CAPEX depth remain OPEN. The categories do not authorize automatic recommendation, procurement, or ERP scope.

## Confirmed Product Requirements

The September 30, 2026 orientation, as recorded in context section 3, establishes that planning is fragmented across Excel files/versions and Knowles wants a centralized, accurate, transparent, faster, scalable workflow with multiple IEs using one consistent source. These needs affect [Product architecture](PRODUCT_ARCHITECTURE.md), [shared reference data](features/reference-data.md), and [application workflow](features/application-workflow-architecture.md).

The deck directly confirms these qualities and the Real-Time Assessment business intent recorded above. Its technical mechanism remains OPEN; rapid adjustment is not authority for a live integration or an automatic calculation trigger.

CapSight's approved Capacity Assessment, Baseline, Scenario Studio, Decision Trace, Version-Aware Profiles, and Reality Loop contracts remain product/architecture commitments. Their approved structure is preserved; it does not confirm the unresolved operational fields or calculations those features need.

## Validation Matrix

This matrix consolidates remaining validation requirements and partial confirmations rather than redefining their contracts. Each row's affected contract is the starting point for reconciliation. The evidence table above separates newly confirmed items from their unresolved details; no broad area is fully confirmed by a partial answer.

Answer and source/date cells now record scoped confirmations where evidence is available. An empty cell means **not confirmed**, never zero, an approved default, or not applicable. Expected evidence requests the still-missing validation; it does not assert that such material has been supplied. On confirmation, retain the exact statement, scope, source locator/version, validator where recorded, and validation date. **PARTIAL** means the stated existence/business intent is confirmed while the row's remaining semantics/rules stay OPEN.

| Area | Question / requirement to validate | Current status | Why CapSight needs it | Affected feature / contract | Expected evidence/source | Confirmed answer | Source/date once confirmed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Request Context fields | How do the six confirmed intake items map to exact fields, definitions, information groups, and any business identifiers? | PARTIAL — field semantics OPEN | Capture real request context without inventing fields or references. | [Assessment lifecycle](features/assessment-lifecycle.md); context Stage 1 | Knowles request form/workbook field map and mentor walkthrough | Six intake items and NPI/Sustaining Capacity Increase context, as listed in the deck evidence table. | Deck (September 30, 2026) |
| Requiredness / completeness | Which listed items are always or conditionally required? Does completeness involve presence or engineering validation, and who decides? What are return/resubmission/editing rules? | PARTIAL — criteria/process OPEN | Preserve the completeness gate as a business state. | [Assessment lifecycle](features/assessment-lifecycle.md); [safety](features/calculation-validation-safety.md) | Validated completeness criteria and complete/incomplete examples | Requestor supplies listed information; NO returns for completion; YES continues to Capacity Assessment. | Deck (September 30, 2026) |
| Request validation | What field formats, allowed values, ranges, cross-field checks, and validation transitions apply? | OPEN | Distinguish complete, valid, and calculation-ready. | [Assessment lifecycle](features/assessment-lifecycle.md); [safety](features/calculation-validation-safety.md) | Mentor-confirmed field/business validation rules and counterexamples | | |
| Variables / units | What does each planning/reference variable mean, what is its unit, and are any conversions allowed? | OPEN | Preserve value meaning across input, engine, and trace. | [Calculation reference](CALCULATION_REFERENCE.md); [Capacity Engine](features/capacity-engine.md) | Annotated workbook/data dictionary and mentor-confirmed definitions | | |
| Capacity formulas | What exact resource formulas/business rules implement the five confirmed assessment responsibilities, and under which operating conditions? | PARTIAL — mathematics OPEN | Produce justified resource requirements. | [Capacity Engine](features/capacity-engine.md); [Calculation reference](CALCULATION_REFERENCE.md) | Authoritative workbook rules with mentor validation and worked calculations | Demand validation, available capacity, volume mix impact, shared tool capacity, and gap identification are responsibilities only. | Deck (September 30, 2026) |
| Dependencies / order | Which inputs, reference values, prerequisites, and intermediate outputs does each rule depend on; in what order? | OPEN | Execute the real production model deterministically. | [Capacity Engine](features/capacity-engine.md); [Calculation reference](CALCULATION_REFERENCE.md) | Workbook dependency walkthrough and validated intermediate results | | |
| Rounding / precision | Where does rounding occur, by what method/precision, and how does it affect the final requirement? | OPEN | Avoid unsupported global rounding or numeric assumptions. | [safety](features/calculation-validation-safety.md); [Calculation reference](CALCULATION_REFERENCE.md) | Knowles rounding rules and boundary examples | | |
| Defaults / allowed behavior | When does the stated 6 days/week default apply; what alternatives exist? What other defaults, if any, are approved? How are missing, blank, and zero distinguished? | PARTIAL — applicability OPEN | Prevent example values becoming silent defaults. | [safety](features/calculation-validation-safety.md); [Calculation reference](CALCULATION_REFERENCE.md) | Explicit default policy and missing/zero examples | Days/week scenario: Default: 6 days/week. No universal applicability or implementation rule supplied. | Deck (September 30, 2026) |
| Exceptions / result integrity | What edge conditions, exceptions, warning/blocking severities, and partial-result rules apply? | OPEN | Refuse unjustified results and preserve failure meaning. | [safety](features/calculation-validation-safety.md); [Capacity Engine](features/capacity-engine.md) | Validated exception cases and expected outcomes | | |
| Scenario variables | Which fields may an IE change in a scenario, and which remain governed reference/profile values? | OPEN | Explore alternatives without overwriting operational truth. | Scenario Studio contract in context, Stage 3; [reference data](features/reference-data.md) | Mentor-approved scenario field classification | | |
| Scenario ranges | What allowed values, limits, and conditional ranges apply to each approved scenario variable? | OPEN | Validate hypothetical conditions before calculation. | Scenario Studio contract in context, Stage 3; [safety](features/calculation-validation-safety.md) | Validated permitted and boundary scenario examples | | |
| Scenario dependencies / combinations | Which dependent fields must change together, and which combinations are invalid or incompatible? | OPEN | Avoid treating individually valid fields as a valid scenario. | Scenario Studio contract in context, Stage 3; [safety](features/calculation-validation-safety.md) | Validated compatible/incompatible scenario cases | | |
| Capacity Gap | How is the gap calculated and interpreted for each applicable resource, including boundaries and solution handoff? | PARTIAL — mathematics/interpretation OPEN | Connect a trustworthy result to engineering evaluation. | [Calculation reference](CALCULATION_REFERENCE.md); [domain model](features/data-persistence-domain-model.md); context Stages 2/6 | Mentor-validated gap definitions and worked cases | Identify capacity gap is an explicit Capacity Assessment responsibility. | Deck (September 30, 2026) |
| Reference / master data | Which fields are shared reference data versus assessment input, scenario-editable, calculated, default, or derived? What sources, owners, update and revision rules apply? | OPEN | Establish governed inputs before manufacturing schema design. | [reference data](features/reference-data.md); [persistence strategy](features/persistence-technology-data-access.md) | Authoritative field map, data owners, and maintenance process | | |
| Profile contents | Which validated formulas, validation rules, units, defaults, exceptions, dependencies, rounding, and compatible reference context belong in a Calculation Profile? | OPEN | Resolve a coherent calculation context. | [Calculation Profiles](features/calculation-profiles.md); [safety](features/calculation-validation-safety.md) | Mentor-approved rule package and applicability mapping | | |
| Profile governance | Who owns, creates, validates, publishes, retires, or selects profiles? What versions/effective dates and reference compatibility rules apply? | OPEN | Govern logic changes separately from assessment edits. | [Calculation Profiles](features/calculation-profiles.md); [Version-Aware Profiles](features/version-aware-profiles.md) | Confirmed ownership/publishing process and version examples | | |
| Historical calculation context | Which exact inputs, reference revisions/values, profile versions, and compatibility/retention details must be retained? | OPEN | Reproduce original results without adopting current truth. | [domain model](features/data-persistence-domain-model.md); [Version-Aware Profiles](features/version-aware-profiles.md) | Historical workbook/profile examples and confirmed preservation requirements | | |
| Calculation evidence | Which meaningful steps, intermediate values, provenance, applied rules, and rounding need to be explained or compared? | OPEN | Keep Decision Trace and Change Explanation tied to actual execution. | [Decision Trace](features/decision-trace.md); [Capacity Engine](features/capacity-engine.md) | Mentor-reviewed worked case and engineering explanation needs | | |
| Golden sample inputs | Can Knowles supply an approved sanitized case with accepted inputs, units, reference context, and applicable rule/profile context? | OPEN | Establish authoritative calculation test input. | [engine testing](features/capacity-engine-testing-strategy.md); [Calculation reference](CALCULATION_REFERENCE.md) | Knowles-approved sanitized workbook/case with provenance | | |
| Golden sample outputs | What verified outputs, intermediates where available, dependency order, rounding, gap interpretation if applicable, and exceptions belong to that case? | OPEN | Verify results and trace against independent operational evidence. | [engine testing](features/capacity-engine-testing-strategy.md); [Decision Trace](features/decision-trace.md) | Knowles-confirmed expected results and calculation walkthrough | | |
| Reality fields | What actual observations, units, production context, and plan-vs-actual variance/tolerance rules are relevant? | OPEN | Compare actual evidence with the exact historical Calculation Run. | Reality Loop contract in context, Stage 5; [domain model](features/data-persistence-domain-model.md) | Mentor-approved actual record and comparison examples | | |
| Actual source / timing | Who records actuals, from what source/method, at what timing, and with what revision/approval behavior? | OPEN | Make manually entered observations attributable and comparable. | Reality Loop contract in context, Stage 5; [safety](features/calculation-validation-safety.md) | Confirmed operational observation process and records | | |
| Real-Time Assessment | Which shop-floor conditions change, who updates them, how quickly, through which mechanism, and from whose actual/current data? | PARTIAL — technical mechanism OPEN | Avoid assuming live feeds, WebSockets, or automatic calculations. | [Context section 7](../CAPSIGHT_CONTEXT.md); [application workflow](features/application-workflow-architecture.md) | Mentor clarification with operational examples, source ownership, and latency needs | Capacity and production requirements can be quickly adjusted to match shop-floor conditions. | Deck (September 30, 2026) |
| Solution Evaluation | What criteria and resource/cost rules apply to the four confirmed categories? Is any deterministic recommendation logic authorized? | PARTIAL — evaluation rules OPEN | Support engineering evaluation without inventing a best solution. | Solution Evaluation contract in context, Stage 6; [domain model](features/data-persistence-domain-model.md) | Knowles evaluation examples and validated criteria/cost rules | Existing capacity optimization; equipment transfer/reallocation; new tooling; new equipment. | Deck (September 30, 2026) |
| CAPEX boundary | Is cost calculated internally or entered from elsewhere? What does waiting for feedback mean, what follows it, and does CapSight stop at submission or track downstream state? | PARTIAL — system boundary/rules OPEN | Preserve the downstream handoff and avoid unvalidated procurement scope. | CAPEX boundary in context, Stage 6; [domain model](features/data-persistence-domain-model.md) | Mentor-confirmed prototype scope and handoff artifact | CAPEX cost; submit CAPEX to requestor and wait for feedback. | Deck (September 30, 2026) |
| Roles / permissions | What authentication requirements and action capabilities are needed for assessment, reference, profile, and actual workflows? | OPEN | Protect shared work without inventing role names. | [identity/permissions](features/identity-permissions-concurrency.md); [application workflow](features/application-workflow-architecture.md) | Knowles access policy and capability mapping | | |
| Ownership / approvals | Who owns requests, completeness/validation review, reference updates, profile approval, and actual validation; what approvals/audit requirements apply? | OPEN | Model responsibilities separately from assumed enterprise workflows. | [identity/permissions](features/identity-permissions-concurrency.md); [Assessment lifecycle](features/assessment-lifecycle.md); governance contracts | Confirmed responsibility and approval process | | |
| Integrations / import | Are any integrations/imports needed? What source, access path, validation, and V1 boundary are authorized? | OPEN | Preserve manual actual entry and adapter validation unless a need is confirmed. | [application workflow](features/application-workflow-architecture.md); Reality Loop contract in context, Stage 5; [reference data](features/reference-data.md) | Explicit requirement plus source/access/scope confirmation | | |
| Outputs / reports | Which reports, exports, handoff artifacts, and workspace measures are actually useful and required? | OPEN | Derive meaningful outputs from authoritative assessment/run evidence. | [Product architecture](PRODUCT_ARCHITECTURE.md); [implementation roadmap](IMPLEMENTATION_ROADMAP.md) | Knowles communication examples and mentor-validated output needs | | |

## Golden Sample Requirements

**Status: OPEN — no Knowles-validated golden sample received in the authoritative documentation.**

Request an approved sanitized case with enough evidence to verify:

- accepted input values and their units;
- the reference values/revisions and applicable calculation rules/profile context;
- formula execution and dependency order;
- meaningful intermediate values where available;
- rounding method, precision, and point of application;
- verified expected resource outputs and units;
- expected Capacity Gap and interpretation, if applicable;
- any exceptional business rule used, with its conditions and expected behavior;
- source locator/version, validation date, and validator where recorded.

Record unavailable evidence as OPEN; do not infer expected numbers from an implementation. Use the supplied case as the primary end-to-end acceptance test and permanent verification fixture, with trace evidence checked where applicable under the [engine testing contract](features/capacity-engine-testing-strategy.md).

Synthetic development fixtures support UI/workflow development only. They are separate from the future Knowles golden sample and cannot establish permanent calculation expectations or become operational truth. Permission and sanitization requirements in the existing testing/persistence contracts still apply.

## Open Questions

The matrix retains all unresolved calculation, scenario, reference/profile, actual-data, ownership/access, integration, reporting, and golden-sample requirements. The following questions refine the newly received evidence; the existence of intake items, the completeness branch, assessment responsibilities, solution categories, submission/feedback, and rapid-adjustment intent no longer needs to be asked from scratch.

### Request / Intake

- Is “Affected model line / PN” one field, two fields, or a relationship?
- What qualifies a PN as “new”?
- What is the authoritative structure/source of routing? Is routing uploaded, referenced, selected, or integrated?
- What does PDT mean in this process, and what is its structure?
- What is the time basis/unit for Volume? How is Volume Mix represented?
- Is Days/week manually selected or derived? Does the stated 6 days/week default apply to every Assessment? What valid alternatives exist?
- What exactly is represented by Supplier Tooling?
- How is retained tool capacity expressed and measured, in which units, and under what conditions?

Exact data types, validation constraints, allowed ranges, field ownership/classification, and calculation use of each item remain OPEN.

### Completeness

- Are all six listed information items always mandatory? Which requirements are conditional?
- Is “complete” purely presence-based, or does engineering validation occur?
- Who has authority to determine completeness?
- What exactly happens after return/resubmission?
- Can request information change after Capacity Assessment begins?

The deck's YES branch does not remove CapSight's separate request validation and calculation-readiness gates or define user-facing edit/resubmit transitions.

### Capacity Assessment

- How is demand validated?
- How is available capacity determined?
- How is volume-mix impact calculated?
- How is shared tool capacity assessed?
- How is Capacity Gap calculated and interpreted?
- What is the dependency/order among those steps?

Mathematical definitions, units, rounding, defaults/applicability, exceptions, reference/profile context, scenario constraints, and authoritative worked/golden evidence remain OPEN.

### CAPEX

- Is CAPEX cost calculated inside the system or entered from another source?
- What does “wait for feedback” mean operationally?
- What happens after feedback?
- Does CapSight stop at submission, or track downstream response/state?

### Real-Time Assessment

- What shop-floor conditions can change?
- Who updates them?
- How quickly must changes be reflected?
- Manual update, import, integration, or another mechanism?
- What data source owns the actual/current values?

### Other Retained Clarifications

- **U/S:** this term was not found in the existing authoritative context/contracts. First ask whether Knowles uses it and whether it is relevant to CapSight; if relevant, record its exact meaning, unit, source, and affected field/rule. It is not an approved input, unit, or formula variable.
- Which authoritative workbook/reference versions, walkthrough material, and sanitized examples can be supplied for each open area? Alignment does not guarantee delivery of any particular artifact.

Earlier context entries that left database/ORM choice or automatic-versus-manual calculation triggers open must be read with later approved decisions: Stage 16 establishes the PostgreSQL/Prisma direction, and Stage 13/D049 makes authoritative Calculation Runs intentional. These are existing implementation decisions, not outstanding Knowles formula questions. Live preview feasibility and Knowles-specific workflow details remain open in their contracts.

## Assimilation Procedure

When Knowles/KEP confirms information during CapSight Implementation Phase 5:

1. Record source, locator/version, source date, validation date, and validator where recorded. Keep missing provenance explicit rather than inventing it.
2. Record the exact validated operational statement, its applicability, exceptions, and remaining uncertainties. Preserve conflicting evidence for reconciliation using the source hierarchy.
3. Update this ledger: attach the confirmed answer/evidence, separate still-open questions, and identify affected contracts. A meeting note becomes a validated statement only after confirmation; attendance/date alone is insufficient.
4. Reconcile the affected authoritative feature/domain contract, preserving existing decisions unless higher-authority evidence requires an explicit correction.
5. Update [CALCULATION_REFERENCE.md](CALCULATION_REFERENCE.md) whenever definitions, units, formulas, dependencies, rounding, defaults, exceptions, or calculation evidence are involved.
6. Update [DECISIONS.md](DECISIONS.md) only for a durable product/technical decision; mark a superseded decision when appropriate. Do not log every meeting answer there.
7. Identify code/schema impact and prerequisites. Classify validated fields as `REFERENCE_DATA`, `ASSESSMENT_INPUT`, `SCENARIO_EDITABLE`, `CALCULATED`, `DEFAULT`, or `DERIVED` before corresponding manufacturing schema/input design.
8. Implement the corresponding area only after authoritative documentation is reconciled and all truth required by that change is validated. Independently validated areas may proceed while unrelated questions remain open; unresolved dependencies cannot be bypassed.
9. Verify against supplied evidence and the Knowles golden sample where applicable, including trace and historical context. Record implementation/verification status in the relevant contract or rule record.

Do not code directly from unreconciled meeting notes, screenshots, sample constants, general manufacturing knowledge, or AI inference.

## Current Implementation Impact

CapSight Implementation Phase 5A completed the capture structure and reconciliation procedure. Phase 5 is actively assimilating the supplied deck's operational evidence and refining questions for continued alignment. This pass changes documentation only; it supplies no validated calculation rules and does not implement application features.

The CapSight Implementation Phase 4 Baseline remains a readiness shell. Persisted Assessment identity, request completeness/validation, revision protection, routing, and separate request/planning/calculation gates are preserved. Confirmed intake labels and workflow purpose can inform a separate implementation-impact review; they do not yet authorize exact editable fields, default application, or schemas. Manufacturing schema, formulas, Calculation Runs, scenario rules, trace implementation, Reality fields, roles, and integrations remain gated by their relevant validated requirements and roadmap prerequisites.
