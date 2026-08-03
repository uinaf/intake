---
title: Addy Osmani on agent memory and harness design
source: https://x.com/addyosmani/status/2043447970507686248
saved: 2026-04-13
type: tweet
tags:
  - harness-engineering
  - memory
  - context-engineering
  - x
---

Tweet:

> Memory makes your agent smarter over time.
>
> The agent harness is key to the memory layer. You can't bolt one onto the other after the fact. Every decision the harness makes - what goes in context, what survives compaction, how skills get surfaced, how the working directory is exposed etc - is a memory decision.
>
> A well written write-up by @hwchase17

Takeaways:

- Addy's argument is tight: memory is not a separate subsystem you attach later, it is baked into harness behavior.
- The harness defines what enters context, what survives compaction, how skills are surfaced, and how much workspace/state is visible, so it effectively defines memory.
- This is a useful corrective to shallow "just add memory" thinking around agents.
- He points to Harrison Chase's long-form piece as the fuller version of the same thesis.
