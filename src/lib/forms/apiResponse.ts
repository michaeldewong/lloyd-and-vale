import type { FormKind } from "@/lib/forms/honeypot";

export function jsonSuccess() {
  return Response.json({ success: true });
}

export function jsonError(message: string, status = 400) {
  return Response.json({ success: false, error: message }, { status });
}

export function logFormFailure(kind: FormKind, error: unknown) {
  const message = error instanceof Error ? error.message : "Unknown error";
  console.error(`[forms/${kind}] submission failed:`, message);
}

export const GENERIC_FORM_ERROR =
  "We could not submit your request. Please try again or email support@lloydvale.com.";

export const VALIDATION_MESSAGES = {
  invalidPayload: "Invalid form submission.",
  required: "Please complete all required fields.",
  email: "Please enter a valid email address.",
  fieldLength: "One or more fields exceed the allowed length.",
} as const;
