---
title: "IETF draft-klrc-aiagent-auth: AI Agent Authentication and Authorization"
source: https://datatracker.ietf.org/doc/draft-klrc-aiagent-auth
saved: 2026-04-12
type: paper
tags:
  - harness-engineering
  - agent-security
  - design-engineering
---

The first IETF standards-track spec for AI agent authentication (March 2026), from authors at AWS, OpenAI, Zscaler, Ping Identity, and Defakto Security.

## Key takeaways

- **Existing protocols**: Builds on WIMSE and OAuth 2.0 rather than inventing new protocols.
- **SPIFFE-style IDs**: Agents get SPIFFE-style identifiers.
- **Delegation**: Delegation via OAuth Token Exchange, with DPoP for token binding.
- **Cross-domain auth**: Essential for any harness that needs to authenticate agents across trust domains.
