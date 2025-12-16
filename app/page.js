import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import CallButton from "@/components/CallButton";
import { getDomainConfig } from "@/lib/domainConfig";
import FaqSchema from "@/components/FaqSchema";

const benefitPoints = [
  "Local, director-led support for Glasgow micro and small businesses (1-15) and homes.",
  "No jargon - clear options and honest advice.",
  "Reliable Wi-Fi and networks that just work.",
  "Audio planned for the rooms you actually use.",
  "Automations that save you time and reduce mistakes.",
];

const services = [
  {
    title: "Remote IT Support",
    body: "Friendly helpdesk for small teams with clear coverage and faster fixes.",
    link: "/remote-it-support",
    icon: "/icons/support.svg",
  },
  {
    title: "Cyber Hygiene & Cloud",
    body: "Secure email, passwords and file sharing in Google Workspace or Microsoft 365.",
    link: "/services",
    icon: "/icons/shield.svg",
  },
  {
    title: "Whole Home Wi-Fi",
    body: "Planned coverage for extensions, garden rooms and upstairs rooms that drop out.",
    link: "/whole-home-wifi",
    icon: "/icons/wifi.svg",
  },
  {
    title: "Whole Home Audio",
    body: "Discreet, reliable audio for kitchens, entertaining areas and key rooms.",
    link: "/whole-home-audio",
    icon: "/icons/audio.svg",
  },
  {
    title: "Business Automation",
    body: "Python/Bash tools and simple apps that remove repetitive admin.",
    link: "/services",
    icon: "/icons/automation.svg",
  },
  {
    title: "Outbuilding Networking",
    body: "Stable links for garden offices, workshops and studios.",
    link: "/services",
    icon: "/icons/network.svg",
  },
];

const audiences = [
  {
    title: "Small businesses (1-15)",
    body: "Director-led support without corporate fluff.",
    icon: "/icons/support.svg",
  },
  {
    title: "Hospitality venues",
    body: "Wi-Fi and music that just works for staff and guests.",
    icon: "/icons/wifi.svg",
  },
  {
    title: "Homeowners",
    body: "Seamless Wi-Fi and audio in the spaces you actually use.",
    icon: "/icons/audio.svg",
  },
  {
    title: "Trades & project partners",
    body: "IT/Wi-Fi/audio designed into your builds and fit-outs.",
    icon: "/icons/network.svg",
  },
];

