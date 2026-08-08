export interface YouTubeVideo {
  id: string;
}

const youtubeHosts = new Set(["youtube.com", "m.youtube.com", "music.youtube.com", "youtu.be"]);

export function parseYouTubeVideo(source: string): YouTubeVideo | null {
  let url: URL;
  try {
    url = new URL(source);
  } catch {
    return null;
  }

  const host = url.hostname.toLowerCase().replace(/^www\./, "");
  if (!youtubeHosts.has(host)) return null;

  if (host === "youtu.be") {
    const id = url.pathname.split("/").filter(Boolean)[0];
    return isYouTubeId(id) ? { id } : null;
  }

  const parts = url.pathname.split("/").filter(Boolean);
  if (parts[0] === "watch") {
    const id = url.searchParams.get("v");
    return isYouTubeId(id) ? { id } : null;
  }

  if (
    (parts[0] === "live" || parts[0] === "shorts" || parts[0] === "embed" || parts[0] === "v") &&
    isYouTubeId(parts[1])
  ) {
    return { id: parts[1]! };
  }

  return null;
}

export function youtubeEmbedUrl(id: string): string {
  const url = new URL(`https://www.youtube-nocookie.com/embed/${id}`);
  url.searchParams.set("autoplay", "1");
  url.searchParams.set("rel", "0");
  return url.toString();
}

export function youtubePosterUrl(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function isYouTubeId(value: string | null | undefined): value is string {
  return typeof value === "string" && /^[\w-]{11}$/.test(value);
}
