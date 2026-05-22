import { cn } from "@/lib/cn";

export type ImagePlaceholderAspectRatio = "16/9" | "4/3" | "3/2" | "1/1";

type AspectRatio = ImagePlaceholderAspectRatio;

type ImagePlaceholderVariant = "default" | "compact" | "background";

type ImagePlaceholderProps = {
  aspectRatio?: AspectRatio;
  /** Short visible caption — typically the filename. */
  label?: string;
  /** Full photography brief — exposed to assistive tech only. */
  description?: string;
  variant?: ImagePlaceholderVariant;
  className?: string;
};

const aspectStyles: Record<AspectRatio, string> = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
};

const variantStyles: Record<ImagePlaceholderVariant, string> = {
  default: "max-h-64 md:max-h-72",
  compact: "max-h-48 md:max-h-56",
  background: "h-28 max-h-28 md:h-32 md:max-h-32",
};

export function ImagePlaceholder({
  aspectRatio = "16/9",
  label = "Media placement",
  description,
  variant = "default",
  className,
}: ImagePlaceholderProps) {
  const ariaLabel = description ? `${label}. ${description}` : label;

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-sm border border-border bg-surface-muted",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-full items-center justify-center p-3",
          variant !== "background" && aspectStyles[aspectRatio],
          variantStyles[variant],
        )}
        role="img"
        aria-label={ariaLabel}
      >
        <span className="line-clamp-2 max-w-full text-center text-caption font-medium text-muted-subtle">
          {label}
        </span>
      </div>
    </figure>
  );
}
