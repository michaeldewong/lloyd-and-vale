/**
 * Submit a Support Request — Gate 1 Final Calibrated Form Specification.
 * Do not rewrite field labels, consent line, or confirmation copy.
 */

export const submitSupportRequestPage = {
  eyebrow: "Support / Submit a Support Request",
  title: "Submit a Support Request",
  submitLabel: "Submit Request",
  confirmationMessage:
    "We've received your support request. A substantive response follows within 48 business hours for requests inside documented scope.",
  consent: {
    before: "By submitting this form, you agree to be contacted by Lloyd & Vale about your support request. See our ",
    privacyPolicyLabel: "Privacy Policy",
    privacyPolicyHref: "/privacy-policy",
    after: ".",
  },
  validation: {
    required: "Please complete this required field.",
    email: "Please enter a valid email address.",
    filesMaxCount: "You may attach up to 5 files.",
    filesType: "Accepted formats: JPG, PNG, PDF, and HEIC.",
    filesSize: "Each file must be 10 MB or less. Total upload must be 50 MB or less.",
  },
  fileUpload: {
    label: "Photos / files",
    maxFiles: 5,
    maxFileBytes: 10 * 1024 * 1024,
    maxTotalBytes: 50 * 1024 * 1024,
    acceptMimeTypes: [
      "image/jpeg",
      "image/png",
      "application/pdf",
      "image/heic",
      "image/heif",
    ] as const,
    acceptExtensions: ".jpg,.jpeg,.png,.pdf,.heic,.heif",
    pendingBackendNote:
      "File upload is front-end only. Backend storage and attachment delivery are pending infrastructure.",
  },
  productSkuNote:
    "Product or SKU autocomplete is pending catalog readiness. Field accepts any text value.",
} as const;

export const submitSupportRequestFormSections = {
  aboutRequest: {
    title: "About the Request",
    fields: {
      fullName: { label: "Full Name", type: "text" as const, required: true },
      businessName: { label: "Business Name", type: "text" as const, required: true },
      email: { label: "Email", type: "email" as const, required: true },
      phone: { label: "Phone", type: "tel" as const, required: false },
      orderNumber: {
        label: "Order number, if applicable",
        type: "text" as const,
        required: false,
      },
    },
  },
  productWorkflow: {
    title: "Product or Workflow",
    fields: {
      productSku: {
        label: "Product or SKU involved",
        type: "text" as const,
        required: true,
      },
      starterKitName: {
        label: "Starter Kit name, if applicable",
        type: "text" as const,
        required: false,
      },
      equipment: { label: "Equipment involved", type: "text" as const, required: false },
      consumables: {
        label: "Consumables involved",
        type: "text" as const,
        required: false,
      },
    },
  },
  theIssue: {
    title: "The Issue",
    fields: {
      observing: {
        label: "Describe what you're observing",
        required: true,
        placeholder:
          "Example: Inconsistent DTF film release on cotton blends over the last two weeks. Hot peel film, standard cure cycle, no recent equipment changes.",
      },
      productionContext: {
        label: "Production context",
        required: false,
        placeholder:
          "Volume, substrates, environmental conditions, any recent changes.",
      },
      alreadyTried: {
        label: "What you've already tried",
        required: false,
        placeholder: "Steps already taken, results, hypotheses tested.",
      },
    },
  },
  attachments: {
    title: "Attachments",
  },
  contactPreference: {
    title: "Contact Preference",
    preferredMethod: {
      label: "Preferred contact method",
      required: true,
      options: ["Email", "Phone", "Either"] as const,
    },
  },
} as const;

/** Automated confirmation email — for future transactional email integration. Not sent at Gate 1. */
export const submitSupportRequestConfirmationEmail = {
  subject: "Support request received — Lloyd & Vale",
  mergeFieldFirstName: "[First Name]",
  greeting: "Hi [First Name],",
  bodyParagraphs: [
    "We've received your support request. A substantive response follows within 48 business hours for requests inside documented scope.",
    "If your request involves a product not sold through Lloyd & Vale, we'll respond with what we can address and identify clearly what falls outside our scope.",
  ],
  signature: "— The Lloyd & Vale Team",
} as const;
