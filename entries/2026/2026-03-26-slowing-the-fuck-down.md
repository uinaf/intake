---
title: Thoughts on slowing the fuck down
source: https://mariozechner.at/posts/2026-03-25-thoughts-on-slowing-the-fuck-down
saved: 2026-03-26
type: article
tags:
  - coding-agents
  - code-quality
  - discipline
  - ai-engineering
  - opinion
---

# Thoughts on Slowing the Fuck Down

By Mario Zechner (libGDX creator). A sharp counterpoint to the "ship fast with agents" opinion after ~1 year of coding-agents agents in production.

## Core Thesis

Software quality is visibly degrading as engineering delegate to agents without discipline. The speed is intoxicating but the compounding damage is real.

## Key Arguments

### Everything is broken
- Software feels more brittle industry-wide — 98% uptime becoming the norm, bizarre UI bugs
- AWS AI-caused outage → internal 90-day reset
- Microsoft acknowledging Windows quality issues after Nadella touted % of AI-written code
- Companies claiming "100% AI-written code" consistently ship the worst garbage

### How NOT to work with agents

**Compounding booboos with zero learning:**
- Agents make errors like humans, but unlike humans they never learn from them
- Humans are bottlenecks — that's actually a feature. Limited output = limited damage rate
- Agent armies have no bottleneck: tiny booboos compound at unsustainable rates
- You removed yourself from the loop, so you don't feel the pain until it's too late
- Eventually you can't trust the codebase OR the tests the agents wrote

**Merchants of learned complexity:**
- Agents never see each other's runs, never see the full codebase
- All decisions are local → duplication, cargo cult "best practices", abstractions for abstractions' sake
- You reach enterprise-level complexity in weeks instead of years — but without the organizational research that usually evolves alongside it

**Agentic search has low recall:**
- Before fixing anything, agents need to find all relevant code — agentic search
- Bigger codebase = lower recall, regardless of tooling (ripgrep, LSP, vector DB)
- Low recall causes the booboos in the first place: agent misses existing code, duplicates, introduces inconsistencies

### How TO work with agents

- **Good agent tasks:** scopeable without full system understanding, closeable loop (agent can self-evaluate), non-mission-critical output, rubber-ducking
- **Human is the final quality gate** — always
- **Slow down.** Give yourself time to think about what you're building and why
- **Set limits** on how much code you let agents generate per day, aligned to your review capacity
- **Write architecture/API/gestalt by hand.** Maybe tab completion, maybe pair programming, but be in the code
- **Friction is a feature** — it's how you understand, learn, and grow
- Result: fewer features, but the right ones. Maintainable codebases. Users get joy instead of slop.

## Notable Quotes

- "Clankers aren't humans. A human makes the same error a few times. Eventually they learn not to make it again."
- "With agents and a team of 2 humans, you can get to enterprise-level complexity within weeks."
- "Your agents can also no longer deal with it. Because the codebase and complexity are too big, and they only ever have a local view of the mess."
- "Learning to say no is a feature in itself."
- "The simple act of having to write the thing introduces friction that allows you to better understand what you want to build."
