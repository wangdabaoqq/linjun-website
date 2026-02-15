import { docsManifest } from "@/lib/docs-manifest.generated";

interface DocData {
  title?: string;
  description?: string;
  [key: string]: any;
}

export async function getDocContent(slug: string[]) {
  if (!slug || slug.length === 0) return null;

  const key = slug.join("/");
  const fallbackIndexKey = slug.length === 1 ? `${key}/index` : key;

  const hit =
    docsManifest[key as keyof typeof docsManifest] ??
    docsManifest[fallbackIndexKey as keyof typeof docsManifest] ??
    null;

  if (!hit) return null;

  return {
    frontmatter: hit.frontmatter as DocData,
    content: hit.content,
  };
}
