import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import {
  shopSetupEssentialsHero,
  shopSetupEssentialsSubcategories,
} from "@/content/shopSetupEssentials";
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

const shopSetupDescriptionBySlug = new Map(
  shopSetupEssentialsSubcategories.items
    .filter((item) => item.href.startsWith("/shop/shop-setup-essentials/"))
    .map((item) => [item.href.split("/").pop() ?? "", item.description]),
);

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page =
    shopSetupEssentialsChildPages[slug as ShopSetupEssentialsChildSlug];
  if (!page) {
    return buildPageMetadata({
      pageName: "Shop Setup Essentials",
      description: shopSetupEssentialsHero.subheadline,
      path: "/shop/shop-setup-essentials",
    });
  }

  return buildPageMetadata({
    pageName: page.title,
    description: shopSetupDescriptionBySlug.get(slug) ?? page.title,
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
