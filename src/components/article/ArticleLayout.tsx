import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ArticleLayoutProps = {
  children: ReactNode;
  className?: string;
};

export function ArticleLayout({ children, className }: ArticleLayoutProps) {
  return (
    <article className={cn("w-full pb-(--spacing-section)", className)}>{children}</article>
  );
}
