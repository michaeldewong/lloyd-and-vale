import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { fieldReportsPage } from "@/content/gate1PlaceholderPages";
import { learnPage } from "@/content/learn";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: fieldReportsPage.title,
  description: learnPage.subsections[1].description,
  path: "/learn/field-reports",
});

export default function FieldReportsPage() {
  return <Gate1Subpage page={fieldReportsPage} />;
}
