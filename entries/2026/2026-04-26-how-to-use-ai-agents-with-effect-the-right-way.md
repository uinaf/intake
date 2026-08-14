---
title: How to use AI Agents with Effect the right way
source: https://youtube.com/watch?v=XaNHyZbFUBY
saved: 2026-04-26
type: video
tags:
  - coding-agents
  - context-engineering
  - effect-ts
  - mcp
  - skills
---

For coding agents, putting library source next to the project beats MCP, skills, and README-heavy docs. Models are post-trained to read, understand, and patch code.

## Key takeaways

- **Source over MCP**: An open-source MCP approach underperformed simply having the repo in the tree.
- **Post-training habitat**: Coding models are tuned for read-understand-edit, so source files are their native context.
- **Thin instruction files**: `AGENTS.md` should point at codebases and patterns, not become a huge manual.
- **Ignored docs**: Agents often focus on source directories and skip `node_modules`, READMEs, and docs even when those hold the answer.
- **Local clones**: Git subtree or a local clone puts examples where the agent treats them as code. Separate v3 and v4 examples so migrations copy the right version.
- **Closed APIs**: Generate a client from an OpenAPI spec, or have the model write one, so the repo still has code-shaped context.
- **Skills as prompts**: Skills are mostly shared prompts and still newer than source-in-tree for implementation guidance.
