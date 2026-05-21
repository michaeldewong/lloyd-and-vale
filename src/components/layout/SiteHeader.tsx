import Link from "next/link";
import { siteName } from "@/content/navigation";
import { Container } from "@/components/layout/Container";
import { MainNav } from "@/components/layout/MainNav";
import { MobileNav } from "@/components/layout/MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <Container className="relative">
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="shrink-0 text-body font-semibold tracking-tight text-foreground hover:text-accent"
          >
            {siteName}
          </Link>
          <div className="hidden lg:block">
            <MainNav />
          </div>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
