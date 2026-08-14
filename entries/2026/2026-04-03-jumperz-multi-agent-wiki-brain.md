---
title: Multi-Agent Wiki Brain (Karpathy pattern + OpenClaw + Hermes)
source: https://x.com/jumperz/status/2040166448492900356
saved: 2026-04-03
type: tweet
tags:
  - agents
  - knowledge-management
  - memory
  - multi-agent
  - openclaw
  - hermes
  - swarm
---

A 10-agent OpenClaw plus Hermes swarm that extends Karpathy's wiki pattern: agents dump raw output, a compiler files it, and a separate reviewer decides what enters the permanent brain.

## Key takeaways

- **Production loop**: Agents dump into `raw/`; a compiler organizes domain wiki pages with backlinks; Hermes scores drafts; briefings feed live wiki context back to each agent.
- **Separate reviewer**: Hermes is not in the swarm; it has no production context and only asks whether an article is accurate enough to persist.
- **Why Hermes**: NousResearch trains it for structured outputs, function calling, and evaluation-style reasoning; consistency matters more than raw intelligence at hundreds of articles.
- **Division of labor**: OpenClaw runs agents, routes tasks, and dispatches crons; Hermes judges what persists; the wiki is the shared brain.
- **Hallucination compounding**: One bad connection in the brain is reused by every downstream agent; an independent review gate is the mitigation.
