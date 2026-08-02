---
title: Symphony + Harness Engineering notes
source: https://github.com/openai/symphony
saved: 2026-03-11
type: research
tags:
  - agents
  - harness-engineering
  - orchestration
  - symphony
  - research
---

# Summary

This cluster is about moving from **interactive coding-agents agents** to **harnessed, autonomous work systems**.

## OpenAI Symphony

Symphony positions itself as a work-orchestration layer for coding-agents agents:

- turns project work into **isolated autonomous implementation runs**
- monitors a work queue / project board
- spawns agents per task
- collects proof of work (CI status, reviews, walkthrough artifacts)
- lands accepted work safely

The pitch is: engineers should manage **work**, not supervise coding-agents agents line-by-line.

Important detail: Symphony is presented as an **engineering preview / reference direction**, not a mature off-the-shelf product.

## OpenAI Harness Engineering article

Key thesis: once agents can write most code, the engineering bottleneck shifts from coding-agents to **environment design**.

Main ideas:

- the repo must become the **system of record** for the agent
- `AGENTS.md` should act as a **table of contents**, not a giant manual
- repository knowledge should be structured, versioned, and mechanically checked
- agent legibility matters more than human stylistic preferences
- architecture constraints, invariants, and custom linters are multipliers
- feedback loops (tests, app bootability, logs, observability, screenshots, browser control) are essential
- throughput changes merge philosophy: more follow-up fixes, less preciousness
- long-term success depends on constant garbage collection of slop / drift

Useful framing: the hard part is no longer just “write code,” but “design a repo and execution environment where agents can reliably operate.”

## Video: harness-engineering engineering / long-running agents

Core message from the video:

- model capability improved enough for longer autonomous tasks
- the limiting factor is now **harness quality**, not just prompting
- three recurring requirements:
  1. legible environment / context system
  2. strong verification loops
  3. generic tools the model already understands well

The video highlights a pattern similar to OpenClaw / autonomous coding-agents stacks:

- initializer/setup phase
- persistent progress / feature tracking
- end-to-end verification (browser/UI/tests)
- fresh sessions that can pick up where previous ones left off

## Video: agentic engineering ladder

Useful mental model from the second video:

1. interactive agent use
2. expertise / memory / project instructions
3. delegated scouts + builders
4. human as orchestrator across many sessions
5. orchestrator agent managing isolated workers
6. issue-to-PR automation with the human mostly outside the loop

This is relevant because it describes the exact progression from:

- “use Codex/Claude in a terminal”
- to “run a supervised swarm”
- to “agents pick up labeled work automatically and ship it”

## Why this matters for UINAF / our setup

This is more relevant to **UINAF-style internal agent harnessing** than to a narrow OpenClaw bug ticket.

What feels directly applicable:

- isolated worktrees as the default execution unit
- issue-driven orchestration
- stronger proof-of-work artifacts before merge
- better state / progress tracking per run
- more explicit harness-engineering layers around coding-agents agents
- treating repo docs, plans, and constraints as machine-readable source of truth

## Practical takeaways

- Do **not** interrupt a working production loop just because a shinier orchestrator exists.
- Finish the current Kalshi / Kraken sweep with the working `acpx` + worktree flow.
- Revisit Symphony / harness-engineering engineering as a dedicated spike afterwards.
- Evaluate it against current workflows on:
  - reliability
  - observability
  - commit / branch ergonomics
  - proof-of-work quality
  - merge friction
  - cost / throughput

## Bottom line

Symphony is interesting, but the bigger idea is the same across all of these links:

> the future advantage is not just having a strong coding-agents model — it is having a **harness** that makes long-running autonomous work safe, legible, and easy to verify.
