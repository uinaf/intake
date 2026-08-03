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

- https://loggingsucks.com/
- Type: article
- Tags: observability, structured-logging, debugging, opentelemetry, instrumentation
- Core thesis: wide events / canonical log lines (Stripe pattern) — one rich structured JSON event per request per service hop instead of scattered log calls
- Logs are optimized for writing, not querying — the 2am debugger isn't the person who wrote `console.log("Payment failed")`
- High cardinality (user_id, millions of unique values) + high dimensionality (50+ fields) = actually queryable production analytics
- OTel is a delivery mechanism, not a strategy — standardizes transport but doesn't decide what context to capture. Bad instrumentation in OTel format is still bad
- Mental model shift: log what happened to this request, not what your code is doing
- Implementation: build event throughout request lifecycle via middleware context, emit once at the end
- Well-presented interactive demos; content itself isn't novel (Stripe canonical log lines are years old) but the packaging and "OTel won't save you" take are sharp
