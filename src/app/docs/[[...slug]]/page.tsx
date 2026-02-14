import { getDocContent } from "@/lib/docs";
import { docsConfig } from "@/lib/docs-config";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { DocsPage, DocsDescription, DocsTitle, DocsBody } from "fumadocs-ui/layouts/docs/page";
import { DocsContent } from "@/components/docs/DocsContent";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

function normalizeSlug(slug?: string[]) {
  if (!slug || slug.length === 0) return ["en"];
  if (slug[0] === "zh") return slug;
  if (slug[0] === "en") return slug;
  return ["en", ...slug];
}

function getAllDocUrls(lang: 'en' | 'zh'): string[] {
  const nav = docsConfig.sidebarNav[lang];
  const urls: string[] = [];
  
  for (const section of nav) {
    if (section.items) {
      for (const item of section.items) {
        urls.push(item.href);
      }
    }
  }
  
  return urls;
}

function findAdjacentPages(currentSlug: string[], lang: 'en' | 'zh'): { prev: { title: string; url: string } | null; next: { title: string; url: string } | null } {
  const urls = getAllDocUrls(lang);
  const currentUrl = `/docs/${currentSlug.join('/')}`;
  
  const currentIndex = urls.findIndex(url => url === currentUrl || url === currentUrl + '/');
  
  let prev = null;
  let next = null;
  
  if (currentIndex > 0) {
    const prevUrl = urls[currentIndex - 1];
    const prevSlug = prevUrl.replace('/docs/', '').split('/');
    const prevTitle = getPageTitle(prevSlug, lang);
    prev = { title: prevTitle, url: prevUrl };
  }
  
  if (currentIndex < urls.length - 1) {
    const nextUrl = urls[currentIndex + 1];
    const nextSlug = nextUrl.replace('/docs/', '').split('/');
    const nextTitle = getPageTitle(nextSlug, lang);
    next = { title: nextTitle, url: nextUrl };
  }
  
  return { prev, next };
}

function getPageTitle(slug: string[], lang: 'en' | 'zh'): string {
  const nav = docsConfig.sidebarNav[lang];
  
  for (const section of nav) {
    if (section.items) {
      for (const item of section.items) {
        const itemSlug = item.href.replace('/docs/', '').split('/');
        if (itemSlug.join('/') === slug.join('/')) {
          return item.title;
        }
      }
    }
  }
  
  return '';
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  const normalizedSlug = normalizeSlug(slug);
  const doc = await getDocContent(normalizedSlug);
  
  if (!doc) return {};
  
  const lang = normalizedSlug[0] === "zh" ? "zh" : "en";
  const defaultTitle = lang === "zh" ? "文档" : "Documentation";
  
  return {
    title: `${doc.frontmatter.title || defaultTitle} - LinJun`,
    description: doc.frontmatter.description || 'LinJun Documentation',
  };
}

export default async function DocPage(props: PageProps) {
  const params = await props.params;
  const { slug } = params;
  const normalizedSlug = normalizeSlug(slug);
  const doc = await getDocContent(normalizedSlug);

  if (!doc) {
    notFound();
  }

  const lang = normalizedSlug[0] === "zh" ? "zh" : "en";
  const defaultTitle = lang === "zh" ? "文档" : "Documentation";
  const { prev, next } = findAdjacentPages(normalizedSlug, lang);

  return (
    <DocsPage footer={{ enabled: false }}>
      <DocsTitle>{doc.frontmatter.title || defaultTitle}</DocsTitle>
      {doc.frontmatter.description && (
        <DocsDescription>{doc.frontmatter.description}</DocsDescription>
      )}
      <DocsBody>
        <DocsContent content={doc.content} />
        
        <div className="mt-16 flex items-center justify-between border-t pt-8">
          {prev ? (
            <Link
              href={prev.url}
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">{lang === 'zh' ? '上一页' : 'Previous'}</span>
                <span className="font-medium">{prev.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}
          
          {next && (
            <Link
              href={next.url}
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors text-right"
            >
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">{lang === 'zh' ? '下一页' : 'Next'}</span>
                <span className="font-medium">{next.title}</span>
              </div>
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </DocsBody>
    </DocsPage>
  );
}
