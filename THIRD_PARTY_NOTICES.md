# 第三方声明与许可证

<!-- THIRD_PARTY_SCOPE: superpowers-14 + context-engineering-1 + define-goal-1 -->

本文件覆盖本仓库当前实际分发的全部第三方 Skill 内容。它与 [SOURCES.md](SOURCES.md) 配合使用：`SOURCES.md` 说明来源和本地改动，本文件保留再次分发时需要注意的许可证与署名。

## 1. Obra Superpowers（14 个 Skill）

- 上游：<https://github.com/obra/superpowers>
- 版权：Copyright (c) 2025 Jesse Vincent
- 许可证：MIT License
- 收录的 Skill：`using-superpowers`、`writing-skills`、`receiving-code-review`、`requesting-code-review`、`systematic-debugging`、`test-driven-development`、`verification-before-completion`、`dispatching-parallel-agents`、`finishing-a-development-branch`、`subagent-driven-development`、`using-git-worktrees`、`brainstorming`、`executing-plans`、`writing-plans`。

以下是上游 MIT 许可证文本：

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

## 2. Addy Osmani Context Engineering（1 个 Skill）

- Skill：`context-engineering`
- 上游：<https://github.com/addyosmani/context-engineering>
- 版权：Copyright (c) 2025 Addy Osmani
- 许可证：MIT License；完整副本位于 `plugins/core-pack/skills/context-engineering/LICENSE`。
- 本仓库改动：根据 Codex 使用场景精简并改写工作流，强调简单任务不强制规划。

## 3. OpenAI Curated Skills（1 个 Skill）

- Skill：`define-goal`
- 上游：<https://github.com/openai/skills/tree/main/skills/.curated/define-goal>
- 许可证：Apache License 2.0；完整副本位于 `plugins/core-pack/skills/define-goal/LICENSE.txt`。
- 本仓库未修改该 Skill 的核心规则。

## 4. 不属于第三方内容的项目

- `brief-mode` 与 `find-skills-safe` 是本项目作者单独发布的自研 Skill，各自文件夹内已附 MIT 许可证。
- `archive-project-memory` 是本项目的本地工作流配置，不属于第三方分发内容。

## 再次发布与更新规则

1. 复制、Fork 或重新发布本仓库时，保留本文件、`SOURCES.md` 以及各 Skill 文件夹内的许可证。
2. 更新第三方 Skill 前，重新检查其上游许可证、版权声明与本地改动；上游更新不会自动继承到本仓库。
3. 未记录来源或许可证不清楚的第三方 Skill，不加入公开集合。
