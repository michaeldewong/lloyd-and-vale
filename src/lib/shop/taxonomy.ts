import {
  CATEGORIES,
  CATEGORY_BY_SLUG,
  CATEGORY_SLUGS,
  type CategorySlug,
} from "@/lib/shop/categories";
import {
  ORDERED_PROCESS_TAGS,
  type ProcessTag,
} from "@/lib/shop/processes";
import {
  ORDERED_EQUIPMENT_TYPE_SLUGS,
  type EquipmentTypeSlug,
} from "@/lib/shop/equipmentTypes";

type CategoryDataset = typeof CATEGORY_BY_SLUG;

// Layer 1 + 2 are structural taxonomy (where a SKU lives).
export type Layer1CategorySlug = CategorySlug;
export type Layer2SubcategorySlug =
  CategoryDataset[keyof CategoryDataset]["subcategories"][number]["slug"];

// Layer 3 + 4 are descriptive taxonomy (what a SKU is / associates with).
export type Layer3ProcessTag = ProcessTag;
export type Layer4EquipmentAssociationTag = EquipmentTypeSlug;

// No 5th taxonomy layer is permitted.
export type SkuTaxonomy = {
  category: Layer1CategorySlug;
  subcategory: Layer2SubcategorySlug;
  processTags: Layer3ProcessTag[];
  equipmentAssociations: Layer4EquipmentAssociationTag[];
};

const categorySlugSet = new Set<string>(CATEGORY_SLUGS);
const subcategorySlugSet = new Set<string>(
  CATEGORIES.flatMap((category) =>
    category.subcategories.map((subcategory) => subcategory.slug),
  ),
);
const processTagSet = new Set<string>(ORDERED_PROCESS_TAGS);
const equipmentAssociationSet = new Set<string>(ORDERED_EQUIPMENT_TYPE_SLUGS);

export function isValidCategorySlug(slug: string): slug is Layer1CategorySlug {
  return categorySlugSet.has(slug);
}

export function isValidSubcategorySlug(slug: string): slug is Layer2SubcategorySlug {
  return subcategorySlugSet.has(slug);
}

export function isValidProcessTag(tag: string): tag is Layer3ProcessTag {
  return processTagSet.has(tag);
}

export function isValidEquipmentAssociation(
  tag: string,
): tag is Layer4EquipmentAssociationTag {
  return equipmentAssociationSet.has(tag);
}

export function validateSubcategoryBelongsToCategory(
  category: Layer1CategorySlug,
  subcategory: Layer2SubcategorySlug,
): boolean {
  return CATEGORY_BY_SLUG[category].subcategories.some(
    (item) => item.slug === subcategory,
  );
}

export function isKnownCategorySlug(slug: string): slug is Layer1CategorySlug {
  return isValidCategorySlug(slug);
}

export function isKnownSubcategorySlug(slug: string): slug is Layer2SubcategorySlug {
  return isValidSubcategorySlug(slug);
}

export function isKnownProcessTag(tag: string): tag is Layer3ProcessTag {
  return isValidProcessTag(tag);
}

export function isKnownEquipmentAssociation(
  tag: string,
): tag is Layer4EquipmentAssociationTag {
  return isValidEquipmentAssociation(tag);
}
