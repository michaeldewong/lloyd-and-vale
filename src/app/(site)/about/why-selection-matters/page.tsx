import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { whySelectionMattersPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: whySelectionMattersPage.title,
  description: whySelectionMattersPage.title,
  path: "/about/why-selection-matters",
});

export default function WhySelectionMattersPage() {
  return <Gate1Subpage page={whySelectionMattersPage} />;
}
