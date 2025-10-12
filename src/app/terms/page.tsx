// app/terms/page.tsx
"use client";

import React from "react";
import Link from "next/link";

const ACCENT = "rgb(203, 255, 0)"; // neon yellow to match site theme


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

export default function TermsPage() {
  return (
    <main
      className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      {/* Ambient blobs like the Hero */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply blur-xl opacity-10 animate-pulse" style={{ backgroundColor: ACCENT }} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply blur-xl opacity-10 animate-pulse" style={{ backgroundColor: ACCENT, animationDelay: "2s" }} />
        <div className="absolute top-40 left-40 w-80 h-80 rounded-full mix-blend-multiply blur-xl opacity-10 animate-pulse" style={{ backgroundColor: ACCENT, animationDelay: "4s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <header className="text-center uppercase mb-8">
          <p className="text-xs tracking-[0.25em] text-gray-400">LEGAL</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-100 mt-2">Terms of Service</h1>
          <p className="mt-3 text-gray-400">Effective Date: <span className="font-semibold text-gray-200">October 11, 2025</span></p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* TOC */}
          <aside className="lg:col-span-3 order-last lg:order-first">
            <div className="sticky top-24 rounded-2xl border border-gray-700/40 bg-white/5 backdrop-blur p-4">
              <h3 className="text-sm font-semibold text-gray-200 mb-3">On this page</h3>
              <nav className="text-sm space-y-2 text-gray-300">
                {[
                  { id: "intro", label: "Introduction" },
                  { id: "use", label: "1. Use of Our Services" },
                  { id: "eligibility", label: "2. Eligibility" },
                  { id: "services-content", label: "3. Services & Content" },
                  { id: "pricing", label: "4. Pricing & Payments" },
                  { id: "client", label: "5. Client Responsibilities" },
                  { id: "ip", label: "6. Intellectual Property Rights" },
                  { id: "confidentiality", label: "7. Confidentiality" },
                  { id: "liability", label: "8. Limitation of Liability" },
                  { id: "warranties", label: "9. Disclaimer of Warranties" },
                  { id: "thirdparty", label: "10. Third-Party Links" },
                  { id: "indemnification", label: "11. Indemnification" },
                  { id: "termination", label: "12. Termination" },
                  { id: "law", label: "13. Governing Law" },
                  { id: "changes", label: "14. Changes to These Terms" },
                  { id: "contact", label: "15. Contact Information" },
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

          {/* Main content */}
          <article className="lg:col-span-9">
            <div
              className="rounded-3xl border border-gray-700/40 bg-white/10 backdrop-blur-xl shadow-2xl p-6 sm:p-10"
              style={{ boxShadow: "0 10px 25px rgba(203, 255, 0, 0.08)" }}
            >
              <Section id="intro" title="Introduction">
                <p>
                  Welcome to Digital Networking Agency ("we," "us," "our"). These Terms of Service ("Terms") govern your use of our website,
                  <Link href="https://www.digitalnetworkingagency.com/" className="underline decoration-dotted underline-offset-4 hover:text-gray-100 ml-1">https://www.digitalnetworkingagency.com/</Link>
                  {" "}(the "Site"), and any products, services, or features offered by us (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, please do not use the Site or our Services.
                </p>
              </Section>

              <Section id="use" title="1. Use of Our Services">
                <p>You agree to use our Services only for lawful purposes and in accordance with these Terms. You must not:</p>
                <ul>
                  <li>Use the Site in a way that violates any applicable law or regulation.</li>
                  <li>Attempt to gain unauthorized access to any portion of the Site or related systems.</li>
                  <li>Interfere with or disrupt the operation of the Site or the servers hosting it.</li>
                  <li>Use our content or materials for resale, redistribution, or any unauthorized commercial purpose.</li>
                </ul>
              </Section>

              <Section id="eligibility" title="2. Eligibility">
                <p>
                  You must be at least 18 years old (or the legal age in your jurisdiction) to use our Services. By using our Site, you represent that you have the legal capacity to enter into this agreement.
                </p>
              </Section>

              <Section id="services-content" title="3. Services and Content">
                <p>
                  We provide digital marketing, PR, branding, and media publication services through our platform. All content, materials, and intellectual property on the Site—including text, graphics, logos, images, videos, and design—are owned or licensed by Digital Networking Agency and protected by copyright and trademark laws. You may not reproduce, modify, distribute, display, or use any content without our written permission.
                </p>
              </Section>

              <Section id="pricing" title="4. Pricing and Payments">
                <p>
                  All pricing for our Services is listed in U.S. Dollars (USD) unless stated otherwise. Payment terms are specified in the agreement or invoice you receive before starting any project.
                </p>
                <p>By purchasing a service, you agree to:</p>
                <ul>
                  <li>Provide accurate payment and billing information.</li>
                  <li>Authorize us to charge your selected payment method.</li>
                  <li>Pay all applicable fees according to the agreed schedule.</li>
                </ul>
                <p>
                  Once work begins, all sales are final. Refunds are only issued at our discretion or in cases where the service has not been delivered as described.
                </p>
              </Section>

              <Section id="client" title="5. Client Responsibilities">
                <p>
                  Clients are responsible for providing accurate, complete, and timely information necessary for the delivery of our Services. Delays in providing required content, approvals, or feedback may result in project delays.
                </p>
                <p>Clients also agree to:</p>
                <ul>
                  <li>Obtain any necessary rights or permissions for materials submitted to us.</li>
                  <li>Review and approve final drafts before publication.</li>
                  <li>Avoid making misleading or false claims in materials provided for PR or publication.</li>
                </ul>
              </Section>

              <Section id="ip" title="6. Intellectual Property Rights">
                <p>
                  All intellectual property created by Digital Networking Agency (including but not limited to written articles, marketing copy, graphics, layouts, and designs) remains the property of Digital Networking Agency until full payment is received. Upon full payment, clients receive a non-exclusive, royalty-free license to use the materials for marketing and branding purposes. However, we retain the right to display the work in our portfolio, website, or marketing materials.
                </p>
              </Section>

              <Section id="confidentiality" title="7. Confidentiality">
                <p>
                  We value your privacy and confidentiality. All materials, discussions, and project details shared between you and our team will be kept strictly confidential and not disclosed to third parties without your consent, except as required by law.
                </p>
              </Section>

              <Section id="liability" title="8. Limitation of Liability">
                <p>
                  To the fullest extent permitted by law, Digital Networking Agency and its affiliates, employees, or contractors shall not be liable for any: indirect, incidental, or consequential damages; loss of profits, business, or reputation; or data loss or service interruptions. Our total liability for any claim arising out of or relating to these Terms or the Services will not exceed the amount paid by you for the specific service in question.
                </p>
              </Section>

              <Section id="warranties" title="9. Disclaimer of Warranties">
                <ul>
                  <li>All Services are provided “as is” and “as available.”</li>
                  <li>We make no warranties, express or implied, regarding the Site or Services, including but not limited to fitness for a particular purpose, accuracy, or non-infringement.</li>
                  <li>We do not guarantee that the Site will be uninterrupted, error-free, or secure.</li>
                </ul>
              </Section>

              <Section id="thirdparty" title="10. Third-Party Links">
                <p>
                  Our Site may include links to third-party websites or services that we do not own or control. We are not responsible for the content, policies, or practices of these third parties. Your interactions with third-party sites are solely between you and those entities.
                </p>
              </Section>

              <Section id="indemnification" title="11. Indemnification">
                <p>
                  You agree to indemnify, defend, and hold harmless Digital Networking Agency, its directors, employees, and partners from any claims, damages, losses, liabilities, or expenses (including attorney fees) arising out of your use of the Site, violation of these Terms, or infringement of any third-party rights.
                </p>
              </Section>

              <Section id="termination" title="12. Termination">
                <p>
                  We reserve the right to suspend or terminate your access to our Site or Services at any time, without notice, for conduct that we believe violates these Terms or is harmful to our interests or other users.
                </p>
              </Section>

              <Section id="law" title="13. Governing Law">
                <p>
                  These Terms are governed by and construed in accordance with the laws of the State of Ohio, United States, without regard to its conflict of law principles. You agree that any disputes will be resolved in the appropriate courts located in Canton, Ohio.
                </p>
              </Section>

              <Section id="changes" title="14. Changes to These Terms">
                <p>
                  We may update or modify these Terms from time to time. The latest version will always be posted on this page with the updated “Effective Date.” By continuing to use our Services after changes are posted, you accept the revised Terms.
                </p>
              </Section>

              <Section id="contact" title="15. Contact Information">
                <address className="not-italic leading-relaxed">
                  <div className="font-semibold text-gray-100">Digital Networking Agency</div>
                  <div>6545 MARKET AVE N STE 100</div>
                  <div>CANTON, OH 44721</div>
                  <div className="mt-3">Email: <a className="underline decoration-dotted underline-offset-4" href="mailto:sam@digitalnetworkingagency.com">sam@digitalnetworkingagency.com</a></div>
                  <div>Phone: <a className="underline decoration-dotted underline-offset-4" href="tel:+13072841045">+1 (307) 284-1045</a></div>
                </address>
              </Section>

              {/* CTA row */}
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">© {new Date().getFullYear()} Digital Networking Agency. All rights reserved.</p>
          </article>
        </div>
      </div>

      {/* Floating scroll indicator (optional) */}
      <div className="hidden md:block fixed bottom-6 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden>
        <svg className="w-6 h-6" style={{ color: ACCENT }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </main>
  );
}
