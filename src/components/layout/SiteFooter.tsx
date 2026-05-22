import Link from "next/link";
import { footerNavigation, legalFooterLinks, siteName } from "@/content/navigation";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

const linkClassName =
  "text-small text-muted transition-colors hover:text-foreground";

export function SiteFooter() {
  const resourceLinks = footerNavigation.links.filter(
    (item) => item.href !== "/contact",
  );

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <Container className="py-(--spacing-section-sm) md:py-(--spacing-section)">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="text-body font-semibold tracking-tight text-foreground">
              {siteName}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="lg:col-span-3 lg:col-start-6"
          >
            <p className="text-caption font-medium tracking-wide text-muted-subtle uppercase">
              Site
            </p>
            <ul className="mt-(--spacing-stack-md) space-y-2">
              {footerNavigation.main.map((item) => (
                <li key={`main-${item.href}`}>
                  <Link href={item.href} className={linkClassName}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            aria-label="Footer links"
            className="lg:col-span-5"
          >
            <p className="text-caption font-medium tracking-wide text-muted-subtle uppercase">
              Resources
            </p>
            <ul
              className={cn(
                "mt-(--spacing-stack-md) grid gap-2",
                "sm:grid-cols-2",
              )}
            >
              {resourceLinks.map((item) => (
                <li key={`link-${item.href}-${item.label}`}>
                  <Link href={item.href} className={linkClassName}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className={linkClassName}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
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
