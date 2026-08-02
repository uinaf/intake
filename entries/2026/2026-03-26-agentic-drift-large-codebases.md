---
title: Avoiding agentic drift in large codebases
source: https://kevinkern.dev/posts/agentic-drift-in-large-codebase
saved: 2026-03-26
type: article
tags:
  - coding-agents
  - architecture
  - monorepo
  - skills
  - code-quality
---

# Avoiding Agentic Drift in Large Codebases

By Kevin Kern. Practical patterns for preventing codebase rot when working with coding-agents agents daily.

## What is Agentic Drift?

Agents preserve existing contracts to avoid breaking changes — adding normalization layers, duplicate ownership paths, compatibility fixes. Helps in the moment, but compounds over time. The intended architecture slowly loses shape.

Even when you refactor out old code, you end up with guards to prevent it coming back, or empty stubs left behind.

## Set the Rails First

"Once you use coding-agents agents regularly, you are basically working in a team now."

### House Rules
- Linter, formatter, typechecker (oxlint, eslint, rustfmt)
- Test setup (vitest, nextest)
- Secrets + guards (gitleaks, lefthook)
- Release sdlc (CI, tags, changelog)
- Dead code hygiene (knip)

### Map the Domains Early
- Split by domain, make ownership visible in folder tree
- Without clear layout, agents put things where they fit in the moment, not where they belong
- Build a small CLI — agents understand CLIs well, gives them a clear contract
- Doesn't need to be perfect day one, just clear enough agents don't build rooms in random corners

## Task Tracking

A simple plan → code → review loop tracked in JSON/md/sqlite. Not a huge project engineering layer. Just enough to reduce drift while the agent works.

## Multiple Agents on Same Codebase

- Parallel branches and merging is "no fun in agentic coding"
- Prefers single branch, separate checkout only when split is worth it
- "Imagine building a car from scratch. If you have 10 copies, you need to move between each clone and later merge everything back into one car."
- Worktrees are the safe option for real parallel tasks, just not the default reach

### Subagents as Scouts
- Use subagents for exploration/context gathering, not implementation
- "Spawn 5 subagents, explore and find duplicate ownership"
- Stronger models hand off exploration to smaller models (gpt-5.4 mini)

## Give the Agent Eyes

Let it see the running app — browser logs, state, screenshots, click through flows. Dev-browser, Peekaboo, Chrome DevTools MCP.

"My goal is always to give the agent access to the same view and context that I have."

## AGENTS.md

- Keep short and generic — how to build, how to test, what must not be touched, what "done" means
- "Short and accurate beats long and vague"
- "If the agent makes the same mistake twice, that is usually the moment to write the rule down"

## Anti-Drift Skills

Four specific skills for fighting drift:

1. **$architecture-ownership** — declare canonical owner of a feature. Once clear, agents stop creating second homes for the same feature.
2. **$root-cause-finder** — push agent to trace the first wrong layer instead of patching edges. "If water is dripping from a ceiling, a hotfix is placing a bucket underneath."
3. **$find-duplicate-ownership** — spot where two places think they're in charge. Run periodically with subagents.
4. **$hard-cut** — remove old paths instead of keeping both alive. As long as old and new coexist, agents keep patching both and drift grows.

Skills repo: https://github.com/regenrek/agent-skills

## Manual Review

- "Manual review is still the best review. Not one hour later when the diff is spread across the repo."
- Review early. Scan for: too much normalization, too many fallbacks, hardcoded values, weak typing, logic growing in the wrong place.
- Don't rewrite — ask better questions: "What is the right long-term architecture here?"
- "There is almost nothing more tempting than using the agent like a slot machine in a casino."

## Key Quote

"The harder part now is deciding what the loop is allowed to do, when enough is enough, reviewing early, and keeping the shape of the system intact."
