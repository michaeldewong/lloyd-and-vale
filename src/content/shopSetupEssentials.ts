/**
 * Shop Setup Essentials category page — Gate 1 Final Calibrated Version.
 * Do not rewrite, reorder sections, or change CTA labels.
 */

export const shopSetupEssentialsHero = {
  eyebrow: "Shop / Shop Setup Essentials",
  headline: "Visual structure for small production shops.",
  subheadline:
    "Floor marking, zone labels, workflow signs, SOP boards, and visual-management kits — selected for small shops moving from informal layouts to organized, process-supported production areas.",
  primaryCta: {
    label: "Browse Starter Kits",
    href: "/shop/starter-kits",
  },
  secondaryCta: {
    label: "Get a Quote",
    href: "/get-a-quote",
  },
  image: {
    filename: "shop-setup-essentials-hero.jpg",
    description:
      "a wide-angle in-context shot of a small production shop with Shop Setup Essentials visibly installed. Floor marking tape defining a workflow zone, station labels at a heat press or DTF area, an SOP board on the wall. The image should communicate “this is what an organized small shop looks like,” not isolated product imagery. Natural lighting, muted palette, no staging.",
  },
} as const;

export const shopSetupEssentialsWhy = {
  title: "Why Shop Setup Essentials is its own category",
  paragraphs: [
    "Most small-shop suppliers don’t carry this category. Equipment dealers sell machines. Consumables sellers sell films and inks. The items that turn an unstructured workspace into a process-supported production area — floor marking, zone labels, SOP boards, station signs — sit between categories, and most operators end up assembling them from generic industrial suppliers.",
    "Lloyd & Vale treats Shop Setup Essentials as its own category because operating discipline is its own category. A DTF shop with the right film and the wrong workflow layout produces reprints. A studio with the right equipment and no station labels produces order mix-ups. The cost of an unstructured workspace shows up in rework, missed orders, and the difficulty of training a second operator.",
    "The items in this category are selected for small shops that need repeatability and control. They are not industrial-supply commodities. They are operating infrastructure for production businesses that have moved past the experimentation stage.",
  ],
  image: {
    filename: "shop-setup-essentials-before-after.jpg",
    description:
      "a side image showing before-and-after of a small production area: left frame shows an unstructured workspace, right frame shows the same workspace with floor marking, station labels, and a visible workflow.",
  },
} as const;

export const shopSetupEssentialsSubcategories = {
  title: "What’s in Shop Setup Essentials",
  intro:
    "The category is organized around the visible structure of a working production shop — the floor, the zones, the stations, and the standards. Each sub-category serves a specific operational function.",
  items: [
    {
      title: "Floor Marking",
      description:
        "Industrial-grade floor tape in multiple widths and colors. Defines workflow zones, traffic paths, equipment footprints, and storage areas — the visible foundation of a structured production floor.",
      href: "/shop/shop-setup-essentials/floor-marking",
      image: {
        filename: "sub-floor-marking.jpg",
        description:
          "floor marking tape installed in a working shop, defining a real zone with foot or cart traffic visible",
      },
    },
    {
      title: "Zone Labels",
      description:
        "Wall and overhead signs identifying production zones, storage areas, QC stations, finished-goods staging, and rework areas. Selected for visibility from working distance, not decorative placement.",
      href: "/shop/shop-setup-essentials/zone-labels",
      image: {
        filename: "sub-zone-labels.jpg",
        description: "a wall or overhead zone label mounted in working context",
      },
    },
    {
      title: "Station Signs and Workflow Signs",
      description:
        "Signage for individual work stations — print, cure, press, pack, QC — and for the workflow steps that move product between them. Designed for shops where the next hire should walk in and immediately know what happens at each station.",
      href: "/shop/shop-setup-essentials/station-signs-workflow-signs",
      image: {
        filename: "sub-station-signs.jpg",
        description:
          "a station sign installed at a print, cure, press, pack, or QC station",
      },
    },
    {
      title: "SOP Boards",
      description:
        "Wall-mounted boards for posting standard operating procedures, daily start-up checklists, color management notes, and machine maintenance reminders. The visible standard against which the work is performed.",
      href: "/shop/shop-setup-essentials/sop-boards",
      image: {
        filename: "sub-sop-boards.jpg",
        description:
          "an SOP board mounted at a working station with operator-visible content",
      },
    },
    {
      title: "Visual-Management Kits",
      description:
        "Pre-assembled kits combining floor marking, zone labels, station signs, and SOP boards for common shop configurations — DTF, embroidery, online-seller production, QC station, and full 5S implementation. See Starter Kits below.",
      href: "/shop/starter-kits",
      image: {
        filename: "sub-visual-management-kits.jpg",
        description:
          "a Starter Kit installed in context (cross-reference image to Starter Kits)",
      },
    },
    {
      title: "Storage and Location Labels",
      description:
        "Labels for shelf systems, parts drawers, film and powder storage, finished-transfer storage, and component bins. Connects the Shop Setup Essentials category to the Shop Control Tools category — visible labels on visible storage.",
      href: "/shop/shop-setup-essentials/storage-location-labels",
      image: {
        filename: "sub-storage-location-labels.jpg",
        description:
          "labeled shelf, parts drawer, or storage bin in a working shop",
      },
    },
  ],
} as const;

