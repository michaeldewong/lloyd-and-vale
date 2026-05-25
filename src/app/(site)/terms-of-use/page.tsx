import type { Metadata } from "next";
import { PolicyDocumentPage } from "@/components/policy/PolicyDocumentPage";
import { getPolicyDocument } from "@/lib/policies/documents";
import { buildPageMetadata } from "@/lib/seo/metadata";

const termsOfUsePolicy = getPolicyDocument("terms-of-use");

export const metadata: Metadata = buildPageMetadata({
  pageName: termsOfUsePolicy.title,
  description: termsOfUsePolicy.metaDescription,
  path: "/terms-of-use",
});

export default function TermsOfUsePage() {
  return <PolicyDocumentPage policy={termsOfUsePolicy} />;
}
