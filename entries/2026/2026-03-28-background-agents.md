---
title: "The Self-Driving Codebase: Background Agents"
source: https://background-agents.com/
saved: 2026-03-28
type: article
tags:
  - ai-agents
  - background-agents
  - coding-agents
  - sdlc
  - infrastructure
  - devops
---

A survey of background-agent practice argues the difference from CI is step-by-step decision-making, and that hierarchy, isolated compute, and a tolerated error rate are what scale.

## Key takeaways

- **Decision-making agents**: Background agents reason at each step, reading context, generating fixes, and explaining changes, unlike scripts that only execute.
- **Hierarchy over coordination**: Cursor's research found equal-role agents collapse under lock contention. What works is a root planner, recursive subplanners, and isolated workers.
- **Tolerated error rate**: Requiring 100% correctness before every commit serializes work. Letting agents fix each other's errors is more efficient.
- **Three infrastructure pillars**: Isolated compute, event routing, and governance covering permissions, audit, blast radius, and human review are non-negotiable.
- **On the loop**: Developers design constraints, architecture, and review depth rather than writing every line.
- **Constraints over instructions**: Quantified rules such as no TODOs outperform vague reminders.
- **Standardized environments**: Stripe, Ramp, and Ona had cloud-standardized environments before agents. Local worktrees break immediately with parallel agents in monorepos.
- **Production volume**: Stripe Minions merge 1,000+ agent-authored PRs per week. Ramp's Inspect accounts for 57% of merged PRs. Ona reached 88.5% agent-authored PRs on main.
