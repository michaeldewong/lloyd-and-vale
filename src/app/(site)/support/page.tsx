import type { Metadata } from "next";
import { CTASection } from "@/components/layout/CTASection";
import { Container } from "@/components/layout/Container";
import { RelatedPages } from "@/components/layout/RelatedPages";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { TextLink } from "@/components/layout/TextLink";
import { ImagePlaceholder } from "@/components/media/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import {
  technicalSupportFinalCta,
  technicalSupportHero,
  technicalSupportHow,
  technicalSupportInsideScope,
  technicalSupportOutsideScope,
  technicalSupportProducts,
  technicalSupportRelated,
  technicalSupportSubmit,
} from "@/content/technicalSupport";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: "Technical Support",
  description:
    "Technical support for products and workflows inside documented Lloyd & Vale scope, with clear intake, response standards, and escalation paths.",
  path: "/support",
});

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

function ScopeBlocksGrid({
  items,
}: {
  items: readonly {
    title: string;
    description: string;
    image: { filename: string; description: string };
  }[];
}) {
  return (
    <ul className="grid gap-(--spacing-content-lg) sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.title}>
          <article className="flex h-full flex-col border border-border bg-surface">
            <ImagePlaceholder
              aspectRatio="4/3"
              variant="compact"
              label={item.image.filename}
              description={item.image.description}
              className="rounded-none border-0 border-b border-border"
            />
            <div className="flex flex-1 flex-col gap-(--spacing-stack-md) p-(--spacing-content)">
              <h3 className="text-body font-semibold text-foreground">{item.title}</h3>
              <p className="flex-1 text-small text-muted">{item.description}</p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default function SupportPage() {
  return (
    <div className="w-full">
      {/* Section 1 — Page Hero */}
      <header className="border-b border-border bg-surface py-(--spacing-section-sm) md:py-(--spacing-section)">
        <Container>
          <div className="grid items-center gap-(--spacing-stack-xl) lg:grid-cols-2 lg:gap-(--spacing-section-sm)">
            <div className="order-2 space-y-(--spacing-stack-xl) lg:order-1">
              <div className="max-w-xl space-y-(--spacing-stack-md)">
                <p className="text-caption font-medium tracking-wide text-muted uppercase">
                  {technicalSupportHero.eyebrow}
                </p>
                <h1 className="text-[length:var(--text-display)] leading-[var(--text-display--line-height)] font-semibold tracking-[var(--text-display--letter-spacing)] text-balance text-foreground">
                  {technicalSupportHero.headline}
                </h1>
                <p className="text-body text-muted">{technicalSupportHero.subheadline}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink
                  href={technicalSupportHero.primaryCta.href}
                  variant="primary"
                  size="md"
                >
                  {technicalSupportHero.primaryCta.label}
                </ButtonLink>
                <ButtonLink
                  href={technicalSupportHero.secondaryCta.href}
                  variant="secondary"
                  size="md"
                >
                  {technicalSupportHero.secondaryCta.label}
                </ButtonLink>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <ImagePlaceholder
                aspectRatio="3/2"
                variant="default"
                label={technicalSupportHero.image.filename}
                description={technicalSupportHero.image.description}
              />
            </div>
          </div>
        </Container>
      </header>

      {/* Section 2 — How Lloyd & Vale Supports Operators */}
      <SectionBlock title={technicalSupportHow.title} id="how-we-support-operators">
        <div className="grid gap-(--spacing-stack-xl) lg:grid-cols-2 lg:items-start">
          <ProseParagraphs paragraphs={technicalSupportHow.paragraphs} />
          <ImagePlaceholder
            aspectRatio="4/3"
            variant="compact"
            label={technicalSupportHow.image.filename}
            description={technicalSupportHow.image.description}
          />
        </div>
      </SectionBlock>

      {/* Section 3 — What's Inside the Support Scope */}
      <SectionBlock
        title={technicalSupportInsideScope.title}
        intro={technicalSupportInsideScope.intro}
        tone="muted"
        id="whats-inside-the-scope"
      >
        <ScopeBlocksGrid items={technicalSupportInsideScope.items} />
      </SectionBlock>

      {/* Section 4 — What's Outside the Scope */}
      <SectionBlock
        title={technicalSupportOutsideScope.title}
        id="whats-outside-the-scope"
      >
        <div className="max-w-3xl">
          <ProseParagraphs paragraphs={technicalSupportOutsideScope.paragraphs} />
        </div>
      </SectionBlock>

      {/* Section 5 — How to Submit a Support Request */}
      <SectionBlock
        title={technicalSupportSubmit.title}
        intro={technicalSupportSubmit.intro}
        tone="muted"
        id="how-to-submit-a-support-request"
      >
        <div className="grid gap-(--spacing-stack-xl) lg:grid-cols-2 lg:items-start">
          <div className="space-y-(--spacing-stack-xl)">
            <ol className="list-none space-y-(--spacing-stack-xl)">
              {technicalSupportSubmit.steps.map((step, index) => (
                <li key={step.title} className="flex gap-(--spacing-stack-md)">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center border border-border bg-surface text-small font-semibold text-foreground"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <div className="space-y-(--spacing-stack-sm) pt-0.5">
                    <h3 className="text-body font-semibold text-foreground">{step.title}</h3>
                    <p className="text-body text-muted">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-body text-muted">{technicalSupportSubmit.inlineNote}</p>
            <div>
              <ButtonLink
                href={technicalSupportSubmit.primaryCta.href}
                variant="primary"
                size="md"
              >
                {technicalSupportSubmit.primaryCta.label}
              </ButtonLink>
            </div>
          </div>
          <ImagePlaceholder
            aspectRatio="4/3"
            variant="compact"
            label={technicalSupportSubmit.image.filename}
            description={technicalSupportSubmit.image.description}
          />
        </div>
      </SectionBlock>

      {/* Section 6 — Support Connected to Products */}
      <SectionBlock title={technicalSupportProducts.title} id="support-connected-to-products">
        <div className="grid gap-(--spacing-stack-xl) lg:grid-cols-2 lg:items-start">
          <div className="space-y-(--spacing-stack-md)">
            <ProseParagraphs paragraphs={technicalSupportProducts.paragraphs} />
            <p>
              <TextLink href={technicalSupportProducts.inlineLink.href}>
                {technicalSupportProducts.inlineLink.label}
              </TextLink>
            </p>
          </div>
          <ImagePlaceholder
            aspectRatio="4/3"
            variant="compact"
            label={technicalSupportProducts.image.filename}
            description={technicalSupportProducts.image.description}
          />
        </div>
      </SectionBlock>

      {/* Section 7 — Related Pages */}
      <SectionBlock
        title={technicalSupportRelated.title}
        intro={technicalSupportRelated.intro}
        tone="muted"
        id="related-pages"
      >
        <RelatedPages
          items={technicalSupportRelated.items.map((item) => ({
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
        title={technicalSupportFinalCta.title}
        copy={technicalSupportFinalCta.copy}
        primaryCta={technicalSupportFinalCta.primaryCta}
        secondaryCta={technicalSupportFinalCta.secondaryCta}
        imageLabel={{
          label: technicalSupportFinalCta.image.filename,
          description: technicalSupportFinalCta.image.description,
        }}
      />
    </div>
  );
}
