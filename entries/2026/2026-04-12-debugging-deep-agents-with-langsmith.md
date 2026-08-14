---
title: Debugging Deep Agents with LangSmith
source: https://blog.langchain.com/debugging-deep-agents-with-langsmith
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-primitives
  - debugging-and-developer-experience
  - article
---

LangChain on debugging agents that run for minutes, span hundreds of steps, and produce traces no human can scan by hand.

## Key takeaways

- **Trace assistant**: Polly analyzes traces to surface root causes.
- **Trace CLI**: `langsmith-fetch` pipes trace data to coding agents.
- **AI-assisted debug**: Debugging deep agents requires AI-assisted trace analysis because the volume exceeds human capacity.
