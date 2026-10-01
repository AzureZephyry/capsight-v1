# CapSight

CapSight is an in-progress capacity assessment application. The current implementation contains a small Assessment persistence slice. Request Context fields and capacity calculations await validated Knowles requirements.

## Local setup

1. Run `npm install`.
2. Provide a reachable PostgreSQL development database. Copy `.env.example` to ignored `.env.local` and replace its placeholder `DATABASE_URL` with a real connection URL. Keep credentials out of source control.
3. Run `npm run db:generate`.
4. Run `npm run db:migrate -- --name init` to create and apply the initial migration against that development database. Commit the resulting migration with this code when it has run successfully.
5. Run `npm run dev` and open `http://localhost:3000/assessments`.

The Prisma CLI reads `DATABASE_URL` from the process environment or `.env.local`; Next.js reads `.env.local` at runtime. Generating the client and validating the schema do not prove database connectivity. The development database now has the successfully applied `20261001021931_init` migration. New development databases still require migration setup.

## Current behavior

When PostgreSQL is configured and migrated, `/assessments` creates a blank saved Assessment and lists recent saved Assessments. Each Assessment opens at `/assessments/{technical-uuid}`; its section links preserve that ID and reload persisted lifecycle state. A new Assessment begins with Request Context incomplete and unvalidated, so Baseline remains blocked. The revision comparison path is implemented in Application and Infrastructure for a technical concurrency probe. No user-facing edit is available until Knowles validates Request Context fields.

Without a database, the app shows a safe unavailable message. An invalid Assessment ID shows a not-found page. Database or Prisma error details are not shown in the UI.

## Checks

Run `npm run typecheck`, `npm run lint`, `npm run format:check`, and `npm run build`. Run `npm exec prisma validate` for schema validation. Persistence behavior and migration success must be checked against a reachable PostgreSQL database.

Run `node scripts/verify-baseline-workflow.mjs` to check Baseline request, planning, and calculation-readiness gates using the existing TypeScript compiler. This performs no calculation or database writes and does not select a testing framework.

Run `node scripts/verify-assessment-concurrency.mjs` against the development database to exercise the actual Application/Infrastructure update path using an existing Assessment. It reads the current revision, advances it once, retries with the stale revision, and checks PostgreSQL for preserved lifecycle state and unchanged other records. Each successful run advances the selected record's revision; it does not create a record. Set `ASSESSMENT_ID` in the process environment to select a particular existing record, or omit it to select the oldest record.

On October 1, 2026, verification against two existing Assessments advanced one record from revision 1 to 2 and rejected the repeated expected revision 1 with `conflict`. Direct PostgreSQL inspection confirmed revision 2, preserved incomplete/unvalidated state, and an unchanged second Assessment. Browser reload/reopen verification was not repeated during this concurrency check.
