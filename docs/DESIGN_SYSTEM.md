# CapSight Design System

## Status
V1 design-system architecture is approved through Stage 15. **Immersive Engineering**, originating in Visual Lab Experiment 05, Variant B, is the approved application-wide visual direction as of October 25, 2026 ([D150](DECISIONS.md#d150--immersive-engineering-is-the-approved-application-wide-visual-direction)). This is a visual/interaction milestone; Phase 5 remains **CURRENT / ACTIVE**.

## Authority
CapSight's visual direction will be designed collaboratively according to **Prince's taste and the assistant's design recommendations**, with Prince approving the direction before it becomes authoritative.

This document governs the current approved direction and preserves the earlier Phase 1 direction as history. Refinement remains possible through explicit project-lead approval, without changing product or engineering truth.

## Component Levels

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

These are useful abstraction levels, not a requirement to generalize every component.

## Approved Rules
- Design tokens represent semantic design meaning rather than scattered literal styling values.
- Status terminology and visual semantics remain consistent across the application.
- Repeated interaction problems should reuse shared CapSight patterns rather than each feature inventing unrelated behavior.
- Charts and visualizations should share a coherent CapSight information/interaction grammar.
- Responsive behavior remains information-preserving across desktop, laptop, tablet, and phone.
- Critical chart/table information cannot depend on hover alone.
- Motion should explain state/change, not exist only as decoration, and reduced-motion preferences must be respected.
- Accessibility remains part of the component system: semantics, keyboard/focus behavior, contrast, and non-color-only status.
- Figma may serve as the visual source of truth for approved UI/design direction, with code tokens aligned to it.
- CapSight should have a distinctive, crafted engineering-product identity rather than a generic SaaS/template appearance.

## Current Approved Direction — Immersive Engineering

- Apply one coherent identity to Workspace, product explanation, Overview, Request Context, Baseline, Scenarios, Solution, Reality, and loading/empty/blocked/recovery states.
- Preserve the established ink/petrol/powder-blue/rose/lilac palette. Current light canvas/surface/strong/inset tokens are `#EEEFEC`, `#F5F6F2`, `#FDFDF8`, `#E6EAE9`; dark equivalents are `#0C1C29`, `#102433`, `#152D3D`, `#193545`. Semantic text/status/focus meanings remain shared across appearances.
- Use locally hosted **IBM Plex Sans** for text/controls and **Source Serif** for display/editorial headings, through `next/font/local`. The necessary Latin WOFF2 assets total 96,648 bytes; their OFL notices accompany them. No remote font fetch is required by application build/runtime.
- Prefer precise borders, quiet materials, aligned controls and generous reading space over heavy neumorphic content containers. Keep CapSight's established three-ring identity mark.
- Exploration uses upright, front-facing technical rings and a selected product-story capability linked to its explanatory note. Geometry expresses conceptual relationships, never live manufacturing measurements.
- Working pages use a sticky shared header/context and horizontal six-section rail. Loading reuses the same visual shell, says “Opening Assessment”, and retains navigation/recovery. Native Next links own routing/history; a large travelling geometric handoff is not implemented.
- Request Context uses native topic disclosures. Baseline uses selectable readiness explanations with a measured SVG connection; all actual open calculation prerequisites stay visible independently of selection. Selection does not validate, calculate or save anything.
- BrandMark, ProductHeader, ApplicationShell, AssessmentNavigation and EvidenceLedger supply shared presentation patterns. Server components retain authoritative state rendering; small client components own interaction/motion only.
- Interface Skills, Hallmark, Taste Skill, UI UX Pro Max and Diagram Design informed Experiment 05's methodology. This records design provenance, not runtime installation or certification by those tools. Original experiments and research remain outside the official repository.

### Motion and accessibility

- Text, selection and navigation respond immediately. Supporting geometry is finite and interruptible; no perpetual orbital animation, 3D tilt or apparent operational feed is used.
- Current timings: 160 ms tactile transitions, 360 ms editorial/content reveals, 440 ms explanation paths, 480 ms selected arc, and 640 ms reference-ring transition. These support interaction rather than delay it.
- Pointer lighting is bounded to the orbit, guarded for fine pointers, coalesced into animation frames, and independent of React state per pointer event. Decorative layers never intercept input.
- Honor `prefers-reduced-motion` in CSS and JavaScript: remove optional travel/reveals/transitions/tracking while preserving selected states, explanations and static relationships. Cancel active path/arc effects when selection or the preference changes.
- Keep native buttons/links/disclosures, visible focus, text status, upright labels and touch targets at least 44px high. Polite explanation feedback sits outside selection controls. Theme preference behavior remains unchanged: explicit choices persist under `capsight:theme`; Light is the default without a valid preference.
- Stack explanation content on narrow screens and route connectors through the margin. Keep the active section visible in the scrollable rail and prevent document overflow.

### Verification scope and limitations

The integration pass verified all eight surfaces in both appearances at 1440×1000, 768×1024, 375×812, 320×800 and 812×375 in Chromium: 80 layout/theme checks. Keyboard, reduced-motion, pointer selection, hydration and real local Assessment creation/reopening were checked separately. Automated baseline: 25 Vitest tests and 10 database-free Playwright Chromium tests. Release verification is recorded in [execution state](CAPSIGHT_EXECUTION_STATE.md); hosted success must be established separately in [deployment records](MENTOR_DEMO_DEPLOYMENT.md).

Safari, Firefox, physical touch devices and NVDA/VoiceOver remain unverified. Short landscape has limited reading height beneath the sticky controls. The pointer gradient repaints while moving; no low-end GPU, battery, FPS or CLS benchmark is claimed. These checks are not a formal accessibility-conformance certification.

## Historical Phase 1 Working Visual Direction

The following records the earlier implementation; current tokens/materials/motion above supersede its aesthetic details.
- Brand palette: Midnight / Ink `#102233`, Petrol / Slate `#26425A`, Powder Blue `#86A8CF`, Dusty Rose `#C38EB4`, and Soft Lilac `#E1C8D7`.
- Light is the initial theme, with canvas `#F2F4F7`, surface `#F8FAFC`, strong surface `#FFFFFF`, and inset surface `#EDF1F5`.
- Dark is an alternate design, with canvas `#0D1824`, surface `#132230`, strong surface `#17293A`, and inset surface `#0F1D29`.
- Both themes use the same semantic token vocabulary and components. Explicit Light/Dark choices persist in browser local storage under `capsight:theme`; Light remains the default when no valid preference exists. System preference behavior remains deferred.
- Visual identity is a high-end professional engineering application with soft editorial composition, strong typography hierarchy, disciplined spacing, and restrained color.
- Neumorphism is selective: tactile controls and chosen elevated or inset surfaces may use it; ordinary content should not be wrapped in heavy shadows.
- The Phase 1 shell separates the canvas, navigation, header, content, and control surfaces with subtle contrast. Selected navigation is inset; the compact theme switch has a raised thumb and pressed response.
- Powder blue, rose, and lilac serve as restrained contextual accents in both themes, including navigation, controls, focus, and small status details.
- Motion is fast and purposeful, usually about 150–300 ms for normal interactions. It should express origin, state, or feedback and respect reduced-motion preferences.

These were Phase 1 implementation decisions, retained for provenance.

## Product Hardening Interaction Decisions
- Theme preference is presentation state, separate from Assessment persistence. A fixed inline script restores a valid choice before content paints; the toggle stays synchronized during navigation and across tabs. If storage is blocked, switching still works in the current document, but persistence is unavailable.
- Loading and recovery use concise text and existing controls, without decorative progress. Unavailable work offers a retry and Workspace return; a missing Assessment is distinct from a temporary failure.
- Shared product navigation remains separate from the six Assessment workflow steps. A keyboard skip link reaches each page's main content. Theme, workflow navigation, and primary actions have touch targets at least 44px high.
- Current tactile, reveal and relationship feedback follows the approved motion vocabulary above; reduced-motion preferences remove optional animation/transition durations.

## Further Decisions Intentionally OPEN

- Knowles-dependent chart/table grammar and information density once real data shapes are validated;
- unimplemented form/edit/conflict and calculation-result interaction details;
- physical-device, additional-browser, screen-reader and performance refinements;
- any justified future motion library, subject to explicit approval.

The current direction is approved; later refinements follow Prince's taste and approval without assuming engineering requirements.
