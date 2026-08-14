---
title: Stripe Minions — One-Shot Unattended Coding Agents (1300+ PRs/week)
source: https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents
saved: 2026-03-24
type: article
tags:
  - coding-agents
  - harness-engineering
  - stripe
  - blueprints
  - infrastructure
---

Stripe's Minions are one-shot unattended coding agents that start from a Slack message and end at a human-reviewed PR. They merge 1,300+ agent-produced PRs per week on infrastructure originally built for humans.

## Key takeaways

- **Isolated devboxes**: AWS EC2 instances pre-loaded with the codebase spin up in about 10 seconds from a warm pool. They are isolated from production, have no real user data or internet, and were built for humans years before LLMs.
- **Hybrid blueprints**: Blueprints mix deterministic nodes such as linters and PR templates with agentic nodes that implement work or fix CI. Deterministic steps save tokens and remove failure modes at hundreds of runs per day.
- **Scoped rule files**: Rules attach by subdirectory and file pattern as the agent traverses the filesystem. The same Cursor-format rules are shared by Minions, Cursor, and Claude Code.
- **Curated Toolshed**: A centralized MCP server with about 500 tools is subsetted per agent. Relevant tools are run over likely links before the agent starts.
- **Layered feedback**: Local lint under five seconds, then selective CI from a 3M+ test battery with autofixes, then a hard cap at two CI rounds before handing back to a human.
- **Partial success**: A not-entirely-correct run is still often an excellent starting point. An engineer polishing in 20 minutes beats waiting for indefinite retries.
- **Human-first infrastructure**: Investments in human developer productivity returned dividends for agents. Contained boxes compound into system-wide reliability.
- **Retry discipline**: Knowing when to stop is as important as knowing how to start. After the second push, diminishing returns and CI cost make a cap intentional.
