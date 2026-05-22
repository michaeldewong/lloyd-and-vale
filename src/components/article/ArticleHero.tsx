import { Container } from "@/components/layout/Container";
import { ImagePlaceholder } from "@/components/media/ImagePlaceholder";
import { cn } from "@/lib/cn";

type ArticleHeroProps = {
  eyebrow: string;
  title: string;
  deck: string;
  heroImage: { filename: string; description: string };
  className?: string;
};

export function ArticleHero({
  eyebrow,
  title,
  deck,
  heroImage,
  className,
}: ArticleHeroProps) {
  return (
    <header className={cn("border-b border-border bg-surface", className)}>
      <Container narrow className="py-(--spacing-section-sm) md:py-(--spacing-section)">
        <div className="space-y-(--spacing-stack-md)">
          <p className="text-caption font-medium tracking-wide text-muted uppercase">
            {eyebrow}
          </p>
          <h1 className="text-[length:var(--text-display)] leading-[var(--text-display--line-height)] font-semibold tracking-[var(--text-display--letter-spacing)] text-balance text-foreground">
            {title}
          </h1>
          <p className="max-w-2xl text-body text-muted italic">{deck}</p>
        </div>
      </Container>
      <div className="w-full border-t border-border">
        <ImagePlaceholder
          aspectRatio="16/9"
          variant="default"
          label={heroImage.filename}
          description={heroImage.description}
          className="max-h-[28rem] rounded-none border-0"
        />
      </div>
    </header>
  );
}
