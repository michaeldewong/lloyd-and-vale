/**
 * Consumables category page — Gate 1 Final Calibrated Version.
 * Do not rewrite, reorder sections, or change CTA labels.
 */

export const consumablesHero = {
  eyebrow: "Shop / Consumables",
  headline: "Consumables organized around production impact.",
  subheadline:
    "General shop consumables available at Gate 1, and production-sensitive consumables governed by evaluation before listing.",
  primaryCta: {
    label: "Browse Consumables",
    href: "/shop/consumables#gate-1-catalog",
  },
  secondaryCta: {
    label: "Get a Quote",
    href: "/get-a-quote",
  },
  image: {
    filename: "consumables-hero.jpg",
    description:
      "a working close-up. A packing station with packaging consumables in use, a cleaning station with solvents and wipes organized in a defined area, or a heat press setup with Teflon sheets and supporting consumables visible at hand. The image should show consumables in operational context — staged, accessible, in use — rather than presented as products. Natural lighting, muted palette, no staging.",
  },
} as const;

export const consumablesWhy = {
  title: "Why consumables matter",
  paragraphs: [
    "Consumables are not filler SKUs. They determine whether production starts cleanly on Monday morning, repeats consistently across the week, and avoids the kind of avoidable downtime that comes from a cleaning solvent that strips ink, a packaging mailer that fails in transit, or a heat press cover sheet that fuses to a transfer. The cost of a poorly selected consumable rarely shows up at the point of purchase. It shows up in rework, returns, and lost production hours weeks later.",
    "Most small-shop consumables purchasing happens by default. Whatever is in stock at the local industrial supplier, whatever ships fastest from a generic online catalog, whatever a forum post recommended last year. The result is a consumables inventory that varies in quality, drifts in source, and doesn’t connect to the equipment or workflow it’s supposed to support.",
    "Lloyd & Vale treats consumables as part of the operating-support relationship, not as commodity items to be sourced cheaply. The catalog is organized around how consumables affect production output. Items with lower production-determining risk — cleaning, packaging, storage, labels, and heat press aids — are listed under standard selection criteria. Items that directly determine output quality — films, powders, inks, pretreatment, transfer materials, adhesives — are governed by a defined evaluation cycle before they enter the catalog.",
  ],
  image: {
    filename: "consumables-storage-area.jpg",
    description:
      "a supporting image showing a small-shop consumables storage area. Bins and shelves with labeled storage of cleaning supplies, packaging materials, and production consumables, organized rather than scattered. The argument is that consumables have a defined place in a working shop, not a corner-of-the-workbench arrangement.",
  },
} as const;

export const consumablesGate1Catalog = {
  title: "Gate 1 consumables in the current catalog",
  anchorId: "gate-1-catalog",
  intro:
    "The categories below cover consumables Lloyd & Vale currently lists in the catalog. These items are selected for shop conditions under standard selection criteria, but they do not require the production-sensitive evaluation cycle described in the next section.",
  items: [
    {
      title: "Cleaning Supplies",
      description:
        "Surface cleaners, approved shop cleaning supplies, wipes, cloths, and cleaning accessories selected for production environments. Equipment-specific cleaning fluids are listed only where compatibility and support scope are documented.",
      href: "/shop/consumables/cleaning-supplies",
      image: {
        filename: "sub-cleaning-supplies.jpg",
        description:
          "cleaning supplies at a cleaning station, organized and in working context",
      },
    },
    {
      title: "Packaging Consumables",
      description:
        "Poly mailers, kraft mailers, packaging labels, packing tape, void fill, and dunnage selected for small-shop fulfillment operations. Selected for the order volumes and handling conditions common to serious small-shop fulfillment, with documented compatibility for shipping and handling.",
      href: "/shop/consumables/packaging-consumables",
      image: {
        filename: "sub-packaging-consumables.jpg",
        description:
          "packaging consumables at a packing station, mailers and tape in use",
      },
    },
    {
      title: "Heat Press Aids",
      description:
        "Teflon sheets, heat press pillows, cover sheets, and pressing-support consumables. Selected to survive repeated cycles under shop conditions and to perform consistently across the substrate ranges most small decoration shops encounter.",
      href: "/shop/consumables/heat-press-aids",
      image: {
        filename: "sub-heat-press-aids.jpg",
        description: "Teflon sheet or cover sheet at a heat press, in working context",
      },
    },
    {
      title: "Labels",
      description:
        "Blank thermal labels, color-coded location labels, shelf labels, and operational labels for storage and workflow use. Connects directly to the Shop Setup Essentials category — many shops install labeled structure first and then need ongoing label supply.",
      href: "/shop/consumables/labels",
      image: {
        filename: "sub-labels.jpg",
        description: "labels installed or being applied in a working shop",
      },
    },
    {
      title: "Wipes, Scrapers, Squeegees",
      description:
        "Lint-free wipes, microfiber cloths, scrapers, squeegees, and replacement accessories for daily production work. Selected for durability under shop conditions and consistent batch quality.",
      href: "/shop/consumables/wipes-scrapers-squeegees",
      image: {
        filename: "sub-wipes-scrapers-squeegees.jpg",
        description: "wipes or squeegees at a workbench during daily production work",
      },
    },
    {
      title: "Storage Basics",
      description:
        "Bins, dividers, drawer organizers, and storage components that supplement the Shop Control Tools category. Items in this sub-category are consumable in the sense of needing periodic replacement, replenishment, or expansion as a shop’s storage requirements grow.",
      href: "/shop/consumables/storage-basics",
      image: {
        filename: "sub-storage-basics.jpg",
        description: "bins or drawer organizers supplementing a Shop Control Tools setup",
      },
    },
    {
      title: "Maintenance Basics",
      description:
        "Lubricants, cleaning brushes, common replacement accessories, and maintenance supplies that don’t determine production output but support equipment longevity. Sized for small-shop maintenance routines rather than industrial-scale maintenance.",
      href: "/shop/consumables/maintenance-basics",
      image: {
        filename: "sub-maintenance-basics.jpg",
        description: "lubricants or cleaning brushes at an equipment maintenance station",
      },
    },
  ],
} as const;

