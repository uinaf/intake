import { fromMarkdown } from "mdast-util-from-markdown";
import type { Nodes, PhrasingContent, RootContent } from "mdast";

export const takeawaysHeading = "key takeaways";
export const maxOverviewCharacters = 400;
export const minOverviewCharacters = 40;
export const minTakeaways = 3;
export const maxTakeaways = 8;
export const scaffoldingHeadings = new Set(["metadata", "classification", "raw tweet", "raw post"]);

export interface Takeaway {
  label: string | null;
  text: string;
}

export type ParsedEntryBody =
  | {
      kind: "structured";
      overview: string;
      rest: string;
      takeaways: Array<Takeaway>;
    }
  | {
      kind: "unstructured";
      raw: string;
    };

const headingPattern = /^##[ \t]+(.+?)[ \t]*$/gm;
const takeawayItemPattern = /^\s*[-*+]\s+([\s\S]*)$/;
const labeledTakeawayPattern = /^\*\*(.+?)\*\*\s*[:—–]\s*([\s\S]*)$/;

export function parseEntryBody(body: string): ParsedEntryBody {
  const trimmed = body.trim();
  const sections = splitSections(trimmed);
  if (!sections) return { kind: "unstructured", raw: trimmed };

  const [overview, heading, takeawaysBody, rest] = sections;
  if (normalizeHeading(heading) !== takeawaysHeading) {
    return { kind: "unstructured", raw: trimmed };
  }

  const takeaways = parseTakeaways(takeawaysBody);
  if (takeaways.length === 0) return { kind: "unstructured", raw: trimmed };

  return {
    kind: "structured",
    overview: overview.trim(),
    rest: rest.trim(),
    takeaways,
  };
}

export function entryBodyIssues(body: string): Array<string> {
  const parsed = parseEntryBody(body);
  if (parsed.kind !== "structured") {
    return ["body must be a short overview followed by ## Key takeaways"];
  }

  const issues: Array<string> = [];
  const overviewText = plainOverview(parsed.overview);
  const paragraphs = parsed.overview
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (overviewText.length < minOverviewCharacters) {
    issues.push(`overview must be at least ${minOverviewCharacters} characters`);
  }
  if (overviewText.length > maxOverviewCharacters) {
    issues.push(`overview must be at most ${maxOverviewCharacters} characters`);
  }
  if (paragraphs.length === 0 || paragraphs.length > 2) {
    issues.push("overview must be one or two paragraphs");
  }
  if (parsed.rest.length > 0) {
    issues.push("body may only have ## Key takeaways after the overview");
  }
  if (parsed.takeaways.length < minTakeaways || parsed.takeaways.length > maxTakeaways) {
    issues.push(`key takeaways must have ${minTakeaways}–${maxTakeaways} items`);
  }
  for (const [index, takeaway] of parsed.takeaways.entries()) {
    if (!takeaway.label) {
      issues.push(`takeaway ${index + 1} must start with **Label**:`);
    }
    if (takeaway.text.trim().length < 20) {
      issues.push(`takeaway ${index + 1} needs a useful description`);
    }
  }
  return issues;
}

export function stripScaffoldingSections(body: string): string {
  headingPattern.lastIndex = 0;
  const matches = [...body.matchAll(headingPattern)];
  if (matches.length === 0) return body;

  const parts: Array<string> = [];
  const first = matches[0];
  if (first?.index) parts.push(body.slice(0, first.index));

  for (const [index, match] of matches.entries()) {
    if (scaffoldingHeadings.has(normalizeHeading(match[1] ?? ""))) continue;
    const start = match.index ?? 0;
    const end = matches[index + 1]?.index ?? body.length;
    parts.push(body.slice(start, end));
  }
  return parts.join("").trim();
}

export function renderMarkdown(markdown: string): string {
  const tree = fromMarkdown(markdown);
  return tree.children.map((node) => renderBlock(node)).join("");
}

function splitSections(body: string): [string, string, string, string] | null {
  headingPattern.lastIndex = 0;
  const first = headingPattern.exec(body);
  if (!first || first.index === undefined) return null;

  const overview = body.slice(0, first.index);
  const heading = first[1] ?? "";
  const after = body.slice(headingPattern.lastIndex);
  headingPattern.lastIndex = 0;
  const next = headingPattern.exec(after);
  if (!next || next.index === undefined) {
    return [overview, heading, after, ""];
  }
  return [overview, heading, after.slice(0, next.index), after.slice(next.index)];
}

function parseTakeaways(section: string): Array<Takeaway> {
  const items: Array<string> = [];
  for (const line of section.split(/\r?\n/)) {
    const item = line.match(takeawayItemPattern);
    if (item) {
      items.push(item[1] ?? "");
      continue;
    }
    if (items.length > 0 && line.trim() !== "") {
      items[items.length - 1] = `${items[items.length - 1]}\n${line.trim()}`;
    }
  }

  return items.map((item) => {
    const labeled = item.trim().match(labeledTakeawayPattern);
    if (labeled) {
      return { label: labeled[1]?.trim() ?? null, text: (labeled[2] ?? "").trim() };
    }
    return { label: null, text: item.trim() };
  });
}

function normalizeHeading(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function plainOverview(markdown: string): string {
  return markdown
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/[*_~]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function renderBlock(node: RootContent): string {
  if (node.type === "paragraph") return `<p>${renderPhrasing(node.children)}</p>`;
  if (node.type === "heading") {
    const level = Math.min(Math.max(node.depth, 2), 6);
    return `<h${level}>${renderPhrasing(node.children)}</h${level}>`;
  }
  if (node.type === "blockquote") {
    return `<blockquote>${node.children.map((child) => renderBlock(child)).join("")}</blockquote>`;
  }
  if (node.type === "list") {
    const items = node.children
      .map((item) => `<li>${item.children.map((child) => renderBlock(child)).join("")}</li>`)
      .join("");
    return node.ordered ? `<ol>${items}</ol>` : `<ul>${items}</ul>`;
  }
  if (node.type === "code") return `<pre><code>${escapeHtml(node.value)}</code></pre>`;
  if (node.type === "thematicBreak") return "<hr />";
  return "";
}

function renderPhrasing(nodes: Array<PhrasingContent>): string {
  return nodes.map((node) => renderPhrase(node)).join("");
}

function renderPhrase(node: PhrasingContent | Nodes): string {
  switch (node.type) {
    case "text":
      return escapeHtml(node.value);
    case "inlineCode":
      return `<code>${escapeHtml(node.value)}</code>`;
    case "strong":
      return `<strong>${renderPhrasing(node.children)}</strong>`;
    case "emphasis":
      return `<em>${renderPhrasing(node.children)}</em>`;
    case "link":
      return `<a class="u-link" href="${escapeHtml(node.url)}">${renderPhrasing(node.children)}</a>`;
    case "break":
      return "<br />";
    default:
      return "children" in node ? renderPhrasing(node.children as Array<PhrasingContent>) : "";
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
