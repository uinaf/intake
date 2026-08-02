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

# How we rebuilt Next.js with AI in one week (vinext)

By Steve Faulkner (Cloudflare)

One Cloudflare engineer + AI rebuilt the Next.js API surface on top of Vite in a week for ~$1,100 in tokens. The result is `vinext` — a drop-in replacement (`npm install vinext`) that uses Vite instead of Turbopack. Deploys to Cloudflare Workers. Early benchmarks: 4.4x faster builds (with Vite 8/Rolldown), 57% smaller client bundles vs Next.js 16. 1,700+ Vitest tests, 380 Playwright E2E tests, 94% API surface coverage.

**Take:** Reimplementation became cheaper than maintaining an adapter. That flips the build-vs-buy calculus for a lot of infra. Also bullish signal for Vite/Rolldown as the convergence point for frontend tooling.
