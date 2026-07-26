---
title: Agent Harness Engineering
source: https://x.com/addyosmani/status/2053231239721885918
saved: 2026-05-10
type: tweet
tags:
  - ai-engineering
  - harness-engineering
  - agents
  - coding-agents
intaked_by: glitch418x
---

# Agent Harness Engineering

Addy Osmani summarizes the emerging discipline of harness engineering: a coding agent is not just a model, but the model plus all the scaffolding around it. The harness is the prompts, tools, memory, sandbox, hooks, orchestration, observability, context policies, subagents, and recovery paths that let a model actually complete work.

Core ideas:

- **Agent = Model + Harness.** If it is not the model, it is part of the harness.
- A decent model in a strong harness can beat a stronger model in a weak harness.
- Claude Code, Cursor, Codex, Aider, and Cline are best understood as different harnesses, even when they use similar underlying models.
- Many apparent "model failures" are harness/configuration failures: missing instructions, unsafe tool access, weak decomposition, no verification loop, or no back-pressure from tests/typechecks.
- The key operational habit is the **ratchet**: every observed agent mistake should become a durable rule, hook, test, or review check so the same failure does not recur.
- Good harness design works backward from behavior: every prompt, tool, hook, and policy needs a clear job, otherwise it should be removed.
- Major harness components include filesystem/Git state, bash/code execution, sandboxes, default tooling, memory/search, context compaction, tool-output offloading, progressive disclosure, planning loops, multi-agent splits, and lifecycle hooks.
- Hooks are the enforcement layer: block destructive commands, autoformat, run tests, and inject failures back into the loop while keeping passing checks silent.
- Root instructions like `AGENTS.md` should be short pilot checklists, not bloated style guides; every rule should be earned by a real failure.
- Harnesses do not disappear as models improve. Old scaffolding gets removed, but better models unlock harder tasks with new failure modes.
- The industry is moving from raw LLM APIs toward **Harness APIs**: runtimes that provide loops, tools, context management, hooks, sandboxes, and orchestration.

**Take:** The model matters, but the harness increasingly determines the experienced capability. The practical work is less "pick the smartest model" and more "build a living system that turns failures into constraints, keeps context sane, verifies work, and makes the agent's environment do as much of the thinking as possible." This maps directly onto our own memory/skills/AGENTS pattern: prompts are not vibes, they are operational scar tissue.
