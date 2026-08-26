---
title: Lauren Tan's Trust Curve for Coding Agents
source: https://x.com/SPCX100T/status/2092439247672496447
saved: 2026-08-26
type: tweet
tags:
  - coding-agents
  - harness-engineering
  - verification-and-ci-integration
  - agent-skills
  - multi-agent
---

Lauren Tan explains how strict constraints, runtime verification, and evaluated skills move coding agents from supervised pair programmers toward trusted cloud automation.

## Key takeaways

- **Trust curve**: Start with local, observable agent runs and expand autonomy only after repeated evidence supports cloud execution and automatic merging.
- **Executable constraints**: Linters, CI failures, import boundaries, and compiler-enforced invariants guide agents more reliably than prose conventions or repeated review comments.
- **Runtime proof**: A passing build is insufficient; agents need product-specific controls to reproduce bugs, exercise changed behavior, and capture traces or other evidence.
- **Skill evaluation**: Reusable playbooks should be tested with blinded tasks, separate judge agents, and cross-model comparisons so prompt changes improve measured behavior rather than anecdotes.
- **Agent-friendly architecture**: Co-located features and convention-driven structure reduce ambiguity by making the shortest implementation path the correct one.
- **Economic tradeoff**: Generation speed shifts effort into review, verification, and occasional refactoring, so teams should judge automation by total reliability and return on token cost.
- **Human role**: Agents absorb repetitive implementation pain, but engineers still choose goals, encode standards, inspect evidence, and decide how much autonomy has been earned.
