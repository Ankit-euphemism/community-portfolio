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
        console.log("Form submission successful:", data);
      } else {
        setResult("Unable to submit right now. Please try again shortly.");
        console.log(data.error);
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
    <section className="relative overflow-hidden rounded-lg xs:rounded-2xl sm:rounded-3xl border border-gray-700/80 bg-gray-900/85 p-4 xs:p-6 sm:p-8 lg:p-10 2xl:p-12 shadow-2xl backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      <div className="absolute -right-24 xs:-right-16 top-[-6rem] sm:top-[-8rem] h-48 w-48 xs:h-64 xs:w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -left-20 xs:-left-12 bottom-[-5rem] sm:bottom-[-8rem] h-40 w-40 xs:h-56 xs:w-56 rounded-full bg-slate-500/10 blur-3xl" />

      <div className="relative mb-6 xs:mb-8 sm:mb-10 space-y-3 xs:space-y-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 xs:px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300 mx-auto">
          Contact
        </div>
        <div className="space-y-2 xs:space-y-3">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Let&apos;s build something useful
          </h2>
          <p className="mx-auto max-w-2xl text-xs xs:text-sm sm:text-base leading-relaxed text-gray-300">
            Open to internships, freelance projects, and full-time opportunities.
            Share a short brief and I&apos;ll respond with the next step.
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="relative space-y-4 xs:space-y-5 sm:space-y-6">
        <div className="grid gap-4 xs:gap-5 sm:gap-6 sm:grid-cols-2">
          <div className="space-y-1.5 xs:space-y-2">
            <label htmlFor="name" className="text-xs xs:text-sm font-medium text-gray-200 block">
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
              className="w-full rounded-lg xs:rounded-xl border border-gray-700 bg-gray-950/80 px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm text-gray-100 placeholder:text-gray-500 outline-none transition duration-200 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20"
            />
            {errors.name ? <p className="text-xs text-rose-400">{errors.name}</p> : null}
          </div>

          <div className="space-y-1.5 xs:space-y-2">
            <label
              htmlFor="email"
              className="text-xs xs:text-sm font-medium text-gray-200 block"
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
              className="w-full rounded-lg xs:rounded-xl border border-gray-700 bg-gray-950/80 px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm text-gray-100 placeholder:text-gray-500 outline-none transition duration-200 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20"
            />
            {errors.email ? <p className="text-xs text-rose-400">{errors.email}</p> : null}
          </div>
        </div>

        <div className="space-y-1.5 xs:space-y-2">
          <label
            htmlFor="subject"
            className="text-xs xs:text-sm font-medium text-gray-200 block"
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
            className="w-full rounded-lg xs:rounded-xl border border-gray-700 bg-gray-950/80 px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm text-gray-100 placeholder:text-gray-500 outline-none transition duration-200 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20"
          />
          {errors.subject ? <p className="text-xs text-rose-400">{errors.subject}</p> : null}
        </div>

        <div className="space-y-1.5 xs:space-y-2">
          <label
            htmlFor="message"
            className="text-xs xs:text-sm font-medium text-gray-200 block"
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
            className="w-full resize-y rounded-lg xs:rounded-xl border border-gray-700 bg-gray-950/80 px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm text-gray-100 placeholder:text-gray-500 outline-none transition duration-200 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20"
          />
          {errors.message ? <p className="text-xs text-rose-400">{errors.message}</p> : null}
        </div>

        <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 border-t border-gray-800 pt-4 xs:pt-5 sm:pt-6 sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-lg xs:rounded-xl bg-cyan-400 px-4 xs:px-6 py-2.5 xs:py-3 text-xs xs:text-sm font-semibold text-gray-950 transition duration-200 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-cyan-400/50 disabled:text-gray-800 active:scale-95 touch-manipulation"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          <span
            className={`text-xs xs:text-sm ${
              result === "Sending..."
                ? "text-gray-300"
                : isSuccess
                  ? "text-cyan-300"
                  : isError
                    ? "text-rose-400"
                    : "text-gray-400"
            }`}
            aria-live="polite"
          >
            {result || "Your details are used only to respond to this inquiry."}
          </span>
        </div>
      </form>
    </section>
  );
}
