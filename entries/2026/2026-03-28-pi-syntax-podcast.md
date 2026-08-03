---
title: Pi (Syntax Podcast) — Minimalist Agent Harness Philosophy
source: https://youtube.com/watch?v=AEmHcFH1UgQ
saved: 2026-03-28
type: video
tags:
  - pi
  - agent-harness
  - minimalism
  - security
---

## Pi on Syntax — Armin Ronacher + Mario Zechner

## Core Philosophy
- "Pi is a while loop that calls an LM with four tools. That's it."
- "Bash is all you need."
- Sub-agents are overhead. One agent, one context, compaction when needed.

## Key Takes
- MCP is inefficient — passes all data through context window. Bash pipes are better.
- Memory for coding is unnecessary — codebase IS the ground truth
- Agent tools should be shell scripts, self-modifiable, hot-reloadable
- Security is unsolved — Pi has NO permission system. Prompt injection is an open problem.
- Simpler harness = model upgrades give you free improvements
- Complex harness = model upgrades might break your assumptions

## Real-World Usage
- Armin's wife (linguist): data transformation + stats without coding
- Calendar event extraction from school PDFs
- Scientific data processing

## Adoption Reality
Most people lack the conceptual framework to use agents. Like iPhone Shortcuts — powerful, nobody uses them.
