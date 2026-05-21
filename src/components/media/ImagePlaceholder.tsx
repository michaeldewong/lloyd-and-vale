import { cn } from "@/lib/cn";

type AspectRatio = "16/9" | "4/3" | "3/2" | "1/1";

type ImagePlaceholderProps = {
  aspectRatio?: AspectRatio;
  /** Neutral label for layout review — not marketing copy. */
  label?: string;
  className?: string;
};

const aspectStyles: Record<AspectRatio, string> = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
};

export function ImagePlaceholder({
  aspectRatio = "16/9",
  label = "Media placement",
  className,
}: ImagePlaceholderProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-sm border border-border bg-surface-muted",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-full items-center justify-center",
          aspectStyles[aspectRatio],
        )}
        role="img"
        aria-label={label}
      >
        <span className="text-caption font-medium tracking-wide text-muted-subtle uppercase">
          {label}
        </span>
      </div>
    </figure>
  );
}
