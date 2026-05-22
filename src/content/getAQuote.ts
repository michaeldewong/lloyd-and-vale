/**
 * Get a Quote — Gate 1 Final Calibrated Form Specification.
 * Form fields, consent, CRM routing, and confirmation email are locked.
 */

export const getAQuotePage = {
  title: "Get a Quote",
  intro:
    "Tell us what you're specifying, sourcing, or working to solve. We'll respond within one business day with either a focused recommendation, a structured next step, or a direct note if your request falls outside our scope.",
  submitLabel: "Submit Request",
  consent: {
    before: "By submitting this form, you agree to be contacted by Lloyd & Vale about your inquiry. We will not share your information with third parties. See our ",
    privacyPolicyLabel: "Privacy Policy",
    privacyPolicyHref: "/privacy-policy",
    after: ".",
  },
  validation: {
    required: "Please complete this required field.",
    email: "Please enter a valid email address.",
  },
} as const;

export const getAQuoteFormSections = {
  aboutYou: {
    title: "About You",
    fields: {
      fullName: { label: "Full Name", type: "text" as const, required: true },
      businessName: { label: "Business Name", type: "text" as const, required: true },
      email: { label: "Email", type: "email" as const, required: true },
      phone: { label: "Phone", type: "tel" as const, required: false },
      cityState: { label: "City / State", type: "text" as const, required: true },
      websiteUrl: {
        label: "Website or Etsy/Shopify URL",
        type: "url" as const,
        required: false,
      },
    },
  },
  aboutOperation: {
    title: "About Your Operation",
    businessType: {
      label: "What best describes your business?",
      required: true,
      options: [
        "DTF Shop",
        "Embroidery Shop",
        "UV / UV-DTF Shop",
        "Laser / Engraving Shop",
        "Patch Maker / Custom Decorator",
        "Etsy / Shopify Seller",
        "Promotional Products Decorator",
        "Small Fulfillment Operator",
        "Custom Product Studio",
        "Starting Up (no production yet)",
        "Other",
      ] as const,
    },
    shopSize: {
      label: "Current shop size",
      required: true,
      options: ["Solo operator", "2–5 people", "6–15 people", "15+ people"] as const,
    },
    productionDuration: {
      label: "How long have you been in production?",
      required: true,
      options: [
        "Not yet — planning to start",
        "Under 1 year",
        "1–3 years",
        "3+ years",
      ] as const,
    },
  },
  lookingFor: {
    title: "What You're Looking For",
    interests: {
      label: "What are you looking for?",
      required: true,
      options: [
        "Equipment",
        "Consumables",
        "Shop Setup Essentials",
        "Shop Control Tools",
        "Starter Kits",
        "Training or Guides",
        "Technical Support / Consultation",
        "Discussion before specifying",
      ] as const,
    },
    solvingSpecifying: {
      label: "Tell us about what you're solving or specifying",
      required: true,
      placeholder:
        "Example: Specifying a DTF setup for a 2-person studio. Currently outsourcing transfers, bringing printing in-house at ~30–50 shirts per week.",
    },
    budgetRange: {
      label: "Budget range",
      required: false,
      options: [
        "Under $1,000",
        "$1,000–$5,000",
        "$5,000–$15,000",
        "$15,000–$50,000",
        "$50,000+",
        "Prefer to discuss",
      ] as const,
    },
    timeline: {
      label: "Timeline",
      required: false,
      options: [
        "Researching",
        "Within 1 month",
        "Within 1–3 months",
        "Within 3–6 months",
      ] as const,
    },
  },
  contactPreference: {
    title: "Contact Preference",
    preferredMethod: {
      label: "Preferred contact method",
      required: true,
      options: ["Email", "Phone", "Either"] as const,
    },
    anythingElse: {
      label: "Anything else we should know?",
      required: false,
    },
  },
} as const;

/** CRM routing logic — internal only; not displayed to visitors. */
export const getAQuoteCrmRouting = [
  {
    tier: "A" as const,
    name: "High-fit, near-term",
    signal: "1+ year in production, defined budget, 1–3 month timeline",
    response: "Within one business day, human follow-up",
    routing: "Core team / Michael",
  },
  {
    tier: "B" as const,
    name: "Builder",
    signal: "In production, small scale, upgrading or expanding",
    response: "Within one business day, configuration evaluation + selection guidance",
    routing: "Sales lead",
  },
  {
    tier: "C" as const,
    name: "Starter",
    signal: "Pre-production or research stage",
    response:
      "Within one business day, Starter Kit / Selection Standards / Operator Notes resources",
    routing: "Automated follow-up + sales monitoring",
  },
  {
    tier: "D" as const,
    name: "Out of scope",
    signal: "Business type or need outside Lloyd & Vale scope",
    response: "Direct reply within one business day, useful redirect",
    routing: "No active pipeline placement",
  },
] as const;

/** Automated confirmation email — for future transactional email integration. */
export const getAQuoteConfirmationEmail = {
  subject: "Request received — Lloyd & Vale",
  mergeFieldFirstName: "[First Name]",
  bodyParagraphs: [
    "Thanks for reaching out. We've received your request, and our team will follow up within one business day.",
    "A note on how we work:",
    "We evaluate each inquiry against what we can supply and support within our defined scope. If your request fits, we'll move directly into technical and commercial specifics. If it doesn't fit our scope, we'll say so and point you in a useful direction.",
    "A few resources you may find relevant:",
  ],
  resourceLinks: [
    {
      label: "Selection Standards",
      description: "How we evaluate and select what we carry.",
      href: "/about/selection-standards",
    },
    {
      label: "Operator Notes",
      description: "Practical notes from production work.",
      href: "/learn/operator-notes",
    },
    {
      label: "What Lloyd & Vale Does",
      description: "Our scope, services, and how we operate.",
      href: "/about/what-lloyd-and-vale-does",
    },
  ],
  signature: "— The Lloyd & Vale Team",
  tagline:
    "Lloyd & Vale | Equipment, supplies, setup tools, and technical support for serious small shops.",
} as const;
