---
title: "Claude Code auto mode: a safer way to skip permissions"
source: https://anthropic.com/engineering/claude-code-auto-mode
saved: 2026-03-26
type: article
tags:
  - claude-code
  - security
  - permissions
  - coding-agents
  - anthropic
  - prompt-injection
---

Anthropic's auto mode delegates approval to model-based classifiers, sitting between manual review and dangerously-skip-permissions.

## Key takeaways

- **Approval fatigue**: Users accept 93% of default prompts anyway, while skip-permissions has caused real incidents such as deleting remote branches and uploading GitHub tokens.
- **Two defense layers**: A prompt-injection probe warns on suspect tool outputs. A Sonnet 4.6 transcript classifier then judges actions in two stages without seeing assistant text or tool results.
- **Permission tiers**: Safe-read tools and in-project writes are allowed. Shell, fetches, external tools, and out-of-project ops go through the classifier.
- **Threat model**: The primary target is overeager helpfulness. Honest mistakes, prompt injection, and misaligned goals are also in scope.
- **Measured miss rate**: The full pipeline shows 0.4% false positives on real traffic and a 17% miss rate on real overeager actions, mostly from misreading consent. Better than skip-permissions, not a replacement for human review on high-stakes infra.
