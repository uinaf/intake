---
title: "Codified Context: Infrastructure for AI Agents in a Complex Codebase"
source: https://arxiv.org/abs/2602.20478
saved: 2026-04-12
type: paper
tags:
  - agent-memory
  - design-engineering
---

A production-validated architecture from 283 sessions on a 108k-line codebase, splitting always-on context from on-demand retrieval.

## Key takeaways

- **Hot-memory constitution**: Encodes conventions and multi-agent coordination protocols in always-on context.
- **Specialist agents**: Nineteen domain-specialist agents handle distinct areas of the codebase.
- **Cold-memory knowledge base**: Thirty-four on-demand specification documents sit outside always-on context.
- **Scaling guidance**: Empirical data on what must stay in always-on context versus what should be retrieved — concrete published guidance for cross-session memory in a large codebase.
