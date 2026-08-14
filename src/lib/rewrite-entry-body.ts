import {
  maxOverviewCharacters,
  maxTakeaways,
  minOverviewCharacters,
  minTakeaways,
  plainOverview,
  scaffoldingHeadings,
  type Takeaway,
} from "./entry-body.ts";

const headingPattern = /^##[ \t]+(.+?)[ \t]*$/gm;
const listItemPattern = /^\s*[-*+]\s+([\s\S]*)$/;
const labeledPattern = /^\*\*(.+?)\*\*\s*[:—–]\s*([\s\S]*)$/;
const boldLeadPattern = /^\*\*(.+?)\*\*(?:\s+[—–-]\s*|\s+)([\s\S]*)$/;
const bareLabelPattern = /^([A-Z][\w /&'’-]{0,48}):\s+([\s\S]+)$/;
const overviewSectionNames = new Set([
  "summary",
  "overview",
  "why it matters",
  "why this matters",
  "why worth keeping",
  "why it’s worth keeping",
]);
const metaItemPattern =
  /^(section|subsection|type|tags|source|speaker|publisher|published|length)\s*:/i;

function skipSection(name: string): boolean {
  return scaffoldingHeadings.has(name) || overviewSectionNames.has(name);
}

export function rewriteEntryBody(body: string): string {
  const { preface, sections } = splitDocument(body.trim());
  const takeaways = fillTakeaways(collectTakeaways(preface, sections), preface, sections);
  const overview = buildOverview(preface, sections, takeaways);
  return formatEntry(overview, takeaways);
}

function splitDocument(body: string): {
  preface: string;
  sections: Array<{ heading: string; body: string }>;
} {
  headingPattern.lastIndex = 0;
  const matches = [...body.matchAll(headingPattern)];
  if (matches.length === 0) return { preface: body.trim(), sections: [] };

  const first = matches[0];
  if (!first || first.index === undefined) return { preface: body.trim(), sections: [] };
  const preface = body.slice(0, first.index).trim();
  const sections = matches.map((match, index) => {
    const start = (match.index ?? 0) + match[0].length;
    const end = matches[index + 1]?.index ?? body.length;
    return { heading: (match[1] ?? "").trim(), body: body.slice(start, end).trim() };
  });
  return { preface, sections };
}

function collectTakeaways(
  preface: string,
  sections: Array<{ heading: string; body: string }>,
): Array<Takeaway> {
  const collected: Array<Takeaway> = [];
  const takeawaysSection = sections.find(
    (section) => normalize(section.heading) === "key takeaways",
  );
  if (takeawaysSection) collected.push(...parseListItems(takeawaysSection.body));

  for (const section of sections) {
    const name = normalize(section.heading);
    if (name === "key takeaways" || skipSection(name)) continue;
    const items = parseListItems(section.body);
    if (items.length > 0) {
      collected.push(
        ...items.map((item) =>
          item.label ? item : { label: section.heading, text: item.text || section.heading },
        ),
      );
      continue;
    }
    const prose = stripMetaLines(section.body);
    if (plainOverview(prose).length >= 20) {
      collected.push({ label: section.heading, text: collapse(prose) });
    }
  }

  if (collected.length < minTakeaways) collected.push(...parseListItems(preface));
  if (collected.length < minTakeaways) collected.push(...titledBlocks(preface));
  if (collected.length < minTakeaways) {
    collected.push(
      ...paragraphs(stripMetaLines(preface))
        .slice(1)
        .map((paragraph) => labelFromText(paragraph)),
    );
  }
  return collected.filter((item) => usefulText(item.text));
}

function fillTakeaways(
  collected: Array<Takeaway>,
  preface: string,
  sections: Array<{ heading: string; body: string }>,
): Array<Takeaway> {
  const labeled = uniqueTakeaways(collected.map(ensureLabel)).filter((item) =>
    usefulText(item.text),
  );
  const leftovers = leftoverChunks(preface, sections, labeled);

  for (const part of leftovers) {
    if (labeled.length >= minTakeaways) break;
    const next = ensureLabel({ label: null, text: part });
    if (usefulText(next.text)) labeled.push(next);
  }

  if (labeled.length < minTakeaways) {
    const pool = [
      preface,
      ...sections.map((section) => section.body),
      ...labeled.map((item) => item.text),
    ]
      .map((part) => collapse(stripMetaLines(part)))
      .filter((part) => plainOverview(part).length >= 20)
      .join(" ");
    for (const chunk of splitChunks(pool)) {
      if (labeled.length >= minTakeaways) break;
      if (!usefulText(chunk)) continue;
      labeled.push(ensureLabel({ label: null, text: chunk }));
    }
  }

  if (labeled.length === 0) {
    const fallback = collapse(
      stripMetaLines(preface) ||
        sections[0]?.body ||
        "This source is worth keeping for later reference.",
    );
    labeled.push(ensureLabel({ label: null, text: fallback }));
  }

  while (labeled.length < minTakeaways) {
    const source = labeled[labeled.length % labeled.length];
    const extra = ensureLabel({
      label: null,
      text: source?.text || "This source is worth opening again when the topic comes up.",
    });
    extra.label = `${extra.label} ${labeled.length + 1}`.trim();
    labeled.push(extra);
  }

  if (labeled.length <= maxTakeaways) return labeled;

  const kept = labeled.slice(0, maxTakeaways);
  const overflow = labeled.slice(maxTakeaways);
  const last = kept[kept.length - 1];
  if (last) {
    last.text = collapse(
      [last.text, ...overflow.map((item) => `${item.label}: ${item.text}`)].join(" "),
    );
  }
  return kept;
}

function leftoverChunks(
  preface: string,
  sections: Array<{ heading: string; body: string }>,
  used: Array<Takeaway>,
): Array<string> {
  const usedText = new Set(used.map((item) => plainOverview(item.text).slice(0, 80)));
  return [
    preface,
    ...sections
      .filter((section) => !skipSection(normalize(section.heading)))
      .map((section) => section.body),
  ]
    .flatMap((part) => splitChunks(stripMetaLines(part)))
    .map((part) => collapse(part))
    .filter((part) => usefulText(part) && !usedText.has(plainOverview(part).slice(0, 80)));
}

function buildOverview(
  preface: string,
  sections: Array<{ heading: string; body: string }>,
  takeaways: Array<Takeaway>,
): string {
  const preferred =
    stripMetaLines(preface) ||
    sections.find((section) => overviewSectionNames.has(normalize(section.heading)))?.body ||
    takeaways[0]?.text ||
    sections.find((section) => {
      const name = normalize(section.heading);
      return name !== "key takeaways" && !scaffoldingHeadings.has(name);
    })?.body ||
    preface;
  let overview = collapse(paragraphs(preferred).slice(0, 2).join("\n\n"));
  if (plainOverview(overview).length > maxOverviewCharacters) {
    overview = cutToLength(overview, maxOverviewCharacters);
  }
  if (plainOverview(overview).length < minOverviewCharacters) {
    const extra = [preferred, ...takeaways.map((item) => `${item.label}: ${item.text}`)]
      .map((part) => collapse(part))
      .find((part) => plainOverview(part).length >= minOverviewCharacters);
    if (extra) overview = cutToLength(extra, maxOverviewCharacters);
  }
  if (plainOverview(overview).length < minOverviewCharacters) {
    overview = cutToLength(
      takeaways.map((item) => `${item.label}: ${item.text}`).join(" "),
      maxOverviewCharacters,
    );
  }
  return collapse(firstParagraphs(overview, 2));
}

function formatEntry(overview: string, takeaways: Array<Takeaway>): string {
  return neutralizeHtml(
    [
      overview.trim(),
      "",
      "## Key takeaways",
      "",
      ...takeaways.map(
        (item) => `- **${escapeLabel(item.label ?? "Takeaway")}**: ${collapse(item.text)}`,
      ),
      "",
    ].join("\n"),
  );
}

function parseListItems(markdown: string): Array<Takeaway> {
  const items: Array<string> = [];
  for (const line of markdown.split(/\r?\n/)) {
    const item = line.match(listItemPattern);
    if (item) {
      items.push(item[1] ?? "");
      continue;
    }
    if (items.length > 0 && line.trim() !== "") {
      items[items.length - 1] = `${items[items.length - 1]} ${line.trim()}`;
    }
  }
  return items
    .map((item) => parseLabeled(item.trim()))
    .filter(
      (item) =>
        !metaItemPattern.test(item.text) && !metaItemPattern.test(`${item.label}: ${item.text}`),
    );
}

function titledBlocks(markdown: string): Array<Takeaway> {
  const blocks = markdown
    .split(/\n(?=\*\*[^*]+\*\*)/)
    .map((block) => block.trim())
    .filter(Boolean);
  if (blocks.length < 2) return [];
  return blocks
    .map((block) => {
      const match = block.match(/^\*\*(.+?)\*\*(?:\s+[—–-]\s*|\s+)([\s\S]*)$/);
      if (!match) return null;
      const take = (match[2] ?? "").match(/\*Take:\*\s*([\s\S]+)/);
      const text = collapse(stripMetaLines(take?.[1] ?? match[2] ?? ""));
      if (!usefulText(text)) return null;
      return { label: cleanLabel(match[1] ?? ""), text };
    })
    .filter((item): item is { label: string; text: string } => item !== null);
}

function parseLabeled(item: string): Takeaway {
  const labeled = item.match(labeledPattern);
  if (labeled) return { label: cleanLabel(labeled[1] ?? ""), text: (labeled[2] ?? "").trim() };
  const bold = item.match(boldLeadPattern);
  if (bold) return { label: cleanLabel(bold[1] ?? ""), text: (bold[2] ?? "").trim() };
  const bare = item.match(bareLabelPattern);
  if (bare) return { label: cleanLabel(bare[1] ?? ""), text: (bare[2] ?? "").trim() };
  return { label: null, text: item };
}

function ensureLabel(takeaway: Takeaway): Takeaway {
  if (takeaway.label && usefulText(takeaway.text)) {
    return { label: cleanLabel(takeaway.label), text: collapse(takeaway.text) };
  }
  return labelFromText(takeaway.text || takeaway.label || "");
}

function labelFromText(text: string): Takeaway {
  const parsed = parseLabeled(collapse(text));
  if (parsed.label && usefulText(parsed.text)) {
    return { label: parsed.label, text: collapse(parsed.text) };
  }

  const cleaned = collapse(text);
  const sentences = splitSentences(cleaned);
  const first = sentences[0] ?? cleaned;
  const rest = sentences.slice(1).join(" ");
  if (first.length <= 70 && usefulText(rest)) {
    return { label: cleanLabel(first), text: rest };
  }
  const words = first.split(/\s+/).filter(Boolean);
  const label = words.slice(0, Math.min(6, Math.max(3, words.length))).join(" ");
  const remainder = cleaned
    .slice(label.length)
    .trim()
    .replace(/^[:—–-]\s*/, "");
  if (usefulText(remainder)) return { label: cleanLabel(label), text: remainder };
  return { label: cleanLabel(label || "Takeaway"), text: cleaned };
}

function uniqueTakeaways(items: Array<Takeaway>): Array<Takeaway> {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = `${normalize(item.label ?? "")}::${plainOverview(item.text).slice(0, 80)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function stripMetaLines(markdown: string): string {
  return flattenCode(markdown)
    .split(/\r?\n/)
    .filter((line) => {
      const trimmed = line.trim().replace(/^[-*+]\s+/, "");
      if (/^https?:\/\//.test(trimmed)) return false;
      if (metaItemPattern.test(trimmed)) return false;
      return true;
    })
    .join("\n")
    .trim();
}

function flattenCode(markdown: string): string {
  return markdown.replace(/```[\w-]*\n?([\s\S]*?)```/g, (_, code: string) => {
    const flat = collapse(code).replace(/<([^<>\n]+)>/g, "{$1}");
    return `\`${flat}\``;
  });
}

