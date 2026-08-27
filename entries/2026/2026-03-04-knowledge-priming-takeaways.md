---
title: "Knowledge Priming: Martin Fowler & Birgitta Böckeler"
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

An assistant is capable but contextless, so curated project context has to override generic defaults. This is manual RAG, kept in the repo and reviewed like source.

## Key takeaways

- **Seven-section cheat sheet**: Architecture, stack and versions, curated sources, structure, naming, two or three real examples, and anti-patterns; under three pages.
- **Anti-patterns**: Highest ROI; every repeated AI mistake should become an entry.
- **Curated sources**: Link the five to ten posts and docs that shaped conventions, not just "we use Fastify."
- **Infrastructure**: Store the context as `.cursor/rules` or `.github/copilot-instructions.md`. The files are auto-loaded and reviewed in pull requests.
- **Pointers not copies**: Point at ADRs and OpenAPI instead of copying them.
- **Update triggers**: New framework version, repeated mistake, or major refactor; a stale priming doc teaches wrong patterns.
- **Caveats**: Maintenance cost is real and returns diminish on simple tasks.
