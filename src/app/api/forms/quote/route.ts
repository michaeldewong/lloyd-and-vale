import {
  quoteAcknowledgmentBody,
  quoteNotificationFields,
  validateQuotePayload,
} from "@/lib/forms/quote";
import {
  GENERIC_FORM_ERROR,
  jsonError,
  jsonSuccess,
  logFormFailure,
  VALIDATION_MESSAGES,
} from "@/lib/forms/apiResponse";
import {
  formatLabeledBody,
  resolveSourceUrl,
  sendFormEmails,
  submissionTimestamp,
} from "@/lib/forms/email";
import { isHoneypotTripped } from "@/lib/forms/honeypot";
import { parseJsonBody } from "@/lib/forms/validate";

export async function POST(request: Request) {
  const body = await parseJsonBody(request);
  if (!body) {
    return jsonError(VALIDATION_MESSAGES.invalidPayload);
  }

  if (isHoneypotTripped("quote", body)) {
    return jsonSuccess();
  }

  const validated = validateQuotePayload(body);
  if (!validated.ok) {
    return jsonError(validated.error);
  }

  const data = validated.data;
  const sourceUrl = resolveSourceUrl(request, body);
  const timestamp = submissionTimestamp();

  try {
    await sendFormEmails({
      kind: "quote",
      submitterEmail: data.email,
      notificationSummary: `${data.fullName} — ${data.businessName}`,
      notificationBody: formatLabeledBody(quoteNotificationFields(data), {
        timestamp,
        sourceUrl,
      }),
      acknowledgmentSubject: "Request received — Lloyd & Vale",
      acknowledgmentBody: quoteAcknowledgmentBody(data),
    });
    return jsonSuccess();
  } catch (error) {
    logFormFailure("quote", error);
    return jsonError(GENERIC_FORM_ERROR, 500);
  }
}
