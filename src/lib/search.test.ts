import assert from "node:assert/strict";
import { describe, test } from "node:test";
import {
  createSearchIndexLoader,
  maxSearchCharacters,
  parseSearchIndex,
  searchText,
} from "./search.ts";

describe("searchText", () => {
  test("normalizes case and whitespace within the per-entry limit", () => {
    const value = searchText(["  TITLE\n", "Tag", "x".repeat(maxSearchCharacters * 2)]);

    assert.equal(value.startsWith("title tag "), true);
    assert.equal(value.length, maxSearchCharacters);
  });
});

describe("parseSearchIndex", () => {
  test("rejects malformed entries", () => {
    assert.throws(
      () => parseSearchIndex([{ slug: "entry" }]),
      /search index contains an invalid entry/,
    );
  });
});

describe("createSearchIndexLoader", () => {
  test("shares and caches one in-flight load", async () => {
    let resolve: ((value: unknown) => void) | undefined;
    let calls = 0;
    const loader = createSearchIndexLoader(
      () =>
        new Promise((done) => {
          calls += 1;
          resolve = done;
        }),
    );

    const first = loader();
    const second = loader();
    resolve?.([{ slug: "entry", search: "text" }]);

    assert.equal(first, second);
    assert.deepEqual(await first, { entry: "text" });
    assert.deepEqual(await loader(), { entry: "text" });
    assert.equal(calls, 1);
  });

  test("allows a retry after a failed load", async () => {
    let calls = 0;
    const loader = createSearchIndexLoader(async () => {
      calls += 1;
      if (calls === 1) throw new Error("offline");
      return [{ slug: "entry", search: "text" }];
    });

    const failure = await loader().catch((error: unknown) => error);
    assert.ok(failure instanceof Error);
    assert.equal(failure.message, "offline");
    assert.deepEqual(await loader(), { entry: "text" });
    assert.equal(calls, 2);
  });
});
