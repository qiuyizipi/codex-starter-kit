# Agent Context Migration Kit

将一个 Agent 中已有的项目记忆、历史对话和项目规则迁移到另一个 Agent。

本项目记录并模板化了一条经过实际验证的 **WorkBuddy → Codex** 迁移路线。它解决的是“已有项目上下文迁移”，不是第二阶段的“多个 Agent 实时共享记忆”。

## 解决什么问题

只复制代码，新的 Agent 仍然不知道：

- 项目为什么这样设计；
- 之前做过哪些实验和判断；
- 哪些结论已确认、哪些仍待验证；
- 原来的多个对话分别讨论了什么。

本方案保留项目代码路径、项目记忆、全局偏好、原始对话档案，并为目标 Agent 建立可检索的入口。

## 迁移后的结构

```text
project-root/
├── AGENTS.md                 # 目标 Agent 的项目规则
├── MEMORY.md                 # 记忆索引
├── memory/                   # 结构化项目记忆
├── workbuddy-history/        # 原始历史对话，只读归档
└── context/                  # 来源、映射和恢复说明
```

项目代码和实验结果仍保留在原项目根目录；迁移资料作为上下文层，不复制一份代码。

## 快速开始

1. 备份来源数据，不直接修改原始数据库或 JSONL。
2. 盘点项目、项目记忆、全局记忆和顶层对话。
3. 根据数据库中的用户自定义标题建立 `manifest.json`。
4. 将每个顶层对话单独归档，不把多个对话压成一个总结。
5. 在目标项目根目录创建 `AGENTS.md`、`MEMORY.md` 和 `context/`。
6. 使用 `docs/verification.md` 的清单核对数量、标题、路径和哈希。

## 重要限制

历史 JSONL 可以被目标 Agent 读取，但通常不能一比一恢复成目标 Agent UI 中的逐轮聊天记录。可恢复的是原始档案、结构化记忆、对话映射和上下文恢复入口。

## 安全边界

不要把真实对话、API Key、数据库、私有代码、本机绝对路径或用户画像提交到公开仓库。`examples/` 只使用合成数据。

## 文档

- [完整迁移流程](docs/workbuddy-to-codex.md)
- [架构说明](docs/architecture.md)
- [验证清单](docs/verification.md)
- [发布与隐私说明](docs/release-checklist.md)
- [示例迁移清单](examples/manifest.example.json)

## 项目范围

第一阶段：已有 Agent → Codex 的项目上下文迁移。

第二阶段：多个 Agent 共用同一套项目记忆，暂不包含在本项目中。


