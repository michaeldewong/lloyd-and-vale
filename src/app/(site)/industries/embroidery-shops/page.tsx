import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { industriesEmbroideryShopsPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: industriesEmbroideryShopsPage.title,
  description: industriesEmbroideryShopsPage.title,
  path: "/industries/embroidery-shops",
});

export default function IndustriesEmbroideryShopsPage() {
  return <Gate1Subpage page={industriesEmbroideryShopsPage} />;
}
