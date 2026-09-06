---
title: OpenClaw cloud sessions separate durable work from execution machines
source: https://docs.openclaw.ai/gateway/cloud-sessions
saved: 2026-09-06
type: article
tags:
  - openclaw
  - cloud-agents
  - durability
---

OpenClaw keeps the conversation and accepted work under Gateway ownership while moving execution to paired hardware or disposable cloud workers. Remote placement is optional, not the default session destination.

## Key takeaways

- **Three destinations**: Sessions can run on the Gateway, paired devices, or cloud workers provisioned through Crabbox; the Gateway remains the default.
- **Separated responsibilities**: Remote machines perform execution while model inference is proxied through the Gateway, keeping model-provider credentials off the worker.
- **Repository sources**: A session can start from a GitHub repository and ref without a Gateway checkout. Restoration relies on the pinned upstream commit remaining available.
- **Durability boundary**: Accepted checkpoints or reconciled worktree changes survive replacement. Edits since the last reconciliation can be lost when a machine fails.
- **Recovery differences**: Cleanly suspended or reclaimed cloud sessions restart on the next message. Failed placements need cleanup and explicit redispatch; offline paired devices retain placement and wait.
- **Compute lifecycle**: Optional idle suspension releases compute after reconciliation. Compatible warm images speed later starts but retain snapshot-storage costs.
- **Placement permissions**: Paired-device dispatch requires write scope, while rented-cloud dispatch requires administrator scope. Remote execution does not itself establish team identity or access policy.
