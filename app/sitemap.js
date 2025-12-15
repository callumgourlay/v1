import { domainList } from "@/lib/domainConfig";

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
  const lastModified = new Date().toISOString();
  return domainList.flatMap((domain) =>
    routes.map((route) => ({
      url: `https://${domain}${route}`,
      lastModified,
    }))
  );
}
