import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { etsyShopifyProductionKitPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: etsyShopifyProductionKitPage.title,
  description: etsyShopifyProductionKitPage.title,
  path: "/shop/starter-kits/etsy-shopify-production-kit",
});

export default function EtsyShopifyProductionKitPage() {
  return <Gate1Subpage page={etsyShopifyProductionKitPage} />;
}
