---
title: "How Uber Uses AI for Development: Inside Look"
source: https://newsletter.pragmaticengineer.com/p/how-uber-uses-ai-for-development
saved: 2026-03-28
type: article
tags:
  - ai-agents
  - coding-agents
  - uber
  - developer-experience
  - infrastructure
  - sdlc
  - devtools
---

A March 2026 Pragmatic Engineer write-up of Uber's AI stack: most engineers use agents, most IDE code is AI-generated, and internal tools now cover review, tests, migrations, and background work.

## Key takeaways

- **Adoption numbers**: 84% of developers use agentic coding; 65–72% of IDE code is AI-generated; Claude Code usage nearly doubled in three months while IDE tools plateaued.
- **Four-layer stack**: An internal platform and Uber context sit under industry agents and specialized agents for background work, tests, review, and migrations.
- **Internal tooling**: MCP Gateway, AIFX CLI, Minion, Code Inbox, uReview, Autocover, and AutoMigrate/Shepherd centralize access, routing, review, tests, and large migrations.
- **Minion platform**: Background agents run against pre-checked-out monorepos, rewrite prompts for higher success, and open co-authored PRs; about 70% of workloads are toil.
- **Review quality**: uReview filters low-confidence comments and rates usefulness; noisy comments are treated as worse than missing ones.
- **Workflow shift**: Teams moved from single-threaded agent chat to orchestrating multiple parallel agents.
- **Adoption friction**: Peer-shared wins beat top-down mandates; token cost rose 6x since 2024; finance wants production-velocity proof, not activity metrics.
- **Toil first**: Well-defined start/end tasks are the highest-accuracy entry point, and more AI code increases the need for smart review routing.
