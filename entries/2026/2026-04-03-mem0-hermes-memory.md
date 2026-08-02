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

# Mem0 + Hermes Agent Memory Integration

By @mem0ai — part of their "In Context" blog series on agent memory.

## Architecture

Hermes (by NousResearch) is a self-improving agent CLI for long-horizon tasks. Already had local memory (MEMORY.md, USER.md). Now supports 6 pluggable external memory providers, Mem0 being one.

## How It Works — 3-Phase Memory Loop

1. **Before response:** Cached Mem0 results from previous turn injected into system prompt. Zero latency.
2. **After response:** (user msg, reply) pair sent to Mem0 in background thread. Auto-extracts facts.
3. **Between turns:** Pre-fetches relevant memories in background so they're ready before next message.

Key insight: search happens *between* turns, not *at* query time. No latency cost.

## Memory Targets

- **memory** — agent's working notes: environment facts, project conventions, tool quirks, completed work
- **user** — who you are: name, role, timezone, preferences, skill level

Agent decides what goes where automatically.

## System Prompt Injection Format

```
══════════════════════════════════════════════
MEMORY (your personal notes) [67% — 1,474/2,200 chars]
══════════════════════════════════════════════
User's project is a Rust web service...
§
This machine runs Ubuntu 22.04...
```

Shows usage percentage and char counts so the agent knows capacity. Entries separated by `§`.

## Tool Actions

- `add` — new entry
- `replace` — update via substring matching (old_text)
- `remove` — delete via substring matching (old_text)
- No `read` action — memory is auto-injected into system prompt

## LLM Tools (when Mem0 active)

- `mem0_profile` — fetch all stored user memories
- `mem0_search` — semantic search with reranking
- `mem0_conclude` — store a fact verbatim (no server-side extraction)

## Reliability

- Circuit breaker: 5 consecutive failures → pause 2 min → retry
- All API calls in background threads, non-blocking

## Takeaways

- Pre-fetch between turns is a smart latency hack — applicable to OpenClaw's memory_search
- Capacity-aware memory display (% used) helps the agent self-manage
- The memory/user split mirrors OpenClaw's MEMORY.md / USER.md pattern
- Interesting contrast with Sarah Wooders' thread (saved same day): Mem0 is literally the "pluggable memory" she argues against, but Hermes harness-level integration makes it work better than pure plugin
