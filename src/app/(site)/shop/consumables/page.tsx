import type { Metadata } from "next";
import { CategoryGrid } from "@/components/layout/CategoryGrid";
import { CTASection } from "@/components/layout/CTASection";
import { Container } from "@/components/layout/Container";
import { RelatedPages } from "@/components/layout/RelatedPages";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { TextLink } from "@/components/layout/TextLink";
import { ImagePlaceholder } from "@/components/media/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import {
  consumablesFinalCta,
  consumablesGate1Catalog,
  consumablesGetStarted,
  consumablesHero,
  consumablesProductionSensitive,
  consumablesRelated,
  consumablesSelection,
  consumablesWhy,
} from "@/content/consumables";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: "Consumables",
  description: consumablesHero.subheadline,
  path: "/shop/consumables",
});
function mapGridItem(item: {
  title: string;
  description: string;
  href: string;
  image: { filename: string; description: string };
}) {
  return {
    title: item.title,
    description: item.description,
    href: item.href,
    imageLabel: item.image.filename,
    imageDescription: item.image.description,
  };
}

function ProseParagraphs({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="space-y-(--spacing-stack-md)">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-body text-muted">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function ProductionSensitiveGrid({
  items,
}: {
  items: readonly {
    title: string;
    description: string;
    href: string;
  }[];
}) {
  return (
    <ul className="grid gap-(--spacing-content-lg) sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.title}>
          <article className="flex h-full flex-col border border-dashed border-border-strong bg-background p-(--spacing-content)">
            <div className="flex flex-1 flex-col gap-(--spacing-stack-md)">
              <h3 className="text-body font-semibold text-foreground">
                <TextLink href={item.href} className="font-semibold no-underline hover:underline">
                  {item.title}
                </TextLink>
              </h3>
              <p className="flex-1 text-small text-muted">{item.description}</p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default function ConsumablesPage() {
  return (
    <div className="w-full">
      {/* Section 1 — Category Hero */}
      <header className="border-b border-border bg-surface py-(--spacing-section-sm) md:py-(--spacing-section)">
        <Container>
          <div className="grid items-center gap-(--spacing-stack-xl) lg:grid-cols-2 lg:gap-(--spacing-section-sm)">
            <div className="order-2 space-y-(--spacing-stack-xl) lg:order-1">
              <div className="max-w-xl space-y-(--spacing-stack-md)">
                <p className="text-caption font-medium tracking-wide text-muted uppercase">
                  {consumablesHero.eyebrow}
                </p>
                <h1 className="text-[length:var(--text-display)] leading-[var(--text-display--line-height)] font-semibold tracking-[var(--text-display--letter-spacing)] text-balance text-foreground">
                  {consumablesHero.headline}
                </h1>
                <p className="text-body text-muted">{consumablesHero.subheadline}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink
                  href={consumablesHero.primaryCta.href}
                  variant="primary"
                  size="md"
                >
                  {consumablesHero.primaryCta.label}
                </ButtonLink>
                <ButtonLink
                  href={consumablesHero.secondaryCta.href}
                  variant="secondary"
                  size="md"
                >
                  {consumablesHero.secondaryCta.label}
                </ButtonLink>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <ImagePlaceholder
                aspectRatio="3/2"
                variant="default"
                label={consumablesHero.image.filename}
                description={consumablesHero.image.description}
              />
            </div>
          </div>
        </Container>
      </header>

      {/* Section 2 — Why Consumables Matter */}
      <SectionBlock title={consumablesWhy.title} id="why-consumables-matter">
        <div className="grid gap-(--spacing-stack-xl) lg:grid-cols-2 lg:items-start">
          <ProseParagraphs paragraphs={consumablesWhy.paragraphs} />
          <ImagePlaceholder
            aspectRatio="4/3"
            variant="compact"
            label={consumablesWhy.image.filename}
            description={consumablesWhy.image.description}
          />
        </div>
      </SectionBlock>

      {/* Section 3 — Gate 1 Consumables in the Current Catalog */}
      <SectionBlock
        title={consumablesGate1Catalog.title}
        intro={consumablesGate1Catalog.intro}
        tone="muted"
        id={consumablesGate1Catalog.anchorId}
        className="scroll-mt-20"
      >
        <CategoryGrid
          layout="eight"
          items={consumablesGate1Catalog.items.map(mapGridItem)}
        />
      </SectionBlock>

      {/* Section 4 — Production-Sensitive Consumables */}
      <SectionBlock
        title={consumablesProductionSensitive.title}
        intro={consumablesProductionSensitive.intro}
        id="production-sensitive-consumables"
      >
        <div className="space-y-(--spacing-stack-xl)">
          <div className="max-w-3xl space-y-(--spacing-stack-md)">
            <ProseParagraphs paragraphs={consumablesProductionSensitive.paragraphs} />
            <p className="text-body text-muted">
              {consumablesProductionSensitive.operatorNoteParagraph.before}
              <em>{consumablesProductionSensitive.operatorNoteParagraph.italicTitle}</em>
              {consumablesProductionSensitive.operatorNoteParagraph.after}
            </p>
          </div>

          <ProductionSensitiveGrid items={consumablesProductionSensitive.items} />

          <p className="max-w-3xl text-body text-muted">
            {consumablesProductionSensitive.inlineNote.before}
            <TextLink href={consumablesProductionSensitive.inlineNote.linkHref}>
              {consumablesProductionSensitive.inlineNote.linkLabel}
            </TextLink>
            {consumablesProductionSensitive.inlineNote.after}
          </p>

          <div className="max-w-2xl">
            <ImagePlaceholder
              aspectRatio="4/3"
              variant="compact"
              label={consumablesProductionSensitive.image.filename}
              description={consumablesProductionSensitive.image.description}
            />
          </div>
        </div>
      </SectionBlock>

      {/* Section 5 — How Consumables Are Selected */}
      <SectionBlock
        title={consumablesSelection.title}
        tone="muted"
        id="how-consumables-are-selected"
      >
        <div className="grid gap-(--spacing-stack-xl) lg:grid-cols-2 lg:items-start">
          <div className="space-y-(--spacing-stack-md)">
            <ProseParagraphs paragraphs={consumablesSelection.paragraphs} />
            <p>
              <TextLink href={consumablesSelection.inlineLink.href}>
                {consumablesSelection.inlineLink.label}
              </TextLink>
            </p>
          </div>
          <ImagePlaceholder
            aspectRatio="4/3"
            variant="compact"
            label={consumablesSelection.image.filename}
            description={consumablesSelection.image.description}
          />
        </div>
      </SectionBlock>

      {/* Section 6 — How to Get Started */}
      <SectionBlock title={consumablesGetStarted.title} id="how-to-get-started">
        <div className="max-w-3xl space-y-(--spacing-stack-xl)">
          <ProseParagraphs paragraphs={consumablesGetStarted.paragraphs} />
          <div className="flex flex-wrap gap-3">
            <ButtonLink
              href={consumablesGetStarted.primaryCta.href}
              variant="primary"
              size="md"
            >
              {consumablesGetStarted.primaryCta.label}
            </ButtonLink>
            <ButtonLink
              href={consumablesGetStarted.secondaryCta.href}
              variant="secondary"
              size="md"
            >
              {consumablesGetStarted.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </SectionBlock>

      {/* Section 7 — Related Categories */}
      <SectionBlock
        title={consumablesRelated.title}
        intro={consumablesRelated.intro}
        tone="muted"
        id="related-categories"
      >
        <RelatedPages
          items={consumablesRelated.items.map((item) => ({
            category: item.title,
            description: item.description,
            categoryHref: item.href,
            imageLabel: item.image.filename,
            imageDescription: item.image.description,
          }))}
        />
      </SectionBlock>

      {/* Section 8 — Final CTA */}
      <CTASection
        title={consumablesFinalCta.title}
        copy={consumablesFinalCta.copy}
        primaryCta={consumablesFinalCta.primaryCta}
        secondaryCta={consumablesFinalCta.secondaryCta}
        imageLabel={{
          label: consumablesFinalCta.image.filename,
          description: consumablesFinalCta.image.description,
        }}
      />
    </div>
  );
}
