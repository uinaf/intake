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
intaked_by: glitch418x
---

## Why it matters
A composable coding-agent harness built on Deep Agents, synthesizing design patterns from Stripe, Ramp, and Coinbase production deployments. Key decisions: curated ~15-tool limit enforced at harness design time, one isolated sandbox (Modal/Daytona/Runloop/LangSmith) per task, AGENTS.md for injecting repo-wide conventions, and Linear/Slack task context in the system prompt. The most recent published reference for what a production internal coding agent harness looks like.

## Classification
- Section: Reference Implementations
- Subsection: Demo Harnesses
- Type: article
