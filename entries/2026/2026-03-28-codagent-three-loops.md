---
title: "Codagent: Three Nested Loops"
source: https://codagent.beehiiv.com/p/slot-machines-and-safety-nets
saved: 2026-03-28
type: article
tags:
  - harness-engineering
  - agentic-sdlc
  - three-loops
  - evaluator-pattern
---

Codagent frames harness engineering as three nested loops: project governance, feature planning, and task-level verify-and-iterate.

## Key takeaways

- **Three loops**: The outer loop captures intent and architecture. Orchestration turns a PRD into design and tasks. The inner loop codes, verifies, and uses independent reviewer subagents.
- **Case studies**: OpenAI's 1M-LOC project is the outer loop. MetaGPT's doc pipeline is orchestration. Superpowers' TDD and reviewer subagents are the inner loop.
- **Noted gaps**: MetaGPT lacks human approval gates. Superpowers' prompt-based enforcement can fail on context overflow and has no hard gates.
- **Planning artifacts**: No agent can code into a corner if it cannot start until planning documents exist.
