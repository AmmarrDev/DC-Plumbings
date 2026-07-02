import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { services } from "../data/siteData";

// ── EmailJS config ──────────────────────────────────────────────────────────
// Replace these three values with your own from emailjs.com dashboard.
// Account → General → Public Key
// Email Services → your service → Service ID
// Email Templates → your template → Template ID
// const EMAILJS_SERVICE_ID  = "service_gjqxw7q";   // e.g. "service_abc123"
// const EMAILJS_TEMPLATE_ID = "template_opbip69";  // e.g. "template_xyz789"
// const EMAILJS_PUBLIC_KEY  = "2oJHSJsoStg04DEGd";   // e.g. "AbCdEfGhIjKlMnOp"

const EMAILJS_SERVICE_ID  = "service_2funumj";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_6z5n33t";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "icTJ9clpiZP8zYGbq";   // e.g. "AbCdEfGhIjKlMnOp"
// ───────────────────────────────────────────────────────────────────────────

const initialForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
  service: "",
  message: "",
  company: "", // honeypot
};

export default function ContactForm() {
  const [form, setForm]     = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot — silently ignore bots
    if (form.company) return;

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email, and a short message.");
      return;
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email)) {
      setStatus("error");
      setErrorMsg("Please provide a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone:      form.phone    || "—",
          address:    form.address  || "—",
          service:    form.service  || "—",
          message:    form.message,
          reply_to:   form.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg("Something went wrong sending your request. Please call us directly or try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-lg border border-steel-200 bg-steel-100 p-10 text-center">
        <CheckCircle2 size={42} className="text-brand-blue" />
        <h3 className="mt-4 font-display text-xl uppercase text-navy-900">
          Request received
        </h3>
        <p className="mt-2 max-w-sm text-steel-600">
          Thanks for reaching out — we'll get back to you shortly to
          discuss your project and provide a free estimate.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono text-xs uppercase tracking-wide text-brand-blue hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={handleChange}
        className="hidden"
        tabIndex="-1"
        autoComplete="off"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="jane@example.com"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone">
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="(650) 555-0123"
          />
        </Field>
        <Field label="Property Address / City">
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="form-input"
            placeholder="City, CA"
          />
        </Field>
      </div>

      <Field label="Service Needed">
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="form-input"
        >
          <option value="">Select a service&hellip;</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other / Not sure</option>
        </select>
      </Field>

      <Field label="Tell us about the job" required>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="form-input resize-none"
          placeholder="What's going on, and what would you like done?"
        />
      </Field>

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-gradient py-3.5 font-display text-sm uppercase tracking-wide text-white shadow-md transition-transform hover:scale-[1.01] disabled:opacity-70 sm:w-auto sm:px-10"
      >
        {status === "loading" && <Loader2 size={16} className="animate-spin" />}
        {status === "loading" ? "Sending..." : "Book Free Estimate"}
      </button>
    </form>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-steel-600">
        {label} {required && <span className="text-brand-blue">*</span>}
      </span>
      {children}
    </label>
  );
}