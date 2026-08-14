---
title: "Pipecat: Python Framework for Real-Time Voice Agent Pipelines"
source: https://github.com/pipecat-ai/pipecat
saved: 2026-04-12
type: research
tags:
  - harness-engineering
  - design-engineering
---

Python framework for real-time voice agent pipelines that coordinates ASR, LLM, and TTS services for sub-800ms Total Turn-Around Time.

## Key takeaways

- **Voice pipeline primitive**: Handles frame management, streaming media coordination, and pipeline orchestration between ASR, LLM, and TTS services.
- **Sub-800ms turns**: Targets sub-800ms Total Turn-Around Time voice interactions.
- **Backpressure and queues**: Manages backpressure, handles frame queueing, and exposes a simple async interface for real-time constraints.
- **Voice-first infrastructure**: Critical infrastructure for building responsive voice-first agents.