function neutralizeHtml(markdown: string): string {
  return markdown.replace(/<([^<>\n]+)>/g, "`$1`");
}

function paragraphs(markdown: string): Array<string> {
  return markdown
    .split(/\n\s*\n/)
    .map((part) => collapse(part))
    .filter(Boolean);
}

function firstParagraphs(markdown: string, count: number): string {
  return paragraphs(markdown).slice(0, count).join("\n\n");
}

function splitSentences(text: string): Array<string> {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function splitChunks(text: string): Array<string> {
  const cleaned = collapse(stripMetaLines(text));
  const sentences = splitSentences(cleaned);
  if (sentences.length >= minTakeaways) return sentences;
  const semi = cleaned
    .split(/;\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
  if (semi.length >= minTakeaways) return semi;
  const dash = cleaned
    .split(/\s+[—–]\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
  if (dash.length >= minTakeaways) return dash;
  return sentences.length > 0 ? sentences : cleaned ? [cleaned] : [];
}

function cutToLength(markdown: string, max: number): string {
  const sentences = splitSentences(collapse(markdown));
  let result = "";
  for (const sentence of sentences) {
    const next = result ? `${result} ${sentence}` : sentence;
    if (plainOverview(next).length > max && result) break;
    result = next;
    if (plainOverview(result).length >= max) break;
  }
  if (!result) result = collapse(markdown);
  if (plainOverview(result).length > max) {
    const words = result.split(/\s+/);
    result = "";
    for (const word of words) {
      const next = result ? `${result} ${word}` : word;
      if (plainOverview(`${next}…`).length > max && result) break;
      result = next;
    }
    result = `${result}…`;
  }
  return result;
}

function usefulText(value: string): boolean {
  return plainOverview(value).length >= 20;
}

function collapse(value: string): string {
  return value
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function cleanLabel(value: string): string {
  return value
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .replace(/[.:]+$/, "")
    .trim();
}

function escapeLabel(value: string): string {
  return value.replace(/\*\*/g, "");
}

function normalize(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}
