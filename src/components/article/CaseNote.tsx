import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CaseNoteProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function CaseNote({ title, children, className }: CaseNoteProps) {
  return (
    <aside
      className={cn(
        "border-l-2 border-border-strong bg-surface-muted px-(--spacing-content) py-(--spacing-content)",
        className,
      )}
    >
      <h3 className="mb-(--spacing-stack-md) text-[length:var(--text-heading)] leading-[var(--text-heading--line-height)] font-semibold tracking-[var(--text-heading--letter-spacing)] text-foreground">
        {title}
      </h3>
      <div className="text-body text-muted">{children}</div>
    </aside>
  );
}
