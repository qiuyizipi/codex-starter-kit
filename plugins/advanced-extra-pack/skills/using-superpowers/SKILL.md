---
name: using-superpowers
description: Use when starting a substantial development, experiment, or configuration task and deciding which installed workflow skills are genuinely relevant.
---

# Using Skills Proportionally

Skills improve quality only when they fit the task. First classify the work; then use the smallest relevant set of skills.

## Task levels

| Level | Examples | Default approach |
|---|---|---|
| Light | Question, status check, translation, small documentation correction, one obvious reversible edit | Respond or act directly. Do not require a plan, design document, or subagent. |
| Standard | Small script, contained bug fix, single-area code change | Use only the matching skill, such as debugging, focused testing, or verification. |
| Substantial | New feature, experiment design, multi-file behavior change, architecture, account/data/permission risk, or a task that will be published | Select the relevant design, planning, testing, review, and verification skills. |

## Always respect these boundaries

- Follow the nearest applicable `AGENTS.md` and the user's direct instructions.
- Use a skill when the user explicitly requests it.
- Use `systematic-debugging` for an actual bug or unexpected behavior.
- Use `verification-before-completion` before claiming a change is complete, fixed, or passing.
- Do not launch parallel agents, create worktrees, or write planning documents unless the task warrants them.

## Selection rules

- Choose one relevant workflow before stacking several.
- `brainstorming` is for meaningful design decisions, not routine edits.
- `writing-plans` is for work that benefits from a durable multi-step handoff.
- `test-driven-development` is for behavior with meaningful regression risk and an available test harness.
- If no skill clearly improves a light task, proceed directly and keep the answer concise.

The goal is reliable work without turning every conversation into a project ceremony.
