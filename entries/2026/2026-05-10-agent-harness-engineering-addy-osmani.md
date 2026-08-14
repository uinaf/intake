---
title: Agent Harness Engineering
source: https://x.com/addyosmani/status/2053231239721885918
saved: 2026-05-10
type: tweet
tags:
  - ai-engineering
  - harness-engineering
  - agents
  - coding-agents
---

Addy Osmani's summary of harness engineering: a coding agent is the model plus every piece of scaffolding around it. A decent model in a strong harness can beat a stronger model in a weak one.

## Key takeaways

- **Model plus harness**: Prompts, tools, memory, sandbox, hooks, orchestration, observability, context policies, subagents, and recovery paths are the harness.
- **Harness wins**: Claude Code, Cursor, Codex, Aider, and Cline are different harnesses even when they share models.
- **Misread failures**: Missing instructions, unsafe tools, weak decomposition, or no test back-pressure often look like model failures.
- **The ratchet**: Every observed mistake should become a durable rule, hook, test, or review check so it does not recur.
- **Earned instructions**: `AGENTS.md` should be a short pilot checklist. Every rule needs a real failure behind it.
- **Hooks enforce**: Block destructive commands, autoformat, run tests, and inject failures while keeping passing checks quiet.
- **Harness APIs**: Runtimes that ship loops, tools, context management, hooks, sandboxes, and orchestration. Harnesses do not vanish as models improve.
