---
title: Stripe Minions — One-Shot Unattended Coding Agents (1300+ PRs/week)
source: https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents
saved: 2026-03-24
type: article
tags:
  - coding-agents
  - harness-engineering
  - stripe
  - blueprints
  - infrastructure
intaked_by: glitch418x
---

# Stripe Minions

1,300+ PRs merged per week, zero human-written code. Human-reviewed but fully agent-produced. Started from Slack message, ends at PR ready for review.

## The Stack

### 1. Devboxes (Isolated Environments)
- AWS EC2 instances pre-loaded with entire codebase, tools, services
- **10-second spin-up** via pre-provisioned warm pool (repos cloned, Bazel/typecheck caches warmed, code gen services running)
- QA environment: isolated from production, no real user data, no internet, no confirmation prompts needed
- One infrastructure per task — engineers have half a dozen running at once
- **Built for humans years before LLMs.** Agents just slotted into the same infra
- "Cattle, not pets" — standardized, disposable, easy to replace

### 2. Blueprints (Hybrid Orchestration)
- Neither pure workflows (rigid graph) nor pure agent (loop with tools) — a **state machine mixing both**
- **Deterministic nodes**: "run linters", "push changes", "follow PR template" — no LLM, just code
- **Agentic nodes**: "implement task", "fix CI failures" — full tools + freedom, LLM decides next action
- Deterministic steps save tokens, reduce errors, guarantee critical steps every time
- At hundreds of runs/day, each deterministic node = one less failure mode that compounds
- Teams can build custom blueprints for specialized needs (e.g., LLM-assisted migrations that can't be pure codemods)
- Blueprint machinery makes context engineering easy: constrain tools, modify system prompts, simplify conversation per subtask

### 3. Context Gathering

**Rule files (filesystem-scoped):**
- Global rules used "very judiciously" — context fills up before agent starts
- **Rules scoped to subdirectories and file patterns** — auto-attached as agent traverses filesystem
- Same rule files that Cursor and Claude Code read — no agent-specific duplication
- Standardized on Cursor rule format, synced into Claude Code format too
- Three agents (Minions, Cursor, Claude Code) all read the same rules

**MCP (Toolshed):**
- Centralized internal MCP server with ~500 tools
- Internal docs, ticket details, build status, code search (Sourcegraph), and more
- All agents at Stripe (not just minions) use Toolshed as shared capability layer
- Adding a tool to Toolshed grants capabilities to entire fleet of hundreds of agents
- **Curated subsets per agent** — "smaller box" > kitchen sink. Small default set, engineers add more
- Security control framework prevents destructive actions via MCP
- Deterministically run relevant MCP tools over likely-looking links *before* agent run starts (pre-hydrate context)

### 4. Feedback Loops (Shift Left)

**Layer 1 — Local linting (< 5 seconds):**
- Pre-push hooks fix most common lint issues
- Background daemon precomputes which lint rules apply, caches results
- Lint fixes in well under 1 second on push
- Run as deterministic blueprint node — loop locally before pushing

**Layer 2 — CI (selective tests from 3M+ battery):**
- Autofixes applied automatically for known failure patterns
- If failures with no autofix → send back to agentic blueprint node for one more attempt

**Layer 3 — Hard cap at 2 CI rounds:**
- After second push, branch goes back to human
- Diminishing marginal returns on more rounds
- CI costs tokens, compute, time — cap is intentional
- "Knowing when to stop is as important as knowing how to start"

**Partial success is still a win:**
- A not-entirely-correct minion run is "often still an excellent starting point for an engineer's focused work"
- Engineer polishes in 20 minutes > waiting for agent to retry indefinitely

## Key Quotes

> "If it's good for humans, it's good for LLMs, too."

> "We find that 'putting LLMs into contained boxes' compounds into system-wide reliability upside."

> "Investments in human developer productivity over time have returned to pay dividends in the world of agents."

## Harness Skill Relevance

Directly validates and extends our harness-engineering design:

| Stripe Pattern | Our Harness Equivalent |
|---|---|
| Devboxes (10s warm pool) | Boot script + Docker Compose (our scale) |
| Blueprints (deterministic + agentic nodes) | Git hooks + CI gates (mechanical) + agent freedom (agentic) |
| Scoped rule files per subdirectory | Progressive disclosure, not global AGENTS.md dump |
| Pre-push lint < 5 seconds | Smoke test (fast, local, before push) |
| Max 2 CI rounds | **Missing from our skill — should add retry cap guidance** |
| Curated tool subsets | CLI > MCP, focused tool sets |
| Pre-hydrate context from links | **Missing — could recommend pre-fetching docs/tickets before agent work** |
| Partial success framing | **Missing — should note that 80% PR is still a win** |

### Gaps to Address in Harness Skill
1. Retry cap guidance (max N CI rounds, then hand back)
2. Deterministic vs agentic node distinction (some steps should never be LLM-decided)
3. Partial success as valid outcome (not perfect-or-nothing)
4. Context pre-hydration (fetch docs/tickets before agent starts working)
5. Scoped rules per directory (not just root-level AGENTS.md)
