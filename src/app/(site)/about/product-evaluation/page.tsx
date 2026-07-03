import type { Metadata } from "next";
import { Gate1Subpage } from "@/components/layout/Gate1Subpage";
import { productEvaluationPage } from "@/content/gate1PlaceholderPages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: productEvaluationPage.title,
  description: productEvaluationPage.title,
  path: "/about/product-evaluation",
});

export default function ProductEvaluationPage() {
  return <Gate1Subpage page={productEvaluationPage} />;
}
