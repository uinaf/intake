---
title: Night Shift Agentic Workflow
source: https://jamon.dev/night-shift
saved: 2026-03-16
type: article
tags:
  - ai
  - agents
  - workflow
  - coding
  - productivity
---

By Jamon Holmgren

Human takes day shift (specs, architecture, thinking), AI agents take night shift (autonomous implementation).

## Core Philosophy
- Human time/energy is expensive and constrained; agent tokens are cheap
- No babysitting — agents work autonomously overnight
- Constant improvement via feedback loop: fix docs/workflow/validations every morning so agents get better each night

## Day Shift (Human)
- Interface with humans, gather requirements, think through architecture
- Write detailed spec docs (organized for YOUR thinking, not the agent's)
- Specs live in `./Specs/` — `draft-*` prefix = agent ignores
- Push knowledge into docs, not specs — use an `AGENTS.md` router (~150 lines) pointing to workflow docs, skill docs, system docs
- Kick off the agent at end of day, lock computer, done

## Night Shift (Agent)
1. **Prep**: clean working tree, run full test suite, fix failures
2. **Pick task**: bugs first, then completed specs
3. **Load spec** → analyze → load relevant docs → examine code
4. **Testing plan** → write extensive tests → expect failures
5. **Plan** (human never reads this)
6. **Review agents**: 6 personas (Designer, Architect, Domain Expert, Code Expert, Performance Expert, Human Advocate) — each owns docs, reviews against them
7. **Iterate** plan until all reviewers green-light
8. **Implement** including doc adjustments
9. **Validate**: types, lint, static analysis, bundle size, tests, full regression suite
10. **Review again** on implementation diff, iterate until green
11. **Commit** with detailed message for human context
12. **Loop** to next task
13. **Write concise report** when done

## Morning Review (Human)
- Review changelog + recap
- Go commit by commit — message + diff + tests + docs
- Test manually and thoroughly
- Fix gaps in docs/workflow/validations FIRST, then fix code
- Key: catching gaps in docs/specs/validations matters as much as catching bugs

## Key Takeaways
- Never read agent plans — they're for the agent
- Burn all the tokens to make output as perfect as possible before human review
- Stacked commits in one branch for better incremental improvement
- The feedback loop is the whole point — each night gets better than the last
- ~5x faster, better quality, more fun than previous agentic approaches
