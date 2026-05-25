export const FIELD_LIMITS = {
  shortText: 200,
  email: 254,
  phone: 50,
  url: 500,
  sku: 200,
  textarea: 8000,
  select: 120,
  sourceUrl: 500,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > FIELD_LIMITS.email) {
    return false;
  }
  return EMAIL_PATTERN.test(trimmed);
}

export function trimToMax(
  value: unknown,
  maxLength: number,
): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (trimmed.length === 0) return undefined;
  if (trimmed.length > maxLength) return undefined;
  return trimmed;
}

export function requireString(
  value: unknown,
  maxLength: number,
): string | null {
  const trimmed = trimToMax(value, maxLength);
  return trimmed ?? null;
}

export function optionalString(
  value: unknown,
  maxLength: number,
): string | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (trimmed.length === 0) return undefined;
  if (trimmed.length > maxLength) return undefined;
  return trimmed;
}

export type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

export function validationError(message: string): ValidationResult<never> {
  return { ok: false, error: message };
}

export async function parseJsonBody(
  request: Request,
): Promise<Record<string, unknown> | null> {
  try {
    const body = (await request.json()) as unknown;
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return null;
    }
    return body as Record<string, unknown>;
  } catch {
    return null;
  }
}

export function firstNameFromFullName(fullName: string): string {
  const part = fullName.trim().split(/\s+/)[0];
  return part || "there";
}
