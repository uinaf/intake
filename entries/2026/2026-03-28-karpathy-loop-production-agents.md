---
title: Implementing Karpathy Loops for Production Coding Agents (Backbeat)
source: https://earezki.com/ai-news/2026-03-22-the-first-karpathy-loop-for-production-coding-agents
saved: 2026-03-28
type: article
tags:
  - autoresearch
  - agentic-sdlc
  - tools
  - self-improving
---

# Karpathy Loop for Production Coding Agents

Backbeat v0.7.0 implements the autoresearch pattern for real coding work.

## Two Strategies
1. **Retry** — reruns tasks until shell command returns exit code 0 (e.g., fix tests until they pass)
2. **Optimize** — uses eval scripts to track/improve metrics across iterations (e.g., minimize bundle size, maximize coverage)

## Safety Controls
- Max 10 iterations or 3 consecutive failures
- Clean agent context each iteration (no error carry-over)
- MCP server integration

## Practical Examples
- Flaky test repair: loop until tests pass
- Bundle size reduction: score each iteration, keep if smaller
- Test coverage: iterate until threshold met

## Key Limitation
Works for measurable things. "Make the UX better" doesn't have an exit code.
