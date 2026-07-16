---
name: writing-plans
description: Use when a substantial multi-file task, experiment, or handoff needs a durable implementation plan before work begins.
---

# Writing Plans Proportionally

Write a plan only when it makes execution safer, clearer, or easier to resume.

## Use a short inline plan when

- The task has three or more dependent steps.
- A change spans several files or includes a meaningful verification step.
- The user wants to understand the approach before work starts.

Use 2–5 concrete steps with the expected outcome. Do not create a separate plan file for routine work.

## Write a durable plan file when

- The work will span sessions, be handed to another agent, or contains several independently testable parts.
- The user explicitly requests a plan, specification, or implementation checklist.
- The task has material architectural, data, permission, cost, or rollback concerns.

Include goal, affected files, decisions, verification, and any user approval boundary. Keep it specific enough to execute, but do not invent placeholders or unnecessary ceremony.

## Do not plan by default

For a simple question, a one-file obvious change, a translation, or a small reversible configuration edit, act directly and verify proportionately.
