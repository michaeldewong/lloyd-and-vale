// Equipment type slugs are a separate namespace from process slugs.
// dtf-equipment-workflow-systems / dtg-equipment / uv-uv-dtf-equipment / sublimation-equipment
// are not the same as dtf / dtg / uv-uv-dtf / sublimation process tags.
// "desktop-cnc" intentionally exists here and in processes.ts as separate concepts.
export type EquipmentType = {
  slug: string;
  name: string;
};

export const ORDERED_EQUIPMENT_TYPE_SLUGS = [
  "heat-press",
  "curing-drying",
  "workstation",
  "screen-printing-equipment",
  "pad-printing-equipment",
  "letterpress-equipment",
  "dtf-equipment-workflow-systems",
  "dtg-equipment",
  "uv-uv-dtf-equipment",
  "sublimation-equipment",
  "laser-system",
  "embroidery-machine",
  "3d-printer",
  "desktop-cnc",
  "packaging-equipment",
  "relabeling-equipment",
  "automatic-folding-equipment",
  "finishing-equipment",
  "mechanical-accessories",
] as const;

export type EquipmentTypeSlug = (typeof ORDERED_EQUIPMENT_TYPE_SLUGS)[number];

export const EQUIPMENT_TYPE_BY_SLUG = {
  "heat-press": {
    slug: "heat-press",
    name: "Heat Press",
  },
  "curing-drying": {
    slug: "curing-drying",
    name: "Curing / Drying",
  },
  "workstation": {
    slug: "workstation",
    name: "Workstation",
  },
  "screen-printing-equipment": {
    slug: "screen-printing-equipment",
    name: "Screen Printing Equipment",
  },
  "pad-printing-equipment": {
    slug: "pad-printing-equipment",
    name: "Pad Printing Equipment",
  },
  "letterpress-equipment": {
    slug: "letterpress-equipment",
    name: "Letterpress Equipment",
  },
  "dtf-equipment-workflow-systems": {
    slug: "dtf-equipment-workflow-systems",
    name: "DTF Equipment & Workflow Systems",
  },
  "dtg-equipment": {
    slug: "dtg-equipment",
    name: "DTG Equipment",
  },
  "uv-uv-dtf-equipment": {
    slug: "uv-uv-dtf-equipment",
    name: "UV / UV-DTF Equipment",
  },
  "sublimation-equipment": {
    slug: "sublimation-equipment",
    name: "Sublimation Equipment",
  },
  "laser-system": {
    slug: "laser-system",
    name: "Laser System",
  },
  "embroidery-machine": {
    slug: "embroidery-machine",
    name: "Embroidery Machine",
  },
  "3d-printer": {
    slug: "3d-printer",
    name: "3D Printer",
  },
  "desktop-cnc": {
    slug: "desktop-cnc",
    name: "Desktop CNC",
  },
  "packaging-equipment": {
    slug: "packaging-equipment",
    name: "Packaging Equipment",
  },
  "relabeling-equipment": {
    slug: "relabeling-equipment",
    name: "Relabeling Equipment",
  },
  "automatic-folding-equipment": {
    slug: "automatic-folding-equipment",
    name: "Automatic Folding Equipment",
  },
  "finishing-equipment": {
    slug: "finishing-equipment",
    name: "Finishing Equipment",
  },
  "mechanical-accessories": {
    slug: "mechanical-accessories",
    name: "Mechanical Accessories",
  },
} as const satisfies Record<EquipmentTypeSlug, EquipmentType>;

export const EQUIPMENT_TYPES: readonly EquipmentType[] =
  ORDERED_EQUIPMENT_TYPE_SLUGS.map((slug) => EQUIPMENT_TYPE_BY_SLUG[slug]);

export function getEquipmentTypeBySlug(slug: EquipmentTypeSlug): EquipmentType {
  return EQUIPMENT_TYPE_BY_SLUG[slug];
}
