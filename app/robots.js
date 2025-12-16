import { headers } from "next/headers";
import { getDomainConfig } from "@/lib/domainConfig";

export default function robots() {
  const headersList = headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const cleaned = host.replace(/^www\./, "");
  const config = getDomainConfig(cleaned);

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
