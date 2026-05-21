import type { ReactNode } from "react";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/cn";

type SectionBlockProps = {
  title: string;
  intro?: string;
  children?: ReactNode;
  spacing?: "sm" | "default" | "lg";
  tone?: "default" | "muted" | "surface";
  id?: string;
  className?: string;
};

export function SectionBlock({
  title,
  intro,
  children,
  spacing = "default",
  tone = "default",
  id,
  className,
}: SectionBlockProps) {
  return (
    <Section spacing={spacing} tone={tone} id={id} className={className}>
      <div className="space-y-(--spacing-stack-xl)">
        <header className="max-w-3xl space-y-(--spacing-stack-md)">
          <h2 className="text-[length:var(--text-heading)] leading-[var(--text-heading--line-height)] font-semibold tracking-[var(--text-heading--letter-spacing)] text-foreground">
            {title}
          </h2>
          {intro ? <p className="text-body text-muted">{intro}</p> : null}
        </header>
        {children ? (
          <div className={cn(intro ? undefined : "mt-0")}>{children}</div>
        ) : null}
      </div>
    </Section>
  );
}
