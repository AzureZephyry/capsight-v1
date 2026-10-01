# Project Structure, Engineering Standards & AI Development Workflow

## Status
Stage 17 — **APPROVED V1**.

**Testing-tool decisions:** Vitest is approved for Domain/Application unit tests and future Capacity Engine unit/regression tests. Playwright is separately approved for browser/E2E verification. All other Stage 17 directions are preserved.

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

### Mechanical architecture guardrails

`npm run lint` enforces the conforming current architecture through `eslint.config.mjs`. The import plugin and TypeScript resolver already supplied by `eslint-config-next` provide resolved path restrictions; built-in ESLint rules restrict framework/database packages, Domain I/O, browser globals, and JSX. No architecture dependency or separate checker is introduced.

| Importing layer | Forbidden source layers |
| --- | --- |
| Domain | app, Application, Presentation, Infrastructure, generated code |
| Application | app, Presentation, Infrastructure, generated code |
| Presentation | Infrastructure, generated code |
| Infrastructure | app, Presentation |

Domain and Application also reject React/React DOM, Next.js, Prisma packages/CLI, and PostgreSQL/MySQL driver packages (`pg`, `postgres`, `mysql2`), including package subpaths. Presentation rejects the same database packages. Domain additionally rejects Node filesystem, HTTP/network, process-spawning and worker modules, selected browser globals (including access through `globalThis`), and JSX. These recursive rules cover future Capacity Engine code under `src/domain` without creating an engine placeholder.

Layer restrictions resolve aliases and relative paths; they cover static imports, type imports, re-exports, literal dynamic imports, and literal `require` calls. Package restrictions cover these literal loading forms as well. Computed module paths, aliased browser globals, indirect effects through future shared helpers, and newly introduced packages need review; lint is not a sandbox or a whole-program effect/cycle analyzer. Typecheck handles missing modules. New dependencies and shared modules must preserve these boundaries.

Legitimate dependencies remain accepted: Application → Domain and its own `AssessmentStore`; Infrastructure → that Application contract and Prisma; Presentation → Application/Domain models and React/Next.js; `app` → the layers it composes. No contracts move to satisfy lint. If a proposed rule conflicts with valid current code, stop for review rather than restructuring production.

The initial proof used ESLint's in-memory `lintText` against forbidden and allowed imports, including relative/alias paths, re-exports, dynamic imports, type contracts, and a future nested engine path. No invalid production files or temporary fixtures are retained.

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
- **Unit/domain/application test framework: Vitest.** Keep the Node suite deterministic, colocated with the behavior it protects, and independent of PostgreSQL, secrets, network, and browser APIs.
- `npm test` runs once and exits with failure status when tests fail. Use small, explicit synthetic fixtures and test-only store stubs; these do not prove Prisma/PostgreSQL or Knowles calculation correctness.
- **Browser/E2E framework: Playwright.** The default Chromium suite runs once with `npm run test:e2e` against a production build, without PostgreSQL or application secrets. Use semantic selectors, fresh browser contexts, and web-first assertions; no arbitrary sleeps or invented persistence.

## Runtime / Package Management
- npm remains the package manager.
- Commit `package-lock.json`.
- Pin/document the supported Node.js version during scaffolding.
- Expose predictable scripts such as `dev`, `build`, `lint`, `typecheck`, `test` when applicable.
- `npm run verify` sequentially reuses client generation, typecheck, lint, format check, Vitest, and production build; it exits on the first failure. With dependencies installed, it needs no database, database URL, secrets, browser installation, or external network. Browser/E2E verification remains separate.
- Centralize environment access.
- Keep real `.env` credentials outside Git; provide a safe `.env.example`.

## Git Workflow
### Prince independent implementation
May use a lighter solo workflow. Keep `main` reasonably runnable and use feature branches for large/risky work where helpful.

### KnowLarps team implementation
Use short-lived feature branches and lightweight PR review for substantial changes. Avoid long-lived per-developer branches that accumulate merge conflicts.

### Shared rules
- Branch from current `main`, keep changes bounded, run `npm run verify` and relevant browser/integration checks, then push. CI must pass and meaningful changes receive review before merge. Manual PostgreSQL checks use a dedicated development database and require a deliberate decision to run mutating probes.
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
15. Significant changes run `npm run verify` plus relevant browser/integration checks; do not bypass architecture lint to complete a task.

## Unresolved Markers
- `TODO(KNOWLES)`: unresolved authoritative requirement/domain truth.
- `TODO(V1)`: limited implementation work.

Neither marker may justify shipping missing critical calculation truth.

Synthetic/demo data must identify itself clearly and must not be named or presented as validated Knowles data.

## CI
The lightweight GitHub Actions workflow runs for pushes to `main` and pull requests targeting `main`. It uses first-party checkout/setup-node, the pinned `.nvmrc`, and committed npm lockfile. Checks are `npm ci`, generated Prisma Client setup, typecheck, lint, format check, `npm test`, production build, Playwright Chromium headless runtime installation, and `npm run test:e2e`. Browser tests reuse that build with an isolated, database-unconfigured server; no PostgreSQL service, database URL secret, or deployment credentials are required. CI does not migrate or write to a database. Failure-only browser artifacts use first-party GitHub upload with seven-day retention.

## Documentation Boundary
- `README.md`: installation, setup, environment, commands, testing/run instructions.
- `CAPSIGHT_CONTEXT.md` + `docs/`: authoritative product, domain, architecture, and feature truth.

## Do Not Assume
- Do not infer browser/E2E framework selection from the Vitest unit-test decision.
- Do not assume a global state/form/query library from Stage 17.
- Do not assume a specific auth provider.
- Do not allow AI-specific instruction files to become competing product specs.
- Do not treat the two codebases as separate CapSight products.

## Current Implementation State
The scaffold uses strict TypeScript, npm, ESLint, Prettier, and the approved layer boundaries. Product Hardening establishes compilation CI and centralizes runtime database URL validation in Infrastructure. Missing/invalid configuration produces a static developer diagnostic; connection URLs and parser errors are never included in it or in normal UI.

The Automated Verification Foundation adds Vitest Domain/Application tests and automatic CI execution without production refactoring. Existing Baseline gate verification remains an optional, read-only TypeScript compiler/Node loading smoke script whose gate assertions overlap Vitest coverage. The concurrency script deliberately advances one existing Assessment's actual current revision and must only run when real persistence verification is needed. The distinct verification layers are defined in [Capacity Engine Testing Strategy](capacity-engine-testing-strategy.md).

The fourth, unnumbered Browser / E2E Verification Foundation adds Playwright tests for existing database-independent product behavior, using Chromium only. It does not move Vitest rules into browser tests or establish persisted Assessment/calculation correctness.

The fifth, unnumbered Architecture Guardrails + Developer Experience increment mechanically protects the conforming import graph with existing ESLint tooling, adds the local `verify` command, and clarifies source-only onboarding and safe migration use. CI retains its visible individual checks; schema, persistence, product behavior, testing frameworks, and Knowles requirements remain unchanged.
