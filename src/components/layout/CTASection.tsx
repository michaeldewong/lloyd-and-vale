import { ImagePlaceholder } from "@/components/media/ImagePlaceholder";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type CtaLink = {
  label: string;
  href: string;
};

type CTASectionProps = {
  title: string;
  copy: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  imageLabel: string;
  className?: string;
};

export function CTASection({
  title,
  copy,
  primaryCta,
  secondaryCta,
  imageLabel,
  className,
}: CTASectionProps) {
  return (
    <Section spacing="lg" tone="muted" className={className}>
      <div className="relative overflow-hidden border border-border bg-surface">
        <div className="absolute inset-0 opacity-30">
          <ImagePlaceholder
            aspectRatio="16/9"
            label={imageLabel}
            className="h-full min-h-full rounded-none border-0 [&>div]:min-h-[16rem] [&>div]:h-full"
          />
        </div>
        <div className="relative mx-auto max-w-3xl space-y-(--spacing-stack-xl) px-(--spacing-content-lg) py-(--spacing-section) sm:px-(--spacing-section-sm)">
          <div className="space-y-(--spacing-stack-md)">
            <h2 className="text-[length:var(--text-heading)] leading-[var(--text-heading--line-height)] font-semibold tracking-[var(--text-heading--letter-spacing)] text-foreground">
              {title}
            </h2>
            <p className="text-body text-muted">{copy}</p>
          </div>
          <div className={cn("flex flex-wrap gap-3")}>
            <ButtonLink href={primaryCta.href} variant="primary" size="md">
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href={secondaryCta.href} variant="secondary" size="md">
              {secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
