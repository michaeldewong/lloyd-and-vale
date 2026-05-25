import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { fieldReportsPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: fieldReportsPage.title,
  description:
    "Field Reports route for Lloyd & Vale Learn. Operator-facing page for observation-based reporting tied to production and sourcing work.",
  path: "/learn/field-reports",
});

export default function FieldReportsPage() {
  return <Gate1Subpage page={fieldReportsPage} />;
}
