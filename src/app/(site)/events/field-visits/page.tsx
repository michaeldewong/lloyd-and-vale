import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { fieldVisitsPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: fieldVisitsPage.title,
  description: fieldVisitsPage.title,
  path: "/events/field-visits",
});

export default function FieldVisitsPage() {
  return <Gate1Subpage page={fieldVisitsPage} />;
}
