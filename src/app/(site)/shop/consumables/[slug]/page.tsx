import { notFound } from "next/navigation";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import {
  consumablesChildPages,
  type ConsumablesChildSlug,
} from "@/content/gate1CategoryChildPages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(consumablesChildPages).map((slug) => ({ slug }));
}

export default async function ConsumablesChildPage({ params }: PageProps) {
  const { slug } = await params;
  const page = consumablesChildPages[slug as ConsumablesChildSlug];

  if (!page) {
    notFound();
  }

  return <Gate1Subpage page={page} />;
}
