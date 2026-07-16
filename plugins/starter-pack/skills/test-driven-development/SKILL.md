---
name: test-driven-development
description: Use when implementing behavior with meaningful regression risk, fixing a reproducible bug, or changing tested code in a project with an available automated test harness.
---

# Test-Driven Development, Proportionally

For meaningful behavior changes, write a focused failing test first, confirm it fails for the expected reason, implement the smallest change, then run the relevant tests.

## Use full TDD for

- New business logic, APIs, validation, data transformations, or reusable functions.
- A reproducible bug where a regression test can capture the failure.
- Refactoring behavior covered by an existing test suite.

## Use proportionate verification for

- Documentation, formatting, comments, generated artifacts, or configuration-only changes.
- Tiny throwaway experiments where the user accepts the trade-off.
- Projects without a practical automated test harness: add a targeted regression test when feasible; otherwise state and perform the smallest meaningful manual or command-based check.

## Rules

- Test behavior, not implementation details.
- Keep each test focused on one outcome.
- Do not claim a fix without evidence that the relevant check passed.
- Do not demand a large test suite or delete working exploratory code merely to simulate TDD.

TDD is a quality tool, not a reason to make small work slow.
