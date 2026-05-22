/**
 * Operator Notes sub-section landing — Gate 1 placeholder / routing layer.
 * Copy sourced from learn.ts and operatorNoteReducingDtfReprints.ts.
 */

import { learnPage } from "@/content/learn";
import { operatorNote1 } from "@/content/operatorNoteReducingDtfReprints";

const operatorNotesBlock = learnPage.subsections[0];

export const operatorNotesPage = {
  eyebrow: "Learn / Operator Notes",
  title: operatorNotesBlock.title,
  description: operatorNotesBlock.description,
  thumbnail: operatorNotesBlock.image,
  featuredArticle: {
    title: operatorNote1.title,
    href: "/learn/reducing-dtf-reprints-workflow-layout-case",
    deck: operatorNote1.deck,
  },
} as const;
