---
title: "Port.io: Jira → GitHub Copilot Pipeline"
source: https://web.archive.org/web/20260312103121/https://docs.port.io/guides/all/automatically-resolve-tickets-with-coding-agents/
saved: 2026-03-28
type: article
tags:
  - ai-agents
  - sdlc
  - spec-driven-development
  - coding-agents
  - automation
  - devops
---

A Port.io guide, now archived, automates Jira-to-Copilot: labeled tickets are enriched from a software catalog, then assigned to GitHub Copilot.

## Key takeaways

- **Trigger path**: A Jira ticket moving to In Progress with a copilot label starts the pipeline.
- **Catalog enrichment**: Port AI adds services, dependencies, deployments, incidents, and vulnerabilities before creating a GitHub issue.
- **Closed loop**: GitHub Actions assigns Copilot. The PR is linked back to Jira. Failures comment on the ticket.
- **Archive note**: The original guide was removed from docs.port.io.
