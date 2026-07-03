import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { supplierNotesPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: supplierNotesPage.title,
  description: supplierNotesPage.title,
  path: "/learn/supplier-notes",
});

export default function SupplierNotesPage() {
  return <Gate1Subpage page={supplierNotesPage} />;
}
