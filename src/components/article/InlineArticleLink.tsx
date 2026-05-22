import { TextLink } from "@/components/layout/TextLink";
import type { ComponentPropsWithoutRef } from "react";

export function InlineArticleLink(props: ComponentPropsWithoutRef<typeof TextLink>) {
  return <TextLink {...props} />;
}
