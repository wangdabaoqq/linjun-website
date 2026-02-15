import ReactMarkdown from "react-markdown";
import React from "react";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { cn } from "@/lib/utils";
import { Card, Cards } from "fumadocs-ui/components/card";
import { Download, Zap, BookOpen, Settings, LayoutDashboard, Terminal, Users, Wrench, Code } from "lucide-react";
import { slugifyHeading } from "@/lib/docs-toc";

interface DocsContentProps {
  content: string;
  className?: string;
}

export function DocsContent({ content, className }: DocsContentProps) {
  const headingIds = new Map<string, number>();

  const getText = (node: React.ReactNode): string => {
    if (typeof node === "string" || typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(getText).join("");
    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<{ children?: React.ReactNode }>;
      return getText(element.props.children);
    }
    return "";
  };

  const makeHeading = (Tag: "h1" | "h2" | "h3" | "h4") =>
    ({ children, ...props }: any) => {
      const text = getText(children);
      const base = slugifyHeading(text);
      const count = (headingIds.get(base) ?? 0) + 1;
      headingIds.set(base, count);
      const id = props.id ?? (count === 1 ? base : `${base}-${count}`);

      return (
        <Tag id={id} {...props} className="scroll-m-20">
          {children}
        </Tag>
      );
    };

  const components: any = {
    cards: (props: any) => <div className="not-prose my-6"><Cards {...props} /></div>,
    card: (props: any) => {
      const icons: Record<string, React.ReactNode> = {
        download: <Download className="size-4" />,
        zap: <Zap className="size-4" />,
        book: <BookOpen className="size-4" />,
        settings: <Settings className="size-4" />,
        dashboard: <LayoutDashboard className="size-4" />,
        terminal: <Terminal className="size-4" />,
        users: <Users className="size-4" />,
        wrench: <Wrench className="size-4" />,
        code: <Code className="size-4" />,
      };
      return <Card {...props} icon={icons[props.icon] || props.icon} />;
    },
    h1: makeHeading("h1"),
    h2: makeHeading("h2"),
    h3: makeHeading("h3"),
    h4: makeHeading("h4"),
  };

  return (
    <div className={cn("fd-prose prose-docs", className)}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
