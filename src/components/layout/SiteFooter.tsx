import Link from "next/link";
import {
  footerNavigation,
  siteName,
} from "@/content/navigation";
import { Container } from "@/components/layout/Container";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-foreground/10">
      <Container className="flex flex-col gap-8 py-10">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNavigation.main.map((item) => (
              <li key={`main-${item.href}`}>
                <Link
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Footer links">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {footerNavigation.links.map((item) => (
              <li key={`link-${item.href}-${item.label}`}>
                <Link
                  href={item.href}
                  className="text-foreground/70 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} {siteName}
        </p>
      </Container>
    </footer>
  );
}
