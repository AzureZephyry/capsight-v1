# Mentor Demo Deployment

_Repository readiness: October 7, 2026. Historical deployment reconciled October 24; release policy and pre-promotion live audit recorded October 25, 2026._

## Purpose and isolation

Demonstrate the current CapSight checkpoint using a protected mentor demo and a completely separate managed PostgreSQL database. The original engineering plan targeted a **Vercel Preview**; the subsequently confirmed deployment configuration is recorded below and differs in its branch tracking ([D149](DECISIONS.md)). CapSight Implementation Phase 5 remains **CURRENT / ACTIVE**. Knowles validation gates and current product behavior remain in force.

**Dependency advisory review completed — historical October 7 review:** **GREEN — no identified advisory materially blocks the current mentor Preview based on the inspected application/runtime paths.** This conclusion applied to the intended protected, low-traffic mentor Preview. `npm audit` findings were not fixed: on October 7, 2026, it reported **9 high**, while `npm audit --omit=dev` reported **4 high**. These were traced to lint tooling, Prisma CLI/configuration paths, and an unused MySQL driver. No affected path was found in the inspected PostgreSQL web runtime. Dependencies have not been changed by this reconciliation. Actual hosted deployment packaging still requires rechecking; neither that packaging nor current advisory status was revalidated on October 24. No claim of a vulnerability-free deployment is made.

| Environment       | Application                              | Database / data                                                                                  |
| ----------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Local development | Local Next.js                            | Local `capsight_dev`; developer-owned data                                                       |
| Mentor demo — historical record | Vercel `capsight-mentor-demo`; Production Branch Tracking set to `demo/mentor-review` | Separate hosted PostgreSQL; manual create/read/persistence checks previously passed |

Never copy the local database, local `.env.local`, real Knowles operational datasets, employee information, or real CAPEX records into this environment. Synthetic information may be used only if supported by a later approved feature; there is no seed or invented manufacturing data in this setup. Everyone granted deployment access shares the current Workspace and create capability; CapSight has no product login or roles.

## Current authorized release policy — October 25, 2026

**Security gate — remediated locally, October 25, 2026:** the separately authorized patch pins Next.js and matching `eslint-config-next` to **16.4.3**, replacing 16.3.8, and updates only matching `@next` lock entries. React/React DOM **19.2.8** and the already-patched locked `sharp` **0.35.5** remain unchanged. npm's stable tag and the [official 16.4.3 release](https://github.com/vercel/next.js/releases/tag/v16.4.3) were checked. Node 24 and the existing React versions satisfy the package compatibility ranges. No canary, forced audit fix, unrelated refresh, application-source change or migration was used.

