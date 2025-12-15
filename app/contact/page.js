import { headers } from "next/headers";
import CallButton from "@/components/CallButton";
import { getDomainConfig } from "@/lib/domainConfig";
import ContactForm from "@/components/ContactForm";
import ShowHomeForm from "@/components/ShowHomeForm";

export default async function ContactPage() {
  const headersList = await headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const config = getDomainConfig(host);
  const accent = config.accent || { primary: "#307fb9", secondary: "#3eaedf" };

  return (
    <div className="space-y-10 py-10 md:py-14">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">Contact</p>
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          Ready to sort your IT, Wi-Fi or audio? Call us now.
        </h1>
        <p className="text-lg text-gray-700">
          You’ll speak with ScotSMART directly. We’ll ask a few questions, suggest next steps, and if we’re not the right fit we’ll say so.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <CallButton
            phone={config.phone}
            accent={accent}
            size="lg"
            label={`Call ${config.phone}`}
          />
          <p className="text-sm text-gray-700">Tap to call on mobile.</p>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Prefer a callback?</h2>
            <p className="text-gray-700">
              Leave your details and we’ll call you back with clear options. No hard sell.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">What happens next</h3>
            <ol className="mt-3 space-y-2 text-gray-700">
              <li><strong>1)</strong> We listen to what you need.</li>
              <li><strong>2)</strong> We suggest a simple plan with clear outcomes.</li>
              <li><strong>3)</strong> We schedule work or support that fits you.</li>
            </ol>
          </div>
        </div>
        <ContactForm accent={accent} phone={config.phone} />
      </section>

      <section id="show-home" className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">Show home</p>
            <h2 className="text-2xl font-bold text-gray-900">Book a show home visit</h2>
            <p className="text-gray-700">
              See whole home Wi-Fi and audio in action. Appointments are by request so we can make sure the setup matches what you want to experience.
            </p>
          </div>
        </div>
        <ShowHomeForm accent={accent} phone={config.phone} />
      </section>
    </div>
  );
}
