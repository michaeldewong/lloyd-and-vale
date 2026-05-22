/**
 * Learn landing page — Gate 1 clean placeholder / routing layer.
 * No locked hero marketing copy. Sub-section block copy from home Section 6 where specified.
 */

export const learnPage = {
  eyebrow: "Learn",
  title: "Learn",
  intro:
    "We publish what we know from real production work — operator-to-operator notes, field observations, sourcing and qualification documentation, and practical guides built from problems we’ve actually worked through. The Learn section is part of how Lloyd & Vale operates, not a content channel separate from the business.",
  subsections: [
    {
      title: "Operator Notes",
      description:
        "First-person notes from real production work — workflow changes, evaluation outcomes, operational decisions, and what didn’t work alongside what did.",
      featuredLabel:
        "Currently featured: Reducing DTF Reprints: A Workflow-Layout Case →",
      featuredHref: "/learn/reducing-dtf-reprints-workflow-layout-case",
      href: "/learn/operator-notes",
      image: {
        filename: "learn-operator-notes-thumb.jpg",
        description:
          "thumbnail from Operator Note #1 (the layout diagram or shop wide shot)",
      },
    },
    {
      title: "Field Reports",
      description:
        "Observation-based reports from trade shows, supplier visits, and shop-floor visits. Documented conditions of observation; conclusions framed as observations rather than pronouncements.",
      footerLine:
        "Upcoming: Trade show observations and supplier qualification visits.",
      href: "/learn/field-reports",
      image: {
        filename: "learn-field-reports-thumb.jpg",
        description:
          "neutral image (notebook on shop bench, labeled inspection station, or workflow diagram on paper)",
      },
    },
    {
      title: "Guides & Checklists",
      description:
        "Practical PDF documentation built from production work — setup walkthroughs, evaluation checklists, and operating standards for small shops.",
      footerLine:
        "Launch guides: DTF Shop Setup Walkthrough, Building a QC Station, and 5S for Small Production Shops.",
      href: "/learn/guides-and-checklists",
      image: {
        filename: "learn-guides-checklists-thumb.jpg",
        description:
          "thumbnail from one of the launch guides (DTF Shop Setup Walkthrough, Building a QC Station, or 5S for Small Production Shops cover or interior page)",
      },
    },
    {
      title: "Courses & Workshops",
      href: "/learn/courses-and-workshops",
      image: {
        filename: "learn-courses-workshops-thumb.jpg",
        description:
          "neutral image consistent with the Gate 1 photography brief, given no content is yet published",
      },
    },
  ],
} as const;
