---
title: Codex subagents and custom agents guide
source: https://x.com/reach_vb/status/2033636057690800452
saved: 2026-03-17
type: tweet
tags:
  - coding-agents
  - subagents
  - agents
  - openai
---

Vaibhav Srivastav: Codex subagents are specialized children with their own instructions, model, tools, and context window. Opt-in only — more tokens than a single-agent run.

## Key takeaways

- **Custom TOML**: `name`, `description`, and `developer_instructions` in `~/.codex/agents/` or `.codex/agents/`.
- **Narrow roles**: One job each; too many responsibilities lose the benefit.
- **Built-ins**: `default`, `worker`, and `explorer`.
- **Runtime**: Subagents inherit the parent's sandbox and approval state; communication is one-way back to main.
- **Parallel work only**: Use subagents when work is actually parallelizable; faster models for search, stronger models for judgment.
- **Value**: Cleaner boundaries, less context drift, and better decomposition — not just parallelism.
