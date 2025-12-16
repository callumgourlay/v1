import { headers } from "next/headers";
import CallButton from "@/components/CallButton";
import { getDomainConfig } from "@/lib/domainConfig";

const scenarios = [
  "Garden offices needing stable video calls and uploads.",
  "Workshops or studios with smart devices and streaming.",
  "Annexes and garages that need secure connectivity back to the main property.",
];

const outcomes = [
  "Stable wired or wireless links between main house and outbuilding.",
  "Support for calls, streaming and smart devices without dropouts.",
  "Tidy, weather-appropriate installs instead of DIY bodges.",
];

export default async function OutbuildingNetworkingPage() {
  const headersList = await headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const config = getDomainConfig(host);
  const accent = config.accent || { primary: "#307fb9", secondary: "#3eaedf" };
  const bulletStyle = { backgroundColor: accent.primary };

  return (
    <div className="space-y-10 py-10 md:py-14">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">Outbuilding Networking</p>
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          Reliable connectivity for garden rooms, garages and annexes
        </h1>
        <p className="text-lg text-gray-700">
          We design stable, secure links from your main property to outbuildings so work, streaming and smart devices just work.
        </p>
        <CallButton phone={config.phone} accent={accent} size="lg" label={`Call ${config.phone} about outbuilding links`} />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Typical scenarios</h2>
          <ul className="space-y-2 text-gray-700">
            {scenarios.map((item) => (
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
          <h2 className="text-2xl font-bold">Need a link that just works?</h2>
          <p className="text-gray-200">We’ll assess the distance, cabling and environment to build a stable, secure connection.</p>
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
    title: `${config.brand} | Outbuilding networking in Glasgow`,
    description:
      "Reliable networking for garden rooms, garages and annexes across Glasgow. Stable wired or wireless links, tidy installs, secure connectivity.",
    openGraph: ogImage
      ? {
          title: `${config.brand} | Outbuilding networking in Glasgow`,
          description:
            "Reliable networking for garden rooms, garages and annexes across Glasgow. Stable wired or wireless links, tidy installs, secure connectivity.",
          images: [{ url: ogImage }],
        }
      : undefined,
    twitter: ogImage
      ? {
          card: "summary_large_image",
          title: `${config.brand} | Outbuilding networking in Glasgow`,
          description:
            "Reliable networking for garden rooms, garages and annexes across Glasgow. Stable wired or wireless links, tidy installs, secure connectivity.",
          images: [ogImage],
        }
      : undefined,
  };
}
