---
title: Knowledge Priming — Martin Fowler & Birgitta Böckeler
source: https://martinfowler.com/articles/reduce-friction-ai/knowledge-priming.html
saved: 2026-03-04
type: article
tags:
  - knowledge-priming
  - onboarding
  - docs
  - context-management
  - ai-collaboration
---

https://martinfowler.com/articles/reduce-friction-ai/knowledge-priming.html
- Type: note
- Tags: knowledge-priming, onboarding, docs, context-management, ai-collaboration

## Practical takeaways

1. **7-section priming doc** — architecture overview, stack+versions, curated knowledge sources, project structure, naming conventions, 2-3 real code examples, anti-patterns. Target under 3 pages — it's a cheat sheet, not documentation.

2. **Anti-patterns section is highest ROI.** "Don't use Express, don't store JWT in localStorage, don't use class-based services" prevents more bad output than positive instructions. Every repeated AI mistake should become an anti-pattern entry.

3. **Curated knowledge sources is the underrated one.** Don't just say "we use Fastify" — link the specific blog posts, docs, and articles that shaped your conventions. 5-10 sources. Gives the model the *why*, not just the *what*.

4. **Infrastructure, not habit.** Store it as `.cursor/rules` or `.github/copilot-instructions.md` — auto-loaded, PR-reviewed, team-wide. Copy-pasting context per session doesn't scale and people stop doing it.

5. **Reference, don't duplicate.** Auth decisions → "see ADR-007". API contracts → "see OpenAPI spec". Keeps the doc short and prevents staleness.

6. **Update on triggers:** new framework version → update stack section. Repeated AI mistake → add anti-pattern. Major refactor → review structure. A stale priming doc actively teaches the AI wrong patterns.
