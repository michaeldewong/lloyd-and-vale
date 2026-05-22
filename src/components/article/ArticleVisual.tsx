import {
  ImagePlaceholder,
  type ImagePlaceholderAspectRatio,
} from "@/components/media/ImagePlaceholder";
import { cn } from "@/lib/cn";

type ArticleVisualProps = {
  filename: string;
  description: string;
  caption?: string;
  aspectRatio?: ImagePlaceholderAspectRatio;
  breakout?: boolean;
  className?: string;
};

export function ArticleVisual({
  filename,
  description,
  caption,
  aspectRatio = "4/3",
  breakout = false,
  className,
}: ArticleVisualProps) {
  return (
    <figure
      className={cn(
        "space-y-(--spacing-stack-sm)",
        breakout && "w-full",
        className,
      )}
    >
      <ImagePlaceholder
        aspectRatio={aspectRatio}
        variant={breakout ? "default" : "compact"}
        label={filename}
        description={description}
        className={breakout ? "max-h-[24rem]" : undefined}
      />
      {caption ? (
        <figcaption className="text-small text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
