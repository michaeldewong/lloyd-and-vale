import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { industriesPromotionalDecoratorsPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: industriesPromotionalDecoratorsPage.title,
  description: industriesPromotionalDecoratorsPage.title,
  path: "/industries/promotional-decorators",
});

export default function IndustriesPromotionalDecoratorsPage() {
  return <Gate1Subpage page={industriesPromotionalDecoratorsPage} />;
}
