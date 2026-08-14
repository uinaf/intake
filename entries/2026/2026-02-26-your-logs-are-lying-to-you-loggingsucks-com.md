---
title: Your Logs Are Lying To You (loggingsucks.com)
source: https://loggingsucks.com/
saved: 2026-02-26
type: article
tags:
  - ai-engineering
  - hiring
  - interviews
  - evaluation
  - observability
  - logging
  - structured-logging
  - opentelemetry
  - agentic-coding
  - prompting
  - reusable-examples
  - personal-knowledge
---

loggingsucks.com argues for wide events: one rich structured JSON event per request per hop, in the Stripe canonical-log-line pattern.

## Key takeaways

- **Write vs query**: Logs are optimized for writing, not for the 2am debugger.
- **Cardinality**: High cardinality plus high dimensionality makes production analytics actually queryable.
- **OpenTelemetry**: It is a delivery mechanism, not a strategy; bad instrumentation in OTel format is still bad.
- **Mental model**: Log what happened to this request, not what your code is doing.
- **Emit once**: Build the event through the request lifecycle via middleware context, then emit once at the end.
