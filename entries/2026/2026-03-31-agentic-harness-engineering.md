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

Paul Iusztin's practitioner overview of harness engineering: the agent is the model plus everything around it, and changing only the harness can move benchmark rank by tens of places.

## Key takeaways

- **Agent definition**: Agent equals model plus harness; the harness is everything that is not the model.
- **Strip complexity**: The author got results after dropping LlamaIndex, MCP, and RAG for plain Python, simple API calls, and a custom ReAct engine.
- **TerminalBench 2.0**: Changing only the harness moved DeepAgent from outside the top 30 to the top 5.
- **Three levels**: Prompt engineering sits inside context engineering, which sits inside harness engineering.
- **Filesystem state**: Production harnesses treat the filesystem as the primary state mechanism rather than a vector database.
- **Single agent first**: One well-harnessed agent with memory and context beat a five-agent swarm in the author's experience.
- **Ralph Loops**: The harness intercepts exit, reinjects the prompt in a clean window, and continues against a filesystem-backed completion goal.
- **Mistake closure**: Hashimoto's definition: engineer a fix every time the agent makes a mistake so that specific mistake does not recur.
