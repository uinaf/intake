# Save an article

This working directory is a checkout of `uinaf/intake`. You have no network
access and no push access from here, so stop after writing the entry file and
tell me what you would publish.

Save this article for me:
https://ambercode.dev/blog/context-budgets-for-coding-agents

I already fetched the full text into `article.txt` because the network is off.

======= FILE: article.txt =======
Context budgets for coding agents
Rin Kavala — ambercode.dev, August 2026

Most coding agents fail long before they run out of intelligence; they run out
of attention. Every file an agent reads competes with the instructions it is
supposed to follow, and by the time a session has ingested a dozen full files,
the original task is a minority shareholder in its own context window.

The fix we landed on at Ambercode is a context budget: a per-task ceiling on
retrieved tokens, allocated before the agent starts reading. The budget is
split three ways. Orientation gets about ten percent — the repo map, the task
statement, the conventions file. Evidence gets sixty — code the agent must
actually modify or imitate. The rest is held back for verification output,
because an agent that spends its whole window reading has nothing left for
test failures.

Two practices made budgets stick. First, retrieval has to be excerpt-first:
agents request line ranges, not files, and a full-file read requires the agent
to say why. In our traces, excerpt-first retrieval cut median context use by
44 percent with no measurable drop in task success. Second, budgets are
enforced by the harness, not by prompt exhortation. Asking a model to please
read less is a suggestion; refusing the fetch is a policy.

There are real limits. Budgets punish exploratory work — debugging an
unfamiliar failure legitimately needs wide reading, and we exempt those
sessions. Refactors that touch many files strain the evidence share, and the
right response is decomposition, not a bigger ceiling. And a budget does
nothing about stale context: an agent that read the right file before an edit
still holds the wrong bytes after it.

The uncomfortable summary is that context management is capacity planning,
not prompting. Treat the window as a scarce resource with an owner and an
allocation, and agents finish tasks they used to wander out of.
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

======= FILE: entries/2026/2026-07-02-harness-enforced-policies.md =======
---
title: Harness-enforced policies beat prompt exhortation
source: https://example.org/harness-policies
saved: 2026-07-02
type: article
tags:
  - agent-engineering
  - tooling
---

A short case for enforcing agent behavior in the harness instead of asking for
it in the prompt: refusals are policies, requests are suggestions.

## Key takeaways

- **Claim**: behavioral rules hold only when the harness can refuse the action.
- **Limitation**: hard refusals frustrate legitimately exceptional sessions.
- **Use**: a good framing when deciding where a new agent rule should live.
======= END FILE =======
