# Knowles Requirements

## Status

CapSight Implementation Phase 5A — Knowles Alignment Readiness. This document prepares capture of Knowles/KEP-derived operational requirements; it does not perform Knowles Truth Assimilation or confirm new calculation truth.

> Unknowns are treated as requirements to validate — not blanks to fill with assumptions.

Confirmed information below comes from existing authoritative project documentation. No validated formulas, exact field map, or Knowles golden sample are recorded yet. OPEN items are validation requirements; CLARIFICATION items first need their meaning or relevance established. Neither status authorizes implementation.

Engineering Hackathon Phase 1 is **Event Kick-off and Detailed Project Alignment**, October 14, 2026: **the first major Knowles/KEP alignment and validation checkpoint**. Complete domain truth is not guaranteed that day. Unresolved items remain open afterward; validation may continue during Engineering Hackathon Phase 2, October 2026 to March 2027. The official event facts remain in [CAPSIGHT_CONTEXT.md, section 4](../CAPSIGHT_CONTEXT.md). Engineering Hackathon phases and CapSight Implementation phases are separate sequences.

## Authority and Source Hierarchy

Preserve the hierarchy in [CAPSIGHT_CONTEXT.md, section 2](../CAPSIGHT_CONTEXT.md):

1. Knowles / KEP mentor-validated operational material: actual workbook, mentor walkthroughs, reference documents, validated formulas/business rules/terminology/sample calculations.
2. September 30 Knowles project orientation.
3. Official Knowles Hackathon Guidelines.
4. Submitted KnowLarps CapSight Proposal.
5. KnowLarps implementation/design decisions.

This ledger is authoritative for reconciled Knowles-derived requirements and their validation status; it does not replace the underlying evidence or change its priority. Feature/domain contracts specify the affected CapSight behavior. [CALCULATION_REFERENCE.md](CALCULATION_REFERENCE.md) remains mandatory authority before corresponding calculation implementation. Team architecture choices and proposal commitments are not proof of Knowles field or formula truth.

Keep only operational requirements, clarification questions, provenance, and affected-contract links here. Meeting transcripts, implementation logs, and speculative feature ideas do not belong in this ledger. Informal meeting notes alone are not implementation authority: validated statements must first be reconciled through the procedure below.

## Confirmed Operational Workflow

Source for these statements: September 30, 2026 Knowles project orientation, as recorded in [CAPSIGHT_CONTEXT.md, section 3](../CAPSIGHT_CONTEXT.md). The repository records the orientation summary, not a validated calculation workbook.

| Confirmed operational statement | Affected CapSight contract |
| --- | --- |
| Industrial Engineering owns production capacity requirements / capacity assessment for NPI/new project lines and sustaining lines needing additional capacity. | [Product architecture](PRODUCT_ARCHITECTURE.md); [Assessment lifecycle](features/assessment-lifecycle.md) |
| Receive CAPEX Request → review completeness → return to requester if incomplete → Capacity Assessment → Solution Evaluation → CAPEX submission/feedback. | [Assessment lifecycle](features/assessment-lifecycle.md); [Baseline workflow](features/baseline-workflow.md); Solution Evaluation/CAPEX contract in context, Stage 6 |
| Assessment covers demand requirements, available capacity, volume mix impact, shared tool capacity, and Capacity Gap. | [Baseline workflow](features/baseline-workflow.md); [Capacity Engine](features/capacity-engine.md) |
| Resource areas include headcount/manpower, machines/equipment, tooling, fixtures, and related logistical/support resources. | [Capacity Engine](features/capacity-engine.md); [Calculation reference](CALCULATION_REFERENCE.md) |

These statements establish workflow and areas of assessment, not exact inputs, units, formulas, or automatic transitions. Returning an incomplete request does not establish a messaging or approval integration.

## Confirmed Solution Categories

The [Solution Evaluation/CAPEX contract in CAPSIGHT_CONTEXT.md, Stage 6](../CAPSIGHT_CONTEXT.md) records these confirmed Knowles categories:

- existing capacity optimization;
- equipment transfer / reallocation;
- new tooling requirement;
- new equipment requirement.

The business context is the September 30, 2026 orientation; the Stage 6 contract records the category confirmation without a separate source locator/date for that detail. Preserve that provenance limit; attach the underlying Knowles evidence when available.

CAPEX cost and downstream submission/feedback belong to the confirmed business flow. Category-specific evaluation rules, cost formulas, recommendation logic, and prototype CAPEX depth remain OPEN. The categories do not authorize automatic recommendation, procurement, or ERP scope.

## Confirmed Product Requirements

The September 30, 2026 orientation, as recorded in context section 3, establishes that planning is fragmented across Excel files/versions and Knowles wants a centralized, accurate, transparent, faster, scalable workflow with multiple IEs using one consistent source. These needs affect [Product architecture](PRODUCT_ARCHITECTURE.md), [shared reference data](features/reference-data.md), and [application workflow](features/application-workflow-architecture.md).

