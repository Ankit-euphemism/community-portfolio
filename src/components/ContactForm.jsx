import { useState } from "react";
import * as yup from "yup";

const contactSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(4, "Name should be at least 3 characters long.")
    .required("Please enter your name."),
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .required("Please enter your email address."),
  subject: yup
    .string()
    .trim()
    .max(120, "Subject should be 120 characters or less.")
    .required("Please enter a subject."),
  message: yup
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters long.")
    .required("Please enter a message."),
});

const SUBMISSION_TIMEOUT_MS = 10000;

const inputClasses =
  "w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-subtle-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateField = async (fieldName, fieldValue, nextValues) => {
    try {
      await contactSchema.validateAt(fieldName, {
        ...values,
        ...nextValues,
        [fieldName]: fieldValue,
      });

      setErrors((currentErrors) => {
        if (!currentErrors[fieldName]) {
          return currentErrors;
        }

        const updatedErrors = { ...currentErrors };
        delete updatedErrors[fieldName];
        return updatedErrors;
      });

      return true;
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setErrors((currentErrors) => ({
          ...currentErrors,
          [fieldName]: error.message,
        }));
      }

      return false;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const formValues = {
      name: formData.get("name") ?? "",
      email: formData.get("email") ?? "",
      subject: formData.get("subject") ?? "",
      message: formData.get("message") ?? "",
    };

    try {
      await contactSchema.validate(formValues, { abortEarly: false });
      setErrors({});
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const nextErrors = {};

        error.inner.forEach((validationError) => {
          if (validationError.path && !nextErrors[validationError.path]) {
            nextErrors[validationError.path] = validationError.message;
          }
        });

        setErrors(nextErrors);
      }

      return;
    }

    const accessKey = import.meta.env.VITE_FORM_KEY;

    if (!accessKey) {
      setResult("Contact form is not configured yet. Please email me directly.");
      return;
    }

    setIsSubmitting(true);
    setResult("Sending...");

    const submissionData = new FormData(formElement);
    submissionData.append("access_key", accessKey);
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => {
      controller.abort();
    }, SUBMISSION_TIMEOUT_MS);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
        signal: controller.signal,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setResult("Thanks! Your message has been sent successfully.");
        setValues({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        formElement.reset();
      } else {
        setResult("Unable to submit right now. Please try again shortly.");
      }
    } catch (error) {
      if (error.name === "AbortError") {
        setResult("Sending is taking too long. Please try again or email me directly.");
      } else {
        setResult("Unable to submit right now. Please try again shortly.");
      }
    } finally {
      window.clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((currentValues) => {
      const nextValues = {
        ...currentValues,
        [name]: value,
      };

      void validateField(name, value, nextValues);
      return nextValues;
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    void validateField(name, value, { [name]: value });
  };

  const isSuccess = result.startsWith("Thanks!");
  const isError =
    result.length > 0 &&
    result !== "Sending..." &&
    !result.startsWith("Thanks!");

  return (
    <div className="rounded-xl border border-border bg-card p-6 sm:p-8 lg:p-10">
      <div className="mb-8 flex flex-col gap-3">
        <p className="font-mono text-xs sm:text-sm text-accent tracking-widest uppercase">
          <span className="text-subtle-foreground">06</span>
          {" — Contact"}
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-balance">
          {"Let's build something useful"}
        </h2>
        <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground text-pretty">
          Open to internships, freelance projects, and full-time opportunities.
          {" Share a short brief and I'll respond with the next step."}
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-foreground"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Jane Smith"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClasses}
            />
            {errors.name ? (
              <p className="text-xs text-destructive">{errors.name}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              Work Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="jane@company.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClasses}
            />
            {errors.email ? (
              <p className="text-xs text-destructive">{errors.email}</p>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="subject"
            className="text-sm font-medium text-foreground"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Hiring inquiry / Project discussion"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClasses}
          />
          {errors.subject ? (
            <p className="text-xs text-destructive">{errors.subject}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell me about the role, timeline, and what you need help with."
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputClasses} resize-y`}
          />
          {errors.message ? (
            <p className="text-xs text-destructive">{errors.message}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-6 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          <span
            className={`text-xs sm:text-sm ${
              result === "Sending..."
                ? "text-foreground"
                : isSuccess
                  ? "text-accent"
                  : isError
                    ? "text-destructive"
                    : "text-subtle-foreground"
            }`}
            aria-live="polite"
          >
            {result || "Your details are used only to respond to this inquiry."}
          </span>
        </div>
      </form>
    </div>
  );
}
