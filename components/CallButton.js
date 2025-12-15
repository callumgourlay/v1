"use client";

import Image from "next/image";

export default function CallButton({
  phone,
  label,
  className = "",
  size = "base",
  accent = { primary: "#307fb9", secondary: "#3eaedf" },
  icon = "/icons/phone.svg",
}) {
  const telLink = `tel:${phone.replace(/\s+/g, "")}`;
  const sizeClasses =
    size === "lg"
      ? "text-lg px-6 py-3"
      : size === "sm"
        ? "text-sm px-3 py-2"
        : "text-base px-5 py-2.5";
  const primary = accent?.primary || "#307fb9";
  const hover = accent?.secondary || primary;

  return (
    <a
      href={telLink}
      className={`inline-flex items-center justify-center gap-2 rounded-full text-white font-semibold shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition hover:opacity-90 ${sizeClasses} ${className}`}
      style={{
        backgroundColor: primary,
        borderColor: primary,
        "--tw-ring-color": hover,
      }}
      data-cta="call-now"
    >
      {icon ? (
        <span className="relative h-4 w-4">
          <Image src={icon} alt="Call" fill sizes="16px" className="object-contain" />
        </span>
      ) : null}
      <span>{label || `Call ${phone}`}</span>
    </a>
  );
}
