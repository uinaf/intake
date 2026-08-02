---
title: Martin Fowler — Harness Engineering in AI-Assisted Delivery
source: https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html
saved: 2026-03-28
type: article
tags:
  - harness-engineering
  - agentic-sdlc
  - architecture
---

# Harness Engineering (Fowler)

- Harnesses will become the new "service templates" — standardized per stack, adapted per team
- OpenAI's 1M+ LOC project: the team's main job was designing the environment, not writing code
- "Garbage collection" agents detect architectural violations and code decay
- When agents struggle, treat it as a signal: identify missing tools/guardrails/docs, have the agent write the fix
- Legacy codebases will be hard to retrofit with harnesses
- May lead to convergence on fewer tech stacks optimized for "AI-friendliness" over developer preference
- Biggest challenges: designing environments, feedback loops, and control systems — not generating code
