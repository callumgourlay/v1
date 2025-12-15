export default function robots() {
  const primary = process.env.NEXT_PUBLIC_PRIMARY_DOMAIN || "scotsmart.co.uk";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `https://${primary}/sitemap.xml`,
  };
}
