import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { cn } from "@/lib/utils";
import { Card, Cards } from "fumadocs-ui/components/card";
import { Download, Zap, BookOpen, Settings, LayoutDashboard, Terminal, Users, Wrench, Code } from "lucide-react";

interface DocsContentProps {
  content: string;
  className?: string;
}

export function DocsContent({ content, className }: DocsContentProps) {
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
    h1: (props: any) => <h1 {...props} className="scroll-m-20" />,
    h2: (props: any) => <h2 {...props} className="scroll-m-20" />,
    h3: (props: any) => <h3 {...props} className="scroll-m-20" />,
    h4: (props: any) => <h4 {...props} className="scroll-m-20" />,
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
