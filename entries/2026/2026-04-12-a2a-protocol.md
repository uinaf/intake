---
title: A2A Protocol
source: https://github.com/a2aproject/A2A
saved: 2026-04-12
type: research
tags:
  - harness-engineering
  - protocols
  - multi-agent
  - a2a
---

A2A is the agent-to-agent interoperability layer: capability discovery, opaque collaboration, and long-running tasks, complementary to MCP's agent-to-tool connectivity.

## Key takeaways

- **Different problem**: A2A targets agent-to-agent interoperability; MCP targets agent-to-tool connectivity.
- **Core ideas**: Agent Cards for capability discovery, opaque collaboration that hides internal memory and tools, and long-running tasks over JSON-RPC plus HTTP/SSE-style transports.
- **Boundary choice**: MCP gives an agent capabilities; A2A lets one agent coordinate with another autonomous system.
- **Preserved abstraction**: Handoffs should keep downstream agents behind a boundary instead of flattening every peer into a tool call.
