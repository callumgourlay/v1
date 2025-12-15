const sections = [
  {
    title: "1. Acceptance of Terms and Conditions",
    body: `These terms and conditions govern the provision of security systems and IT consultancy services provided by Scotsmart Limited (“the Company”), registered in Scotland under company number SC679217. By accepting a quote or instructing the Company to commence work, you (“the Client”) agree to be bound by these terms. It is the Client’s responsibility to read and understand these terms before proceeding.`,
  },
  {
    title: "2. Services",
    body: `The Company provides security systems installation, maintenance, and IT consultancy services tailored to Client needs. Services may include design, installation, configuration, testing, and maintenance of access control, CCTV, alarms, and perimeter security; plus IT consultancy covering network design, implementation, optimisation, cybersecurity assessments, data protection strategies, and IT risk management. Scope, milestones, deliverables, and timelines are set out in the written agreement. The Company follows industry best practices and regulatory requirements to deliver high-quality solutions.`,
  },
  {
    title: "3. Payment Terms",
    body: `Payment is due per the agreed fees and schedule in the written agreement. Late payments may incur interest at 8% per annum above the Bank of England base rate, accruing daily until paid. The Company may suspend Services until overdue invoices (with interest) are settled and may pursue legal recovery at the Client’s expense. Payment disputes should be raised promptly to avoid disruption to Services.`,
  },
  {
    title: "4. Client Obligations",
    body: `The Client must cooperate, provide access and accurate information, and respond promptly to requests. The Client must ensure compliance with applicable laws and standards, protect Company personnel and equipment on site, and pay on time. Confidential or sensitive information shared by the Company must be kept confidential. Feedback on deliverables should be timely to avoid delays.`,
  },
  {
    title: "5. Limitation of Liability",
    body: `The Company’s total liability is limited to £1,500 per claim or series of related claims. The Company is not liable for indirect or consequential losses, loss of profits, revenue, business, data, goodwill, or for security incidents beyond reasonable control. The Company is not liable for delays caused by events such as acts of God, war, terrorism, strikes, epidemics, or natural disasters. Third-party suppliers engaged by the Company benefit from these limitations. Nothing limits liability for death or personal injury caused by negligence, fraud, or other liability that cannot be excluded by law. The Client must take reasonable steps to mitigate losses.`,
  },
  {
    title: "6. Confidentiality",
    body: `“Confidential Information” includes any information marked confidential or that should reasonably be considered confidential. The Receiving Party must use it only to perform obligations under this agreement, protect it from unauthorised disclosure, and not share it without consent unless required by law. Exceptions apply where information is public, already known, independently developed, or lawfully obtained from a third party. Confidentiality obligations survive termination.`,
  },
  {
    title: "7. Data Protection",
    body: `The Company may process personal data on behalf of the Client and will comply with applicable data protection laws, including the UK Data Protection Act 2018 and GDPR.`,
  },
  {
    title: "8. Intellectual Property Rights",
    body: `Intellectual property created by the Company in providing Services remains the Company’s unless agreed otherwise. Materials provided by the Company may not be reproduced or used beyond the agreed Services without consent.`,
  },
  {
    title: "9. Force Majeure",
    body: `The Company is not liable for delays or failures caused by events beyond reasonable control, including acts of God, war, terrorism, strikes, epidemics, pandemics, or natural disasters.`,
  },
  {
    title: "10. Late Payment Interest",
    body: `If payment is late, interest at 8% per annum above the Bank of England base rate applies, accruing daily until paid. The Company reserves the right to claim interest under the Late Payment of Commercial Debts (Interest) Act 1998.`,
  },
  {
    title: "11. Termination",
    body: `Either party may terminate with written notice if the other materially breaches these terms and fails to remedy within 14 days of notice. Notice period for termination is 30 days from written notice. The Company may terminate immediately for non-payment not remedied within 14 days of notice; all outstanding invoices and interest then become payable. Rights and obligations accrued before termination remain. Confidentiality, limitation of liability, indemnification, governing law, and other surviving provisions continue. Notices must be in writing and delivered personally or by registered post to the registered or last known address.`,
  },
  {
    title: "12. Governing Law",
    body: `These terms are governed by Scots law. Disputes are subject to the exclusive jurisdiction of the Scottish courts.`,
  },
  {
    title: "13. Amendments",
    body: `Amendments must be in writing and signed by both parties.`,
  },
  {
    title: "14. Subcontracting",
    body: `The Company may subcontract Services but remains responsible for performance. The Client agrees to cooperate with subcontractors engaged by the Company.`,
  },
  {
    title: "15. Dispute Resolution",
    body: `The parties will first seek to resolve disputes through negotiation and mediation in good faith. If unresolved, either party may initiate legal proceedings per governing law and jurisdiction.`,
  },
  {
    title: "16. Insurance",
    body: `The Client agrees to maintain adequate insurance (e.g., professional liability and cyber liability) for liabilities arising from use of the Services.`,
  },
  {
    title: "17. Regulatory Compliance",
    body: `The Client must comply with all applicable laws, regulations, and industry standards related to the Services (including data protection and cybersecurity). The Company is not liable for losses arising from the Client’s non-compliance.`,
  },
];

export default function TermsPage() {
  return (
    <div className="space-y-8 py-10 md:py-14">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
          Scotsmart Limited (SC679217)
        </p>
        <h1 className="text-3xl font-bold">Terms and Conditions</h1>
        <p className="text-gray-700">Version 1.0 - 25/08/2022</p>
      </header>
      <div className="space-y-6">
        {sections.map((section) => (
          <section key={section.title} className="space-y-2 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
            <p className="text-gray-700 leading-relaxed">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
