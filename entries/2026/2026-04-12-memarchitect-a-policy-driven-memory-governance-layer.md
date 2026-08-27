---
title: "MemArchitect: A Policy-Driven Memory Governance Layer"
source: https://arxiv.org/abs/2603.18330
saved: 2026-04-12
type: paper
tags:
  - harness-engineering
  - agent-memory
---

Proposes a governance layer that decouples memory lifecycle management from model weights, addressing outdated facts that only a harness eviction policy can remove.

## Key takeaways

- **Decoupled lifecycle**: Decouples memory lifecycle management, decay, conflict resolution, and privacy enforcement from model weights.
- **Zombie memory**: Addresses outdated facts sitting in the context window that only a harness-level eviction policy, not the model, can remove.
- **Harness eviction**: Eviction is a harness policy problem, not something the model can solve from weights alone.