CapSight's approved Capacity Assessment, Baseline, Scenario Studio, Decision Trace, Version-Aware Profiles, and Reality Loop contracts remain product/architecture commitments. Their approved structure is preserved; it does not confirm the unresolved operational fields or calculations those features need.

## Validation Matrix

This matrix consolidates existing OPEN requirements rather than redefining their contracts. Each row's affected contract is the starting point for reconciliation. Split a row when evidence confirms only part of its question; do not mark a whole area confirmed from a partial answer.

All answer and source/date cells are deliberately empty. An empty cell means **not confirmed**, never zero, an approved default, or not applicable. Expected evidence is a request for validation, not an assertion that such material has been supplied. On confirmation, retain the exact statement, scope, source locator/version, validator where recorded, and validation date.

| Area | Question / requirement to validate | Current status | Why CapSight needs it | Affected feature / contract | Expected evidence/source | Confirmed answer | Source/date once confirmed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Request Context fields | What exact fields, definitions, information groups, and any business identifiers are used? | OPEN | Capture real request context without inventing fields or references. | [Assessment lifecycle](features/assessment-lifecycle.md); context Stage 1 | Knowles request form/workbook field map and mentor walkthrough | | |
| Requiredness / completeness | Which fields are required, conditionally required, or optional? What makes a request complete and eligible for validation? | OPEN | Preserve the completeness gate as a business state. | [Assessment lifecycle](features/assessment-lifecycle.md); [safety](features/calculation-validation-safety.md) | Validated completeness criteria and complete/incomplete examples | | |
| Request validation | What field formats, allowed values, ranges, cross-field checks, and validation transitions apply? | OPEN | Distinguish complete, valid, and calculation-ready. | [Assessment lifecycle](features/assessment-lifecycle.md); [safety](features/calculation-validation-safety.md) | Mentor-confirmed field/business validation rules and counterexamples | | |
| Variables / units | What does each planning/reference variable mean, what is its unit, and are any conversions allowed? | OPEN | Preserve value meaning across input, engine, and trace. | [Calculation reference](CALCULATION_REFERENCE.md); [Capacity Engine](features/capacity-engine.md) | Annotated workbook/data dictionary and mentor-confirmed definitions | | |
| Capacity formulas | What exact resource formulas/business rules apply, and under which operating conditions? | OPEN | Produce justified resource requirements. | [Capacity Engine](features/capacity-engine.md); [Calculation reference](CALCULATION_REFERENCE.md) | Authoritative workbook rules with mentor validation and worked calculations | | |
| Dependencies / order | Which inputs, reference values, prerequisites, and intermediate outputs does each rule depend on; in what order? | OPEN | Execute the real production model deterministically. | [Capacity Engine](features/capacity-engine.md); [Calculation reference](CALCULATION_REFERENCE.md) | Workbook dependency walkthrough and validated intermediate results | | |
| Rounding / precision | Where does rounding occur, by what method/precision, and how does it affect the final requirement? | OPEN | Avoid unsupported global rounding or numeric assumptions. | [safety](features/calculation-validation-safety.md); [Calculation reference](CALCULATION_REFERENCE.md) | Knowles rounding rules and boundary examples | | |
| Defaults / allowed behavior | Are any defaults approved; in which conditions? How are missing, blank, and zero distinguished? | OPEN | Prevent example values becoming silent defaults. | [safety](features/calculation-validation-safety.md); [Calculation reference](CALCULATION_REFERENCE.md) | Explicit default policy and missing/zero examples | | |
| Exceptions / result integrity | What edge conditions, exceptions, warning/blocking severities, and partial-result rules apply? | OPEN | Refuse unjustified results and preserve failure meaning. | [safety](features/calculation-validation-safety.md); [Capacity Engine](features/capacity-engine.md) | Validated exception cases and expected outcomes | | |
| Scenario variables | Which fields may an IE change in a scenario, and which remain governed reference/profile values? | OPEN | Explore alternatives without overwriting operational truth. | Scenario Studio contract in context, Stage 3; [reference data](features/reference-data.md) | Mentor-approved scenario field classification | | |
| Scenario ranges | What allowed values, limits, and conditional ranges apply to each approved scenario variable? | OPEN | Validate hypothetical conditions before calculation. | Scenario Studio contract in context, Stage 3; [safety](features/calculation-validation-safety.md) | Validated permitted and boundary scenario examples | | |
| Scenario dependencies / combinations | Which dependent fields must change together, and which combinations are invalid or incompatible? | OPEN | Avoid treating individually valid fields as a valid scenario. | Scenario Studio contract in context, Stage 3; [safety](features/calculation-validation-safety.md) | Validated compatible/incompatible scenario cases | | |
| Capacity Gap | How is the gap calculated and interpreted for each applicable resource, including boundaries and solution handoff? | OPEN | Connect a trustworthy result to engineering evaluation. | [Calculation reference](CALCULATION_REFERENCE.md); [domain model](features/data-persistence-domain-model.md); context Stages 2/6 | Mentor-validated gap definitions and worked cases | | |
| Reference / master data | Which fields are shared reference data versus assessment input, scenario-editable, calculated, default, or derived? What sources, owners, update and revision rules apply? | OPEN | Establish governed inputs before manufacturing schema design. | [reference data](features/reference-data.md); [persistence strategy](features/persistence-technology-data-access.md) | Authoritative field map, data owners, and maintenance process | | |
| Profile contents | Which validated formulas, validation rules, units, defaults, exceptions, dependencies, rounding, and compatible reference context belong in a Calculation Profile? | OPEN | Resolve a coherent calculation context. | [Calculation Profiles](features/calculation-profiles.md); [safety](features/calculation-validation-safety.md) | Mentor-approved rule package and applicability mapping | | |
| Profile governance | Who owns, creates, validates, publishes, retires, or selects profiles? What versions/effective dates and reference compatibility rules apply? | OPEN | Govern logic changes separately from assessment edits. | [Calculation Profiles](features/calculation-profiles.md); [Version-Aware Profiles](features/version-aware-profiles.md) | Confirmed ownership/publishing process and version examples | | |
| Historical calculation context | Which exact inputs, reference revisions/values, profile versions, and compatibility/retention details must be retained? | OPEN | Reproduce original results without adopting current truth. | [domain model](features/data-persistence-domain-model.md); [Version-Aware Profiles](features/version-aware-profiles.md) | Historical workbook/profile examples and confirmed preservation requirements | | |
| Calculation evidence | Which meaningful steps, intermediate values, provenance, applied rules, and rounding need to be explained or compared? | OPEN | Keep Decision Trace and Change Explanation tied to actual execution. | [Decision Trace](features/decision-trace.md); [Capacity Engine](features/capacity-engine.md) | Mentor-reviewed worked case and engineering explanation needs | | |
| Golden sample inputs | Can Knowles supply an approved sanitized case with accepted inputs, units, reference context, and applicable rule/profile context? | OPEN | Establish authoritative calculation test input. | [engine testing](features/capacity-engine-testing-strategy.md); [Calculation reference](CALCULATION_REFERENCE.md) | Knowles-approved sanitized workbook/case with provenance | | |
| Golden sample outputs | What verified outputs, intermediates where available, dependency order, rounding, gap interpretation if applicable, and exceptions belong to that case? | OPEN | Verify results and trace against independent operational evidence. | [engine testing](features/capacity-engine-testing-strategy.md); [Decision Trace](features/decision-trace.md) | Knowles-confirmed expected results and calculation walkthrough | | |
| Reality fields | What actual observations, units, production context, and plan-vs-actual variance/tolerance rules are relevant? | OPEN | Compare actual evidence with the exact historical Calculation Run. | Reality Loop contract in context, Stage 5; [domain model](features/data-persistence-domain-model.md) | Mentor-approved actual record and comparison examples | | |
| Actual source / timing | Who records actuals, from what source/method, at what timing, and with what revision/approval behavior? | OPEN | Make manually entered observations attributable and comparable. | Reality Loop contract in context, Stage 5; [safety](features/calculation-validation-safety.md) | Confirmed operational observation process and records | | |
| Real-Time Assessment | What does Knowles mean operationally and technically by this phrase? Is any specific freshness or response requirement intended? | CLARIFICATION | Avoid assuming live feeds, WebSockets, or automatic calculations. | [Context section 7](../CAPSIGHT_CONTEXT.md); [application workflow](features/application-workflow-architecture.md) | Mentor clarification with examples of intended use | | |
| Solution Evaluation | What criteria and resource/cost rules apply to the four confirmed categories? Is any deterministic recommendation logic authorized? | OPEN | Support engineering evaluation without inventing a best solution. | Solution Evaluation contract in context, Stage 6; [domain model](features/data-persistence-domain-model.md) | Knowles evaluation examples and validated criteria/cost rules | | |
| CAPEX boundary | Does V1 provide figures, a CAPEX-ready output, submission/feedback tracking, or a deeper workflow? | OPEN | Preserve the downstream handoff and avoid unvalidated procurement scope. | CAPEX boundary in context, Stage 6; [domain model](features/data-persistence-domain-model.md) | Mentor-confirmed prototype scope and handoff artifact | | |
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

The matrix is the consolidated validation agenda. Additional clarification from this readiness audit:

- **U/S:** this term was not found in the existing authoritative context/contracts. First ask whether Knowles uses it and whether it is relevant to CapSight; if relevant, record its exact meaning, unit, source, and affected field/rule. It is not an approved input, unit, or formula variable.
- Which authoritative workbook/reference versions, walkthrough material, and sanitized examples can be supplied for each open area? The announcement does not guarantee delivery of any particular artifact on October 14.

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

CapSight Implementation Phase 5A produces this requirements authority, a calculation-rule capture structure, and context/roadmap entry points only. It supplies no new operational answers and performs no application implementation.

The CapSight Implementation Phase 4 Baseline remains a readiness shell. Persisted Assessment identity, request completeness/validation, revision protection, routing, and separate request/planning/calculation gates are preserved. Request fields, manufacturing schema, formulas, Calculation Runs, scenario rules, trace implementation, Reality fields, roles, and integrations remain gated by their relevant validated requirements and roadmap prerequisites.
