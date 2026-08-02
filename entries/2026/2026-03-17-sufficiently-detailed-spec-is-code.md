---
title: A Sufficiently Detailed Spec is Code
source: https://haskellforall.com/2026/03/a-sufficiently-detailed-spec-is-code
saved: 2026-03-17
type: article
tags:
  - coding-agents
  - specs
  - software-engineering
  - ai-engineering
---

# A Sufficiently Detailed Spec is Code

By Gabriella Gonzalez (Haskell for All). A critique of the "generate code from specs" approach to agentic coding.

## Core Argument

Two misconceptions drive agentic coding-agents hype:
1. **Spec docs are simpler than code** — false. To make a spec precise enough to reliably generate working code, you must contort it into pseudocode or literal code. You can't escape the precision that engineering requires.
2. **Spec work is inherently more thoughtful than coding** — false. When you optimize for delivery speed, specs become slop too.

## Key Evidence

**Symphony (OpenAI):** Marketed as "generate a project from a spec." The SPEC.md is actually pseudocode in markdown — prose dumps of database schemas, backoff formulas as code, literal reference algorithms. It's thinly-veiled code, not a higher abstraction.

**It doesn't even work:** Author tried generating Symphony in Haskell via Claude Code. Multiple bugs, required manual prompting to fix, and even when error-free the agent spun silently without progress. The spec's "verbal precision" fails to reliably produce a working implementation.

**YAML precedent:** The YAML spec is extremely detailed with a conformance test suite, and most implementations still don't fully conform. Specs don't guarantee correct implementations.

## Dijkstra Quote (central to thesis)
> "Although changing to communication between machine and man conducted in the latter's native tongue would greatly increase the machine's burden, we have to challenge the assumption that this would simplify man's life."

Formal symbolism (code) exists because natural language precision doesn't scale. Greek math got stuck as a verbal activity. Modern math emerged from designed formal symbolisms (Vieta, Descartes, Leibniz, Boole).

## Borges Reference
If you expand the spec to fix flakiness, you approach the "map that is the same size as the territory" — at which point you've just written the code in a worse language.

## Takeaway
Specifications were never meant to be time-saving devices. If optimizing for delivery time, write the code directly. "Garbage in, garbage out" — sloppy specs produce sloppy code regardless of how smart the agent is.
