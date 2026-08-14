---
title: How to Add Memory to Hermes Agent (Mem0 integration)
source: https://x.com/mem0ai/status/2040149098364580026
saved: 2026-04-03
type: tweet
tags:
  - agents
  - memory
  - hermes
  - mem0
  - context-management
  - harness
---

Mem0's write-up of Hermes memory: a three-phase loop that injects cached facts, extracts new ones in the background, and pre-fetches between turns so search costs no latency.

## Key takeaways

- **Between-turn search**: Cached Mem0 results are injected before the reply; extraction runs after; relevant memories are pre-fetched between turns instead of at query time.
- **Two targets**: `memory` holds environment facts, conventions, tool quirks, and completed work; `user` holds identity, role, timezone, preferences, and skill; the agent routes automatically.
- **Capacity display**: Injected memory shows percent used and character counts so the agent can self-manage; entries are separated by `§`.
- **No read tool**: Actions are add, replace, and remove via substring match; memory is auto-injected, so there is no read action.
- **Optional Mem0 tools**: `mem0_profile`, `mem0_search`, and `mem0_conclude` cover fetch, semantic search, and verbatim store when Mem0 is active.
- **Reliability**: A circuit breaker pauses after five consecutive failures; API calls run in background threads and do not block the turn.
