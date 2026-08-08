import { entryTypes } from "../content.config";
import { parseXStatus, type XStatus } from "./x-status";
import { parseYouTubeVideo, type YouTubeVideo } from "./youtube";

export type SourceEmbed = { kind: "youtube"; video: YouTubeVideo } | { kind: "x"; status: XStatus };

type EntryType = (typeof entryTypes)[number];

export function resolveSourceEmbed(type: EntryType, source: string): SourceEmbed | null {
  /* Play controls are only for video entries. Tweets already have the source link. */
  if (type !== "video") return null;

  const video = parseYouTubeVideo(source);
  if (video) return { kind: "youtube", video };

  const status = parseXStatus(source);
  if (status) return { kind: "x", status };

  return null;
}
