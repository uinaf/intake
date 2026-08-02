---
title: Intent (Augment Code) — Spec-Driven Development Demo
source: https://youtube.com/watch?v=Ednpn1mjKiY
saved: 2026-03-28
type: video
tags:
  - agentic-sdlc
  - spec-driven
  - tools
  - figma
  - agent-architecture
---

# Intent: Spec-Driven Development in Practice

1-hour demo by Sam Breed. First product shipping the full planner → builder → verifier loop as a UI.

## Agent Roles
- **Coordinator**: plans work, breaks into tasks, delegates to implementers
- **Implementers**: execute coding tasks in parallel
- **Verifier**: reviews generated code for correctness and spec adherence
- **Developer**: combined plan+implement for simpler tasks

## Workflow
1. Figma MCP pulls design tokens, colors, typography, layout into agent context
2. Human writes high-level plan/spec
3. Coordinator delegates to parallel implementers
4. Verifier checks output
5. Human reviews, iterates on remaining 5%

## Results
- Figma comp → 95% functional website in ~45 minutes (vs days)
- Git worktrees for parallel agent work
- Supports monorepos and internal coding standards via config files

## Model Notes
- Claude preferred for tool-calling (semi-autonomous agent workflows)
- GPT 5.4 praised for speed and accuracy
- Newer models simplify workflows that previously needed multiple models per role

## Relevance
- First product with coordinator/implementer/verifier as built-in UI, not a custom script
- IDE-specific (Mac only, Intent by Augment Code)
- Verifier is still same-platform review, not true adversarial evaluation
