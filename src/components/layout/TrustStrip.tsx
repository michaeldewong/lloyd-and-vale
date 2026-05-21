import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";

export type TrustStripItem = {
  /** Full statement text when used without detail */
  label: string;
  detail?: ReactNode;
};

type TrustStripProps = {
  items?: readonly TrustStripItem[];
  className?: string;
};

/**
 * Structural trust / context strip — pass only approved labels.
 * Renders nothing when items are omitted or empty.
 */
export function TrustStrip({ items, className }: TrustStripProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <aside
      aria-label="Context"
      className={cn(
        "border-y border-border bg-surface-muted py-(--spacing-content-lg)",
        className,
      )}
    >
      <Container>
        <ul className="grid gap-(--spacing-content-lg) sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li
              key={item.label}
              className="border-border sm:border-r sm:pr-(--spacing-content-lg) sm:last:border-r-0"
            >
              {item.detail ? (
                <>
                  <p className="text-caption font-medium tracking-wide text-muted uppercase">
                    {item.label}
                  </p>
                  <div className="mt-(--spacing-stack-sm) text-small text-foreground">
                    {item.detail}
                  </div>
                </>
              ) : (
                <p className="text-small leading-relaxed text-foreground">
                  {item.label}
                </p>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </aside>
  );
}
