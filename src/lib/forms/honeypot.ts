export const FORM_HONEYPOT_FIELDS = {
  quote: "quoteReferrerCode",
  support: "supportTicketRef",
} as const;

export type FormKind = keyof typeof FORM_HONEYPOT_FIELDS;

export function isHoneypotTripped(
  kind: FormKind,
  body: Record<string, unknown>,
): boolean {
  const field = FORM_HONEYPOT_FIELDS[kind];
  const value = body[field];
  return typeof value === "string" && value.trim().length > 0;
}
