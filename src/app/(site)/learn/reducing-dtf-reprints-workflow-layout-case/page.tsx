import type { Metadata } from "next";
import { ArticleHero } from "@/components/article/ArticleHero";
import { ArticleLayout } from "@/components/article/ArticleLayout";
import { ArticleSection } from "@/components/article/ArticleSection";
import { ArticleVisual } from "@/components/article/ArticleVisual";
import { CaseNote } from "@/components/article/CaseNote";
import { InlineArticleLink } from "@/components/article/InlineArticleLink";
import { Container } from "@/components/layout/Container";
import { operatorNote1 } from "@/content/operatorNoteReducingDtfReprints";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  pageName: operatorNote1.title,
  description: operatorNote1.deck,
  path: "/learn/reducing-dtf-reprints-workflow-layout-case",
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

function BoldLeadItem({ lead, body }: { lead: string; body: string }) {
  return (
    <p className="text-body text-muted">
      <strong className="font-semibold text-foreground">{lead}</strong> {body}
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
            <InlineArticleLink key={`${part.href}-${index}`} href={part.href}>
              {part.label}
            </InlineArticleLink>
          );
        }
        return <span key={index}>{part.value}</span>;
      })}
    </p>
  );
}

export default function OperatorNoteReducingDtfReprintsPage() {
  const note = operatorNote1;

  return (
    <ArticleLayout>
      <ArticleHero
        eyebrow={note.eyebrow}
        title={note.title}
        deck={note.deck}
        heroImage={note.heroImage}
      />

      <Container narrow className="space-y-(--spacing-section) py-(--spacing-section)">
        {/* Section 2 */}
        <ArticleSection id="the-problem" title={note.problem.title}>
          <ProseParagraphs paragraphs={note.problem.paragraphs} />
        </ArticleSection>

        {/* Section 3 */}
        <ArticleSection id="baseline-condition" title={note.baseline.title}>
          <ProseParagraphs paragraphs={note.baseline.paragraphs} />
        </ArticleSection>

        {/* Section 4 */}
        <ArticleSection id="what-we-observed" title={note.observed.title}>
          <ProseParagraphs paragraphs={note.observed.paragraphs} />
        </ArticleSection>

        {/* Section 5 */}
        <ArticleSection id="root-causes" title={note.rootCauses.title}>
          <p className="text-body text-muted">{note.rootCauses.intro}</p>
          {note.rootCauses.causes.map((cause) => (
            <BoldLeadItem key={cause.lead} lead={cause.lead} body={cause.body} />
          ))}
          <p className="text-body text-muted">{note.rootCauses.closing}</p>
        </ArticleSection>

        {/* Section 6 */}
        <ArticleSection id="layout-changes" title={note.layoutChanges.title}>
          <div className="-mx-5 grid gap-(--spacing-content-lg) sm:mx-0 lg:grid-cols-2">
            <ArticleVisual
              filename={note.baseline.layoutDiagram.filename}
              description={note.baseline.layoutDiagram.description}
              breakout
              aspectRatio="4/3"
            />
            <ArticleVisual
              filename={note.layoutChanges.postChangeDiagram.filename}
              description={note.layoutChanges.postChangeDiagram.description}
              breakout
              aspectRatio="4/3"
            />
          </div>
          <ProseParagraphs paragraphs={note.layoutChanges.paragraphs.slice(0, 3)} />
          <ArticleVisual
            filename={note.layoutChanges.floorMarkingImage.filename}
            description={note.layoutChanges.floorMarkingImage.description}
          />
          <p className="text-body text-muted">{note.layoutChanges.paragraphs[3]}</p>
          <p className="text-body text-muted">{note.layoutChanges.paragraphs[4]}</p>
        </ArticleSection>

        {/* Section 7 */}
        <ArticleSection
          id="labeling-and-station-discipline"
          title={note.labelingDiscipline.title}
        >
          <p className="text-body text-muted">{note.labelingDiscipline.intro}</p>
          <p className="text-body text-muted">{note.labelingDiscipline.introSecondary}</p>
          {note.labelingDiscipline.changes.map((change) => (
            <div key={change.lead} className="space-y-(--spacing-stack-md)">
              <BoldLeadItem lead={change.lead} body={change.body} />
              {"image" in change && change.image ? (
                <ArticleVisual
                  filename={change.image.filename}
                  description={change.image.description}
                />
              ) : null}
            </div>
          ))}
          <p className="text-body text-muted">{note.labelingDiscipline.closing}</p>
        </ArticleSection>

        {/* Section 8 */}
        <ArticleSection id="measurement-method" title={note.measurement.title}>
          <ProseParagraphs paragraphs={note.measurement.paragraphs} />
          <ArticleVisual
            filename={note.measurement.reprintLogImage.filename}
            description={note.measurement.reprintLogImage.description}
          />
        </ArticleSection>

        {/* Section 9 */}
        <ArticleSection id="results" title={note.results.title}>
          <ProseParagraphs paragraphs={note.results.paragraphs} />
          <ArticleVisual
            filename={note.results.resultsChart.filename}
            description={note.results.resultsChart.description}
            caption={note.results.resultsChart.caption}
            aspectRatio="16/9"
          />
        </ArticleSection>

        {/* Section 10 */}
        <ArticleSection id="what-did-not-work" title={note.whatDidNotWork.title}>
          <ProseParagraphs paragraphs={note.whatDidNotWork.paragraphs} />
        </ArticleSection>

        {/* Section 11 */}
        <ArticleSection id="what-we-would-repeat" title={note.whatWeWouldRepeat.title}>
          <ProseParagraphs paragraphs={note.whatWeWouldRepeat.paragraphs} />
        </ArticleSection>

        {/* Section 12 */}
        <CaseNote title={note.caseNote.title}>
          <p>{note.caseNote.body}</p>
        </CaseNote>

        {/* Section 13 */}
        <ArticleSection id="related-categories" title={note.relatedCategories.title}>
          <p className="text-body text-muted">{note.relatedCategories.intro}</p>
          <ul className="list-none space-y-(--spacing-stack-md)">
            {note.relatedCategories.items.map((item) => (
              <li key={item.name} className="text-body text-muted">
                <InlineArticleLink href={item.href} className="font-semibold">
                  {item.name}
                </InlineArticleLink>
                {" — "}
                {item.description}
              </li>
            ))}
          </ul>
        </ArticleSection>

        {/* Section 14 */}
        <ArticleSection id="similar-pattern" title={note.similarPattern.title}>
          {note.similarPattern.paragraphs.map((paragraph, index) => (
            <InlineProse key={index} parts={paragraph.parts} />
          ))}
        </ArticleSection>

        {/* Section 15 — Signature */}
        <footer className="border-t border-border pt-(--spacing-stack-xl)">
          <p className="text-right text-body text-muted italic">{note.signature}</p>
        </footer>
      </Container>
    </ArticleLayout>
  );
}
