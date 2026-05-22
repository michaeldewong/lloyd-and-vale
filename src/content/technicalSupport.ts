/**
 * Technical Support page — Gate 1 Final Calibrated Version.
 * Route: /support (not /support/technical-support).
 * Do not rewrite, reorder sections, or change CTA labels.
 */

export const technicalSupportHero = {
  eyebrow: "Support / Technical Support",
  headline: "Defined support for products, workflows, and operators.",
  subheadline:
    "Lloyd & Vale provides technical support within documented scope for products sold directly through us. Our standard response window is within 48 business hours for requests inside documented scope, handled by people with hands-on production experience.",
  primaryCta: {
    label: "Submit a Support Request",
    href: "/support/submit-a-support-request",
  },
  secondaryCta: {
    label: "Get a Quote",
    href: "/get-a-quote",
  },
  image: {
    filename: "technical-support-hero.jpg",
    description:
      "a workbench close-up. Hands working on a machine open for setup or inspection, a technician’s notebook with diagrams visible, or an operator at a heat press making a setup adjustment. No headsets. No call-center imagery. No customer service desks. The image should communicate technical work, not customer service.",
  },
} as const;

export const technicalSupportHow = {
  title: "How we support operators",
  paragraphs: [
    "Many small-shop equipment and consumable purchases come with support expectations that are not clearly defined when the product is sold. The seller’s technical knowledge doesn’t reach into shop conditions. Response windows are unbounded. The support relationship is treated as a customer service function rather than as a technical relationship between people who understand the same work.",
    "Lloyd & Vale treats technical support as part of what we supply, not as a service layer separate from the products. Equipment we list is paired with documented technical support, parts coordination, and a defined response standard. Consumables we list are accompanied by documented operating conditions and known limitations. Shop Setup Essentials and Shop Control Tools are paired with the setup guides that ship with each Starter Kit.",
    "Support is provided by people with hands-on production experience. A question about DTF film release should be handled by someone who understands film, heat, pressure, and shop conditions — not treated as a generic customer-service ticket. The scope of what we support is documented; the scope of what we don’t is documented just as clearly.",
  ],
  image: {
    filename: "technical-support-staff-work.jpg",
    description:
      "a supporting image showing a Lloyd & Vale staff member (or anonymized operator) working through a technical issue at a shop bench. A machine partially disassembled, notes being taken, a phone call in progress with a parts diagram visible. The argument is that support is technical work being done by technical people.",
  },
} as const;

export const technicalSupportInsideScope = {
  title: "What’s inside the scope",
  intro:
    "Technical support covers four defined areas. Each has its own scope statement and process.",
  items: [
    {
      title: "Technical Support",
      description:
        "Direct technical assistance for products sold through Lloyd & Vale, within documented support scope on each product page. Includes diagnosis of production issues traceable to the product, coordination with manufacturer-direct support where the issue falls outside our direct scope, and guidance on resolution. Standard response is within 48 business hours for requests inside documented support scope.",
      image: {
        filename: "scope-technical-support.jpg",
        description: "technical diagnosis in progress at a shop bench",
      },
    },
    {
      title: "Compatibility Help",
      description:
        "Pre-purchase and post-purchase guidance on whether specific consumables, equipment, and supplies work together in a given production configuration. Includes substrate compatibility, equipment-consumable pairing, and known limitations between products. Provided as part of standard support for items in the Lloyd & Vale catalog.",
      image: {
        filename: "scope-compatibility-help.jpg",
        description:
          "operator evaluating consumable-equipment compatibility at a working station",
      },
    },
    {
      title: "Setup Guidance",
      description:
        "Documented setup support for equipment we list, Starter Kits we ship, and structured shop configurations. Includes setup walkthroughs, layout guidance, and station configuration support. Each Starter Kit ships with a documented setup guide; complex equipment setups are coordinated through the dealer relationship and Lloyd & Vale support.",
      image: {
        filename: "scope-setup-guidance.jpg",
        description: "Starter Kit setup guide being referenced during installation",
      },
    },
    {
      title: "Service Options",
      description:
        "Structured support beyond the standard scope, for operators needing dedicated workflow review, specifying assistance for non-standard configurations, or recurring support relationships. Includes paid consultation and defined service engagements. Service Options are available on request through Get a Quote.",
      image: {
        filename: "scope-service-options.jpg",
        description:
          "structured workflow review in progress, notes and diagrams visible",
      },
    },
  ],
} as const;

export const technicalSupportOutsideScope = {
  title: "What’s outside the scope",
  paragraphs: [
    "A clearly scoped support relationship is more useful than an unbounded promise. Lloyd & Vale is direct about what falls outside our direct support.",
    "We do not provide direct technical support for products not sold through Lloyd & Vale. This includes equipment purchased elsewhere, consumables sourced from other suppliers, and configurations built around products we haven’t evaluated. Where an operator’s question involves a mix of Lloyd & Vale products and external products, we’ll address what we can and identify clearly what we cannot.",
    "We don’t provide on-site service as a standard offering. On-site service may be available for specific equipment listings, coordinated through the dealer relationship and quoted separately. We don’t provide 24/7 support, emergency response, or guaranteed resolution windows beyond the standard 48 business hour response time. Service Options can include defined response commitments for operators who need them.",
    "When a request falls outside scope, we say so directly and, where possible, point to a useful next step — the manufacturer’s support, a coordinated dealer escalation, or a Service Options engagement that fits the request.",
  ],
} as const;

