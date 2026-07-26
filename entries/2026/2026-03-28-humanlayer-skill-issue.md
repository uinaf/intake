---
title: "HumanLayer — Skill Issue: Harness Engineering for Coding Agents"
source: https://humanlayer.dev/blog/skill-issue-harness-engineering-for-coding-agents
saved: 2026-03-28
type: article
tags:
  - harness-engineering
  - agentic-sdlc
  - context-engineering
intaked_by: glitch418x
---

# Skill Issue (HumanLayer)

- "The model is probably fine. It's just a skill issue."
- Sub-agents are **context firewalls**, not workers — isolate tasks to prevent context rot
- Auto-generated AGENTS.md files **perform worse** than hand-crafted ones
- Too many MCP tools bloat context and degrade performance — use CLIs directly
- Skills = progressive disclosure. Load instructions only when needed.
- Hooks = automated verification at lifecycle events (typecheck after each step, surface only errors)
- Back-pressure mechanisms: verification tools that surface only failures to keep context clean
- "Start simple, add harness configs only when failures occur"
