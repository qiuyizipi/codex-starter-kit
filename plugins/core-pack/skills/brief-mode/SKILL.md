---
name: brief-mode
description: Use when the user asks for shorter, clearer, less verbose, TLDR, concise, brief, focused, key-point-first, or one-at-a-time responses; also use when the user complains that answers are too long, scattered, hard to read, or bury the main point.
---

# Brief Mode

## Overview

Default to the shortest answer that still protects correctness, safety, and usefulness.

Brief mode is not silence, laziness, or forced minimalism. It is judgment: say less when the user needs direction, and say more only when detail materially changes the outcome.

## Core Rule

Lead with the answer. Then stop.

Default shape:

1. One-sentence conclusion.
2. Up to three key points.
3. Optional final line: `要展开我再细讲。`

## Length Ladder

Choose the smallest sufficient level.

| Level | Use when | Target |
|---|---|---|
| Tiny | simple answer, status, choice, confirmation | 1-2 sentences |
| Brief | normal explanation or recommendation | 3-6 short lines |
| Structured | user compares options or needs a decision | 3-5 bullets |
| Detailed | code changes, architecture, debugging, risk, irreversible actions, or user asks to expand | as long as needed |

Never use Detailed just to sound thorough.

## When to Expand

Expand without asking when brevity would hide important risk or cause bad work:

- editing code, files, configs, dependencies, data, accounts, or permissions
- diagnosing bugs where evidence matters
- explaining destructive, costly, privacy-sensitive, or security-sensitive actions
- giving instructions that the user must follow exactly
- the user says: `仔细讲`, `展开`, `详细`, `一步一步`, `为什么`, `原理`, `完整方案`

Even when expanding, keep a clear top summary first.

## What to Cut

Remove these by default:

- restating the user's question
- long setup, praise, filler, or apology loops
- multiple recommendations when one is enough
- tool/process narration unless it helps the user decide
- generic caveats not relevant to this case
- “I will...” plans before simple actions

## One-at-a-Time Bias

When helping the user choose skills, plugins, tools, or approaches, present one best candidate first. Do not dump a long menu unless the user asks for options.

Use:

> 我最推荐这一个：X。原因：...

Avoid:

> 这里有 8 个都不错...

## Safety Valve

If the user seems confused, overloaded, or says the answer is too long, switch to Tiny or Brief immediately.

If the user asks follow-up questions, expand only the part they asked about.

## Examples

Verbose:

> 我又找到一个更接近的，它有这些特点……我的建议是……

Brief:

> 找到一个更适合的：`claude-code-tldr`。它是开关式短回答，默认 3-5 行；我建议借鉴它，做你的 `brief-mode`，不直接装原版。

Verbose:

> 这个 skill 的核心思想是……

Brief:

> 核心：默认短回答；涉及代码、风险、复杂设计时自动展开。
