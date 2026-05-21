import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

type PageShellProps = {
  title: string;
  children?: ReactNode;
};

/**
 * Minimal page wrapper for Gate 1 — title only until page content is authored.
 */
export function PageShell({ title, children }: PageShellProps) {
  return (
    <main className="flex-1 py-12">
      <Container>
        <h1 className="text-2xl font-medium tracking-tight text-foreground">
          {title}
        </h1>
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </main>
  );
}
