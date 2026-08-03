---
title: "Port.io: Jira → GitHub Copilot Pipeline"
source: https://docs.port.io/guides/all/automatically-resolve-tickets-with-coding-agents
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

Fully automated workflow:
1. Jira ticket moves from "To Do" → "In Progress" (with `copilot` label)
2. Port AI enriches ticket with catalog context (services, dependencies, deployment state, incidents, vulnerabilities)
3. Creates GitHub issue with AI-generated context
4. Triggers GitHub Actions workflow to assign issue to GitHub Copilot
5. Links PR back to Jira when Copilot opens it
6. Failure handling: comments on Jira if AI context extraction fails

Key detail: the AI enrichment step queries the Port catalog for related services, deployment environments, PagerDuty incidents, security vulnerabilities — giving Copilot rich organizational context beyond just the ticket text.
