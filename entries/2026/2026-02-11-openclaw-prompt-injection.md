---
title: OpenClaw Group Chat Prompt Injection (0-day, patched)
source: https://x.com/marckohlbrugge/status/2021442885942702427
saved: 2026-02-11
type: tweet
tags:
  - security
  - openclaw
---

By Marc Köhlbrugge

Spoofed owner messages in group chat by injecting fake `[Owner]` lines. Got SSH keys, modified SOUL.md, accessed all chats. Classic prompt injection.

**Take:** The mitigation that matters is isolation — keep group-facing bots sandboxed and the primary agent off shared channels.
