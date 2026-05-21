/**
 * Locked Gate 1 Home page content — Final Calibrated Version.
 * Do not rewrite, reorder sections, or change CTA labels.
 */

export const homeHero = {
  headline:
    "Equipment, supplies, and operating support — selected for serious small shops.",
  subheadline:
    "Lloyd & Vale is a selective U.S.-based dealer and operating-support company for small production businesses. We supply what we’ve evaluated, support what we sell within defined scope, and stay focused on what makes small shops run with control.",
  primaryCta: {
    label: "Get a Quote",
    href: "/get-a-quote",
  },
  secondaryCta: {
    label: "See Selection Standards",
    href: "/about/selection-standards",
  },
  image: {
    filename: "hero-shop-wide.jpg",
    description:
      "wide-angle, naturally lit shot of a working small-shop production area. Visible workflow zones, labeled stations, a DTF or heat press setup mid-production. No staged models. No stock photography. The shot should look like a real operating environment, with one or two Lloyd & Vale labels or organizational elements visible without being foregrounded. Image is anchored left or right with text balanced on the opposite side.",
  },
} as const;

export const homeTrustStrip = [
  "Production-sensitive consumables evaluated under real or controlled production conditions before listing.",
  "Technical support within defined scope, with standard response within 48 business hours.",
  "Catalog reviewed against operating standards twice per year.",
  "Documented operating conditions and limitations on every product page.",
] as const;

export const homeSupplies = {
  title: "What we supply",
  intro:
    "Our catalog is organized around how a small production shop actually operates — capability, continuity, visible structure, and measurable control. Each category is selected against the same operating standards.",
  categories: [
    {
      title: "Equipment",
      description:
        "Production-grade DTF, UV, heat press, embroidery, laser, cutting, and finishing systems. Equipment we list is paired with documented technical support, parts coordination, and a defined response standard. Gate 1 equipment inquiries are handled through Get a Quote.",
      href: "/shop/equipment",
      image: {
        filename: "category-equipment.jpg",
        description:
          "in-context shot of a machine in a working shop, not a manufacturer beauty shot.",
      },
    },
    {
      title: "Consumables",
      description:
        "Cleaning, packaging, heat-press aids, labels, storage, and maintenance supplies form the Gate 1 consumables catalog. Production-sensitive consumables — including films, powders, inks, pretreatment, transfer materials, and adhesives — are evaluated under real or controlled production conditions before listing.",
      href: "/shop/consumables",
      image: {
        filename: "category-consumables.jpg",
        description: "consumables at a working station, not on white.",
      },
    },
    {
      title: "Shop Setup Essentials",
      description:
        "Floor marking, zone labels, workflow signs, SOP boards, and visual-management kits. Selected for small shops moving from informal layouts to organized, process-supported production areas.",
      href: "/shop/shop-setup-essentials",
      image: {
        filename: "category-shop-setup-essentials.jpg",
        description: "installed floor marking and labels in a real shop.",
      },
    },
    {
      title: "Shop Control Tools",
      description:
        "Measuring, alignment, weighing, storage, job trays, parts drawers, QC tools, and heat press aids. The physical infrastructure that makes production visible, measurable, and trainable.",
      href: "/shop/shop-control-tools",
      image: {
        filename: "category-shop-control-tools.jpg",
        description: "tools in use at a workbench.",
      },
    },
    {
      title: "Starter Kits",
      description:
        "Assembled kits combining the items most small shops need to set up cleanly from the start. Each kit ships with a documented setup guide.",
      href: "/shop/starter-kits",
      image: {
        filename: "category-starter-kits.jpg",
        description: "flat-lay or hero of an assembled Starter Kit.",
      },
    },
  ],
} as const;

export const homeHowWeSelect = {
  title: "How we select",
  paragraphs: [
    "Our catalog is the result of selection, not aggregation. Equipment is listed when dealer relationships, technical support, and parts coordination are in place. Production-sensitive consumables are evaluated under real or controlled production conditions before listing. Shop Setup Essentials and Shop Control Tools are selected for repeatability and operational discipline.",
    "What we don’t carry is part of how we operate. Lloyd & Vale focuses on what we can evaluate, stock, and support within defined scope. We don’t position ourselves as a full-line catalog and we’re direct about it.",
    "Selection is treated as ongoing operational responsibility. The catalog is reviewed twice per year against the same standards used at intake.",
  ],
  inlineLink: {
    label: "Read our Selection Standards →",
    href: "/about/selection-standards",
  },
  image: {
    filename: "how-we-select-evaluation.jpg",
    description:
      "a single supporting image to the side of the copy block. Evaluation-in-progress shot: DTF film on a wash-test rack, a heat press under temperature evaluation, or a hands-on inspection at a workbench. Image reinforces the operational claim without illustrating it literally.",
  },
} as const;

