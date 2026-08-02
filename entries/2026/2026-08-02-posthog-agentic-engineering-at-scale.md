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

PostHog reports that its monthly pull-request volume rose from 1,441 in January 2026 to 4,725 in June while engineering headcount grew by roughly 10%. Its stated goal of making 10,000 PRs per month routine is less about maximizing PR count than forcing the surrounding developer system—local environments, CI, review, and validation—to scale with agent-generated work.

## Key takeaways

- Agents reportedly opened about 70% of monorepo PRs by June, up from roughly 20% four months earlier. The larger gain comes from agentic loops that keep branches current, repair CI, and act on review feedback, not merely from faster code generation.
- Human attention becomes the binding constraint. PostHog describes engineers managing dozens of concurrent PRs with custom review and PR-management tools, while cloud dev machines let agents boot the heavy stack, exercise a PR, and return visual evidence.
- CI must become selective at this volume. PostHog says it consumed 21.6 million CI minutes in June and is investing in flaky-test quarantine, change-aware test selection, merge queues, faster database setup, and analytics over GitHub workflow cost and failure data.
- StampHog combines deterministic safety checks with an LLM review and reportedly approves 20% of PRs for about $300 per month, escalating riskier changes to people. The broader principle is to automate routine review so humans can focus on whether a change is understood, safe, and valuable.
- PostHog points to stable PR-type and revert distributions as evidence that higher throughput has not obviously harmed reliability, but these are internal proxies rather than independent proof of quality. PR count itself remains a weak north-star metric.
- The next bottleneck is behavioral testing: agents should navigate the actual UI, judge whether a change works as claimed, produce screenshots or video, and escalate ambiguity. Without that verification loop, faster PR creation only moves the queue to human reviewers.
