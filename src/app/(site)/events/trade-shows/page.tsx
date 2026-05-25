import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { tradeShowsPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: tradeShowsPage.title,
  description:
    "Trade Shows route within Lloyd & Vale Events, providing a clean Gate 1 page path for event-linked operator and sourcing contexts.",
  path: "/events/trade-shows",
});

export default function TradeShowsPage() {
  return <Gate1Subpage page={tradeShowsPage} />;
}
