# October 28 Mentor Alignment Playbook

## Meeting objective

Leave with a corrected understanding of Knowles' work, evidence for the next implementation decisions, and named follow-ups for what remains open. Use a short CapSight walkthrough to support operational and calculation discovery.

**Checkpoint:** October 28, 2026 — the first major Knowles/KEP live kick-off/alignment checkpoint, superseding October 14. Complete domain truth is not guaranteed that day. **CapSight Implementation Phase 5 — Knowles Truth Assimilation remains CURRENT / ACTIVE** and may continue afterward. Engineering Hackathon phases are separate from CapSight Implementation phases.

Desired outcomes, as time and evidence allow:

- Correct Request Intake, completeness, and operational terminology.
- Discover calculation variables, units, formulas, dependencies/order, rounding, defaults, and exceptions.
- Clarify Baseline meaning, Capacity Gap, scenario behavior, and reference/profile-data ownership.
- Clarify Solution Evaluation criteria, Reality/actuals, CAPEX boundaries, responsibilities, access, and integration expectations.
- Obtain one real or sanitized worked example, or agree an equivalent evidence target, owner, and follow-up.

Success means reduced uncertainty supported by trustworthy evidence. Record partial answers and follow-ups; do not expect every topic to close in one session.

> Unknowns are treated as requirements to validate — not blanks to fill with assumptions.

