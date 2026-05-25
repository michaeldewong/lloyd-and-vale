import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { equipmentPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: equipmentPage.title,
  description: equipmentPage.title,
  path: "/shop/equipment",
});

export default function EquipmentPage() {
  return <Gate1Subpage page={equipmentPage} />;
}
