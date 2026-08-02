---
title: Autoresearch Pattern Applied to Coding Skills
source: https://dev.to/zerocopy/karpathys-autoresearch-improving-agentic-coding-skills-3941
saved: 2026-03-28
type: research
tags:
  - autoresearch
  - skills
  - self-improving
  - agentic-sdlc
---

# Autoresearch for Coding Skills

Applying the autoresearch loop to improve an agentic coding harness itself.

## The Loop
1. Take current SKILL.md / harness config
2. Apply one bounded change
3. Run multiple test cases to reduce noise
4. Aggregate results (correctness, token usage, execution time, errors, self-corrections)
5. If improved → keep, else → revert
6. Repeat

## Scoring
- Binary correctness dominates (code matches reference or not)
- Only after maximizing correctness do time and cost become deciding factors
- Multiple test cases run repeatedly to reduce noise

## Open Challenges
- Defining comprehensive test cases
- Setting modification boundaries (how much can the agent change?)
- Encouraging exploration of design space (sub-agents, memory, tooling)
- Deciding when to integrate vs build new tools

## Connection
This is literally "an agent improving the instructions other agents follow." Meta-autoresearch. The harness improving itself.
