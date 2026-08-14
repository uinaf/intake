---
title: Thoughts on slowing the fuck down
source: https://mariozechner.at/posts/2026-03-25-thoughts-on-slowing-the-fuck-down
saved: 2026-03-26
type: article
tags:
  - coding-agents
  - code-quality
  - discipline
  - ai-engineering
  - opinion
---

Mario Zechner argues that shipping fast with agents without discipline is visibly degrading software quality, and that humans must remain the quality gate.

## Key takeaways

- **Compounding errors**: Agents never learn from mistakes. Without a human bottleneck, small errors compound until the codebase and the tests agents wrote cannot be trusted.
- **Local decisions**: Agents never see each other's runs or the full codebase, so local choices produce duplication and enterprise-level complexity in weeks.
- **Low-recall search**: Agentic search recall falls as the codebase grows, causing missed existing code, duplication, and inconsistency.
- **Good agent tasks**: Prefer work that is scopeable, self-evaluable, and non-mission-critical. Write architecture and APIs by hand.
- **Review capacity**: Limit daily agent-generated code to what you can review. Friction is how you understand what you want to build.
