import type { MetadataRoute } from "next";
import {
  consumablesChildPages,
  shopControlToolsChildPages,
  shopSetupEssentialsChildPages,
} from "@/content/gate1CategoryChildPages";
import { SITE_URL } from "@/lib/seo/metadata";

const staticRoutes = [
  "/",
  "/shop",
  "/shop/equipment",
  "/shop/consumables",
  "/shop/shop-setup-essentials",
  "/shop/shop-control-tools",
  "/shop/starter-kits",
  "/shop/starter-kits/dtf-shop-setup-kit",
  "/shop/starter-kits/embroidery-shop-setup-kit",
  "/shop/starter-kits/etsy-shopify-production-kit",
  "/shop/starter-kits/qc-station-setup-kit",
  "/shop/starter-kits/5s-starter-kit",
  "/learn",
  "/learn/operator-notes",
  "/learn/reducing-dtf-reprints-workflow-layout-case",
  "/learn/field-reports",
  "/learn/guides-and-checklists",
  "/learn/courses-and-workshops",
  "/support",
  "/support/submit-a-support-request",
  "/events",
  "/events/trade-shows",
  "/events/open-houses",
  "/events/field-visits",
  "/events/roundtables-and-summits",
  "/about",
  "/about/what-lloyd-and-vale-does",
  "/about/who-we-serve",
  "/about/selection-standards",
  "/contact",
  "/get-a-quote",
  "/privacy-policy",
] as const;

function expandChildRoutes(prefix: string, slugs: readonly string[]) {
  return slugs.map((slug) => `${prefix}/${slug}`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const categoryChildRoutes = [
    ...expandChildRoutes(
      "/shop/shop-setup-essentials",
      Object.keys(shopSetupEssentialsChildPages),
    ),
    ...expandChildRoutes(
      "/shop/shop-control-tools",
      Object.keys(shopControlToolsChildPages),
    ),
    ...expandChildRoutes("/shop/consumables", Object.keys(consumablesChildPages)),
  ];

  const routes = [...staticRoutes, ...categoryChildRoutes];

  return routes.map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    lastModified,
  }));
}
