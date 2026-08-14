---
title: Cloudflare Dynamic Workers
source: https://blog.cloudflare.com/dynamic-workers
saved: 2026-04-12
type: article
tags:
  - agent-memory
  - agent-security
---

V8 isolate sandboxing for AI-agent-generated code, now in open beta: isolates start in milliseconds using megabytes of memory.

## Key takeaways

- **Efficiency**: 100x faster and up to 100x more memory-efficient than containers.
- **Secret injection**: The sandbox intercepts outbound HTTP so agent code never touches secrets directly.
- **Versus containers**: A different architectural option from container-based sandboxes such as E2B and Daytona.
