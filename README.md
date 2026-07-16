# Codex Starter Kit

一个给 Codex 新手使用的中文 Skill 合集，由 [qiuyizipi](https://github.com/qiuyizipi) 维护。

它的目标不是塞进一大堆工具，而是先提供两项真正能改善日常体验的基础能力：**让回答更清楚**，以及**在安装新能力前先看清风险**。

## 先说清楚：这是什么？

Codex Skill 可以理解为给 Codex 的一份“工作规则”。当你的请求符合某项 Skill 的触发条件时，Codex 会读取该 Skill 的 `SKILL.md`，并按其中的规则回答或执行。

本仓库是一个插件市场（marketplace，插件来源）。安装其中的 `starter-pack` 后，你会获得下面两项原创 Skill。它们不在后台运行程序，不要求登录额外账号，也不会自行修改你的文件或设置。

## 它解决什么问题？

刚开始使用 Codex 时，常见的两个麻烦是：

- 回答太长、重点藏得太深，推荐工具时一次给出太多选择；
- 想安装新的 Skill、插件或 MCP，却不确定它会不会读取文件、联网、索取账号权限，或者带来不透明的脚本。

`starter-pack` 分别处理这两个问题。

## 已包含的 Skill

### `brief-mode`：让回答短而不漏重点

它会让 Codex 默认先给结论，再给必要的重点；当问题已经回答清楚时停止展开。你说“短一点”“重点是什么”“一个一个推荐”“别写太长”时，它尤其适合。

但它不是粗暴限字数：涉及改代码、安装配置、账号权限、删除文件、风险判断或你明确要求详细解释时，Codex 仍应给出必要步骤、风险和证据。

你可以自然地说：

```text
短一点，告诉我重点。
```

或明确说明：

```text
使用 $brief-mode 回答这个问题。
```

### `find-skills-safe`：先审查，再安装

当你想找一个 Skill、插件或 MCP 时，它会只推荐**一个**最合适的候选项，并在推荐前检查来源、维护情况、脚本、网络访问、权限、凭据、依赖和许可证。

它本身只做发现与审查：不会自动安装、更新或执行候选工具。真正安装必须在你再次明确同意后进行。

例如：

```text
帮我找一个能整理项目记忆的 Skill，先审查安全性，不要安装。
```

## 安装方法

### 方法一：从 Codex 插件页面安装（推荐）

1. 在 Codex 中打开“插件”。
2. 添加本仓库作为插件市场：`https://github.com/qiuyizipi/codex-starter-kit`。
3. 在列表中找到并安装 `starter-pack`。
4. 新建一个 Codex 任务，或重启 Codex，让新安装的 Skill 被重新发现。

不同版本的 Codex 菜单或命令可能略有不同；以应用内的插件页面为准。

### 方法二：只手动使用其中一个 Skill

如果你只想使用某一项 Skill，也可以打开 `plugins/starter-pack/skills/`，把目标文件夹复制到：

```text
C:\Users\你的用户名\.codex\skills\
```

例如，`brief-mode` 的目标路径是：

```text
C:\Users\你的用户名\.codex\skills\brief-mode\SKILL.md
```

复制前请先备份已有同名文件夹，避免覆盖你自己的修改。完成后新建任务或重启 Codex。

## 文件结构：每个文件是做什么的？

```text
codex-starter-kit/
├─ README.md                         给使用者阅读的总说明和教程
├─ INSTALL.md                        简短安装步骤
├─ CHANGELOG.md                      每次版本更新记录
├─ .codex-plugin/
│  └─ marketplace.json               插件市场清单：告诉 Codex 这里有哪些插件
└─ plugins/
   └─ starter-pack/
      ├─ .codex-plugin/
      │  └─ plugin.json              starter-pack 的基本信息
      └─ skills/
         ├─ brief-mode/              简洁回答规则
         └─ find-skills-safe/        安全审查与推荐规则
```

每个 Skill 文件夹都包含：

| 文件 | 作用 |
|---|---|
| `SKILL.md` | Codex 实际读取的核心规则；它决定 Skill 的行为。 |
| `README.md` | 给使用者阅读的介绍。 |
| `中文说明.md` | 对规则的中文解释，便于学习和自行修改。 |
| `LICENSE` | MIT 开源许可证。 |
| `agents/openai.yaml` | Codex 界面使用的显示信息。 |

## 没有打包哪些东西？为什么？

本仓库**不会**复制 GitHub、Notion 等第三方插件。它们通常涉及独立账号授权、权限范围、许可证和更新节奏；直接混进新手合集会让来源和责任不清楚。

需要这些能力时，建议从 Codex 官方插件目录单独安装，并在授权前自行确认权限范围。

## 常见问题

### 安装后没有立刻生效？

当前任务可能仍在使用旧的 Skill 列表。新建一个任务或重启 Codex 后再试。

### 两个 Skill 会不会自动改我的文件或登录账号？

不会。`brief-mode` 只影响回答表达方式；`find-skills-safe` 只进行发现和审查。它们不会因为被安装就执行脚本、联网安装东西或要求账号授权。

### 我可以修改成自己的规则吗？

可以。修改目标 Skill 中的 `SKILL.md` 后，重新打开任务即可。建议在修改前先复制一份备份；如果你希望让其他人也能使用自己的版本，可以 Fork 本仓库后发布。

### 怎样获得更新？

重新打开插件页面并更新 `starter-pack` 即可；如果你使用手动复制方式，则将仓库中的新版本文件复制到同一路径。更新前建议先备份自己的改动。

## 许可证

本仓库中的原创 Skill 均采用 [MIT License](https://opensource.org/license/mit) 发布。你可以使用、修改和分享，但需要保留原许可证声明；完整文本见各 Skill 目录中的 `LICENSE` 文件。

## 反馈与建议

欢迎通过本仓库的 [Issues](https://github.com/qiuyizipi/codex-starter-kit/issues) 提出问题、建议或你希望加入的 Skill 方向。