export const consumablesProductionSensitive = {
  title: "Production-sensitive consumables",
  intro:
    "Production-sensitive consumables directly determine output quality, consistency, and shop reliability. Lloyd & Vale lists these items only after they complete a defined evaluation cycle under real or controlled production conditions.",
  paragraphs: [
    "The categories below are governed by evaluation, not by availability. A consumable in one of these categories is not listed in the Lloyd & Vale catalog until its evaluation cycle is complete, its operating conditions are documented, and its known limitations are written into the product page. This applies regardless of supplier reputation, regardless of how well the item performs in published specifications, and regardless of demand.",
    "The evaluation cycle covers release behavior, color stability, wash performance, substrate compatibility, storage requirements, and handling characteristics under conditions that match how small shops actually run production. Items that perform consistently against the evaluation criteria enter the catalog with documented operating conditions, compatibility notes, and known limitations. Items that don’t perform consistently are not listed.",
  ],
  operatorNoteParagraph: {
    before:
      "For operators sourcing production-sensitive consumables today, the practical entry points are direct contact through Get a Quote and the Operator Notes that document Lloyd & Vale’s evaluation methodology. Operator Notes such as ",
    italicTitle: "How We Evaluate DTF Film: Criteria and Trade-Offs",
    after:
      " document the evaluation framework operators can use independently while specific Lloyd & Vale listings in these categories enter the catalog as evaluation cycles are completed.",
  },
  items: [
    {
      title: "DTF Film",
      description:
        "Hot peel and cold peel variants, evaluated under real or controlled production conditions before listing. Evaluation criteria include release consistency across substrates, wash durability, temperature tolerance, storage stability, and color reproduction.",
      href: "/shop/consumables/dtf-film",
    },
    {
      title: "DTF Powder",
      description:
        "Multiple particle sizes and specialty grades, evaluated for adhesion performance, hand-feel after curing, wash durability, and substrate compatibility. Documented operating conditions cover cure profiles, humidity sensitivity, and storage requirements.",
      href: "/shop/consumables/dtf-powder",
    },
    {
      title: "Inks",
      description:
        "White inks, CMYK inks, and UV inks where applicable. Evaluation covers color stability over time, behavior across temperature ranges, compatibility with the films and substrates relevant to the equipment categories Lloyd & Vale supports, and known limitations across operating conditions.",
      href: "/shop/consumables/inks",
    },
    {
      title: "Pretreatment",
      description:
        "Pretreatment solutions for DTG and related decoration processes, evaluated for application consistency, compatibility with downstream inks and substrates, and known limitations across fabric types. Documented operating conditions cover application methods, drying requirements, and substrate-specific notes.",
      href: "/shop/consumables/pretreatment",
    },
    {
      title: "Transfer Materials",
      description:
        "HTV, sublimation transfers, specialty transfers, and related decoration materials. Evaluation covers application performance, durability, substrate compatibility, and the operating conditions under which each material performs within documented tolerances.",
      href: "/shop/consumables/transfer-materials",
    },
    {
      title: "Adhesives",
      description:
        "Production adhesives for decoration and assembly applications, evaluated for bond performance under shop conditions, compatibility with substrates relevant to the equipment categories Lloyd & Vale supports, and documented limitations on usage.",
      href: "/shop/consumables/adhesives",
    },
  ],
  inlineNote: {
    before: "For sourcing inquiries on production-sensitive consumables, ",
    linkLabel: "Get a Quote",
    linkHref: "/get-a-quote",
    after:
      " and we’ll work through the operating requirements before recommending specifications.",
  },
  image: {
    filename: "consumables-evaluation-in-progress.jpg",
    description:
      "an evaluation-in-progress shot rather than a product shot. DTF film on a wash-test setup, a powder sample being evaluated for cure behavior, or a substrate-compatibility test in progress at a workbench. The image’s argument is that these categories are governed by work, not by inventory.",
  },
} as const;

