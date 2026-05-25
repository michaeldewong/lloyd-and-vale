import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { coursesAndWorkshopsPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: coursesAndWorkshopsPage.title,
  description:
    "Courses & Workshops route for Lloyd & Vale Learn, covering training-focused paths aligned with operator-facing production practice.",
  path: "/learn/courses-and-workshops",
});

export default function CoursesAndWorkshopsPage() {
  return <Gate1Subpage page={coursesAndWorkshopsPage} />;
}
