import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { qcStationSetupKitPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: qcStationSetupKitPage.title,
  description:
    "QC Station Setup Kit route for Lloyd & Vale Gate 1 Starter Kits, focused on practical quality-control station setup navigation.",
  path: "/shop/starter-kits/qc-station-setup-kit",
});

export default function QcStationSetupKitPage() {
  return <Gate1Subpage page={qcStationSetupKitPage} />;
}
