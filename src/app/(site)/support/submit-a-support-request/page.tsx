import { SubmitSupportRequestForm } from "@/components/forms/SubmitSupportRequestForm";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { submitSupportRequestPage } from "@/content/submitSupportRequest";

export default function SubmitSupportRequestPage() {
  return (
    <div className="w-full">
      <PageHero
        title={submitSupportRequestPage.title}
        eyebrow={submitSupportRequestPage.eyebrow}
      />

      <Section spacing="default">
        <div className="mx-auto max-w-2xl">
          <SubmitSupportRequestForm />
        </div>
      </Section>
    </div>
  );
}
