---
title: Claude Agent SDK — Handle Approvals and User Input
source: https://platform.claude.com/docs/en/agent-sdk/user-input
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - design-primitives
  - human-in-the-loop
  - docs
intaked_by: glitch418x
---

## Why it matters
The most complete implementation reference for HITL mechanics: `canUseTool` callback pauses execution at every tool request with allow/deny/approve-with-changes/suggest-alternative response shapes; `AskUserQuestion` surfaces structured clarifications mid-task; streaming input enables mid-execution redirects. The "approve with changes" pattern — modifying tool input before execution — is the reference design for safe-by-default harnesses that don't simply block or permit.

## Classification
- Section: Design Primitives
- Subsection: Human-in-the-Loop
- Type: docs
