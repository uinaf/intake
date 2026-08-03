---
title: Awesome Context Engineering
source: https://github.com/Meirtz/Awesome-Context-Engineering
saved: 2026-04-12
type: research
tags:
  - agent-memory
---

The companion index to a context-engineering survey (arXiv 2507.13334), organised
as a literature map rather than a tool list.

Its working definition is the useful part: context is the complete information
payload given to a model at inference — instructions, knowledge, tools, memory,
and state — which is why it treats prompt engineering as a subset rather than a
synonym.

## Key Takeaways

- Sections run definition and formalisation, then components (context scaling,
  production context management, structured data, self-generated context), then
  implementation problems (RAG, memory architectures, agent communication, tool
  use, evaluation), then applications and open directions.
- Covers the protocol layer alongside the model layer — MCP, A2A, AG-UI — plus
  memory types (episodic, working, conversational) and production observability.
- A 2026 update reframes the field as moving from context engineering toward
  agent engineering, which is a fair signal of how quickly the vocabulary here
  dates.
