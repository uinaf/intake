---
title: Harnesses Are Everything — How to Optimize Yours
source: https://x.com/thealexker/status/2045203785304232162
saved: 2026-04-18
type: tweet
tags:
  - agents
  - harness
  - context-management
  - progressive-disclosure
  - subagents
  - prompt-engineering
---

**Author**: Alex Ker (@thealexker)
**Date**: 2026-04-17
**Engagement**: 419 likes, 52 retweets

## Key Takeaways

### The Harness, Not Just the Model
The harness is what makes intelligence useful. Its job:
1. Manages context in inherently stateless LLMs (sessions, compressions)
2. Makes functions work around the model (tool calls, I/O, guardrails)
3. Think of it as a `while (have next message) do {tool}` loop

### Keep .md Files Lean and Human-Written
- LLM-generated system prompts degrade performance while costing ~20% more inference (ETH research)
- "Instruction budget" — frontier models enter the "dumb zone" after a few hundred instructions
- Human-written > LLM-generated for global system prompts
- Every token fights for its place (injected globally on every session)

### Progressive Disclosure
Only let the agent pull context when needed. Give files descriptive names so the agent knows what exists.
- **CLIs**: Agent runs `--help` to discover subcommands, drills in as needed. Critical for custom/internal tools with zero training data.
- **Skills**: Industry converged here — Claude Code, Codex, OpenCode all load only name+description at startup, full SKILL.md on demand.
- **MCP tools**: Divergence point. Claude Code ships search-based MCP tool loading (85%+ context reduction). Codex/OpenCode load all schemas upfront — limit your servers.

### R.P.I. Framework (from HumanLayer)
Every prompt should do exactly one of three things:
1. **Research**: Let agent explore structure, prior art, relationships. No action taken.
2. **Plan**: Agent writes step-by-step plan. Human reviews — outsourcing thinking here costs dearly.
3. **Implement**: Execute approved plan in clean context. Use subagents for long plans.

This mirrors how staff engineers work: break problems down, plan before implementing, get second eyes.

### Subagents for Clean Context
Use when a summary is sufficient for the main agent. If you need intermediary context, keep in primary window.

**Two patterns:**
- **Parallel fan-out**: Investigation/research. Spin up subagents for each theory simultaneously. Speed + context isolation.
- **Pipelines**: Sequential roles (UX → architect → devil's advocate). Each stage adds analysis. Main agent gets layered evaluation without holding all lenses in context.

### Commit to One Harness
Switching harnesses = losing institutional knowledge encoded in config files. Pick one, treat every failure as a data point, add to .md files. The best harness is the one you've iterated on with human engineering.

## Relevance to Our Setup
- Our AGENTS.md / SKILL.md structure already follows progressive disclosure
- R.P.I. maps to our working agreement (plan first, execute after go)
- Subagent patterns (fan-out for research, pipelines for review) are directly applicable to our sessions_spawn workflow
- The "instruction budget / dumb zone" concept validates our lean MEMORY.md gatekeeper rule
