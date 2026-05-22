import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";

export type Gate1SubpageLink = {
  readonly title: string;
  readonly href: string;
};

export type Gate1SubpageContent = {
  readonly eyebrow: string;
  readonly title: string;
  readonly links?: readonly Gate1SubpageLink[];
};

type Gate1SubpageProps = {
  page: Gate1SubpageContent;
};

function TitleLinkBlocks({ links }: { links: readonly Gate1SubpageLink[] }) {
  return (
    <ul className="grid gap-(--spacing-content-lg) sm:grid-cols-2 lg:grid-cols-3">
      {links.map((block) => (
        <li key={block.href}>
          <Link
            href={block.href}
            className="group flex h-full min-h-[5.5rem] items-center border border-border bg-surface p-(--spacing-content) transition-colors hover:border-border-strong"
          >
            <h2 className="text-body font-semibold text-foreground group-hover:text-accent">
              {block.title}
            </h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Gate 1 clean placeholder — hero plus optional title-and-link blocks only. */
export function Gate1Subpage({ page }: Gate1SubpageProps) {
  const links = page.links;

  return (
    <div className="w-full">
      <PageShell eyebrow={page.eyebrow} title={page.title}>
        {links && links.length > 0 ? <TitleLinkBlocks links={links} /> : null}
      </PageShell>
    </div>
  );
}
