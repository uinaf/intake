# Entry format

Store one source per file:

```text
entries/YYYY/YYYY-MM-DD-kebab-case.md
```

The file stem is the permanent public slug. Do not rename an existing entry
merely to improve its title.

```markdown
---
title: A useful source title
source: https://example.com/original
saved: 2026-07-26
type: article
tags:
  - agent-engineering
  - tooling
---

A compact summary in the agent's own words.

## Key takeaways

- **Claim**: the most useful point, in one or two sentences.
- **Limitation**: an important tradeoff or uncertainty.
- **Use**: when this source is worth opening again.
```

Required fields, in order:

1. `title`
2. `source`
3. `saved`
4. `type`
5. `tags`

`source` must be the canonical public URL when one is known. Validation strips
fragments and common tracking parameters when detecting duplicates.

The body must not open with the title again, and must not use level-1 headings
at all: the page renders `title` as its `h1`, so sections start at `##`.

The body is exactly two parts:

1. A short overview — one or two paragraphs, 40–400 characters of plain text.
2. `## Key takeaways` — three to eight labeled items, each
   `- **Label**: description`. No other headings.

The site renders the takeaways as a ruled list. Unstructured walls of prose
fail validation. Temporary exceptions can be listed in
`scripts/entry-body-ratchet.json` and must be removed when an entry is
rewritten.
