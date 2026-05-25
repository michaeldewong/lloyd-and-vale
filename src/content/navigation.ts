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

/** Site-wide header CTA — separate from primary navigation. */
export const headerGetAQuoteCta = {
  label: "Get a Quote",
  href: "/get-a-quote",
} as const;

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

export type FooterColumn = {
  title: string;
  links: readonly NavItem[];
};

/** Gate 1 site-wide footer — column titles and link targets only. */
export const gate1FooterColumns: readonly FooterColumn[] = [
  {
    title: "Industries",
    links: [
      { label: "DTF Shops", href: "/industries/dtf-shops" },
      { label: "Embroidery Shops", href: "/industries/embroidery-shops" },
      {
        label: "Etsy / Shopify Sellers",
        href: "/industries/etsy-shopify-sellers",
      },
      {
        label: "Promotional Decorators",
        href: "/industries/promotional-decorators",
      },
    ],
  },
  {
    title: "Standards & Selection",
    links: [
      {
        label: "Selection Standards",
        href: "/about/selection-standards",
      },
      { label: "Product Evaluation", href: "/about/product-evaluation" },
      {
        label: "Why Selection Matters",
        href: "/about/why-selection-matters",
      },
    ],
  },
  {
    title: "Content",
    links: [
      { label: "Operator Notes", href: "/learn/operator-notes" },
      { label: "Field Reports", href: "/learn/field-reports" },
      { label: "Supplier Notes", href: "/learn/supplier-notes" },
      { label: "Blog", href: "/learn/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Get a Quote", href: "/get-a-quote" },
      { label: "Support", href: "/support" },
    ],
  },
] as const;

/** Legal sub-footer beneath the main footer columns. */
export const legalFooterLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Accessibility Statement", href: "/accessibility-statement" },
] as const;

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
