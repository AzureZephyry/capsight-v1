# Reference / Master Data

## Status
V1 LOCKED concept; exact field map, ownership, and maintenance mechanism remain OPEN.

## Purpose
Provide one shared operational source used across Capacity Assessments without recreating per-assessment copies or losing historical calculation integrity.

## Core Distinction
Reference/master data is centrally maintained operational truth. Assessment/scenario data describes a specific planning situation. Calculated outputs are produced by the Capacity Engine.

## Locked Principles
- Distinguish shared reference/master data from assessment inputs, scenario-editable inputs, and calculated outputs.
- New/current calculations may use the current validated reference state.
- Historical Calculation Runs preserve the exact reference values/context they actually used.
- Updating current reference data must not silently rewrite historical results.
- Scenario Studio may change only fields Knowles approves as scenario variables.
- Decision Trace should preserve value provenance where useful.
- Meaningful reference-data changes should preserve historical revision/version context.

## Do Not Assume
- exact process-matrix schema
- exact UPH ownership
- exact equipment/fixture/cost ownership
- that all workbook fields are master data
- admin role names
- direct workbook import
- edit permissions
- an admin panel is required for V1

## Validation Needed
- Field classification
- Data owners
- Update process
- Effective/revision behavior
- Which values are scenario-editable
- Whether V1 should maintain, import, or only consume reference data
