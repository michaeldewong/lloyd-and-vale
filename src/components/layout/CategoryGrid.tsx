import Link from "next/link";
import { ImagePlaceholder } from "@/components/media/ImagePlaceholder";
import { cn } from "@/lib/cn";

export type CategoryGridItem = {
  title: string;
  description: string;
  href: string;
  imageLabel: string;
  imageDescription: string;
};

type CategoryGridLayout = "five" | "six" | "eight";

type CategoryGridProps = {
  items: readonly CategoryGridItem[];
  layout?: CategoryGridLayout;
  className?: string;
};

const layoutGridStyles: Record<CategoryGridLayout, string> = {
  five: "sm:grid-cols-2 lg:grid-cols-6",
  six: "sm:grid-cols-2 lg:grid-cols-3",
  eight: "sm:grid-cols-2 lg:grid-cols-4",
};

export function CategoryGrid({
  items,
  layout = "five",
  className,
}: CategoryGridProps) {
  return (
    <ul
      className={cn(
        "grid gap-(--spacing-content-lg)",
        layoutGridStyles[layout],
        className,
      )}
    >
      {items.map((item, index) => (
        <li
          key={item.href}
          className={cn(
            layout === "five" && "sm:col-span-1 lg:col-span-2",
            layout === "five" && index === 3 && "lg:col-span-3",
            layout === "five" && index === 4 && "lg:col-span-3",
          )}
        >
          <Link
            href={item.href}
            className="group flex h-full flex-col border border-border bg-surface transition-colors hover:border-border-strong"
          >
            <ImagePlaceholder
              aspectRatio="4/3"
              variant="compact"
              label={item.imageLabel}
              description={item.imageDescription}
              className="rounded-none border-0 border-b border-border"
            />
            <div className="flex flex-1 flex-col gap-(--spacing-stack-md) p-(--spacing-content)">
              <h3 className="text-body font-semibold text-foreground group-hover:text-accent">
                {item.title}
              </h3>
              <p className="flex-1 text-small text-muted">{item.description}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
