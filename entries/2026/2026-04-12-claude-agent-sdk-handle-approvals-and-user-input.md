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
---

The most complete HITL implementation reference: `canUseTool` pauses on every tool request, `AskUserQuestion` surfaces structured clarifications, and streaming input enables mid-execution redirects.

## Key takeaways

- **Approval shapes**: `canUseTool` supports allow, deny, approve-with-changes, and suggest-alternative responses.
- **Mid-task questions**: `AskUserQuestion` surfaces structured clarifications during a task.
- **Streaming redirects**: Streaming input enables mid-execution redirects.
- **Approve with changes**: Modifying tool input before execution is the reference design for safe-by-default harnesses that do not simply block or permit.
