# CapSight Local PostgreSQL Setup Guide

Prepared November 4, 2026 for Christan. Project: capsight-v1. Branch: demo-shared-database/christan-mentor-review.

## 1. What you end up with

A local setup where the CapSight Next.js app and a PostgreSQL database both run on one laptop.

- Browser to the Next.js dev server at http://localhost:3000
- Next.js to Prisma (with the pg adapter) to PostgreSQL 18 at localhost:5432
- Database capsight\_mentor\_review, owned by the limited login role capsight\_app
- Credentials stored only in .env.local, which Git ignores

This is a local database, not a hosted or shared one. Git does not carry the database or its password to another device (see section 13).

## 2. Ground rules followed throughout

- Never paste passwords or full connection strings into chat, screenshots, or commits.
- Keep the postgres administrator password separate from the capsight\_app password.
- Never commit .env.local, credentials, database dumps, or private assessment data.
- Do not run prisma migrate reset, prisma db push, prisma migrate dev, DROP, or TRUNCATE during this setup.
- Do not edit committed migrations to make setup easier.
- Do not touch main or demo/mentor-review. Do not push, deploy, or open a PR unless you decide to.
- Do not change calculation logic. That work is coordinated with the mentor.
- Verify each step with evidence before moving on.

## 3. Starting point (verified)

- PostgreSQL 18.6 (x86\_64-windows, 64-bit) installed, with pgAdmin 4 connected as postgres on port 5432.
- Only the default postgres database existed. Neither capsight\_app nor capsight\_mentor\_review existed yet.
- Local project path: C:\\Users\\Christan\\Desktop\\CapSight-Sandbox\\capsight-v1
- Branch demo-shared-database/christan-mentor-review at commit cfcc5c10904f498558c80f89c08a147e141ef433, working tree clean.
- A read-only Codex audit found the migration complete (it creates both enums and the CapacityAssessment table), so no code, schema, or migration change was needed. The migration had not yet been applied to the new local database.

## 4. Install PostgreSQL and pgAdmin 4 (general guidance)

This step was completed before the guided session, so these notes are general guidance, mainly for a second device.

- Download the Windows installer from postgresql.org (the EDB installer). It normally bundles the server, pgAdmin 4, and command-line tools.
- Keep the default port 5432.
- Choose a strong password for the postgres administrator account and store it in a password manager.
- Open pgAdmin 4 and connect to the PostgreSQL 18 server with the postgres password.

To confirm the connection, right-click the postgres database, choose Query Tool, and run this read-only query:

```sql
SELECT version() AS postgresql_version, current_user, inet_server_port() AS port;
```

Expected: a PostgreSQL 18 version string, current\_user = postgres, port = 5432.

## 5. Get the right Git branch

```powershell
cd C:\Users\Christan\Desktop\CapSight-Sandbox\capsight-v1
git fetch origin
git switch demo-shared-database/christan-mentor-review
git status -sb
```

Expected: the first line shows the branch tracking origin/demo-shared-database/christan-mentor-review, and nothing else is listed (clean working tree).

## 6. Create the limited role capsight\_app

Why: the application should connect with a limited account, not the postgres superuser.

In pgAdmin: expand Servers, then PostgreSQL 18, right-click Login/Group Roles, and choose Create, then Login/Group Role.

- General tab: Name = capsight\_app
- Definition tab: enter a new password, different from the postgres password. Keep it private and store it in a password manager.
- Privileges tab: Can login = Yes and Inherit = Yes. Superuser, Create roles, Create databases, Replication, and Bypass RLS = No.
- Click Save.

Verify with a read-only query as postgres:

```sql
SELECT rolname, rolsuper, rolcreatedb, rolcreaterole,
       rolcanlogin, rolreplication, rolbypassrls
FROM pg_roles
WHERE rolname = 'capsight_app';
```

Expected: rolcanlogin is true and every other flag is false.

