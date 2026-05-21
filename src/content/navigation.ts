/**
 * Gate 1 information architecture — single source of truth for routes and navigation.
 * Do not add pages listed as out-of-scope for Gate 1.
 */

export const siteName = "Lloyd & Vale";

export type NavItem = {
  label: string;
  href: string;
};

/** Primary header navigation — order and labels are fixed for Gate 1. */
export const primaryNavigation: readonly NavItem[] = [
  { label: "Shop", href: "/shop" },
  { label: "Learn", href: "/learn" },
  { label: "Support", href: "/support" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const shopChildNavigation: readonly NavItem[] = [
  {
    label: "Shop Setup Essentials",
    href: "/shop/shop-setup-essentials",
  },
  {
    label: "Shop Control Tools",
    href: "/shop/shop-control-tools",
  },
  { label: "Consumables", href: "/shop/consumables" },
] as const;

export const learnChildNavigation: readonly NavItem[] = [
  {
    label: "Operator Note #1: Reducing DTF Reprints: A Workflow-Layout Case",
    href: "/learn/reducing-dtf-reprints-workflow-layout-case",
  },
] as const;

/**
 * Footer: same main pages as primary nav, plus approved child / utility links.
 * "Technical Support" links to /support (no separate /technical-support route).
 */
export const footerNavigation = {
  main: primaryNavigation,
  links: [
    ...shopChildNavigation,
    {
      label: "Operator Note #1",
      href: "/learn/reducing-dtf-reprints-workflow-layout-case",
    },
    { label: "Technical Support", href: "/support" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

/** Page titles for layout shells — labels only, no marketing copy. */
export const pageTitles = {
  home: "Home",
  shop: "Shop",
  shopSetupEssentials: "Shop Setup Essentials",
  shopControlTools: "Shop Control Tools",
  consumables: "Consumables",
  learn: "Learn",
  operatorNote1:
    "Operator Note #1: Reducing DTF Reprints: A Workflow-Layout Case",
  support: "Technical Support",
  events: "Events",
  about: "About",
  contact: "Contact",
} as const;
