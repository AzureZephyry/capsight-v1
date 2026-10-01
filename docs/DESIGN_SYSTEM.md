# CapSight Design System

## Status
V1 direction approved through Stage 15. Phase 1 has a working visual direction; later refinement remains open.

## Authority
CapSight's visual direction will be designed collaboratively according to **Prince's taste and the assistant's design recommendations**, with Prince approving the direction before it becomes authoritative.

This document records the approved design-system architecture and the Phase 1 implementation direction without freezing the final aesthetic.

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

## Phase 1 Working Visual Direction
- Brand palette: Midnight / Ink `#102233`, Petrol / Slate `#26425A`, Powder Blue `#86A8CF`, Dusty Rose `#C38EB4`, and Soft Lilac `#E1C8D7`.
- Light is the initial theme, with canvas `#F2F4F7`, surface `#F8FAFC`, strong surface `#FFFFFF`, and inset surface `#EDF1F5`.
- Dark is an alternate design, with canvas `#0D1824`, surface `#132230`, strong surface `#17293A`, and inset surface `#0F1D29`.
- Both themes use the same semantic token vocabulary and components. Explicit Light/Dark choices persist in browser local storage under `capsight:theme`; Light remains the default when no valid preference exists. System preference behavior remains deferred.
- Visual identity is a high-end professional engineering application with soft editorial composition, strong typography hierarchy, disciplined spacing, and restrained color.
- Neumorphism is selective: tactile controls and chosen elevated or inset surfaces may use it; ordinary content should not be wrapped in heavy shadows.
- The Phase 1 shell separates the canvas, navigation, header, content, and control surfaces with subtle contrast. Selected navigation is inset; the compact theme switch has a raised thumb and pressed response.
- Powder blue, rose, and lilac serve as restrained contextual accents in both themes, including navigation, controls, focus, and small status details.
- Motion is fast and purposeful, usually about 150–300 ms for normal interactions. It should express origin, state, or feedback and respect reduced-motion preferences.

These are current Phase 1 implementation decisions and may be refined.

## Product Hardening Interaction Decisions
- Theme preference is presentation state, separate from Assessment persistence. A fixed inline script restores a valid choice before content paints; the toggle stays synchronized during navigation and across tabs. If storage is blocked, switching still works in the current document, but persistence is unavailable.
- Loading and recovery use concise text and existing controls, without decorative progress. Unavailable work offers a retry and Workspace return; a missing Assessment is distinct from a temporary failure.
- Shared product navigation remains separate from the six Assessment workflow steps. A keyboard skip link reaches each page's main content. Theme, workflow navigation, and primary actions have touch targets at least 44px high.
- Existing 220ms tactile transitions and loop detail feedback remain; reduced-motion preferences remove their animation/transition durations.

## Visual Decisions Intentionally OPEN
- final typography;
- final density and spacing;
- final radius and shadow values;
- navigation styling;
- iconography;
- chart appearance;
- page composition;
- microinteractions;
- motion library, if needed.

These will be decided during implementation according to Prince's taste and the assistant's design recommendations.
