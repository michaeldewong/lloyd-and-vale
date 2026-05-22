import Link from "next/link";
import { headerGetAQuoteCta, siteName } from "@/content/navigation";
import { Container } from "@/components/layout/Container";
import { MainNav } from "@/components/layout/MainNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { ButtonLink } from "@/components/ui/Button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <Container className="relative">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="shrink-0 text-body font-semibold tracking-tight text-foreground hover:text-accent"
          >
            {siteName}
          </Link>
          <div className="flex items-center gap-3 lg:gap-4">
            <div className="hidden lg:block">
              <MainNav />
            </div>
            <ButtonLink
              href={headerGetAQuoteCta.href}
              variant="primary"
              size="md"
              className="hidden shrink-0 lg:inline-flex"
            >
              {headerGetAQuoteCta.label}
            </ButtonLink>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
