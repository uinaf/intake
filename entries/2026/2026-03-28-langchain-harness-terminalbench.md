---
title: "LangChain: Top 30 to Top 5 on TerminalBench via Harness Only"
source: https://blog.langchain.com/improving-deep-agents-with-harness-engineering
saved: 2026-03-28
type: article
tags:
  - harness-engineering
  - benchmarks
  - evaluator-pattern
  - agentic-sdlc
---

LangChain moved from top 30 to top 5 on TerminalBench 2.0 by changing only the harness, keeping the same GPT-5.2-Codex model.

## Key takeaways

- **Reasoning sandwich**: High reasoning at plan and verify, medium in between, lifted scores from 52.8% to 66.5%.
- **Middleware loops**: A build-verify-fix loop is enforced by hooks, not just prompting.
- **Trace analysis**: A skill spawns parallel agents to analyze errors and synthesize findings. Loop detection nudges after repeated edits to the same file.
- **Harness job**: Prepare and deliver context so agents can complete work autonomously.
