---
title: "2. Datadog: \"Closing the Verification Loop: Observability-Driven Harnesses\""
source: https://datadoghq.com/blog/ai/harness-first-agents
saved: 2026-03-28
type: article
tags:
  - harness-engineering
  - ai-agents
  - coding-agents
  - verification
  - testing
  - infrastructure
  - devtools
---

Datadog argues agents now produce code faster than humans can review, so scale verification instead of review: fast automatic checks in the harness.

## Key takeaways

- **Contracts first**: State invariants up front so verification becomes pass/fail rather than subjective judgement.
- **Cost-layered pyramid**: Symbolic specs, about five-second deterministic simulation as the primary gate, then model checking, bounded verification, and production telemetry.
- **Telemetry closes the loop**: It confirms modelled behaviour matches real execution rather than trusting the model.
- **Vendor results**: They report redis-rust reaching Redis-comparable latency with 87% less memory, and Helix running 10M simulation seeds near peak disk throughput.
- **Testable claim**: Once invariants are explicit and checked continuously, agents can iterate faster than review-gated humans. These are vendor-published numbers on their own systems.
