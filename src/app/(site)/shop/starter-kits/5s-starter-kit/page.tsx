import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { fiveSStarterKitPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: fiveSStarterKitPage.title,
  description:
    "5S Starter Kit route for Lloyd & Vale Gate 1 Starter Kits, preserving a direct navigation path for structured shop-organization setup.",
  path: "/shop/starter-kits/5s-starter-kit",
});

export default function FiveSStarterKitPage() {
  return <Gate1Subpage page={fiveSStarterKitPage} />;
}
