---
title: Run Long-Horizon Tasks with Codex
source: https://developers.openai.com/blog/run-long-horizon-tasks-with-codex
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - coding-agents
  - long-running-agents
  - openai
  - specs
---

- OpenAI is explicitly pushing durable work artifacts like Plan.md, Implement.md, and Documentation.md. That is harness state, not just nice documentation.
- Long-horizon work needs resumability. Externalized plans beat hoping the model remembers what mattered 40 turns ago.
- Worth stealing for any coding harness: make progress legible in files so handoffs, retries, and audits stop being guesswork.
