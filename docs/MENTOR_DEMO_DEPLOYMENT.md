# Mentor Demo Deployment

_Repository readiness: October 7, 2026. Future manual setup only; no hosted deployment has been verified._

## Purpose and isolation

Demonstrate the current CapSight checkpoint using a protected **Vercel Preview** and a completely separate managed PostgreSQL database. This is a team engineering choice ([D149](DECISIONS.md)), with CapSight Implementation Phase 5 still **CURRENT / ACTIVE**. Knowles validation gates and current product behavior remain in force.

**Pre-deployment review required:** on October 7, 2026, `npm audit` reported **9 high** findings in the locked ESLint/Prisma dependency trees; `npm audit --omit=dev` still reported **4 high**. Resolve these or complete an explicit risk review before external setup. npm suggests breaking tooling version changes, so readiness work does not run forced fixes or change dependencies. No claim of a vulnerability-free deployment is made.

| Environment       | Application                              | Database / data                                                                                  |
| ----------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Local development | Local Next.js                            | Local `capsight_dev`; developer-owned data                                                       |
| Mentor demo       | Vercel Preview from `demo/mentor-review` | Separate managed PostgreSQL; initially empty, then blank Assessments created through the real UI |

Never copy the local database, local `.env.local`, real Knowles operational datasets, employee information, or real CAPEX records into this environment. Synthetic information may be used only if supported by a later approved feature; there is no seed or invented manufacturing data in this setup. Everyone granted deployment access shares the current Workspace and create capability; CapSight has no product login or roles.

## 1. Select an approved source checkpoint

- `main` remains authoritative. After readiness changes are reviewed and merged, manually create `demo/mentor-review` from an approved `main` commit and record its SHA for the review.
- Keep the demo branch representative of `main`, normally updating it by fast-forward to a newly approved checkpoint. Review any divergence rather than adding demo-only product code.
- Require passing `main` CI and run `npm ci`, `npm run verify`, and `npm run test:e2e` for the selected checkpoint (Chromium must be installed). Current CI targets pushes/PRs to `main`; pushing the demo branch alone does not run that workflow. No remote database or deployment secrets belong in CI.

## 2. Confirm hosting and access settings before deployment

Later, an authorized operator configures the Vercel project and GitHub connection:

- Use the standard **Next.js** preset and the directory containing `package.json`. Select hosted **Node.js 24.x**; local/CI Node remains pinned by `.nvmrc`. Vercel controls hosted minor/patch updates. Use Node functions for PostgreSQL access.
- Install with **`npm ci`**, including build-time dev dependencies (the Prisma CLI and TypeScript are needed). Build with **`npm run build`** and leave Next.js output settings at their defaults. No `vercel.json`, provider SDK, adapter change, or project CLI dependency is required. `.vercel/` is already ignored.
- Keep `demo/mentor-review` a **Preview** branch. Do not set it as the Production branch or promote its deployment. Configure dashboard build-ignore controls to skip Production and unrelated branches before enabling automatic Git deployments. Git import can initiate a default Production deployment: confirm that it is skipped/cancelled before continuing. If the account/import flow cannot enforce this, resolve that setup constraint first.
- Enable deployment protection covering the Preview URLs before sharing. Confirm the account's available protection/sharing controls and permissions. Use Vercel Authentication or another supported deployment-level protection mechanism, without adding CapSight authentication, middleware, roles, or tables.

## 3. Provision the separate demo database and configure its URL

Later, an authorized operator chooses managed PostgreSQL compatible with Prisma 7, `@prisma/adapter-pg`, and `pg`, with Node TCP connectivity and the provider's required TLS settings. Confirm the remote host and database identity are dedicated to this demo, never `localhost` or local `capsight_dev`.

- Preserve the single application contract **`DATABASE_URL`**. Enter the provider-issued connection URL through Vercel's environment settings, scoped to **Preview → `demo/mentor-review` only**. Do not populate Production/Development or all Preview branches with this credential. Do not prefix it with `NEXT_PUBLIC_`, commit it, paste it into logs/issues, or pull it into the local development `.env.local`.
- Prefer the provider's compatible pooled runtime endpoint for the small mentor workload. Confirm connection quotas, pooling mode, TLS, region/network reachability, and Prisma/`pg` compatibility with the selected provider before deployment; no provider is selected by this guide.
- Existing persistence creates Prisma/its `pg` pool lazily and reuses it within each warm Node instance. It does not create/disconnect a client on each request. Instances do not share this pool: `pg` defaults to at most 10 connections per pool, and scaling or suspended functions can multiply/retain connections. Low traffic plus an appropriately sized provider pool is a reasonable demo target, not a load/capacity guarantee. Check provider connection metrics during the smoke test; revisit limits/lifecycle only if the chosen environment exposes a concrete problem.
- Missing/invalid URL configuration produces a static server diagnostic and safe unavailable UI. URL parsing does not prove connectivity, TLS, permissions, or applied migrations. Credentials remain server-side; the UI does not render raw database errors.

