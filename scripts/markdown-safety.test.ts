import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { markdownSafetyIssues } from "./markdown-safety.ts";

describe("markdownSafetyIssues", () => {
  test("accepts ordinary Markdown and inert code examples", () => {
    const markdown = [
      "## Summary",
      "",
      "Read [the source](https://example.com), [mail us](mailto:hello@example.com), or [jump](#details).",
      "",
      "Inline code such as `<section>` is preserved as text.",
    ].join("\n");

    assert.deepEqual(markdownSafetyIssues(markdown), []);
  });

  test("accepts forbidden-looking constructs inside an indented code block", () => {
    const markdown = [
      "    <strong>inert HTML example</strong>",
      "    ![inert image example](https://example.com/image.png)",
    ].join("\n");

    assert.deepEqual(markdownSafetyIssues(markdown), []);
  });

  test("rejects raw HTML", () => {
    const issues = markdownSafetyIssues("Text\n\n<strong>raw</strong>");
    assert.equal(issues.length, 1);
    assert.equal(issues[0]?.line, 3);
    assert.equal(issues[0]?.message, "raw HTML is not allowed");
  });

  test("rejects inline and referenced images", () => {
    const issues = markdownSafetyIssues(
      "![inline](https://example.com/a.png)\n\n![reference][art]\n\n[art]: /a.png",
    );

    assert.deepEqual(
      issues.map(({ message }) => message),
      ["images are not allowed", "images are not allowed"],
    );
  });

  test("rejects unsafe inline link schemes", () => {
    const issues = markdownSafetyIssues("[unsafe](data:text/plain,example)");
    assert.equal(issues.length, 1);
    assert.equal(issues[0]?.message, 'unsafe link URL "data:text/plain,example"');
  });

  test("rejects unsafe referenced link schemes", () => {
    const issues = markdownSafetyIssues("[unsafe][target]\n\n[target]: file:///tmp/example");
    assert.equal(issues.length, 1);
    assert.equal(issues[0]?.line, 3);
    assert.equal(issues[0]?.message, 'unsafe link URL "file:///tmp/example"');
  });

  test("inspects constructs inside footnote definitions", () => {
    const issues = markdownSafetyIssues(
      [
        "Notes[^image][^link]",
        "",
        "[^image]: ![tracking pixel](https://example.com/pixel.png)",
        "[^link]: [local file](file:///tmp/example)",
      ].join("\n"),
    );

    assert.deepEqual(
      issues.map(({ message }) => message),
      ["images are not allowed", 'unsafe link URL "file:///tmp/example"'],
    );
  });
});
