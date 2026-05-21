import { CategoryGrid } from "@/components/layout/CategoryGrid";
import { PageShell } from "@/components/layout/PageShell";
import { shopCategories, shopPageHeader } from "@/content/shop";

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
