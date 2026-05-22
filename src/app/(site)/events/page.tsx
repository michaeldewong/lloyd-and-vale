import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { eventsPage } from "@/content/events";

function EventsSubsectionBlocks() {
  return (
    <ul className="grid gap-(--spacing-content-lg) sm:grid-cols-2 lg:grid-cols-4">
      {eventsPage.subsections.map((block) => (
        <li key={block.href}>
          <Link
            href={block.href}
            className="group flex h-full min-h-[5.5rem] items-center border border-border bg-surface p-(--spacing-content) transition-colors hover:border-border-strong"
          >
            <h2 className="text-body font-semibold text-foreground group-hover:text-accent">
              {block.title}
            </h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function EventsPage() {
  return (
    <div className="w-full">
      <PageHero title={eventsPage.title} eyebrow={eventsPage.eyebrow} />
      <Section spacing="default">
        <EventsSubsectionBlocks />
      </Section>
    </div>
  );
}
