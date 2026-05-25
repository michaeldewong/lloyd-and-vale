import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { openHousesPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: openHousesPage.title,
  description: openHousesPage.title,
  path: "/events/open-houses",
});

export default function OpenHousesPage() {
  return <Gate1Subpage page={openHousesPage} />;
}
