/**
 * Selection Standards — Gate 1 Final Calibrated Version.
 * Do not rewrite, reorder standards, or change inline link labels.
 */

export const selectionStandards = {
  eyebrow: "About / Selection Standards",
  title: "Selection Standards",
  subhead: "How we evaluate and select what we carry.",
  introduction:
    "Lloyd & Vale operates as a selective American dealer and operating-support company for small production businesses. Our catalog reflects deliberate selection: equipment, consumables, and shop tools chosen against defined operating standards. The standards below describe how we evaluate products before listing them and how we maintain the catalog over time.",
  standards: [
    {
      id: "standard-1",
      heading: "1. Production-sensitive consumables are evaluated under real-use conditions.",
      body: "For consumables that directly affect production output — DTF film and powder, inks, transfer materials, pretreatment, and adhesives — our standard is a minimum 30-day evaluation period under real or controlled production conditions. We assess release behavior, color stability, wash performance, substrate compatibility, and handling characteristics across multiple variables. Products that don't perform consistently against our criteria are not listed.",
    },
    {
      id: "standard-2",
      heading: "2. We list equipment we can technically support.",
      body: "Every machine in our equipment catalog is paired with defined technical support — setup guidance, troubleshooting, and parts coordination. Our standard response window for products sold directly through Lloyd & Vale is within 48 hours during business days, within the documented support scope for each product. This is why our equipment selection is deliberately focused rather than broad.",
    },
    {
      id: "standard-3",
      heading: "3. We curate rather than aggregate.",
      body: "We don't list multiple versions of the same product to fill catalog space. When more than one option appears in a category, it's because each one serves a distinct use case we've identified through evaluation. Curation is part of the product we offer.",
    },
    {
      id: "standard-4",
      heading: "4. Selection reflects operating standards, not margin opportunities.",
      body: "We list products we would specify for serious production use. This applies equally to consumables, equipment, shop setup essentials, and shop control tools. It's a standard we apply consistently across categories.",
    },
    {
      id: "standard-5",
      heading: "5. Product limitations are documented.",
      body: "Every consumable has operating conditions. Every machine has trade-offs. Where we have evaluation data on temperature sensitivity, substrate restrictions, throughput characteristics, or known failure modes, we document them on the product page. Operators buying for production benefit from visible trade-offs at the point of decision.",
    },
    {
      id: "standard-6",
      heading: "6. The catalog is reviewed on a defined schedule.",
      body: "We conduct a full catalog review twice per year. Products that no longer meet our evaluation criteria — due to supplier changes, performance drift, or the availability of better alternatives — are removed, replaced, or noted accordingly. Selection is treated as an ongoing operational responsibility.",
    },
    {
      id: "standard-7",
      heading: "7. Scope is part of selection.",
      body: "What we don't carry is part of how we operate. Lloyd & Vale focuses on what we can evaluate, stock, and support within our defined scope. We don't position ourselves as a full-line catalog, and we're direct about it.",
    },
  ],
  closing: {
    before: "If you'd like to understand a specific selection decision — why we carry a product, why we don't, or why we replaced one — ",
    linkLabel: "contact us",
    linkHref: "/contact",
    after: ". We'll answer plainly.",
  },
} as const;
