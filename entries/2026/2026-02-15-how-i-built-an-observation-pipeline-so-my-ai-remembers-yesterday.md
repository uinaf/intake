---
title: How I Built an Observation Pipeline So My AI Remembers Yesterday
source: https://joelclaw.com/inngest-is-the-nervous-system
saved: 2026-02-15
type: article
tags:
  - ai-engineering
  - software-engineering
  - ai-adoption
  - hiring
  - education
  - geopolitics
  - world-order
  - agent-memory
  - distillation
  - long-term-memory
  - context-management
  - workflows
  - inngest
  - personal-ai
intaked_by: glitch418x
---

## How I Built an Observation Pipeline So My AI Remembers Yesterday
- **Author:** Joel Hooks (egghead.io)
- **URL:** https://joelclaw.com/inngest-is-the-nervous-system
- **Shared by:** Altay
- Type: article
- Tags: personal-ai, workflows, inngest, agent-memory, transcription

Personal AI system with Inngest (durable workflows) as orchestration layer. Two pipelines: (1) Video ingest — YouTube → yt-dlp → Whisper on Apple Silicon → vault note → AI enrichment with web research. (2) Autonomous coding loops — PRD → Planner → Implementor → Reviewer (writes tests from acceptance criteria, NOT implementation) → Judge → loop. Each role is a separate Inngest function with independent retry. Claim-check pattern for large data (pass file paths, not content). Self-hosted on Mac Mini with Bun + Hono + launchd. Kindred spirit setup — same stack vibes as ours.