export const consumablesSelection = {
  title: "How consumables are selected",
  paragraphs: [
    "Consumables in the Lloyd & Vale catalog are selected against operational criteria appropriate to the category. General shop consumables — cleaning, packaging, labels, heat press aids, wipes, storage basics, and maintenance basics — are evaluated for durability under shop conditions, batch consistency, compatibility with the equipment and workflows Lloyd & Vale supports, and clarity of use. Items that meet the criteria are listed. Items that don’t are not.",
    "Production-sensitive consumables — films, powders, inks, pretreatment, transfer materials, and adhesives — are governed by an additional evaluation cycle. Our standard is a minimum 30-day evaluation period under real or controlled production conditions, covering the variables that determine whether a consumable performs consistently in working shops rather than in controlled demonstrations. Listing follows completion of the evaluation cycle and the documentation of operating conditions, compatibility notes, and known limitations on the product page.",
    "The catalog is reviewed against the same operating standards used at intake. Where a consumable’s performance drifts — through supplier changes, batch inconsistency, or field-reported failures — the listing is replaced, removed, or revised. Selection in this category is treated as ongoing operational responsibility, not a one-time decision.",
  ],
  inlineLink: {
    label: "Read our Selection Standards →",
    href: "/about/selection-standards",
  },
  image: {
    filename: "consumables-selection-process.jpg",
    description:
      "a close-up image showing the evaluation process. A film sample under a press with temperature strips visible, a powder sample being measured before a cure test, or a packaging consumable being inspected after a shipping simulation. The image reinforces that evaluation is concrete work, not a claim.",
  },
} as const;

export const consumablesGetStarted = {
  title: "How to get started",
  paragraphs: [
    "For shops sourcing general shop consumables — cleaning supplies, packaging, heat press aids, labels, wipes, storage basics, and maintenance items — the sub-category listings above cover what’s currently in the catalog. These items are listed for direct purchase under standard terms.",
    "For shops sourcing production-sensitive consumables — DTF film, DTF powder, inks, pretreatment, transfer materials, or adhesives — the practical starting point is direct contact through Get a Quote. We’ll work through the production context, document the operating requirements, and identify whether the need can be met through current catalog items, items under evaluation, or a defined sourcing path. The Operator Notes on consumables evaluation provide the framework operators can use independently in parallel.",
    "For shops looking to consolidate consumables sourcing across both general and production-sensitive categories, Get a Quote and we’ll work through the operational requirements as a single specifying exercise.",
  ],
  primaryCta: {
    label: "Browse Consumables",
    href: "/shop/consumables#gate-1-catalog",
  },
  secondaryCta: {
    label: "Get a Quote",
    href: "/get-a-quote",
  },
} as const;

export const consumablesRelated = {
  title: "Related categories",
  intro:
    "Consumables connects to several related categories that complete the operating-support picture.",
  items: [
    {
      title: "Equipment",
      description:
        "Production-grade DTF, UV, heat press, embroidery, laser, cutting, and finishing systems. Many consumables in the Lloyd & Vale catalog are selected specifically for compatibility with the equipment categories we support. Gate 1 equipment inquiries are handled through Get a Quote.",
      href: "/shop/equipment",
      image: {
        filename: "related-equipment.jpg",
        description:
          "representative image drawn from the Equipment category-anchor library",
      },
    },
    {
      title: "Shop Setup Essentials",
      description:
        "Floor marking, zone labels, workflow signs, SOP boards, and visual-management kits. Consumables sit within the structured workspace that Shop Setup Essentials makes visible — a labeled cleaning station, a defined packing area, organized consumable storage.",
      href: "/shop/shop-setup-essentials",
      image: {
        filename: "related-shop-setup-essentials.jpg",
        description:
          "representative image drawn from the Shop Setup Essentials category-anchor library",
      },
    },
    {
      title: "Operator Notes",
      description:
        "First-person notes from real production work, including consumables evaluation. The relevant Operator Notes document the evaluation methodology Lloyd & Vale uses for production-sensitive consumables and provide frameworks operators can use independently.",
      href: "/learn/operator-notes",
      image: {
        filename: "related-operator-notes.jpg",
        description:
          "representative thumbnail from the Operator Notes section, ideally Operator Note #1",
      },
    },
  ],
} as const;

export const consumablesFinalCta = {
  title: "Source consumables against operational criteria.",
  copy: "Browse the current consumables catalog for general shop consumables, or Get a Quote for production-sensitive consumables and structured sourcing inquiries. We’ll respond within one business day with a focused recommendation or a structured next step.",
  primaryCta: {
    label: "Browse Consumables",
    href: "/shop/consumables#gate-1-catalog",
  },
  secondaryCta: {
    label: "Get a Quote",
    href: "/get-a-quote",
  },
  image: {
    filename: "final-cta-background.jpg",
    description:
      "a subtle background treatment with text overlaid at higher contrast, or a flat color background if the photography library doesn’t yet include a suitable image. The CTA section should feel resolved and confident, not visually busy. Same visual logic as the home page and previous category page final CTAs.",
  },
} as const;
