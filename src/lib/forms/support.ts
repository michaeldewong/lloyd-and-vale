import { submitSupportRequestFormSections } from "@/content/submitSupportRequest";
import {
  FIELD_LIMITS,
  firstNameFromFullName,
  isValidEmail,
  optionalString,
  requireString,
  type ValidationResult,
  validationError,
} from "@/lib/forms/validate";

const CONTACT_METHOD_OPTIONS =
  submitSupportRequestFormSections.contactPreference.preferredMethod.options;

export type SupportPayload = {
  fullName: string;
  businessName: string;
  email: string;
  phone?: string;
  orderNumber?: string;
  productSku: string;
  starterKitName?: string;
  equipment?: string;
  consumables?: string;
  observing: string;
  productionContext?: string;
  alreadyTried?: string;
  contactMethod: string;
};

function isAllowedContactMethod(value: string): boolean {
  return CONTACT_METHOD_OPTIONS.includes(
    value as (typeof CONTACT_METHOD_OPTIONS)[number],
  );
}

export function validateSupportPayload(
  body: Record<string, unknown>,
): ValidationResult<SupportPayload> {
  const fullName = requireString(body.fullName, FIELD_LIMITS.shortText);
  const businessName = requireString(body.businessName, FIELD_LIMITS.shortText);
  const email = requireString(body.email, FIELD_LIMITS.email);
  const productSku = requireString(body.productSku, FIELD_LIMITS.sku);
  const observing = requireString(body.observing, FIELD_LIMITS.textarea);
  const contactMethod = requireString(body.contactMethod, FIELD_LIMITS.select);

  const phone = optionalString(body.phone, FIELD_LIMITS.phone);
  const orderNumber = optionalString(body.orderNumber, FIELD_LIMITS.shortText);
  const starterKitName = optionalString(body.starterKitName, FIELD_LIMITS.shortText);
  const equipment = optionalString(body.equipment, FIELD_LIMITS.shortText);
  const consumables = optionalString(body.consumables, FIELD_LIMITS.shortText);
  const productionContext = optionalString(
    body.productionContext,
    FIELD_LIMITS.textarea,
  );
  const alreadyTried = optionalString(body.alreadyTried, FIELD_LIMITS.textarea);

  if (
    !fullName ||
    !businessName ||
    !email ||
    !productSku ||
    !observing ||
    !contactMethod
  ) {
    return validationError("Please complete all required fields.");
  }

  if (!isValidEmail(email)) {
    return validationError("Please enter a valid email address.");
  }

  if (!isAllowedContactMethod(contactMethod)) {
    return validationError("Please complete all required fields.");
  }

  return {
    ok: true,
    data: {
      fullName,
      businessName,
      email,
      phone,
      orderNumber,
      productSku,
      starterKitName,
      equipment,
      consumables,
      observing,
      productionContext,
      alreadyTried,
      contactMethod,
    },
  };
}

export function supportNotificationFields(data: SupportPayload) {
  return [
    { label: "Full Name", value: data.fullName },
    { label: "Business Name", value: data.businessName },
    { label: "Email", value: data.email },
    ...(data.phone ? [{ label: "Phone", value: data.phone }] : []),
    ...(data.orderNumber
      ? [{ label: "Order number, if applicable", value: data.orderNumber }]
      : []),
    { label: "Product or SKU involved", value: data.productSku },
    ...(data.starterKitName
      ? [{ label: "Starter Kit name, if applicable", value: data.starterKitName }]
      : []),
    ...(data.equipment ? [{ label: "Equipment involved", value: data.equipment }] : []),
    ...(data.consumables
      ? [{ label: "Consumables involved", value: data.consumables }]
      : []),
    { label: "Describe what you're observing", value: data.observing },
    ...(data.productionContext
      ? [{ label: "Production context", value: data.productionContext }]
      : []),
    ...(data.alreadyTried
      ? [{ label: "What you've already tried", value: data.alreadyTried }]
      : []),
    { label: "Preferred contact method", value: data.contactMethod },
  ] as const;
}

export function supportAcknowledgmentBody(data: SupportPayload): string {
  const firstName = firstNameFromFullName(data.fullName);
  return [
    `Hi ${firstName},`,
    "",
    "We've received your support request. A substantive response follows within 48 business hours for requests inside documented scope.",
    "",
    "If you need to add photos or files, reply to this email and attach them.",
    "",
    "— The Lloyd & Vale Team",
  ].join("\n");
}
