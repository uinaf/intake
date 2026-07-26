---
title: "Harness Engineering: Leveraging Codex in an Agent-First World"
source: https://openai.com/index/harness-engineering
saved: 2026-03-06
type: article
tags:
  - agents
  - coding-agents
  - openai
  - architecture
intaked_by: glitch418x
---

# Harness Engineering — OpenAI

OpenAI built and shipped an internal product with zero manually-written code over 5 months. ~1M lines, ~1,500 PRs, 3→7 engineers, all Codex-generated. 1/10th estimated time vs hand-written.

## Key Lessons

### AGENTS.md as map, not manual
- One big AGENTS.md failed: crowded context, rotted fast, couldn't verify
- Now ~100 lines, table of contents pointing to structured `docs/` directory
- Progressive disclosure: small stable entry point, pointers to deeper sources

### Repo as system of record
- If it's not in the repo, it doesn't exist to the agent
- Slack convos, Google Docs, tribal knowledge = invisible
- Push everything into versioned markdown artifacts
- Design docs catalogued with verification status
- Execution plans as first-class artifacts with progress/decision logs
- "Doc-gardening" agent scans for stale docs, opens fix-up PRs

### Mechanical enforcement over instructions
- Rigid layered architecture: Types → Config → Repo → Service → Runtime → UI
- Custom linters with remediation instructions in error messages
- Enforce invariants centrally, allow autonomy locally
- "Parse, don't validate" at boundaries
- Taste invariants: structured logging, naming conventions, file size limits

### Agent legibility
- App bootable per git worktree (isolated instance per change)
- CDP wired in for DOM snapshots, screenshots, navigation
- Ephemeral observability stack per worktree (LogQL, PromQL)
- Single Codex runs working 6+ hours overnight
- Favor "boring" tech — composable, stable APIs, well-represented in training data
- Sometimes cheaper to reimplement than wrap opaque libraries

### Garbage collection
- Used to spend every Friday cleaning "AI slop" — didn't scale
- Replaced with recurring background Codex tasks: scan deviations, grade quality, open refactoring PRs
- "Golden principles" encoded in repo, enforced continuously
- Technical debt = high-interest loan, pay continuously

### Throughput changes merge philosophy
- Minimal blocking merge gates
- Corrections cheap, waiting expensive
- Agent-to-agent review replaces most human review
- Test flakes addressed with follow-up runs, not blocking

### Full autonomy loop
- Single prompt → validate state → reproduce bug → record video → fix → validate → record resolution video → open PR → respond to feedback → remediate build failures → escalate only when judgment needed → merge

## Notable quotes
- "Give Codex a map, not a 1,000-page instruction manual"
- "When something failed, the fix was almost never 'try harder'"
- "The discipline shows up more in the scaffolding rather than the code"
