---
title: Build Custom PR Agents on Cloudflare for Pennies
source: https://x.com/_bgiori/status/2031412763902534069
saved: 2026-03-10
type: tweet
tags:
  - agents
  - infrastructure
  - code-review
  - cloudflare
  - coding-agents
  - architecture
---

Brian Giori (Amplitude) on building custom PR agents using Cloudflare infra instead of paying for Claude Code Action / Codex GitHub Action / Cursor Bugbot.

## Key Takeaways

- **Bugbot Autofix pattern is the right UX**: agent pushes to a separate branch, posts PR comment with one-click merge button. Human reviews diff, decides. Generalizes to any skill.

- **Stack**: Cloudflare Workers (API) → Cloudflare Workflows (durable orchestration) → Cloudflare Sandbox (disposable containers) → Flue (sandbox agent framework, scoped proxies) → OpenCode (coding agent inside sandbox)

- **Skill-agnostic pipeline**: prepare → review → publish. Swap the skill markdown + result schema, get a completely different agent. Same human-in-the-loop workflow.

- **Typed agent output over prose**: Use structured schemas (Valibot) so agent returns data you can pipe into GitHub API calls, review comments, state machines — no NLP parsing.

- **Two-phase (prepare/publish) matters**: human stays in control, stale PR detection, conflict resolution via agent, full auditability (real git commits on named branches).

- **Safety is architecture, not prompting**: hashed capability tokens, scoped network proxies (agent never sees raw tokens), sandbox infrastructure, auto-invalidation when PR head changes.

- **Their first use case**: automatic event tracking observability at Amplitude. Agent reads diff → discovers patterns → plans events → implements tracking code → validates build → posts review with inline comments.

- **Re-trigger via comment**: `@amplitude track` on PR re-runs the agent with latest head SHA. Extensible to multiple skills via different trigger phrases.

## Relevance

This is essentially what sdlc-ded + acpx does but for CI/CD. The prepare/publish two-phase with capability links is a cleaner pattern than direct push. Worth considering for OpenClaw's GitHub integration or any future PR automation work. The Flue framework's scoped proxy approach for secrets is elegant.
