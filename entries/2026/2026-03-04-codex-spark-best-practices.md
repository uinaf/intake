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

GPT-5.3-Codex-Spark: Codex variant on Cerebras WSE, 1200+ tok/s. Changes the interaction model from "delegate and wait" to "pair and steer."

## Key Practices

1. **Pair, don't delegate.** One thing at a time. Interrupt/redirect is a core pattern. "Only change ___", "Show me the diff before continuing."

2. **Validation is cheap at speed.** Bake tests, diff review, lint, browser QA into every commit cycle. Pre-commit hooks, full test suites between tasks.

3. **1-2 sessions max, not 10.** Parallelism was a workaround for slow models. Review is now the bottleneck. Multiple agents touching same files = chaos.

4. **Fresh context, persistent memory.** Start new sessions often. Externalize state to files:
   - AGENTS.md (repo norms), PLAN.md (checklist + done criteria), PROGRESS.md (running log), VERIFY.md (exact validation commands)
   - Git = memory layer, model = stateless executor
   - "Ralph loops": each iteration uses clean context, memory persists via git

5. **Right model for the task.** Codex 5.3 for planning/architecture/reviews, Spark for rapid execution. Sub-agents route task types.

6. **Tighter harness-engineering at speed.** Max diff ≤150 LOC, no file deletion, tests+types must pass before commit, restrict file creation.

7. **Doc gardening as CI.** Two doc patterns: human-readable (setup guides) and LLM-readable (patterns, system prompts, file locations). Automate via CI.

## Notable Mentions
- OpenCode, Pi, Droid mentioned as Codex-compatible harnesses with built-in validation features
- `/new`, `/fork`, a dedicated permissions affordance, `/review`, `/skills`, `/rename` as key CLI commands
- 128K context fills in ~2 min at 1200 tok/s — fresh sessions are critical
