import {
  supportAcknowledgmentBody,
  supportNotificationFields,
  validateSupportPayload,
} from "@/lib/forms/support";
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

  if (isHoneypotTripped("support", body)) {
    return jsonSuccess();
  }

  const validated = validateSupportPayload(body);
  if (!validated.ok) {
    return jsonError(validated.error);
  }

  const data = validated.data;
  const sourceUrl = resolveSourceUrl(request, body);
  const timestamp = submissionTimestamp();

  try {
    await sendFormEmails({
      kind: "support",
      submitterEmail: data.email,
      notificationSummary: `${data.fullName} — ${data.productSku}`,
      notificationBody: formatLabeledBody(supportNotificationFields(data), {
        timestamp,
        sourceUrl,
      }),
      acknowledgmentSubject: "Support request received — Lloyd & Vale",
      acknowledgmentBody: supportAcknowledgmentBody(data),
    });
    return jsonSuccess();
  } catch (error) {
    logFormFailure("support", error);
    return jsonError(GENERIC_FORM_ERROR, 500);
  }
}
