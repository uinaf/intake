---
title: Vercel's AI SDK software factory
source: https://vercel.com/blog/building-a-software-factory-for-ai-sdk
saved: 2026-08-14
type: article
tags:
  - agentic-sdlc
  - coding-agents
  - workflows
  - automation
  - human-in-the-loop
  - agent-security
  - code-review
---

Vercel describes a production software factory for AI SDK that scales reviewer attention with task-specific agents, evidence chains, sandboxing, and risk-based human review rather than autonomous merging.

## Key takeaways

- **Reviewer bottleneck**: Adding coding agents does not remove the scarce resource when every change still consumes maintainer attention, so the factory optimizes the evidence a reviewer receives.
- **Task decomposition**: Separate classifier, analyzer, implementer, reviewer, documentation, and backport agents each carry narrow prompts, context, and evals, reducing the maintenance burden of one skill-heavy agent.
- **Evidence chain**: A change progresses from classification through a reproducing probe, scoped specification, implementation, live test, automated risk review, and finally human review and merge.
- **Risk-based control**: Documentation fixes may need a glance, provider changes focused validation, and public APIs deep review; a human remains accountable for every merge.
- **Hostile inputs**: Issues, pull requests, comments, and linked content are treated as attacker-controlled, with per-task sandboxes, least-privilege secrets, restricted network egress, and human approval.
- **Incremental rollout**: The team proved agents locally through a CLI before moving reliable steps to queues, sandbox workers, durable storage, webhooks, and a monitoring interface.
- **Reported results**: After roughly four weeks, Vercel says factory agents authored 25–35% of merged weekly PRs, closed more than 75% of July issues, and reduced open issues from 1,022 to 844; these are vendor-reported operational figures.
- **Factory feedback**: Flawed, blocked, and intentionally manual runs become prompt, context, eval, provisioning, or policy improvements that gradually expand the trusted automation boundary.
