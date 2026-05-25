import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { roundtablesAndSummitsPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: roundtablesAndSummitsPage.title,
  description:
    "Roundtables & Summits route within Lloyd & Vale Events, keeping the Gate 1 event index factual, restrained, and route-complete.",
  path: "/events/roundtables-and-summits",
});

export default function RoundtablesAndSummitsPage() {
  return <Gate1Subpage page={roundtablesAndSummitsPage} />;
}
