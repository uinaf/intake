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

# How We Solved the Agent Memory Problem
- **Author:** Simen Svale, Sanity CTO
- **URL:** https://www.sanity.io/blog/how-we-solved-the-agent-memory-problem
- **Shared by:** Altay
- **⚠️ Discuss later** — directly relevant to our OpenClaw compaction approach
- Type: article
- Tags: agent-memory, distillation, long-term-memory, context-management, compaction

"The Goldfish Problem" — agents lose operational context when summarization compresses conversation history. Summarization preserves narrative but destroys operational intelligence (file paths, decisions, specific facts).

**Solution: Distillation, not summarization.** Three-tier memory architecture called Nuum:
1. **Temporal** — raw full conversation, full-text searchable
2. **Distilled** — background agent at ~60% context capacity compresses older segments into: one-line narrative + list of retained facts. Recursive — old stuff gets abstract, recent stays detailed.
3. **Long-Term** — curator agent extracts durable knowledge (preferences, decisions, patterns), persists across sessions, injected into system prompt.

Two invisible background agents: distillation agent (compresses) + LTM curator (extracts durable knowledge). Plus a "reflect" tool that spawns sub-agent with full-text search over ALL messages including pre-distillation.

First Nuum agent: 7,400+ messages over 6 days, stayed coherent, remembered early file paths and decision rationale. Open source: `bunx @sanity-labs/nuum --repl`.

**Key insight for us:** OpenClaw's compaction is the "summarization" they're criticizing. Distillation (narrative + facts, not summary blobs) is the upgrade path.