## 4. Apply committed migrations deliberately

Use a separate clean checkout/terminal for demo setup, with no local `.env.local`. Securely supply a **nonempty demo `DATABASE_URL` in that process environment** and confirm the provider host/database before running any Prisma command. Never rely on the development-file fallback. If the provider requires a direct endpoint for migrations, use its direct **demo** URL as `DATABASE_URL` for this operation only; keep the compatible pooled URL in the Preview runtime. No second application variable is required.

From the approved checkout, after `npm ci`:

```sh
npx prisma migrate status
npm run db:migrate:deploy
npx prisma migrate status
```

Pending migrations can make the first status command exit nonzero. Review the committed SQL first; `db:migrate:deploy` is exactly `prisma migrate deploy`, which applies pending migrations and records migration history. It is never called by install, build, startup, `verify`, or CI. Do not use `db:migrate` / `migrate dev`, `db push`, reset, migration authoring, or seeds for this demo setup.

The current committed initial migration creates the lifecycle enums and `CapacityAssessment` table, with revision default **1** and no Assessment inserts. It needs no local files beyond the committed schema/config/migrations. Fresh remote migration success remains a manual setup check, not a claim from compilation.

Before starting the app, use the provider's SQL console or an authorized PostgreSQL client against that same demo target:

```sql
SELECT current_database();
SELECT COUNT(*) AS assessment_count FROM "CapacityAssessment";
```

Expect the dedicated demo database identity and **0 Assessments**. Prisma migration-history rows are expected. If Assessments already exist, investigate the target/history rather than deleting data to force an empty result. Close the setup terminal afterward so its demo credentials are not reused accidentally.

## 5. Deploy the Preview and smoke-test it

From Vercel's Deployments screen, create a deployment from the full `demo/mentor-review` branch reference; confirm the selected commit and **Preview** environment, including when the commit also exists on `main`. Verify branch-scoped variables and protection. Build generates the ignored client in `src/generated/prisma`; no live database, `.env.local`, migration, or seed is needed to build. No Windows paths or local-only runtime files are required.

Check build/runtime logs without copying credentials. A successful build alone does not prove remote persistence. In the protected Preview:

1. Open **Workspace**: expect an available, empty list before any creation.
2. Use **Create Assessment** once: expect one saved blank Assessment, incomplete/unvalidated, revision 1. Confirm no duplicate after returning to Workspace.
3. **Open Assessment**, reload its URL, return to Workspace, and reopen: expect the same persisted identity and lifecycle state.
4. Navigate **Request Context**, **Baseline**, and **Solution**: expect the current evidence-backed context and readiness gates, without calculations, invented fields, or editable solution workflows. Navigation must retain the Assessment identity.
5. Open **How CapSight Works** and return to Workspace.
6. Switch Light/Dark, navigate, reload, and reopen the browser: expect the selected theme to persist.

These are later manual hosted smoke checks. The existing 21 Vitest and 8 database-free Playwright tests remain unchanged and do not claim remote persistence coverage. Use blank Assessments only; do not run the revision-mutating local concurrency script as a demo smoke test.

## 6. Share access and retire the demo

- Test the ordinary Preview URL in a fresh signed-out browser: access must be protected. Check the deployment URL and branch alias, then test the intended mentor access method separately. Do not remove protection to make sharing work.
- From the reviewed deployment's **Share** controls, generate a shareable access link if supported by the account. Verify it opens the intended checkpoint in a separate browser. Prefer the reviewed deployment URL over a moving branch alias; record the SHA separately. Anyone holding a bypass link can use its access, so send it only to intended mentors and keep its token out of Git, public documents, and screenshots.
- After review, revoke the shareable link (currently **Only people with access**) and remove any individual access grants as well. Verify the old link no longer grants access in a fresh browser. Stop automatic demo deployments when they are no longer needed.
- An authorized operator may then retire the demo deployment/project and the separate demo database, and revoke/remove its credentials, after confirming those resources are demo-only and any review retention need is settled. Never reset or delete local `capsight_dev` as cleanup.

## Official provider references

Recheck these during actual setup; account capabilities and hosted behavior can change.

- [Prisma 7 on Vercel: generation, Preview isolation, and connection lifecycle](https://www.prisma.io/docs/orm/v7/prisma-client/deployment/serverless/deploy-to-vercel)
- [Vercel Git deployments and branch selection](https://vercel.com/docs/git), [build-ignore controls](https://vercel.com/kb/guide/how-do-i-use-the-ignored-build-step-field-on-vercel)
- [Vercel environment scopes](https://vercel.com/docs/environment-variables), [hosted Node versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions)
- [Vercel shareable access and revocation](https://vercel.com/docs/deployment-protection/methods-to-bypass-deployment-protection/sharable-links)
- [`pg` pool configuration](https://node-postgres.com/apis/pool)
