---
title: How I Decide When I Should Use Claude or GPT or Something Else...
source: https://www.youtube.com/watch?v=PnavRnhuC68
saved: 2026-08-16
type: video
tags:
  - coding-agents
  - harness-engineering
  - multi-agent
  - codex
  - claude-code
---

Ben Davis explains how he routes coding work across models and harnesses by prompt ambiguity, required code quality, task horizon, and verifiability rather than treating one model as universally best.

## Key takeaways

- **Routing axes**: The useful choice is not simply Claude versus GPT; it depends on how precisely the task can be specified and whether the output is disposable problem-solving or production code that must remain maintainable.
- **Ambiguity handling**: Davis prefers models with stronger taste and intent inference for vague, long-running product work, while using more literal models for tightly scoped, verifiable tasks and general computer operation.
- **Task horizon**: Small interpretation errors compound over long agent runs, so models that reliably execute short changes may still produce the wrong system after hours of otherwise competent work.
- **Harness boundaries**: Lint rules, checks, skills, and guardrails act as corrective walls that keep an agent near the intended path, but they cannot fully compensate for a poorly inferred destination.
- **Agent orchestration**: His custom Pi setup delegates to Codex and Claude Code agents, using one model to plan, review, or supervise another instead of expecting every model to perform every role equally well.
- **Open-weight tradeoff**: Local and open-weight models can be cheap, fast, and less constrained for security testing, but in his experience they require more examples and direction and remain less reliable over long horizons.
- **Snapshot caveat**: The named model rankings reflect one heavy user's August 2026 workflow and are expected to age quickly; the routing framework is more durable than the specific winners.
