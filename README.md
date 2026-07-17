# Codex Starter Kit

面向中文新手的 Codex Skill 配置包。目标不是一次装完，而是让你按需要安装最少、最有用的组合。

## 三步开始

1. 在 Codex 的“插件”页面添加本仓库：`https://github.com/qiuyizipi/codex-starter-kit`。
2. 新建一个 Codex 任务，发送：

   > 请阅读这个仓库的 `AGENTS.md` 和 `README.md`。根据我的使用需求，推荐最少必要的安装包，说明安装与不安装哪些、原因和影响；不要直接安装，等我确认后再操作。

3. 确认后安装需要的包；随后新建任务或重启 Codex，确认 Skill 已被发现。

第一次使用、只想让对话更清楚？通常从 `core-pack` 开始就够了。

## 选择安装包

| 你的情况 | 建议 |
|---|---|
| 刚开始用 Codex，只想让回答清楚、任务不跑偏 | `core-pack` |
| 写课程作业、小工具或程序 | 再加 `code-quality-pack` |
| 做多文件项目、实验方案或新功能 | 再加 `project-workflow-pack` |
| 已会用 Git，要处理分支或协作 | 按需加 `git-collaboration-pack` |
| 想维护自己的 Skill | 按需加 `advanced-extra-pack` |
| 明确想整理项目记忆或同步 Notion | 才考虑 `personal-workflow-pack` |

## 19 个 Skill 都是什么？

| 安装包 | Skill | 一句话用途 |
|---|---|---|
| `core-pack` | `brief-mode` | 默认简洁回答，需要时保留必要细节。 |
|  | `context-engineering` | 只加载真正相关的规则、文件与证据。 |
|  | `define-goal` | 把模糊想法整理为可衡量的目标。 |
|  | `find-skills-safe` | 安装前审查一个 Skill、插件或 MCP 的风险。 |
|  | `using-superpowers` | 按任务复杂度选择必要流程，避免小事过度规划。 |
| `code-quality-pack` | `systematic-debugging` | 遇到错误时先系统定位原因。 |
|  | `test-driven-development` | 对关键行为和可复现 Bug 使用测试优先。 |
|  | `verification-before-completion` | 宣称完成前先运行验证。 |
|  | `receiving-code-review` | 严谨处理收到的代码审查意见。 |
|  | `requesting-code-review` | 合并前组织代码审查。 |
| `project-workflow-pack` | `brainstorming` | 有真实方案取舍或风险时先澄清设计。 |
|  | `writing-plans` | 为多步骤、多文件或需交接的工作写计划。 |
|  | `executing-plans` | 按已写好的计划执行并设置检查点。 |
| `git-collaboration-pack` | `using-git-worktrees` | 需要隔离开发时使用 Git worktree。 |
|  | `finishing-a-development-branch` | 完成开发后选择合并、PR 或清理方式。 |
|  | `dispatching-parallel-agents` | 分派互不依赖的并行任务。 |
|  | `subagent-driven-development` | 用子代理协作执行独立的实现任务。 |
| `advanced-extra-pack` | `writing-skills` | 创建、修改与验证 Codex Skill。 |
| `personal-workflow-pack` | `archive-project-memory` | 将已确认的结论归档到项目记忆，按需同步 Notion。 |

## 可选功能：显示 Skill 使用情况

首次配置时，AI 会主动问你：要不要在回复末尾显示本轮实际使用的 Skill 及中文用途？例如：

```text
本轮实际使用的 Skill：brief-mode（简洁回答）
```

同意后，AI 只修改你确认过的本地非 `.system` Skill；不会改仓库内容、不会改触发条件，也不会改 Codex 自带 Skill。它是自报提示，不是 Codex 内部触发日志。

## 手动安装

不使用插件页面时，将所选包中 `plugins/<包名>/skills/` 下的整个 Skill 文件夹复制到：

```text
C:\Users\你的用户名\.codex\skills\
```

若已有同名 Skill，先备份或比较内容，不要直接覆盖自己的修改。

## 维护信息

来源、许可证、上游更新和历史记录都在 [docs/MAINTAINERS.md](docs/MAINTAINERS.md)。普通使用不需要阅读它。

`brief-mode` 与 `find-skills-safe` 是作者单独发布的自研 Skill；本仓库负责把它们与精选公共 Skill 一起提供给新手按需安装。
