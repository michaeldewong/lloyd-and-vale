import { GetAQuoteForm } from "@/components/forms/GetAQuoteForm";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { getAQuotePage } from "@/content/getAQuote";

export default function GetAQuotePage() {
  return (
    <div className="w-full">
      <PageHero
        title={getAQuotePage.title}
        lead={
          <p className="max-w-2xl text-body text-muted">{getAQuotePage.intro}</p>
        }
      />

      <Section spacing="default">
        <div className="mx-auto max-w-2xl">
          <GetAQuoteForm />
        </div>
      </Section>
    </div>
  );
}