export const shopSetupEssentialsStarterKits = {
  title: "Starter Kits",
  intro:
    "For shops setting up an area from scratch or formalizing an existing one, Starter Kits combine the items most operations need in one configured set. Each kit ships with a documented setup guide written for the specific shop type.",
  items: [
    {
      title: "DTF Shop Setup Kit",
      description:
        "A complete first-pass setup for DTF shops bringing structured organization to an existing production area. Includes floor marking, zone labels for the print–cure–press–pack workflow, film and powder storage labels, an SOP board, and the DTF Shop Setup Walkthrough guide.",
      href: "/shop/starter-kits/dtf-shop-setup-kit",
      image: {
        filename: "kit-dtf-shop-setup.jpg",
        description: "hero or flat-lay of the DTF Shop Setup Kit",
      },
    },
    {
      title: "Embroidery Shop Setup Kit",
      description:
        "Designed for embroidery operations where thread inventory, hooping consistency, and order tracking drive daily organization. Includes zone labels, thread and backing organization labels, finished-goods identifiers, an SOP board, and the Embroidery Shop Setup Walkthrough guide.",
      href: "/shop/starter-kits/embroidery-shop-setup-kit",
      image: {
        filename: "kit-embroidery-shop-setup.jpg",
        description: "hero or flat-lay of the Embroidery Shop Setup Kit",
      },
    },
    {
      title: "Etsy / Shopify Production Kit",
      description:
        "Order-flow and packing-station organization for online sellers running production volume from limited space. Includes order workflow labels (New / In Production / QC / Pack / Ship), shelf labels, packing station signs, a daily checklist board, and the Order-Flow Setup guide.",
      href: "/shop/starter-kits/etsy-shopify-production-kit",
      image: {
        filename: "kit-etsy-shopify-production.jpg",
        description: "hero or flat-lay of the Etsy / Shopify Production Kit",
      },
    },
    {
      title: "QC Station Setup Kit",
      description:
        "A dedicated QC station is the single highest-leverage step between production and shipping. The kit includes QC station signage, an inspection checklist board, defect category labels (rework / reject / hold), and the Building a QC Station guide.",
      href: "/shop/starter-kits/qc-station-setup-kit",
      image: {
        filename: "kit-qc-station-setup.jpg",
        description: "hero or flat-lay of the QC Station Setup Kit",
      },
    },
    {
      title: "5S Starter Kit for Small Shops",
      description:
        "A complete 5S starter set for small shops implementing visible standards across production, storage, and finishing areas. Includes a full floor marking set, zone labels for all major areas, tool shadow board materials, shelf labels, an audit checklist board, and the 5S for Small Production Shops guide.",
      href: "/shop/starter-kits/5s-starter-kit",
      image: {
        filename: "kit-5s-starter.jpg",
        description: "hero or flat-lay of the 5S Starter Kit",
      },
    },
  ],
  inlineLink: {
    label: "Browse all Starter Kits →",
    href: "/shop/starter-kits",
  },
} as const;

