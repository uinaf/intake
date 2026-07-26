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
intaked_by: github-username
---

A compact summary in the agent's own words.

## Key takeaways

- The most useful point.
- An important limitation or tradeoff.
```

Required fields, in order:

1. `title`
2. `source`
3. `saved`
4. `type`
5. `tags`
6. `intaked_by`

`source` must be the canonical public URL when one is known. Validation strips
fragments and common tracking parameters when detecting duplicates.
