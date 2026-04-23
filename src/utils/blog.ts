import type { CollectionEntry } from "astro:content";

export function isPublished(entry: CollectionEntry<"blog">): boolean {
  return !entry.data.draft && entry.data.pubDate <= new Date();
}
