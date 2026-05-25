import type { Metadata } from "next";

export const SITE_NAME = "Lloyd & Vale";
export const SITE_URL = "https://www.lloydvale.com";
export const DEFAULT_OG_IMAGE = "/og/og-default.png";

type BuildPageMetadataInput = {
  pageName: string;
  description: string;
  path: string;
};

function toCanonical(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

export function buildPageMetadata({
  pageName,
  description,
  path,
}: BuildPageMetadataInput): Metadata {
  const title = `${pageName} — ${SITE_NAME}`;
  const url = toCanonical(path);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Lloyd & Vale",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
