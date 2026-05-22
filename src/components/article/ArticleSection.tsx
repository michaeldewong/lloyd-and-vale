import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ArticleSectionProps = {
  id?: string;
  title: string;
  headingLevel?: "h2" | "h3";
  children: ReactNode;
  className?: string;
};

export function ArticleSection({
  id,
  title,
  headingLevel = "h2",
  children,
  className,
}: ArticleSectionProps) {
  const Heading = headingLevel;

  return (
    <section
      id={id}
      className={cn("space-y-(--spacing-stack-md)", className)}
    >
      <Heading className="text-[length:var(--text-heading)] leading-[var(--text-heading--line-height)] font-semibold tracking-[var(--text-heading--letter-spacing)] text-foreground">
        {title}
      </Heading>
      <div className="space-y-(--spacing-stack-md)">{children}</div>
    </section>
  );
}
