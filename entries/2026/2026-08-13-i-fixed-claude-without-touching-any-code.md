---
title: I Fixed Claude Without Touching Any Code
source: https://www.youtube.com/watch?v=e1snsuY4lTI
saved: 2026-08-13
type: video
tags:
  - harness-engineering
  - coding-agents
  - skills
  - context-engineering
  - developer-experience
---

Theo improves a coding-agent workflow by turning observed failures into global instructions, narrow skills, concrete examples, and machine-specific rules. The same model behaves more consistently when the harness is maintained.

## Key takeaways

- **Operational feedback**: Audit prior conversations, notice repeated corrections, and convert those into durable rules instead of rewriting prompts from scratch.
- **Skill routing**: Descriptions should name the phrases and situations that activate a skill. Procedure lives inside the skill; unrelated workflows stay separate.
- **Taste by example**: Bad and good examples encode PR titles, review scope, and stop points better than abstract advice.
- **Communication quality**: File hosting, screenshots, videos, HTML comparisons, and consistent PR prose help humans evaluate parallel agent work.
- **Scoped fleet config**: Separate universal skills, command-center-only capabilities, and project rules, then sync across machines instead of installing every workflow everywhere.
- **Earned instructions**: Blindly copying someone else's `AGENTS.md` imports preferences without evidence they match local failures.
- **Anecdote limits**: The video is not a controlled eval. Gains also depend on T3 Code, parallel machines, worktrees, and other infrastructure, and long-lived rules can go stale.
