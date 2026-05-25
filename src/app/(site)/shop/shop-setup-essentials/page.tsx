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
  shopSetupEssentialsFinalCta,
  shopSetupEssentialsGetStarted,
  shopSetupEssentialsHero,
  shopSetupEssentialsRelated,
  shopSetupEssentialsSelection,
  shopSetupEssentialsStarterKits,
  shopSetupEssentialsSubcategories,
  shopSetupEssentialsWhy,
} from "@/content/shopSetupEssentials";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: "Shop Setup Essentials",
  description:
    "Visual-management infrastructure for small production shops, including floor marking, zone labels, station signs, SOP boards, and setup kits.",
  path: "/shop/shop-setup-essentials",
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

export default function ShopSetupEssentialsPage() {
  return (
    <div className="w-full">
      {/* Section 1 — Category Hero */}
      <header className="border-b border-border bg-surface py-(--spacing-section-sm) md:py-(--spacing-section)">
        <Container>
          <div className="grid items-center gap-(--spacing-stack-xl) lg:grid-cols-2 lg:gap-(--spacing-section-sm)">
            <div className="order-2 space-y-(--spacing-stack-xl) lg:order-1">
              <div className="max-w-xl space-y-(--spacing-stack-md)">
                <p className="text-caption font-medium tracking-wide text-muted uppercase">
                  {shopSetupEssentialsHero.eyebrow}
                </p>
                <h1 className="text-[length:var(--text-display)] leading-[var(--text-display--line-height)] font-semibold tracking-[var(--text-display--letter-spacing)] text-balance text-foreground">
                  {shopSetupEssentialsHero.headline}
                </h1>
                <p className="text-body text-muted">
                  {shopSetupEssentialsHero.subheadline}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink
                  href={shopSetupEssentialsHero.primaryCta.href}
                  variant="primary"
                  size="md"
                >
                  {shopSetupEssentialsHero.primaryCta.label}
                </ButtonLink>
                <ButtonLink
                  href={shopSetupEssentialsHero.secondaryCta.href}
                  variant="secondary"
                  size="md"
                >
                  {shopSetupEssentialsHero.secondaryCta.label}
                </ButtonLink>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <ImagePlaceholder
                aspectRatio="3/2"
                variant="default"
                label={shopSetupEssentialsHero.image.filename}
                description={shopSetupEssentialsHero.image.description}
              />
            </div>
          </div>
        </Container>
      </header>

      {/* Section 2 — Why This Category Exists */}
      <SectionBlock
        title={shopSetupEssentialsWhy.title}
        id="why-this-category-exists"
      >
        <div className="grid gap-(--spacing-stack-xl) lg:grid-cols-2 lg:items-start">
          <ProseParagraphs paragraphs={shopSetupEssentialsWhy.paragraphs} />
          <ImagePlaceholder
            aspectRatio="4/3"
            variant="compact"
            label={shopSetupEssentialsWhy.image.filename}
            description={shopSetupEssentialsWhy.image.description}
          />
        </div>
      </SectionBlock>

      {/* Section 3 — What’s in the Category */}
      <SectionBlock
        title={shopSetupEssentialsSubcategories.title}
        intro={shopSetupEssentialsSubcategories.intro}
        tone="muted"
        id="whats-in-the-category"
      >
        <CategoryGrid
          layout="six"
          items={shopSetupEssentialsSubcategories.items.map(mapGridItem)}
        />
      </SectionBlock>

      {/* Section 4 — Starter Kits */}
      <SectionBlock
        title={shopSetupEssentialsStarterKits.title}
        intro={shopSetupEssentialsStarterKits.intro}
        id="starter-kits"
      >
        <div className="space-y-(--spacing-stack-xl)">
          <CategoryGrid
            items={shopSetupEssentialsStarterKits.items.map(mapGridItem)}
          />
          <p>
            <TextLink href={shopSetupEssentialsStarterKits.inlineLink.href}>
              {shopSetupEssentialsStarterKits.inlineLink.label}
            </TextLink>
          </p>
        </div>
      </SectionBlock>

      {/* Section 5 — How These Items Are Selected */}
      <SectionBlock
        title={shopSetupEssentialsSelection.title}
        tone="muted"
        id="how-these-items-are-selected"
      >
        <div className="grid gap-(--spacing-stack-xl) lg:grid-cols-2 lg:items-start">
          <div className="space-y-(--spacing-stack-md)">
            <ProseParagraphs paragraphs={shopSetupEssentialsSelection.paragraphs} />
            <p>
              <TextLink href={shopSetupEssentialsSelection.inlineLink.href}>
                {shopSetupEssentialsSelection.inlineLink.label}
              </TextLink>
            </p>
          </div>
          <ImagePlaceholder
            aspectRatio="4/3"
            variant="compact"
            label={shopSetupEssentialsSelection.image.filename}
            description={shopSetupEssentialsSelection.image.description}
          />
        </div>
      </SectionBlock>

      {/* Section 6 — How to Get Started */}
      <SectionBlock
        title={shopSetupEssentialsGetStarted.title}
        id="how-to-get-started"
      >
        <div className="max-w-3xl space-y-(--spacing-stack-xl)">
          <ProseParagraphs paragraphs={shopSetupEssentialsGetStarted.paragraphs} />
          <div className="flex flex-wrap gap-3">
            <ButtonLink
              href={shopSetupEssentialsGetStarted.primaryCta.href}
              variant="primary"
              size="md"
            >
              {shopSetupEssentialsGetStarted.primaryCta.label}
            </ButtonLink>
            <ButtonLink
              href={shopSetupEssentialsGetStarted.secondaryCta.href}
              variant="secondary"
              size="md"
            >
              {shopSetupEssentialsGetStarted.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </SectionBlock>

      {/* Section 7 — Related Categories */}
      <SectionBlock
        title={shopSetupEssentialsRelated.title}
        intro={shopSetupEssentialsRelated.intro}
        tone="muted"
        id="related-categories"
      >
        <RelatedPages
          className="md:grid-cols-2"
          items={shopSetupEssentialsRelated.items.map((item) => ({
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
        title={shopSetupEssentialsFinalCta.title}
        copy={shopSetupEssentialsFinalCta.copy}
        primaryCta={shopSetupEssentialsFinalCta.primaryCta}
        secondaryCta={shopSetupEssentialsFinalCta.secondaryCta}
        imageLabel={{
          label: shopSetupEssentialsFinalCta.image.filename,
          description: shopSetupEssentialsFinalCta.image.description,
        }}
      />
    </div>
  );
}
