import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { whoWeServePage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: whoWeServePage.title,
  description:
    "Who Lloyd & Vale serves across small production shops, decorators, and operators. Gate 1 page structure with core route visibility.",
  path: "/about/who-we-serve",
});

export default function WhoWeServePage() {
  return <Gate1Subpage page={whoWeServePage} />;
}
