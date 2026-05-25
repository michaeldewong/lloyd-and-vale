import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { fiveSStarterKitPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: fiveSStarterKitPage.title,
  description: fiveSStarterKitPage.title,
  path: "/shop/starter-kits/5s-starter-kit",
});

export default function FiveSStarterKitPage() {
  return <Gate1Subpage page={fiveSStarterKitPage} />;
}
