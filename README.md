# Codex Starter Kit

这是 [qiuyizipi](https://github.com/qiuyizipi) 整理的 Codex 完整 Skill 配置包，面向刚注册 Codex、希望快速获得一套成熟工作流的新手。

它收录的是维护者筛选后适合通用开发工作流的 18 个顶层 Skill；**不包含**每个 Codex 本来就自带的 `.system` Skill，也不包含只适合 Notion、浏览器自动化或截图等特定场景的工具。下载并安装这个合集后，新手可以直接获得一套成熟的额外 Skill 配置，而不需要逐个寻找。

## 这个仓库和单独仓库的关系

- 单独仓库：每个自研 Skill 独立发布、独立说明和维护。例如 [codex-brief-mode](https://github.com/qiuyizipi/codex-brief-mode) 与 [codex-find-skills-safe](https://github.com/qiuyizipi/codex-find-skills-safe)。
- 本仓库：把自研 Skill 与已安装的公共 Skill 一起整理成完整快照，方便一站式安装。

因此，想了解或只安装一项自研 Skill 时请看单独仓库；想复刻整套配置时使用这里。

## 包含什么？

当前合集包含 18 项 Skill，覆盖三类需求：

- **回答与知识管理**：简洁回答、目标定义、项目记忆归档；
- **安全发现**：安装前审查 Skill、插件和 MCP；
- **开发工作流**：需求设计、计划、测试、调试、审查、Git worktree 与完成验证；

完整名称、用途与注意事项请看 [SKILLS.md](SKILLS.md)。

## 安装方法

### 方法一：从 Codex 插件页面安装（推荐）

1. 在 Codex 中打开“插件”。
2. 添加本仓库作为插件市场：`https://github.com/qiuyizipi/codex-starter-kit`。
3. 在列表中安装 `starter-pack`。
4. 新建一个 Codex 任务或重启 Codex，让新安装的 Skill 被重新发现。

不同版本的 Codex 菜单或命令可能略有不同，请以应用内插件页面为准。

### 方法二：Windows 手动复制

如果你不使用插件市场，可以将本仓库中的：

```text
plugins/starter-pack/skills/
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
├─ SKILLS.md                         18 项 Skill 的完整用途清单
├─ INSTALL.md                        快速安装说明
├─ CHANGELOG.md                      更新记录
├─ .codex-plugin/
│  └─ marketplace.json               告诉 Codex 这个仓库提供哪些插件
└─ plugins/
   └─ starter-pack/
      ├─ .codex-plugin/plugin.json   starter-pack 的基本信息
      └─ skills/                     所有可复制或安装的 Skill
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

插件市场方式请在 Codex 的插件页面更新 `starter-pack`；手动方式则复制新版本前先备份自己的改动。具体变更见 [CHANGELOG.md](CHANGELOG.md)。

## 反馈

欢迎通过本仓库的 [Issues](https://github.com/qiuyizipi/codex-starter-kit/issues) 报告问题、提出建议，或推荐值得加入的 Skill。
