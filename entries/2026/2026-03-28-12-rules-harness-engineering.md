---
title: 12 Rules of Harness Engineering (Cassie Kosov / OpenAI)
source: https://youtube.com/watch?v=BabEnt6VjtE
saved: 2026-03-28
type: video
tags:
  - harness-engineering
  - openai
  - rules
intaked_by: glitch418x
---

# 12 Rules of Harness Engineering

Quick reference from the video. OpenAI shipped 1M LOC with zero manually typed code.

1. Humans steer, agents execute
2. Give agents a concise map, not overwhelming manuals
3. If the agent can't access it in context, it doesn't exist
4. Optimize for agent legibility over human aesthetics
5. Enforce boundaries centrally, allow local autonomy
6. Make applications legible to agents
7. Plans are first-class artifacts
8. In high-throughput settings, corrections are cheap but waiting is costly
9. Continuous garbage collection over periodic cleanup (20% of week on AI slop otherwise)
10. Encode taste/preferences rather than relying on memory
11. Favor stable, well-documented, widely-represented technologies
12. Escalate to humans only when judgment is necessary
