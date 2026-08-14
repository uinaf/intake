---
title: How we rebuilt Next.js with AI in one week (vinext)
source: https://blog.cloudflare.com/vinext
saved: 2026-02-24
type: article
tags:
  - frontend
  - token-cost
  - cloudflare-workers
---

One Cloudflare engineer plus AI rebuilt the Next.js API on Vite in a week for about $1,100 in tokens. The result is `vinext`, a drop-in replacement that deploys to Workers.

## Key takeaways

- **Cost**: About $1,100 in tokens and one week of one engineer.
- **Benchmarks**: 4.4x faster builds with Vite 8/Rolldown and 57% smaller client bundles versus Next.js 16.
- **Coverage**: 1,700+ Vitest tests, 380 Playwright E2E tests, and 94% API surface coverage.
- **Build vs buy**: Reimplementation became cheaper than maintaining an adapter.
