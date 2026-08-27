---
title: "HumanLayer: Skill Issue: Harness Engineering for Coding Agents"
source: https://humanlayer.dev/blog/skill-issue-harness-engineering-for-coding-agents
saved: 2026-03-28
type: article
tags:
  - harness-engineering
  - agentic-sdlc
  - context-engineering
---

HumanLayer's thesis is that the model is probably fine and failures are a skill issue: context firewalls, hand-crafted instructions, and verification back-pressure.

## Key takeaways

- **Context firewalls**: Sub-agents isolate tasks to prevent context rot. They are not just extra workers.
- **Hand-crafted instructions**: Auto-generated AGENTS.md files perform worse than hand-crafted ones.
- **CLI over MCP sprawl**: Too many MCP tools bloat context. Use CLIs directly and load skills only when needed.
- **Failure-driven harness**: Hooks and verification tools should surface only failures. Start simple and add config when failures occur.
