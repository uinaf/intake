---
title: Harness Engineering for Reliable AI Workflows
source: https://youtube.com/watch?v=I2K81s0OQto
saved: 2026-03-28
type: video
tags:
  - harness-engineering
  - agentic-sdlc
  - reliability
  - validation-loops
---

A video on the reliability problem: a 10-step workflow at 90% per step succeeds 35% of the time. Skills get you to about 90%; harnesses push toward 99%+.

## Key takeaways

- **March of nines**: Each extra nine of per-step reliability requires exponentially more engineering.
- **Skills versus harnesses**: Skills are advanced prompts limited by hallucination and early quitting. Harnesses are deterministic rails that validate and gate outputs.
- **State-machine harness**: Architecture, planning, scratch pads, sub-agents, guardrails, memory, recoverable state, validation loops, and context compaction are the listed components.
- **AI inside gates**: The harness catches when the model goes off-rails. The model does the thinking inside each gated phase.
