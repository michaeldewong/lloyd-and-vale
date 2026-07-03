import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { blogPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: blogPage.title,
  description: blogPage.title,
  path: "/learn/blog",
});

export default function LearnBlogPage() {
  return <Gate1Subpage page={blogPage} />;
}
