---
title: '2. Datadog — "Closing the Verification Loop: Observability-Driven Harnesses"'
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

By Alp Keles, Jai Menon, Sesh Nalla, and Vyom Shah (Datadog)

Agents now produce code faster than humans can review it, so the argument is to
stop scaling review and start scaling verification: make checks fast and
automatic, and let the harness do what human review cannot.

## Key Takeaways

- Contracts before code — state invariants (replication model, failure
  boundaries, durability guarantees) up front, which turns verification from
  subjective judgement into pass/fail.
- The verification pyramid is layered by cost: symbolic specs in TLA+,
  deterministic simulation testing as the primary gate at ~5s per run, model
  checking at 30-60s, bounded verification with Kani at ~60s, then production
  telemetry.
- Telemetry is what closes the loop: it confirms modelled behaviour matches real
  execution, rather than trusting the model.
- Reported results: a redis-rust project reaching comparable latency to Redis 8.4
  in staging with an 87% memory reduction, and Helix, a Kafka-compatible system,
  running 10M simulation seeds at ~93% of peak disk throughput with 22.2ms
  average produce latency against 116ms for baseline Kafka.
- The claim worth testing elsewhere: once invariants are explicit and checked
  continuously, agents can iterate faster than review-gated humans safely. These
  are vendor-published numbers on their own systems.
