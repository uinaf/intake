---
title: "Stop Shipping AI Slop: Codex Spark Best Practices"
source: https://x.com/SarahChieng/status/2029293824221299089
saved: 2026-03-04
type: tweet
tags:
  - coding-agents
  - workflows
  - best-practices
  - cerebras
---

GPT-5.3-Codex-Spark on Cerebras runs at 1200+ tok/s and changes the model from "delegate and wait" to "pair and steer."

## Key takeaways

- **Pair and steer**: One thing at a time; interrupt and redirect with "only change X" and "show me the diff."
- **Validation is cheap**: Bake tests, diff review, lint, and browser QA into every commit cycle.
- **Fewer sessions**: One or two sessions max; review is the bottleneck and parallel agents on the same files cause chaos.
- **Fresh context**: Externalize state to AGENTS.md, PLAN.md, PROGRESS.md, and VERIFY.md; git is memory, the model is a stateless executor.
- **Right model**: Codex 5.3 for planning and reviews, Spark for rapid execution.
- **Tight harness**: Max diff of 150 LOC, no file deletion, tests and types must pass, restrict file creation.
- **Context speed**: 128K context fills in about two minutes at 1200 tok/s, so fresh sessions are critical.
