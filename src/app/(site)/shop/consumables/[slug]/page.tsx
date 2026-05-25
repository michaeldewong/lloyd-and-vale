import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import {
  consumablesChildPages,
  type ConsumablesChildSlug,
} from "@/content/gate1CategoryChildPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(consumablesChildPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = consumablesChildPages[slug as ConsumablesChildSlug];
  if (!page) {
    return buildPageMetadata({
      pageName: "Consumables",
      description:
        "Consumables route for Lloyd & Vale Gate 1 covering operator-facing consumables categories and production-sensitive material groups.",
      path: "/shop/consumables",
    });
  }

  return buildPageMetadata({
    pageName: page.title,
    description: `${page.title} in Lloyd & Vale Consumables for operator-facing Gate 1 routing and category visibility.`,
    path: `/shop/consumables/${slug}`,
  });
}

export default async function ConsumablesChildPage({ params }: PageProps) {
  const { slug } = await params;
  const page = consumablesChildPages[slug as ConsumablesChildSlug];

  if (!page) {
    notFound();
  }

  return <Gate1Subpage page={page} />;
}
