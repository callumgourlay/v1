"use client";

import { useEffect, useState } from "react";

export default function CookieBanner({ accent }) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const palette = accent || { primary: "#307fb9", secondary: "#3eaedf" };

  useEffect(() => {
    const consent = window.localStorage.getItem("cookie-consent");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!consent) setVisible(true);
    setMounted(true);
  }, []);

  const acceptAll = () => {
    window.localStorage.setItem("cookie-consent", "all");
    setVisible(false);
  };

  const essentialOnly = () => {
    window.localStorage.setItem("cookie-consent", "essential");
    setVisible(false);
  };

  if (!mounted || !visible) return null;

  return (
    <div
      className="fixed bottom-4 left-1/2 z-50 w-[95%] max-w-3xl -translate-x-1/2 overflow-hidden rounded-2xl text-white shadow-2xl ring-2 ring-white/10"
      style={{
        background: `linear-gradient(135deg, ${palette.primary}, ${palette.secondary})`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-4 h-24 w-24 rounded-full bg-white blur-2xl" />
      </div>
      <div className="relative flex flex-col gap-4 p-5 md:flex-row md:items-center md:gap-5">
        <div className="flex-1 space-y-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ring-white/30">
            <span className="h-2 w-2 rounded-full bg-white" />
            Cookies & privacy
          </div>
          <p className="text-sm text-white/90">
            We use essential cookies to run the site. Analytics/marketing cookies are optional and only set if you accept.
            You can change your mind anytime.
          </p>
          <a
            href="/cookies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/90"
          >
            <span>View cookie notice</span>
            <span aria-hidden>→</span>
          </a>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            onClick={essentialOnly}
            className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Essential only
          </button>
          <button
            onClick={acceptAll}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-md transition hover:opacity-90"
            style={{ color: palette.primary }}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
