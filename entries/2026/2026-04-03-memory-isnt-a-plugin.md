---
title: Why memory isn't a plugin (it's the harness)
source: https://x.com/sarahwooders/status/2040121230473457921
saved: 2026-04-03
type: tweet
tags:
  - agents
  - memory
  - harness
  - context-management
  - letta
  - memgpt
---

Sarah Wooders argues memory is a core harness responsibility, not a plug-in module: invisible context decisions shape what the agent can remember, and RAG is only a slice of that.

## Key takeaways

- **Not a plugin**: Asking to plug memory into an agent is like asking to plug driving into a car; the harness makes decisions an external plugin cannot control.
- **Harness questions**: How `AGENTS.md` loads, how skill metadata appears, whether the agent can edit its instructions, what survives compaction, and how CWD is exposed all shape memory.
- **RAG is not memory**: Retrieval over past sessions can be a plugin, but Letta's benchmarking found it hard to beat `grep` for retrieval.
- **MemGPT reframe**: MemGPT was a stateful harness before the term; memory emerged from tools for rewriting prompts and managing external state plus context management.
- **Letta Code**: A memory-first harness that projects agent memory onto a git-backed filesystem, with background subagents for prompt rewriting and active memory management.
- **Inseparable pair**: Context management is memory; different harness answers to the same questions produce different agent behavior.
