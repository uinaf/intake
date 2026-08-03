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

- Tool design is agent UX. Bad names, sloppy schemas, and mushy error messages create failure modes no prompt can clean up.
- The right interface is narrow, explicit, and easy to recover from. Ambiguous tools force the model to hallucinate intent and state.
- If a tool is important, spend time on examples and failure surfaces. This pays back more than prompt tweaking.
