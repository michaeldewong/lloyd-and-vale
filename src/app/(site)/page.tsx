import { CategoryGrid } from "@/components/layout/CategoryGrid";
import { CTASection } from "@/components/layout/CTASection";
import { Container } from "@/components/layout/Container";
import { RelatedPages } from "@/components/layout/RelatedPages";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { TextLink } from "@/components/layout/TextLink";
import { TrustStrip } from "@/components/layout/TrustStrip";
import { ImagePlaceholder } from "@/components/media/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import {
  homeBuiltForShops,
  homeFinalCta,
  homeHero,
  homeHowWeSelect,
  homeLearn,
  homeSupplies,
  homeTechnicalSupport,
  homeTrustStrip,
} from "@/content/home";

function imageLabel(filename: string, description: string): string {
  return `${filename} — ${description}`;
}

export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <header className="border-b border-border bg-surface py-(--spacing-section-sm) md:py-(--spacing-section)">
        <Container>
          <div className="grid items-center gap-(--spacing-stack-xl) lg:grid-cols-2 lg:gap-(--spacing-section-sm)">
            <div className="order-2 space-y-(--spacing-stack-xl) lg:order-1">
              <div className="max-w-xl space-y-(--spacing-stack-md)">
                <h1 className="text-[length:var(--text-display)] leading-[var(--text-display--line-height)] font-semibold tracking-[var(--text-display--letter-spacing)] text-balance text-foreground">
                  {homeHero.headline}
                </h1>
                <p className="text-body text-muted">{homeHero.subheadline}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink
                  href={homeHero.primaryCta.href}
                  variant="primary"
                  size="md"
                >
                  {homeHero.primaryCta.label}
                </ButtonLink>
                <ButtonLink
                  href={homeHero.secondaryCta.href}
                  variant="secondary"
                  size="md"
                >
                  {homeHero.secondaryCta.label}
                </ButtonLink>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <ImagePlaceholder
                aspectRatio="3/2"
                label={imageLabel(
                  homeHero.image.filename,
                  homeHero.image.description,
                )}
              />
            </div>
          </div>
        </Container>
      </header>

      {/* Section 2 — Trust Strip */}
      <TrustStrip
        items={homeTrustStrip.map((statement) => ({
          label: statement,
        }))}
      />

      {/* Section 3 — What Lloyd & Vale Supplies */}
      <SectionBlock
        title={homeSupplies.title}
        intro={homeSupplies.intro}
        id="what-we-supply"
      >
        <CategoryGrid
          items={homeSupplies.categories.map((category) => ({
            title: category.title,
            description: category.description,
            href: category.href,
            imageLabel: imageLabel(
              category.image.filename,
              category.image.description,
            ),
          }))}
        />
      </SectionBlock>

      {/* Section 4 — How We Select */}
      <SectionBlock title={homeHowWeSelect.title} tone="muted" id="how-we-select">
        <div className="grid gap-(--spacing-stack-xl) lg:grid-cols-2 lg:items-start">
          <div className="space-y-(--spacing-stack-md)">
            {homeHowWeSelect.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body text-muted">
                {paragraph}
              </p>
            ))}
            <p>
              <TextLink href={homeHowWeSelect.inlineLink.href}>
                {homeHowWeSelect.inlineLink.label}
              </TextLink>
            </p>
          </div>
          <ImagePlaceholder
            aspectRatio="4/3"
            label={imageLabel(
              homeHowWeSelect.image.filename,
              homeHowWeSelect.image.description,
            )}
          />
        </div>
      </SectionBlock>

      {/* Section 5 — Built for Serious Small Shops */}
      <SectionBlock
        title={homeBuiltForShops.title}
        id="built-for-serious-small-shops"
      >
        <div className="space-y-(--spacing-stack-xl)">
          <div className="grid gap-(--spacing-stack-xl) lg:grid-cols-2 lg:items-start">
            <div className="space-y-(--spacing-stack-md)">
              {homeBuiltForShops.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-muted">
                  {paragraph}
                </p>
              ))}
              <p>
                <TextLink href={homeBuiltForShops.inlineLink.href}>
                  {homeBuiltForShops.inlineLink.label}
                </TextLink>
              </p>
            </div>
          </div>
          <div>
            <ImagePlaceholder
              aspectRatio="16/9"
              label={imageLabel(
                homeBuiltForShops.compositeImage.filename,
                homeBuiltForShops.compositeImage.description,
              )}
              className="mb-(--spacing-stack-md)"
            />
            <ul className="grid gap-(--spacing-stack-md) sm:grid-cols-3">
              {homeBuiltForShops.compositeImage.panels.map((panel) => (
                <li key={panel.filename}>
                  <ImagePlaceholder
                    aspectRatio="4/3"
                    label={imageLabel(panel.filename, panel.description)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionBlock>

      {/* Section 6 — Learn From the Floor */}
      <SectionBlock
        title={homeLearn.title}
        intro={homeLearn.intro}
        tone="muted"
        id="learn-from-the-floor"
      >
        <div className="space-y-(--spacing-stack-xl)">
          <RelatedPages
            items={homeLearn.previews.map((preview) => ({
              category: preview.category,
              description: preview.description,
              categoryHref: preview.categoryHref,
              imageLabel: imageLabel(
                preview.image.filename,
                preview.image.description,
              ),
              featuredLabel:
                "featuredLabel" in preview ? preview.featuredLabel : undefined,
              featuredHref:
                "featuredHref" in preview ? preview.featuredHref : undefined,
              upcoming: "upcoming" in preview ? preview.upcoming : undefined,
            }))}
          />
          <p>
            <TextLink href={homeLearn.inlineLink.href}>
              {homeLearn.inlineLink.label}
            </TextLink>
          </p>
        </div>
      </SectionBlock>

      {/* Section 7 — Technical Support Within Defined Scope */}
      <SectionBlock
        title={homeTechnicalSupport.title}
        id="technical-support"
      >
        <div className="grid gap-(--spacing-stack-xl) lg:grid-cols-2 lg:items-start">
          <div className="space-y-(--spacing-stack-md)">
            {homeTechnicalSupport.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body text-muted">
                {paragraph}
              </p>
            ))}
            <p>
              <TextLink href={homeTechnicalSupport.inlineLink.href}>
                {homeTechnicalSupport.inlineLink.label}
              </TextLink>
            </p>
          </div>
          <ImagePlaceholder
            aspectRatio="4/3"
            label={imageLabel(
              homeTechnicalSupport.image.filename,
              homeTechnicalSupport.image.description,
            )}
          />
        </div>
      </SectionBlock>

      {/* Section 8 — Final CTA */}
      <CTASection
        title={homeFinalCta.title}
        copy={homeFinalCta.copy}
        primaryCta={homeFinalCta.primaryCta}
        secondaryCta={homeFinalCta.secondaryCta}
        imageLabel={imageLabel(
          homeFinalCta.image.filename,
          homeFinalCta.image.description,
        )}
      />
    </>
  );
}