export const technicalSupportSubmit = {
  title: "How to submit a support request",
  intro:
    "The submission process is structured to route requests efficiently and respond within our standard window. Three things make a support request easier to resolve.",
  steps: [
    {
      title: "Identify the product or workflow",
      description:
        "A support request resolves faster when the specific product, equipment, or workflow is identified at the start. Include the product name or SKU, the equipment involved, and the consumables in use where relevant. For Starter Kit setup questions, include the kit name.",
    },
    {
      title: "Describe what you’re observing",
      description:
        "Describe the operational issue in terms of what’s being observed — output inconsistency, equipment behavior, consumable performance, workflow problem. Include the production context where relevant: volume, substrates, environmental conditions, recent changes.",
    },
    {
      title: "Note what you’ve tried",
      description:
        "Where the operator has already attempted resolution steps, note them. This avoids repeating known-failed approaches and helps identify whether the issue is within the documented operating conditions of the product or outside them.",
    },
  ],
  inlineNote:
    "Support requests are submitted through the form linked below. Confirmation is sent automatically; a substantive response follows within 48 business hours for requests inside documented scope.",
  primaryCta: {
    label: "Submit a Support Request",
    href: "/support/submit-a-support-request",
  },
  image: {
    filename: "technical-support-observation.jpg",
    description:
      "a clean, quiet image. A notebook with handwritten notes from a shop troubleshooting session, or a workbench with a product being inspected before submitting a question. The argument is that good support starts with structured observation.",
  },
} as const;

export const technicalSupportProducts = {
  title: "Support connected to products",
  paragraphs: [
    "Technical support is not a separate department at Lloyd & Vale. It’s part of the product relationship. Every product page documents the operating conditions, known limitations, and support scope specific to that product. Every Starter Kit ships with a documented setup guide. Equipment we list is paired with a documented support pathway before it enters the catalog.",
    "This connection between products and support is intentional. The same operating standards that govern selection govern support. Support is informed by the same evaluation standards used to list the product. The same scope that defines what we list defines what we support.",
    "For operators evaluating a purchase, the product page is the primary reference for what support looks like for that item. For operators with an existing question, the support request form is the entry point. For operators considering a structured engagement beyond standard support, Service Options are available through Get a Quote.",
  ],
  inlineLink: {
    label: "Read our Selection Standards →",
    href: "/about/selection-standards",
  },
  image: {
    filename: "technical-support-product-continuity.jpg",
    description:
      "a supporting image showing the connection between a product and its support. A product page being referenced on a screen while an operator works through a setup at a bench, or a Starter Kit setup guide open next to the installed kit. The argument is that support and product are continuous, not separate.",
  },
} as const;

export const technicalSupportRelated = {
  title: "Related pages",
  intro:
    "Technical Support connects to several related pages that document how Lloyd & Vale operates.",
  items: [
    {
      title: "Selection Standards",
      description:
        "The operating standards that govern how products enter the Lloyd & Vale catalog. Support scope is part of selection — products are listed when the support pathway is documented.",
      href: "/about/selection-standards",
      image: {
        filename: "related-selection-standards.jpg",
        description:
          "representative image of the Selection Standards page (evaluation-in-progress shot)",
      },
    },
    {
      title: "What Lloyd & Vale Does",
      description:
        "The full scope description of the company, covering products, support, and operating posture. Technical Support is one of two service layers that operate alongside the product catalog.",
      href: "/about/what-lloyd-and-vale-does",
      image: {
        filename: "related-what-lv-does.jpg",
        description: "representative image of the What Lloyd & Vale Does page",
      },
    },
    {
      title: "Get a Quote",
      description:
        "The entry point for equipment inquiries, non-standard configurations, and Service Options engagements. Quote requests are responded to within one business day.",
      href: "/get-a-quote",
      image: {
        filename: "related-get-a-quote.jpg",
        description:
          "representative image of structured conversation or specifying work (notebook, diagrams)",
      },
    },
  ],
} as const;

export const technicalSupportFinalCta = {
  title: "Support starts with a structured request.",
  copy: "Submit a support request through the form for issues with products sold through Lloyd & Vale. For equipment inquiries, non-standard configurations, or structured support engagements, Get a Quote and we’ll respond within one business day.",
  primaryCta: {
    label: "Submit a Support Request",
    href: "/support/submit-a-support-request",
  },
  secondaryCta: {
    label: "Get a Quote",
    href: "/get-a-quote",
  },
  image: {
    filename: "final-cta-background.jpg",
    description:
      "a subtle background treatment with text overlaid at higher contrast, or a flat color background if the photography library doesn’t yet include a suitable image. The CTA section should feel resolved and confident, not visually busy. Same visual logic as the home page and category page final CTAs.",
  },
} as const;
