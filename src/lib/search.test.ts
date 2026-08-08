import { describe, expect, test } from "bun:test";
import {
  createSearchIndexLoader,
  maxSearchCharacters,
  parseSearchIndex,
  searchText,
} from "./search";

describe("searchText", () => {
  test("normalizes case and whitespace within the per-entry limit", () => {
    const value = searchText(["  TITLE\n", "Tag", "x".repeat(maxSearchCharacters * 2)]);

    expect(value.startsWith("title tag ")).toBe(true);
    expect(value.length).toBe(maxSearchCharacters);
  });
});

describe("parseSearchIndex", () => {
  test("rejects malformed entries", () => {
    expect(() => parseSearchIndex([{ slug: "entry" }])).toThrow(
      "search index contains an invalid entry",
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

    expect(first).toBe(second);
    expect(await first).toEqual({ entry: "text" });
    expect(await loader()).toEqual({ entry: "text" });
    expect(calls).toBe(1);
  });

  test("allows a retry after a failed load", async () => {
    let calls = 0;
    const loader = createSearchIndexLoader(async () => {
      calls += 1;
      if (calls === 1) throw new Error("offline");
      return [{ slug: "entry", search: "text" }];
    });

    const failure = await loader().catch((error: unknown) => error);
    expect(failure).toBeInstanceOf(Error);
    if (!(failure instanceof Error)) throw new Error("expected the loader to reject");
    expect(failure.message).toBe("offline");
    expect(await loader()).toEqual({ entry: "text" });
    expect(calls).toBe(2);
  });
});
