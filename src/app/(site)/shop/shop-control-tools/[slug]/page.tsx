import { notFound } from "next/navigation";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import {
  shopControlToolsChildPages,
  type ShopControlToolsChildSlug,
} from "@/content/gate1CategoryChildPages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(shopControlToolsChildPages).map((slug) => ({ slug }));
}

export default async function ShopControlToolsChildPage({ params }: PageProps) {
  const { slug } = await params;
  const page = shopControlToolsChildPages[slug as ShopControlToolsChildSlug];

  if (!page) {
    notFound();
  }

  return <Gate1Subpage page={page} />;
}
