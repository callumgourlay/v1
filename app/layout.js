import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getDomainConfig } from "@/lib/domainConfig";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import StructuredData from "@/components/StructuredData";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const config = getDomainConfig(host);

  return {
    metadataBase: new URL(`https://${config.primaryDomain}`),
    title: config.seo.title,
    description: config.seo.description,
    alternates: {
      canonical: config.seo.canonical,
    },
    openGraph: {
      title: config.seo.title,
      description: config.seo.description,
      url: config.seo.canonical,
      siteName: config.brand,
      type: "website",
      locale: "en_GB",
    },
  };
}

export default async function RootLayout({ children }) {
  const headersList = await headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const config = getDomainConfig(host);

  return (
    <html lang="en" className="bg-white text-gray-900">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <NavBar config={config} />
        <main className="mx-auto max-w-6xl px-4">{children}</main>
        <Footer config={config} />
        <Analytics />
        <StructuredData config={config} />
        <CookieBanner />
      </body>
    </html>
  );
}
