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
---

Jason Liu's Codex operating loop: pinned durable threads, voice for unedited thought, mid-run steering, file-based memory, and heartbeats that make threads recur.

## Key takeaways

- **Durable threads**: Pin megathreads per workstream and compact them over months. Continuity beats recreating context every time.
- **Voice input**: The point is messy unedited thinking, not speed. Transcripts become starting material for writing.
- **Live steering**: Inject the next message while the agent is still working so one prompt, one answer becomes an operating loop.
- **Memory files**: An Obsidian vault, separate from any repo, with top-level `AGENTS.md` and git diffs as the review surface for memory.
- **Heartbeats**: Thread-local automations that recur, such as a chief-of-staff pass over Slack and mail, with cadence you can retune.
- **Strong goals**: Ambition plus verification. "Migrate Rich to Rust, must pass the original unit tests" beats "implement this markdown plan."
- **Computer tiers**: `$browser` for local inspection, `@chrome` for authenticated sessions, `@computer` for GUI-only work, plus connectors.
