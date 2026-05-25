import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import {
  consumablesGate1Catalog,
  consumablesHero,
  consumablesProductionSensitive,
} from "@/content/consumables";
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

const consumablesDescriptionBySlug = new Map(
  [...consumablesGate1Catalog.items, ...consumablesProductionSensitive.items].map(
    (item) => [item.href.split("/").pop() ?? "", item.description],
  ),
);

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = consumablesChildPages[slug as ConsumablesChildSlug];
  if (!page) {
    return buildPageMetadata({
      pageName: "Consumables",
      description: consumablesHero.subheadline,
      path: "/shop/consumables",
    });
  }

  return buildPageMetadata({
    pageName: page.title,
    description: consumablesDescriptionBySlug.get(slug) ?? page.title,
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
