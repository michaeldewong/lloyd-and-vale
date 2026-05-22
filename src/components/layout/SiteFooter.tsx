import Link from "next/link";
import {
  gate1FooterColumns,
  legalFooterLinks,
  siteName,
} from "@/content/navigation";
import { Container } from "@/components/layout/Container";

const linkClassName =
  "text-small text-muted transition-colors hover:text-foreground";

const columnHeadingClassName =
  "text-caption font-medium tracking-wide text-muted-subtle uppercase";

function FooterColumnNav({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <p className={columnHeadingClassName}>{title}</p>
      <ul className="mt-(--spacing-stack-md) space-y-2">
        {links.map((item) => (
          <li key={`${title}-${item.href}`}>
            <Link href={item.href} className={linkClassName}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <Container className="py-(--spacing-section-sm) md:py-(--spacing-section)">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <p className="text-body font-semibold tracking-tight text-foreground">
              {siteName}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-4 lg:gap-8">
            {gate1FooterColumns.map((column) => (
              <FooterColumnNav
                key={column.title}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>
        </div>

        <div className="mt-(--spacing-section-sm) space-y-(--spacing-stack-md) border-t border-border pt-(--spacing-content-lg)">
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalFooterLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClassName}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-caption text-muted-subtle">
            &copy; {new Date().getFullYear()} {siteName}
          </p>
        </div>
      </Container>
    </footer>
  );
}
