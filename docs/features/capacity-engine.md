# Capacity Engine

## Status
V1 architectural contract — Stage 12 approved. Real Knowles formulas are **not** implemented or defined until authoritative validation.

## Purpose
The Capacity Engine is CapSight's computational foundation. It transforms a validated Planning State snapshot plus validated reference context and Calculation Profile into resource requirements and structured calculation evidence using Knowles-approved formulas and business rules.

## Determinism Contract
> **Same validated Planning State snapshot + same validated reference context + same Calculation Profile = same result and calculation evidence.**

The engine must not depend on hidden current database values, browser/UI state, current time, random values, network responses, or global mutable configuration. If effective date or other environmental context matters to a validated rule, it must be supplied explicitly as part of the calculation context.

## Architectural Boundary
The engine is **plain TypeScript domain logic** and must not depend on:
- React;
- Next.js components/routing/rendering;
- browser or DOM APIs;
- Server Action implementation details;
- route handlers/HTTP;
- direct database/ORM access;
- infrastructure/network clients;
- chart libraries;
- UI form state.

The engine receives all required validated context as input. It does not go looking for its own data.

## Application Responsibility
The application layer:
1. loads the required assessment/planning/reference/profile state;
2. performs authoritative domain readiness validation;
3. builds the calculation request/context;
4. calls the Capacity Engine;
5. persists a successful Calculation Run and its evidence;
6. handles expected domain failure vs unexpected technical failure appropriately.

The engine itself does not create database IDs, timestamps, or persistent records.

## Rule Representation
Do **not** build a universal formula interpreter, rule DSL, dependency-graph engine, or dynamic rules platform before Knowles' validated model requires one.

V1 direction:
- explicit TypeScript domain calculations;
- structured validated rule metadata where useful;
- stable semantic rule identities where useful for traceability/comparison;
- execution behavior and human-readable explanation metadata derived from the same authoritative calculation definition where feasible.

Exact TypeScript representation remains OPEN until the real formulas and dependencies are known.

## Calculation Evidence
Evidence is produced during execution, not reverse-engineered afterward.

It may include, where validated and meaningful:
- values used;
- units;
- validated defaults applied;
- relevant intermediate outputs;
- applied rule identity/version context;
- validated rounding behavior;
- final resource requirement/result.

Capture **domain-meaningful** steps, not low-level program/debug noise.

Decision Trace presents this actual evidence. Change Explanation compares evidence from two runs.

## Success / Failure Boundary
Expected domain failures should become structured calculation outcomes rather than raw crashes—for example, required validated context unavailable or an incompatible calculation state.

Unexpected software defects remain technical errors and should be logged/handled separately.

A failed calculation never becomes a successful Calculation Run.

Exact `Result`/error type representation remains OPEN.

## Units and Numeric Precision
- Important domain quantities retain explicit unit semantics.
- Exact unit type strategy remains OPEN.
- Numeric precision strategy remains OPEN until Knowles formulas, decimal behavior, and rounding rules are known.
- Do not add decimal/math dependencies prematurely, but do not assume native floating-point is automatically acceptable.

## Dependencies and Module Boundaries
Execution order, dependencies, and module boundaries must follow the real validated production model.

Do not prematurely force a pipeline, dependency graph, parallel model, or arbitrary folder split. Also avoid collapsing the entire engine into a single giant calculator file once the domain becomes clear.

## Testing Strategy
The sanitized Knowles golden example becomes the primary end-to-end calculation acceptance test once obtained.

Then add focused tests for validated behavior:
- individual formulas/rules;
- rounding boundaries;
- zero/min/max and other validated edge conditions;
- rule dependencies and exceptions;
- exact-capacity / over-capacity boundaries where applicable;
- Decision Trace evidence correctness;
- Change Explanation comparison behavior;
- historical Calculation Profile/reference reproducibility;
- Reality Loop variance behavior once defined.

Every confirmed calculation bug should receive a regression test.

Testing depth follows calculation risk and domain correctness, not a vanity coverage target.

The exact test framework remains OPEN.

## Test Data / Confidentiality
Do not commit sensitive Knowles production data, costs, internal identifiers, or operational records to a public repository without permission. Prefer Knowles-approved sanitized test cases.

## AI Implementation Guardrail
Before implementing real formulas, Codex/Copilot must read the current relevant contracts and validated source material. At minimum:
- `CAPSIGHT_CONTEXT.md`;
- this file;
- `calculation-validation-safety.md`;
- `../CALCULATION_REFERENCE.md`;
- the validated Knowles workbook/example/source relevant to the change.

If the calculation reference marks a formula, definition, unit, rounding rule, dependency, exception, or default as OPEN/UNKNOWN, AI must not invent it.

## Team Understanding
AI may accelerate implementation, but Team KnowLarps must understand the calculation logic. Christan, as Calculation & Simulation Developer, should be able to explain what implemented formulas do, the meaning of their variables, their authoritative source, and why the expected outputs are correct.

## Still OPEN
- real formulas and business rules;
- exact engine input/output types;
- rule metadata/type representation;
- module boundaries and execution order;
- unit type strategy;
- numeric precision strategy/library;
- testing framework;
- exact structured success/failure representation;
- partial-result semantics;
- performance requirements.

## Do Not Implement Yet
Do not reverse-engineer or hard-code real production formulas from screenshots, example constants, general manufacturing knowledge, or AI inference.
