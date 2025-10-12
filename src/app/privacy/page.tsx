// app/privacy/page.tsx
"use client";

import React from "react";
import Link from "next/link";

// Theme constants to match the hero section
const ACCENT = "rgb(203, 255, 0)"; // neon yellow



// Small helper component for section blocks
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

export default function PrivacyPolicyPage() {
  return (
    <main
      className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      {/* Faint floating blobs to mirror the Hero */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply blur-xl opacity-10 animate-pulse" style={{ backgroundColor: ACCENT }} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply blur-xl opacity-10 animate-pulse" style={{ backgroundColor: ACCENT, animationDelay: "2s" }} />
        <div className="absolute top-40 left-40 w-80 h-80 rounded-full mix-blend-multiply blur-xl opacity-10 animate-pulse" style={{ backgroundColor: ACCENT, animationDelay: "4s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header / Title */}
        <header className="text-center uppercase mb-8">
          <p className="text-xs tracking-[0.25em] text-gray-400">LEGAL</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-100 mt-2">
            Privacy Policy
          </h1>
          <p className="mt-3 text-gray-400">Effective Date: <span className="font-semibold text-gray-200">October 11, 2025</span></p>
        </header>

        {/* Content layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* TOC */}
          <aside className="lg:col-span-3 order-last lg:order-first">
            <div
              className="sticky top-24 rounded-2xl border border-gray-700/40 bg-white/5 backdrop-blur p-4"
            >
              <h3 className="text-sm font-semibold text-gray-200 mb-3">On this page</h3>
              <nav className="text-sm space-y-2 text-gray-300">
                {[
                  { id: "intro", label: "Introduction" },
                  { id: "collect", label: "1. Information We Collect" },
                  { id: "use", label: "2. How We Use Your Info" },
                  { id: "share", label: "3. Sharing Your Information" },
                  { id: "cookies", label: "4. Cookies & Tracking" },
                  { id: "rights", label: "5. Your Rights & Choices" },
                  { id: "retention", label: "6. Data Retention" },
                  { id: "security", label: "7. Data Security" },
                  { id: "transfers", label: "8. International Transfers" },
                  { id: "contact", label: "9. Contact Information" },
                  { id: "updates", label: "10. Updates to This Policy" },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block rounded px-2 py-1 hover:text-black hover:bg-[rgb(203,255,0)]/90 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main card */}
          <article className="lg:col-span-9">
            <div
              className="rounded-3xl border border-gray-700/40 bg-white/10 backdrop-blur-xl shadow-2xl p-6 sm:p-10"
              style={{ boxShadow: "0 10px 25px rgba(203, 255, 0, 0.08)" }}
            >
              {/* Intro */}
              <Section id="intro" title="Introduction">
                <p>
                  Digital Networking Agency ("we," "us," "our") operates
                  <Link href="https://www.digitalnetworkingagency.com/" className="underline decoration-dotted underline-offset-4 hover:text-gray-100 ml-1">https://www.digitalnetworkingagency.com/</Link>
                  {" "}(the "Site"). This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website or use our services. By using our Site or services, you agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </Section>

              {/* 1. Information We Collect */}
              <Section id="collect" title="1. Information We Collect">
                <p>We collect several types of information to provide and improve our services.</p>
                <h3 className="text-xl font-semibold text-gray-100 mt-6">a) Information You Provide</h3>
                <ul>
                  <li><strong>Contact Information:</strong> Name, email address, phone number, company name, etc.</li>
                  <li><strong>Payment Information:</strong> Billing address and payment details (processed securely by third-party payment processors).</li>
                  <li><strong>Communications:</strong> Messages, inquiries, or feedback you send us through forms, chat, or email.</li>
                  <li><strong>Project Details:</strong> Any files, media, or text you provide for PR campaigns or marketing materials.</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-100 mt-6">b) Automatically Collected Information</h3>
                <ul>
                  <li><strong>Usage Data:</strong> IP address, browser type, operating system, referring URLs, pages visited, and time spent on the Site.</li>
                  <li><strong>Cookies & Tracking:</strong> We use cookies, pixels, and analytics tools to improve user experience and analyze site traffic.</li>
                  <li><strong>Device Data:</strong> Technical data such as device type, screen resolution, and connection information.</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-100 mt-6">c) Information From Third Parties</h3>
                <p>We may receive data from third-party services (like analytics, payment processors, or advertising networks) and combine it with the information you provide.</p>
              </Section>

              {/* 2. How We Use Your Information */}
              <Section id="use" title="2. How We Use Your Information">
                <ul>
                  <li>Deliver and improve our services and website</li>
                  <li>Process transactions and provide customer support</li>
                  <li>Send updates, marketing emails, and promotional content (only when you opt in)</li>
                  <li>Respond to inquiries or support requests</li>
                  <li>Monitor and analyze website usage and trends</li>
                  <li>Protect against fraud, unauthorized access, or illegal activity</li>
                  <li>Comply with applicable laws and regulations</li>
                </ul>
              </Section>

              {/* 3. Sharing */}
              <Section id="share" title="3. Sharing Your Information">
                <p>We do not sell your personal data. We may share your information only in these cases:</p>
                <ul>
                  <li><strong>Service Providers:</strong> Trusted vendors who help us operate our business (e.g., hosting, payment processing, analytics).</li>
                  <li><strong>Legal Requirements:</strong> To comply with laws, subpoenas, or legal processes.</li>
                  <li><strong>Business Transfers:</strong> If we merge or are acquired, your data may be transferred as part of that transaction.</li>
                  <li><strong>Protection of Rights:</strong> To enforce terms, prevent fraud, or protect our rights and safety.</li>
                  <li><strong>Aggregated Data:</strong> Non-personal data that cannot identify you may be shared for analytics or marketing.</li>
                </ul>
              </Section>

              {/* 4. Cookies */}
              <Section id="cookies" title="4. Cookies and Tracking Technologies">
                <p>
                  We use cookies and similar technologies to improve website performance and functionality, understand user preferences and traffic patterns, and provide targeted advertisements or personalized content. You can manage cookies through your browser settings. Disabling cookies may limit some features of the Site.
                </p>
              </Section>

              {/* 5. Rights */}
              <Section id="rights" title="5. Your Rights and Choices">
                <p>Depending on your location, you may have the right to:</p>
                <ul>
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data or object to processing</li>
                  <li>Withdraw consent (where applicable)</li>
                </ul>
                <p>
                  To exercise your rights, please contact us using the details in Section 9 below. We may need to verify your identity before processing certain requests.
                </p>
              </Section>

              {/* 6. Retention */}
              <Section id="retention" title="6. Data Retention">
                <p>
                  We retain your data only as long as necessary for the purposes described here, or as required by law. Once your information is no longer needed, we securely delete or anonymize it.
                </p>
              </Section>

              {/* 7. Security */}
              <Section id="security" title="7. Data Security">
                <p>
                  We use reasonable administrative, technical, and physical safeguards to protect your personal data from unauthorized access, disclosure, or misuse. However, no method of internet transmission is 100% secure.
                </p>
              </Section>

              {/* 8. Transfers */}
              <Section id="transfers" title="8. International Data Transfers">
                <p>
                  If you access our Site from outside the United States, please note that your data may be transferred and processed in the U.S., which may have different data protection laws. We take steps to ensure your data remains protected.
                </p>
              </Section>

              {/* 9. Contact */}
              <Section id="contact" title="9. Contact Information">
                <address className="not-italic leading-relaxed">
                  <div className="font-semibold text-gray-100">Digital Networking Agency</div>
                  <div>6545 MARKET AVE N STE 100</div>
                  <div>CANTON, OH 44721</div>
                  <div className="mt-3">Email: <a className="underline decoration-dotted underline-offset-4" href="mailto:sam@digitalnetworkingagency.com">sam@digitalnetworkingagency.com</a></div>
                  <div>Phone: <a className="underline decoration-dotted underline-offset-4" href="tel:+13072841045">+1 (307) 284-1045</a></div>
                </address>
              </Section>

              {/* 10. Updates */}
              <Section id="updates" title="10. Updates to This Policy">
                <p>
                  We may update this Privacy Policy periodically. When we do, we will revise the “Effective Date” at the top. Any significant changes will be communicated through a notice on our Site. Please review this page occasionally to stay informed about how we protect your information.
                </p>
              </Section>

              {/* Back to top & CTA row */}
            </div>

            {/* Footnote */}
            <p className="text-center text-xs text-gray-400 mt-6">
              © {new Date().getFullYear()} Digital Networking Agency. All rights reserved.
            </p>
          </article>
        </div>
      </div>

      {/* Floating scroll indicator (optional aesthetic) */}
      <div className="hidden md:block fixed bottom-6 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden>
        <svg className="w-6 h-6" style={{ color: ACCENT }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </main>
  );
}
