import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { shopControlToolsFamilies, shopControlToolsHero } from "@/content/shopControlTools";
import {
  shopControlToolsChildPages,
  type ShopControlToolsChildSlug,
} from "@/content/gate1CategoryChildPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(shopControlToolsChildPages).map((slug) => ({ slug }));
}

const shopControlToolsDescriptionBySlug = new Map(
  shopControlToolsFamilies.items.map((item) => [
    item.href.split("/").pop() ?? "",
    item.description,
  ]),
);

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = shopControlToolsChildPages[slug as ShopControlToolsChildSlug];
  if (!page) {
    return buildPageMetadata({
      pageName: "Shop Control Tools",
      description: shopControlToolsHero.subheadline,
      path: "/shop/shop-control-tools",
    });
  }

  return buildPageMetadata({
    pageName: page.title,
    description: shopControlToolsDescriptionBySlug.get(slug) ?? page.title,
    path: `/shop/shop-control-tools/${slug}`,
  });
}

export default async function ShopControlToolsChildPage({ params }: PageProps) {
  const { slug } = await params;
  const page = shopControlToolsChildPages[slug as ShopControlToolsChildSlug];

  if (!page) {
    notFound();
  }

  return <Gate1Subpage page={page} />;
}
