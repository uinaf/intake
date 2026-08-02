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

## Parse, don't Validate and Type-Driven Design in Rust
- **Author:** Harudagondi
- **URL:** https://www.harudagondi.space/blog/parse-dont-validate-and-type-driven-design-in-rust/
- **Shared by:** Altay
- Type: article
- Tags: rust, type-driven-design, parse-dont-validate, api-design, validation

Rust-focused walkthrough of “parse, don’t validate”: instead of sprinkling runtime checks everywhere, encode invariants in types at construction boundaries.

Key thread:
- `f32` division by zero starts as runtime panic / `Option`-return workaround.
- Better approach: strengthen inputs with newtypes (e.g. `NonZeroF32`) so invalid states are unrepresentable where the function is called.
- Similar argument for `NonEmptyVec<T>` instead of repeatedly checking `Vec::is_empty()` and then re-checking downstream.
- Main payoff: less duplicated validation, stronger contracts, and safer refactors.

**My take:** Strong piece for API design intuition. The practical win is not “types are fancy,” it’s fewer scattered checks and fewer hidden assumptions. This maps directly to our preference for schema-first boundaries and pushing validation to construction time.
