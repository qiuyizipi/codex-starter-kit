# 来源、改动与许可证

本仓库是一个面向中文新手的筛选与分包集合，不是所有 Skill 的原创来源。
安装或再次发布前，请以本文件和对应上游仓库的最新许可证为准。
上游快照、已知本地改动与更新流程请看 [UPSTREAM_STATUS.md](UPSTREAM_STATUS.md)。

## 第三方 Skill

### Obra Superpowers（14 项）

- 上游：[obra/superpowers](https://github.com/obra/superpowers)
- 原作者：Jesse Vincent / Prime Radiant 社区贡献者
- 许可证：MIT License（[上游 LICENSE](https://github.com/obra/superpowers/blob/main/LICENSE)）
- 收录方式：保留为本仓库当前快照；上游持续更新，本仓库不会自动同步。

| 本仓库路径 | Skill |
|---|---|
| `advanced-extra-pack` | `using-superpowers`、`writing-skills` |
| `code-quality-pack` | `receiving-code-review`、`requesting-code-review`、`systematic-debugging`、`test-driven-development`、`verification-before-completion` |
| `git-collaboration-pack` | `dispatching-parallel-agents`、`finishing-a-development-branch`、`subagent-driven-development`、`using-git-worktrees` |
| `project-workflow-pack` | `brainstorming`、`executing-plans`、`writing-plans` |

为适合本集合的“按任务复杂度决定流程”原则，以下四项在本地做过内容调整：`using-superpowers`、`brainstorming`、`writing-plans`、`test-driven-development`。调整不改变其上游来源与 MIT 许可证；再次分发时应保留 MIT 许可与署名。

### Context Engineering（1 项）

- Skill：`context-engineering`
- 上游：[Addy Osmani — context-engineering](https://github.com/addyosmani/context-engineering)
- 原作者：Addy Osmani
- 许可证：MIT License（副本位于该 Skill 文件夹的 `LICENSE`）
- 本仓库改动：基于上游思路改写为更短的 Codex 适配版；强调简单任务直接执行、不强制建立计划。

### OpenAI Curated Skills（1 项）

- Skill：`define-goal`
- 上游：[openai/skills — define-goal](https://github.com/openai/skills/tree/main/skills/.curated/define-goal)
- 原作者：OpenAI
- 许可证：Apache License 2.0（副本位于该 Skill 文件夹的 `LICENSE.txt`）
- 收录方式：当前快照，未在本仓库中修改核心规则。

## 自研并单独发布的 Skill（2 项）

| Skill | 独立仓库 | 许可证 / 说明 |
|---|---|---|
| `brief-mode` | [codex-brief-mode](https://github.com/qiuyizipi/codex-brief-mode) | MIT，作者 `qiuyizipi` |
| `find-skills-safe` | [codex-find-skills-safe](https://github.com/qiuyizipi/codex-find-skills-safe) | MIT，作者 `qiuyizipi` |

### 本地工作流配置（不计入上述两项）

- `archive-project-memory`：2026-07-15 为“总结对话后归档到项目 `memory/` 与 Notion”建立的本地归档流程。它目前位于可选的 `personal-workflow-pack`，不是单独发布或维护的第三个自研 Skill，也没有在本轮新增或改动。

## 维护规则

1. 新增第三方 Skill 前，先记录上游链接、作者、许可证和本地改动情况。
2. 上游更新不自动进入本仓库；更新前需重新检查内容、许可证与适配性。
3. 许可证不清楚的 Skill 不加入公开集合，或在确认前明确标记为“待核实”。
4. 这份清单是导航和归因说明，不替代任何 Skill 文件夹内已附带的许可证。

## 第三方声明与许可证文本

本节覆盖本仓库当前实际分发的全部第三方 Skill 内容；复制、Fork 或再次发布本仓库时应保留本节以及各 Skill 文件夹内的许可证。

### Obra Superpowers（14 个 Skill）

- 上游：<https://github.com/obra/superpowers>
- 版权：Copyright (c) 2025 Jesse Vincent
- 许可证：MIT License
- 收录的 Skill：`using-superpowers`、`writing-skills`、`receiving-code-review`、`requesting-code-review`、`systematic-debugging`、`test-driven-development`、`verification-before-completion`、`dispatching-parallel-agents`、`finishing-a-development-branch`、`subagent-driven-development`、`using-git-worktrees`、`brainstorming`、`executing-plans`、`writing-plans`。

```text
MIT License

Copyright (c) 2025 Jesse Vincent

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

本仓库对其中 `using-superpowers`、`brainstorming`、`writing-plans`、`test-driven-development` 做过适配性修改；再次发布时仍需保留以上版权与许可证。

### 其他第三方内容

- `context-engineering`：Copyright (c) 2025 Addy Osmani，MIT License；完整副本位于 `plugins/core-pack/skills/context-engineering/LICENSE`。
- `define-goal`：来自 OpenAI Curated Skills，Apache License 2.0；完整副本位于 `plugins/core-pack/skills/define-goal/LICENSE.txt`。
