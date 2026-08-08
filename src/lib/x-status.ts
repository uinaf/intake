export interface XStatus {
  username: string;
  id: string;
}

const xHosts = new Set(["x.com", "twitter.com", "mobile.twitter.com", "mobile.x.com"]);

export function parseXStatus(source: string): XStatus | null {
  let url: URL;
  try {
    url = new URL(source);
  } catch {
    return null;
  }

  const host = url.hostname.toLowerCase().replace(/^www\./, "");
  if (!xHosts.has(host)) return null;

  const parts = url.pathname.split("/").filter(Boolean);
  const statusIndex = parts.indexOf("status");
  if (statusIndex < 1) return null;

  const username = parts[statusIndex - 1];
  const id = parts[statusIndex + 1];
  if (!username || username === "i" || !isStatusId(id)) return null;

  return { username, id };
}

/** Canonical twitter.com URL used by the official publish/widget embed. */
export function xStatusEmbedUrl(status: XStatus): string {
  return `https://twitter.com/${status.username}/status/${status.id}`;
}

function isStatusId(value: string | undefined): value is string {
  return typeof value === "string" && /^\d+$/.test(value);
}
