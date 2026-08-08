import { fromMarkdown } from "mdast-util-from-markdown";
import { gfmFootnoteFromMarkdown } from "mdast-util-gfm-footnote";
import type { Nodes } from "mdast";
import { gfmFootnote } from "micromark-extension-gfm-footnote";

export interface MarkdownSafetyIssue {
  column: number;
  line: number;
  message: string;
}

const allowedProtocols = new Set(["http:", "https:", "mailto:"]);

export function markdownSafetyIssues(markdown: string): Array<MarkdownSafetyIssue> {
  const issues: Array<MarkdownSafetyIssue> = [];
  let rawHtmlReported = false;
  const tree = fromMarkdown(markdown, {
    extensions: [gfmFootnote()],
    mdastExtensions: [gfmFootnoteFromMarkdown()],
  });
  walk(tree, (node) => {
    if (node.type === "html" && !rawHtmlReported) {
      issues.push(issue(node, "raw HTML is not allowed"));
      rawHtmlReported = true;
    } else if (node.type === "image" || node.type === "imageReference") {
      issues.push(issue(node, "images are not allowed"));
    } else if ((node.type === "link" || node.type === "definition") && !safeUrl(node.url)) {
      issues.push(issue(node, `unsafe link URL ${JSON.stringify(node.url)}`));
    }
  });
  return issues;
}

function safeUrl(value: string): boolean {
  try {
    return allowedProtocols.has(new URL(value, "https://intake.uinaf.dev/").protocol);
  } catch {
    return false;
  }
}

function issue(node: Nodes, message: string): MarkdownSafetyIssue {
  return {
    column: node.position?.start.column ?? 1,
    line: node.position?.start.line ?? 1,
    message,
  };
}

function walk(node: Nodes, visit: (node: Nodes) => void): void {
  visit(node);
  if (!("children" in node)) return;
  for (const child of node.children) walk(child, visit);
}