Lesson learned: rolcanlogin must be true or the app cannot connect at all. If it is false, fix it with:

```sql
ALTER ROLE capsight_app WITH LOGIN;
```

## 7. Create the database

In a Query Tool connected to the default postgres database:

```sql
CREATE DATABASE capsight_mentor_review OWNER capsight_app;
```

Why the app role owns the database: since PostgreSQL 15, ordinary roles cannot create tables in the public schema, but a database owner can. Prisma’s migrate deploy must create the CapacityAssessment table, two enums, and its own \_prisma\_migrations bookkeeping table. Ownership is the smallest setup that works. A separate migration role would be tighter but adds a second credential, which is not worth it for a one-laptop demo. The tradeoff is that the app role can also change the schema.

Verify (read-only):

```sql
SELECT datname,
       pg_get_userbyid(datdba) AS owner,
       pg_encoding_to_char(encoding) AS encoding
FROM pg_database
WHERE datname = 'capsight_mentor_review';
```

Expected: owner = capsight\_app, encoding = UTF8. The name uses underscores, not hyphens.

If the name or owner is wrong on a brand-new, empty database, disconnect it in pgAdmin and fix it from the postgres database:

```sql
ALTER DATABASE "capsight-mentor-review" RENAME TO capsight_mentor_review;
ALTER DATABASE capsight_mentor_review OWNER TO capsight_app;
```

## 8. Create .env.local safely

Prisma and Next.js both read DATABASE\_URL from .env.local. The file must never be committed.

```powershell
cd C:\Users\Christan\Desktop\CapSight-Sandbox\capsight-v1
Test-Path .env.local
```

This should print False. If it prints True, stop, because the next steps would overwrite it. Then:

```powershell
Copy-Item .env.example .env.local
git check-ignore -v .env.local
git status --short
```

Expected: check-ignore prints a .gitignore rule (here, line 36: .env\*) and git status prints nothing. If check-ignore prints nothing, stop.

### Write the URL without typing it by hand

Lesson learned: editing the URL by hand left the template placeholders (host, DATABASE) in place and put the password in the user slot. The result was error P1001 and a visible password. Let PowerShell build the line from a hidden prompt instead.

Run this line by itself and type the password when prompted (nothing shows as you type):

```powershell
$secure = Read-Host 'Type the capsight_app password (hidden)' -AsSecureString
```

Then run this block. It overwrites .env.local and automatically URL-encodes special characters in the password:

