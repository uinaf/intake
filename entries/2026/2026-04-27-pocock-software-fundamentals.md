---
title: "It Ain't Broke: Why Software Fundamentals Matter More Than Ever"
source: https://youtube.com/watch?v=v4F1gFy-hqg
saved: 2026-04-27
type: video
tags:
  - ai-coding
  - software-design
  - tdd
  - ddd
  - fundamentals
---

## Matt Pocock — AI Engineer Europe 2026

## Core Thesis
"Code is not cheap." The specs-to-code workflow (write high-level spec → let AI generate all code) produces degrading output: first iteration passable, second worse, third garbage. Software fundamentals matter MORE in the AI era, not less.

## Failure Modes of Unguided AI Coding
1. **AI didn't do what I want** — no shared design concept between human and AI. Brooks' "design concept" is invisible, lives between collaborators. Without it, misalignment is guaranteed.
2. **AI is too verbose** — no shared vocabulary. Solution: DDD ubiquitous language.
3. **Code that doesn't work** — no feedback loops (types, tests). Complexity compounds.
4. **Doing way too much** — no "small deliberate steps" (Pragmatic Programmer). "Rate of feedback is your speed limit."
5. **AI doesn't understand my code** — shallow modules, complex interfaces. AI gets lost in the mess.

## Practical Techniques
- **"Grill Me" prompt**: Force AI to interview you with 40-100 questions before writing anything. Build shared design concept first. Went viral (13k+ GitHub stars).
- **Ubiquitous Language skill**: Scan codebase, generate shared glossary of domain/technical terms. Reduces verbosity and misalignment.
- **TDD**: Enforce small deliberate steps. Tests = feedback loop = speed limit.
- **Deep Modules** (Ousterhout): Hide complexity behind simple interfaces. Best modules are deep — lots of functionality, simple surface. Shallow modules kill AI-assisted development because AI can't navigate the complexity.

## Key Quotes
- "Bad code is the most expensive it's ever been, because if you have a codebase that's hard to change, you're not able to take all of the bounty that AI can offer."
- "The best modules are deep — they allow a lot of functionality to be accessed through a simple interface."
- Specs-to-code accelerates software entropy. It removes the feedback loop that catches complexity before it compounds.

## Referenced Books
- *A Philosophy of Software Design* — John Ousterhout (deep modules, complexity definition)
- *The Pragmatic Programmer* — Thomas & Hunt (small deliberate steps, software entropy)
- *Domain-Driven Design* — Eric Evans (ubiquitous language)
- *The Mythical Man-Month* — Frederick Brooks (design concept)

## Context
- Apple reportedly retrained hundreds of Siri devs on Claude Code / Codex because skills had fallen behind
- Pocock is founder of AI Hero, creator of "Claude Code for Real Engineers" course