The initial review held release because [GHSA-p3m5-59mp-jv5r](https://github.com/vercel/next.js/security/advisories/GHSA-p3m5-59mp-jv5r) applied to the App Router `createAssessmentAction` Server Action. The patch also exceeds the 16.4.1 fixed minimum for [GHSA-673q-mjm6-r5xr](https://github.com/vercel/next.js/security/advisories/GHSA-673q-mjm6-r5xr) (conditional typed-array Cache Components RCE) and [GHSA-2464-fhr4-w9xw](https://github.com/vercel/next.js/security/advisories/GHSA-2464-fhr4-w9xw) (Image Optimization/SVG RCE). The latter advisory requires `sharp` at least 0.35.5, which the lockfile resolves. CapSight has no `use cache` function, enabled Cache Components or `next/image` import; no application RCE or exploit test is claimed. Authentication remains necessary and is not a substitute for framework patches.

The renewed full audit reports **9 affected packages: 6 high / 3 moderate / 0 critical**; `--omit=dev` reports **5: 4 high / 1 moderate / 0 critical**. Neither Next.js nor `sharp` remains flagged. Remaining findings trace to ESLint's Zod, Vitest/Vite, and Prisma CLI/configuration paths (`deepmerge-ts`, `fast-uri` and an unused `mysql2` driver); Prisma's optional peer relationship also includes CLI packages in the production audit count. No affected package appeared in the 12 inspected local server trace manifests. These findings were **not fixed**, and trace absence is bounded evidence, not a guarantee about every hosted package. Recheck actual Vercel build/runtime packaging; do not expose development tooling or use untrusted CLI configuration. The historical October 7 GREEN review and initial October 25 NO-GO do not replace this review.

Fresh `npm run verify` passed typecheck, lint, format, 25 Vitest tests and the Next.js 16.4.3 build; all 10 database-free Chromium tests and 80 responsive/theme checks passed. Real local creation/reopen/history/six-section checks passed, with all nine existing rows unchanged and one new local blank record retained. The initial restricted Windows test invocation was blocked by temporary-file permissions; the unchanged suite passed when rerun with normal filesystem access. No test was weakened. This source checkpoint clears the identified framework hold locally; **require CI success for the exact patched commit and independently verified protected Production READY/source/version/alias/smoke checks before reporting release success**. No future deployment ID or success is predicted here.

[D151](DECISIONS.md#d151--two-permanent-branches-separate-accepted-development-from-the-protected-mentor-production-release) supersedes the original Preview-only target for this existing mentor deployment. The permanent branches are `main` (development/accepted history) and `demo/mentor-review` (protected Vercel Production mentor demonstration). Use the existing project and Production Branch setting. After explicit release approval, complete verification, push `main` normally, require its CI success and advance the demo branch by safe fast-forward to that exact SHA. Audit the **complete** demo-to-main difference; do not deploy a hand-picked hybrid. Never force-push, delete/recreate branches or change tracking as a shortcut.

### Pre-promotion live audit — October 25, 2026

This is a dated snapshot taken **before** releasing Immersive Engineering, not a claim that the source containing this record is already deployed:

- Project `capsight-mentor-demo`, linked to `AzureZephyry/capsight-v1`; Production Branch **`demo/mentor-review`**.
- Previous working Production deployment **`dpl_3rfRCn4AfA3XjWKqK2CbDZeMuuCo`**, READY, serving **`0b6f65c811afcfe05d2ae2cf1bcfb25c884369e1`** at [the Production domain](https://capsight-mentor-demo.vercel.app). Its historical build metadata names `main`; the independently verified current tracking setting is the demo branch.
- Local/remote `main` matched `4d8b4b3364e250204c52229f6594b3e000fdea30`; local/remote demo matched the previous Production SHA. Their accepted gap was only the October 24 documentation reconciliation. No additional schema, dependency, environment or runtime requirement was found in that gap or the visual integration.
- Next.js preset, project root, hosted Node **24.x**, default install/build settings. The committed build generates Prisma Client; it does not migrate/seed. No hosted migration is required for this release.
- **Vercel Authentication enabled for all deployments**. An unauthenticated request redirected to Vercel sign-in; an authorized browser could read the existing Workspace/Assessment.
- Application `DATABASE_URL` metadata was present for **Production and Development**, with **no Preview-scoped value**. Values were not printed, downloaded or changed. Other provider-created variable names do not expand the application's single-variable contract. A `main` Preview may correctly show safe unavailable UI; do not copy Production credentials into Preview to hide this limitation.
- One existing hosted blank Assessment was read without creation/mutation: incomplete, unvalidated, revision 1. This is a bounded application-level read, not a full hosted database audit.

### Release and recovery verification

Run `npm run verify` and `npm run test:e2e`, inspect/stage only intended files, commit integration/documentation together and recheck live remote SHAs before each normal push. CI currently runs on `main`, not demo-only pushes. Promote the exact CI-successful commit only after ruling out unexpected divergence or branch movement.

After the demo push, require Vercel's terminal READY state, correct project/source SHA/branch, Production target and domain assignment. Recheck Authentication and environment **metadata** without exposing values. Inspect deployment diagnostics, then use the authenticated Production URL for **read-only** Workspace, product-story, saved Assessment, six-section, theme, keyboard and readiness smoke tests. Compare existing visible identity/state/revision/date evidence; do not create, edit, delete or run the local concurrency probe against hosted data.

Record the resulting deployment ID, exact SHA, domain and smoke-test outcome from live metadata after promotion. A Git push or local build alone is not deployment evidence. This source checkpoint deliberately does not predict its deployment ID or claim future CI/deployment success; promotion requires all remaining release gates above.

The previous READY deployment above is the recovery target. If a serious regression occurs, use supported [Vercel rollback](https://vercel.com/docs/deployments/rollback-production-deployment), for example `vercel rollback dpl_3rfRCn4AfA3XjWKqK2CbDZeMuuCo`, with the verified project/account scope, then verify the Production alias and protection. Do not force-reset Git. Stop if the target is unavailable or recovery is ambiguous. Preserve evidence and never remove the known-good deployment during release.

Local file bytes, Git commits, GitHub pushes and OneDrive synchronization are distinct. Verify local readability/tracking and remote SHAs directly; do not claim OneDrive cloud synchronization without independent evidence or change its settings.

## Deployment history — reconciled October 24, 2026

Source: project-lead confirmation of previously verified milestones from the earlier CapSight deployment session. The deployment verification date and deployed commit SHA were not supplied in this reconciliation.

- `demo/mentor-review` was created and pushed.
- Vercel project `capsight-mentor-demo` was configured with **Production Branch Tracking set to `demo/mentor-review`**.
- The project was connected to a separate hosted PostgreSQL database.
- The existing Prisma migration was applied successfully to that hosted database.
- The deployed application passed manual create/read/persistence checks.
- Vercel Authentication was enabled for deployments.
- A separate Shareable Link was used to verify protected demo access; the link itself is not recorded here.

These are historical milestones, not claims that the present deployment, database, authentication settings, or shared access remain available or unchanged. This task did not contact Vercel, inspect secrets, run migrations, or revalidate the live state. Production Branch Tracking is recorded as reported; it does not establish CapSight's final production-hosting or product-authentication requirements.

## Original Preview-only setup plan — historical reference

The numbered procedure below preserves the original Preview-only readiness plan. Its Preview branch/environment-scoping instructions describe that plan, **not the current policy above or the confirmed subsequent deployment configuration**. Do not relabel the recorded setup as a verified Preview configuration or use this historical plan to change the existing deployment. Branch creation, migration and empty-database checks below are fresh-setup references, not steps to replay against the existing demo. Future operations still require their own explicit authorization.

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

These are the original plan's manual hosted smoke checks; the historical deployment passed the create/read/persistence checks recorded above. The October 24 record had **25 Vitest / 8 database-free Playwright tests passing**, not rerun for that reconciliation. The later integration baseline is **25 Vitest / 10 Playwright Chromium tests**, with release verification recorded separately; neither count proves hosted persistence. For the existing deployment follow the current policy's **read-only** smoke checks, not this fresh-setup creation sequence. Never run the revision-mutating concurrency script as a hosted smoke test.

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
