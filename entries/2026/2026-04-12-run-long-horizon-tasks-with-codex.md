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

OpenAI is explicitly pushing durable work artifacts like Plan.md, Implement.md, and Documentation.md so long-horizon coding work stays resumable.

## Key takeaways

- **Durable artifacts**: OpenAI is pushing durable work artifacts like Plan.md, Implement.md, and Documentation.md. These artifacts hold harness state rather than documentation alone.
- **Externalized plans**: Long-horizon work needs resumability; externalized plans beat hoping the model remembers what mattered 40 turns ago.
- **Legible progress**: Make progress legible in files so handoffs, retries, and audits stop being guesswork.
