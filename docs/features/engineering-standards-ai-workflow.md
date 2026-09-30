# Project Structure, Engineering Standards & AI Development Workflow

## Status
Stage 17 — **APPROVED V1**.

**Testing-tool correction:** Vitest is **not** locked. The unit/domain/application test framework remains OPEN until implementation. All other Stage 17 directions are approved.

## Purpose
Keep both CapSight V1 implementations understandable, reproducible, architecture-aligned, and resistant to AI/product drift while allowing Prince's independent codebase and the KnowLarps collaborative codebase to use contributor workflows appropriate to their different team sizes.

## Role in CapSight
This contract governs how approved CapSight architecture is represented in source code, how contributors work with Git and project tooling, and how Codex/Copilot may modify the system without redefining CapSight.

## Project Structure Direction

```text
capsight/
├── src/
│   ├── app/
│   ├── presentation/
│   ├── application/
│   ├── domain/
│   ├── infrastructure/
│   └── shared/
├── prisma/
├── docs/
├── tests/e2e/
├── public/
├── CAPSIGHT_CONTEXT.md
├── README.md
└── package.json
```

This is a direction, not a requirement to create empty folders. Modules should exist when real code needs them.

### Layer Rules
- `app`: Next.js routes, layouts, and thin framework adapters.
- `presentation`: components, forms, charts, view-specific feature UI.
- `application`: CapSight workflow/use-case orchestration.
- `domain`: CapSight business/domain concepts, Capacity Engine, validation, trace/comparison semantics.
- `infrastructure`: Prisma/database, auth, imports/exports, integration adapters.
- `shared`: only genuinely cross-cutting UI/types/utilities/configuration.

`domain`, especially Capacity Engine, must not depend on Next.js, React, Prisma, HTTP, browser APIs, or persistence infrastructure.

## Engineering Standards
- TypeScript strict mode remains enabled.
- Avoid `any`, particularly in domain/calculation code.
- External/raw values should enter as `unknown` and be validated/mapped.
- Preserve approved CapSight terminology in code.
- ESLint + Prettier are preferred; exact formatting choices remain scaffold-time details.
- Prefer a simple root import alias; avoid unnecessary alias and barrel-file complexity.
- Keep `"use client"` at genuine interactive boundaries rather than promoting entire pages to client components unnecessarily.
- Comments should explain non-obvious reasoning/domain constraints.
- Do not commit temporary logs, dead code, AI scratch notes, unused demo artifacts, or commented-out implementations.

## Testing
Stage 12 remains the testing authority for what must be verified.

- Golden Knowles example: permanent calculation acceptance test once available.
- Validated calculation rules: focused domain tests.
- Confirmed defects: regression tests.
- Decision Trace/Change Explanation/historical reproducibility: testable correctness concerns.
- **Unit/domain/application test framework: OPEN. Vitest is not locked.**
- Select a test tool based on team familiarity, maintainability, and ability to support the approved testing strategy.
- Playwright is the preferred later E2E direction for a limited set of critical competition flows, subject to implementation confirmation.

## Runtime / Package Management
- npm remains the package manager.
- Commit `package-lock.json`.
- Pin/document the supported Node.js version during scaffolding.
- Expose predictable scripts such as `dev`, `build`, `lint`, `typecheck`, `test` when applicable.
- Centralize environment access.
- Keep real `.env` credentials outside Git; provide a safe `.env.example`.

## Git Workflow
### Prince independent implementation
May use a lighter solo workflow. Keep `main` reasonably runnable and use feature branches for large/risky work where helpful.

### KnowLarps team implementation
Use short-lived feature branches and lightweight PR review for substantial changes. Avoid long-lived per-developer branches that accumulate merge conflicts.

### Shared rules
- Prefer small meaningful commits.
- Lightweight Conventional Commit prefixes are recommended (`feat:`, `fix:`, `refactor:`, `test:`, `docs:`, `chore:`).
- The repositories share **product truth**, not automatic source-code synchronization.
- Source convergence is explicit if/when the team chooses it.

## AI Development Governance
1. Read `CAPSIGHT_CONTEXT.md` before substantial work.
2. Read only the feature/architecture contracts relevant to the task after context.
3. Calculation work must read `CALCULATION_REFERENCE.md` plus relevant engine/validation contracts.
4. Unknown Knowles truth is a blocked requirement, not permission to improvise.
5. Inspect existing code/contracts before substantial modification.
6. Keep AI tasks bounded; do not ask an agent to "finish CapSight" without scope.
7. Meaningful new dependencies require explicit approval.
8. AI may not bypass approved layer boundaries to finish faster.
9. Surface code-vs-contract conflicts rather than silently choosing one.
10. Do not rewrite authoritative Markdown simply because implementation diverged.
11. Thin AI instruction files may point to contracts but must not duplicate the specification.
12. Codex is primary for architecture-sensitive/multi-file/domain/persistence/calculation work.
13. Copilot is preferred for localized implementation assistance and repetitive/small changes.
14. UI work must follow Prince-approved Figma/design-system direction.
15. Significant changes should run the appropriate available verification commands.

## Unresolved Markers
- `TODO(KNOWLES)`: unresolved authoritative requirement/domain truth.
- `TODO(V1)`: limited implementation work.

Neither marker may justify shipping missing critical calculation truth.

Synthetic/demo data must identify itself clearly and must not be named or presented as validated Knowles data.

## CI
After the scaffold stabilizes, add lightweight CI using the established toolchain. It should check enough to catch integration/reproducibility failures without introducing enterprise ceremony.

## Documentation Boundary
- `README.md`: installation, setup, environment, commands, testing/run instructions.
- `CAPSIGHT_CONTEXT.md` + `docs/`: authoritative product, domain, architecture, and feature truth.

## Do Not Assume
- Do not assume Vitest.
- Do not assume a global state/form/query library from Stage 17.
- Do not assume a specific auth provider.
- Do not allow AI-specific instruction files to become competing product specs.
- Do not treat the two codebases as separate CapSight products.

## Current Implementation State
Planning contract approved. Implementation has not yet begun under this stage.
