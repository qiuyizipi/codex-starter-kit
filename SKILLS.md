# Skill 完整清单

本仓库包含 19 个额外安装 Skill，分为六个可独立安装的包；不包含 Codex 自带的 `.system` 内容。

## core-pack：新手基础包（4 项）

建议所有新手先安装。它们改善回答清晰度、目标理解、上下文选择、项目记忆和安装前的安全判断。

| Skill | 用途 |
|---|---|
| `brief-mode` | 默认简洁回答；需要时保留必要细节。 |
| `context-engineering` | 在新任务或上下文跑偏时，只加载真正相关的规则、文件与证据。 |
| `define-goal` | 把模糊想法整理为可衡量的目标。 |
| `find-skills-safe` | 安装前审查一个 Skill、插件或 MCP 的风险。 |

## personal-workflow-pack：个人工作流包（1 项）

仅适合明确需要将对话归档到项目 `memory/` 或 Notion 的人；新手不需要默认安装。

| Skill | 用途 |
|---|---|
| `archive-project-memory` | 将已确认的对话结论归档到项目记忆，并按内容决定是否同步 Notion。 |

## code-quality-pack：代码质量包（5 项）

适合已经开始写代码、希望减少错误和回归的人。

| Skill | 用途 |
|---|---|
| `systematic-debugging` | 遇到错误或异常行为时先系统定位原因。 |
| `test-driven-development` | 对关键行为和可复现 Bug 使用测试优先。 |
| `verification-before-completion` | 宣称完成、修复或通过前先运行验证。 |
| `receiving-code-review` | 严谨处理收到的代码审查意见。 |
| `requesting-code-review` | 在合并前组织代码审查。 |

## project-workflow-pack：项目流程包（3 项）

适合新功能、实验方案或多文件任务；简单问题不会强制使用。

| Skill | 用途 |
|---|---|
| `brainstorming` | 在有多个方案、风险或不明确目标时先澄清设计。 |
| `writing-plans` | 为多步骤、跨文件或需交接的工作写合适粒度的计划。 |
| `executing-plans` | 按已写好的实施计划执行并设置检查点。 |

## git-collaboration-pack：Git 与协作包（4 项）

适合多分支开发、GitHub 协作或可以拆分的大型实现任务。

| Skill | 用途 |
|---|---|
| `using-git-worktrees` | 需要隔离开发时使用 Git worktree。 |
| `finishing-a-development-branch` | 在完成开发后选择合并、PR 或清理方式。 |
| `dispatching-parallel-agents` | 将互不依赖的任务分配给并行代理。 |
| `subagent-driven-development` | 用子代理协作执行相互独立的实现任务。 |

## advanced-extra-pack：进阶扩展包（2 项）

适合想自行维护 Skill 或深入调整 Codex 工作流的人，新手无需安装。

| Skill | 用途 |
|---|---|
| `using-superpowers` | 按任务复杂度选择真正相关的工作流 Skill。 |
| `writing-skills` | 创建、修改与验证 Codex Skill。 |

## 未来扩展

以后会增加 `research-pack` 等领域包。新包必须先经过实际使用、来源与许可证检查，再加入本仓库。
