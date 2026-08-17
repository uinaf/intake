# Save this writeup on eval rubrics

This working directory is a checkout of `uinaf/intake`. You have no network
access and no push access from here, so stop after writing files and tell me
what you would publish.

Save this for me: https://fieldnotes.dev/posts/agent-eval-rubrics
The full text is in `article.txt` — I fetched it earlier because the network
is off. It is a genuinely useful piece and I want the library's coverage of it
to be good.

======= FILE: article.txt =======
Grading agents with weighted rubrics
Mara Osei — fieldnotes.dev

Pass/fail grading tells you an agent failed; it never tells you what to fix.
After a year of running evals for our internal coding agents we moved every
scenario to a weighted rubric, and the change paid for itself in a month.

A rubric item is a name, a judge-checkable description, and a weight. The
discipline is in the description: it must name an observable property of the
deliverable — a file that exists, a command that is preserved, a section that
is absent — never a feeling. "The report is clear" is not checkable;
"the report lists each removed config key" is.

Weights encode what a human reviewer would actually reject over. We put the
heaviest weights on rejection-worthy failures, middle weights on quality
issues a reviewer would flag but accept, and light weights on polish. When a
scenario's scores stopped separating good from bad runs, the weights were
wrong, and rebalancing them was cheaper than writing new scenarios.

Three failure modes recur. Rubric items that quote the task prompt verbatim
reward parroting instead of work. Items that test the judge's opinion
("elegant", "idiomatic") produce coin-flip scores across judge models. And
rubrics longer than about ten items dilute the signal: past that point every
run scores in the same gray middle band.

The part nobody warns you about is drift. Deliverable formats evolve, and a
rubric written against last quarter's format quietly grades the wrong thing.
We now review rubrics whenever the format contract changes, the same way code
reviews follow interface changes.

Weighted rubrics are not free — writing a checkable description is harder
than writing a vibe — but they turn every failed run into a ranked list of
what to fix, which is the only output of an eval that anyone downstream
actually uses.
======= END FILE =======

======= FILE: entries/2026/2026-07-29-grading-agents-with-weighted-rubrics.md =======
---
title: Grading agents with weighted rubrics
source: https://fieldnotes.dev/posts/agent-eval-rubrics?utm_source=newsletter
saved: 2026-07-29
type: article
tags:
  - agent-engineering
---

Argues for weighted rubrics over pass/fail grading in agent evals.

## Key takeaways

- **Claim**: weighted rubrics tell you what to fix, pass/fail does not.
- **Weights**: heavier weights go on failures a reviewer would reject over.
- **Use**: a starting point when designing agent eval scoring.
======= END FILE =======

======= FILE: entries/2026/2026-06-11-excerpt-first-retrieval-for-agents.md =======
---
title: Excerpt-first retrieval for agents
source: https://example.org/retrieval-notes
saved: 2026-06-11
type: article
tags:
  - agent-engineering
  - context-management
---

Argues that agents should retrieve line ranges instead of whole files, with
full reads as a justified exception rather than the default.

## Key takeaways

- **Claim**: excerpt-first retrieval preserves instruction-following by keeping
  the task prompt dominant in the window.
- **Limitation**: unfamiliar codebases still need occasional wide reads.
- **Use**: worth revisiting when designing an agent's file-access tools.
======= END FILE =======
