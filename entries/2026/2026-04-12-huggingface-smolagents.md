---
title: huggingface/smolagents
source: https://github.com/huggingface/smolagents
saved: 2026-04-12
type: research
tags:
  - harness-engineering
  - reference-implementations
  - tutorials-and-educational
  - repo
---

Hugging Face's deliberately minimal agent library: about 1,000 lines of core code covering tools, memory, monitoring, and sandbox isolation.

## Key takeaways

- **Readable harness**: The entire harness is readable in an afternoon.
- **Sandbox options**: Isolation via E2B, Docker, and Pyodide.
- **Code-agent pattern**: The model writes Python that calls tools, eliminating JSON round-trips — a concrete alternative loop design.
