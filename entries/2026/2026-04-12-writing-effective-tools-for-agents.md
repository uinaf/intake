---
title: Anthropic - Writing Effective Tools for Agents
source: https://www.anthropic.com/engineering/writing-tools-for-agents
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - tools
  - anthropic
  - ai-agents
---

Anthropic's case that tool design is agent UX. Bad names, sloppy schemas, and mushy errors create failure modes no prompt can clean up.

## Key takeaways

- **Tool UX**: Names, schemas, and error messages are the interface; prompt tweaks cannot rescue a muddy tool.
- **Narrow interfaces**: The right tool is explicit and easy to recover from. Ambiguous tools force the model to invent intent and state.
- **Failure surfaces**: Time spent on examples and failure modes pays back more than further prompt editing.
