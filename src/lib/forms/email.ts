import { Resend } from "resend";
import type { FormKind } from "@/lib/forms/honeypot";

const SUPPORT_REPLY_TO = "support@lloydvale.com";

const SUBJECT_PREFIX: Record<FormKind, string> = {
  quote: "[Quote]",
  support: "[Support]",
};

type EmailEnv = {
  apiKey: string;
  supportEmail: string;
  notificationsFrom: string;
};

function getEmailEnv(): EmailEnv | null {
  const apiKey = process.env.RESEND_API_KEY;
  const supportEmail = process.env.SUPPORT_EMAIL;
  const notificationsFrom = process.env.NOTIFICATIONS_FROM;

  if (!apiKey || !supportEmail || !notificationsFrom) {
    return null;
  }

  return { apiKey, supportEmail, notificationsFrom };
}

export function formatLabeledBody(
  fields: readonly { label: string; value: string }[],
  meta: { timestamp: string; sourceUrl: string },
): string {
  const lines = fields.map(({ label, value }) => `${label}: ${value}`);
  lines.push(`Timestamp: ${meta.timestamp}`);
  lines.push(`Source URL: ${meta.sourceUrl}`);
  return lines.join("\n");
}

export async function sendFormEmails(options: {
  kind: FormKind;
  submitterEmail: string;
  notificationSummary: string;
  notificationBody: string;
  acknowledgmentSubject: string;
  acknowledgmentBody: string;
}): Promise<void> {
  const env = getEmailEnv();
  if (!env) {
    throw new Error("Form email environment is not configured.");
  }

  const resend = new Resend(env.apiKey);
  const prefix = SUBJECT_PREFIX[options.kind];
  const notificationSubject = `${prefix} ${options.notificationSummary}`;

  const notificationResult = await resend.emails.send({
    from: env.notificationsFrom,
    to: env.supportEmail,
    replyTo: options.submitterEmail,
    subject: notificationSubject,
    text: options.notificationBody,
  });

  if (notificationResult.error) {
    throw new Error(notificationResult.error.message);
  }

  const acknowledgmentResult = await resend.emails.send({
    from: env.notificationsFrom,
    to: options.submitterEmail,
    replyTo: SUPPORT_REPLY_TO,
    subject: options.acknowledgmentSubject,
    text: options.acknowledgmentBody,
  });

  if (acknowledgmentResult.error) {
    throw new Error(acknowledgmentResult.error.message);
  }
}

export function resolveSourceUrl(
  request: Request,
  body: Record<string, unknown>,
): string {
  const fromBody =
    typeof body.sourceUrl === "string" ? body.sourceUrl.trim() : "";
  if (fromBody.length > 0 && fromBody.length <= 500) {
    return fromBody;
  }
  return request.headers.get("referer") ?? "Unknown";
}

export function submissionTimestamp(): string {
  return new Date().toISOString();
}
