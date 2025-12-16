import { headers } from "next/headers";
import CallButton from "@/components/CallButton";
import { getDomainConfig } from "@/lib/domainConfig";

const outcomes = [
  "Consistent, branded customer communication without extra admin.",
  "Automated follow-ups that run in the background.",
  "Clear reporting so you know what’s working.",
];

const steps = [
  "Map your customer touchpoints and quick wins.",
  "Design emails, signup forms and simple automations in Mailchimp/Brevo.",
  "Launch, monitor and adjust based on clear metrics.",
];

export default async function AutomatedMarketingPage() {
  const headersList = await headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const config = getDomainConfig(host);
  const accent = config.accent || { primary: "#307fb9", secondary: "#3eaedf" };
  const bulletStyle = { backgroundColor: accent.primary };

  return (
    <div className="space-y-10 py-10 md:py-14">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">Automated Marketing</p>
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          Done-for-you email marketing and lead capture for Glasgow small businesses
        </h1>
        <p className="text-lg text-gray-700">
          We set up branded email, forms and follow-ups so you stay in front of customers without extra admin.
        </p>
        <CallButton phone={config.phone} accent={accent} size="lg" label={`Call ${config.phone} about marketing`} />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
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
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">How we work</h2>
          <ul className="space-y-2 text-gray-700">
            {steps.map((item) => (
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
          <h2 className="text-2xl font-bold">Ready to start?</h2>
          <p className="text-gray-200">Book a quick call and we’ll outline a simple campaign you can run this month.</p>
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
    title: `${config.brand} | Automated marketing for Glasgow small businesses`,
    description:
      "Done-for-you email marketing and lead capture with Mailchimp/Brevo for Glasgow small businesses. Clear reporting and hands-off follow-ups.",
    openGraph: ogImage
      ? {
          title: `${config.brand} | Automated marketing for Glasgow small businesses`,
          description:
            "Done-for-you email marketing and lead capture with Mailchimp/Brevo for Glasgow small businesses. Clear reporting and hands-off follow-ups.",
          images: [{ url: ogImage }],
        }
      : undefined,
    twitter: ogImage
      ? {
          card: "summary_large_image",
          title: `${config.brand} | Automated marketing for Glasgow small businesses`,
          description:
            "Done-for-you email marketing and lead capture with Mailchimp/Brevo for Glasgow small businesses. Clear reporting and hands-off follow-ups.",
          images: [ogImage],
        }
      : undefined,
  };
}