export const shopSetupEssentialsSelection = {
  title: "How Shop Setup Essentials are selected",
  paragraphs: [
    "Shop Setup Essentials are selected for working production environments. Floor tape needs to hold up under cart traffic and equipment movement. Labels need to remain legible under shop lighting and survive the cleaning solvents used in DTF and embroidery production. SOP boards need to be readable at working distance, not just up close.",
    "We evaluate items in this category against operational criteria: durability under shop conditions, visibility at working distance, ease of installation and removal, and consistency across batches. Items that meet the criteria are listed. Items that don’t are not.",
    "The category is reviewed against the same operating standards used for the rest of the catalog. Supplier consistency, batch quality, and field feedback from operators determine what stays and what’s replaced.",
  ],
  inlineLink: {
    label: "Read our Selection Standards →",
    href: "/about/selection-standards",
  },
  image: {
    filename: "shop-setup-essentials-selection.jpg",
    description:
      "a single supporting image. A close-up of floor tape on a working shop floor with cart traffic or foot traffic visible, or a close-up of a label installed in context after weeks of shop use.",
  },
} as const;

export const shopSetupEssentialsGetStarted = {
  title: "How to get started",
  paragraphs: [
    "For most small shops, the practical starting point is a Starter Kit matched to the shop type. The kits ship with documented setup guides and cover the configuration most operators arrive at independently within the first year of organizing a production area. Buying the configured set is faster and more consistent than assembling it piece by piece.",
    "For shops that already have partial organization in place and need specific additions, the sub-category listings cover individual products — floor marking, zone labels, SOP boards, and storage labels.",
    "For shops with non-standard configurations, multi-area production, or specific operational requirements that don’t match a Starter Kit, Get a Quote and we’ll work through what’s needed.",
  ],
  primaryCta: {
    label: "Browse Starter Kits",
    href: "/shop/starter-kits",
  },
  secondaryCta: {
    label: "Get a Quote",
    href: "/get-a-quote",
  },
} as const;

export const shopSetupEssentialsRelated = {
  title: "Related categories",
  intro:
    "Shop Setup Essentials works alongside two related categories that complete the operating-infrastructure picture.",
  items: [
    {
      title: "Shop Control Tools",
      description:
        "Measuring tools, alignment guides, scales, storage bins, job trays, parts drawers, and QC tools. Where Shop Setup Essentials makes the workspace visibly structured, Shop Control Tools make the work itself measurable, repeatable, and trainable.",
      href: "/shop/shop-control-tools",
      image: {
        filename: "related-shop-control-tools.jpg",
        description:
          "representative image drawn from the Shop Control Tools category-anchor library",
      },
    },
    {
      title: "Guides & Checklists",
      description:
        "Practical PDF documentation built from production work — setup walkthroughs, evaluation checklists, and operating standards. Each Starter Kit ships with its corresponding guide; the standalone guides cover topics beyond kit setup.",
      href: "/learn/guides-and-checklists",
      image: {
        filename: "related-guides-checklists.jpg",
        description: "representative image of a guide or checklist in working use",
      },
    },
  ],
} as const;

export const shopSetupEssentialsFinalCta = {
  title: "Set up your shop with visible structure.",
  copy: "Browse Starter Kits matched to your shop type, or work through the individual sub-categories. For non-standard configurations or multi-area setups, Get a Quote and we’ll respond within one business day.",
  primaryCta: {
    label: "Browse Starter Kits",
    href: "/shop/starter-kits",
  },
  secondaryCta: {
    label: "Get a Quote",
    href: "/get-a-quote",
  },
  image: {
    filename: "final-cta-background.jpg",
    description:
      "a subtle background treatment with text overlaid at higher contrast, or a flat color background if the photography library doesn’t yet include a suitable image. The CTA section should feel resolved and confident, not visually busy. Same visual logic as the home page final CTA.",
  },
} as const;
