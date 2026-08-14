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

Dex Horthy argues that agents made implementation much faster without removing the hard part: deciding what to build, constraining design, and keeping enough system understanding to trust and repair the result.

## Key takeaways

- **Four alignment layers**: Define the user problem and a measurable outcome; agree architecture and data flow; make interfaces, types, call stacks, files, and tests explicit; then implement in small vertical slices.
- **Wrong benchmarks**: One-shot fixes and passing tests measure short-term solving, not whether a generated codebase stays understandable for months.
- **Vertical slices**: Agents tend to build horizontally and delay integration feedback until a large implementation is expensive to unwind.
- **Review substitutes**: Stronger tests, behavioral validation, automated review, CI, and incident feedback raise trust but do not remove the need for humans who understand the system.
- **Selective context**: Keep product decisions, architecture records, and contracts near the work. Do not dump history and secrets into the prompt.
- **Restart over rot**: Long sessions degrade. Consolidating decisions into a design doc and starting fresh can beat an exhausted thread.
- **Stage-dependent rigor**: Early experiments can move fast; established or regulated systems need explicit architecture and maintainability gates.
- **Wrong constraint**: If review capacity, demand, or reliability is the limit, more agents only enlarge the queue of untrusted work.
