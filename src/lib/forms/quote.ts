import { getAQuoteFormSections } from "@/content/getAQuote";
import {
  FIELD_LIMITS,
  firstNameFromFullName,
  isValidEmail,
  optionalString,
  requireString,
  type ValidationResult,
  validationError,
} from "@/lib/forms/validate";

const INTEREST_OPTIONS = getAQuoteFormSections.lookingFor.interests.options;
const BUSINESS_TYPE_OPTIONS = getAQuoteFormSections.aboutOperation.businessType.options;
const SHOP_SIZE_OPTIONS = getAQuoteFormSections.aboutOperation.shopSize.options;
const PRODUCTION_DURATION_OPTIONS =
  getAQuoteFormSections.aboutOperation.productionDuration.options;
const BUDGET_OPTIONS = getAQuoteFormSections.lookingFor.budgetRange.options;
const TIMELINE_OPTIONS = getAQuoteFormSections.lookingFor.timeline.options;
const CONTACT_METHOD_OPTIONS =
  getAQuoteFormSections.contactPreference.preferredMethod.options;

export type QuotePayload = {
  fullName: string;
  businessName: string;
  email: string;
  phone?: string;
  cityState: string;
  websiteUrl?: string;
  businessType: string;
  shopSize: string;
  productionDuration: string;
  lookingFor: string[];
  solvingSpecifying: string;
  budgetRange?: string;
  timeline?: string;
  contactMethod: string;
  anythingElse?: string;
};

function isAllowedOption(value: string, options: readonly string[]): boolean {
  return options.includes(value);
}

function parseLookingFor(body: Record<string, unknown>): string[] | null {
  const raw = body.lookingFor;
  if (!Array.isArray(raw)) return null;
  const selected = raw
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter((item) => item.length > 0 && item.length <= FIELD_LIMITS.select);

  const valid = selected.filter((item) =>
    INTEREST_OPTIONS.includes(item as (typeof INTEREST_OPTIONS)[number]),
  );

  if (valid.length === 0) return null;
  return valid;
}

export function validateQuotePayload(
  body: Record<string, unknown>,
): ValidationResult<QuotePayload> {
  const fullName = requireString(body.fullName, FIELD_LIMITS.shortText);
  const businessName = requireString(body.businessName, FIELD_LIMITS.shortText);
  const email = requireString(body.email, FIELD_LIMITS.email);
  const cityState = requireString(body.cityState, FIELD_LIMITS.shortText);
  const businessType = requireString(body.businessType, FIELD_LIMITS.select);
  const shopSize = requireString(body.shopSize, FIELD_LIMITS.select);
  const productionDuration = requireString(
    body.productionDuration,
    FIELD_LIMITS.select,
  );
  const solvingSpecifying = requireString(
    body.solvingSpecifying,
    FIELD_LIMITS.textarea,
  );
  const contactMethod = requireString(body.contactMethod, FIELD_LIMITS.select);
  const lookingFor = parseLookingFor(body);

  const phone = optionalString(body.phone, FIELD_LIMITS.phone);
  const websiteUrl = optionalString(body.websiteUrl, FIELD_LIMITS.url);
  const budgetRange = optionalString(body.budgetRange, FIELD_LIMITS.select);
  const timeline = optionalString(body.timeline, FIELD_LIMITS.select);
  const anythingElse = optionalString(body.anythingElse, FIELD_LIMITS.textarea);

  if (
    !fullName ||
    !businessName ||
    !email ||
    !cityState ||
    !businessType ||
    !shopSize ||
    !productionDuration ||
    !solvingSpecifying ||
    !contactMethod ||
    !lookingFor
  ) {
    return validationError("Please complete all required fields.");
  }

  if (!isValidEmail(email)) {
    return validationError("Please enter a valid email address.");
  }

  if (
    !isAllowedOption(businessType, BUSINESS_TYPE_OPTIONS) ||
    !isAllowedOption(shopSize, SHOP_SIZE_OPTIONS) ||
    !isAllowedOption(productionDuration, PRODUCTION_DURATION_OPTIONS) ||
    !isAllowedOption(contactMethod, CONTACT_METHOD_OPTIONS) ||
    (budgetRange && !isAllowedOption(budgetRange, BUDGET_OPTIONS)) ||
    (timeline && !isAllowedOption(timeline, TIMELINE_OPTIONS))
  ) {
    return validationError("Please complete all required fields.");
  }

  return {
    ok: true,
    data: {
      fullName,
      businessName,
      email,
      phone,
      cityState,
      websiteUrl,
      businessType,
      shopSize,
      productionDuration,
      lookingFor,
      solvingSpecifying,
      budgetRange,
      timeline,
      contactMethod,
      anythingElse,
    },
  };
}

export function quoteNotificationFields(data: QuotePayload) {
  return [
    { label: "Full Name", value: data.fullName },
    { label: "Business Name", value: data.businessName },
    { label: "Email", value: data.email },
    ...(data.phone ? [{ label: "Phone", value: data.phone }] : []),
    { label: "City / State", value: data.cityState },
    ...(data.websiteUrl
      ? [{ label: "Website or Etsy/Shopify URL", value: data.websiteUrl }]
      : []),
    { label: "What best describes your business?", value: data.businessType },
    { label: "Current shop size", value: data.shopSize },
    {
      label: "How long have you been in production?",
      value: data.productionDuration,
    },
    { label: "What are you looking for?", value: data.lookingFor.join(", ") },
    {
      label: "Tell us about what you're solving or specifying",
      value: data.solvingSpecifying,
    },
    ...(data.budgetRange ? [{ label: "Budget range", value: data.budgetRange }] : []),
    ...(data.timeline ? [{ label: "Timeline", value: data.timeline }] : []),
    { label: "Preferred contact method", value: data.contactMethod },
    ...(data.anythingElse
      ? [{ label: "Anything else we should know?", value: data.anythingElse }]
      : []),
  ] as const;
}

export function quoteAcknowledgmentBody(data: QuotePayload): string {
  const firstName = firstNameFromFullName(data.fullName);
  return [
    `Hi ${firstName},`,
    "",
    "Thanks for reaching out. We've received your request, and our team will follow up within one business day.",
    "",
    "— The Lloyd & Vale Team",
  ].join("\n");
}
