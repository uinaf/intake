---
title: Building a Self-Driving Codebase | Forward Planning
source: https://youtube.com/live/W3Om-ePVpqs
saved: 2026-04-01
type: video
tags:
  - ai-agents
  - coding-agents
  - codebase-architecture
  - effect-ts
  - docs
  - video
---

A discussion of what makes a codebase self-driving for agents: not smarter models, but a stricter repo that is explicit, machine-enforced, and hard to silently degrade.

## Key takeaways

- **Constraint thesis**: Agentic coding scales only if the codebase constrains bad decisions; otherwise small acceptable choices compound into entropy and painful refactors.
- **Explicitness**: Prefer Effect-style structure so dependencies, control flow, and failures are visible in types and signatures rather than hidden in ambient runtime behavior.
- **Hard enforcement**: Conventions should be machine-enforced with AST checks; warnings get ignored, while failing builds change behavior.
- **Coupled docs**: Markdown that anchors to code locations and symbols should revalidate when those symbols change, so docs cannot drift quietly.
- **Reviewable diffs**: The goal is not faster coding; it is a system legible enough that large agent diffs can be reviewed at module and interface level.
- **Compounding risk**: You can ship fast with agents, but the wrong choices compound quickly if you are not careful.
