---
title: Building a Self-Driving Codebase | Forward Planning
source: https://youtube.com/live/W3Om-ePVpqs?si=cBuT3J_v-xJ0MGO6
saved: 2026-04-01
type: video
tags:
  - ai-agents
  - coding-agents
  - codebase-architecture
  - effect-ts
  - docs
  - video
intaked_by: glitch418x
---

A discussion about what it takes to make a codebase “self-driving” for agentic engineering — not by making agents smarter, but by making the repo stricter, more explicit, and harder to silently degrade.

## Key takeaways

- Core thesis: agentic coding scales only if the codebase itself constrains bad decisions. Otherwise agents accumulate lots of small “acceptable” choices that compound into entropy and painful refactors.
- Explicitness beats magic: they argue for using Effect-style structure so dependencies, control flow, and failures are visible in types/signatures rather than hidden in ambient runtime behavior.
- Hard enforcement matters: conventions should be machine-enforced with AST-based checks, not left as style-guide suggestions. Warnings get ignored; failing builds change behavior.
- Documentation should be coupled to code changes: they describe a docs-linking/anchoring approach where markdown references code locations/symbols, and changed code forces revalidation so docs cannot quietly drift stale.
- The real goal is not “let agents code faster,” but “make the system legible enough that large agent-produced diffs can be reviewed at the module/interface level instead of line-by-line panic.”

## Why it matters

- Good frame for evaluating whether a repo is actually ready for coding agents.
- Reinforces the idea that environment/harness/constraints matter as much as model quality.
- Useful reference for OpenClaw / agent tooling discussions around repo readiness, verification, and anti-entropy guardrails.

## Memorable line

- You can ship really fast with agents, but if you are not careful, they will make the wrong choices and those choices will quickly compound.
