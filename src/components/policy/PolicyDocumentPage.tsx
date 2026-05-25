import type { ReactNode } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import type { PolicyDocument } from "@/lib/policies/documents";

function renderInlineMarkdown(text: string, keyPrefix: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const boldPattern = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null = boldPattern.exec(text);
  let partIndex = 0;

  while (match) {
    if (match.index > lastIndex) {
      parts.push(
        <span key={`${keyPrefix}-text-${partIndex++}`}>
          {text.slice(lastIndex, match.index)}
        </span>,
      );
    }
    parts.push(<strong key={`${keyPrefix}-bold-${partIndex++}`}>{match[1]}</strong>);
    lastIndex = match.index + match[0].length;
    match = boldPattern.exec(text);
  }

  if (lastIndex < text.length) {
    parts.push(
      <span key={`${keyPrefix}-text-${partIndex++}`}>{text.slice(lastIndex)}</span>,
    );
  }

  return parts;
}

function renderPolicyMarkdown(markdownBody: string): ReactNode[] {
  const lines = markdownBody.split(/\r?\n/);
  const nodes: ReactNode[] = [];
  let paragraphBuffer: string[] = [];
  let listBuffer: string[] = [];

  const flushParagraph = () => {
    if (!paragraphBuffer.length) return;
    const text = paragraphBuffer.join(" ").replace(/\s+/g, " ").trim();
    paragraphBuffer = [];
    if (!text) return;
    const index = nodes.length;
    nodes.push(
      <p key={`p-${index}`} className="text-body text-muted">
        {renderInlineMarkdown(text, `p-${index}`)}
      </p>,
    );
  };

  const flushList = () => {
    if (!listBuffer.length) return;
    const index = nodes.length;
    nodes.push(
      <ul key={`ul-${index}`} className="list-disc space-y-2 pl-6 text-body text-muted">
        {listBuffer.map((item, itemIndex) => (
          <li key={`li-${index}-${itemIndex}`}>
            {renderInlineMarkdown(item, `li-${index}-${itemIndex}`)}
          </li>
        ))}
      </ul>,
    );
    listBuffer = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    const headingMatch = /^(#{1,6})\s+(.+)$/.exec(trimmed);
    if (headingMatch) {
      flushParagraph();
      flushList();

      const level = headingMatch[1].length;
      const headingText = headingMatch[2].trim();
      const key = `h-${nodes.length}`;

      if (level === 1) {
        nodes.push(
          <h1 key={key} className="text-heading-2 font-semibold tracking-tight text-foreground">
            {headingText}
          </h1>,
        );
      } else if (level === 2) {
        nodes.push(
          <h2 key={key} className="pt-2 text-heading-4 font-semibold tracking-tight text-foreground">
            {headingText}
          </h2>,
        );
      } else {
        nodes.push(
          <h3 key={key} className="pt-2 text-heading-5 font-semibold tracking-tight text-foreground">
            {headingText}
          </h3>,
        );
      }
      continue;
    }

    const listItemMatch = /^-\s+(.+)$/.exec(trimmed);
    if (listItemMatch) {
      flushParagraph();
      listBuffer.push(listItemMatch[1].trim());
      continue;
    }

    if (listBuffer.length && /^\s{2,}\S+/.test(line)) {
      const continuation = line.trim();
      const lastItemIndex = listBuffer.length - 1;
      listBuffer[lastItemIndex] = `${listBuffer[lastItemIndex]} ${continuation}`.trim();
      continue;
    }

    flushList();
    paragraphBuffer.push(trimmed);
  }

  flushParagraph();
  flushList();

  return nodes;
}

function formatLastUpdated(isoDate: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00.000Z`));
}

export function PolicyDocumentPage({ policy }: { policy: PolicyDocument }) {
  return (
    <div className="w-full">
      <PageHero title={policy.title} />

      <Section spacing="default">
        <div className="mx-auto max-w-3xl space-y-(--spacing-stack-xl)">
          <p className="text-caption text-muted-subtle">
            Last Updated: {formatLastUpdated(policy.lastUpdated)}
          </p>
          <article className="space-y-(--spacing-stack-lg)">{renderPolicyMarkdown(policy.markdownBody)}</article>
        </div>
      </Section>
    </div>
  );
}
