import type { ReactNode } from "react";

type FormLayoutProps = {
  title: string;
  children: ReactNode;
};

export function FormLayout({ title, children }: FormLayoutProps) {
  return (
    <fieldset className="space-y-(--spacing-stack-md) border-0 p-0">
      <legend className="mb-(--spacing-stack-md) text-[length:var(--text-heading)] leading-[var(--text-heading--line-height)] font-semibold tracking-[var(--text-heading--letter-spacing)] text-foreground">
        {title}
      </legend>
      <div className="space-y-(--spacing-stack-md)">{children}</div>
    </fieldset>
  );
}
