import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { markdownSafetyIssues } from "../../scripts/markdown-safety.ts";
import { entryBodyIssues } from "./entry-body.ts";
import { rewriteEntryBody } from "./rewrite-entry-body.ts";

describe("rewriteEntryBody", () => {
  test("labels unlabeled takeaways and folds extra sections", () => {
    const rewritten =
      rewriteEntryBody(`Theo describes improving his coding-agent workflow by turning failures into durable rules.

## Key takeaways

- Treat agent instructions as accumulated operational feedback from prior conversations.
- Skill metadata is primarily a routing surface for the phrases that should activate a skill.
- Concrete bad/good examples can encode taste more effectively than abstract advice.

## Caveats

The video is an anecdotal workflow report, not a controlled evaluation of Markdown alone.
`);
    assert.deepEqual(entryBodyIssues(rewritten), []);
    assert.match(rewritten, /\*\*Caveats\*\*/);
  });

  test("uses the summary and drops metadata scaffolding", () => {
    const rewritten = rewriteEntryBody(`## Metadata
- Speaker: Andrej Karpathy
- Publisher: Sequoia Capital
- Length: ~29m49s

## Summary
Karpathy frames the current shift as more than faster coding: it is the emergence of software 3.0, where LLMs behave like a new programmable computer.

## Key takeaways

- Software 3.0 treats LLMs as programmable computers and prompts as the interface.
- Verifiable domains are where LLM capability compounds fastest.
- The human moves up-stack into specification, taste, and oversight.
`);
    assert.deepEqual(entryBodyIssues(rewritten), []);
    assert.doesNotMatch(rewritten, /Metadata|Speaker:|Publisher:/);
    assert.match(rewritten, /software 3\.0/i);
  });

  test("uses why-it-matters prose and skips classification metadata", () => {
    const rewritten = rewriteEntryBody(`## Why it matters
Addresses the core problem of debugging agents that run for minutes, span hundreds of steps, and produce massive traces no human can manually scan. Introduces Polly for trace analysis and a CLI for piping data to coding agents. The volume of data these systems produce exceeds human capacity.

## Classification
- Section: Design Primitives
- Subsection: Debugging & Developer Experience
- Type: article
`);
    assert.deepEqual(entryBodyIssues(rewritten), []);
    assert.doesNotMatch(rewritten, /Classification/);
    assert.doesNotMatch(rewritten, /Design Primitives/);
  });

  test("turns digest title blocks into takeaways", () => {
    const rewritten = rewriteEntryBody(`**Apps Are Dead. Now What?** — Chrys Bader
https://x.com/chrysb/status/1
- Type: tweet
- Tags: saas
SaaS value shifting from UI to API.
*Take:* Directionally right but overstates the timeline for killing apps.

**The End of Linear Work** — Augment Code
https://x.com/augmentcode/status/2
Git breaks under multi-agent parallel execution.
*Take:* Correct diagnosis — coordination is the bottleneck, not execution.

**Scaling Long-Running Autonomous Coding** — Cursor
https://cursor.com/blog/scaling-agents
Cursor ran hundreds of agents for weeks.
*Take:* Impressive scale but all compiled-language projects.
`);
    assert.deepEqual(entryBodyIssues(rewritten), []);
    assert.match(rewritten, /Apps Are Dead/);
    assert.match(rewritten, /coordination is the bottleneck/);
  });

  test("keeps rust generics and command placeholders out of raw HTML", () => {
    const rewritten =
      rewriteEntryBody(`Rust walkthrough of parse-don't-validate using newtypes at construction boundaries.

## Key takeaways

- Prefer \`NonEmptyVec<T>\` over repeated empty checks downstream.
- Encode invariants in types instead of sprinkling runtime validation.
- Map the same idea onto schema-first API boundaries.

## Pattern

\`\`\`
/goal <desired end state> verified by <specific evidence>
\`\`\`
`);
    assert.deepEqual(entryBodyIssues(rewritten), []);
    assert.deepEqual(markdownSafetyIssues(rewritten), []);
    assert.doesNotMatch(rewritten, /<T>/);
    assert.doesNotMatch(rewritten, /<desired end state>/);
  });
});
