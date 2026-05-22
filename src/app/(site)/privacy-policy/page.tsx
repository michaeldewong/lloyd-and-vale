import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { privacyPolicyPage } from "@/content/privacyPolicy";

export default function PrivacyPolicyPage() {
  const page = privacyPolicyPage;

  return (
    <div className="w-full">
      <PageHero title={page.title} />

      <Section spacing="default">
        <div className="mx-auto max-w-3xl space-y-(--spacing-stack-xl)">
          <p className="text-body text-muted">{page.description}</p>
          <p className="text-body text-muted">{page.contactSentence}</p>
          <div>
            <ButtonLink href={page.contactCta.href} variant="primary" size="md">
              {page.contactCta.label}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </div>
  );
}
