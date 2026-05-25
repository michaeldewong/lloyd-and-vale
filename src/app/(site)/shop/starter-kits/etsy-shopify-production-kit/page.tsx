import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { etsyShopifyProductionKitPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: etsyShopifyProductionKitPage.title,
  description:
    "Etsy / Shopify Production Kit route for Lloyd & Vale Gate 1 Starter Kits, preserving a clean path for small-shop production setup requests.",
  path: "/shop/starter-kits/etsy-shopify-production-kit",
});

export default function EtsyShopifyProductionKitPage() {
  return <Gate1Subpage page={etsyShopifyProductionKitPage} />;
}
