---
title: Claude Agent SDK
source: https://platform.claude.com/docs/en/agent-sdk/overview
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - reference-implementations
  - generators-and-meta-harnesses
  - docs
---

Anthropic's official SDK exposing Claude Code's harness as a programmable API, including the tool loop, hooks, subagents, permissions, and session resumption.

## Key takeaways

- **Inherited loop**: Built-in tool execution loop so you inherit the execution layer rather than implementing it.
- **Interception hooks**: `PreToolUse` and `PostToolUse` hooks for intercepting tool calls.
- **Permissions and sessions**: `allowedTools` permission control plus session resumption.
- **Starting point**: Called the highest-leverage starting point for building a production harness.
