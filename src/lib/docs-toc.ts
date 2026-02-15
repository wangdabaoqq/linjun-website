import type { TOCItemType } from "fumadocs-core/toc";

function stripMarkdown(input: string) {
  return input
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
    .replace(/[\*_~]/g, "")
    .replace(/<[^>]*>/g, "")
    .trim();
}

export function slugifyHeading(input: string) {
  const text = stripMarkdown(input)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return text || "section";
}

export function extractToc(content: string): TOCItemType[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const counts = new Map<string, number>();
  const toc: TOCItemType[] = [];

  for (const match of content.matchAll(headingRegex)) {
    const hashes = match[1];
    const rawTitle = match[2].trim();
    const base = slugifyHeading(rawTitle);
    const nextCount = (counts.get(base) ?? 0) + 1;
    counts.set(base, nextCount);

    const id = nextCount === 1 ? base : `${base}-${nextCount}`;
    toc.push({
      title: stripMarkdown(rawTitle),
      url: `#${id}`,
      depth: hashes.length,
    });
  }

  return toc;
}
