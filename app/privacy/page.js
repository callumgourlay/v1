export default function PrivacyPage() {
  return (
    <div className="space-y-10 py-10 md:py-14">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">Privacy Policy</p>
        <h1 className="text-3xl font-bold">How ScotSMART Limited handles your data</h1>
        <p className="text-gray-700">
          We are committed to protecting your personal information. This notice explains what data we collect, how we use
          it, and your rights.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Who we are</h2>
        <p className="text-gray-700">
          ScotSMART Limited, registered in Scotland (SC679217). Registered office: 12 Pankhurst Place, East Kilbride,
          Glasgow, G74 4BH. Contact: hello@scotsmart.co.uk, 0141 478 0794.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Data we may collect</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• Contact details (name, email, phone) when you enquire or book a visit.</li>
          <li>• Business/home details relevant to providing IT, Wi-Fi or audio services.</li>
          <li>• Technical data (logs, diagnostics) when troubleshooting systems.</li>
          <li>• Usage data on this site (e.g., pages visited) if you accept analytics cookies.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">How we use your data</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• To respond to enquiries, provide quotes and deliver services.</li>
          <li>• To schedule and manage site visits or show home appointments.</li>
          <li>• To improve our website and services (with your consent for analytics).</li>
          <li>• To meet legal/regulatory obligations.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Legal bases</h2>
        <p className="text-gray-700">
          We rely on legitimate interests to respond to enquiries and deliver services, consent for optional analytics/marketing,
          and legal obligation where applicable.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Sharing</h2>
        <p className="text-gray-700">
          We only share data with trusted suppliers/partners when needed to deliver services (e.g., networking or audio
          equipment providers) and only with appropriate safeguards. We do not sell personal data.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Retention</h2>
        <p className="text-gray-700">
          We keep personal data only as long as needed for the purpose collected, legal requirements, or to support/maintain
          work completed for you.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Your rights</h2>
        <p className="text-gray-700">
          You can request access, correction, deletion, restriction, or objection to processing. You can withdraw consent
          for optional cookies/analytics at any time. Contact hello@scotsmart.co.uk to exercise your rights.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Cookies</h2>
        <p className="text-gray-700">
          See our <a className="font-semibold text-gray-900" href="/cookies">Cookie Notice</a> for how we use cookies and how to manage your preferences.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Contact and complaints</h2>
        <p className="text-gray-700">
          Email hello@scotsmart.co.uk or call 0141 478 0794 with questions. You can also complain to the ICO (Information
          Commissioner’s Office) in the UK if you are unhappy with how we handle your data.
        </p>
      </section>
    </div>
  );
}
