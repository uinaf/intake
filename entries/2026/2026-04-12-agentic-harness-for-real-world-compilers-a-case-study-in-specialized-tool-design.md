---
title: "Agentic Harness for Real-World Compilers: A Case Study in Specialized Tool Design"
source: https://arxiv.org/abs/2603.20075
saved: 2026-04-12
type: paper
tags:
  - harness-engineering
  - design-primitives
  - verification-and-ci-integration
  - paper
---

A compiler-bug case study where a specialized llvm-autofix harness beats general-purpose coding agents by exposing compiler errors and pruning search by compilation cost.

## Key takeaways

- **Narrow wins**: Harness specialization for compiler bug fixes outperforms general-purpose coding agents in this domain.
- **Direct feedback**: The tool design exposes compiler error messages directly to the agent.
- **Cost-based pruning**: Search depth is bounded by compilation cost.
- **Transferable pattern**: Cost-based pruning plus a specialized feedback loop is offered as a pattern for other expensive-to-evaluate domains.
