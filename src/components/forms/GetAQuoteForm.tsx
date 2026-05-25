"use client";

import { useState } from "react";
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
  getAQuoteConfirmationEmail,
  getAQuoteFormSections,
  getAQuotePage,
} from "@/content/getAQuote";
import { FORM_HONEYPOT_FIELDS } from "@/lib/forms/honeypot";
import { FORM_ENDPOINTS, submitFormPayload } from "@/lib/forms/submitClient";

type FormState = {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  cityState: string;
  websiteUrl: string;
  businessType: string;
  shopSize: string;
  productionDuration: string;
  lookingFor: Record<string, boolean>;
  solvingSpecifying: string;
  budgetRange: string;
  timeline: string;
  contactMethod: string;
  anythingElse: string;
};

const initialLookingFor = Object.fromEntries(
  getAQuoteFormSections.lookingFor.interests.options.map((option) => [
    option,
    false,
  ]),
) as Record<string, boolean>;

const initialState: FormState = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  cityState: "",
  websiteUrl: "",
  businessType: "",
  shopSize: "",
  productionDuration: "",
  lookingFor: { ...initialLookingFor },
  solvingSpecifying: "",
  budgetRange: "",
  timeline: "",
  contactMethod: "",
  anythingElse: "",
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function GetAQuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { validation } = getAQuotePage;
  const sections = getAQuoteFormSections;

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
    const required = validation.required;

    if (!form.fullName.trim()) next.fullName = required;
    if (!form.businessName.trim()) next.businessName = required;
    if (!form.email.trim()) {
      next.email = required;
    } else if (!isValidEmail(form.email)) {
      next.email = validation.email;
    }
    if (!form.cityState.trim()) next.cityState = required;
    if (!form.businessType) next.businessType = required;
    if (!form.shopSize) next.shopSize = required;
    if (!form.productionDuration) next.productionDuration = required;

    const hasInterest = sections.lookingFor.interests.options.some(
      (option) => form.lookingFor[option],
    );
    if (!hasInterest) next.lookingFor = required;

    if (!form.solvingSpecifying.trim()) next.solvingSpecifying = required;
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
    const honeypot = formData.get(FORM_HONEYPOT_FIELDS.quote)?.toString() ?? "";
    const lookingFor = sections.lookingFor.interests.options.filter(
      (option) => form.lookingFor[option],
    );

    setSubmitting(true);
    setSubmitError(null);

    const result = await submitFormPayload(FORM_ENDPOINTS.quote, {
      fullName: form.fullName,
      businessName: form.businessName,
      email: form.email,
      phone: form.phone,
      cityState: form.cityState,
      websiteUrl: form.websiteUrl,
      businessType: form.businessType,
      shopSize: form.shopSize,
      productionDuration: form.productionDuration,
      lookingFor,
      solvingSpecifying: form.solvingSpecifying,
      budgetRange: form.budgetRange,
      timeline: form.timeline,
      contactMethod: form.contactMethod,
      anythingElse: form.anythingElse,
      [FORM_HONEYPOT_FIELDS.quote]: honeypot,
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

  const aboutYou = sections.aboutYou.fields;

  if (submitted) {
    return (
      <p className="text-body text-muted">
        {getAQuoteConfirmationEmail.bodyParagraphs[0]}
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative space-y-(--spacing-section)"
    >
      <HoneypotField name={FORM_HONEYPOT_FIELDS.quote} />
      <FormLayout title={sections.aboutYou.title}>
        <div>
          <label htmlFor="fullName" className={fieldLabelClass}>
            {aboutYou.fullName.label}
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
            {aboutYou.businessName.label}
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
            {aboutYou.email.label}
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
            {aboutYou.phone.label}
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
          <label htmlFor="cityState" className={fieldLabelClass}>
            {aboutYou.cityState.label}
          </label>
          <input
            id="cityState"
            name="cityState"
            type="text"
            required
            autoComplete="address-level2"
            className={fieldInputClass}
            value={form.cityState}
            onChange={(e) => setField("cityState", e.target.value)}
          />
          {renderError("cityState")}
        </div>
        <div>
          <label htmlFor="websiteUrl" className={fieldLabelClass}>
            {aboutYou.websiteUrl.label}
          </label>
          <input
            id="websiteUrl"
            name="websiteUrl"
            type="url"
            autoComplete="url"
            className={fieldInputClass}
            value={form.websiteUrl}
            onChange={(e) => setField("websiteUrl", e.target.value)}
          />
        </div>
      </FormLayout>

      <FormLayout title={sections.aboutOperation.title}>
        <div>
          <label htmlFor="businessType" className={fieldLabelClass}>
            {sections.aboutOperation.businessType.label}
          </label>
          <select
            id="businessType"
            name="businessType"
            required
            className={fieldInputClass}
            value={form.businessType}
            onChange={(e) => setField("businessType", e.target.value)}
          >
            <option value="">Select</option>
            {sections.aboutOperation.businessType.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {renderError("businessType")}
        </div>
        <div>
          <label htmlFor="shopSize" className={fieldLabelClass}>
            {sections.aboutOperation.shopSize.label}
          </label>
          <select
            id="shopSize"
            name="shopSize"
            required
            className={fieldInputClass}
            value={form.shopSize}
            onChange={(e) => setField("shopSize", e.target.value)}
          >
            <option value="">Select</option>
            {sections.aboutOperation.shopSize.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {renderError("shopSize")}
        </div>
        <div>
          <label htmlFor="productionDuration" className={fieldLabelClass}>
            {sections.aboutOperation.productionDuration.label}
          </label>
          <select
            id="productionDuration"
            name="productionDuration"
            required
            className={fieldInputClass}
            value={form.productionDuration}
            onChange={(e) => setField("productionDuration", e.target.value)}
          >
            <option value="">Select</option>
            {sections.aboutOperation.productionDuration.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {renderError("productionDuration")}
        </div>
      </FormLayout>

      <FormLayout title={sections.lookingFor.title}>
        <fieldset className="space-y-(--spacing-stack-sm) border-0 p-0">
          <legend className={fieldLabelClass}>
            {sections.lookingFor.interests.label}
          </legend>
          <ul className="space-y-(--spacing-stack-sm)">
            {sections.lookingFor.interests.options.map((option) => (
              <li key={option}>
                <label className="flex items-start gap-2 text-body text-muted">
                  <input
                    type="checkbox"
                    name="lookingFor"
                    value={option}
                    checked={form.lookingFor[option]}
                    className="mt-1"
                    onChange={(e) => {
                      setForm((prev) => ({
                        ...prev,
                        lookingFor: {
                          ...prev.lookingFor,
                          [option]: e.target.checked,
                        },
                      }));
                      setErrors((prev) => {
                        const next = { ...prev };
                        delete next.lookingFor;
                        return next;
                      });
                    }}
                  />
                  <span>{option}</span>
                </label>
              </li>
            ))}
          </ul>
          {renderError("lookingFor")}
        </fieldset>
        <div>
          <label htmlFor="solvingSpecifying" className={fieldLabelClass}>
            {sections.lookingFor.solvingSpecifying.label}
          </label>
          <textarea
            id="solvingSpecifying"
            name="solvingSpecifying"
            required
            rows={5}
            placeholder={sections.lookingFor.solvingSpecifying.placeholder}
            className={fieldInputClass}
            value={form.solvingSpecifying}
            onChange={(e) => setField("solvingSpecifying", e.target.value)}
          />
          {renderError("solvingSpecifying")}
        </div>
        <div>
          <label htmlFor="budgetRange" className={fieldLabelClass}>
            {sections.lookingFor.budgetRange.label}
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            className={fieldInputClass}
            value={form.budgetRange}
            onChange={(e) => setField("budgetRange", e.target.value)}
          >
            <option value="">Select</option>
            {sections.lookingFor.budgetRange.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={fieldLabelClass}>
            {sections.lookingFor.timeline.label}
          </label>
          <select
            id="timeline"
            name="timeline"
            className={fieldInputClass}
            value={form.timeline}
            onChange={(e) => setField("timeline", e.target.value)}
          >
            <option value="">Select</option>
            {sections.lookingFor.timeline.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
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
                    required
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
        <div>
          <label htmlFor="anythingElse" className={fieldLabelClass}>
            {sections.contactPreference.anythingElse.label}
          </label>
          <textarea
            id="anythingElse"
            name="anythingElse"
            rows={4}
            className={fieldInputClass}
            value={form.anythingElse}
            onChange={(e) => setField("anythingElse", e.target.value)}
          />
        </div>
      </FormLayout>

      <p className="text-small text-muted">
        {getAQuotePage.consent.before}
        <TextLink href={getAQuotePage.consent.privacyPolicyHref}>
          {getAQuotePage.consent.privacyPolicyLabel}
        </TextLink>
        {getAQuotePage.consent.after}
      </p>

      {submitError ? (
        <p className={fieldErrorClass} role="alert">
          {submitError}
        </p>
      ) : null}

      <Button type="submit" variant="primary" size="lg" disabled={submitting}>
        {submitting ? "Submitting…" : getAQuotePage.submitLabel}
      </Button>
    </form>
  );
}
