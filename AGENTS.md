# CapSight AI Instructions

CapSight has an authoritative Markdown specification.

Before substantial implementation work:

1. Read `/CAPSIGHT_CONTEXT.md`.
2. Read only the additional contracts relevant to the current task.
3. Inspect the existing implementation before making changes.
4. Preserve approved CapSight terminology and architecture.
5. Do not invent Knowles requirements, formulas, field meanings, defaults, integrations, roles, permissions, or business rules.
6. If required Knowles information is unresolved, stop and report the unresolved requirement instead of guessing.
7. Do not casually modify authoritative Markdown contracts during implementation tasks.
8. If code conflicts with an authoritative contract, report the conflict before changing architecture.
9. Do not introduce meaningful new dependencies without explicit approval.
10. Keep Presentation, Application, Domain, and Infrastructure responsibilities separated according to the approved architecture.
11. The Capacity Engine and domain calculation logic must remain independent of React, Next.js, Prisma, database access, and browser APIs.
12. Run `npm run verify` for substantial changes; run relevant browser/integration checks separately. Architecture boundaries are enforced by the existing lint step; do not bypass them.

## Documentation Entry Point

Always begin with:

`/CAPSIGHT_CONTEXT.md`

That file explains which additional contracts are relevant to specific areas of CapSight.

## Core Rule

AI may implement CapSight.

AI may not redefine CapSight or invent Knowles.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
