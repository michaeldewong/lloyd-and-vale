/**
 * Shop Control Tools category page — Gate 1 Final Calibrated Version.
 * Do not rewrite, reorder sections, or change CTA labels.
 */

export const shopControlToolsHero = {
  eyebrow: "Shop / Shop Control Tools",
  headline: "Tools that make shop production measurable.",
  subheadline:
    "Measuring, alignment, weighing, storage, and QC tools selected for small shops that need repeatability and control. Where Shop Setup Essentials makes a workspace visibly structured, Shop Control Tools make the work itself measurable, repeatable, and trainable.",
  primaryCta: {
    label: "Browse by Family",
    href: "/shop/shop-control-tools#families",
  },
  secondaryCta: {
    label: "Get a Quote",
    href: "/get-a-quote",
  },
  image: {
    filename: "shop-control-tools-hero.jpg",
    description:
      "a working close-up. An operator using an alignment ruler on a heat press, or a scale being used to dose DTF powder, or a parts drawer organized at a workbench with labeled compartments. The image should communicate “this is precision work in a real shop,” not catalog product imagery. Natural lighting, muted palette, hands visible but operator anonymized.",
  },
} as const;

export const shopControlToolsWhy = {
  title: "Why Shop Control Tools is its own category",
  paragraphs: [
    "A production shop becomes controllable when the work can be measured. Print alignment can be verified. Powder dosing can be repeated. Finished transfers can be weighed before shipping. Components can be located, counted, and inspected against a defined reference. Without these tools, output quality rests on operator memory and improvisation. With the right tools, the same job can run the same way on Monday morning and Friday afternoon. It can also be taught to the operator who started last week.",
    "Most small-shop suppliers don’t organize this category coherently. Measuring tools end up in industrial supply catalogs. Storage bins end up in office supply catalogs. Heat press aids end up scattered across decoration suppliers. The individual items may look ordinary; the operational logic that connects them is not.",
    "Lloyd & Vale treats Shop Control Tools as the physical infrastructure of production control. Each family in the category serves a defined operational function — measurement, alignment, weighing, storage, organization, inspection, or pressing support. The category is selected for small shops that need their work to be repeatable across operators and trainable for new hires.",
  ],
  image: {
    filename: "shop-control-tools-workbench.jpg",
    description:
      "a supporting image showing a workbench with multiple Shop Control Tools in use together. Measuring rulers, a scale, a parts drawer, alignment guides — arranged as they would be in an actual working setup rather than displayed for photography. The image’s argument is that these tools work together as infrastructure, not as individual purchases.",
  },
} as const;

export const shopControlToolsFamilies = {
  title: "The eight families",
  anchorId: "families",
  intro:
    "The category is organized around eight families of tools, each serving a defined operational function. Together they form the physical infrastructure of a controllable production shop.",
  items: [
    {
      title: "Measuring Tools",
      description:
        "Steel rulers, precision rulers, T-shirt placement rulers, garment alignment rulers, calipers, and tape measures. The function is dimensional consistency at the point of production — where a print goes on a shirt, where a patch sits on a sleeve, what size component fits a configuration.",
      href: "/shop/shop-control-tools/measuring-tools",
      image: {
        filename: "family-measuring-tools.jpg",
        description:
          "measurement happening (ruler in use on garment, caliper being read)",
      },
    },
    {
      title: "Alignment Tools",
      description:
        "Heat press alignment guides, placement grids, centerline tools, hooping guides, and laser alignment aids. The function is reducing operator-to-operator variation in product positioning. The same placement, run by any trained operator, on any shift.",
      href: "/shop/shop-control-tools/alignment-tools",
      image: {
        filename: "family-alignment-tools.jpg",
        description: "alignment guide in use at a heat press or hooping station",
      },
    },
    {
      title: "Weighing and Scales",
      description:
        "Bench scales for powder and ink dosing, parcel scales for shipping, and small-counting scales for component packing. The function is dosing precision and shipping accuracy. A DTF shop that doses powder by feel is more likely to see variation; a shop that doses by weight has a defined reference point.",
      href: "/shop/shop-control-tools/weighing-and-scales",
      image: {
        filename: "family-weighing-scales.jpg",
        description:
          "bench scale dosing powder, or parcel scale at packing station",
      },
    },
    {
      title: "Storage and Bins",
      description:
        "Stackable bins, modular storage systems, dividers, and component containers selected for shop environments rather than office use. The function is a defined location for every consumable, component, and work-in-progress item. Things have homes.",
      href: "/shop/shop-control-tools/storage-and-bins",
      image: {
        filename: "family-storage-bins.jpg",
        description: "labeled storage bins in working shop context",
      },
    },
    {
      title: "Job Trays",
      description:
        "Order trays, work-in-progress trays, and completed-job trays, color-coded by stage. The function is that orders never sit on flat surfaces without identity. A job in progress is always identifiable, always traceable, always staged.",
      href: "/shop/shop-control-tools/job-trays",
      image: {
        filename: "family-job-trays.jpg",
        description: "color-coded job trays at a station with active orders",
      },
    },
    {
      title: "Parts Drawers",
      description:
        "Modular drawer systems for small parts, replacement components, tools, fasteners, and consumable accessories. The function is that every recurring small item has a defined home. Recurring small items belong in defined, labeled locations.",
      href: "/shop/shop-control-tools/parts-drawers",
      image: {
        filename: "family-parts-drawers.jpg",
        description: "parts drawer open, organized small parts visible",
      },
    },
    {
      title: "QC Tools",
      description:
        "Color reference cards, inspection light sources, thickness gauges, temperature strips, and basic measurement aids. The function is consistent inspection criteria. A QC station with defined references produces consistent judgments; a QC station without them produces operator-dependent judgments.",
      href: "/shop/shop-control-tools/qc-tools",
      image: {
        filename: "family-qc-tools.jpg",
        description:
          "color reference card or thickness gauge in use at a QC station",
      },
    },
    {
      title: "Heat Press Aids",
      description:
        "Heat press pillows, lower platens of common sizes, Teflon sheets, alignment-specific rulers, and threading guides. The function is setup speed and pressing consistency. The same press setup, run the same way, with the right supporting tools at hand.",
      href: "/shop/shop-control-tools/heat-press-aids",
      image: {
        filename: "family-heat-press-aids.jpg",
        description: "heat press pillow or Teflon sheet in use at a press",
      },
    },
  ],
} as const;

