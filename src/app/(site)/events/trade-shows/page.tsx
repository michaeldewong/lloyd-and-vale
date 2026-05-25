import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { tradeShowsPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: tradeShowsPage.title,
  description: tradeShowsPage.title,
  path: "/events/trade-shows",
});

export default function TradeShowsPage() {
  return <Gate1Subpage page={tradeShowsPage} />;
}
