/**
 * Gate 1 Shop landing page — routing layer only.
 * No locked hero, intro, or final CTA copy. Do not invent marketing copy.
 */

export const shopPageHeader = {
  eyebrow: "Shop",
  title: "Shop",
} as const;

/** Five category blocks — order and copy locked; same descriptions as home Section 3. */
export const shopCategories = [
  {
    title: "Equipment",
    description:
      "Production-grade DTF, UV, heat press, embroidery, laser, cutting, and finishing systems. Equipment we list is paired with documented technical support, parts coordination, and a defined response standard. Gate 1 equipment inquiries are handled through Get a Quote.",
    href: "/shop/equipment",
    image: {
      filename: "category-equipment.jpg",
      description:
        "in-context shot of a machine in a working shop, not a manufacturer beauty shot. This avoids implying a specific in-stock listing while keeping the category visually anchored.",
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
] as const;
