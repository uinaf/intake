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

## Why it matters
Distinguishes on-behalf-of authorization (agent uses end-user credentials, requires cross-channel identity mapping and per-user memory isolation) from fixed-credential authorization (agent owns its own account, requires human-in-the-loop guardrails on high-risk actions). The two models have fundamentally different threat surfaces and determine where authorization enforcement lives in the harness.

## Classification
- Section: Design Primitives
- Subsection: Permissions & Authorization
- Type: article/reference
