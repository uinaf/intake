---
title: "GSD (Get Shit Done): Spec-Driven Claude Code Wrapper"
source: https://github.com/gsd-build/get-shit-done
saved: 2026-03-28
type: research
tags:
  - harness-engineering
  - agentic-sdlc
  - tools
  - claude-code
---

GSD is a Claude Code wrapper for phased spec-driven development, with atomic commits, modular phases, and built-in path and injection protections.

## Key takeaways

- **Phased commands**: New-project, discuss, plan, execute, and verify-work, with atomic git commits per task.
- **Modular phases**: Phases can be added, inserted, or reordered without rebuilding.
- **Prompt-only limits**: Verify is self-verification, with no adversarial evaluator, no cross-agent review, and prompt-based rather than middleware enforcement.
- **Practical shipping**: The note calls it the most practical tool in the space right now, installable via npx.
