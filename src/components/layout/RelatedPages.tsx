import Link from "next/link";
import { ImagePlaceholder } from "@/components/media/ImagePlaceholder";
import { cn } from "@/lib/cn";

export type RelatedPageItem = {
  category: string;
  description: string;
  categoryHref: string;
  imageLabel: string;
  featuredLabel?: string;
  featuredHref?: string;
  upcoming?: string;
};

type RelatedPagesProps = {
  items: readonly RelatedPageItem[];
  className?: string;
};

export function RelatedPages({ items, className }: RelatedPagesProps) {
  return (
    <ul
      className={cn(
        "grid gap-(--spacing-content-lg) md:grid-cols-3",
        className,
      )}
    >
      {items.map((item) => (
        <li key={item.categoryHref}>
          <article className="flex h-full flex-col border border-border bg-surface">
            <Link href={item.categoryHref} className="group block">
              <ImagePlaceholder
                aspectRatio="4/3"
                label={item.imageLabel}
                className="rounded-none border-0 border-b border-border"
              />
              <div className="space-y-(--spacing-stack-md) p-(--spacing-content)">
                <h3 className="text-body font-semibold text-foreground group-hover:text-accent">
                  {item.category}
                </h3>
                <p className="text-small text-muted">{item.description}</p>
              </div>
            </Link>
            {(item.featuredLabel && item.featuredHref) || item.upcoming ? (
              <div className="mt-auto border-t border-border px-(--spacing-content) py-(--spacing-stack-md)">
                {item.featuredLabel && item.featuredHref ? (
                  <p className="text-small text-foreground">
                    <Link
                      href={item.featuredHref}
                      className="font-medium text-foreground underline decoration-border-strong underline-offset-4 hover:text-accent"
                    >
                      {item.featuredLabel}
                    </Link>
                  </p>
                ) : null}
                {item.upcoming ? (
                  <p className="text-small text-muted">{item.upcoming}</p>
                ) : null}
              </div>
            ) : null}
          </article>
        </li>
      ))}
    </ul>
  );
}
