import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { dtfShopSetupKitPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: dtfShopSetupKitPage.title,
  description:
    "DTF Shop Setup Kit route for Lloyd & Vale Gate 1 Starter Kits, maintaining a clear path for structured kit-level specification inquiries.",
  path: "/shop/starter-kits/dtf-shop-setup-kit",
});

export default function DtfShopSetupKitPage() {
  return <Gate1Subpage page={dtfShopSetupKitPage} />;
}
