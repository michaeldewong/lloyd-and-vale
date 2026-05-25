import type { Metadata } from "next";
import { SubmitSupportRequestForm } from "@/components/forms/SubmitSupportRequestForm";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { submitSupportRequestPage } from "@/content/submitSupportRequest";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: submitSupportRequestPage.title,
  description:
    "Submit a structured support request with issue context, product details, and preferred contact method for Lloyd & Vale technical support.",
  path: "/support/submit-a-support-request",
});

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
