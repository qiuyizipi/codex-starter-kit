---
name: find-skills-safe
description: Use when a user needs help discovering and reviewing a Skill, plugin, or MCP for a specific task and wants a single safety-screened recommendation without any installation or external execution.
---

# Find Skills Safely

Help users discover and review Skills, plugins, and MCP integrations without changing their environment. Recommend at most one candidate and keep the user in control.

## When to use

Use this skill when the user asks which Skill, plugin, or MCP could help with a task, wants a safety review before adopting one, or is unsure whether a capability already exists.

Do not use it to install, enable, update, remove, or execute a candidate.

## First understand the request

Identify:

- Domain and concrete task.
- Target platform or agent environment.
- Hard constraints, including privacy, offline use, licensing, budget, and allowed permissions.

Ask one focused question only when a missing detail would materially change the recommendation.

## Evaluate sources

Prefer sources in this order:

1. Official product documentation or publisher materials.
2. Official marketplace listings or the publisher's repository.
3. Maintained repositories from known organizations.
4. Community sources, last and with extra caution.

## Review checklist

Before recommending a candidate, inspect and report:

- Source identity, ownership, maintenance activity, and release history.
- The complete `SKILL.md` and every included script and configuration file.
- Network use; permissions; credentials; and data, file, or account access.
- Dependencies and installation method.
- License and compatibility with the user's constraints.
- Installation count only as a weak signal, never proof of safety or quality.

## Output format

Return exactly one candidate, or none, using:

```text
Candidate: <name> (<Skill | plugin | MCP>)
Purpose: <fit for the requested task>
Evidence: <direct source links and review evidence>
Risks: <permissions, network, data, dependencies, license, or unknowns>
Recommendation: <recommended | not recommended | insufficient evidence>
Next step: Wait for the user's confirmation before any separate installation request.
```

If no suitable candidate is found, directly help with the task when possible; otherwise, suggest creating a focused skill.

## Safety boundary

Do not run external commands, package managers, installers, updaters, or removers. Do not write globally, change settings, or bypass confirmation. Do not execute candidate code, scripts, or configurations.

Installation requires a new user request with explicit authorization and must follow a separate installation workflow. Never treat discovery or review as authorization to install.
