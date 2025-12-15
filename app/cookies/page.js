import Link from "next/link";

const cookieTypes = [
  {
    title: "Essential cookies",
    body: "Required for security and basic site functions (e.g., remembering consent choices).",
  },
  {
    title: "Analytics cookies",
    body: "Help us understand site usage so we can improve (e.g., page views, clicks). Set only if you accept.",
  },
  {
    title: "Performance & diagnostics",
    body: "Optional tools to monitor reliability and load times. Disabled unless you opt in.",
  },
  {
    title: "Marketing/attribution",
    body: "Used to measure the effectiveness of campaigns. Only set with consent.",
  },
];

export default function CookiesPage() {
  return (
    <div className="space-y-10 py-10 md:py-14">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">Cookie Notice</p>
        <h1 className="text-3xl font-bold">How ScotSMART uses cookies</h1>
        <p className="text-gray-700">
          We use cookies to keep the site secure, remember your preferences and understand how visitors use the site. Some
          cookies are essential; others are optional and only set if you accept them.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {cookieTypes.map((item) => (
          <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
            <p className="mt-2 text-gray-700">{item.body}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">Managing your choices</h2>
        <ul className="mt-3 space-y-2 text-gray-700">
          <li>• You can change your consent at any time using the cookie banner controls.</li>
          <li>• You can clear cookies in your browser settings to remove prior choices.</li>
          <li>• Essential cookies remain active to keep the site secure and functional.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Third-party services we may use</h2>
        <p className="text-gray-700">
          If enabled, we may use analytics (e.g., Google Analytics) to understand site usage. Marketing/attribution cookies
          are only set if you opt in. You can decline non-essential cookies via the banner.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
        <p className="text-gray-700">
          Questions about cookies or your data? Contact us at{" "}
          <a href="mailto:hello@scotsmart.co.uk" className="font-semibold text-gray-900">
            hello@scotsmart.co.uk
          </a>
          . See our <Link className="text-gray-900 font-semibold" href="/privacy">Privacy Policy</Link> for more detail.
        </p>
      </section>
    </div>
  );
}
