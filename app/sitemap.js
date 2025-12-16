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

export default async function sitemap() {
  const headersList = await headers();
  const host = (headersList.get("host") || "scotsmart.co.uk").replace(/^www\./, "");
  const config = getDomainConfig(host);
  const lastModified = new Date().toISOString();

  return routes.map((route) => ({
    url: `https://${config.primaryDomain}${route}`,
    lastModified,
  }));
}
