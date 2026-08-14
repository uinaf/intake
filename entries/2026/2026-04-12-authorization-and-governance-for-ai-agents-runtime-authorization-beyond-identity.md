---
title: "Authorization and Governance for AI Agents: Runtime Authorization Beyond Identity at Scale"
source: https://techcommunity.microsoft.com/blog/microsoft-security-blog/authorization-and-governance-for-ai-agents-runtime-authorization-beyond-identity/4509161
saved: 2026-04-12
type: article
tags:
  - agent-security
  - design-engineering
---

Microsoft Security's Authorization Fabric puts a PEP and PDP in front of every tool call, returning ALLOW, DENY, REQUIRE_APPROVAL, or MASK instead of treating identity as enough.

## Key takeaways

- **Authorization fabric**: A Policy Enforcement Point and Policy Decision Point sit behind a Microsoft Entra-protected endpoint.
- **Pre-tool check**: Every agent calls the fabric before tool execution.
- **Four decisions**: The deterministic answers are ALLOW, DENY, REQUIRE_APPROVAL, and MASK.
- **Beyond identity**: Knowing who the agent is does not answer whether this action should run now, for this user, under current business and regulatory context.
