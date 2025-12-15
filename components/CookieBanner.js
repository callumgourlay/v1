"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

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
    <div className="fixed bottom-4 left-1/2 z-50 w-[95%] max-w-3xl -translate-x-1/2 rounded-2xl bg-gray-900 text-white shadow-2xl ring-2 ring-emerald-400/50">
      <div className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:gap-4">
        <div className="flex-1 space-y-1">
          <p className="text-base font-semibold">Cookies & privacy</p>
          <p className="text-sm text-gray-200">
            We use essential cookies to run the site. Analytics/marketing cookies are optional and only set if you accept.
            You can change your mind anytime.
          </p>
          <a href="/cookies" className="text-sm font-semibold text-emerald-200 hover:underline">
            View cookie notice
          </a>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            onClick={essentialOnly}
            className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition"
          >
            Essential only
          </button>
          <button
            onClick={acceptAll}
            className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-emerald-600 transition"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
