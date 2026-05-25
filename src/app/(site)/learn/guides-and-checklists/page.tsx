import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { guidesAndChecklistsPage } from "@/content/gate1PlaceholderPages";
import { learnPage } from "@/content/learn";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: guidesAndChecklistsPage.title,
  description: learnPage.subsections[2].description,
  path: "/learn/guides-and-checklists",
});

export default function GuidesAndChecklistsPage() {
  return <Gate1Subpage page={guidesAndChecklistsPage} />;
}
