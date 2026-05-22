import { notFound } from "next/navigation";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import {
  shopSetupEssentialsChildPages,
  type ShopSetupEssentialsChildSlug,
} from "@/content/gate1CategoryChildPages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(shopSetupEssentialsChildPages).map((slug) => ({ slug }));
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
