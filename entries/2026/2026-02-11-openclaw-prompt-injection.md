---
title: OpenClaw Group Chat Prompt Injection (0-day, patched)
source: https://x.com/marckohlbrugge/status/2021442885942702427
saved: 2026-02-11
type: tweet
tags:
  - security
  - openclaw
---

A patched OpenClaw group-chat 0-day spoofed owner messages by injecting fake `[Owner]` lines, then stole SSH keys and chat access.

## Key takeaways

- **Attack**: Fake `[Owner]` lines in group chat spoofed the owner.
- **Impact**: The attacker got SSH keys, modified SOUL.md, and accessed all chats.
- **Mitigation**: Keep group-facing bots sandboxed and the primary agent off shared channels.
