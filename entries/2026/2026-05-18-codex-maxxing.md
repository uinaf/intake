---
title: "Codex-maxxing: Durable Threads and the Operating Loop"
source: https://jxnl.github.io/blog/writing/2026/05/10/codex-maxxing
saved: 2026-05-18
type: article
tags:
  - agent-workflow
  - memory
  - codex
  - durable-threads
  - heartbeats
  - voice-input
intaked_by: glitch418x
---

# Codex-maxxing — Jason Liu

## Key Takeaways

**Durable threads**: Pinned megathreads per workstream, compacted over months. Continuity > cost. Accumulate history, preferences, decisions — don't recreate context every time.

**Voice input**: Not about speed — about getting unedited thinking into the agent. Vague messy sentences are natural to say but too annoying to type. Transcripts as starting material for writing.

**Steering**: Inject next message while agent is still working. Queue intent without waiting. Turns "one prompt, one answer" into an operating loop.

**Memory as files (Obsidian vault)**: 
- Separate from any one repo — repos hold code, vault holds rolling context
- AGENTS.md at top level instructs agent to update relevant pages as it learns
- Kept as GitHub repo: cloud access + diffs as review surface for memory
- Files force compression of experience into durable form that survives thread death
- "Pinned threads start to feel less like different workers reading from the same notebook"

**Heartbeats**: Thread-local automations that make threads recur. Chief of Staff every 30 min (check Slack/Gmail, draft replies). Monitor for feedback. Adjust cadence over time. Cross tool boundaries (Slack → render → @computer upload).

**Goals**: Ambition + verification. "Migrate Rich to Rust, must pass all original unit tests" > "implement this markdown plan." Weak goals produce weak execution.

**Side panel**: Where Codex becomes the place work happens — inspect artifacts, operate web surfaces, review changes. Same object as the agent.

**Browser/computer tiers**: $browser (local inspection), @chrome (authenticated sessions), @computer (GUI-only work). Connectors ($slack, $gmail, $calendar) extend reach.

## Resonance With Our Setup

Our architecture already aligns closely:
- MEMORY.md + daily notes + wiki ≈ his Obsidian vault pattern
- AGENTS.md ≈ his vault-level agent instructions  
- Heartbeat/cron ≈ his Heartbeats
- File-based memory with diff review ≈ same principle
- Workspace separate from code repos ≈ same separation

What's different: his threads are Codex-native megathreads with compaction. Our continuity is file-based across sessions, not within a single long-lived thread. Tradeoffs either way — thread-local continuity is smoother but trapped; file-based survives everything but requires explicit write-back discipline.
