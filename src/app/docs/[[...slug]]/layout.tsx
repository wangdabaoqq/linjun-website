import { DocsLayout as FumadocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import Image from 'next/image';
import { CombinedSwitcher } from '@/components/docs/CombinedSwitcher';

function getLangFromSlug(slug?: string[]) {
  if (!slug || slug.length === 0) return 'en';
  return slug[0] === 'zh' ? 'zh' : 'en';
}

function getLangFromParams(params: unknown) {
  if (!params || typeof params !== 'object') return 'en';

  const maybeSlug = (params as { slug?: unknown }).slug;
  if (!Array.isArray(maybeSlug)) return 'en';

  return getLangFromSlug(
    maybeSlug.every((item) => typeof item === 'string') ? maybeSlug : undefined,
  );
}

export default async function DocsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const lang = getLangFromParams(resolvedParams);
  const tree = source.getPageTree(lang) as any;

  const baseOptions = {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.webp"
            alt="LinJun Logo"
            width={24}
            height={24}
            className="rounded-sm"
          />
          <span className="font-bold">LinJun</span>
        </div>
      ),
      githubUrl: 'https://github.com/wangdabaoqq/LinJun',
      links: [
        {
          label: lang === 'zh' ? '文档' : 'Docs',
          href: '/docs',
          active: true,
        },
        {
          label: lang === 'zh' ? '更新日志' : 'Changelog',
          href: '/changelog',
        },
      ],
    },
    themeSwitch: {
      enabled: false,
    },
    search: {
      enabled: true,
      option: {
        type: 'modal' as const,
      },
    },
    tableOfContent: {
      enabled: true,
      heading: lang === 'zh' ? '本页内容' : 'On This Page',
      style: 'clerk',
    },
    sidebar: {
      collapsible: true,
      footer: (
        <div className="flex items-center justify-center p-2">
          <CombinedSwitcher lang={lang} />
        </div>
      ),
    },
    footer: {
      enabled: false,
    },
    breadcrumb: {
      enabled: true,
    },
  };

  return (
    <FumadocsLayout tree={tree} {...baseOptions}>
      {children}
    </FumadocsLayout>
  );
}
