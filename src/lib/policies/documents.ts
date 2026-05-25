import { readFileSync } from "node:fs";
import { join } from "node:path";

export type PolicySlug =
  | "privacy-policy"
  | "terms-of-use"
  | "accessibility-statement";

type PolicyFrontmatter = {
  slug: string;
  title: string;
  lastUpdated: string;
};

export type PolicyDocument = {
  slug: PolicySlug;
  title: string;
  lastUpdated: string;
  markdownBody: string;
  metaDescription: string;
};

const POLICY_FILE_NAMES: Record<PolicySlug, string> = {
  "privacy-policy": "privacy-policy.md",
  "terms-of-use": "terms-of-use.md",
  "accessibility-statement": "accessibility-statement.md",
};

const POLICIES_DIR = join(process.cwd(), "content", "policies");

function parseFrontmatter(raw: string): { frontmatter: PolicyFrontmatter; body: string } {
  if (!raw.startsWith("---\n")) {
    throw new Error("Policy markdown must start with frontmatter.");
  }

  const frontmatterEnd = raw.indexOf("\n---\n", 4);
  if (frontmatterEnd === -1) {
    throw new Error("Policy markdown frontmatter is not closed.");
  }

  const frontmatterText = raw.slice(4, frontmatterEnd);
  const body = raw.slice(frontmatterEnd + 5).trim();
  const frontmatterLines = frontmatterText.split("\n");

  const frontmatter: Partial<PolicyFrontmatter> = {};

  for (const line of frontmatterLines) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();

    if (key === "slug" || key === "title" || key === "lastUpdated") {
      frontmatter[key] = value;
    }
  }

  if (!frontmatter.slug || !frontmatter.title || !frontmatter.lastUpdated) {
    throw new Error("Policy markdown frontmatter is missing required fields.");
  }

  return {
    frontmatter: frontmatter as PolicyFrontmatter,
    body,
  };
}

function firstPolicyParagraph(markdownBody: string): string {
  const lines = markdownBody.split(/\r?\n/);
  let currentParagraph: string[] = [];

  const flushParagraph = (): string | null => {
    if (currentParagraph.length === 0) return null;
    const paragraph = currentParagraph.join(" ").replace(/\s+/g, " ").trim();
    currentParagraph = [];
    if (!paragraph || paragraph.startsWith("**Last Updated:**")) {
      return null;
    }
    return paragraph;
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      const maybeParagraph = flushParagraph();
      if (maybeParagraph) return maybeParagraph;
      continue;
    }

    if (trimmed.startsWith("#") || trimmed.startsWith("- ")) {
      const maybeParagraph = flushParagraph();
      if (maybeParagraph) return maybeParagraph;
      continue;
    }

    currentParagraph.push(trimmed);
  }

  const maybeParagraph = flushParagraph();
  if (maybeParagraph) return maybeParagraph;

  throw new Error("Could not derive policy meta description from markdown body.");
}

export function getPolicyDocument(slug: PolicySlug): PolicyDocument {
  const fileName = POLICY_FILE_NAMES[slug];
  const filePath = join(POLICIES_DIR, fileName);
  const raw = readFileSync(filePath, "utf8").replace(/\r\n/g, "\n");
  const { frontmatter, body } = parseFrontmatter(raw);

  return {
    slug,
    title: frontmatter.title,
    lastUpdated: frontmatter.lastUpdated,
    markdownBody: body,
    metaDescription: firstPolicyParagraph(body),
  };
}
