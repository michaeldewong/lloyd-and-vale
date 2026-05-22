/**
 * Gate 1 clean placeholder sub-pages — title and locked link targets only.
 * No marketing copy, feeds, or “coming soon” language.
 */

export const whoWeServePage = {
  eyebrow: "About / Who We Serve",
  title: "Who We Serve",
} as const;

export const equipmentPage = {
  eyebrow: "Shop / Equipment",
  title: "Equipment",
} as const;

/** Kit titles and hrefs locked in shopSetupEssentials — titles and links only here. */
export const starterKitsPage = {
  eyebrow: "Shop / Starter Kits",
  title: "Starter Kits",
  links: [
    {
      title: "DTF Shop Setup Kit",
      href: "/shop/starter-kits/dtf-shop-setup-kit",
    },
    {
      title: "Embroidery Shop Setup Kit",
      href: "/shop/starter-kits/embroidery-shop-setup-kit",
    },
    {
      title: "Etsy / Shopify Production Kit",
      href: "/shop/starter-kits/etsy-shopify-production-kit",
    },
    {
      title: "QC Station Setup Kit",
      href: "/shop/starter-kits/qc-station-setup-kit",
    },
    {
      title: "5S Starter Kit for Small Shops",
      href: "/shop/starter-kits/5s-starter-kit",
    },
  ],
} as const;

export const guidesAndChecklistsPage = {
  eyebrow: "Learn / Guides & Checklists",
  title: "Guides & Checklists",
} as const;

export const fieldReportsPage = {
  eyebrow: "Learn / Field Reports",
  title: "Field Reports",
} as const;

export const coursesAndWorkshopsPage = {
  eyebrow: "Learn / Courses & Workshops",
  title: "Courses & Workshops",
} as const;

export const tradeShowsPage = {
  eyebrow: "Events / Trade Shows",
  title: "Trade Shows",
} as const;

export const openHousesPage = {
  eyebrow: "Events / Open Houses",
  title: "Open Houses",
} as const;

export const fieldVisitsPage = {
  eyebrow: "Events / Field Visits",
  title: "Field Visits",
} as const;

export const roundtablesAndSummitsPage = {
  eyebrow: "Events / Roundtables & Summits",
  title: "Roundtables & Summits",
} as const;
