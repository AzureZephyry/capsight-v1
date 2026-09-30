# Frontend State, Interaction & Responsive Application Architecture

## Status
**V1 LOCKED / correctable by approved CapSight decisions or higher-authority Knowles evidence.**

## Purpose
Define how CapSight's frontend manages authoritative data, drafts, interaction state, calculation freshness, loading/errors, responsive behavior, accessibility, and server/client boundaries without creating a second source of domain truth.

## Role in CapSight
This contract applies equally to every CapSight V1 implementation. There is one CapSight specification even if separate codebases implement it independently.

## Core State Model
CapSight distinguishes:

- **Server/domain state** — authoritative persisted business/calculation state.
- **Form/draft state** — user edits that may not yet be saved.
- **Interaction state** — local UI choices such as expanded detail, active comparison, dialog state, and temporary selections.
- **Derived view state** — display values safely recomputed from authoritative data.

Do not maintain the whole assessment/product as one giant client-side store.

## Confirmed Behavior
### Saved vs draft
- Persisted and draft values are distinct.
- Meaningful edits should support clean/dirty/saving/saved/save-failed/conflict semantics.
- Explicit save is the default V1 behavior for meaningful domain mutations.
- Autosave is not assumed.
- Client validation exists for responsiveness; server/application/domain validation remains authoritative.

### Forms and editing
- Group large forms by workflow/domain meaning, not storage schema.
- Prefer iterative navigation rather than a rigid irreversible wizard.
- Preserve draft data on recoverable failure where practical.
- Avoid silently discarding meaningful unsaved work.
- Explain why important disabled actions are unavailable where the reason is not obvious.

### Scenario Studio
Temporary client state may support scenario edits, selections, comparison targets, expandable detail, chart modes, and potential previews. Persisted Scenario state and official Calculation Runs remain authoritative server/domain data.

Editing a Planning State after calculation does not mutate its previous Calculation Run. The current state becomes **needs recalculation**.

If live/temporary preview calculation is later implemented, it must be clearly distinct from an authoritative persisted Calculation Run.

### Loading and errors
- Prefer localized loading that preserves page context.
- Use optimistic UI selectively for low-risk interaction, not as false confirmation of important domain mutations.
- Use restrained success feedback and stronger error/conflict feedback.
- Surface errors near their scope: field, section, calculation, or application/system.
- Toasts may supplement but must not be the sole error mechanism.
- Concurrency conflicts are explained in human workflow language.

### State-management restraint
Do not introduce a global state library by default. Prefer:
- Server Components for server-readable/renderable state;
- URL/route state where meaningful;
- local component/form state for drafts/interactions;
- server persistence for authoritative records.

Avoid unnecessary server-state mirroring and effect-driven synchronization webs.

### Responsive behavior
Responsive design is **information-preserving**.

The layout may transform across desktop, laptop, tablet, and phone, but important engineering meaning remains accessible, including values, units, labels, warnings, statuses, calculation/profile context, and trace access.

Tables and charts need deliberate mobile/touch strategies. Critical information cannot rely only on hover.

### Motion
Motion may explain scenario change, variance, calculation-state transitions, and progressive detail. It must not be the only carrier of meaning and should respect reduced-motion preferences.

### Accessibility
V1 frontend implementation includes semantic controls, keyboard/focus behavior, sufficient contrast, useful labels, and no status communicated by color alone.

### Decision Trace
Use progressive disclosure:

`Result → Trace Summary → Calculation Steps → Formula/Variable Detail → Profile/Version Context`

Do not overwhelm users by exposing all technical detail at once.

## Visual Design Direction
**Not locked in Stage 14.**

CapSight's visual identity will be shaped during implementation according to **Prince's taste and the assistant's design judgment**, with Prince approving the direction before visual decisions become authoritative.

This includes final choices for:
- colors;
- typography;
- visual density;
- radius/shadow language;
- iconography;
- decorative treatment;
- component styling;
- motion character;
- final layout personality.

The visual direction may evolve while the web app is being built. However, it must still obey the approved requirements for clarity, responsiveness, accessibility, consistency, traceability, and information preservation.

## Do Not Assume
- Do not assume autosave.
- Do not assume a global state library.
- Do not assume React Hook Form or another form library.
- Do not assume TanStack Query/SWR or another client cache.
- Do not assume live calculation preview.
- Do not assume desktop-only charts/tables.
- Do not freeze a generic SaaS visual theme before Prince approves it during implementation.

## Open Questions
- Exact form library / form-state strategy.
- Exact schema-validation integration.
- Exact client caching/query tool, if any.
- Whether a global state tool becomes necessary.
- Exact unsaved-navigation protection.
- Exact conflict reconciliation UX.
- Whether temporary live Scenario calculation is implemented.
- Exact table/chart responsive behavior once real Knowles data shapes are known.
- Final aesthetic/design system choices during implementation.

## Technical Boundaries
- React/client state does not own calculation/domain truth.
- Server/domain validation remains authoritative.
- Historical Calculation Runs are immutable evidence.
- Temporary UI preview does not become historical truth merely because it appears on screen.
- Responsive adaptation cannot remove necessary engineering meaning.

## Validation Requirements
During implementation, verify:
- draft vs saved behavior;
- stale-result/recalculation behavior;
- conflict/error draft preservation;
- desktop/tablet/mobile information parity;
- touch access to chart/table information;
- keyboard/focus behavior;
- reduced-motion behavior where motion is used;
- no visual status depends on color alone.

## Current Implementation State
Not implemented. Stage 14 defines the approved V1 frontend interaction architecture for both codebases.
