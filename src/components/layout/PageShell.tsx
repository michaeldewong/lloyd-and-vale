import type { ReactNode } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";

type PageShellProps = {
  title: string;
  eyebrow?: string;
  lead?: ReactNode;
  children?: ReactNode;
};

/**
 * Gate 1 page scaffold — hero title plus optional section content.
 */
export function PageShell({ title, eyebrow, lead, children }: PageShellProps) {
  return (
    <>
      <PageHero title={title} eyebrow={eyebrow} lead={lead} />
      {children ? (
        <Section spacing="default">
          <div className="space-y-(--spacing-stack-xl)">{children}</div>
        </Section>
      ) : (
        <Section spacing="sm" tone="default">
          <div className="min-h-[12rem]" aria-hidden="true" />
        </Section>
      )}
    </>
  );
}