**Use live:** [team call and backup](#team-call-and-demo-backup) → [brief](#pre-meeting-team-brief) → [walkthrough](#510-minute-product-walkthrough) → [Priority 1](#priority-1--unlocks-calculation-work) → [capture](#capture-every-important-answer) → [assimilation](#post-meeting-assimilation-and-implementation-review).

This is the team's meeting-preparation artifact, not a new requirements authority. The [Knowles requirements ledger](KNOWLES_REQUIREMENTS.md) retains the full Truth Map, validation status, source hierarchy, and affected contracts; the [Calculation Reference](CALCULATION_REFERENCE.md) records validated calculation truth. These questions do not establish answers or authorize implementation.

## Pre-meeting team brief

- **What CapSight is:** a shared capacity-assessment workspace with a designed closed-loop identity: Calculate → Explain / Trace → Simulate → Compare → Validate → Adjust. That product intent is distinct from the Knowles CAPEX process and from application navigation.
- **Implemented:** persisted blank Assessment creation/listing/reopening; Overview with saved completeness, validation, revision, calculation readiness/blockers, and process orientation; read-only Request Context, Baseline responsibilities, and Solution directions; Light/Dark, responsive UI, How CapSight Works, and automated verification.
- **Intentionally blocked:** final manufacturing forms and edit/validate transitions, validated formulas and Capacity Gap math, Scenario Studio calculations, automated recommendations, CAPEX cost calculation/submission workflow, shop-floor integration, and final roles/permissions. Navigating to a section does not perform its business operation. A saved revision is not calculation history. Passing software tests does not validate Knowles mathematics.
- **Why:** source material establishes the broad process and information concepts, but not their complete meanings or calculation rules. We preserve those gaps as validation requirements so incorrect assumptions do not become operating rules.
- **Evidence already confirmed:** supplied content from the Knowles **Production Capacity Requirement Calculator** presentation dated September 30, 2026 establishes the flow below, six intake concepts, assessment responsibilities, solution directions, and rapid shop-floor adjustment intent. It does not establish a technical real-time mechanism. The original deck file/slide locators, named validator, and separate validation date were not supplied; request provenance rather than inventing it.
- **Most needed:** exact terms and applicability, a calculation walkthrough with inputs/intermediates/outputs, source artifacts, and the person who can validate unresolved details.

### Confirmed process reference

| Band | Confirmed operational content |
| --- | --- |
| INPUT | Receive CAPEX Request — NPI or Sustaining Capacity Increase. |
| VALIDATE | Review Request Completeness. **No / incomplete → Return to Requestor for Completion. Yes / complete → Capacity Assessment.** |
| ANALYZE | Capacity Assessment: validate demand requirement; evaluate available capacity; review volume mix impact; assess shared tool capacity; identify capacity gap. These responsibilities do not establish calculation execution order. |
| DEVELOP | Solution Evaluation: existing capacity optimization; equipment transfer / reallocation; new tooling requirement; new equipment requirement. |
| SUBMISSION | CAPEX cost; submit CAPEX to requestor; wait for feedback. Exact system boundary remains open. |

The six Requestor-provided information concepts are: **affected model line / PN**; **routing with PDT if new PN**; **Volume and Volume Mix**; **Days/week scenario**; **Supplier Tooling**; and **retained tool capacity when using existing capacity from other models**. The deck states **Default: 6 days/week**; applicability, alternatives, units, and calculation use remain open. It is not a universal or implemented default.

Keep the existing six Assessment routes separate: **Overview → Request Context → Baseline → Scenarios → Solution → Reality**. Neither these routes nor visits to them indicate completion of the operational process.

## 5–10 minute product walkthrough

Suggested pacing totals about 7–9 minutes with the optional final stop. These are suggested talking points, not mentor quotations. Pause the tour when an answer needs capture; skip optional material before cutting calculation discovery.

| Stop / time | Show | Suggested wording | Do not overclaim | Natural question |
| --- | --- | --- | --- | --- |
| 1. Workspace / 45s | Saved Assessments, actual request states, reopen/continue links. | We keep capacity work together so an engineer can find and continue an Assessment. | Implemented collaboration, authentication, permissions, or dashboard intelligence. | How do IEs find work and hand an assessment to another engineer today? |
| 2. Create/open / 45s | Open a prepared safe blank Assessment; create one only if useful during the demo. | We can save and reopen a blank Assessment. Its request starts incomplete and unvalidated. | A completed request, business Assessment number, or manufacturing data capture. | What marks the beginning of an assessment in your process? |
| 3. Overview / 90s | Saved completeness/validation/revision, readiness/blockers, five process bands, incomplete branch, inspection links. | This is our current interpretation. The saved state and the operational reference are visible separately. | Process completion from page visits, calculation history from revision, or automatic lifecycle advancement. | Where does this interpretation differ from the way your team works? |
| 4. Request Context / 90s | Six confirmed intake concepts and completeness/return branch. | We captured these concepts from your material; we need to validate their actual structures before making forms. | Final fields, applied 6-day default, or implemented completion/validation/return actions. | Could we inspect a completed and an incomplete request and identify mandatory versus conditional information? |
| 5. Baseline / Capacity Assessment / 120s | Request, Planning Context, and Calculation Readiness gates; five confirmed responsibilities. | We understand the responsibilities. We still need the exact calculation rules and an example showing how the values connect. | Calculated capacity, Capacity Gap, or a ready request as sufficient calculation authority. | Could you walk us through one case from request inputs to the final capacity result? |
| 6. Solution / 60s | Four confirmed evaluation directions and downstream cost/submission/feedback context. | These are the known directions; we have not invented selection criteria or cost rules. | Automated recommendations, selected solutions, cost calculations, approvals, or a working submission workflow. | How do you compare these options, and where should CapSight's responsibility end? |
| 7. How CapSight Works / optional 30–60s | Designed calculation, trace, scenario comparison, and Reality Loop intent. | This explains the intended closed-loop experience; planned capabilities are identified as such. | A working engine, scenarios, trace results, actuals, or live shop-floor feeds. | Which explanations and planned-versus-actual comparisons would help your decisions? |

## Prioritized Truth Map

Use **Priority 1 first**, then follow the example into Priority 2. Capture Priority 3 or assign follow-ups as time permits. This orders the ledger's open questions by implementation dependency; keep confirmed answers in that ledger after reconciliation, not in a competing checklist here.

### Priority 1 — unlocks calculation work

These answers may support later **CapSight Implementation Phase 6 — Calculation Reference**, followed by **Phase 7 — Capacity Engine**. Neither phase starts because the meeting occurred.

| Focus | Ask / capture |
| --- | --- |
| Variables and exact terminology | What exact values are needed for the capacity calculation? What does each mean, where does it come from, and when does it apply? What does **PDT** mean here? Do you use **U/S** in this process? Only if yes: what does it mean, what unit does it use, and where is it relevant? U/S is not an approved variable. |
| Units and time basis | What is Volume's time basis? What units express production rate, capacity, and retained tool capacity? If utilization/efficiency is used, how is it expressed? How does Days/week enter the calculation? Which conversions are valid? |
| Formulas and numeric rules | Please show each exact formula and explain its numerator/denominator and applicability. In what order is it calculated? Where/how is rounding applied? What minimum/maximum behavior, exceptions, missing/blank/zero handling, and fallback rules exist, if any? |
| Dependencies | Which inputs/reference values/intermediates affect which results? Can changing one value change other requirements? Which combinations are invalid? How do shared resources constrain or connect calculations? Ask for the dependency order rather than infer it from the five responsibilities. |
| Baseline | What does Baseline mean operationally? What condition and time context does it represent, and what must exist before it is valid? Ask openly; do not choose an interpretation for the mentor. |
| Capacity Gap | What exactly is Capacity Gap: formula, units, sign/direction convention, and interpretation? What counts as shortage or surplus? How do shared tools affect it? Ask for boundary cases. |
| Worked / golden example — high-value target | Could you walk us through one real or sanitized example from request inputs through the final capacity result? Capture inputs/units, reference and rule context, formulas/order, intermediate values, rounding, expected outputs, gap interpretation, and decisions. If unavailable, agree who can supply equivalent validation evidence and when to follow up. A meeting example becomes golden evidence only after validation and provenance capture. |

For detailed rule capture and acceptance evidence, use [Calculation Reference](CALCULATION_REFERENCE.md#rule-capture-template) and [Golden Sample Requirements](KNOWLES_REQUIREMENTS.md#golden-sample-requirements).

### Priority 2 — unlocks workflow / data model

Ask how the work happens before choosing field types, lifecycle transitions, or persistence behavior. If a Priority 2 answer is a prerequisite for a calculation rule, resolve it alongside Priority 1.

| Focus | Ask / capture |
| --- | --- |
| Request Intake | Is model line / PN one value, separate values, or a relationship? What makes a PN new? How is routing represented and supplied, and how does PDT fit? How are Volume and Volume Mix represented? When does the deck's 6 days/week default apply, what alternatives are valid, and is the value selected or derived? What does Supplier Tooling represent? What does retained tool capacity mean, how is it measured, and when is it required? For each item: mandatory/conditional rules, allowed values, source, and owner. |
| Completeness and request changes | Who determines completeness, and how is complete distinct from valid? What happens on return/resubmission? Can information change after assessment begins? What happens to cancelled, duplicate, or mistaken requests? When are archive, void, or delete appropriate, if ever? Do not assume these operations exist. |
| Scenario Studio | Which values may vary, within what ranges? What dependencies or invalid combinations apply? Do alternatives remain separate from Baseline, or is there an operational correction to our interpretation? How are alternatives compared, and which outcomes matter? |
| Reference / profile data | Which reusable machine/tool/process values come from authoritative sources, and who maintains them? Which are request inputs, scenario variables, calculated values, defaults, or derived values? Which rules/data belong together for a calculation? Do values/rules change over time, and what historical versions/context must remain available? |
| Solution Evaluation | What criteria support existing optimization, transfer/reallocation, new tooling, and new equipment? Is evaluation based on rules, engineer judgment, or both? What evidence supports a recommendation? Are multiple options compared? |
| Reality / actuals | Which actual/shop-floor values change, from what sources, updated by whom and how often? What does real-time mean operationally? Are updates manual, imported, integrated, or otherwise supplied? Which results are recalculated? Is the original Baseline retained? How are planned and actual values compared, and does a changed actual condition create a revision/version? Capture actuals separately from hypothetical scenarios. |
| CAPEX boundary — workflow questions | Is cost calculated here or entered from another source? What accompanies submission, and who receives it? What does waiting for feedback involve, what feedback occurs, and can the assessment return for revision? Where does CapSight's responsibility end? Is approval in scope or outside? Do not presume an approval workflow. |

Real-Time Assessment is confirmed business intent for quick adjustment to shop-floor conditions. It does not establish a live feed, WebSockets, IoT, or automatic recalculation. The current V1 direction is manual actual-result entry unless authoritative evidence changes the relevant contract.

### Priority 3 — product / deployment / governance

- **People and continuity:** who provides/creates the request, reviews completeness, performs Capacity Assessment, evaluates solutions, and handles CAPEX submission? Can another IE continue someone's assessment? Who maintains reference/profile data? Who should view or modify each kind of information? What happens to old, completed, and cancelled assessments? Record responsibilities before inventing software roles.
- **CAPEX ownership/boundary:** who can confirm the intended product scope and any approval/handoff responsibility left open in Priority 2?
- **Access and hosting:** is internal-only operation expected; is browser-based access acceptable; and what restrictions apply to application/database hosting? Demo deployment protection is not final CapSight authentication or authorization.
- **Integration and data use:** which systems, if any, would CapSight need to exchange data with, through what authorized access path? What restrictions apply to real production/CAPEX data in development or demos?
- **Useful outputs:** what reports, exports, handoff information, or shared-workspace views support actual decisions? Ask for an existing example rather than promise a dashboard.

Access or integration restrictions that affect an evidence source must be clarified before using that source. These answers require post-meeting reconciliation; they are not an instruction to implement authentication or infrastructure during alignment.

## Evidence to request

Request only what Knowles can safely and legally share. Record the owner and permitted team use for each supplied artifact; use sanitized examples where possible.

- [ ] Blank CAPEX request template; sanitized completed and incomplete requests.
- [ ] Existing calculation spreadsheet and formula/reference sheet.
- [ ] Current-workflow screenshots and SOP/work instruction.
- [ ] Routing example and sanitized profile/master-data example.
- [ ] Worked calculation sample with accepted inputs, units, intermediates, rules, and expected outputs.
- [ ] Example final CAPEX output/submission.
- [ ] Example actual/shop-floor data source and its operating context.

**Do not photograph or copy confidential material unless the mentor confirms it may be used/shared with the team.** If an artifact cannot be shared, ask for an authorized sanitized walkthrough or follow-up with its owner; record the limitation.

## Capture every important answer

**Capture their wording first. Interpret later.** Preserve raw notes separately from the requirements ledger. Repeat critical terminology, units, and rules back to confirm understanding; do not redesign the system during the meeting.

Copy this small record for each important answer:

```text
QUESTION / PRIORITY:
What we asked:

RAW KNOWLES WORDING:
Exact wording where practical; mark paraphrases as paraphrases.

EVIDENCE / PROVENANCE:
File / screenshot / template / example / verbal explanation:
Source owner or speaker/validator (if confirmed):
Source date, locator/version, and validation date (where available):
Applicability / exceptions / permission to retain and share:

CONFIDENCE:
Confirmed / Partially confirmed / Still open
What exactly is confirmed, and what remains open:

FOLLOW-UP:
Question or missing artifact / owner / agreed date (or not yet agreed):

POTENTIAL CAPSIGHT IMPACT — HYPOTHESIS ONLY:
Possible affected requirement, contract, or implementation prerequisite:
```

Confidence applies to the specific statement, not the whole topic. A verbal explanation can be evidence; attendance or a confidence label alone does not validate a formula. Keep missing provenance explicit and conflicting statements intact for authority/source reconciliation.

## Team roles

Assign people in the internal call; final attendance is not established in the repository.

| Responsibility | During / after the meeting |
| --- | --- |
| Demo lead | Operates CapSight, keeps the walkthrough short, asks product/workflow clarifications. |
| Domain/calculation question lead | Pursues variables, units, formulas, dependencies, and the worked example. |
| Evidence scribe | Captures wording/provenance, tracks open questions and artifacts, reads back critical answers. |
| Project lead / post-meeting owner | Consolidates raw evidence and coordinates repository reconciliation and implementation review. |

**If two students attend:** combine demo lead with workflow questioning; combine calculation questioning with evidence capture. Pause while the questioner records a rule/example, and have the demo lead help read back the answer. Agree who owns consolidation before leaving.

**Suggested assignment only, if Ali and Christan remain the representatives:** Ali — demo/UI-product walkthrough and workflow clarification; Christan — calculation/domain questions and formula/example capture. Their team membership is documented; their final attendance and this meeting assignment are not confirmed.

## Team call and demo backup

### Decide in the internal call before October 28

- [ ] Confirm the final two representatives and any team-game participant requirement/status; both remain unconfirmed here.
- [ ] Assign laptop operation, calculation questions, note-taking/read-back, and the post-meeting consolidation owner.
- [ ] Choose local demo or an already prepared protected shared deployment; check the [existing demo guide](MENTOR_DEMO_DEPLOYMENT.md) if using the latter. Shared deployment readiness does not mean deployment exists.
- [ ] Choose the laptop/device and confirm the database/network arrangements for that choice.
- [ ] Select the safe blank Assessment and rehearse the short path; decide whether creation adds useful value.
- [ ] Choose screenshots or another lightweight fallback if the app/database fails.
- [ ] Agree which Priority 1 questions to ask first and who follows up on unanswered items.

### Before leaving

- [ ] Use the latest approved `main` checkpoint selected by the team.
- [ ] Verify dependency installation from the committed lockfile and the existing `.nvmrc` Node setup (`npm ci` for setup); do this before the meeting.
- [ ] Confirm the app starts and, if needed, its deliberately chosen local/isolated demo database is available. Follow existing setup instructions; introduce no new infrastructure for this preparation.
- [ ] Have at least one safe blank/demo Assessment that can be opened; do not use sensitive production/employee/CAPEX data or invent manufacturing values.
- [ ] Rehearse Workspace → open → Overview → Request Context → Baseline → Solution. Keep How CapSight Works optional; show Light/Dark only if useful or requested.
- [ ] Bring the charger and capture notes/questions in a usable offline form.
- [ ] For a local demo, confirm it works with the available database and installed assets; local operation can avoid internet only when its actual dependencies are available locally. A remote database/shared deployment may require network access.
- [ ] Optionally save current screenshots of key screens. If the app/database fails, use those to discuss the interpretation, state clearly that this is a backup, and continue discovery; do not present screenshot state as a live result.

## Keep the meeting on evidence

- Accept corrections and exact Knowles terminology; do not defend the UI or argue names.
- Record suggestions as suggestions until authority, scope, and dependencies are reconciled; do not make immediate delivery promises.
- Do not invent a missing formula, lead the mentor toward an answer, or display unfinished calculations as implemented.
- Keep architecture/testing detail brief unless asked; use the time for operational examples.
- Do not treat October 28 as the only validation opportunity or collect confidential artifacts without permission.
- If mentor evidence contradicts our interpretation, preserve the correction and its source. Confirm authority/applicability and reconcile using the source hierarchy; higher-authority validated Knowles evidence governs the contracts.

## Post-meeting assimilation and implementation review

Follow the ledger's [assimilation procedure](KNOWLES_REQUIREMENTS.md#assimilation-procedure):

1. Preserve raw notes/artifacts and provenance, including sharing limits and missing source details.
2. Classify each statement as confirmed, partial, or open; resolve conflicting evidence with the appropriate Knowles authority. Assign follow-ups without filling blanks.
3. Update **KNOWLES_REQUIREMENTS** with validated statements, remaining questions, evidence, and affected contracts.
4. Update affected feature/domain contracts. Classify validated fields before manufacturing input/schema design.
5. Update **CALCULATION_REFERENCE** with validated definitions, units, formulas, dependencies/order, rounding, defaults, exceptions, and worked evidence; leave unresolved details explicit.
6. Reconcile **DECISIONS** only when a durable decision changes; record supersession where needed.
7. Update **CAPSIGHT_EXECUTION_STATE** with assimilated evidence, remaining gates, and the current focus.
8. Reassess **IMPLEMENTATION_ROADMAP** prerequisites/order. If evidence changes the roadmap, reconcile it and refresh the execution checkpoint together; preserve the existing sequence otherwise.
9. Determine precisely which implementation is unlocked and which remains blocked. Review its prerequisites before a separate implementation task; verify later changes against authoritative evidence.

Meeting notes alone do not authorize code. An independently validated area may proceed once its documentation and dependencies are reconciled while unrelated questions remain open.

### Phase 6 entry check

Assess the proposed calculation scope after assimilation, not from the meeting date. For every required item, link validated evidence or retain an explicit blocker:

- [ ] Variable definitions, applicability, and authoritative input/reference sources are clear.
- [ ] Input/output units, time bases, and any conversions are validated.
- [ ] Formulas/business rules and their conditions are confirmed.
- [ ] Dependencies and calculation order are confirmed, including shared-resource effects.
- [ ] Rounding method, precision, and point of application are confirmed.
- [ ] Exceptions, approved defaults/applicability, bounds, and missing/zero behavior are confirmed.
- [ ] Baseline meaning and validity prerequisites are confirmed.
- [ ] Capacity Gap formula, units, sign, and interpretation are confirmed.
- [ ] At least one authorized worked/golden example, or equivalent validation evidence, establishes accepted inputs/context and expected outputs; provenance and remaining limitations are recorded.
- [ ] Relevant requirements/contracts and calculation reference are reconciled, with compatible reference/profile context and no unresolved dependency required by the proposed work.

If a material prerequisite remains unresolved, **Phase 5 continues for that work**. Do not declare the domain complete because one example or subset is understood. Phase 6 starts only after sufficient calculation truth is validated and its scope reviewed; Capacity Engine implementation follows the Phase 7 gate. October 28 starts neither automatically.
