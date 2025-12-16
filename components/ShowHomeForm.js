"use client";

import { useState } from "react";
import CallButton from "./CallButton";

const WORKER_URL = "https://scotsmart-form-worker.callumg.workers.dev";

export default function ShowHomeForm({ accent, phone }) {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function onSubmit(event) {
    event.preventDefault();
    setStatus({ state: "submitting", message: "Sending..." });
    const formData = new FormData(event.currentTarget);
    const payload = {
      type: "show-home",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      preferred_time: formData.get("preferred_time") || "",
      message: formData.get("message") || "",
      consent: formData.get("consent") === "on",
      show_home_extra: formData.get("show_home_extra") ?? "",
    };
    if (!payload.preferred_time) delete payload.preferred_time;
    if (!payload.message) delete payload.message;
    if (!payload.show_home_extra) payload.show_home_extra = "";
    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        mode: "cors",
      });
      const data = await res.json().catch(() => ({}));
      const success = res.ok && (typeof data.ok === "undefined" || data.ok === true);
      if (!success) {
        // eslint-disable-next-line no-console
        console.error("Show home form error", res.status, data);
        throw new Error("Failed");
      }
      setStatus({ state: "success", message: "Thanks - we’ve received your booking request." });
      event.currentTarget.reset();
    } catch (err) {
      setStatus({
        state: "error",
        message: "Sorry, something went wrong. Please try again or call us.",
      });
    }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
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
      </div>
      <div className="grid gap-4 md:grid-cols-2">
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
        <div>
          <label className="block text-sm font-medium text-gray-800">Preferred date/time</label>
          <input
            type="text"
            name="preferred_time"
            className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2"
            style={{ "--tw-ring-color": accent.secondary }}
            placeholder="e.g. Next Tue afternoon"
          />
        </div>
      </div>
      <div className="hidden">
        <input type="text" name="show_home_extra" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-800">What you want to see</label>
        <textarea
          name="message"
          className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2"
          style={{ "--tw-ring-color": accent.secondary }}
          rows={4}
          placeholder="Wi-Fi coverage, kitchen audio, garden room setup, etc."
        />
      </div>
      <label className="flex items-start gap-3 text-sm text-gray-700">
        <input type="checkbox" name="consent" className="mt-1 h-4 w-4 rounded border-gray-300" required />
        <span>I’m happy for ScotSMART Limited to contact me about this show home booking.</span>
      </label>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <button
          type="submit"
          className="rounded-full px-4 py-2.5 text-center text-white font-semibold shadow-md transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{
            backgroundColor: accent.primary,
            "--tw-ring-color": accent.secondary,
          }}
          disabled={status.state === "submitting"}
        >
          {status.state === "submitting" ? "Sending..." : "Send booking request"}
        </button>
        <CallButton phone={phone} accent={accent} size="sm" label="Call to book" />
      </div>
      {status.state === "success" && (
        <p className="text-sm text-emerald-700 font-semibold">{status.message}</p>
      )}
      {status.state === "error" && (
        <p className="text-sm text-red-600 font-semibold">{status.message}</p>
      )}
    </form>
  );
}
