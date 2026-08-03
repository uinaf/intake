---
title: Agentic Harness Engineering
source: https://decodingaimagazine.substack.com/
saved: 2026-03-31
type: article
tags:
  - harness
  - coding-agents
  - agent-scaffolding
  - production-ai
---

By Paul Iusztin (Decoding AI Magazine). A practitioner overview of harness engineering as a discipline.

## Key Takeaways
- Agent = Model + Harness. The harness is everything that isn't the model.
- Author's experience: stripped LlamaIndex/MCP/RAG back to plain Python + simple API calls + custom ReAct engine → things finally worked. Complexity without business value is the default failure mode.
- TerminalBench 2.0: changing only the harness moved DeepAgent (LangChain) from outside top 30 to top 5.
- Three levels: prompt engineering → context engineering → harness engineering. Each encompasses the previous.
- Filesystem is the most foundational harness primitive — no fancy vector DB, just files. Every production harness uses filesystem as primary state mechanism.
- Start with one well-harnessed agent before reaching for multi-agent complexity. Author found single agent + memory + smart context engineering outperformed a 5-agent swarm.
- Ralph Loops: harness mechanism that intercepts model's exit, reinjects prompt in clean context window, forces continuation against a completion goal using filesystem state.
- Multi-surface architecture: same agent served across TUI, web, desktop, Slack, Telegram via centralized gateway (cites OpenClaw, Codex, OpenCode).
- Mitchell Hashimoto definition: harness engineering = engineering a solution every time an agent makes a mistake, ensuring it never makes that specific mistake again.
