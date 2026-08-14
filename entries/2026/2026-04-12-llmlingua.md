---
title: LLMLingua
source: https://github.com/microsoft/LLMLingua
saved: 2026-04-12
type: research
tags:
  - harness-engineering
  - design-primitives
  - context-delivery-and-compaction
  - agent-loop
  - context-engineering
  - context-compression
  - tools
  - github
---

Microsoft Research's prompt compression toolkit (up to 20x compression, minimal performance loss) that can be embedded as a preprocessing step in context delivery.

## Key takeaways

- **Prompt compression**: Up to 20x compression with minimal performance loss, embeddable as a preprocessing step in the context delivery layer.
- **LLMLingua-2 speed**: LLMLingua-2 adds 3–6x speed gains, making it viable for latency-sensitive agent loops.
- **Context delivery comparison**: Use it when designing or comparing harness choices around context delivery and compaction.
