import type { Metadata } from "next";
import { CategoryGrid } from "@/components/layout/CategoryGrid";
import { PageShell } from "@/components/layout/PageShell";
import { shopCategories, shopPageHeader } from "@/content/shop";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: shopPageHeader.title,
  description:
    "Browse Lloyd & Vale product categories: equipment, consumables, shop setup essentials, shop control tools, and starter kits for serious small shops.",
  path: "/shop",
});

export default function ShopPage() {
  return (
    <PageShell
      eyebrow={shopPageHeader.eyebrow}
      title={shopPageHeader.title}
    >
      <CategoryGrid
        items={shopCategories.map((category) => ({
          title: category.title,
          description: category.description,
          href: category.href,
          imageLabel: category.image.filename,
          imageDescription: category.image.description,
        }))}
      />
    </PageShell>
  );
}
