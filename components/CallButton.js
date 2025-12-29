"use client";

export default function CallButton({
  phone,
  label,
  className = "",
  size = "base",
  variant = "solid",
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
  const isGlass = variant === "glass";
  const style = isGlass
    ? {
        background: `linear-gradient(135deg, ${primary}1f, ${primary}33)`,
        borderColor: `${primary}55`,
        color: primary,
        boxShadow: `0 10px 30px ${primary}25`,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }
    : {
        backgroundColor: primary,
        borderColor: primary,
        color: "#ffffff",
        "--tw-ring-color": hover,
      };

  return (
    <a
      href={telLink}
      className={`cta-halo inline-flex items-center justify-center gap-2 rounded-full font-semibold shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition hover:opacity-90 ${
        isGlass ? "text-gray-900" : "text-white"
      } ${sizeClasses} ${className}`}
      style={style}
      data-cta="call-now"
    >
      {icon ? (
        <span className="h-4 w-4 text-current">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5.5 3h3L10 7l-2 2a12 12 0 0 0 6 6l2-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5c-9.4-.5-17-8.1-17.5-17.5A1.5 1.5 0 0 1 5.5 3Z" />
          </svg>
        </span>
      ) : null}
      <span>{label || `Call ${phone}`}</span>
    </a>
  );
}
