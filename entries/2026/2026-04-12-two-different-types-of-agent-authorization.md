---
title: Two Different Types of Agent Authorization
source: https://blog.langchain.com/two-different-types-of-agent-authorization
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-primitives
  - permissions-and-authorization
  - article
---

LangChain distinguishes on-behalf-of authorization from fixed-credential authorization. The two models have different threat surfaces and decide where the harness enforces access.

## Key takeaways

- **On-behalf-of**: The agent uses end-user credentials, which requires cross-channel identity mapping and per-user memory isolation.
- **Fixed credentials**: The agent owns its own account, so high-risk actions need human-in-the-loop guardrails.
- **Threat surfaces**: The models are not interchangeable; they determine where authorization enforcement lives in the harness.