const stories = [
  {
    title: "Garden room networking and ongoing IT support",
    summary: "Reliable Wi-Fi and IT support so the garden room works like part of the main house.",
    quote: "Callum has been amazing at sorting my IT... I really do not know where I would be without him.",
    name: "Shiona Campbell",
    role: "BDS - Business Development & Support Ltd",
    context: "Garden room networking and IT support setup",
  },
  {
    title: "Gaming PC build and home network wiring via a trusted partner",
    summary: "Built a high-spec gaming computer and brought in a ScotSMART-approved partner to wire the home network properly.",
    quote: "Not only was the job done within the same day, I was provided with regular updates... Excellent work.",
    name: "Ryan Thomson",
  },
  {
    title: "Warehouse and home networking upgrades",
    summary: "Stabilised networking across warehouse and home for smooth operations.",
    quote: "We are absolutely delighted with the IT work and networking solutions provided for our warehouse and home.",
    name: "Ross Gourlay",
    role: "Glencrest Ltd",
  },
];

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const config = getDomainConfig(host);
  const accent = config.accent || { primary: "#307fb9", secondary: "#3eaedf" };
  const bulletStyle = { backgroundColor: accent.primary };
  const ghostButton =
    "inline-flex items-center justify-center gap-2 rounded-full border font-semibold shadow-sm px-5 py-2.5 transition hover:opacity-90";

  const faqItems = [
    {
      q: "Do you cover both business and home setups?",
      a: "Yes. We support small businesses (1-15 staff) and homeowners across Glasgow and the Central Belt.",
    },
    {
      q: "Can you help with existing Wi-Fi or audio installs?",
      a: "We troubleshoot, redesign and tidy existing setups, and we can show working solutions in our show homes by appointment.",
    },
    {
      q: "Do you work with trades and project partners?",
      a: "Yes. We design IT, Wi-Fi and audio into builds and fit-outs, coordinating with your contractors.",
    },
  ];

  return (
    <div className="space-y-16 py-10 md:py-14">
      <section className="grid gap-8 rounded-2xl bg-gray-50 px-6 py-10 md:grid-cols-2 md:px-10">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
            Based in Glasgow, serving the Central Belt
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Straight-talking IT, Wi-Fi and audio for Glasgow small businesses and homes
          </h1>
          <p className="text-lg text-gray-700">
            Friendly, director-led support for micro and small teams (1-15) and homeowners. No jargon, no hard
            sell - just clear options that suit how you work and live.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <CallButton
              phone={config.phone}
              accent={accent}
              size="lg"
              label={`Call ${config.phone} now`}
            />
            <Link
              href="/contact#show-home"
              className={ghostButton}
              style={{ borderColor: accent.primary, color: accent.primary }}
            >
              Book a show home visit
            </Link>
          </div>
          <p className="text-sm text-gray-700">
            You’ll speak directly with a real engineer, not a call centre.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Why people choose us</h2>
          <ul className="mt-4 space-y-3 text-gray-700">
            {benefitPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={bulletStyle} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">What we do</h2>
            <p className="text-gray-700">
              Practical IT support, Wi-Fi, audio and automation for small teams and homes.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                {service.icon ? (
                  <div className="h-10 w-10 rounded-lg bg-gray-100 p-2.5">
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width={32}
                      height={32}
                    />
                  </div>
                ) : null}
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="mt-2 text-gray-700">{service.body}</p>
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
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Who we help</h2>
            <p className="text-gray-700">If this sounds like you, let’s talk.</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {audiences.map((audience) => (
            <div key={audience.title} className="rounded-lg border border-gray-200 p-4 flex gap-3">
              <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-gray-100 p-2.5 flex items-center justify-center">
                {audience.icon ? (
                  <Image
                    src={audience.icon}
                    alt={`${audience.title} icon`}
                    width={28}
                    height={28}
                  />
                ) : (
                  <span className="text-lg">•</span>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{audience.title}</h3>
                <p className="text-gray-700">{audience.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-2xl border border-gray-200 bg-white px-6 py-8 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Results & client voices</h2>
            <p className="text-gray-700">Real scenarios and feedback from Glasgow clients.</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {stories.map((story) => (
            <div key={story.quote} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase text-gray-600">Case study</p>
              <p className="mt-1 text-gray-900 font-semibold">{story.title}</p>
              <p className="mt-1 text-gray-700 text-sm">{story.summary}</p>
              <p className="mt-3 text-gray-900 font-medium">“{story.quote}”</p>
              <p className="mt-3 text-sm text-gray-800 font-semibold">{story.name}</p>
              {story.role ? <p className="text-sm text-gray-600">{story.role}</p> : null}
              {story.context ? <p className="text-xs text-gray-500 mt-1">{story.context}</p> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-white border border-gray-200 px-6 py-8 shadow-sm md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Book a show home visit</h2>
            <p className="text-gray-700">
              See whole home Wi-Fi and audio in action. Appointments available on request.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact#show-home"
              className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 text-white text-sm font-semibold shadow-md hover:opacity-90"
            >
              Book a visit
            </Link>
            <CallButton phone={config.phone} accent={accent} size="sm" label="Call to book" />
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-gray-200 bg-white px-6 py-8 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">FAQs</h2>
            <p className="text-gray-700">Quick answers for small businesses and homeowners.</p>
          </div>
        </div>
        <div className="space-y-4 text-gray-800">
          <div>
            <p className="font-semibold">Do you cover both business and home setups?</p>
            <p className="text-gray-700">Yes. We support small businesses (1-15 staff) and homeowners across Glasgow and the Central Belt.</p>
          </div>
          <div>
            <p className="font-semibold">Can you help with existing Wi-Fi or audio installs?</p>
            <p className="text-gray-700">We troubleshoot, redesign and tidy existing setups, and we can show working solutions in our show homes by appointment.</p>
          </div>
          <div>
            <p className="font-semibold">Do you work with trades and project partners?</p>
            <p className="text-gray-700">Yes. We design IT, Wi-Fi and audio into builds and fit-outs, coordinating with your contractors.</p>
          </div>
        </div>
      </section>
      <FaqSchema items={faqItems} />

      <section className="rounded-2xl bg-gray-900 px-6 py-10 text-white md:px-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">How we work</h2>
            <p className="text-gray-200">
              Simple, transparent steps so you always know what’s happening.
            </p>
            <ol className="space-y-3 text-gray-100">
              <li><strong>1) Listen.</strong> We ask what’s not working and what you need.</li>
              <li><strong>2) Make a clear plan.</strong> Options, pros/cons, and what it will deliver.</li>
              <li><strong>3) Set up, support, improve.</strong> We implement, support and refine.</li>
            </ol>
          </div>
          <div className="rounded-xl bg-white/5 p-6 shadow-lg">
            <h3 className="text-lg font-semibold">Ready to start?</h3>
            <p className="mt-2 text-gray-200">
              Call now for IT support, Wi-Fi planning or audio design tailored to your space.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <CallButton
                phone={config.phone}
                accent={accent}
                label={`Call ${config.phone} today`}
              />
              <Link
                href="/contact#show-home"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-md hover:opacity-90"
              >
                Book a show home visit
              </Link>
              <p className="text-sm text-gray-300">
                No hard sell - if we’re not the right fit, we’ll say so.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const config = getDomainConfig(host);
  const ogImage = config.ogImage ? `https://${config.primaryDomain}${config.ogImage}` : undefined;

  return {
    title: config.seo.title,
    description: config.seo.description,
    openGraph: {
      title: config.seo.title,
      description: config.seo.description,
      url: `https://${config.primaryDomain}`,
      siteName: config.brand,
      images: ogImage ? [{ url: ogImage }] : undefined,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.seo.title,
      description: config.seo.description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}
