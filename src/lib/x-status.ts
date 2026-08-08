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
  /* Only /{username}/status/{id}[...]. Reject /i/web/status/<id> and similar. */
  if (parts[1] !== "status" || !parts[0] || !isStatusId(parts[2])) return null;

  return { username: parts[0], id: parts[2] };
}

/** Outbound status URL for the play-on-X control. */
export function xStatusEmbedUrl(status: XStatus): string {
  return `https://x.com/${status.username}/status/${status.id}`;
}

function isStatusId(value: string | undefined): value is string {
  return typeof value === "string" && /^\d+$/.test(value);
}
