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
  shopControlToolsFamilies,
  shopControlToolsFinalCta,
  shopControlToolsGetStarted,
  shopControlToolsHero,
  shopControlToolsRelated,
  shopControlToolsSelection,
  shopControlToolsWhy,
} from "@/content/shopControlTools";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: "Shop Control Tools",
  description: shopControlToolsHero.subheadline,
  path: "/shop/shop-control-tools",
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

export default function ShopControlToolsPage() {
  return (
    <div className="w-full">
      {/* Section 1 — Category Hero */}
      <header className="border-b border-border bg-surface py-(--spacing-section-sm) md:py-(--spacing-section)">
        <Container>
          <div className="grid items-center gap-(--spacing-stack-xl) lg:grid-cols-2 lg:gap-(--spacing-section-sm)">
            <div className="order-2 space-y-(--spacing-stack-xl) lg:order-1">
              <div className="max-w-xl space-y-(--spacing-stack-md)">
                <p className="text-caption font-medium tracking-wide text-muted uppercase">
                  {shopControlToolsHero.eyebrow}
                </p>
                <h1 className="text-[length:var(--text-display)] leading-[var(--text-display--line-height)] font-semibold tracking-[var(--text-display--letter-spacing)] text-balance text-foreground">
                  {shopControlToolsHero.headline}
                </h1>
                <p className="text-body text-muted">
                  {shopControlToolsHero.subheadline}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink
                  href={shopControlToolsHero.primaryCta.href}
                  variant="primary"
                  size="md"
                >
                  {shopControlToolsHero.primaryCta.label}
                </ButtonLink>
                <ButtonLink
                  href={shopControlToolsHero.secondaryCta.href}
                  variant="secondary"
                  size="md"
                >
                  {shopControlToolsHero.secondaryCta.label}
                </ButtonLink>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <ImagePlaceholder
                aspectRatio="3/2"
                variant="default"
                label={shopControlToolsHero.image.filename}
                description={shopControlToolsHero.image.description}
              />
            </div>
          </div>
        </Container>
      </header>

      {/* Section 2 — Why This Category Exists */}
      <SectionBlock
        title={shopControlToolsWhy.title}
        id="why-this-category-exists"
      >
        <div className="grid gap-(--spacing-stack-xl) lg:grid-cols-2 lg:items-start">
          <ProseParagraphs paragraphs={shopControlToolsWhy.paragraphs} />
          <ImagePlaceholder
            aspectRatio="4/3"
            variant="compact"
            label={shopControlToolsWhy.image.filename}
            description={shopControlToolsWhy.image.description}
          />
        </div>
      </SectionBlock>

      {/* Section 3 — The Eight Families */}
      <SectionBlock
        title={shopControlToolsFamilies.title}
        intro={shopControlToolsFamilies.intro}
        tone="muted"
        id={shopControlToolsFamilies.anchorId}
        className="scroll-mt-20"
      >
        <CategoryGrid
          layout="eight"
          items={shopControlToolsFamilies.items.map(mapGridItem)}
        />
      </SectionBlock>

      {/* Section 4 — How These Items Are Selected */}
      <SectionBlock
        title={shopControlToolsSelection.title}
        id="how-these-items-are-selected"
      >
        <div className="grid gap-(--spacing-stack-xl) lg:grid-cols-2 lg:items-start">
          <div className="space-y-(--spacing-stack-md)">
            <ProseParagraphs paragraphs={shopControlToolsSelection.paragraphs} />
            <p>
              <TextLink href={shopControlToolsSelection.inlineLink.href}>
                {shopControlToolsSelection.inlineLink.label}
              </TextLink>
            </p>
          </div>
          <ImagePlaceholder
            aspectRatio="4/3"
            variant="compact"
            label={shopControlToolsSelection.image.filename}
            description={shopControlToolsSelection.image.description}
          />
        </div>
      </SectionBlock>

      {/* Section 5 — How to Get Started */}
      <SectionBlock
        title={shopControlToolsGetStarted.title}
        tone="muted"
        id="how-to-get-started"
      >
        <div className="max-w-3xl space-y-(--spacing-stack-xl)">
          <ProseParagraphs paragraphs={shopControlToolsGetStarted.paragraphs} />
          <div className="flex flex-wrap gap-3">
            <ButtonLink
              href={shopControlToolsGetStarted.primaryCta.href}
              variant="primary"
              size="md"
            >
              {shopControlToolsGetStarted.primaryCta.label}
            </ButtonLink>
            <ButtonLink
              href={shopControlToolsGetStarted.secondaryCta.href}
              variant="secondary"
              size="md"
            >
              {shopControlToolsGetStarted.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </SectionBlock>

      {/* Section 6 — Related Categories */}
      <SectionBlock
        title={shopControlToolsRelated.title}
        intro={shopControlToolsRelated.intro}
        id="related-categories"
      >
        <RelatedPages
          className="md:grid-cols-2"
          items={shopControlToolsRelated.items.map((item) => ({
            category: item.title,
            description: item.description,
            categoryHref: item.href,
            imageLabel: item.image.filename,
            imageDescription: item.image.description,
          }))}
        />
      </SectionBlock>

      {/* Section 7 — Final CTA */}
      <CTASection
        title={shopControlToolsFinalCta.title}
        copy={shopControlToolsFinalCta.copy}
        primaryCta={shopControlToolsFinalCta.primaryCta}
        secondaryCta={shopControlToolsFinalCta.secondaryCta}
        imageLabel={{
          label: shopControlToolsFinalCta.image.filename,
          description: shopControlToolsFinalCta.image.description,
        }}
      />
    </div>
  );
}
