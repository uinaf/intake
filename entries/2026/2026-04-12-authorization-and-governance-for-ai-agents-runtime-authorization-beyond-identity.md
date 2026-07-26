---
title: "Authorization and Governance for AI Agents: Runtime Authorization Beyond Identity at Scale"
source: https://techcommunity.microsoft.com/blog/microsoft-security-blog/authorization-and-governance-for-ai-agents-runtime-authorization-beyond-identity/4509161
saved: 2026-04-12
type: article
tags:
  - agent-security
  - design-engineering
intaked_by: glitch418x
---

## Why it matters
Microsoft Security's reusable Authorization Fabric combining a Policy Enforcement Point (PEP) and Policy Decision Point (PDP) as a Microsoft Entra-protected endpoint. Every agent calls this fabric before tool execution, receiving a deterministic decision: ALLOW / DENY / REQUIRE_APPROVAL / MASK. Addresses the gap that identity alone (who is this agent?) doesn't answer whether a specific action should be executed now, by this agent, for this user, under the current business and regulatory context.

## Classification
- Section: Design Primitives
- Subsection: Permissions & Authorization
- Type: article/reference
