import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDirectory = path.join(process.cwd(), "src/content/docs");

interface DocData {
  title?: string;
  description?: string;
  [key: string]: any;
}

function parseFile(fullPath: string): { frontmatter: DocData; content: string } {
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  let title = data.title;
  if (!title) {
    const match = content.match(/^#\s+(.+)$/m);
    if (match) {
      title = match[1];
    }
  }
  
  return {
    frontmatter: { ...data, title },
    content,
  };
}

export async function getDocContent(slug: string[]) {
  if (!slug || slug.length === 0) return null;

  const [lang, ...rest] = slug;
  
  if (rest.length === 0) {
    const indexPath = path.join(docsDirectory, lang, "index.md");
    if (fs.existsSync(indexPath)) {
      return parseFile(indexPath);
    }
    return null;
  }

  const relativePath = path.join(lang, ...rest);
  const possiblePaths = [
    path.join(docsDirectory, `${relativePath}.md`),
    path.join(docsDirectory, relativePath, "index.md"),
    path.join(docsDirectory, relativePath, "overview.md"),
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p) && fs.lstatSync(p).isFile()) {
      return parseFile(p);
    }
  }

  return null;
}
