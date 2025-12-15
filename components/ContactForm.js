"use client";

import { useState } from "react";
import CallButton from "./CallButton";

const WORKER_URL = "https://scotsmart-form-worker.callumg.workers.dev";

export default function ContactForm({ accent, phone }) {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function onSubmit(event) {
    event.preventDefault();
    setStatus({ state: "submitting", message: "Sending..." });
    const formData = new FormData(event.currentTarget);
    const payload = {
      type: "contact",
      name: formData.get("name"),
      business: formData.get("business"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      consent: formData.get("consent") === "on",
      extra_field: formData.get("extra_field"),
    };

    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus({ state: "success", message: "Thanks – we’ve received your enquiry." });
      event.currentTarget.reset();
    } catch (err) {
      setStatus({
        state: "error",
        message: "Sorry, something went wrong. Please try again or call us.",
      });
    }
  }

  return (
    <form className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm" onSubmit={onSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-800">Name</label>
        <input
          type="text"
          name="name"
          className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2"
          style={{ "--tw-ring-color": accent.secondary }}
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-800">Business / Home</label>
        <input
          type="text"
          name="business"
          className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2"
          style={{ "--tw-ring-color": accent.secondary }}
          placeholder="Business name or Home"
          required
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-800">Email</label>
          <input
            type="email"
            name="email"
            className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2"
            style={{ "--tw-ring-color": accent.secondary }}
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800">Phone</label>
          <input
            type="tel"
            name="phone"
            className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2"
            style={{ "--tw-ring-color": accent.secondary }}
            placeholder={phone}
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-800">Brief message</label>
        <textarea
          name="message"
          className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2"
          style={{ "--tw-ring-color": accent.secondary }}
          rows={4}
          placeholder="Tell us what you need help with"
          required
        />
      </div>
      <div className="hidden">
        <input type="text" name="extra_field" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="flex items-start gap-3 text-sm text-gray-700">
        <input type="checkbox" name="consent" className="mt-1 h-4 w-4 rounded border-gray-300" required />
        <span>I’m happy for ScotSMART Limited to contact me about this enquiry.</span>
      </label>
      <button
        type="submit"
        className="w-full rounded-full px-4 py-2.5 text-center text-white font-semibold shadow-md transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{
          backgroundColor: accent.primary,
          "--tw-ring-color": accent.secondary,
        }}
        disabled={status.state === "submitting"}
      >
        {status.state === "submitting" ? "Sending..." : "Send message"}
      </button>
      {status.state === "success" && (
        <p className="text-sm text-emerald-700 font-semibold">{status.message}</p>
      )}
      {status.state === "error" && (
        <p className="text-sm text-red-600 font-semibold">{status.message}</p>
      )}
      <p className="text-xs text-gray-600">
        For urgent issues, call us on {phone}. Cross-domain links are labelled “by ScotSMART Limited”.
      </p>
    </form>
  );
}
