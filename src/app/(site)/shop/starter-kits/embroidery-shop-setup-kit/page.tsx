import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { embroideryShopSetupKitPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: embroideryShopSetupKitPage.title,
  description: embroideryShopSetupKitPage.title,
  path: "/shop/starter-kits/embroidery-shop-setup-kit",
});

export default function EmbroideryShopSetupKitPage() {
  return <Gate1Subpage page={embroideryShopSetupKitPage} />;
}
