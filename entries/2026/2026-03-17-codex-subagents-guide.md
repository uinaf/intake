---
title: How to run subagents in Codex
source: https://x.com/emanueledpt/status/2033651724603240688
saved: 2026-03-17
type: tweet
tags:
  - coding-agents
  - subagents
  - agents
  - harness-engineering
  - openai
intaked_by: glitch418x
---

# How to run subagents in Codex

By Emanuele Di Pietro (@emanueledpt)

## What are subagents?

Instead of one agent doing everything in a single thread (which fills up with noise → performance drops), Codex spawns multiple specialized agents running in parallel. Each handles a specific task, reports back with clean summaries.

## How to use them

Just tell Codex what you want:

> "Review this branch with parallel subagents. Spawn one for security risks, one for test gaps, one for maintainability. Wait for all three, then summarize."

## Model selection per agent

- **gpt-5.4** — main agent, deep reasoning, complex logic
- **gpt-5.3-codex-spark** — speed-optimized workers (exploration, scanning, quick summaries)
- Any model works — not limited to OpenAI models
- Reasoning effort configurable per agent: high / medium / low

## Built-in agents

- `default` — general-purpose fallback
- `worker` — execution-focused, implementation tasks
- `explorer` — read-heavy, exploration and scanning

## Custom agents

Define in TOML, drop in `.codex/agents/` (project) or `~/.codex/agents/` (personal):

```toml
name = "security-reviewer"
description = "Scans for security vulnerabilities"
developer_instructions = "Focus only on security risks. Report findings clearly."
model = "gpt-5.3-codex-spark"
model_reasoning_effort = "high"
```

## Best use cases

- Code review (one agent per concern)
- Bug triage (parallel per bug)
- Large codebase exploration (split repo into sections)
- Test coverage (write tests + check edge cases + validate in parallel)
- Documentation (agents scan different modules)
- Refactoring (analyze different patterns simultaneously)

## When NOT to use

- Parallel writes to same files → conflicts
- Sequential dependent tasks → agents can't coordinate mid-run
- Simple single-file changes → unnecessary overhead
- Token cost: each subagent does its own model + tool work independently

## Key takeaway

Main agent focuses on decisions. Subagents handle the noise. Cleaner context, faster results, better output.
