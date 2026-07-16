# Find Skills Safely

Find one suitable Skill, plugin, or MCP integration, inspect its risks, and keep installation as a separate decision.

## What it does

- Clarifies the task, target platform, and non-negotiable constraints.
- Prioritizes official and clearly owned sources.
- Reviews instructions, scripts, configuration, permissions, data access, dependencies, installation method, and license.
- Recommends one candidate with evidence and risks, then waits for the user.

## What it never does

It does not execute external commands, run package managers, execute candidate code, install, update, remove, change settings, or bypass confirmation.

## Package structure

```text
find-skills-safe/
├── SKILL.md
├── README.md
├── 中文说明.md
├── LICENSE
└── agents/openai.yaml
```

## Example prompts

1. “Find one safe MCP for reading our local documentation without sending files to a third party.”
2. “Is there a Skill for reviewing pull requests? Recommend only one after checking its permissions and license.”
3. “Help me safely find a plugin for Figma handoff that works in Codex.”
