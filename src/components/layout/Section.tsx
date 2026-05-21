import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";

type SectionTone = "default" | "muted" | "surface";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  /** Vertical padding density */
  spacing?: "sm" | "default" | "lg";
  tone?: SectionTone;
  id?: string;
  "aria-label"?: string;
};

const spacingStyles = {
  sm: "py-(--spacing-section-sm)",
  default: "py-(--spacing-section)",
  lg: "py-(--spacing-section-lg)",
} as const;

const toneStyles: Record<SectionTone, string> = {
  default: "bg-background",
  muted: "bg-surface-muted",
  surface: "bg-surface",
};

export function Section({
  children,
  className,
  containerClassName,
  spacing = "default",
  tone = "default",
  id,
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(spacingStyles[spacing], toneStyles[tone], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
