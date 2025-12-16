import { headers } from "next/headers";
import { getDomainConfig } from "@/lib/domainConfig";

export default async function robots() {
  const headersList = await headers();
  const host = (headersList.get("host") || "scotsmart.co.uk").replace(/^www\./, "");
  const config = getDomainConfig(host);

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `https://${config.primaryDomain}/sitemap.xml`,
  };
}
