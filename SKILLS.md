# Skill 完整清单

本清单对应 `plugins/starter-pack/skills/` 中实际包含的 21 个额外安装 Skill；不包含 Codex 自带的 `.system` 内容。

## 自研与个人工作流

| Skill | 用途 |
|---|---|
| `archive-project-memory` | 将已确认的对话结论归档到项目记忆。 |
| `brief-mode` | 默认简洁回答；需要时保留必要细节。 |
| `define-goal` | 把模糊想法整理为可衡量的目标。 |
| `find-skills-safe` | 安装前审查一个 Skill、插件或 MCP 的风险。 |

## 开发流程与代码质量

| Skill | 用途 |
|---|---|
| `brainstorming` | 在实现前澄清需求与设计。 |
| `dispatching-parallel-agents` | 将互不依赖的任务分配给并行代理。 |
| `executing-plans` | 按已写好的实施计划执行并设置检查点。 |
| `finishing-a-development-branch` | 在完成开发后选择合并、PR 或清理方式。 |
| `receiving-code-review` | 严谨处理收到的代码审查意见。 |
| `requesting-code-review` | 在合并前请求并组织代码审查。 |
| `subagent-driven-development` | 用子代理协作执行相互独立的实现任务。 |
| `systematic-debugging` | 遇到错误或异常行为时先系统定位原因。 |
| `test-driven-development` | 实现功能或修复前先写测试。 |
| `using-git-worktrees` | 需要隔离开发时使用 Git worktree。 |
| `using-superpowers` | 在任务开始时识别和正确使用 Skill。 |
| `verification-before-completion` | 宣称完成、修复或通过前先运行验证。 |
| `writing-plans` | 多步骤任务开始前写清实施计划。 |
| `writing-skills` | 创建、修改与验证 Codex Skill。 |

## 工具与集成

| Skill | 用途 |
|---|---|
| `notion-knowledge-capture` | 把对话和决策整理为 Notion 知识内容。 |
| `playwright-interactive` | 通过持久浏览器会话进行界面交互与调试。 |
| `screenshot` | 用户明确要求时截取桌面、窗口或屏幕区域。 |

## 使用前请注意

这些 Skill 只是在特定请求下向 Codex 提供工作规则；它们不会仅因被复制到本地就自动运行。但部分 Skill 的适用任务可能涉及浏览器、Git、Notion、文件编辑或外部服务。执行前仍应查看请求范围，并按 Codex 的确认提示决定是否授权。

每个目录都保留其原有的 `SKILL.md`、说明文件和已有许可证文件。请在再发布或修改公共 Skill 前查看对应来源与许可证。
