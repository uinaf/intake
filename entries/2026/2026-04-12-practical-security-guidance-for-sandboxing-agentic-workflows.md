---
title: Practical Security Guidance for Sandboxing Agentic Workflows
source: https://developer.nvidia.com/blog/practical-security-guidance-for-sandboxing-agentic-workflows-and-managing-execution-risk
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - agent-security
  - design-engineering
---

NVIDIA AI Red Team's mandatory controls for agent code execution: restrict network egress, block workspace escape, and critically — protect MCP server configuration and hooks files from agent modification. The core threat model: an agent that can edit its own harness configuration can escalate its own permissions, which standard sandbox isolation alone does not prevent.
