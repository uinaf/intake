---
title: AWS Bedrock AgentCore with WebRTC Support
source: https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-bedrock-webrtc
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-primitives
  - skills-mcp
  - article
---

Adds peer-to-peer, UDP-based WebRTC bidirectional streaming to Bedrock Agents for real-time voice, complementing existing WebSocket support.

## Key takeaways

- **WebRTC transport**: Peer-to-peer UDP streaming for real-time voice interactions with Bedrock Agents.
- **Latency and resilience**: Complements WebSockets with lower latency and better resilience on poor networks.
- **Voice harness choice**: A harness-level transport option for agents targeting sub-800ms Total Turn-Around Time voice interactions.
