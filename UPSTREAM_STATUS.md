# 上游状态与维护规则

本文件回答两个问题：本仓库里的第三方 Skill 是否等同于上游最新版，以及上游更新后应如何处理。

## 重要结论

- 本仓库是经过筛选和适配的**快照**，不是第三方插件的镜像，也不会自动同步上游。
- 特别是收录的 Superpowers 内容：来源于官方 [obra/superpowers](https://github.com/obra/superpowers)，但已经有本地规则调整，不能称为“官方原版 Superpowers”。
- 上游更新时，必须先比较差异，再选择性合入；禁止用上游文件直接覆盖本仓库。

## 当前来源状态

| 来源 | 收录数量 | 当前定位 | 本地改动 | 已知源版本 |
|---|---:|---|---|---|
| [obra/superpowers](https://github.com/obra/superpowers) | 14 | 筛选后的 Codex 工作流快照 | 4 项 | 初始导入时未记录上游 tag 或 commit；不得假定等同于任何官方版本。 |
| [addyosmani/context-engineering](https://github.com/addyosmani/context-engineering) | 1 | Codex 精简适配版 | 1 项 | 初始导入时未记录上游 tag 或 commit。 |
| [openai/skills — define-goal](https://github.com/openai/skills/tree/main/skills/.curated/define-goal) | 1 | 官方 Skill 快照 | 无核心规则改动 | 初始导入时未记录上游 commit。 |

## Superpowers 的本地适配

以下四项来源于 Superpowers，但为避免简单任务被重流程拖慢，已按本仓库的“三层任务规模”原则改写：

| Skill | 本地适配内容 |
|---|---|
| `using-superpowers` | 先判断轻量、标准或重大任务；只启用最少必要的工作流。 |
| `brainstorming` | 只在方案存在真实取舍、风险或不确定目标时使用；小改动不强制设计流程。 |
| `writing-plans` | 只为多步骤、多文件、高风险或需要交接的工作写计划。 |
| `test-driven-development` | 只在存在回归风险且有可用测试环境时要求测试优先。 |

三层任务规模如下：

1. **轻量**：提问、翻译、小文档修正、明显且可逆的小改动，直接处理。
2. **标准**：小脚本、局部 Bug 修复、单一区域代码改动，只使用匹配的单项工作流。
3. **重大**：新功能、实验设计、多文件行为改动、架构、权限或数据风险、公开发布，才组合使用设计、计划、测试、审查和验证。

## 未来更新流程

1. 查看上游发布说明或比较上游变更。
2. 判断变更是否修复问题、适合 Codex，且不会破坏本仓库的定位。
3. 只合入选中的内容；对上述四项重新保留“三层任务规模”原则。
4. 运行结构、JSON、文档链接和实际使用验证。
5. 在本文件记录：上游 tag/commit、检查日期、合入内容和本地冲突处理。

## 单独发布的判断标准

只有同时满足以下条件，才考虑把这套适配版单独发布为新仓库：

- 有明确定位，例如“面向 Codex 的按任务规模分级工作流”；
- 有独立 README，清楚说明它基于 Superpowers、不是官方版本；
- 有可复现的安装与验证方式；
- 愿意持续维护上游差异与 MIT 署名。

在此之前，它作为 `codex-starter-kit` 中的筛选适配内容更合适。