export const homeBuiltForShops = {
  title: "Built for serious small shops",
  paragraphs: [
    "We work with operators past the experimentation stage — DTF shops, embroidery shops, UV and laser operators, custom decorators, Etsy and Shopify sellers running real production volume, promotional product decorators, and small fulfillment teams. The size of the operation matters less than how it’s being run.",
    "Our products and support are designed for shops that need repeatability and control: the operator who wants the next hire to walk in to a labeled, structured workspace; the studio bringing a process in-house and wanting it done right the first time; the decorator whose reprints are tracing back to layout and station discipline rather than equipment.",
    "Not every shop fits us, and we say so directly when a request falls outside our scope.",
  ],
  inlineLink: {
    label: "See Who We Serve →",
    href: "/about/who-we-serve",
  },
  compositeImage: {
    filename: "composite-built-for-shops.jpg",
    description:
      "a composite of three smaller images arranged horizontally beneath the copy",
    panels: [
      {
        filename: "composite-dtf-station.jpg",
        description: "a DTF station",
      },
      {
        filename: "composite-embroidery-setup.jpg",
        description: "an embroidery setup",
      },
      {
        filename: "composite-packing-qc-station.jpg",
        description: "a packing/QC station",
      },
    ],
  },
} as const;

export const homeLearn = {
  title: "Learn from the floor",
  intro:
    "We publish what we know from real production work — operator-to-operator notes, field observations, sourcing and qualification documentation, and practical guides built from problems we’ve actually worked through. The Learn section is part of how Lloyd & Vale operates, not a content channel separate from the business.",
  previews: [
    {
      category: "Operator Notes",
      description:
        "First-person notes from real production work — workflow changes, evaluation outcomes, operational decisions, and what didn’t work alongside what did.",
      featuredLabel:
        "Currently featured: Reducing DTF Reprints: A Workflow-Layout Case →",
      featuredHref: "/learn/reducing-dtf-reprints-workflow-layout-case",
      categoryHref: "/learn/operator-notes",
      image: {
        filename: "learn-operator-notes-thumb.jpg",
        description: "thumbnail from Operator Note #1.",
      },
    },
    {
      category: "Field Reports",
      description:
        "Observation-based reports from trade shows, supplier visits, and shop-floor visits. Documented conditions of observation; conclusions framed as observations rather than pronouncements.",
      upcoming:
        "Upcoming: Trade show observations and supplier qualification visits.",
      categoryHref: "/learn/field-reports",
      image: {
        filename: "learn-field-reports-thumb.jpg",
        description:
          "for Gate 1, where no article is yet published, use a neutral image consistent with the section: a notebook on a shop bench, a labeled inspection station, or a workflow diagram on paper. Image must not imply a published article that doesn’t yet exist.",
      },
    },
    {
      category: "Guides & Checklists",
      description:
        "Practical PDF documentation built from production work — setup walkthroughs, evaluation checklists, and operating standards for small shops.",
      upcoming:
        "Launch guides: DTF Shop Setup Walkthrough, Building a QC Station, and 5S for Small Production Shops.",
      categoryHref: "/learn/guides-and-checklists",
      image: {
        filename: "learn-guides-checklists-thumb.jpg",
        description: "thumbnail from one of the launch guides.",
      },
    },
  ],
  inlineLink: {
    label: "Browse the Learn section →",
    href: "/learn",
  },
} as const;

export const homeTechnicalSupport = {
  title: "Technical support within defined scope",
  paragraphs: [
    "Lloyd & Vale provides technical support for products sold directly through us, within documented support scope on each product page. Our standard response window is within 48 business hours. Support is provided by people with hands-on production experience, not by general customer service.",
    "What’s covered includes setup guidance, compatibility advice, troubleshooting within scope, and coordination with manufacturer-direct support when an issue falls outside our direct scope. Paid consultation is available for operators needing structured workflow review or specifying assistance.",
    "We’re direct about what’s inside and outside our scope. A clearly scoped support relationship is more useful than an unbounded promise.",
  ],
  inlineLink: {
    label: "See Technical Support →",
    href: "/support",
  },
  image: {
    filename: "technical-support-workbench.jpg",
    description:
      "a single supporting image. A workbench close-up of an operator with a machine open mid-setup, or a hands-on troubleshooting moment. No headset or call-center imagery. The image should communicate technical work, not customer service.",
  },
} as const;

export const homeFinalCta = {
  title: "Talk to us about your operation",
  copy: "Tell us what you’re specifying, sourcing, or working to solve. We’ll respond within one business day with either a focused recommendation, a structured next step, or a direct note if your request falls outside our scope.",
  primaryCta: {
    label: "Get a Quote",
    href: "/get-a-quote",
  },
  secondaryCta: {
    label: "Contact us",
    href: "/contact",
  },
  image: {
    filename: "final-cta-background.jpg",
    description:
      "a subtle background treatment. A soft, low-contrast wide shot of a shop floor or workbench, with text overlaid at higher contrast. Or a flat color background if the photography library doesn’t yet include a suitable image. The CTA section should feel resolved and confident, not visually busy.",
  },
} as const;
