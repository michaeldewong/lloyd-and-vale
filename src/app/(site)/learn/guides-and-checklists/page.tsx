import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { guidesAndChecklistsPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: guidesAndChecklistsPage.title,
  description:
    "Guides & Checklists route for Lloyd & Vale Learn, focused on practical production documentation for setup, quality, and repeatable workflows.",
  path: "/learn/guides-and-checklists",
});

export default function GuidesAndChecklistsPage() {
  return <Gate1Subpage page={guidesAndChecklistsPage} />;
}
