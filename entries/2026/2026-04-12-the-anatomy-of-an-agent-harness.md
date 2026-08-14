---
title: The Anatomy of an Agent Harness
source: https://blog.langchain.com/the-anatomy-of-an-agent-harness
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - foundations
  - context-engineering
  - compaction
  - memory
  - langchain
---

LangChain breaks a harness into five primitives: filesystem, code execution, sandbox, memory, and context management. Harness choices can overfit the models trained against them.

## Key takeaways

- **Five primitives**: Filesystem, code execution, sandbox, memory, and context management against context rot.
- **Filesystem role**: Durable state and a collaboration surface for agents, not just a dump of files.
- **Code execution**: Lets agents solve problems without a pre-designed solution path.
- **Co-evolution risk**: Models trained with specific harnesses can overfit those designs, so architecture choices last.
