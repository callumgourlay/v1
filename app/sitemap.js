import { headers } from "next/headers";
import { getDomainConfig } from "@/lib/domainConfig";

const routes = [
  "/",
  "/services",
  "/remote-it-support",
  "/whole-home-wifi",
  "/whole-home-audio",
  "/automated-marketing",
  "/business-process-automation",
  "/tech-procurement-setup",
  "/cyber-hygiene-cloud",
  "/security-audits",
  "/ongoing-support",
  "/outbuilding-networking",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
];

export default function sitemap() {
  const headersList = headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const cleaned = host.replace(/^www\./, "");
  const config = getDomainConfig(cleaned);
  const lastModified = new Date().toISOString();

  return routes.map((route) => ({
    url: `https://${config.primaryDomain}${route}`,
    lastModified,
  }));
}
