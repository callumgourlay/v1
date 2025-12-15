import { headers } from "next/headers";
import CallButton from "@/components/CallButton";
import { getDomainConfig } from "@/lib/domainConfig";

const problems = [
  "Weak passwords and ad-hoc file sharing.",
  "Unclear access to email, drives and shared folders.",
  "Staff unsure about phishing and basic security hygiene.",
];

const outcomes = [
  "Safer access to data from anywhere with proper accounts and MFA.",
  "Cleaner, better-organised drives and sharing in Google Workspace or Microsoft 365.",
  "Staff who know the basics of staying secure.",
];

export default async function CyberHygieneCloudPage() {
  const headersList = await headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const config = getDomainConfig(host);
  const accent = config.accent || { primary: "#307fb9", secondary: "#3eaedf" };
  const bulletStyle = { backgroundColor: accent.primary };

  return (
    <div className="space-y-10 py-10 md:py-14">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">Cyber Hygiene & Cloud</p>
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          Secure email, passwords and file sharing for small teams
        </h1>
        <p className="text-lg text-gray-700">
          We set up safer access, MFA, clean sharing and simple guidance in Google Workspace or Microsoft 365.
        </p>
        <CallButton phone={config.phone} accent={accent} size="lg" label={`Call ${config.phone} for cloud help`} />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Problems we fix</h2>
          <ul className="space-y-2 text-gray-700">
            {problems.map((item) => (
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
          <h2 className="text-2xl font-bold">Want a quick hygiene uplift?</h2>
          <p className="text-gray-200">We’ll map your current accounts, set MFA, tidy sharing, and brief your team.</p>
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
    title: `${config.brand} | Cyber hygiene & cloud setup in Glasgow`,
    description:
      "Secure passwords, MFA, file sharing and email for Glasgow small businesses in Google Workspace or Microsoft 365. Simple guidance, safer access.",
    openGraph: ogImage
      ? {
          title: `${config.brand} | Cyber hygiene & cloud setup in Glasgow`,
          description:
            "Secure passwords, MFA, file sharing and email for Glasgow small businesses in Google Workspace or Microsoft 365. Simple guidance, safer access.",
          images: [{ url: ogImage }],
        }
      : undefined,
    twitter: ogImage
      ? {
          card: "summary_large_image",
          title: `${config.brand} | Cyber hygiene & cloud setup in Glasgow`,
          description:
            "Secure passwords, MFA, file sharing and email for Glasgow small businesses in Google Workspace or Microsoft 365. Simple guidance, safer access.",
          images: [ogImage],
        }
      : undefined,
    icons: {
      icon: config.logo ? `https://${config.primaryDomain}${config.logo}` : undefined,
    },
  };
}
