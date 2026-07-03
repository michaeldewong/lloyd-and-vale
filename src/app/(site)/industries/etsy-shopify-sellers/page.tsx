import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { industriesEtsyShopifySellersPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: industriesEtsyShopifySellersPage.title,
  description: industriesEtsyShopifySellersPage.title,
  path: "/industries/etsy-shopify-sellers",
});

export default function IndustriesEtsyShopifySellersPage() {
  return <Gate1Subpage page={industriesEtsyShopifySellersPage} />;
}
