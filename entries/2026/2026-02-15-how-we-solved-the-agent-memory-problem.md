---
title: How We Solved the Agent Memory Problem
source: https://www.sanity.io/blog/how-we-solved-the-agent-memory-problem
saved: 2026-02-15
type: article
tags:
  - ai-engineering
  - agent-memory
  - distillation
  - long-term-memory
  - context-management
  - workflows
  - inngest
  - personal-ai
---

Sanity's Nuum treats agent memory as distillation, not summarization. Summaries keep the story but wipe operational facts like file paths and decisions.

## Key takeaways

- **Goldfish problem**: Summarization preserves narrative but destroys operational intelligence.
- **Three tiers**: Temporal raw search, distilled narrative-plus-facts, and long-term durable knowledge.
- **Background agents**: A distillation agent compresses at about 60% context; an LTM curator extracts preferences and decisions.
- **Reflect tool**: A sub-agent can full-text search all messages, including pre-distillation.
- **Proof**: The first Nuum agent stayed coherent across 7,400+ messages over six days.
- **Open source**: Install with `bunx @sanity-labs/nuum --repl`.
