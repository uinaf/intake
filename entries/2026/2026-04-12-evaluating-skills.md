---
title: Evaluating Skills
source: https://blog.langchain.com/evaluating-skills
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-primitives
  - verification-and-ci-integration
  - article
---

LangChain's method for benchmarking agent skills in Docker-sandboxed environments, with a baseline-versus-skills comparison.

## Key takeaways

- **Skills lift**: Claude Code achieved 82% task completion with curated skills versus 9% without.
- **Skill sprawl**: Consolidating to 12 or fewer skills improved accuracy over sprawling skill sets.
- **Eval template**: Baseline-versus-skills comparison with bugfix tasks and clear outcome metrics is the template for systematic skill coverage testing.
