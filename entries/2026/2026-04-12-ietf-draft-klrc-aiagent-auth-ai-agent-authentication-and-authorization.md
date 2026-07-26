---
title: "IETF draft-klrc-aiagent-auth: AI Agent Authentication and Authorization"
source: https://datatracker.ietf.org/doc/draft-klrc-aiagent-auth
saved: 2026-04-12
type: paper
tags:
  - harness-engineering
  - agent-security
  - design-engineering
intaked_by: glitch418x
---

## Why it matters
The first IETF standards-track specification for AI agent authentication (March 2026, authors from AWS, OpenAI, Zscaler, Ping Identity, Defakto Security). Builds on WIMSE (Workload Identity in Multi-System Environments) and OAuth 2.0 rather than inventing new protocols — agents get SPIFFE-style identifiers, with delegation via OAuth Token Exchange and DPoP for token binding. Essential reference for any harness that needs to authenticate agents across trust domains.

## Classification
- Section: Design Primitives
- Subsection: Permissions & Authorization
- Type: article/reference
