import { parseXStatus, type XStatus } from "./x-status";
import { parseYouTubeVideo, type YouTubeVideo } from "./youtube";

export type SourceEmbed = { kind: "youtube"; video: YouTubeVideo } | { kind: "x"; status: XStatus };

export function resolveSourceEmbed(type: string, source: string): SourceEmbed | null {
  if (type === "video") {
    const video = parseYouTubeVideo(source);
    if (video) return { kind: "youtube", video };

    const status = parseXStatus(source);
    if (status) return { kind: "x", status };

    return null;
  }

  if (type === "tweet") {
    const status = parseXStatus(source);
    return status ? { kind: "x", status } : null;
  }

  return null;
}
