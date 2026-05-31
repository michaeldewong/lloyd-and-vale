import type { CategorySlug } from "@/lib/shop/categories";

export const PROCESS_GROUPS = {
  "print-transfer": "Print & Transfer",
  "screen-pad-specialty": "Screen, Pad & Specialty Press",
  "textile-decoration": "Textile Decoration",
  "laser-digital-fabrication": "Laser & Digital Fabrication",
  "packaging-fulfillment-proc": "Packaging & Fulfillment",
} as const;

export type ProcessGroupId = keyof typeof PROCESS_GROUPS;

export const ORDERED_PROCESS_GROUPS = [
  "print-transfer",
  "screen-pad-specialty",
  "textile-decoration",
  "laser-digital-fabrication",
  "packaging-fulfillment-proc",
] as const satisfies readonly ProcessGroupId[];

export type ProcessDefinition = {
  slug: string;
  name: string;
  group: ProcessGroupId;
  fallback_categories: readonly CategorySlug[];
  learn_link: string | null;
};

export const REGULAR_PROCESS_BY_SLUG = {
  "dtf": {
    slug: "dtf",
    name: "DTF",
    group: "print-transfer",
    fallback_categories: [
      "dry-media-transfer-supplies",
      "production-tools",
      "equipment",
      "starter-kits",
    ],
    learn_link: null,
  },
  "dtg": {
    slug: "dtg",
    name: "DTG",
    group: "print-transfer",
    fallback_categories: [
      "dry-media-transfer-supplies",
      "production-tools",
      "equipment",
    ],
    learn_link: null,
  },
  "uv-uv-dtf": {
    slug: "uv-uv-dtf",
    name: "UV / UV-DTF",
    group: "print-transfer",
    fallback_categories: [
      "dry-media-transfer-supplies",
      "production-tools",
      "equipment",
    ],
    learn_link: null,
  },
  "sublimation": {
    slug: "sublimation",
    name: "Sublimation",
    group: "print-transfer",
    fallback_categories: [
      "dry-media-transfer-supplies",
      "production-tools",
      "equipment",
    ],
    learn_link: null,
  },
  "heat-transfer": {
    slug: "heat-transfer",
    name: "Heat Transfer",
    group: "print-transfer",
    fallback_categories: [
      "dry-media-transfer-supplies",
      "production-tools",
      "equipment",
    ],
    learn_link: null,
  },
  "screen-printing": {
    slug: "screen-printing",
    name: "Screen Printing",
    group: "screen-pad-specialty",
    fallback_categories: [
      "production-tools",
      "equipment",
      "shop-control-tools",
    ],
    learn_link: null,
  },
  "pad-printing": {
    slug: "pad-printing",
    name: "Pad Printing",
    group: "screen-pad-specialty",
    fallback_categories: [
      "production-tools",
      "equipment",
    ],
    learn_link: null,
  },
  "letterpress": {
    slug: "letterpress",
    name: "Letterpress",
    group: "screen-pad-specialty",
    fallback_categories: [
      "production-tools",
      "equipment",
    ],
    learn_link: null,
  },
  "foil-embossing": {
    slug: "foil-embossing",
    name: "Foil / Embossing",
    group: "screen-pad-specialty",
    fallback_categories: [
      "dry-media-transfer-supplies",
      "production-tools",
      "equipment",
    ],
    learn_link: null,
  },
  "embroidery": {
    slug: "embroidery",
    name: "Embroidery",
    group: "textile-decoration",
    fallback_categories: [
      "production-tools",
      "equipment",
      "storage-organization",
    ],
    learn_link: null,
  },
  "chenille": {
    slug: "chenille",
    name: "Chenille / Towel Embroidery",
    group: "textile-decoration",
    fallback_categories: [
      "production-tools",
      "equipment",
    ],
    learn_link: null,
  },
  "applique": {
    slug: "applique",
    name: "Appliqué",
    group: "textile-decoration",
    fallback_categories: [
      "production-tools",
      "dry-media-transfer-supplies",
    ],
    learn_link: null,
  },
  "burnout-devore": {
    slug: "burnout-devore",
    name: "Burnout / Devoré",
    group: "textile-decoration",
    fallback_categories: [
      "production-tools",
      "dry-media-transfer-supplies",
    ],
    learn_link: null,
  },
  "3d-printing": {
    slug: "3d-printing",
    name: "3D Printing",
    group: "laser-digital-fabrication",
    fallback_categories: [
      "equipment",
      "production-tools",
    ],
    learn_link: null,
  },
  "laser": {
    slug: "laser",
    name: "Laser",
    group: "laser-digital-fabrication",
    fallback_categories: [
      "equipment",
      "production-tools",
      "shop-control-tools",
      "maintenance-calibration",
    ],
    learn_link: null,
  },
  // "desktop-cnc" intentionally exists in both process and equipment-type namespaces.
  "desktop-cnc": {
    slug: "desktop-cnc",
    name: "Desktop CNC",
    group: "laser-digital-fabrication",
    fallback_categories: [
      "equipment",
      "production-tools",
    ],
    learn_link: null,
  },
  // Process slug "packaging" is distinct from category slug "packaging-fulfillment".
  "packaging": {
    slug: "packaging",
    name: "Packaging",
    group: "packaging-fulfillment-proc",
    fallback_categories: [
      "packaging-fulfillment",
      "shop-control-tools",
    ],
    learn_link: null,
  },
  "relabeling": {
    slug: "relabeling",
    name: "Relabeling / Hangtag Replacement",
    group: "packaging-fulfillment-proc",
    fallback_categories: ["packaging-fulfillment"],
    learn_link: null,
  },
  "automatic-folding": {
    slug: "automatic-folding",
    name: "Automatic Folding",
    group: "packaging-fulfillment-proc",
    fallback_categories: [
      "packaging-fulfillment",
      "equipment",
    ],
    learn_link: null,
  },
  "finishing": {
    slug: "finishing",
    name: "Finishing",
    group: "packaging-fulfillment-proc",
    fallback_categories: [
      "packaging-fulfillment",
      "production-tools",
    ],
    learn_link: null,
  },
  "small-fulfillment": {
    slug: "small-fulfillment",
    name: "Small Fulfillment",
    group: "packaging-fulfillment-proc",
    fallback_categories: [
      "packaging-fulfillment",
      "shop-control-tools",
    ],
    learn_link: null,
  },
} as const satisfies Record<string, ProcessDefinition>;

