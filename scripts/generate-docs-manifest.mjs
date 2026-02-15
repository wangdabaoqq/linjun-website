import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = process.cwd();
const docsRoot = path.join(root, 'src/content/docs');
const outFile = path.join(root, 'src/lib/docs-manifest.generated.ts');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

function slugFromFile(filePath) {
  const rel = path.relative(docsRoot, filePath).replace(/\\/g, '/');
  const noExt = rel.replace(/\.md$/, '');
  const parts = noExt.split('/');

  if (parts[parts.length - 1] === 'index') {
    parts.pop();
  }

  return parts.join('/');
}

function inferTitle(data, content) {
  if (typeof data.title === 'string' && data.title.length > 0) return data.title;
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : '';
}

const docsMap = {};

for (const filePath of walk(docsRoot)) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const slug = slugFromFile(filePath);

  docsMap[slug] = {
    frontmatter: {
      ...data,
      title: inferTitle(data, content),
    },
    content,
  };
}

const output = `export const docsManifest = ${JSON.stringify(docsMap, null, 2)} as const;\n`;
fs.writeFileSync(outFile, output, 'utf8');
