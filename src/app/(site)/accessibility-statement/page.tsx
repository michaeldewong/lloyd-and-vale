import type { Metadata } from "next";
import { PolicyDocumentPage } from "@/components/policy/PolicyDocumentPage";
import { getPolicyDocument } from "@/lib/policies/documents";
import { buildPageMetadata } from "@/lib/seo/metadata";

const accessibilityStatementPolicy = getPolicyDocument("accessibility-statement");

export const metadata: Metadata = buildPageMetadata({
  pageName: accessibilityStatementPolicy.title,
  description: accessibilityStatementPolicy.metaDescription,
  path: "/accessibility-statement",
});

export default function AccessibilityStatementPage() {
  return <PolicyDocumentPage policy={accessibilityStatementPolicy} />;
}
