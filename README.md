# CapSight

CapSight is an in-progress capacity assessment application. The current implementation contains a small Assessment persistence slice. Request Context fields and capacity calculations await validated Knowles requirements.

## Local setup

1. Use Node.js from `.nvmrc` and run `npm ci`.
2. Provide a reachable PostgreSQL development database. Copy `.env.example` to ignored `.env.local` and replace its placeholder `DATABASE_URL` with a real connection URL. Keep credentials out of source control.
3. Run `npm run db:generate`.
4. Run `npm run db:migrate` to apply the committed migration against that development database. Create further migrations only for approved schema changes.
5. Run `npm run dev` and open `http://localhost:3000/assessments`.

The Prisma CLI reads `DATABASE_URL` from the process environment or `.env.local`; Next.js reads `.env.local` at runtime. Generating the client and validating the schema do not prove database connectivity. The development database now has the successfully applied `20261001021931_init` migration. New development databases still require migration setup.

## Current behavior

When PostgreSQL is configured and migrated, `/assessments` creates a blank saved Assessment and lists recent saved Assessments. Each Assessment opens at `/assessments/{technical-uuid}`; its section links preserve that ID and reload persisted lifecycle state. A new Assessment begins with Request Context incomplete and unvalidated, so Baseline remains blocked. The revision comparison path is implemented in Application and Infrastructure for a technical concurrency probe. No user-facing edit is available until Knowles validates Request Context fields.

Without a database, the app shows a safe unavailable message. An invalid Assessment ID shows a not-found page. Database or Prisma error details are not shown in the UI.

Missing or invalid `DATABASE_URL` configuration emits a static server-side developer diagnostic. Runtime reads and writes remain lazy; compiling the app does not need database access. Never use a production database for verification scripts.

Light is the default theme. Explicit Light/Dark choices persist as a browser preference across reloads, direct/client navigation, and reopening. Blocked browser storage leaves switching available for the current document. `/how-capsight-works` is available without database access.

## Checks

Run `npm test`, `npm run typecheck`, `npm run lint`, `npm run format:check`, and `npm run build`. `npm test` runs the colocated Domain/Application Vitest suite once in Node and exits with nonzero status on failure. It requires no PostgreSQL, `DATABASE_URL`, secrets, network, or browser. Test fixtures are synthetic lifecycle state, not Knowles calculation evidence. Run `npm exec prisma validate` for schema validation. Persistence behavior and migration success must be checked against a reachable PostgreSQL database.

`.github/workflows/ci.yml` runs `npm ci`, Prisma Client generation, typecheck, lint, format check, `npm test`, and build for pushes and pull requests to `main`, using `.nvmrc`. A clean checkout must run `npm run db:generate` before typecheck/build because the generated client is ignored. Compilation and unit tests need neither `.env.local` nor `DATABASE_URL`; CI runs no migrations, database integration tests, or deployment. Use `npm audit` to inspect the locked dependency graph; do not force upgrades automatically. See [the testing strategy](docs/features/capacity-engine-testing-strategy.md) for unit, persistence, future Knowles golden-sample, and future browser/E2E verification boundaries.

Optionally run `node scripts/verify-baseline-workflow.mjs` as a non-mutating TypeScript compiler/Node module-loading smoke check. Its Baseline readiness assertions overlap the durable Vitest suite; it performs no calculation or database access and is retained outside CI.

Run `node scripts/verify-assessment-concurrency.mjs` against the development database to exercise the actual Application/Infrastructure update path using an existing Assessment. It reads the current revision, advances it once, retries with the stale revision, and checks PostgreSQL for preserved lifecycle state and unchanged other records. Each successful run advances the selected record's revision; it does not create a record. Set `ASSESSMENT_ID` in the process environment to select a particular existing record, or omit it to select the oldest record.

On October 1, 2026, verification against two existing Assessments advanced one record from revision 1 to 2 and rejected the repeated expected revision 1 with `conflict`. Direct PostgreSQL inspection confirmed revision 2, preserved incomplete/unvalidated state, and an unchanged second Assessment. Browser reload/reopen verification was not repeated during this concurrency check.
