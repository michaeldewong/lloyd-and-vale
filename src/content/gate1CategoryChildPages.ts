import type { Gate1SubpageContent } from "@/components/layout/Gate1Subpage";

function categoryChildPage(
  parentEyebrow: string,
  title: string,
): Gate1SubpageContent {
  return {
    eyebrow: `${parentEyebrow} / ${title}`,
    title,
  };
}

const shopSetupEssentialsEyebrow = "Shop / Shop Setup Essentials";
const shopControlToolsEyebrow = "Shop / Shop Control Tools";
const consumablesEyebrow = "Shop / Consumables";

/** Titles locked in shopSetupEssentialsSubcategories — placeholder only. */
export const shopSetupEssentialsChildPages = {
  "floor-marking": categoryChildPage(
    shopSetupEssentialsEyebrow,
    "Floor Marking",
  ),
  "zone-labels": categoryChildPage(shopSetupEssentialsEyebrow, "Zone Labels"),
  "station-signs-workflow-signs": categoryChildPage(
    shopSetupEssentialsEyebrow,
    "Station Signs and Workflow Signs",
  ),
  "sop-boards": categoryChildPage(shopSetupEssentialsEyebrow, "SOP Boards"),
  "storage-location-labels": categoryChildPage(
    shopSetupEssentialsEyebrow,
    "Storage and Location Labels",
  ),
} as const satisfies Record<string, Gate1SubpageContent>;

export type ShopSetupEssentialsChildSlug =
  keyof typeof shopSetupEssentialsChildPages;

/** Titles locked in shopControlToolsFamilies — placeholder only. */
export const shopControlToolsChildPages = {
  "measuring-tools": categoryChildPage(
    shopControlToolsEyebrow,
    "Measuring Tools",
  ),
  "alignment-tools": categoryChildPage(
    shopControlToolsEyebrow,
    "Alignment Tools",
  ),
  "weighing-and-scales": categoryChildPage(
    shopControlToolsEyebrow,
    "Weighing and Scales",
  ),
  "storage-and-bins": categoryChildPage(
    shopControlToolsEyebrow,
    "Storage and Bins",
  ),
  "job-trays": categoryChildPage(shopControlToolsEyebrow, "Job Trays"),
  "parts-drawers": categoryChildPage(shopControlToolsEyebrow, "Parts Drawers"),
  "qc-tools": categoryChildPage(shopControlToolsEyebrow, "QC Tools"),
  "heat-press-aids": categoryChildPage(
    shopControlToolsEyebrow,
    "Heat Press Aids",
  ),
} as const satisfies Record<string, Gate1SubpageContent>;

export type ShopControlToolsChildSlug = keyof typeof shopControlToolsChildPages;

/** Gate 1 catalog sub-category titles locked in consumablesGate1Catalog. */
export const consumablesCatalogChildPages = {
  "cleaning-supplies": categoryChildPage(
    consumablesEyebrow,
    "Cleaning Supplies",
  ),
  "packaging-consumables": categoryChildPage(
    consumablesEyebrow,
    "Packaging Consumables",
  ),
  "heat-press-aids": categoryChildPage(consumablesEyebrow, "Heat Press Aids"),
  labels: categoryChildPage(consumablesEyebrow, "Labels"),
  "wipes-scrapers-squeegees": categoryChildPage(
    consumablesEyebrow,
    "Wipes, Scrapers, Squeegees",
  ),
  "storage-basics": categoryChildPage(consumablesEyebrow, "Storage Basics"),
  "maintenance-basics": categoryChildPage(
    consumablesEyebrow,
    "Maintenance Basics",
  ),
} as const satisfies Record<string, Gate1SubpageContent>;

export type ConsumablesCatalogChildSlug =
  keyof typeof consumablesCatalogChildPages;

/** Production-sensitive overview titles locked in consumablesProductionSensitive. */
export const consumablesEvaluationChildPages = {
  "dtf-film": categoryChildPage(consumablesEyebrow, "DTF Film"),
  "dtf-powder": categoryChildPage(consumablesEyebrow, "DTF Powder"),
  inks: categoryChildPage(consumablesEyebrow, "Inks"),
  pretreatment: categoryChildPage(consumablesEyebrow, "Pretreatment"),
  "transfer-materials": categoryChildPage(
    consumablesEyebrow,
    "Transfer Materials",
  ),
  adhesives: categoryChildPage(consumablesEyebrow, "Adhesives"),
} as const satisfies Record<string, Gate1SubpageContent>;

export type ConsumablesEvaluationChildSlug =
  keyof typeof consumablesEvaluationChildPages;

export const consumablesChildPages = {
  ...consumablesCatalogChildPages,
  ...consumablesEvaluationChildPages,
} as const satisfies Record<string, Gate1SubpageContent>;

export type ConsumablesChildSlug = keyof typeof consumablesChildPages;
