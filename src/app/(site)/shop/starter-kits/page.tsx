import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { starterKitsPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: starterKitsPage.title,
  description:
    "Starter Kits route for Lloyd & Vale Gate 1, covering setup-oriented kit paths for DTF, embroidery, QC, and small shop operations.",
  path: "/shop/starter-kits",
});

export default function StarterKitsPage() {
  return <Gate1Subpage page={starterKitsPage} />;
}
