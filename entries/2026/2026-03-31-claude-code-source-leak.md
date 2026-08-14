---
title: Claude Code Source Leak — Architecture Deep Dive
source: https://mintlify.com/VineeTagarwaL-code/claude-code/concepts/how-it-works
saved: 2026-03-31
type: article
tags:
  - coding-agents
  - claude-code
  - harness
  - architecture
---

Accidentally published npm source maps exposed Claude Code's local ReAct harness, layered memory, and cache-aware context management. The Mintlify copy of those docs was later withdrawn.

## Key takeaways

- **Agentic loop**: A standard ReAct loop runs in the terminal process; `query.ts` streams tokens, dispatches tools, and enforces per-turn budgets.
- **Memory hierarchy**: Four CLAUDE.md layers (managed, user, project, local), plus a dream agent that consolidates memories after 24 hours and five sessions.
- **Permission model**: Tools return allow, ask, or deny; read-only tools auto-approve; modes range from prompt-everything to bypass.
- **Context layers**: Snip, microcompact, and autocompact keep history bounded; oversized tool results spill to temp files under a 200K-character per-turn budget.
- **Coordinator mode**: The orchestrator has only Agent, SendMessage, and TaskStop; it must synthesize findings and never let a builder grade its own work.
- **Fork subagents**: Omitting `subagent_type` forks with inherited context and a shared prompt-cache prefix.
- **Cache-first prompts**: Static versus dynamic system-prompt sections, with uncached sections marked as cache-breaking.
- **Withdrawn docs**: The hosted Mintlify copy described here later returned HTTP 410, and no archived copy exists.
