# Identity, Permissions & Multi-Engineer Concurrency

## Status
V1 LOCKED architectural boundaries; exact authentication, roles, permissions, and audit requirements remain OPEN.

## Purpose
Allow multiple Industrial Engineers to use one centralized CapSight source without silent overwrites or guessed enterprise workflows.

## Identity
CapSight is identity-ready so important domain records/actions can carry actor identity where useful. No Knowles-specific role names are invented yet.

## Authentication vs Authorization
- Authentication: who is the user?
- Authorization: what action may the user perform?

Prefer capability/policy checks over hard-coded guessed business roles.

## Concurrency Direction
Use optimistic concurrency for mutable shared records in V1.

A stale write must be detected rather than silently overwriting a newer revision. Exact merge/review UX remains OPEN.

## Calculation Integrity
Calculation Runs are immutable snapshots. Changes to inputs/reference/rules create a new calculation context rather than mutating historical results.

## Historical Concepts
Keep separate:
- Decision Trace — how a result was calculated
- Audit History — meaningful actions on a record over time
- Version / Revision — states of a mutable record

## Audit Direction
If required, audit meaningful domain events rather than UI interaction noise.

## Do Not Assume
- SSO provider
- Active Directory / Microsoft / Google auth
- admin/senior/junior IE roles
- approval chains
- Google-Docs-style co-editing
- live cursors/presence
- WebSockets
- notifications
- autosave
