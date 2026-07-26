---
title: Harrison Chase X article on memory, harnesses, and agent design
source: https://x.com/i/article/2042925090942160896
saved: 2026-04-13
type: tweet
tags:
  - harness-engineering
  - memory
  - langchain
  - x
intaked_by: glitch418x
---

# Harrison Chase X article on memory, harnesses, and agent design

Linked article chain:
- Addy Osmani tweet: https://x.com/addyosmani/status/2043447970507686248
- Redirect target: Harrison Chase tweet: https://x.com/hwchase17/status/2042978500567609738
- Long-form article URL: https://x.com/i/article/2042925090942160896

Summary:

- Chase argues that agent harnesses are now the dominant scaffolding layer for serious agents, and they are not going away even as models improve.
- His main claim is that memory is inseparable from the harness, because the harness decides how context is loaded, compacted, persisted, exposed, and queried.
- Short-term memory, long-term memory, system instructions, skills, working directory exposure, and compaction are all harness responsibilities, not bolt-on extras.
- From that, he makes the stronger ownership argument: if you use a closed harness, especially one hidden behind a proprietary API, you do not really own your agent's memory.
- He frames this as strategic lock-in. Stateless model APIs are relatively easy to swap, but once memory and orchestration live inside a provider's closed system, switching gets much harder.
- He is especially worried about memory becoming the real lock-in layer for model providers, more than the model itself.
- His prescription is open harnesses plus open memory infrastructure, so developers control the memory substrate and retain model optionality.
- The piece is also a pitch for LangChain's Deep Agents: open source, model-agnostic, standards-friendly, and able to plug into external memory stores.

Worth noting:

- The analysis is good on harness-memory coupling.
- The product pitch is not subtle. The piece is both argument and marketing.
