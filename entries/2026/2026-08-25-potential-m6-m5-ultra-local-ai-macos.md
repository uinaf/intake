---
title: The Potential of M6 and M5 Ultra for Local AI on macOS
source: https://www.macstories.net/notes/the-potential-of-m6-and-m5-ultra-for-local-ai-on-macos/
saved: 2026-08-25
type: article
tags:
  - infrastructure
  - ai-engineering
  - token-cost
  - agentic-coding
---

Federico Viticci reads Apple’s M6 and M5 Ultra announcements through the lens of local model inference. The hardware expands affordable speed at the low end and model capacity at the high end, but the projected token rates still need real benchmarks.

## Key takeaways

- **M6 entry point**: Apple claims the Mac mini’s 2 nm M6, dual 16-core Neural Engine, and per-core GPU Neural Accelerators deliver four times the M4’s AI performance, potentially making useful local mixture-of-experts models much faster on a small machine.
- **Clustering constraint**: The base M6 Mac mini retains Thunderbolt 4, while Thunderbolt 5 is reserved for M5 Pro. That limits the high-bandwidth multi-Mac clustering path Apple is promoting for distributed local inference.
- **M5 Ultra capacity**: Up to 512 GB of unified memory and 1.2 TB/s of bandwidth let one Mac Studio hold enormous open-weight models that usually require server hardware or aggressive quantization.
- **Speculative throughput**: The article extrapolates roughly 60 tokens per second for Qwen 3.5-35B-A3B on M6 and over 120 for DeepSeek-V4-Flash on M5 Ultra by scaling older results linearly. Peak AI compute does not translate directly into decode speed, so these are hypotheses, not benchmarks.
- **Capacity versus speed**: Large unified memory determines whether a model fits; memory bandwidth, active parameters, quantization, cache behavior, and inference software determine how quickly it runs once loaded.
- **Local economics**: A top configuration may exceed $20,000, but it offers private, quiet, always-available inference without per-token billing. The comparison with cloud providers depends on utilization, model quality, and the cost of owning and operating the machine.
- **Working example**: Viticci already uses DeepSeek-V4-Flash through MLX on an M3 Ultra to run local agents that scan, categorize, and link research notes, grounding the hardware discussion in an actual long-running agent workflow.
