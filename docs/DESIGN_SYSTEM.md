# CapSight Design System

## Status
V1 direction approved through Stage 15. Final visual design remains intentionally OPEN until implementation.

## Authority
CapSight's visual direction will be designed collaboratively according to **Prince's taste and the assistant's design recommendations**, with Prince approving the direction before it becomes authoritative.

This document records the approved design-system architecture without prematurely freezing the aesthetic.

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

## Visual Decisions Intentionally OPEN
- palette;
- typography;
- density;
- spacing character;
- radius/corner treatment;
- shadows/elevation;
- surfaces;
- navigation styling;
- iconography;
- chart appearance;
- page composition;
- microinteractions;
- motion character/library.

These will be decided during implementation according to Prince's taste and the assistant's design recommendations.
