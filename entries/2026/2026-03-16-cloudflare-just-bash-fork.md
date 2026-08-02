---
title: Cloudflare forked just-bash — open source etiquette drama
source: https://x.com/cramforce/status/2033285112478171373
saved: 2026-03-16
type: tweet
tags:
  - cloudflare
  - frontend
  - open-source
  - fork
  - security
  - drama
  - developer-ecosystem
---

# Cloudflare forked just-bash

## What happened
- **Malte Ubl** (Vercel, just-bash maintainer) posted that Cloudflare forked [just-bash](https://justbash.dev/) and published it as `@cloudflare/shell` on npm.
- Legally fine (Apache 2.0), but Malte argues it violates open-source etiquette — no prior contribution attempts, no outreach to the sole maintainer.

## Malte's technical concerns
- just-bash is new, under heavy development, exploring the "sandbox for agents" space — bad time to fork.
- CF's fork **removed the beta disclaimer** and references to optional security-surface features.
- CF replaced the Python3 implementation with pyodide that gives full access to JS host environment — "will immediately get you owned."
- CF removed `DefenseInDepthBox` (disables eval, function constructor, etc.) — needed for Node.js/Deno even if Workers don't need it.
- CF removed prototype pollution checks.

## Guillermo Rauch's take
- Called it part of CF's pattern: "fork the entire developer ecosystem and destroy open source."
- Brought up Vinext (CF's Next.js fork) shipping with 10 vulnerabilities to a .gov site.
- Framed Workers/edge as something "no one wants."

## Sunil Pai (CF, @threepointone)
- Said it was personal experimentation, not a product launch.
- Apologized for not reaching out first, planned to talk Monday.
- Malte acknowledged they both should've communicated — "it's all good."

## Community reaction — split
- **Pro-Malte camp:** unnecessary fork, security regressions are dangerous, CF pattern of ecosystem capture.
- **Pro-fork camp:** it's Apache 2.0, forking is the point of OSS, "change the license if you don't want forks," "this could've been a DM."
- Several people called it an overreaction / corporate drama farming.
- Bun account posted a meme. Classic.

## Key insight
The real technical argument (security regressions in a sandbox tool for AI agents) got buried under the corporate rivalry narrative. The defense-in-depth removal is genuinely concerning regardless of the etiquette debate.
