"use client";

import Script from "next/script";

export default function StructuredData({ config }) {
  const orgData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: config.brand,
    url: `https://${config.primaryDomain}`,
    telephone: config.phone ? `+44${config.phone.replace(/\D/g, "").replace(/^0/, "")}` : undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Pankhurst Place",
      addressLocality: "East Kilbride",
      addressRegion: "Glasgow",
      postalCode: "G74 4BH",
      addressCountry: "GB",
    },
    areaServed: "Glasgow and the Central Belt of Scotland",
    image: config.logo ? `https://${config.primaryDomain}${config.logo}` : undefined,
    description: config.seo?.description,
  };

  const siteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.brand,
    url: `https://${config.primaryDomain}`,
    potentialAction: {
      "@type": "SearchAction",
      target: `https://${config.primaryDomain}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Script
        id="ld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgData) }}
      />
      <Script
        id="ld-site"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteData) }}
      />
    </>
  );
}
