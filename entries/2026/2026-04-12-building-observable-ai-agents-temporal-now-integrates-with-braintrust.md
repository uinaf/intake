---
title: "Building Observable AI Agents: Temporal Now Integrates with Braintrust"
source: https://temporal.io/blog/building-observable-ai-agents-temporal-now-integrates-with-braintrust
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-primitives
  - observability-and-tracing
  - article
---

Combines Temporal durable execution with Braintrust LLM tracing so every Workflow and Activity becomes a span and every LLM call is traced with full context.

## Key takeaways

- **Durable plus traces**: Temporal retries, state persistence, and event-history replay pair with Braintrust spans.
- **Failed synthesis**: A deep research agent retries failed synthesis without re-executing prior searches.
- **Prompt updates**: Prompt updates propagate via `braintrust.load_prompt()` without a code deployment.
- **Practical integration**: The most practical published pairing of workflow durability and LLM observability for production agent debugging.
