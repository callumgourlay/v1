import Link from "next/link";
import Image from "next/image";
import CallButton from "./CallButton";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/remote-it-support", label: "Remote IT Support" },
  { href: "/whole-home-wifi", label: "Whole Home Wi-Fi" },
  { href: "/whole-home-audio", label: "Whole Home Audio" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar({ config }) {
  const accent = config?.accent || { primary: "#307fb9", secondary: "#3eaedf" };
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/90 border-b border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-44 overflow-hidden">
            <Image
              src={config?.logo || "/branding/weblogo.png"}
              alt={`${config?.brand || "ScotSMART"} logo`}
              fill
              sizes="176px"
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-800 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-950 transition"
            >
              {link.label}
            </Link>
          ))}
          <CallButton
            phone={config?.phone}
            accent={accent}
            label={`Call ${config?.phone}`}
            size="sm"
          />
        </nav>
        <div className="md:hidden">
          <CallButton phone={config?.phone} accent={accent} label="Call now" size="sm" />
        </div>
      </div>
    </header>
  );
}
