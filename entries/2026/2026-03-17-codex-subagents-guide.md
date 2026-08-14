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
---

Instead of one noisy thread, Codex spawns specialized agents in parallel. Each reports back with a clean summary so the main agent can decide.

## Key takeaways

- **Natural-language spawn**: Ask for parallel reviewers (security, tests, maintainability), wait, then summarize.
- **Model split**: gpt-5.4 for deep reasoning; gpt-5.3-codex-spark for exploration and scans; any model can be used.
- **Custom TOML**: Same agent files under `.codex/agents/` with per-agent model and reasoning effort.
- **Good cases**: Review, bug triage, repo exploration, tests, docs, and pattern analysis.
- **Anti-patterns**: Parallel writes to the same files, sequential dependent tasks, or simple single-file changes.
