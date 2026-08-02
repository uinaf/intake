---
title: Harness engineering beats model obsession
source: https://x.com/Whats_AI/status/2040761549623632053
saved: 2026-04-06
type: tweet
tags:
  - ai-agents
  - harness
  - coding-agents
  - prompt-engineering
---

Louis-François Bouchard argues that agent failures are often harness failures, not model failures.

## Key takeaways

- A coding agent left in a loose loop can claim success without even running tests.
- "The model is the engine, context is the fuel, the harness is the rest of the car" is the core framing.
- Better tools, permissions, tests, retries, and guardrails can change outcomes dramatically without changing the underlying model.
- He adds a self-reflection step after each interaction so the agent updates its own skill file based on edits, failures, and preferences.
- Claimed results: lower token usage, better output quality, and compounding improvement from harness feedback.
- Useful reminder for our own setup: when an agent breaks, inspect the wrapper, workflow, and stop conditions before blaming the model.

## Why it matters

This maps directly to our recent OpenClaw / ACP / source-vs-npm debugging. The same model can feel dramatically better or worse depending on the runtime path, tool surface, safety rails, and feedback loop around it.
