import { headers } from "next/headers";
import CallButton from "@/components/CallButton";
import { getDomainConfig } from "@/lib/domainConfig";

const spaces = [
  "Kitchens and open-plan entertaining areas where you spend the most time.",
  "Living rooms and snug spaces for films, music and podcasts.",
  "Bathrooms with sensible, moisture-aware options.",
  "Garden rooms or outdoor seating for relaxed listening.",
];

const approach = [
  "Plan the zones first so sound follows how you use the space.",
  "Run cabling and network cleanly for reliability and neat finishes.",
  "Select platforms like Sonos and similar that are easy to use and expand.",
  "Set up simple control from phones, tablets or smart assistants.",
];

const outcomes = [
  "Seamless audio in the rooms that matter most.",
  "Easy control for the whole household or guests.",
  "Reliable streams without dropouts or clutter.",
  "Discreet, tidy installs that suit your décor.",
];

const scenarios = [
  "Kitchen/diner playlists that fill the space evenly.",
  "Morning news or podcasts in the bathroom without fuss.",
  "Garden room cinema or chill-out audio connected to the main home network.",
];

export default async function WholeHomeAudioPage() {
  const headersList = await headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const config = getDomainConfig(host);
  const accent = config.accent || { primary: "#307fb9", secondary: "#3eaedf" };
  const bulletStyle = { backgroundColor: accent.primary };

  return (
    <div className="space-y-10 py-10 md:py-14">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
          Whole Home Audio
        </p>
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          Whole home audio designed for kitchens, entertaining areas and key rooms
        </h1>
        <p className="text-lg text-gray-700">
          Discreet, reliable audio systems that match how you live. Planned zones, tidy installs and simple control.
        </p>
        <CallButton
          phone={config.phone}
          accent={accent}
          size="lg"
          label={`Call ${config.phone} about home audio`}
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Spaces we prioritise</h2>
          <ul className="space-y-2 text-gray-700">
            {spaces.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={bulletStyle} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Our approach</h2>
          <ul className="space-y-2 text-gray-700">
            {approach.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={bulletStyle} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl bg-gray-50 p-6 md:p-8 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Outcomes</h2>
        <ul className="grid gap-3 md:grid-cols-2 text-gray-800">
          {outcomes.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={bulletStyle} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700">
          Want to experience it first? We have show homes available to view by appointment.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Real-world scenarios</h2>
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
          <h2 className="text-xl font-semibold text-gray-900">What happens when you call</h2>
          <p className="text-gray-700">
            We’ll ask about the rooms you care about, how you listen today, and any plans for renovations. Then we’ll propose a tidy, reliable setup that fits your budget and style.
          </p>
        </div>
      </section>

      <section className="rounded-2xl bg-gray-900 px-6 py-8 text-white">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Ready for seamless sound?</h2>
          <p className="text-gray-200">
            Call now and we’ll map the zones that matter most to you.
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
    title: `${config.brand} | Whole home audio for Glasgow homes`,
    description:
      "Whole home audio planned for kitchens, entertaining areas and key rooms across Glasgow. Discreet installs, reliable streaming, easy control. Call 0141 478 0794.",
    openGraph: ogImage
      ? {
          title: `${config.brand} | Whole home audio for Glasgow homes`,
          description:
            "Whole home audio planned for kitchens, entertaining areas and key rooms across Glasgow. Discreet installs, reliable streaming, easy control. Call 0141 478 0794.",
          images: [{ url: ogImage }],
        }
      : undefined,
    twitter: ogImage
      ? {
          card: "summary_large_image",
          title: `${config.brand} | Whole home audio for Glasgow homes`,
          description:
            "Whole home audio planned for kitchens, entertaining areas and key rooms across Glasgow. Discreet installs, reliable streaming, easy control. Call 0141 478 0794.",
          images: [ogImage],
        }
      : undefined,
    icons: {
      icon: config.logo ? `https://${config.primaryDomain}${config.logo}` : undefined,
    },
  };
}