```powershell
$bstr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
$plain = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($bstr)
[Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)
$enc = [Uri]::EscapeDataString($plain)
$content = "# Set this to a reachable PostgreSQL development database in .env.local.`nDATABASE_URL=`"postgresql://capsight_app:$enc@localhost:5432/capsight_mentor_review?schema=public`"`n"
[IO.File]::WriteAllText((Join-Path $PWD ".env.local"), $content, (New-Object Text.UTF8Encoding($false)))
Remove-Variable secure, bstr, plain, enc, content
Clear-Host
```

### Check the file without printing the password

```powershell
$raw = (Get-Content .env.local | Where-Object { $_ -match '^DATABASE_URL=' }) -replace '^DATABASE_URL=', '' -replace '"', ''
try {
  $u = [Uri]$raw
  "scheme:   $($u.Scheme)"
  "user:     $($u.UserInfo.Split(':')[0])"
  "password: $(if ($u.UserInfo.Contains(':') -and $u.UserInfo.Split(':')[1].Length -gt 0) { 'present' } else { 'MISSING' })"
  "host:     $($u.Host)"
  "port:     $($u.Port)"
  "database: $($u.AbsolutePath.TrimStart('/'))"
  "query:    $($u.Query)"
} catch { "URL could not be parsed" }
```

Expected output: scheme postgresql, user capsight\_app, password present, host localhost, port 5432, database capsight\_mentor\_review, query ?schema=public.

If a password ever appears on screen or in a chat, run Clear-Host and rotate it. Change it in pgAdmin (right-click capsight\_app, Properties, Definition, enter a new password, Save) rather than with an ALTER ROLE statement, which would store the password in query history. Then rerun the two scripts above to update .env.local.

## 9. Prisma checks (no database changes)

```powershell
npm run db:generate
npm run typecheck
npx prisma migrate status
```

- db:generate rebuilds the Prisma Client from the schema. It never contacts the database.
- typecheck runs tsc. Silence means success.
- migrate status connects as capsight\_app and reports migration state. It is the first real test of the login.

The line Loaded Prisma config from prisma7.config.ts confirms Prisma found the config and read .env.local. Do not rename that file. You can ignore the banner offering Prisma 8.0.0-rc.30, which is a release candidate and a major version jump.

Expected on the new database: 1 migration found, and 20261001021931\_init has not yet been applied.

Error codes:

- P1000: authentication failed. The password in .env.local does not match the one in pgAdmin.
- P1001: cannot reach the database server. If it names HOST, the template placeholders are still in .env.local. If it names localhost, check that the PostgreSQL service is running.
- P1003: the database does not exist, so the name is wrong somewhere.

## 10. Apply the migration

Use only migrate deploy. It applies pending migrations and never resets or drops anything.

```powershell
npm run db:migrate:deploy
npx prisma migrate status
```

Expected: Applying migration 20261001021931\_init, then Database schema is up to date!

Why not the other commands: npm run db:migrate runs prisma migrate dev, which wants a shadow database and can propose resets. prisma db push and prisma migrate reset can destroy data or bypass the migration history.

## 11. Verify the result in pgAdmin

Right-click the capsight\_mentor\_review database (not postgres), choose Query Tool, and run these read-only queries one at a time.

Tables (expect CapacityAssessment and \_prisma\_migrations):

```sql
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
ORDER BY table_name;
```

Enums (expect RequestCompleteness with INCOMPLETE and COMPLETE, and RequestValidation with UNVALIDATED and VALIDATED):

```sql
SELECT t.typname AS enum_name, e.enumlabel AS value
FROM pg_enum e
JOIN pg_type t ON t.oid = e.enumtypid
ORDER BY t.typname, e.enumsortorder;
```

Row count (expect 0 on a fresh database):

```sql
SELECT count(*) AS rows_in_table FROM "CapacityAssessment";
```

## 12. Run the app and test persistence

```powershell
npm run dev
```

Open http://localhost:3000. It redirects to /assessments. Stop the server with Ctrl+C.

Routes (from a read-only Codex trace):

- /assessments: the Shared Workspace, with recent saved Assessments and a Create Assessment button
- /assessments/{id}: Overview of one Assessment
- /assessments/{id}/request-context: read-only explanation of the expected request information
- /assessments/{id}/baseline: baseline planning and calculation readiness
- /assessments/{id}/scenarios: how scenarios relate to a Baseline
- /assessments/{id}/solution: solution evaluation context
- /assessments/{id}/reality: actual-results and validation context
- /how-capsight-works: product guide, which does not need the database

What the app does in this version: Create Assessment inserts a blank row (Incomplete, Unvalidated, revision 1) and redirects to its Overview. The workspace lists up to 20 recent Assessments. It is a persistence and workflow-orientation shell, not yet a working capacity calculator. Do not change calculation logic while it is being coordinated with the mentor.

To prove data reaches the local database:

1. Click Create Assessment.
2. In pgAdmin (Query Tool on capsight\_mentor\_review), run:

```sql
SELECT id, "requestCompleteness", "requestValidation", revision, "createdAt"
FROM "CapacityAssessment"
ORDER BY "createdAt" DESC;
```

3. Stop the server (Ctrl+C), run npm run dev again, reload /assessments, and confirm the Assessment is still listed.

If the workspace says Saved work is temporarily unavailable, the app cannot reach or use the database. Check .env.local, that PostgreSQL is running, and migrate status. The UI deliberately hides the underlying error.

Do not run the concurrency script casually. It advances an existing record’s revision, so use it only against a test Assessment you chose on purpose.

## 13. Setting up a second device

The database lives inside PostgreSQL on this laptop. Git carries code only. It does not carry the database, its data, the capsight\_app password, or .env.local. Pushing the branch will not make the app work on another device by itself. On the other device, repeat the setup:

1. Install Git, a recent Node.js (the Prisma config uses Node’s built-in loadEnvFile, which needs a reasonably recent Node; check the README for the version the project expects), and PostgreSQL with pgAdmin 4 (section 4).
2. Clone the repository, fetch origin, and switch to demo-shared-database/christan-mentor-review (section 5).
3. Install dependencies with npm install (or the command in the README).
4. Create the capsight\_app role with a new password, not a reused one, and create the capsight\_mentor\_review database with that role as owner (sections 6 and 7).
5. Create .env.local with the hidden-prompt script (section 8).
6. Run npm run db:generate, npm run typecheck, npx prisma migrate status, npm run db:migrate:deploy, and migrate status again (sections 9 and 10).
7. Run npm run dev (section 12).

The second device starts with an empty database. Do not copy data by committing a database dump, because dumps can contain private assessment data. If both devices must see the same data, that needs a real shared database (hosted or network-reachable), which is a separate setup and decision.

## 14. Git: what to commit

- The setup in this guide changed no tracked files. Everything lives in PostgreSQL and in the ignored .env.local, so git status should stay clean and there is nothing to commit for the setup itself.
- If you want to add this guide to the repository, save it inside the project (for example under a docs folder), check it contains no password or full connection URL, add it by name (never git add .), and commit it.
- Before any push, confirm the branch and the status:

```powershell
git branch --show-current
git status --short
git push origin demo-shared-database/christan-mentor-review
```

- Never push to main or demo/mentor-review for this demo.

## 15. Using an AI coding agent (Codex or Claude Code) safely

- Agents running on your laptop can read the source and reach http://localhost:3000. Cloud agents cannot reach your localhost.
- Block them from reading .env\* files using the agent’s permission or sandbox settings, not only by instruction.
- Tell them the dev server writes to the real local database.
- Keep the ground rules in section 2 in force, including no reset, db push, DROP, TRUNCATE, or migration edits.
- Ask an agent to read the Playwright tests before running npm run test:e2e, since they may write to the database.
- Run git status --short afterward and check that only expected files changed.

## 16. Troubleshooting quick list

- Password appeared on screen: Clear-Host, then rotate it in the pgAdmin Properties dialog and rerun the .env.local scripts.
- P1000, P1001, P1003: see section 9.
- permission denied for schema public during migration: the database is not owned by capsight\_app. Run ALTER DATABASE capsight\_mentor\_review OWNER TO capsight\_app; as postgres.
- URL could not be parsed: an unencoded special character in the password. Use the hidden-prompt script, which encodes it for you.
- git check-ignore prints nothing: .env.local is not ignored. Stop and fix .gitignore before putting any password in it.
- Hyphen versus underscore: the database is capsight\_mentor\_review. A hyphenated name will cause P1003.

## 17. Status checklist

Verified during setup:

- PostgreSQL 18.6 installed and pgAdmin connects as postgres.
- capsight\_app can log in (shown by Prisma connecting as that role).
- capsight\_mentor\_review exists, owned by capsight\_app, UTF8.
- .env.local is ignored by Git and the working tree is clean.
- Prisma Client generated and typecheck passes.
- migrate status connected and found one pending migration, 20261001021931\_init.
- Migration applied: both tables, both enums with the right values, and 0 rows, as reported from pgAdmin.

Still to confirm:

- npx prisma migrate status after deploy reports Database schema is up to date!
- In the running app, a created Assessment appears as a row in pgAdmin and is still listed after restarting the server.
