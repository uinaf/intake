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

GitHub's March 9, 2026 architecture write-up is one of the clearest public descriptions of defense-in-depth for coding agents running inside CI: isolated agent container, firewall, MCP gateway, API proxy, staged safe outputs, and zero-secret execution. The key value is that it treats agent execution as a hostile workload inside automation infrastructure, which is exactly the mindset most harnesses need but rarely document.
