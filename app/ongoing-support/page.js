import { headers } from "next/headers";
import CallButton from "@/components/CallButton";
import { getDomainConfig } from "@/lib/domainConfig";

const inclusions = [
  "Regular health reports and recommendations.",
  "Onboarding packs for new staff and devices.",
  "Optional cyber MOTs and check-ins.",
];

const outcomes = [
  "Fewer surprises and outages.",
  "New staff brought into systems cleanly.",
  "Issues caught early with simple actions.",
];

export default async function OngoingSupportPage() {
  const headersList = await headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const config = getDomainConfig(host);
  const accent = config.accent || { primary: "#307fb9", secondary: "#3eaedf" };
  const bulletStyle = { backgroundColor: accent.primary };

  return (
    <div className="space-y-10 py-10 md:py-14">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">Ongoing Support & Add-ons</p>
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          Keep your systems healthy with regular check-ins
        </h1>
        <p className="text-lg text-gray-700">
          Flexible extras to keep IT, Wi-Fi and cloud tidy and reliable, without locking you into complexity.
        </p>
        <CallButton phone={config.phone} accent={accent} size="lg" label={`Call ${config.phone} about ongoing support`} />
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
          <h2 className="text-2xl font-bold">Want steady, low-fuss support?</h2>
          <p className="text-gray-200">We’ll tailor a simple add-on bundle to keep your systems in shape.</p>
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
    title: `${config.brand} | Ongoing IT support add-ons in Glasgow`,
    description:
      "Health reports, onboarding packs and cyber MOTs to keep IT, Wi-Fi and cloud tidy for Glasgow small businesses. Flexible, low-fuss support.",
    openGraph: ogImage
      ? {
          title: `${config.brand} | Ongoing IT support add-ons in Glasgow`,
          description:
            "Health reports, onboarding packs and cyber MOTs to keep IT, Wi-Fi and cloud tidy for Glasgow small businesses. Flexible, low-fuss support.",
          images: [{ url: ogImage }],
        }
      : undefined,
    twitter: ogImage
      ? {
          card: "summary_large_image",
          title: `${config.brand} | Ongoing IT support add-ons in Glasgow`,
          description:
            "Health reports, onboarding packs and cyber MOTs to keep IT, Wi-Fi and cloud tidy for Glasgow small businesses. Flexible, low-fuss support.",
          images: [ogImage],
        }
      : undefined,
  };
}
