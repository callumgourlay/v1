import { headers } from "next/headers";
import CallButton from "@/components/CallButton";
import { getDomainConfig } from "@/lib/domainConfig";

const problems = [
  "Slow response times and no clear ownership of issues.",
  "Recurring problems that never seem to stay fixed.",
  "No single contact who understands your setup.",
  "Confusion over what is and isn’t covered.",
];

const outcomes = [
  "Faster resolutions from a friendly, Glasgow-based engineer.",
  "Predictable coverage for the essentials you rely on daily.",
  "Documented fixes and guidance to reduce repeat issues.",
  "Room to grow with add-ons when you need more help.",
];

const inclusions = [
  "Remote troubleshooting for laptops, desktops and standard software.",
  "Email and account help (Google Workspace or Microsoft 365).",
  "New user setup, basic device hardening and patching guidance.",
  "Printer/POS support and light networking checks.",
];

const addons = [
  "Onsite visits when required.",
  "Monthly health reports and recommendations.",
  "Onboarding packs for new staff and devices.",
];

export default async function RemoteItSupportPage() {
  const headersList = await headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const config = getDomainConfig(host);
  const accent = config.accent || { primary: "#307fb9", secondary: "#3eaedf" };
  const bulletStyle = { backgroundColor: accent.primary };

  return (
    <div className="space-y-10 py-10 md:py-14">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">Remote IT Support</p>
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          Remote IT support for Glasgow small businesses
        </h1>
        <p className="text-lg text-gray-700">
          A friendly engineer who answers, fixes and follows up. Clear scope so you know what is covered and how we help.
        </p>
        <CallButton phone={config.phone} accent={accent} size="lg" label={`Call ${config.phone} for IT help`} />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Who it’s for</h2>
          <p className="text-gray-700">
            Micro-businesses, owner-led teams and remote/hybrid groups who need dependable IT support without hiring in-house.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Problems we solve</h2>
          <ul className="space-y-2 text-gray-700">
            {problems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={bulletStyle} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl bg-gray-50 p-6 md:p-8 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">What you get</h2>
        <ul className="grid gap-3 md:grid-cols-2 text-gray-800">
          {inclusions.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={bulletStyle} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
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
          <h2 className="text-xl font-semibold text-gray-900">Add-ons</h2>
          <ul className="space-y-2 text-gray-700">
            {addons.map((item) => (
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
          <h2 className="text-2xl font-bold">Need help today?</h2>
          <p className="text-gray-200">
            Call and we’ll give clear options. If we’re not the right fit, we’ll say so.
          </p>
          <CallButton phone={config.phone} accent={accent} label={`Call ${config.phone} now`} />
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
    title: `${config.brand} | Remote IT support for Glasgow small businesses`,
    description:
      "Remote IT support for Glasgow micro-businesses: faster fixes, clear scope, friendly engineers, optional onsite. Call 0141 478 0794.",
    openGraph: ogImage
      ? {
          title: `${config.brand} | Remote IT support for Glasgow small businesses`,
          description:
            "Remote IT support for Glasgow micro-businesses: faster fixes, clear scope, friendly engineers, optional onsite. Call 0141 478 0794.",
          images: [{ url: ogImage }],
        }
      : undefined,
    twitter: ogImage
      ? {
          card: "summary_large_image",
          title: `${config.brand} | Remote IT support for Glasgow small businesses`,
          description:
            "Remote IT support for Glasgow micro-businesses: faster fixes, clear scope, friendly engineers, optional onsite. Call 0141 478 0794.",
          images: [ogImage],
        }
      : undefined,
    icons: {
      icon: config.logo ? `https://${config.primaryDomain}${config.logo}` : undefined,
    },
  };
}
