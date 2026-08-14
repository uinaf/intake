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
---

Joel Hooks built a personal AI system with Inngest as the durable orchestration layer: video ingest plus autonomous coding loops, self-hosted on a Mac Mini.

## Key takeaways

- **Video ingest**: YouTube to yt-dlp to Whisper on Apple Silicon, then a vault note and AI enrichment with web research.
- **Coding loop**: PRD to Planner to Implementor to Reviewer (tests from acceptance criteria, not implementation) to Judge, then loop.
- **Independent retries**: Each role is a separate Inngest function with its own retry.
- **Claim-check**: Large data is passed as file paths, not content.
- **Stack**: Self-hosted on a Mac Mini with Bun, Hono, and launchd.
