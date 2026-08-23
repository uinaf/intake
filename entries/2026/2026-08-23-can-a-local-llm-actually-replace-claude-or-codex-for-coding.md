---
title: Can a Local LLM Actually Replace Claude or Codex for Coding?
source: https://www.youtube.com/watch?v=uefMWJ1GBWg
saved: 2026-08-23
type: video
tags:
  - harness-engineering
  - coding-agents
  - agentic-coding
  - token-cost
---

Kai argues a local coding model can do bounded agent work if the harness, VRAM headroom, and quantization are right, but buying a GPU to beat a subsidized cloud plan is usually the wrong trade.

## Key takeaways

- **Tool-calling line**: Around 27–35B, local models become reliable file/test/edit agents instead of chatbots that fake tool use. Benchmarks near Claude do not survive a bad harness.
- **Memory floor**: 24 GB holds the weights, not the job. Agent context can exceed the model; he puts the real floor near a 32 GB card or a 48–64 GB Mac.
- **Bits before parameters**: For harnessed coding, Q8 asked questions and finished; Q4 skipped clarification and shipped crash-level bugs, including division falling through to multiply.
- **Harness over model**: Engine, harness, then wiring. Claude Code/Codex expect frontier tool JSON; OpenCode is less picky. Same local model failed file reads until the harness changed.
- **Hardware inflation**: DRAM and used 24 GB cards rose with datacenter demand, so waiting for cheaper local AI is running backwards.
- **Cloud middle rung**: Since August 2026, Qwen Code, OpenRouter free calls, and cheap Kimi K3 change the math. A used 3090 versus a $20 plan takes years to break even.
- **Who should bother**: Local daily driver if you already have the RAM, do bounded work, and want lock-in insurance. Otherwise rent the hard 20% and skip the GPU.
