import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = shopControlToolsChildPages[slug as ShopControlToolsChildSlug];
  if (!page) {
    return buildPageMetadata({
      pageName: "Shop Control Tools",
      description:
        "Shop Control Tools route for Lloyd & Vale Gate 1, focused on operator-facing production measurement and control categories.",
      path: "/shop/shop-control-tools",
    });
  }

  return buildPageMetadata({
    pageName: page.title,
    description: `${page.title} in Lloyd & Vale Shop Control Tools for operator-facing Gate 1 navigation and route coverage.`,
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
