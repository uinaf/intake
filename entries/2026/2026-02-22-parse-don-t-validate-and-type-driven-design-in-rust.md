---
title: Parse, don't Validate and Type-Driven Design in Rust
source: https://harudagondi.space/blog/parse-dont-validate-and-type-driven-design-in-rust
saved: 2026-02-22
type: article
tags:
  - ai-engineering
  - rust
  - type-driven-design
  - parse-dont-validate
  - api-design
  - context-management
  - prompting
  - trust-but-verify
  - agentic-coding
  - sdlc
  - observability
  - monitoring
  - feedback-loops
---

Harudagondi walks through parse, don't validate in Rust: encode invariants in types at construction so invalid states are unrepresentable.

## Key takeaways

- **Construction boundary**: Strengthen inputs with newtypes such as `NonZeroF32` instead of a runtime panic or `Option` workaround.
- **NonEmptyVec**: Prefer `NonEmptyVec<T>` over repeatedly checking `Vec::is_empty()` downstream.
- **Payoff**: Less duplicated validation, stronger contracts, and safer refactors.
- **API intuition**: The win is fewer scattered checks and hidden assumptions, not fancy types.
