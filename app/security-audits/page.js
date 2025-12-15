import { headers } from "next/headers";
import CallButton from "@/components/CallButton";
import { getDomainConfig } from "@/lib/domainConfig";

const checks = [
  "Passwords, MFA and account access",
  "Devices, patching and endpoint basics",
  "Email security, phishing exposure and spam",
  "Backups, file sharing and cloud hygiene",
  "Network and Wi-Fi risks",
];

const outcomes = [
  "A practical list of issues and priorities (not a scary report).",
  "Better understanding of current risks for your size of business.",
  "A roadmap for improving security over time.",
];

export default async function SecurityAuditsPage() {
  const headersList = await headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const config = getDomainConfig(host);
  const accent = config.accent || { primary: "#307fb9", secondary: "#3eaedf" };
  const bulletStyle = { backgroundColor: accent.primary };

  return (
    <div className="space-y-10 py-10 md:py-14">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">Security Audits & Recommendations</p>
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          Practical security reviews for Glasgow small businesses
        </h1>
        <p className="text-lg text-gray-700">
          A structured look at passwords, devices, cloud, email, backups and phishing risk with clear next steps.
        </p>
        <CallButton phone={config.phone} accent={accent} size="lg" label={`Call ${config.phone} about an audit`} />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">What we review</h2>
          <ul className="space-y-2 text-gray-700">
            {checks.map((item) => (
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
          <h2 className="text-2xl font-bold">Want a clear set of next steps?</h2>
          <p className="text-gray-200">We’ll prioritise the fixes, quick wins and the “do next” list for your team.</p>
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
    title: `${config.brand} | Security audits & recommendations in Glasgow`,
    description:
      "Security reviews for Glasgow small businesses: passwords, devices, cloud, email, backups and phishing risk with clear priorities.",
    openGraph: ogImage
      ? {
          title: `${config.brand} | Security audits & recommendations in Glasgow`,
          description:
            "Security reviews for Glasgow small businesses: passwords, devices, cloud, email, backups and phishing risk with clear priorities.",
          images: [{ url: ogImage }],
        }
      : undefined,
    twitter: ogImage
      ? {
          card: "summary_large_image",
          title: `${config.brand} | Security audits & recommendations in Glasgow`,
          description:
            "Security reviews for Glasgow small businesses: passwords, devices, cloud, email, backups and phishing risk with clear priorities.",
          images: [ogImage],
        }
      : undefined,
    icons: {
      icon: config.logo ? `https://${config.primaryDomain}${config.logo}` : undefined,
    },
  };
}
