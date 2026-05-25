import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { ImagePlaceholder } from "@/components/media/ImagePlaceholder";
import { learnPage } from "@/content/learn";
import { cn } from "@/lib/cn";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: learnPage.title,
  description: learnPage.intro,
  path: "/learn",
});

type LearnSubsection =
  | (typeof learnPage.subsections)[0]
  | (typeof learnPage.subsections)[1]
  | (typeof learnPage.subsections)[2]
  | (typeof learnPage.subsections)[3];

function hasDescription(
  block: LearnSubsection,
): block is LearnSubsection & { description: string } {
  return "description" in block;
}

function LearnSubsectionBlocks() {
  return (
    <ul className="grid gap-(--spacing-content-lg) sm:grid-cols-2 lg:grid-cols-4">
      {learnPage.subsections.map((block) => (
        <li key={block.href}>
          <article className="flex h-full flex-col border border-border bg-surface">
            <Link href={block.href} className="group block">
              <ImagePlaceholder
                aspectRatio="4/3"
                variant="compact"
                label={block.image.filename}
                description={block.image.description}
                className="rounded-none border-0 border-b border-border"
              />
              <div
                className={cn(
                  "p-(--spacing-content)",
                  hasDescription(block) ? "space-y-(--spacing-stack-md)" : undefined,
                )}
              >
                <h2 className="text-body font-semibold text-foreground group-hover:text-accent">
                  {block.title}
                </h2>
                {hasDescription(block) ? (
                  <p className="text-small text-muted">{block.description}</p>
                ) : null}
              </div>
            </Link>
            {"featuredLabel" in block && block.featuredLabel && block.featuredHref ? (
              <div className="mt-auto border-t border-border px-(--spacing-content) py-(--spacing-stack-md)">
                <p className="text-small text-foreground">
                  <Link
                    href={block.featuredHref}
                    className="text-foreground hover:text-accent"
                  >
                    <em className="italic">{block.featuredLabel}</em>
                  </Link>
                </p>
              </div>
            ) : null}
            {"footerLine" in block && block.footerLine ? (
              <div className="mt-auto border-t border-border px-(--spacing-content) py-(--spacing-stack-md)">
                <p className="text-small text-muted">{block.footerLine}</p>
              </div>
            ) : null}
          </article>
        </li>
      ))}
    </ul>
  );
}

export default function LearnPage() {
  return (
    <div className="w-full">
      <PageHero
        title={learnPage.title}
        eyebrow={learnPage.eyebrow}
        lead={learnPage.intro}
      />
      <Section spacing="default">
        <LearnSubsectionBlocks />
      </Section>
    </div>
  );
}
