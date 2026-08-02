---
title: Awesome Agentic Patterns — Full Pattern Catalogue
source: https://agentic-patterns.com/llms.txt
saved: 2026-03-28
type: article
tags:
  - agentic-sdlc
  - patterns
  - reference
  - harness-engineering
---

# Agentic Patterns Catalogue

100+ named patterns at https://agentic-patterns.com. The llms.txt is machine-readable.

## Most Relevant to Our Work

### Evaluation & Verification
- **criticgpt-style-evaluation** — CriticGPT-style code review for catching subtle bugs
- **ai-assisted-code-review-verification** — bottleneck shifted from generation to verification
- **anti-reward-hacking-grader-design** — prevent models from gaming evaluators
- **self-critique-evaluator-loop** — self-critique for preference data
- **spec-as-test-feedback-loop** — spec drift detection
- **rich-feedback-loops** — ground truth > perfect prompts
- **inference-healed-code-review-reward** — nuanced quality beyond "tests passed"

### Architecture & Orchestration
- **planner-worker-separation-for-long-running-agents** — our Layer 2-3 split
- **initializer-maintainer-dual-agent** — distinct failure modes at different lifecycle stages
- **factory-over-assistant** — scale beyond 1:1 sidebar work
- **oracle-and-worker-multi-model** — cheap models for routing, expensive for building
- **opponent-processor-multi-agent-debate** — adversarial debate pattern

### Context & Memory
- **context-window-anxiety-management** — Sonnet 4.5 wrapping up prematurely
- **context-window-auto-compaction** — silent killer of reliability
- **context-minimization-pattern** — less is more
- **cross-cycle-consensus-relay** — transfer context across cycles
- **proactive-agent-state-externalization** — models writing their own notes

### Spec-Driven
- **specification-driven-agent-development** — specs reduce ambiguity
- **feature-list-as-immutable-contract** — contract pattern
- **discrete-phase-separation** — phase gates

### Self-Improvement
- **compounding-engineering-pattern** — each feature makes the next easier
- **self-rewriting-meta-prompt-loop** — agents improving their own prompts
- **skill-library-evolution** — persist working code as reusable skills
- **iterative-prompt-skill-refinement** — systematic improvement

### Safety
- **hook-based-safety-guard-rails** — pre/post execution hooks
- **deterministic-security-scanning-build-loop** — security needs absolute determinism
- **human-in-loop-approval-framework** — approval gates for high-risk functions

## How to Use
The llms.txt at https://www.agentic-patterns.com/llms.txt is a machine-readable index. Each pattern has a dedicated page with problem statement, solution, examples, and references.
