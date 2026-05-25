import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { TextLink } from "@/components/layout/TextLink";
import { Container } from "@/components/layout/Container";
import { whatLloydAndValeDoes } from "@/content/whatLloydAndValeDoes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: whatLloydAndValeDoes.title,
  description: whatLloydAndValeDoes.subheadline,
  path: "/about/what-lloyd-and-vale-does",
});

function ProseParagraphs({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-body text-muted">
          {paragraph}
        </p>
      ))}
    </>
  );
}

function ItalicLabelParagraph({
  label,
  body,
}: {
  label: string;
  body: string;
}) {
  return (
    <p className="text-body text-muted">
      <em className="italic text-foreground">{label}</em> {body}
    </p>
  );
}

function InlineProse({
  parts,
}: {
  parts: readonly {
    type: "text" | "link";
    value?: string;
    label?: string;
    href?: string;
  }[];
}) {
  return (
    <p className="text-body text-muted">
      {parts.map((part, index) => {
        if (part.type === "link" && part.label && part.href) {
          return (
            <TextLink key={`${part.href}-${index}`} href={part.href}>
              {part.label}
            </TextLink>
          );
        }
        return <span key={index}>{part.value}</span>;
      })}
    </p>
  );
}

export default function WhatLloydAndValeDoesPage() {
  const page = whatLloydAndValeDoes;

  return (
    <div className="w-full">
      <PageHero
        title={page.title}
        eyebrow={page.eyebrow}
        lead={
          <div className="max-w-2xl space-y-(--spacing-stack-md)">
            <p className="text-body text-muted italic">{page.subheadline}</p>
            <ProseParagraphs paragraphs={page.opening} />
          </div>
        }
      />

      <Container narrow className="space-y-(--spacing-section) py-(--spacing-section)">
        <SectionBlock title={page.supply.title} intro={page.supply.intro} id="what-we-supply">
          <div className="space-y-(--spacing-stack-md)">
            {page.supply.categories.map((category) => (
              <ItalicLabelParagraph
                key={category.label}
                label={category.label}
                body={category.body}
              />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          title={page.support.title}
          intro={page.support.intro}
          id="what-we-support"
        >
          <div className="space-y-(--spacing-stack-md)">
            {page.support.layers.map((layer) => (
              <ItalicLabelParagraph key={layer.label} label={layer.label} body={layer.body} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock title={page.whoWeServe.title} id="who-we-serve">
          <ProseParagraphs paragraphs={page.whoWeServe.paragraphs} />
        </SectionBlock>

        <SectionBlock title={page.howWeOperate.title} id="how-we-operate">
          <div className="space-y-(--spacing-stack-md)">
            <ProseParagraphs paragraphs={page.howWeOperate.paragraphs} />
            <InlineProse parts={page.howWeOperate.closingParts} />
          </div>
        </SectionBlock>
      </Container>
    </div>
  );
}
