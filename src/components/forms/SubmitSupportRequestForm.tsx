"use client";

import { useState } from "react";
import { FileUploadField } from "@/components/forms/FileUploadField";
import { FormLayout } from "@/components/forms/FormLayout";
import { HoneypotField } from "@/components/forms/HoneypotField";
import {
  fieldErrorClass,
  fieldInputClass,
  fieldLabelClass,
} from "@/components/forms/formStyles";
import { TextLink } from "@/components/layout/TextLink";
import { Button } from "@/components/ui/Button";
import {
  submitSupportRequestFormSections,
  submitSupportRequestPage,
} from "@/content/submitSupportRequest";
import { FORM_HONEYPOT_FIELDS } from "@/lib/forms/honeypot";
import { FORM_ENDPOINTS, submitFormPayload } from "@/lib/forms/submitClient";

type FormState = {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  orderNumber: string;
  productSku: string;
  starterKitName: string;
  equipment: string;
  consumables: string;
  observing: string;
  productionContext: string;
  alreadyTried: string;
  contactMethod: string;
};

const initialState: FormState = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  orderNumber: "",
  productSku: "",
  starterKitName: "",
  equipment: "",
  consumables: "",
  observing: "",
  productionContext: "",
  alreadyTried: "",
  contactMethod: "",
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function SubmitSupportRequestForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const page = submitSupportRequestPage;
  const sections = submitSupportRequestFormSections;

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key as string];
      return next;
    });
    setSubmitError(null);
  }

  function validate(): Partial<Record<string, string>> {
    const next: Partial<Record<string, string>> = {};
    const required = page.validation.required;

    if (!form.fullName.trim()) next.fullName = required;
    if (!form.businessName.trim()) next.businessName = required;
    if (!form.email.trim()) {
      next.email = required;
    } else if (!isValidEmail(form.email)) {
      next.email = page.validation.email;
    }
    if (!form.productSku.trim()) next.productSku = required;
    if (!form.observing.trim()) next.observing = required;
    if (!form.contactMethod) next.contactMethod = required;

    return next;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    const honeypot =
      formData.get(FORM_HONEYPOT_FIELDS.support)?.toString() ?? "";

    setSubmitting(true);
    setSubmitError(null);

    const result = await submitFormPayload(FORM_ENDPOINTS.support, {
      fullName: form.fullName,
      businessName: form.businessName,
      email: form.email,
      phone: form.phone,
      orderNumber: form.orderNumber,
      productSku: form.productSku,
      starterKitName: form.starterKitName,
      equipment: form.equipment,
      consumables: form.consumables,
      observing: form.observing,
      productionContext: form.productionContext,
      alreadyTried: form.alreadyTried,
      contactMethod: form.contactMethod,
      [FORM_HONEYPOT_FIELDS.support]: honeypot,
      sourceUrl: window.location.href,
    });

    setSubmitting(false);

    if (!result.ok) {
      setSubmitError(result.error);
      return;
    }

    setSubmitted(true);
  }

  function renderError(field: string) {
    if (!errors[field]) return null;
    return <p className={fieldErrorClass}>{errors[field]}</p>;
  }

  if (submitted) {
    return (
      <p className="text-body text-muted">{page.confirmationMessage}</p>
    );
  }

  const about = sections.aboutRequest.fields;
  const product = sections.productWorkflow.fields;
  const issue = sections.theIssue.fields;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative space-y-(--spacing-section)"
    >
      <HoneypotField name={FORM_HONEYPOT_FIELDS.support} />
      <FormLayout title={sections.aboutRequest.title}>
        <div>
          <label htmlFor="fullName" className={fieldLabelClass}>
            {about.fullName.label}
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            className={fieldInputClass}
            value={form.fullName}
            onChange={(e) => setField("fullName", e.target.value)}
          />
          {renderError("fullName")}
        </div>
        <div>
          <label htmlFor="businessName" className={fieldLabelClass}>
            {about.businessName.label}
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            autoComplete="organization"
            className={fieldInputClass}
            value={form.businessName}
            onChange={(e) => setField("businessName", e.target.value)}
          />
          {renderError("businessName")}
        </div>
        <div>
          <label htmlFor="email" className={fieldLabelClass}>
            {about.email.label}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldInputClass}
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
          />
          {renderError("email")}
        </div>
        <div>
          <label htmlFor="phone" className={fieldLabelClass}>
            {about.phone.label}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldInputClass}
            value={form.phone}
            onChange={(e) => setField("phone", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="orderNumber" className={fieldLabelClass}>
            {about.orderNumber.label}
          </label>
          <input
            id="orderNumber"
            name="orderNumber"
            type="text"
            className={fieldInputClass}
            value={form.orderNumber}
            onChange={(e) => setField("orderNumber", e.target.value)}
          />
        </div>
      </FormLayout>

      <FormLayout title={sections.productWorkflow.title}>
        <div>
          <label htmlFor="productSku" className={fieldLabelClass}>
            {product.productSku.label}
          </label>
          <input
            id="productSku"
            name="productSku"
            type="text"
            required
            className={fieldInputClass}
            value={form.productSku}
            onChange={(e) => setField("productSku", e.target.value)}
          />
          <p className="mt-1 text-caption text-muted-subtle">{page.productSkuNote}</p>
          {renderError("productSku")}
        </div>
        <div>
          <label htmlFor="starterKitName" className={fieldLabelClass}>
            {product.starterKitName.label}
          </label>
          <input
            id="starterKitName"
            name="starterKitName"
            type="text"
            className={fieldInputClass}
            value={form.starterKitName}
            onChange={(e) => setField("starterKitName", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="equipment" className={fieldLabelClass}>
            {product.equipment.label}
          </label>
          <input
            id="equipment"
            name="equipment"
            type="text"
            className={fieldInputClass}
            value={form.equipment}
            onChange={(e) => setField("equipment", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="consumables" className={fieldLabelClass}>
            {product.consumables.label}
          </label>
          <input
            id="consumables"
            name="consumables"
            type="text"
            className={fieldInputClass}
            value={form.consumables}
            onChange={(e) => setField("consumables", e.target.value)}
          />
        </div>
      </FormLayout>

      <FormLayout title={sections.theIssue.title}>
        <div>
          <label htmlFor="observing" className={fieldLabelClass}>
            {issue.observing.label}
          </label>
          <textarea
            id="observing"
            name="observing"
            required
            rows={5}
            placeholder={issue.observing.placeholder}
            className={fieldInputClass}
            value={form.observing}
            onChange={(e) => setField("observing", e.target.value)}
          />
          {renderError("observing")}
        </div>
        <div>
          <label htmlFor="productionContext" className={fieldLabelClass}>
            {issue.productionContext.label}
          </label>
          <textarea
            id="productionContext"
            name="productionContext"
            rows={4}
            placeholder={issue.productionContext.placeholder}
            className={fieldInputClass}
            value={form.productionContext}
            onChange={(e) => setField("productionContext", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="alreadyTried" className={fieldLabelClass}>
            {issue.alreadyTried.label}
          </label>
          <textarea
            id="alreadyTried"
            name="alreadyTried"
            rows={4}
            placeholder={issue.alreadyTried.placeholder}
            className={fieldInputClass}
            value={form.alreadyTried}
            onChange={(e) => setField("alreadyTried", e.target.value)}
          />
        </div>
      </FormLayout>

      <FormLayout title={sections.attachments.title}>
        <FileUploadField
          id="attachments"
          label={page.fileUpload.label}
          maxFiles={page.fileUpload.maxFiles}
          maxFileBytes={page.fileUpload.maxFileBytes}
          maxTotalBytes={page.fileUpload.maxTotalBytes}
          acceptMimeTypes={page.fileUpload.acceptMimeTypes}
          acceptExtensions={page.fileUpload.acceptExtensions}
          pendingBackendNote={page.fileUpload.pendingBackendNote}
          onFilesChange={setAttachments}
        />
      </FormLayout>

      <FormLayout title={sections.contactPreference.title}>
        <fieldset className="space-y-(--spacing-stack-sm) border-0 p-0">
          <legend className={fieldLabelClass}>
            {sections.contactPreference.preferredMethod.label}
          </legend>
          <ul className="space-y-(--spacing-stack-sm)">
            {sections.contactPreference.preferredMethod.options.map((option) => (
              <li key={option}>
                <label className="flex items-center gap-2 text-body text-muted">
                  <input
                    type="radio"
                    name="contactMethod"
                    value={option}
                    checked={form.contactMethod === option}
                    onChange={(e) => setField("contactMethod", e.target.value)}
                  />
                  <span>{option}</span>
                </label>
              </li>
            ))}
          </ul>
          {renderError("contactMethod")}
        </fieldset>
      </FormLayout>

      <p className="text-small text-muted">
        {page.consent.before}
        <TextLink href={page.consent.privacyPolicyHref}>
          {page.consent.privacyPolicyLabel}
        </TextLink>
        {page.consent.after}
      </p>

      {submitError ? (
        <p className={fieldErrorClass} role="alert">
          {submitError}
        </p>
      ) : null}

      <Button type="submit" variant="primary" size="lg" disabled={submitting}>
        {submitting ? "Submitting…" : page.submitLabel}
      </Button>
    </form>
  );
}