export const shopControlToolsSelection = {
  title: "How Shop Control Tools are selected",
  paragraphs: [
    "Shop Control Tools are selected for working production conditions, not showroom, laboratory, or office conditions. A bench scale needs to remain accurate after months of use in a shop where the table moves and the temperature varies. A parts drawer needs to remain operational after thousands of cycles in a high-frequency station. A heat press ruler needs to read clearly under shop lighting and survive contact with hot platens.",
    "We evaluate items in this category against three operational criteria: accuracy and repeatability under shop conditions, durability across reasonable usage cycles, and clarity of use for operators who didn’t make the purchasing decision. Items that meet the criteria are listed. Items that fail any of the three are not.",
    "The category is reviewed against the same operating standards used across the catalog. Where a tool’s performance drifts — through manufacturer changes, batch inconsistency, or field-reported failures — the listing is replaced or removed.",
  ],
  inlineLink: {
    label: "Read our Selection Standards →",
    href: "/about/selection-standards",
  },
  image: {
    filename: "shop-control-tools-selection.jpg",
    description:
      "a close-up image of a Shop Control Tool in use after evident shop wear. A measuring ruler with the patina of use, a parts drawer that’s been opened thousands of times, or a scale on a working bench. The argument is that these items perform under real conditions, not in pristine display.",
  },
} as const;

export const shopControlToolsGetStarted = {
  title: "How to get started",
  paragraphs: [
    "For shops setting up a station from scratch, the practical starting point is to identify the family relevant to the operation — measuring and alignment for any decoration shop, weighing for DTF and shipping, parts drawers and storage for any shop running real volume. The family-level pages cover what fits each function and how the items work together.",
    "For shops adding control to an existing operation, the practical starting point is to identify where output variation is highest. A shop with inconsistent print placement needs measuring and alignment tools. A shop with shipping errors needs parcel scales and a defined packing station. A shop with QC drift needs QC tools and a structured inspection station.",
    "For shops with specific operational requirements — high-volume custom decoration, multi-line fulfillment, contract production with documented tolerances — Get a Quote and we’ll work through what’s needed.",
  ],
  primaryCta: {
    label: "Browse by Family",
    href: "/shop/shop-control-tools#families",
  },
  secondaryCta: {
    label: "Get a Quote",
    href: "/get-a-quote",
  },
} as const;

export const shopControlToolsRelated = {
  title: "Related categories",
  intro:
    "Shop Control Tools works alongside two related categories that complete the operating-infrastructure picture.",
  items: [
    {
      title: "Shop Setup Essentials",
      description:
        "Floor marking, zone labels, workflow signs, SOP boards, and visual-management kits. Where Shop Control Tools make the work measurable, Shop Setup Essentials make the workspace visibly structured. The two categories work together: a shop with measuring tools and no zone labels still produces order mix-ups; a shop with zone labels and no measuring tools still produces inconsistent output.",
      href: "/shop/shop-setup-essentials",
      image: {
        filename: "related-shop-setup-essentials.jpg",
        description:
          "representative image drawn from the Shop Setup Essentials category-anchor library",
      },
    },
    {
      title: "Guides & Checklists",
      description:
        "Practical PDF documentation built from production work. Several of the launch guides address topics directly relevant to Shop Control Tools — QC station setup, heat press evaluation, and consumables storage standards.",
      href: "/learn/guides-and-checklists",
      image: {
        filename: "related-guides-checklists.jpg",
        description: "representative image of a guide or checklist in working use",
      },
    },
  ],
} as const;

export const shopControlToolsFinalCta = {
  title: "Make the work measurable.",
  copy: "Browse Shop Control Tools by family, or identify the family that addresses where output variation is highest in your shop. For non-standard configurations or specific operational requirements, Get a Quote and we’ll respond within one business day.",
  primaryCta: {
    label: "Browse by Family",
    href: "/shop/shop-control-tools#families",
  },
  secondaryCta: {
    label: "Get a Quote",
    href: "/get-a-quote",
  },
  image: {
    filename: "final-cta-background.jpg",
    description:
      "a subtle background treatment with text overlaid at higher contrast, or a flat color background if the photography library doesn’t yet include a suitable image. The CTA section should feel resolved and confident, not visually busy. Same visual logic as the home page and Shop Setup Essentials final CTAs.",
  },
} as const;
