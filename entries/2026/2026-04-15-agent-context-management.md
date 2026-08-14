---
title: Context Management for AI Agents
source: https://youtube.com/watch?v=sYxkPwct0Ek
saved: 2026-04-15
type: video
tags:
  - ai
  - agents
  - context-management
  - memory
  - engineering
  - tooling
---

Jaymin West argues that context management is where agents read and write knowledge across runs, not a single session window. Without a store and rituals, every session starts from zero.

## Key takeaways

- **Cross-run memory**: The problem is distilled, reusable knowledge across sessions, not stuffing one context window.
- **Markdown graveyard**: A directory of freeform `.md` files looks productive but is hard to update, inconsistent, and unreliable to search.
- **Built-in memory limits**: Claude Code's memory is unstructured, unshared, truncated around 200 lines, and not a team store.
- **Harness independence**: Any agent with bash should read and write the same store, whether Claude Code, Copilot, or Codex.
- **Agent rituals**: Prime at start, retrieve mid-work, write back at end, and bake those steps into `AGENTS.md` rather than leaving them optional.
- **Structured stores**: JSON, YAML, or schemas beat letting the model invent formats that rot. Plan decay so stale knowledge is pruned.
- **Mulch pattern**: Git-tracked JSONL records per domain, append-only, with types such as convention, failure, and decision, plus prune and prime commands.
- **Scale split**: Solo work fits local structured files; enterprise needs a shared schema, retrieval, and release-triggered cleanup without jumping to RAG first.
