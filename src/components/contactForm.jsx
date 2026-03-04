import React, { useState } from "react";

function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_FORM_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      if (data.success) {
        setResult("Thanks! Your message has been sent successfully.");
        event.target.reset();
      } else {
        setResult("Unable to submit right now. Please try again shortly.");
      }
    } catch {
      setResult("Unable to submit right now. Please try again shortly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSuccess = result.startsWith("Thanks!");
  const isError =
    result.length > 0 && result !== "Sending..." && !result.startsWith("Thanks!");

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl p-6 md:p-8">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold mb-3">Contact Me</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Open to internships, freelance projects, and full-time opportunities.
          Share your requirement and I’ll respond promptly.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Jane Smith"
              className="w-full rounded-lg bg-gray-900 border border-gray-600 px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
              Work Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="jane@company.com"
              className="w-full rounded-lg bg-gray-900 border border-gray-600 px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Hiring inquiry / Project discussion"
            className="w-full rounded-lg bg-gray-900 border border-gray-600 px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Hi Ankit, we’d like to discuss a role/project with you."
            className="w-full rounded-lg bg-gray-900 border border-gray-600 px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition resize-y"
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-700 disabled:cursor-not-allowed text-gray-900 font-semibold px-7 py-3 rounded-lg transition-colors duration-200"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          <span
            className={`text-sm ${
              result === "Sending..."
                ? "text-gray-300"
                : isSuccess
                  ? "text-green-400"
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
    </div>
  );
}

export default ContactForm;
