import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { contactPage } from "@/content/contact";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: contactPage.title,
  description:
    "Contact Lloyd & Vale by email at support@lloydvale.com. Operational responses are handled within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="w-full">
      <PageHero title={contactPage.title} eyebrow={contactPage.eyebrow} />

      <Section spacing="default">
        <div className="mx-auto max-w-3xl space-y-(--spacing-stack-md)">
          <p className="text-body">
            <a
              href={`mailto:${contactPage.email}`}
              className="font-medium text-foreground underline decoration-border-strong underline-offset-4 transition-colors hover:text-accent"
            >
              {contactPage.email}
            </a>
          </p>
          <p className="text-body text-muted">{contactPage.responseStandard}</p>
        </div>
      </Section>
    </div>
  );
}
