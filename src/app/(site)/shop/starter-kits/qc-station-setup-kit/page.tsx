import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { qcStationSetupKitPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: qcStationSetupKitPage.title,
  description: qcStationSetupKitPage.title,
  path: "/shop/starter-kits/qc-station-setup-kit",
});

export default function QcStationSetupKitPage() {
  return <Gate1Subpage page={qcStationSetupKitPage} />;
}
