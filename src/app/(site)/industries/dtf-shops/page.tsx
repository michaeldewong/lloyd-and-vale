import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { industriesDtfShopsPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: industriesDtfShopsPage.title,
  description: industriesDtfShopsPage.title,
  path: "/industries/dtf-shops",
});

export default function IndustriesDtfShopsPage() {
  return <Gate1Subpage page={industriesDtfShopsPage} />;
}