export type RegularProcessSlug = keyof typeof REGULAR_PROCESS_BY_SLUG;
export type ProcessTag = RegularProcessSlug | "cross-process";

export const CROSS_PROCESS_TAG = {
  slug: "cross-process",
  name: "Cross-Process",
  // Maintains schema parity with process entries; not shown in grouped landing output.
  group: "print-transfer",
  fallback_categories: [],
  learn_link: null,
} as const;

export const ORDERED_REGULAR_PROCESS_SLUGS = [
  "dtf",
  "dtg",
  "uv-uv-dtf",
  "sublimation",
  "heat-transfer",
  "screen-printing",
  "pad-printing",
  "letterpress",
  "foil-embossing",
  "embroidery",
  "chenille",
  "applique",
  "burnout-devore",
  "3d-printing",
  "laser",
  "desktop-cnc",
  "packaging",
  "relabeling",
  "automatic-folding",
  "finishing",
  "small-fulfillment",
] as const satisfies readonly RegularProcessSlug[];

export const ORDERED_PROCESS_TAGS = [
  ...ORDERED_REGULAR_PROCESS_SLUGS,
  "cross-process",
] as const satisfies readonly ProcessTag[];

export const REGULAR_PROCESSES: readonly ProcessDefinition[] =
  ORDERED_REGULAR_PROCESS_SLUGS.map((slug) => REGULAR_PROCESS_BY_SLUG[slug]);

export const PROCESS_GROUP_STRUCTURE = ORDERED_PROCESS_GROUPS.map((group) => ({
  group,
  label: PROCESS_GROUPS[group],
  processes: REGULAR_PROCESSES.filter((process) => process.group === group),
}));

export function getProcessBySlug(slug: ProcessTag) {
  if (slug === "cross-process") {
    return CROSS_PROCESS_TAG;
  }
  return REGULAR_PROCESS_BY_SLUG[slug];
}

export function getProcessesByGroup(group: ProcessGroupId): readonly ProcessDefinition[] {
  return REGULAR_PROCESSES.filter((process) => process.group === group);
}
