import { headers } from "next/headers";
import { getDomainConfig } from "@/lib/domainConfig";
import CallButton from "@/components/CallButton";

const services = [
  {
    title: "Automated Marketing Solutions",
    link: "/automated-marketing",
    summary: "Done-for-you email marketing and lead capture using platforms like Mailchimp or Brevo.",
  },
  {
    title: "Business Process Automation",
    link: "/business-process-automation",
    summary: "Python/Bash tools and simple apps that remove repetitive admin.",
  },
  {
    title: "Remote IT Support",
    link: "/remote-it-support",
    summary: "Friendly helpdesk with clear scope for micro-businesses.",
  },
  {
    title: "Tech Procurement & Setup",
    link: "/tech-procurement-setup",
    summary: "Sourcing and configuring the right laptops, printers, POS and networking.",
  },
  {
    title: "Cyber Hygiene & Cloud Integration",
    link: "/cyber-hygiene-cloud",
    summary: "Secure access, passwords and file sharing in Google Workspace or Microsoft 365.",
  },
  {
    title: "Security Audits & Recommendations",
    link: "/security-audits",
    summary: "Structured review of devices, email, backups and phishing risk with clear next steps.",
  },
  {
    title: "Ongoing Support & Add-ons",
    link: "/ongoing-support",
    summary: "Health reports, onboarding packs and regular check-ins.",
  },
  {
    title: "Whole Home Audio",
    link: "/whole-home-audio",
    summary: "Discreet, easy-to-use audio for kitchens, entertaining areas and key rooms.",
  },
  {
    title: "Outbuilding Networking",
    link: "/outbuilding-networking",
    summary: "Stable connectivity for garden rooms, workshops and studios.",
  },
  {
    title: "Whole Home Wi-Fi",
    link: "/whole-home-wifi",
    summary: "Planned coverage for every corner of the property and outdoor areas.",
  },
];

export default async function ServicesPage() {
  const headersList = await headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const config = getDomainConfig(host);
  const accent = config.accent || { primary: "#307fb9", secondary: "#3eaedf" };

  return (
    <div className="space-y-10 py-10 md:py-14">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">Services</p>
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          Practical IT, Wi-Fi and audio services for Glasgow and the Central Belt
        </h1>
        <p className="text-lg text-gray-700">
          Every service is designed for small businesses and homeowners who want reliable tech without jargon. If you need a quick steer, call us now.
        </p>
        <CallButton phone={config.phone} accent={accent} label="Call 0141 478 0794" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
            <p className="mt-2 text-gray-700">{service.summary}</p>
            <a
              href={service.link}
              className="mt-auto text-sm font-semibold"
              style={{ color: accent.primary }}
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const config = getDomainConfig(host);
  const ogImage = config.ogImage ? `https://${config.primaryDomain}${config.ogImage}` : undefined;
  return {
    title: `${config.brand} | IT, Wi-Fi & audio services in Glasgow`,
    description:
      "Browse ScotSMART services: remote IT support, cyber hygiene, whole home Wi-Fi, audio, automation and more across Glasgow and the Central Belt.",
    openGraph: ogImage
      ? {
          title: `${config.brand} | IT, Wi-Fi & audio services in Glasgow`,
          description:
            "Browse ScotSMART services: remote IT support, cyber hygiene, whole home Wi-Fi, audio, automation and more across Glasgow and the Central Belt.",
          images: [{ url: ogImage }],
        }
      : undefined,
    twitter: ogImage
      ? {
          card: "summary_large_image",
          title: `${config.brand} | IT, Wi-Fi & audio services in Glasgow`,
          description:
            "Browse ScotSMART services: remote IT support, cyber hygiene, whole home Wi-Fi, audio, automation and more across Glasgow and the Central Belt.",
          images: [ogImage],
        }
      : undefined,
    icons: {
      icon: config.logo ? `https://${config.primaryDomain}${config.logo}` : undefined,
    },
  };
}
