import { headers } from "next/headers";
import CallButton from "@/components/CallButton";
import { getDomainConfig } from "@/lib/domainConfig";

const outcomes = [
  "Equipment that’s suitable, secure and ready to use.",
  "Less time wasted on trial-and-error shopping.",
  "Smooth onboarding for new staff and devices.",
];

const inclusions = [
  "Laptops/desktops with sensible specs and security.",
  "Printers, POS and peripherals configured properly.",
  "Wi-Fi and networking hardware chosen for your space.",
  "Setup, patching and basic hardening guidance.",
];

export default async function TechProcurementSetupPage() {
  const headersList = await headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const config = getDomainConfig(host);
  const accent = config.accent || { primary: "#307fb9", secondary: "#3eaedf" };
  const bulletStyle = { backgroundColor: accent.primary };

  return (
    <div className="space-y-10 py-10 md:py-14">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">Tech Procurement & Setup</p>
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          Right tech, set up properly for your business or home
        </h1>
        <p className="text-lg text-gray-700">
          We source and configure laptops, printers, POS and networking so you start on the right foot.
        </p>
        <CallButton phone={config.phone} accent={accent} size="lg" label={`Call ${config.phone} for procurement help`} />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">What’s included</h2>
          <ul className="space-y-2 text-gray-700">
            {inclusions.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={bulletStyle} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Outcomes</h2>
          <ul className="space-y-2 text-gray-700">
            {outcomes.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={bulletStyle} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl bg-gray-900 px-6 py-8 text-white">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Need gear sorted this week?</h2>
          <p className="text-gray-200">Tell us your team size and what you do. We’ll recommend and set up the right kit.</p>
          <CallButton phone={config.phone} accent={accent} label={`Call ${config.phone}`} />
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const config = getDomainConfig(host);
  const ogImage = config.ogImage ? `https://${config.primaryDomain}${config.ogImage}` : undefined;
  return {
    title: `${config.brand} | Tech procurement and setup in Glasgow`,
    description:
      "Sourcing and configuring laptops, printers, POS and networking for Glasgow businesses and homes. Secure, ready-to-use gear with smooth onboarding.",
    openGraph: ogImage
      ? {
          title: `${config.brand} | Tech procurement and setup in Glasgow`,
          description:
            "Sourcing and configuring laptops, printers, POS and networking for Glasgow businesses and homes. Secure, ready-to-use gear with smooth onboarding.",
          images: [{ url: ogImage }],
        }
      : undefined,
    twitter: ogImage
      ? {
          card: "summary_large_image",
          title: `${config.brand} | Tech procurement and setup in Glasgow`,
          description:
            "Sourcing and configuring laptops, printers, POS and networking for Glasgow businesses and homes. Secure, ready-to-use gear with smooth onboarding.",
          images: [ogImage],
        }
      : undefined,
  };
}
