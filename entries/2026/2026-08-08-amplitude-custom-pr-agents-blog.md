---
title: How Amplitude built custom PR agents on Cloudflare
source: https://amplitude.com/blog/custom-pr-agent
saved: 2026-08-08
type: article
tags:
  - code-review
  - cloudflare
  - coding-agents
  - architecture
  - agents
  - infrastructure
---

Full write-up of Brian Giori's Amplitude PR-agent stack (expanded from the earlier X thread). Skill-agnostic prepare → review → publish pipeline on Cloudflare, with OpenCode inside Sandboxes and Bugbot-style human merge UX.

## Key takeaways

- **Stack**: Workers (webhooks + capability links) → Workflows (durable multi-step) → Sandbox (one container per instance) → Flue (sandbox orchestration + scoped proxies) → OpenCode (headless coding agent) → KV handoff state.
- **Prepare**: verify webhook, start Workflow, clone/checkout PR head, run a skill, commit to a *separate* branch, post review with inline comments + one-click merge capability link. Workflow ID = PR + head SHA for dedupe; GitHub Check Runs for visibility.
- **Publish**: capability link validates hashed token and unchanged head SHA, then merges prepare branch (agent may resolve conflicts). Nothing lands without explicit human click.
- **Safety is architecture**: scoped egress proxies (model + limited GitHub writes), secrets never in sandbox env, handoff invalidation on head move, typed Valibot skill results (not prose parsing).
- **Re-trigger**: `@amplitude track` (and future per-skill phrases) starts a fresh prepare on latest head.
- First production skill is analytics event tracking, but the same pipeline is meant for custom review, tests, docs sync, or internal pattern enforcement—swap skill markdown + result schema.
