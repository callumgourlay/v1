import { headers } from "next/headers";
import CallButton from "@/components/CallButton";
import { getDomainConfig } from "@/lib/domainConfig";

const pains = [
  "Manual data entry, invoicing or reporting that eats time.",
  "Copy/paste tasks across spreadsheets or systems.",
  "No documentation of recurring admin, so fixes are ad-hoc.",
];

const outcomes = [
  "Fewer manual steps and fewer mistakes.",
  "More time for serving customers, less time on admin.",
  "Documented automations your team can run and hand over.",
];

export default async function BusinessProcessAutomationPage() {
  const headersList = await headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const config = getDomainConfig(host);
  const accent = config.accent || { primary: "#307fb9", secondary: "#3eaedf" };
  const bulletStyle = { backgroundColor: accent.primary };

  return (
    <div className="space-y-10 py-10 md:py-14">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">Business Process Automation</p>
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          Python/Bash automations that remove repetitive admin
        </h1>
        <p className="text-lg text-gray-700">
          We build small, reliable tools to handle the boring tasks so your team can focus on customers. Our team includes degree-qualified software engineers and computer scientists who design the right solution - whether that uses OCR for documents, API integrations, secure scripting, data pipelines, or other complex automation patterns.
        </p>
        <CallButton phone={config.phone} accent={accent} size="lg" label={`Call ${config.phone} about automation`} />
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Advanced capabilities we can apply</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={bulletStyle} />
            <span>OCR for invoices, receipts and forms to cut manual entry.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={bulletStyle} />
            <span>API integrations to sync data between CRM, accounting, and marketing tools.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={bulletStyle} />
            <span>Secure scripting and RPA-style workflows for repetitive desktop tasks.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={bulletStyle} />
            <span>Data pipelines and reporting to keep stakeholders informed without manual effort.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={bulletStyle} />
            <span>Lightweight NLP/text processing for categorising emails and support requests.</span>
          </li>
        </ul>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Problems we solve</h2>
          <ul className="space-y-2 text-gray-700">
            {pains.map((item) => (
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
          <h2 className="text-2xl font-bold">Ready to automate a task?</h2>
          <p className="text-gray-200">Tell us the top 2-3 repetitive jobs. We’ll propose a simple automation you can run immediately.</p>
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
    title: `${config.brand} | Business process automation in Glasgow`,
    description:
      "Degree-qualified engineers building Python/Bash automations, OCR, API integrations and secure scripts to remove repetitive admin for Glasgow small businesses.",
    openGraph: ogImage
      ? {
          title: `${config.brand} | Business process automation in Glasgow`,
          description:
            "Degree-qualified engineers building Python/Bash automations, OCR, API integrations and secure scripts to remove repetitive admin for Glasgow small businesses.",
          images: [{ url: ogImage }],
        }
      : undefined,
    twitter: ogImage
      ? {
          card: "summary_large_image",
          title: `${config.brand} | Business process automation in Glasgow`,
          description:
            "Degree-qualified engineers building Python/Bash automations, OCR, API integrations and secure scripts to remove repetitive admin for Glasgow small businesses.",
          images: [ogImage],
        }
      : undefined,
  };
}
