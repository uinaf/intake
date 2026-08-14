---
title: Alibaba OpenSandbox
source: https://github.com/alibaba/OpenSandbox
saved: 2026-04-12
type: research
tags:
  - agent-security
  - coding-agents
  - design-engineering
---

Alibaba's OpenSandbox is a general-purpose agent sandbox (8.7K+ stars as of March 2026) with multi-language SDKs and a unified API over Docker, Kubernetes, and several secure runtimes.

## Key takeaways

- **Multi-language SDKs**: Python, Java, TypeScript, Go, and C# clients sit on unified APIs across Docker and Kubernetes.
- **Isolation choices**: Supported secure runtimes include gVisor, Kata Containers, and Firecracker.
- **Workload range**: The same abstraction covers coding agents, GUI agents, agent evaluation, and RL training.
- **Per-workload isolation**: The note calls it the most runtime-flexible option when isolation level must be chosen per workload.
