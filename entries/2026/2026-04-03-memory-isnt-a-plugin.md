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
intaked_by: glitch418x
---

# Why memory isn't a plugin (it's the harness)

By Sarah Wooders (@sarahwooders), co-creator of MemGPT / Letta AI.

## Key Argument

Memory is not a pluggable module — it's a core responsibility of the agent harness. Asking to "plug memory into my agent" is like asking to "plug driving into a car." The harness makes invisible decisions that external plugins can't control.

## Harness Decisions That Shape Memory

- How is AGENTS.md / CLAUDE.md loaded into context?
- How is skill metadata shown to agents? (system prompt? system messages?)
- Can the agent modify its own system instructions?
- What survives compaction, and what's lost?
- Are interactions stored and made queryable?
- How is memory metadata presented to the agent?
- How is CWD / filesystem info exposed?

## RAG ≠ Memory

RAG over past sessions can be a plugin, but retrieval is a small part of memory. Letta's benchmarking found it's hard to do much better than `grep` for retrieval.

## MemGPT Reframe

MemGPT was actually a stateful agent harness before the term existed. Memory emerged from tools the harness exposed for rewriting prompts and managing external state, combined with the harness's context management.

## Letta Code

Memory-first agent harness that projects agent memory to a git-backed filesystem, concurrently modifiable by background memory subagents specializing in prompt rewriting and active memory management.

```
npm install -g @letta-ai/letta-code
```

## Takeaways

- Context management IS memory — they're not separable
- Different harnesses answer the same questions differently, leading to different agent behaviors
- The "invisible decisions" framing is useful for evaluating harness quality
- Relevant to OpenClaw's own memory architecture (MEMORY.md, memory_search, context injection)
