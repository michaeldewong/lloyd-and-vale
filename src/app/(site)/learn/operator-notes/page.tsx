import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { ImagePlaceholder } from "@/components/media/ImagePlaceholder";
import { operatorNotesPage } from "@/content/operatorNotes";

export default function OperatorNotesPage() {
  const page = operatorNotesPage;

  return (
    <div className="w-full">
      <PageHero title={page.title} eyebrow={page.eyebrow} />

      <Section spacing="default">
        <div className="mx-auto max-w-3xl space-y-(--spacing-section)">
          <p className="text-body text-muted">{page.description}</p>

          <article className="border border-border bg-surface">
            <Link href={page.featuredArticle.href} className="group block">
              <ImagePlaceholder
                aspectRatio="4/3"
                variant="compact"
                label={page.thumbnail.filename}
                description={page.thumbnail.description}
                className="rounded-none border-0 border-b border-border"
              />
              <div className="space-y-(--spacing-stack-md) p-(--spacing-content)">
                <h2 className="text-[length:var(--text-heading)] leading-[var(--text-heading--line-height)] font-semibold tracking-[var(--text-heading--letter-spacing)] text-foreground group-hover:text-accent">
                  {page.featuredArticle.title}
                </h2>
                <p className="text-body text-muted italic">{page.featuredArticle.deck}</p>
              </div>
            </Link>
          </article>
        </div>
      </Section>
    </div>
  );
}
