export const INQUIRY_TYPES = [
  { id: "request-availability", name: "Request Availability" },
  { id: "request-configuration", name: "Request Configuration" },
  { id: "compatibility-help", name: "Compatibility Help" },
  { id: "product-question", name: "Product Question" },
  { id: "post-purchase-support", name: "Post-Purchase Support" },
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number]["id"];

export function getInquiryTypeById(id: InquiryType) {
  return INQUIRY_TYPES.find((type) => type.id === id);
}
