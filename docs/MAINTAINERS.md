# 维护者参考

普通使用者只需阅读仓库根目录的 `README.md`。本文件集中记录来源、许可证、上游状态与更新历史。

## 来源与许可证

本仓库是筛选与分包集合，不是全部 Skill 的原创来源。

| 来源 | 数量 | 许可证与本地状态 |
|---|---:|---|
| [obra/superpowers](https://github.com/obra/superpowers) | 14 | MIT；`using-superpowers`、`brainstorming`、`writing-plans`、`test-driven-development` 有本地适配。 |
| [Addy Osmani — context-engineering](https://github.com/addyosmani/context-engineering) | 1 | MIT；精简为 Codex 适配版。 |
| [OpenAI — define-goal](https://github.com/openai/skills/tree/main/skills/.curated/define-goal) | 1 | Apache License 2.0；未改核心规则。 |
| `brief-mode`、`find-skills-safe` | 2 | 作者 `qiuyizipi` 自研并单独发布，MIT。 |

`archive-project-memory` 是本项目的本地归档工作流，不计入第三方或单独发布的第三个自研 Skill。

### Superpowers 的 MIT 声明

Copyright (c) 2025 Jesse Vincent

```text
MIT License

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

复制、Fork 或再次发布时，保留本文件和各 Skill 文件夹内的许可证。许可证不清楚的第三方 Skill 不加入公开集合。

## 上游与本地适配

本仓库是经过筛选和适配的快照，不是上游镜像，也不会自动同步。特别是 Superpowers 内容不能称为官方原版。

| 来源 | 已知源版本 |
|---|---|
| Superpowers、Context Engineering、define-goal | 初始导入时未记录上游 tag 或 commit；不得假定等同于任何官方版本。 |

四项 Superpowers 适配都遵循“三层任务规模”：轻量任务直接处理；标准任务只用匹配的单项工作流；新功能、实验、多文件改动、架构、权限/数据风险或公开发布才组合使用设计、计划、测试、审查和验证。

上游更新时：比较差异 → 选择性合入 → 保留本地适配 → 验证结构、JSON、链接与实际使用 → 在本文件记录上游 tag/commit、日期和处理结果。禁止用上游内容直接覆盖本仓库。

## 更新记录

### 0.8.0 — 2026-07-17

- 将经过本地适配的 `using-superpowers` 移入 `core-pack`，让新手首次安装核心包时即可获得按任务规模选择工作流的能力。
- 插件页描述统一改为中文；`advanced-extra-pack` 仅保留自定义 Skill 的创建与维护能力。

### 0.7.0 — 2026-07-17

- 面向新手的入口压缩为根目录 `README.md`，AI 规则保留在 `AGENTS.md`；所有维护信息集中到本文件。

### 0.6.0 — 2026-07-17

- 合并新手入口、安装说明、AI 配置、第三方声明，减少根目录文档。

### 0.5.0–0.5.2 — 2026-07-17

- 增加按需安装规则、个人工作流包、第三方许可证与上游维护策略。

### 0.4.0 — 2026-07-16

- 将 19 项 Skill 划分为 6 个独立安装包。

### 0.1.0–0.3.0 — 2026-07-16

- 首次发布，并从两类包逐步细分为适合新手按需选择的结构。
