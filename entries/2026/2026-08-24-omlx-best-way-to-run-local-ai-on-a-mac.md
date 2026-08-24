---
title: "oMLX: The Best Way to Run Local AI on a Mac"
source: https://www.youtube.com/watch?v=j557WxWtdZk
saved: 2026-08-24
type: video
tags:
  - coding-agents
  - infrastructure
  - agentic-coding
  - context-management
  - harness-engineering
---

Kai presents oMLX as a targeted Apple Silicon inference server for long coding-agent sessions. Its tiered prefix cache reduces repeated prompt prefill, improving time to first token without making the model smarter or increasing decode speed.

## Key takeaways

- **Agentic slowdown**: Coding agents repeatedly submit a growing prompt with a mostly shared prefix, so servers that invalidate the cache on small prefix changes can spend progressively longer recomputing prior context.
- **Tiered prefix cache**: oMLX keeps frequently reused KV-cache blocks in memory and persists colder blocks to SSD, allowing matching prompt prefixes to be restored instead of fully recomputed across turns or restarts.
- **Narrow performance win**: Cache reuse improves warm time to first token in long, repetitive sessions; it does not improve cold starts, token generation speed, model quality, or the model size that fits in memory.
- **Harness compatibility**: The server exposes OpenAI- and Anthropic-compatible interfaces and includes integrations for coding harnesses such as Claude Code, Cursor, Codex, OpenCode, and Pi.
- **Prefix stability**: Cache effectiveness depends on stable system prompts and tool schemas; reordering semantically identical prefix content can still destroy reuse and force another full prefill.
- **Hardware budget**: Unified memory must hold model weights, the growing KV cache, and macOS overhead, so model selection should leave operating-system headroom rather than consuming every available gigabyte.
- **Evidence quality**: The dramatic benchmark claims mix first-party high-end M3 Ultra results with anecdotal third-party comparisons, so the real test is a controlled cold-versus-warm benchmark on the intended Mac, model, harness, and context length.
