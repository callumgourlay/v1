import { headers } from "next/headers";
import CallButton from "@/components/CallButton";
import { getDomainConfig } from "@/lib/domainConfig";

const painPoints = [
  "Dropouts in extensions, upstairs rooms or garden offices.",
  "DIY mesh that struggles with video calls and streaming.",
  "Router-in-a-cupboard setups that were never designed for your layout.",
  "Guests and family devices competing on one small access point.",
];

const approach = [
  "Survey and plan for your specific walls, layout and outbuildings.",
  "Use wired backhaul or stable links where possible for speed and reliability.",
  "Position access points properly instead of stacking everything at the router.",
  "Set up secure guest networks and tidy cabling so it stays reliable.",
];

const scenarios = [
  "Kitchen extension Wi-Fi that supports cooking videos, music and smart appliances.",
  "Garden room office with stable video calls and streaming.",
  "Older townhouses with thick walls that need planned access point placement.",
  "Outdoor seating or patio coverage for family and guests.",
];

const outcomes = [
  "Stable coverage across the whole property and outbuildings.",
  "Roaming that actually works so calls do not drop as you move.",
  "Secure networks with room to add more devices over time.",
  "Tidy, documented installs instead of trial-and-error gear.",
];

export default async function WholeHomeWifiPage() {
  const headersList = await headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const config = getDomainConfig(host);
  const accent = config.accent || { primary: "#307fb9", secondary: "#3eaedf" };
  const bulletStyle = { backgroundColor: accent.primary };

  return (
    <div className="space-y-10 py-10 md:py-14">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
          Whole Home Wi-Fi
        </p>
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          Whole home Wi-Fi that actually covers your property
        </h1>
        <p className="text-lg text-gray-700">
          Designed coverage for extensions, garden rooms and problem corners. Professional planning so Wi-Fi just works.
        </p>
        <CallButton
          phone={config.phone}
          accent={accent}
          size="lg"
          label={`Call ${config.phone} to plan your Wi-Fi`}
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Who it’s for</h2>
          <p className="text-gray-700">
            Family homes, homeworkers and anyone with extensions or garden rooms where off-the-shelf routers fall short.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Typical pain points</h2>
          <ul className="space-y-2 text-gray-700">
            {painPoints.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={bulletStyle} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl bg-gray-50 p-6 md:p-8 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">How we design your Wi-Fi</h2>
        <ul className="grid gap-3 md:grid-cols-2 text-gray-800">
          {approach.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={bulletStyle} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700">
          Want to see it in action? We have show homes available to view by appointment.
        </p>
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
          <h2 className="text-xl font-semibold text-gray-900">Common scenarios</h2>
          <ul className="space-y-2 text-gray-700">
            {scenarios.map((item) => (
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
          <h2 className="text-2xl font-bold">Ready for reliable Wi-Fi?</h2>
          <p className="text-gray-200">
            We plan, install and support networks that stay stable. Call for clear options.
          </p>
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
    title: `${config.brand} | Whole home Wi-Fi across Glasgow`,
    description:
      "Whole home Wi-Fi designed for extensions, garden rooms and problem areas across Glasgow and the Central Belt. Stable coverage, tidy installs. Call 0141 478 0794.",
    openGraph: ogImage
      ? {
          title: `${config.brand} | Whole home Wi-Fi across Glasgow`,
          description:
            "Whole home Wi-Fi designed for extensions, garden rooms and problem areas across Glasgow and the Central Belt. Stable coverage, tidy installs. Call 0141 478 0794.",
          images: [{ url: ogImage }],
        }
      : undefined,
    twitter: ogImage
      ? {
          card: "summary_large_image",
          title: `${config.brand} | Whole home Wi-Fi across Glasgow`,
          description:
            "Whole home Wi-Fi designed for extensions, garden rooms and problem areas across Glasgow and the Central Belt. Stable coverage, tidy installs. Call 0141 478 0794.",
          images: [ogImage],
        }
      : undefined,
    icons: {
      icon: config.logo ? `https://${config.primaryDomain}${config.logo}` : undefined,
    },
  };
}
