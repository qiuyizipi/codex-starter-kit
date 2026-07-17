# Codex Starter Kit

这是 [qiuyizipi](https://github.com/qiuyizipi) 整理的 Codex Skill 配置包，面向刚注册 Codex、希望快速获得一套成熟工作流的新手。

它收录的是维护者筛选后的 19 个顶层 Skill；**不包含**每个 Codex 本来就自带的 `.system` Skill，也不包含只适合 Notion、浏览器自动化或截图等特定场景的工具。你可以按需求选择安装包，不需要逐个寻找；不确定时让 AI 先按本仓库的规则推荐最少必要的组合。

## 这个仓库和单独仓库的关系

- 单独仓库：每个自研 Skill 独立发布、独立说明和维护。例如 [codex-brief-mode](https://github.com/qiuyizipi/codex-brief-mode) 与 [codex-find-skills-safe](https://github.com/qiuyizipi/codex-find-skills-safe)。
- 本仓库：把自研 Skill 与已安装的公共 Skill 一起整理成完整快照，方便一站式安装。

因此，想了解或只安装一项自研 Skill 时请看单独仓库；想复刻整套配置时使用这里。

## 先选哪个包？

| 包 | 适合谁 | 包含内容 |
|---|---|---|
| `core-pack` | 刚开始使用 Codex 的同学 | 4 项轻量通用能力：简洁回答、上下文管理、安全找 Skill、目标定义。建议先装它。 |
| `code-quality-pack` | 已开始写代码、希望少出错的人 | 调试、测试、验证和代码审查。 |
| `project-workflow-pack` | 要做新功能、实验方案或多文件项目的人 | 设计、计划与按计划执行。 |
| `git-collaboration-pack` | 会用 Git、多分支或协作开发的人 | worktree、分支收尾、并行与子代理协作。 |
| `advanced-extra-pack` | 想自己维护 Skill、深入配置 Codex 的人 | 工作流选择和 Skill 编写。 |
| `personal-workflow-pack` | 明确要管理项目记忆或同步 Notion 的人 | 对话归档与个人知识管理；不默认推荐给新手。 |

以后会增加 `research-pack` 等按领域划分的包；只会在其中收录经过实际筛选和说明的 Skill。

## 包含什么？

当前合集包含 19 项 Skill，分为五类需求：

- **新手通用能力**：简洁回答、目标定义、项目记忆、上下文管理与安全发现；
- **代码质量**：调试、测试、验证与代码审查；
- **项目流程**：需求设计、计划与执行；
- **Git 与协作**：worktree、分支收尾与并行协作；
- **进阶扩展**：维护 Skill 与调节工作流。

完整名称、用途与注意事项请看 [SKILLS.md](SKILLS.md)。
每个 Skill 的上游来源、许可证和本仓库改动请看 [SOURCES.md](SOURCES.md)。
第三方再次分发所需的署名与许可证请看 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
第三方 Skill 与上游版本的关系、四项 Superpowers 适配和未来更新规则请看 [UPSTREAM_STATUS.md](UPSTREAM_STATUS.md)。
让 AI 根据你的需求选择而不是全装，请看 [AI-SETUP.md](AI-SETUP.md)。

## 安装方法

### 方法一：从 Codex 插件页面安装（推荐）

1. 在 Codex 中打开“插件”。
2. 添加本仓库作为插件市场：`https://github.com/qiuyizipi/codex-starter-kit`。
3. 新手先安装 `core-pack`；再按自己的需求添加其他包。也可以让 AI 先按 [AI-SETUP.md](AI-SETUP.md) 为你做选择。
4. 新建一个 Codex 任务或重启 Codex，让新安装的 Skill 被重新发现。

不同版本的 Codex 菜单或命令可能略有不同，请以应用内插件页面为准。

### 方法二：Windows 手动复制

如果你不使用插件市场，可以将本仓库中的：

```text
plugins/<你选择的包>/skills/
```

里面的**所有子文件夹**复制到：

```text
C:\Users\你的用户名\.codex\skills\
```

复制后应类似：

```text
C:\Users\你的用户名\.codex\skills\brief-mode\SKILL.md
C:\Users\你的用户名\.codex\skills\find-skills-safe\SKILL.md
```

如果目标位置已经有同名 Skill，请先备份；不要直接覆盖你自己修改过的版本。完成后新建任务或重启 Codex。

## 目录结构与文件作用

```text
codex-starter-kit/
├─ README.md                         项目首页与安装教程
├─ SKILLS.md                         19 项 Skill 的完整用途清单
├─ INSTALL.md                        快速安装说明
├─ CHANGELOG.md                      更新记录
├─ .codex-plugin/
│  └─ marketplace.json               告诉 Codex 这个仓库提供哪些插件
└─ plugins/
   ├─ core-pack/                     新手默认安装的 4 项通用 Skill
   ├─ code-quality-pack/             调试、测试、验证与代码审查
   ├─ project-workflow-pack/          设计、计划与项目执行
   ├─ git-collaboration-pack/         Git、多分支与协作
   ├─ advanced-extra-pack/            进阶维护与工作流配置
   └─ personal-workflow-pack/         可选的项目记忆与 Notion 归档
```

每个 Skill 文件夹通常包含：

| 文件 | 作用 |
|---|---|
| `SKILL.md` | Codex 实际读取的核心规则；它决定行为。 |
| `README.md` 或说明文件 | 给人阅读的介绍、使用方式或参考资料。 |
| `LICENSE` / `LICENSE.txt` | 对应项目的开源许可证；有些上游 Skill 的许可证位于其原始仓库根目录。 |
| `agents/openai.yaml` | Codex 界面可能使用的显示信息。 |

## 安全与来源说明

安装 Skill 本身不等于它会立即运行；Skill 只会在相关请求触发时向 Codex提供规则。不过，有些 Skill 的适用任务可能涉及文件编辑、Git、浏览器、Notion 或网络服务。执行具体操作前，请阅读 Codex 的确认提示，并只在理解权限范围后授权。

本仓库保留每个 Skill 当前快照及其中已有的许可证文件。公共 Skill 的原始作者、来源和许可证应以其上游项目为准；修改或再次发布前请先核对对应许可证。

## 常见问题

### 为什么不包含 `.system`？

它们是 Codex 自带内容。新用户本来就有，重复打包没有意义，也容易和产品版本不一致。

### 安装后当前任务没有变化？

当前任务可能还在使用旧的 Skill 列表。请新建任务或重启 Codex。

### 可以只安装其中一个吗？

可以。手动复制时只复制目标 Skill 文件夹即可；自研 Skill 也可从各自的单独仓库安装。

### 怎样更新？

插件市场方式请在 Codex 的插件页面更新已安装的包；手动方式则复制新版本前先备份自己的改动。具体变更见 [CHANGELOG.md](CHANGELOG.md)。

## 反馈

欢迎通过本仓库的 [Issues](https://github.com/qiuyizipi/codex-starter-kit/issues) 报告问题、提出建议，或推荐值得加入的 Skill。
