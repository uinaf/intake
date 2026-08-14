import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { entryBodyIssues, parseEntryBody, stripScaffoldingSections } from "./entry-body.ts";

const valid = `Full write-up of the Amplitude PR-agent stack on Cloudflare, with a human merge click.

## Key takeaways

- **Stack**: workers, workflows, sandbox, opencode, KV handoff.
- **Prepare**: clone the PR head, run a skill, post a one-click merge link.
- **Publish**: hashed token plus unchanged SHA; nothing merges without a click.
`;

describe("parseEntryBody", () => {
  test("reads overview plus labeled takeaways", () => {
    const parsed = parseEntryBody(valid);
    assert.equal(parsed.kind, "structured");
    if (parsed.kind !== "structured") return;
    assert.match(parsed.overview, /Amplitude/);
    assert.equal(parsed.takeaways.length, 3);
    assert.equal(parsed.takeaways[0]?.label, "Stack");
    assert.match(parsed.takeaways[0]?.text ?? "", /workflows/);
  });

  test("keeps extra sections as rest", () => {
    const parsed = parseEntryBody(`${valid}\n## Caveats\n\nBecause.\n`);
    assert.equal(parsed.kind, "structured");
    if (parsed.kind !== "structured") return;
    assert.match(parsed.rest, /Caveats/);
    assert.ok(
      entryBodyIssues(`${valid}\n## Caveats\n\nBecause.\n`).includes(
        "body may only have ## Key takeaways after the overview",
      ),
    );
  });
});

describe("entryBodyIssues", () => {
  test("accepts the canonical shape", () => {
    assert.deepEqual(entryBodyIssues(valid), []);
  });

  test("requires the takeaways heading", () => {
    assert.deepEqual(
      entryBodyIssues("Just a compact paragraph about the source and nothing else."),
      ["body must be a short overview followed by ## Key takeaways"],
    );
  });

  test("requires labeled takeaways", () => {
    const body = `A compact overview of the source that is long enough to pass.

## Key takeaways

- something useful without a label that is still a full sentence.
- **Prepare**: clone the PR head, run a skill, post a merge link.
- **Publish**: hashed token plus unchanged SHA; nothing merges without a click.
`;
    assert.ok(entryBodyIssues(body).some((issue) => issue.includes("**Label**:")));
  });
});

describe("stripScaffoldingSections", () => {
  test("drops metadata and classification headings", () => {
    const stripped = stripScaffoldingSections(`## Metadata
- Speaker: Andrej Karpathy

## Summary
Karpathy on software 3.0.

## Classification
- Type: video
`);
    assert.doesNotMatch(stripped, /Metadata|Speaker|Classification/);
    assert.match(stripped, /## Summary/);
  });
});
