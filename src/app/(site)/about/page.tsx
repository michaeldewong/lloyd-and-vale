import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { aboutPage } from "@/content/about";

function AboutSubsectionBlocks() {
  return (
    <ul className="grid gap-(--spacing-content-lg) md:grid-cols-3">
      {aboutPage.subsections.map((block) => (
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

export default function AboutPage() {
  return (
    <div className="w-full">
      <PageHero title={aboutPage.title} eyebrow={aboutPage.eyebrow} />
      <Section spacing="default">
        <AboutSubsectionBlocks />
      </Section>
    </div>
  );
}
