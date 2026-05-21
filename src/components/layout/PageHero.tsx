import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";

type PageHeroProps = {
  title: string;
  eyebrow?: string;
  /** Reserved for approved lead copy — omit until content is authored. */
  lead?: ReactNode;
  bordered?: boolean;
  className?: string;
};

export function PageHero({
  title,
  eyebrow,
  lead,
  bordered = true,
  className,
}: PageHeroProps) {
  return (
    <header
      className={cn(
        "bg-surface py-(--spacing-section-sm) md:py-(--spacing-section)",
        bordered && "border-b border-border",
        className,
      )}
    >
      <Container>
        <div className="max-w-3xl space-y-(--spacing-stack-md)">
          {eyebrow ? (
            <p className="text-caption font-medium tracking-wide text-muted uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-[length:var(--text-display)] leading-[var(--text-display--line-height)] font-semibold tracking-[var(--text-display--letter-spacing)] text-balance text-foreground">
            {title}
          </h1>
          {lead ? (
            <div className="max-w-2xl text-body text-muted">{lead}</div>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
