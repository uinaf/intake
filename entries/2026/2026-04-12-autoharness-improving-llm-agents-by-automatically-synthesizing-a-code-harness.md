---
title: "AutoHarness: Improving LLM Agents by Automatically Synthesizing a Code Harness"
source: https://arxiv.org/abs/2603.03329
saved: 2026-04-12
type: paper
tags:
  - harness-engineering
  - agent-security
---

DeepMind's AutoHarness synthesizes runtime constraint code from tool schemas and task specs, so illegal actions are blocked by generated guards rather than static schema checks.

## Key takeaways

- **Synthesized guards**: Code synthesis auto-generates runtime constraint harnesses from tool schemas and task specifications.
- **Arena result**: Gemini-2.5-Flash plus AutoHarness outperforms Gemini-2.5-Pro and GPT-5.2-High on TextArena games by eliminating illegal moves.
- **Static to dynamic**: Constraint enforcement shifts from static schema validation to learned, synthesized code guards.
