---
title: Dex Horthy on Program Design for Agentic Engineering
source: https://www.youtube.com/watch?v=xgkjtF89-44
saved: 2026-08-08
type: video
tags:
  - coding-agents
  - software-engineering
  - context-engineering
  - code-review
  - testing
---

Dex Horthy argues that coding agents have made implementation dramatically faster without eliminating the hard part of software engineering: deciding what should be built, constraining the important design choices, and maintaining enough system understanding to trust and repair the result. The practical bottleneck moves from generating code to product clarity, architecture, verification, review, and long-term maintainability.

His proposed workflow adds four layers of alignment before and during implementation: define the user problem and a measurable outcome; agree on system architecture and data flow; perform “program design” by making interfaces, types, call stacks, file placement, and test strategy explicit; then implement in small vertical slices that exercise an end-to-end path early. This reduces the cost of changing direction before an agent has produced thousands of lines around a bad implicit choice.

## Key takeaways

- Benchmarks built around one-shot fixes and passing tests measure short-term problem solving, not whether a generated codebase stays understandable and adaptable across months of follow-on changes.
- Deterministic feedback is leverage. Conversion, latency, cost, correctness, or another measurable outcome gives an agent a target it can iteratively optimize instead of merely satisfying a prose request.
- Vertical slices expose integration mistakes early. Agents tend to build horizontally—database, then services, then API, then UI—which delays meaningful feedback until a large implementation is already expensive to unwind.
- Eliminating manual code review requires investment elsewhere: stronger tests, browser or behavioral validation, automated review, CI checks, incident feedback, and clear escalation. These controls raise trust but do not remove the need for humans to understand the product and system logic.
- Context engineering is selective documentation, not dumping everything into a prompt. Product decisions, architecture records, interface contracts, and operational facts should be accessible near the work, while irrelevant history and secrets stay out.
- Long agent sessions can degrade into rushed, incoherent work. Consolidating decisions into a durable design document and restarting with focused context can be more effective than preserving an exhausted thread.
- The right amount of rigor depends on stage and risk. Early pre-product-market-fit work may benefit from fast experimentation; established, team-owned, or regulated systems need explicit architecture, traceability, and maintainability gates.
- Faster generation is useless when generation is not the constraint. If review capacity, customer demand, product definition, or production reliability is limiting throughput, adding more agents only creates a larger queue of untrusted work.
