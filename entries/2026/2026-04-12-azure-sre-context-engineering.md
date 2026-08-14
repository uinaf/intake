---
title: Microsoft - Context Engineering Lessons from Azure SRE Agent
source: https://techcommunity.microsoft.com/blog/appsonazureblog/context-engineering-lessons-from-building-azure-sre-agent/4481200
saved: 2026-04-12
type: article
tags:
  - harness-engineering
  - context-engineering
  - production
  - microsoft
---

Context-engineering lessons from Azure SRE Agent: exposing code, runbooks, schemas, and notes as files beat a zoo of bespoke tools.

## Key takeaways

- **Filesystem won**: Exposing code, runbooks, schemas, and notes as files outperformed specialized tool zoos.
- **Simple primitives**: `read_file`, grep, find, and shell beat over-specialized wrappers surprisingly often.
- **Context over prompts**: Evidence that context structure matters more than prompt cleverness.
