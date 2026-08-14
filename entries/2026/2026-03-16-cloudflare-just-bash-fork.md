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

Cloudflare forked Vercel's just-bash as `@cloudflare/shell`. Legally fine under Apache 2.0; Malte Ubl says it skipped open-source etiquette and dropped security surfaces.

## Key takeaways

- **Etiquette**: No prior contribution attempts or outreach to the sole maintainer; the project was still in heavy development.
- **Security regressions**: Beta disclaimer, DefenseInDepthBox, and prototype-pollution checks were removed; the pyodide replacement can expose the JS host.
- **Rivalry narrative**: Guillermo Rauch framed it as ecosystem capture; Sunil Pai said it was personal experimentation and apologized.
- **Split community**: Pro-fork camp says Apache 2.0 means forking is the point; others call it drama farming.
- **Real issue**: The defense-in-depth removal in an agent sandbox got buried under corporate rivalry.
