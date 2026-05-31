export type ShopSubcategory = {
  slug: string;
  name: string;
};

export const CATEGORY_SLUGS = [
  "equipment",
  "dry-media-transfer-supplies",
  "production-tools",
  "shop-setup-essentials",
  "shop-control-tools",
  "storage-organization",
  "packaging-fulfillment",
  "maintenance-calibration",
  "starter-kits",
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export type ShopCategory = {
  slug: CategorySlug;
  name: string;
  subcategories: readonly ShopSubcategory[];
};

export const CATEGORY_BY_SLUG = {
  "equipment": {
    slug: "equipment",
    name: "Equipment",
    // Equipment uses equipment types as its organizing dimension; see equipmentTypes.ts.
    subcategories: [],
  },
  "dry-media-transfer-supplies": {
    slug: "dry-media-transfer-supplies",
    name: "Dry Media & Transfer Supplies",
    subcategories: [
      { slug: "dtf-media", name: "DTF Media" },
      { slug: "htv", name: "Heat Transfer Vinyl (HTV)" },
      { slug: "sublimation-media", name: "Sublimation Media" },
      { slug: "transfer-media", name: "Transfer Media" },
      { slug: "foil-transfer-media", name: "Foil Transfer Media" },
      { slug: "embroidery-media", name: "Embroidery Media" },
    ],
  },
  "production-tools": {
    slug: "production-tools",
    name: "Production Tools",
    subcategories: [
      { slug: "dtf-workflow-tools", name: "DTF Workflow Tools" },
      { slug: "press-heat-tools", name: "Press & Heat Tools" },
      { slug: "application-tools", name: "Application Tools" },
      { slug: "media-handling-storage", name: "Media Handling & Storage" },
      { slug: "laser-workstation-tools", name: "Laser Workstation Tools" },
      { slug: "embroidery-workflow-tools", name: "Embroidery Workflow Tools" },
      {
        slug: "screen-printing-production-tools",
        name: "Screen Printing Production Tools",
      },
      { slug: "pad-printing-tools", name: "Pad Printing Tools" },
      {
        slug: "cross-process-production-tools",
        name: "Cross-Process Production Tools",
      },
    ],
  },
  "shop-setup-essentials": {
    slug: "shop-setup-essentials",
    name: "Shop Setup Essentials",
    subcategories: [
      { slug: "floor-zone-marking", name: "Floor & Zone Marking" },
      { slug: "labels-signs", name: "Labels & Signs" },
      { slug: "sop-layout", name: "SOP & Layout" },
      {
        slug: "workstation-identification",
        name: "Workstation Identification",
      },
    ],
  },
  "shop-control-tools": {
    slug: "shop-control-tools",
    name: "Shop Control Tools",
    subcategories: [
      { slug: "inspection-qc", name: "Inspection & QC" },
      { slug: "measurement-tools", name: "Measurement Tools" },
      { slug: "order-flow-disposition", name: "Order Flow & Disposition" },
      { slug: "workflow-tracking", name: "Workflow Tracking" },
    ],
  },
  "storage-organization": {
    slug: "storage-organization",
    name: "Storage & Organization",
    subcategories: [
      { slug: "location-labels", name: "Location Labels" },
      {
        slug: "bin-shelving-organization",
        name: "Bin & Shelving Organization",
      },
      { slug: "tool-parts-storage", name: "Tool & Parts Storage" },
      {
        slug: "documentation-storage",
        name: "Documentation Storage",
      },
      { slug: "inventory-tagging", name: "Inventory Tagging" },
    ],
  },
  "packaging-fulfillment": {
    slug: "packaging-fulfillment",
    name: "Packaging & Fulfillment",
    subcategories: [
      { slug: "packing-station-setup", name: "Packing Station Setup" },
      {
        slug: "hangtag-relabeling-tools",
        name: "Hangtag & Relabeling Tools",
      },
      { slug: "folding-finishing-aids", name: "Folding & Finishing Aids" },
      {
        slug: "order-routing-verification",
        name: "Order Routing & Verification",
      },
      {
        slug: "outbound-zone-organization",
        name: "Outbound Zone Organization",
      },
      {
        slug: "label-printers-tools",
        name: "Label Printers & Tools",
      },
    ],
  },
  "maintenance-calibration": {
    slug: "maintenance-calibration",
    name: "Maintenance & Calibration",
    subcategories: [
      { slug: "calibration-tools", name: "Calibration Tools" },
      {
        slug: "equipment-maintenance-tools",
        name: "Equipment Maintenance Tools",
      },
      {
        slug: "maintenance-logs-templates",
        name: "Maintenance Logs & Templates",
      },
      {
        slug: "mechanical-lubricants-cleaning",
        name: "Mechanical Lubricants & Cleaning Tools",
      },
      {
        slug: "workflow-specific-ppe",
        name: "Workflow-Specific PPE",
      },
      {
        slug: "replacement-parts",
        name: "Replacement Parts",
      },
    ],
  },
  "starter-kits": {
    slug: "starter-kits",
    name: "Starter Kits",
    subcategories: [
      {
        slug: "production-workstation-kits",
        name: "Production Workstation Kits",
      },
      { slug: "qc-inspection-kits", name: "QC & Inspection Kits" },
      { slug: "order-flow-kits", name: "Order Flow Kits" },
      {
        slug: "workstation-layout-kits",
        name: "Workstation Layout Kits",
      },
    ],
  },
} as const satisfies Record<CategorySlug, ShopCategory>;

export const CATEGORIES: readonly ShopCategory[] = CATEGORY_SLUGS.map(
  (slug) => CATEGORY_BY_SLUG[slug],
);

export const ORDERED_CATEGORY_SLUGS: readonly CategorySlug[] = CATEGORY_SLUGS;

export function getCategoryBySlug(slug: CategorySlug): ShopCategory {
  return CATEGORY_BY_SLUG[slug];
}
