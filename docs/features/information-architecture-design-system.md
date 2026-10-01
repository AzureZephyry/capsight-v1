# Information Architecture, Navigation & Design-System Application

## Status
Approved — V1 Stage 15.

## Purpose
Define how CapSight's screens, navigation hierarchy, contextual drilldowns, and reusable design-system vocabulary fit together without prematurely locking the final visual aesthetic.

## Approved V1 Locks
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

## Information Hierarchy

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

The **Shared Workspace** answers: "What work exists and what needs my attention?"

The **Capacity Assessment** answers: "What is happening with this specific capacity requirement?"

## Navigation Principles
- CapSight navigation follows the IE's work, not the architectural feature list.
- Scenario Studio, Comparison, Solution Evaluation, and Reality inherit the active Capacity Assessment context.
- Decision Trace is contextual transparency reached primarily from the result it explains.
- Formula/definition detail is reached through progressive calculation-backbone drilldown.
- Capacity Gap should lead naturally into Solution Evaluation.
- CAPEX remains downstream/subordinate until Knowles validates a broader responsibility.
- Deep links should reconstruct the containing Assessment → Planning State → Calculation Run context where applicable.
- Breadcrumbs or an equivalent context mechanism should preserve orientation as drilldown depth increases.
- Responsive navigation may transform visually but must preserve the same product hierarchy.

## Shared Workspace
The Shared Workspace is a work-first entry point, not a vanity analytics dashboard. It should be ready to support assessment discovery through search, filtering, sorting, status, and other validated assessment fields. Exact KPIs, charts, and aggregate intelligence remain OPEN until Knowles confirms what is useful.

### Pre-Alignment Product Experience Sprint — Shared Workspace + How CapSight Works

This bounded increment is not a new numbered CapSight Implementation Phase. `/assessments` is the Shared Workspace entry point, using the existing Application/Infrastructure read path for the latest 20 persisted Assessments, newest first. It supports intentional blank creation and reopening without introducing manufacturing fields, dashboards, search/filter controls, or schema changes.

Assessment discovery uses scannable rows: saved state, created/updated dates in Philippine time, persisted request completeness/validation, Domain-derived lifecycle stage, and the first open Baseline prerequisite with a contextual Request Context or Baseline readiness link. Visible identity is the neutral “Assessment”; dates provide context, not a business identifier. Technical UUIDs remain routing/persistence keys. The existing request/planning/calculation readiness rules remain authoritative.

Empty workspaces explain the Assessment and offer creation without example records. Localized loading preserves the page context. Unavailable records and create failures use scoped product-language feedback without database diagnostics; retry reloads the read query. Creation remains a deliberate action that persists incomplete/unvalidated work and opens its saved route.

`/how-capsight-works` is a separate explanation experience in product navigation, alongside Workspace. These links sit in the broader header; the six numbered Assessment workflow steps remain unchanged. The explanation page presents the designed operational loop **Calculate → Explain → Simulate → Compare → Validate → Adjust**, distinct from the tagline **Calculate. Explain. Simulate. Validate. Decide.**

An “Available today” section describes saved blank Assessments and readiness review. Decision Trace, Scenario Studio, Change Explanation, Version-Aware Profiles, and Reality Loop are explained as planned capabilities with their prerequisites; the page does not simulate calculations or actual observations. The six-step loop uses keyboard/touch-accessible buttons and a selected explanation. Its desktop circular composition becomes an ordered two-column sequence on phones. Feature explanations use editorial sections rather than repeated feature cards. Motion is limited to tactile controls and a 220 ms explanation reveal, with reduced-motion alternatives.

Both experiences preserve light/dark tokens, native links/buttons, visible focus, text labels for status, and narrow layouts. Theme persistence/system preference, advanced discovery, analytics/reporting, and Knowles-dependent features remain deferred.

## Assessment Context
Once an Assessment is opened, its context remains visible while the IE moves through Request/Planning Context, Baseline, Scenarios, Comparison, Solution Evaluation, Reality, and reporting/handoff surfaces.

Baseline remains the reference planning state and should not be presented as just another scenario.

## Contextual Feature Placement
- **Scenario Studio:** inside the active Assessment and baseline context.
- **Comparison:** contextual to selected Calculation Runs within an Assessment.
- **Decision Trace:** entered from the result/calculation it explains.
- **Calculation Backbone:** deeper drilldown from Trace into validated definitions, formulas, variables, units, rules, and profile/version context.
- **Solution Evaluation:** naturally follows Capacity Gap.
- **CAPEX:** remains downstream/handoff context unless Knowles expands the boundary.
- **Reality Loop:** remains within the Assessment lifecycle and preserves Plan → Actual linkage.
- **Reporting:** derives from authoritative Assessment/Calculation truth; exact navigation prominence remains OPEN.
- **Reference Data / Calculation Profiles:** governance remains architecturally separate from ordinary assessment editing.

## Design-System Application
CapSight keeps three useful design-system levels:

```text
PRIMITIVES
Button, input, badge, dialog...

CAPSIGHT PATTERNS
Status indicator, calculation result,
trace step, assessment section...

PRODUCT FEATURES
Scenario Studio, Decision Trace,
Reality comparison...
```

The purpose is consistency without flattening all product meaning into generic components.

Potential CapSight-specific patterns may include Calculation Result, Capacity Gap, Calculation Status, Scenario Identity, Trace Step, Profile/Version Context, and Validation Issue. Exact visual execution remains OPEN.

## Design Tokens
Design tokens should express semantic meaning rather than scattered literal values. Exact token names remain an implementation decision, but the system should support concepts such as surfaces, text hierarchy, borders, accent, and domain status semantics without hard-coding visual meaning throughout components.

## Status and Interaction Consistency
The same domain state should use consistent terminology and visual semantics across Workspace, Assessment, Scenario, Comparison, Trace, and Reality surfaces. Repeated interaction problems should use shared product patterns rather than unrelated feature-by-feature solutions.

## Charts and Visualizations
Charts representing required vs available capacity, scenario differences, plan vs actual, and resource gaps should eventually share a consistent CapSight information and interaction grammar. Exact chart styling remains OPEN and must still obey the approved responsive, touch, accessibility, and motion constraints.

## Visual-Design Authority
The final CapSight aesthetic is intentionally not locked at Stage 15. Palette, typography, density, corner treatment, shadows/elevation, surfaces, navigation styling, chart appearance, iconography, page composition, microinteractions, and motion personality will be designed collaboratively during implementation according to **Prince's taste and the assistant's design recommendations**, with Prince approving the direction.

Figma may serve as the visual source of truth for approved UI direction, with implementation design tokens aligned to it.

CapSight should pursue a distinctive, crafted engineering-product identity and avoid defaulting to a generic AI/SaaS dashboard-template appearance.

## Still OPEN
- exact top-level navigation visual treatment;
- exact assessment sub-navigation treatment;
- exact mobile navigation pattern;
- exact reporting navigation prominence;
- exact reference/profile governance navigation visibility;
- exact workspace KPIs and visualizations;
- exact visual identity, palette, typography, density, radius, shadow, iconography, and motion character;
- exact chart library and chart styling;
- exact Figma-to-code workflow details.

## Applies To
These rules govern the single CapSight V1 specification and therefore apply identically to both separate codebases implementing CapSight V1.
