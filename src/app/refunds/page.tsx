// app/refunds/page.tsx
"use client";

import React from "react";
import Link from "next/link";

const ACCENT = "rgb(203, 255, 0)";


function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
        <span className="pr-2" style={{ color: ACCENT }}>▸</span>
        {title}
      </h2>
      <div className="prose prose-invert max-w-none text-gray-300">
        {children}
      </div>
      <div className="my-8 h-px w-full bg-gray-700/40" />
    </section>
  );
}

export default function RefundPolicyPage() {
  return (
    <main
      className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      {/* Background decorations */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply blur-xl opacity-10 animate-pulse" style={{ backgroundColor: ACCENT }} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply blur-xl opacity-10 animate-pulse" style={{ backgroundColor: ACCENT, animationDelay: "2s" }} />
        <div className="absolute top-40 left-40 w-80 h-80 rounded-full mix-blend-multiply blur-xl opacity-10 animate-pulse" style={{ backgroundColor: ACCENT, animationDelay: "4s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <header className="text-center uppercase mb-8">
          <p className="text-xs tracking-[0.25em] text-gray-400">LEGAL</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-100 mt-2">Refund Policy</h1>
          <p className="mt-3 text-gray-400">Effective Date: <span className="font-semibold text-gray-200">October 11, 2025</span></p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3 order-last lg:order-first">
            <div className="sticky top-24 rounded-2xl border border-gray-700/40 bg-white/5 backdrop-blur p-4">
              <h3 className="text-sm font-semibold text-gray-200 mb-3">On this page</h3>
              <nav className="text-sm space-y-2 text-gray-300">
                {[
                  { id: "intro", label: "Introduction" },
                  { id: "general", label: "1. General Policy" },
                  { id: "eligibility", label: "2. Eligibility for Refunds" },
                  { id: "nonrefundable", label: "3. Non-Refundable Services" },
                  { id: "cancellations", label: "4. Cancellations" },
                  { id: "delivery", label: "5. Delivery of Services" },
                  { id: "chargebacks", label: "6. Chargebacks" },
                  { id: "contact", label: "7. Contact Us" },
                  { id: "updates", label: "8. Policy Updates" },
                ].map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="block rounded px-2 py-1 hover:text-black hover:bg-[rgb(203,255,0)]/90 transition-colors">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="lg:col-span-9">
            <div className="rounded-3xl border border-gray-700/40 bg-white/10 backdrop-blur-xl shadow-2xl p-6 sm:p-10" style={{ boxShadow: "0 10px 25px rgba(203, 255, 0, 0.08)" }}>
              <Section id="intro" title="Introduction">
                <p>
                  Thank you for choosing Digital Networking Agency ("we," "us," "our"). We value your business and are committed to providing transparent, high-quality services. This Refund Policy explains the conditions under which refunds may or may not be issued for purchases made through
                  <Link href="https://www.digitalnetworkingagency.com/" className="underline decoration-dotted underline-offset-4 hover:text-gray-100 ml-1">https://www.digitalnetworkingagency.com/</Link>
                  {" "}(the "Site"). By purchasing from us, you acknowledge and agree to the terms below.
                </p>
              </Section>

              <Section id="general" title="1. General Policy">
                <p>
                  All sales made through our website or directly with our representatives are final. Due to the nature of our services — including content creation, public relations, and media publication — once work has begun or materials have been submitted for processing, no refunds will be issued.
                  We dedicate time, resources, and partnerships to deliver your campaign, and once initiated, those costs cannot be reversed or recovered.
                </p>
              </Section>

              <Section id="eligibility" title="2. Eligibility for Refunds">
                <p>Refunds may only be considered in the following limited situations:</p>
                <ul>
                  <li><strong>Duplicate or Accidental Payments:</strong> If you are charged twice for the same transaction, we will promptly issue a refund for the duplicate payment.</li>
                  <li><strong>Service Not Delivered:</strong> If we are unable to deliver your agreed service due to reasons solely attributable to us, a full or partial refund may be issued.</li>
                  <li><strong>Technical Error:</strong> If a technical issue prevents your order from being processed, and no work has started, you may request a full refund.</li>
                </ul>
                <p>
                  Refund requests must be made in writing via email within 7 days of the original payment date. After this period, all payments are considered final.
                </p>
              </Section>

              <Section id="nonrefundable" title="3. Non-Refundable Services">
                <p>Refunds will not be provided for:</p>
                <ul>
                  <li>Completed services or campaigns that have been partially or fully delivered</li>
                  <li>Articles or PR placements that have already been published or submitted for publication</li>
                  <li>Missed deadlines due to client delay</li>
                  <li>Custom service packages, digital assets, or design work once creation has begun</li>
                  <li>Situations beyond our control, including editorial discretion by third-party publishers or partner site issues</li>
                </ul>
              </Section>

              <Section id="cancellations" title="4. Cancellations">
                <p>
                  If you wish to cancel a service before work has begun, contact us immediately at <a href="mailto:sam@digitalnetworkingagency.com" className="underline">sam@digitalnetworkingagency.com</a> or call <a href="tel:+13072841045" className="underline">+1 (307) 284-1045</a>.
                  Cancellations requested before any work starts may be eligible for a partial refund (typically less a 20–30% administrative fee). Once our team begins work, no refund will be granted.
                </p>
              </Section>

              <Section id="delivery" title="5. Delivery of Services">
                <p>
                  Our services include (but are not limited to) PR campaigns, article writing, press release distribution, SEO optimization, and digital placements. Delivery timelines vary by publication and campaign scope. We make every effort to deliver on agreed timelines, but delays caused by third-party publishers or editorial processes are not grounds for a refund.
                </p>
              </Section>

              <Section id="chargebacks" title="6. Chargebacks">
                <p>
                  Filing a chargeback or payment dispute without first contacting us will result in immediate termination of any ongoing services. We encourage clients to reach out directly to resolve any issue amicably — we are always here to help.
                </p>
              </Section>

              <Section id="contact" title="7. Contact Us">
                <address className="not-italic leading-relaxed">
                  <div className="font-semibold text-gray-100">Digital Networking Agency</div>
                  <div>6545 MARKET AVE N STE 100</div>
                  <div>CANTON, OH 44721</div>
                  <div className="mt-3">Email: <a className="underline decoration-dotted underline-offset-4" href="mailto:sam@digitalnetworkingagency.com">sam@digitalnetworkingagency.com</a></div>
                  <div>Phone: <a className="underline decoration-dotted underline-offset-4" href="tel:+13072841045">+1 (307) 284-1045</a></div>
                </address>
              </Section>

              <Section id="updates" title="8. Policy Updates">
                <p>
                  We may revise this Refund Policy from time to time. Updates will be posted on this page with a new “Effective Date.” We encourage you to review this page periodically to stay informed of our policies.
                </p>
              </Section>
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">© {new Date().getFullYear()} Digital Networking Agency. All rights reserved.</p>
          </article>
        </div>
      </div>

      <div className="hidden md:block fixed bottom-6 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden>
        <svg className="w-6 h-6" style={{ color: ACCENT }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </main>
  );
}