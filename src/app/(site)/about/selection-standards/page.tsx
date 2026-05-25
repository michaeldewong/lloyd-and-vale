import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { TextLink } from "@/components/layout/TextLink";
import { Container } from "@/components/layout/Container";
import { selectionStandards } from "@/content/selectionStandards";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: selectionStandards.title,
  description: selectionStandards.introduction,
  path: "/about/selection-standards",
});

export default function SelectionStandardsPage() {
  const page = selectionStandards;

  return (
    <div className="w-full">
      <PageHero
        title={page.title}
        eyebrow={page.eyebrow}
        lead={
          <div className="max-w-2xl space-y-(--spacing-stack-md)">
            <p className="text-body font-semibold text-foreground">{page.subhead}</p>
            <p className="text-body text-muted">{page.introduction}</p>
          </div>
        }
      />

      <Container narrow className="space-y-(--spacing-stack-md) py-(--spacing-section)">
        {page.standards.map((standard) => (
          <section key={standard.id} id={standard.id} className="space-y-(--spacing-stack-md)">
            <h2 className="text-body font-semibold text-foreground">{standard.heading}</h2>
            <p className="text-body text-muted">{standard.body}</p>
          </section>
        ))}

        <hr className="border-border" />

        <p className="text-body text-muted italic">
          {page.closing.before}
          <TextLink href={page.closing.linkHref} className="italic">
            {page.closing.linkLabel}
          </TextLink>
          {page.closing.after}
        </p>
      </Container>
    </div>
  );
}
