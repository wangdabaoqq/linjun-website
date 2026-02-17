import fs from "node:fs";
import path from "node:path";

const REPO = "wangdabaoqq/LinJun";
const API_URL = `https://api.github.com/repos/${REPO}/releases?per_page=100`;
const OUT_FILE = path.join(
  process.cwd(),
  "src/lib/changelog.generated.ts"
);

async function fetchReleases() {
  console.log(`Fetching releases from ${REPO}...`);

  const res = await fetch(API_URL, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "linjun-official-site",
      ...(process.env.GITHUB_TOKEN
        ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
        : {}),
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub API ${res.status}: ${text}`);
  }

  const data = await res.json();

  const releases = data
    .filter((r) => !r.draft)
    .map((r) => ({
      tag: r.tag_name,
      name: r.name || r.tag_name,
      body: (r.body || "").trim(),
      date: r.published_at,
      prerelease: r.prerelease,
      url: r.html_url,
    }));

  console.log(`Fetched ${releases.length} releases.`);
  return releases;
}

function generate(releases) {
  const json = JSON.stringify(releases, null, 2);
  const output = `// Auto-generated from GitHub Releases. Do not edit manually.
// Run: node scripts/fetch-releases.mjs

export type Release = {
  tag: string;
  name: string;
  body: string;
  date: string;
  prerelease: boolean;
  url: string;
};

export const releases: Release[] = ${json};
`;
  fs.writeFileSync(OUT_FILE, output, "utf8");
  console.log(`Written to ${OUT_FILE}`);
}

try {
  const releases = await fetchReleases();
  generate(releases);
} catch (err) {
  console.error("Failed to fetch releases:", err.message);

  if (fs.existsSync(OUT_FILE)) {
    console.log("Keeping existing generated file as fallback.");
  } else {
    console.log("Generating empty fallback.");
    generate([]);
  }

  // Don't fail the build — stale data is better than no build
  process.exit(0);
}
