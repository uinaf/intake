---
title: "Open SWE: An Open-Source Framework for Internal Coding Agents"
source: https://blog.langchain.com/open-swe-an-open-source-framework-for-internal-coding-agents
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - reference-implementations
  - demo-harnesses
  - article
---

A composable coding-agent harness built on Deep Agents, synthesizing design patterns from Stripe, Ramp, and Coinbase production deployments.

## Key takeaways

- **Production synthesis**: Composable coding-agent harness built on Deep Agents, synthesizing design patterns from Stripe, Ramp, and Coinbase production deployments.
- **Curated tool limit**: A curated ~15-tool limit enforced at harness design time.
- **Isolated sandbox per task**: One isolated sandbox (Modal, Daytona, Runloop, or LangSmith) per task.
- **Repo and task context**: AGENTS.md for repo-wide conventions, and Linear/Slack task context in the system prompt.
- **Recent reference**: The most recent published reference for what a production internal coding agent harness looks like.
