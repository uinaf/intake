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

By Gergely Orosz (The Pragmatic Engineer), Mar 10 2026. Based on a Pragmatic Summit talk by Uber's principal engineer Ty Smith and engineering director Anshu Chada.

## Key Numbers (March 2026)

- **84% of devs** are agentic coding users (CLI agents or agentic IDE requests)
- **65-72% of code** is AI-generated inside IDE tools
- **Claude Code usage nearly doubled** in 3 months (32% Dec → 63% Feb), while IDE tools plateaued
- **11% of PRs** opened by AI bots
- **92% of devs** use agents monthly
- **~4 hours saved/week** per engineer (self-reported)
- **AI costs up 6x** since 2024 — token cost optimization is a growing priority
- **32% are "power users"** (20+ days/month) — they generate +30% more PRs vs non-power users
- **NPS at all-time high** of 10.9 (up from -3 a year ago)

## Agentic System Architecture (4 Layers)

1. **Internal AI platform** — built on Michelangelo (Uber's ML/AI platform), provides model gateway to frontier/internal models
2. **Internal Uber context** — source code, eng docs, Slack, JIRA as "memory" for agents
3. **Industry agents** — Claude Code, GitHub Copilot, Codex, other clients (latest & greatest)
4. **Specialized agents** — Minion (background), test generation, code review, migrations

## Internal Tools Built

### MCP Gateway
- Central gateway proxying internal Thrift/Protobuf/HTTP endpoints as MCP servers
- First-party + third-party MCPs through single interface
- Handles auth, telemetry, logging centrally
- Includes registry for discovery + sandbox for experimentation

### AIFX CLI
- Single CLI for all AI tooling: provisions agents, finds MCP servers, runs background tasks, updates tools
- Solves: version management, default configs, MCP discovery, infra connection

### Minion (Background Agent Platform)
- Web, Slack, GitHub PR, and code review interfaces
- Has monorepos pre-checked-out and ready
- Internal infra access via MCP + AIFX CLI
- Optimized defaults (compiling, tools installed, Claude.md)
- **Prompt improvement** — analyzes prompts and rewrites for higher success rate
- **70% of workloads are toil** (migrations, upgrades, bug fixes) — higher accuracy = virtuous cycle
- Opens co-authored PRs with the developer who kicked it off

### Code Inbox
- Smart PR routing to reduce review noise
- Signals: ownership, compliance, history, timezone, calendar availability
- SLOs for response times, auto-reassign, escalation
- **Risk profiles** — highlights high-impact changes (tier 0-3 services, multi-service changes)

### uReview (AI Code Review)
- Multiple specialized bots (general defect, best practices, MCP-based)
- Comments graded, low-confidence filtered, merged, categorized
- Quality > quantity — worst thing is noisy low-quality comments
- Devs rate usefulness of AI comments → feedback loop
- Bot comments ~1:4 ratio vs human comments, trending down (quality focus)

### Autocover (Test Generation)
- 5,000+ unit tests/month generated
- 3x higher quality than external vendors
- Built "critique engine" for test validation — became its own service

### AutoMigrate + Shepherd (Large-Scale Migrations)
- Problem identification → code transformation (Piranha, OpenRewrite, agents) → validation → migration management
- Shepherd: generates PRs, routes reviews, tracks status
- Uses Minion for actual code generation

## Developer Workflow Evolution

1. **Pre-AI**: plan → code in IDE → review
2. **Early agentic**: single-threaded agent interaction, approving plans
3. **Current**: orchestrating multiple parallel agents — "kicking off agents while waiting for others"

## Challenges

- **AI adoption slower than expected** — even at Uber. Top-down mandates less effective than engineers sharing wins with peers
- **Leading vendors change fast** — build vs buy needs regular re-evaluation
- **Internal AI infra is long-running investment** — build right abstractions, don't get overly wed to systems
- **Integrating AI with legacy systems** is tricky — MCP + archaic systems was underestimated
- **Cost justification** — CFO wants revenue impact, not activity metrics. Working on instrumenting feature-to-production pipeline velocity
- **Role shift** — everyone is becoming at least a tech lead (planning, reviewing, orchestrating vs writing code)

## Key Insights

- Engineers naturally gravitate to multi-agent workflows — "might as well kick off another agent"
- More AI-generated code = more code reviews = need for smart routing/filtering
- Toil is the ideal entry point — accuracy is higher for well-defined start/end state tasks
- Sharing wins between engineers is the most effective adoption tactic
- Token cost optimization is becoming a real discipline — right model for the right job (expensive for planning, cheap for execution)
