---
title: "Under the Hood: Security Architecture of GitHub Agentic Workflows"
source: https://github.blog/ai-and-ml/generative-ai/under-the-hood-security-architecture-of-github-agentic-workflows
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - agent-security
  - coding-agents
---

GitHub's March 2026 write-up is a clear public description of defense-in-depth for coding agents in CI: isolated container, firewall, MCP gateway, API proxy, staged outputs, and zero-secret execution.

## Key takeaways

- **Hostile workload**: Treats agent execution as untrusted work inside automation infrastructure, not a trusted teammate.
- **Defense in depth**: Isolated agent container, firewall, MCP gateway, API proxy, and staged safe outputs.
- **Zero secrets**: The agent container is designed to run without holding secrets.
- **Rare documentation**: Most harnesses need this mindset and rarely write it down.
