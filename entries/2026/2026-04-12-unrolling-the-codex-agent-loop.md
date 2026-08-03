---
title: Unrolling the Codex Agent Loop
source: https://openai.com/index/unrolling-the-codex-agent-loop
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - coding-agents
  - agent-loop
  - openai
---

- Codex is not just a prompt wrapper. The real system is a turn protocol where every step either ends with an assistant message or emits a tool call that feeds the next turn.
- Prompt growth is the hidden tax. Exact-prefix caching and compaction are not optimization trivia, they are core harness mechanics once turns accumulate.
- Good mental model: observe, plan, act, verify. If a harness buries one of those stages, it gets harder to debug why the agent is failing.
