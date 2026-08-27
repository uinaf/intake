---
title: "AutoGen: Human-in-the-Loop"
source: https://microsoft.github.io/autogen/0.2/docs/tutorial/human-in-the-loop
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-primitives
  - human-in-the-loop
  - docs
---

AutoGen docs for inserting a human review node: `human_input_mode` set to NEVER, TERMINATE, or ALWAYS, with UserProxyAgent as the approval gate.

## Key takeaways

- **Input modes**: `human_input_mode` is NEVER, TERMINATE, or ALWAYS.
- **Approval gate**: UserProxyAgent is the concrete approval-gate agent.
- **HITL reference**: The note calls this the most concrete implementation reference for human review nodes in a multi-agent conversation harness.
