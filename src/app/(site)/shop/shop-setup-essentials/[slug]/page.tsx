import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import {
  shopSetupEssentialsChildPages,
  type ShopSetupEssentialsChildSlug,
} from "@/content/gate1CategoryChildPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(shopSetupEssentialsChildPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page =
    shopSetupEssentialsChildPages[slug as ShopSetupEssentialsChildSlug];
  if (!page) {
    return buildPageMetadata({
      pageName: "Shop Setup Essentials",
      description:
        "Shop Setup Essentials route for Lloyd & Vale Gate 1 with operator-facing setup structure and visual-management category access.",
      path: "/shop/shop-setup-essentials",
    });
  }

  return buildPageMetadata({
    pageName: page.title,
    description: `${page.title} in Lloyd & Vale Shop Setup Essentials for operator-facing Gate 1 route visibility and navigation.`,
    path: `/shop/shop-setup-essentials/${slug}`,
  });
}

export default async function ShopSetupEssentialsChildPage({ params }: PageProps) {
  const { slug } = await params;
  const page =
    shopSetupEssentialsChildPages[slug as ShopSetupEssentialsChildSlug];

  if (!page) {
    notFound();
  }

  return <Gate1Subpage page={page} />;
}
