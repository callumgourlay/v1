import Link from "next/link";
import { domainList, getDomainConfig } from "@/lib/domainConfig";

export default function Footer({ config }) {
  const accent = config.accent || { primary: "#307fb9", secondary: "#3eaedf" };
  const familyGrouped = Object.values(
    domainList.reduce((acc, domain) => {
      if (domain === config.primaryDomain) return acc;
      const cfg = getDomainConfig(domain);
      const key = cfg.brand;
      if (!acc[key]) {
        acc[key] = { brand: cfg.brand, domains: [] };
      }
      acc[key].domains.push(domain);
      return acc;
    }, {})
  );

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">{config.brand}</h3>
          <p className="text-sm text-gray-600">
            {config.tagline} Based in Glasgow and serving the Central Belt.
          </p>
          <p className="text-sm text-gray-700">
            Phone: <a href={`tel:${config.phone}`} className="font-semibold">{config.phone}</a>
            <br />
            Email: <a href={`mailto:${config.email}`} className="font-semibold">{config.email}</a>
          </p>
          <div className="text-xs text-gray-500 space-y-1">
            <p>Operated by ScotSMART Limited.</p>
            <p>Registered in Scotland: SC679217</p>
            <p>Registered office: 12 Pankhurst Place, East Kilbride, Glasgow, G74 4BH</p>
            <p>ScotSMART is a UK registered trademark: UK00003957771</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Quick links</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><Link href="/services" className="hover:text-gray-900">Services</Link></li>
            <li><Link href="/remote-it-support" className="hover:text-gray-900">Remote IT Support</Link></li>
            <li><Link href="/whole-home-wifi" className="hover:text-gray-900">Whole Home Wi-Fi</Link></li>
            <li><Link href="/whole-home-audio" className="hover:text-gray-900">Whole Home Audio</Link></li>
            <li><Link href="/automated-marketing" className="hover:text-gray-900">Automated Marketing</Link></li>
            <li><Link href="/business-process-automation" className="hover:text-gray-900">Business Process Automation</Link></li>
            <li><Link href="/tech-procurement-setup" className="hover:text-gray-900">Tech Procurement & Setup</Link></li>
            <li><Link href="/cyber-hygiene-cloud" className="hover:text-gray-900">Cyber Hygiene & Cloud</Link></li>
            <li><Link href="/security-audits" className="hover:text-gray-900">Security Audits</Link></li>
            <li><Link href="/ongoing-support" className="hover:text-gray-900">Ongoing Support</Link></li>
            <li><Link href="/outbuilding-networking" className="hover:text-gray-900">Outbuilding Networking</Link></li>
            <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-gray-900">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-gray-900">Terms</Link></li>
            <li><Link href="/cookies" className="hover:text-gray-900">Cookies</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Other brands by ScotSMART</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            {familyGrouped.map((group) => (
              <li key={group.brand} className="flex flex-col">
                <span className="font-semibold text-gray-900">{group.brand}</span>
                <span className="text-gray-700">
                  {group.domains.map((d, idx) => (
                    <span key={d}>
                      <a
                        href={`https://${d}`}
                        className="hover:text-gray-900"
                        rel="noopener noreferrer"
                      >
                        {d}
                      </a>
                      {idx < group.domains.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-gray-500 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} ScotSMART Limited. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-800">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-800">Terms</Link>
            <Link href="/cookies" className="hover:text-gray-800">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
