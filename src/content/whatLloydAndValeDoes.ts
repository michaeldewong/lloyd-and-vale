/**
 * What Lloyd & Vale Does — Gate 1 Final Calibrated Version.
 * Do not rewrite, reorder sections, or change inline link labels.
 */

export const whatLloydAndValeDoes = {
  eyebrow: "About / What Lloyd & Vale Does",
  title: "What Lloyd & Vale Does",
  subheadline:
    "Equipment, supplies, setup tools, and technical support for serious small shops.",
  opening: [
    "Lloyd & Vale is a selective American dealer and operating-support company for small production businesses — decorators, custom studios, contract embroiderers, fulfillment operators, online sellers, and light-manufacturing shops that operate at a serious level and want to scale without losing control of their operations.",
    "Our catalog is curated, our support is defined in scope, and our operating posture is straightforward: we supply what we've evaluated, we support what we sell, and we're clear about what falls inside and outside our scope.",
  ],
  supply: {
    title: "What we supply",
    intro: "Four product categories, in a deliberate order.",
    categories: [
      {
        label: "Equipment.",
        body: "Production-grade DTF, UV, UV-DTF, heat press, embroidery, laser, cutting, and finishing machines. Our equipment selection is focused on systems we can technically support, with defined response windows for the products we sell directly.",
      },
      {
        label: "Consumables.",
        body: "Films, inks, powders, transfer materials, pretreatment, cleaning, and packaging supplies. Production-sensitive consumables go through real-use evaluation before listing, and each product page documents the operating conditions we've assessed.",
      },
      {
        label: "Shop Setup Essentials.",
        body: "Floor marking tape, zone labels, workflow signs, SOP boards, and visual-management kits. This is the category that moves a small operation from informal to organized — from owner-dependent to process-supported. We supply it because most small-shop suppliers don't, and because operating standards depend on it.",
      },
      {
        label: "Shop Control Tools.",
        body: "Measuring tools, alignment guides, scales, storage bins, parts drawers, job trays, and basic QC tools. The physical infrastructure that makes production measurable, repeatable, and trainable.",
      },
    ],
  },
  support: {
    title: "What we support",
    intro: "Around those four product lines, we provide two service layers.",
    layers: [
      {
        label: "Training and Guides.",
        body: "Practical content built from real production work — short guides, checklists, workshops, and structured courses as the program develops. The objective is operational: we publish what helps operators run more cleanly, not what fills a content schedule.",
      },
      {
        label: "Technical Support.",
        body: "Setup guidance, compatibility advice, troubleshooting, and paid consultation. Standard response is within 48 hours during business days for products sold directly through Lloyd & Vale, within the defined support scope for each product. Support is provided by people with hands-on production experience.",
      },
    ],
  },
  whoWeServe: {
    title: "Who we serve",
    paragraphs: [
      "Lloyd & Vale is built for small production operations that are past the experimentation stage and want to operate professionally — DTF shops, embroidery shops, UV and laser operators, custom decorators, Etsy and Shopify sellers running real production volume, promotional product decorators, and small fulfillment teams. Not every category fits us, and we say so directly when a customer's needs fall outside our scope.",
    ],
  },
  howWeOperate: {
    title: "How we operate",
    paragraphs: [
      "We're selective on what we carry, transparent about what we don't, and direct in how we communicate. We don't run promotional campaigns, we don't compete on volume, and we don't recommend products outside our evaluated range.",
    ],
    closingParts: [
      {
        type: "text",
        value:
          "If you want to understand how we make selection decisions, see our ",
      },
      {
        type: "link",
        label: "Selection Standards",
        href: "/about/selection-standards",
      },
      {
        type: "text",
        value:
          ". If you want to discuss a specific equipment or sourcing question, ",
      },
      {
        type: "link",
        label: "Contact us",
        href: "/contact",
      },
      { type: "text", value: " or " },
      {
        type: "link",
        label: "Get a Quote",
        href: "/get-a-quote",
      },
      { type: "text", value: "." },
    ],
  },
} as const;
