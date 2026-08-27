---
title: How PostHog Scaled Engineering Output with Agentic Automation
source: https://x.com/posthog/status/2083231950744244360
saved: 2026-08-02
type: tweet
tags:
  - coding-agents
  - developer-experience
  - code-review
  - testing
  - automation
---

PostHog's monthly PRs rose from 1,441 in January 2026 to 4,725 in June while headcount grew about 10%. The 10,000-PR goal is a way to force local env, CI, review, and validation to keep up with agents.

## Key takeaways

- **Agent share**: Agents opened about 70% of monorepo PRs by June, up from roughly 20% four months earlier. The gain is loops that rebase, repair CI, and act on review, not just faster typing.
- **Human bottleneck**: Engineers manage dozens of concurrent PRs with custom review tools. Cloud machines boot the stack, exercise a PR, and return visual evidence.
- **Selective CI**: 21.6 million CI minutes in June pushed flaky-test quarantine, change-aware selection, merge queues, faster databases, and workflow-cost analytics.
- **StampHog**: Deterministic safety checks plus an LLM review approve about 20% of PRs for roughly $300 a month and escalate the rest.
- **Weak north star**: Stable PR-type and revert mixes are internal proxies, not independent quality proof. PR count itself is a poor goal.
- **Next loop**: Agents should navigate the UI, judge whether a change works, attach screenshots or video, and escalate ambiguity. Otherwise, faster pull requests only move the queue.
