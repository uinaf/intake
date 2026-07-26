---
title: Claude Certified Architect - Unofficial Study Guide
source: https://x.com/hooeem/status/2033198345045336559
saved: 2026-03-16
type: tweet
tags:
  - ai
  - anthropic
  - career
  - agents
  - mcp
intaked_by: glitch418x
---

# Claude Certified Architect Study Guide

Comprehensive breakdown of the Claude Certified Architect (Foundations) exam by @hooeem. Exam is partner-only but the knowledge is what matters.

## 5 Domains

1. **Agentic Architecture & Orchestration (27%)** — largest weight
   - Agentic loops: use `stop_reason`, never parse natural language for termination
   - Multi-agent: hub-and-spoke, subagents have NO shared memory with coordinator
   - High-stakes enforcement: hooks > prompts (programmatic > probabilistic)
   - Session management: resume vs fork vs fresh-with-summary

2. **Tool Design & MCP Integration (18%)**
   - Tool descriptions are THE selection mechanism — fix descriptions before adding routing classifiers
   - 4-5 tools per agent max, scope by role
   - `tool_choice`: auto / any / forced — know when to use each
   - Structured error responses with categories (transient, validation, business, permission)
   - MCP: project-level `.mcp.json`, env var expansion, prefer community servers

3. **Claude Code Configuration & Workflows (20%)**
   - CLAUDE.md hierarchy: user (~/.claude/) vs project (.claude/) vs directory-level
   - Path-specific rules: `.claude/rules/` with YAML frontmatter globs
   - Plan mode for complex multi-file, direct execution for clear scope
   - CI/CD: `-p` flag for non-interactive, `--output-format json`, independent review instance
   - Skills: `context: fork` for infrastructure, `allowed-tools` for restriction

4. **Prompt Engineering & Structured Output (20%)**
   - Explicit criteria > vague instructions ("be conservative" doesn't work)
   - Few-shot examples: 2-4 with reasoning for ambiguous cases
   - `tool_use` eliminates syntax errors but NOT semantic errors
   - Schema: nullable fields prevent fabrication, "unclear" enum values
   - Batch API: 50% savings, 24h window, no multi-turn, use for non-blocking only

5. **Context Management & Reliability (15%)**
   - Progressive summarization kills transactional data — use persistent "case facts" block
   - "Lost in the middle" effect — put key findings at the beginning
   - Escalation triggers: customer requests human (honor immediately), policy gaps, inability to progress
   - Error propagation: structured context, never silent suppression

## Key Resources
- [Agent SDK Overview](https://platform.claude.com/docs/en/agent-sdk/overview)
- [Building Agents with Claude Agent SDK](https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk)
- [Claude Code docs](https://code.claude.com/docs/en/mcp)
- [Anthropic Prompt Engineering](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview)
- [Anthropic courses on Skilljar](https://anthropic.skilljar.com/)

## Takeaway
The exam tests practical architecture decisions, not trivia. Key pattern: deterministic enforcement for high-stakes, prompt-based for low-stakes. Fix root causes (descriptions, decomposition) before adding complexity (classifiers, routing).
