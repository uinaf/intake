---
title: "Ranking Engineer Agent (REA): Meta's Autonomous AI System for Ads Ranking"
source: https://engineering.fb.com/2026/03/17/developer-tools/ranking-engineer-agent-rea-autonomous-ai-system-accelerating-meta-ads-ranking-innovation
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - foundations
  - context-engineering
  - tools
  - workflows
  - meta
---

Meta's production harness for multi-day ML pipeline automation with hibernate-and-wake checkpointing for resuming interrupted 6-hour tasks.

## Key takeaways

- **Multi-day automation**: Production harness for multi-day ML pipeline automation.
- **Hibernate and wake**: Hibernate-and-wake checkpointing for resuming interrupted 6-hour tasks without losing context.
- **Beyond context limits**: Individual turns can exceed model context limits, but the overall pipeline must maintain coherence across days.
- **Foundations reference**: Useful as a foundations reference when building or auditing agent scaffolding.
