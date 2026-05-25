export const FORM_ENDPOINTS = {
  quote: "/api/forms/quote",
  support: "/api/forms/support",
} as const;

type SubmitFormResult =
  | { ok: true }
  | { ok: false; error: string };

export async function submitFormPayload(
  endpoint: string,
  payload: Record<string, unknown>,
): Promise<SubmitFormResult> {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await response.json()) as {
      success?: boolean;
      error?: string;
    };

    if (!response.ok || !data.success) {
      return {
        ok: false,
        error:
          typeof data.error === "string"
            ? data.error
            : "We could not submit your request. Please try again or email support@lloydvale.com.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error:
        "We could not submit your request. Please try again or email support@lloydvale.com.",
    };
  }
}
