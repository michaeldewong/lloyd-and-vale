import Link from "next/link";
import { siteName } from "@/content/navigation";
import { Container } from "@/components/layout/Container";
import { MainNav } from "@/components/layout/MainNav";

export function SiteHeader() {
  return (
    <header className="border-b border-foreground/10">
      <Container className="flex flex-col gap-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="text-lg font-medium tracking-tight text-foreground"
        >
          {siteName}
        </Link>
        <MainNav />
      </Container>
    </header>
  );
}
