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

Brian Giori's write-up of Amplitude's PR-agent stack: a skill-agnostic prepare, review, and publish pipeline on Cloudflare, with OpenCode in Sandboxes and a one-click human merge.

## Key takeaways

- **Stack**: Workers for webhooks and capability links, Workflows for durable steps, one Sandbox per instance, Flue for scoped proxies, OpenCode as the headless agent, and KV for handoff state.
- **Prepare lane**: Verify the webhook, start a Workflow, clone the PR head, run a skill, commit to a separate branch, and post inline comments plus a merge link.
- **Human publish**: A capability link checks a hashed token and unchanged head SHA, then merges the prepare branch. Nothing lands without an explicit click.
- **Safety architecture**: Scoped egress, secrets kept out of the sandbox env, handoff invalidation on head move, and typed Valibot skill results instead of prose parsing.
- **Re-trigger**: `@amplitude track` and later per-skill phrases start a fresh prepare on the latest head.
- **Swap skills**: First production skill is analytics event tracking; the same pipeline is meant for review, tests, docs sync, or internal patterns.
