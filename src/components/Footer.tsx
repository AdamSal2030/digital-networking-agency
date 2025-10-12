"use client";

import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react"; // ✅ crisp phone icon

const Footer = () => {
  const MAILTO = "mailto:sam@digitalnetworkingagency.com";

  const openMail = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    try {
      window.location.assign(MAILTO);
    } catch {
      const a = document.createElement("a");
      a.href = MAILTO;
      a.target = "_top";
      a.style.position = "absolute";
      a.style.left = "-9999px";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  };

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3
                className="text-3xl font-bold mb-4"
                style={{ color: "rgb(203, 255, 0)" }}
              >
                Digital Networking Agency
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We scale brands into industry leaders through top-tier media
                coverage. Get featured in major news outlets and boost your
                credibility, SEO, and sales.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    style={{ color: "rgb(203, 255, 0)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-300">
                    1000+ Businesses Featured
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    style={{ color: "rgb(203, 255, 0)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-300">
                    100% Money Back Guarantee
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    style={{ color: "rgb(203, 255, 0)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-300">256-Bit SSL Secure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links (placeholder) */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-gray-100"></h4>
            <ul className="space-y-3">
              <li><p></p></li>
              <li><p></p></li>
              <li><p></p></li>
              <li><p></p></li>
              <li><p></p></li>
            </ul>
          </div>

          {/* Right Column: Contact Details + Contact Us actions */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-gray-100">Contact</h4>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-0.5"
                  style={{ color: "rgb(203, 255, 0)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-300">
                  6545 MARKET AVE N STE 100 CANTON, OH 44721
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3"
                  style={{ color: "rgb(203, 255, 0)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:sam@digitalnetworkingagency.com"
                  target="_top"
                  onClick={openMail}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  title="Email us"
                >
                  sam@digitalnetworkingagency.com
                </a>
              </div>

              <div className="flex items-center">
                {/* ✅ Replaced weird handset with Lucide Phone */}
                <Phone className="w-5 h-5 mr-3 text-[rgb(203,255,0)]" strokeWidth={2} />
                <a
                  href="tel:+13072841045"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  aria-label="Call DNA at +1 (307) 284-1045"
                >
                  +1 (307) 284-1045
                </a>
              </div>
            </div>

            {/* Contact Us actions */}
            <div className="pt-2">
              <h5 className="text-lg font-semibold mb-4 text-gray-100">
                Contact Us
              </h5>
              <div className="flex flex-wrap gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/dnateams/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Instagram"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:text-black hover:bg-[rgb(203,255,0)] transition-all duration-300"
                  title="Instagram"
                >
                  {/* keep your existing glyph here if you like, or swap to lucide/Instagram */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5 5 0 1 1 0 10.001 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7.001 3.5 3.5 0 0 0 0-7.001zm5-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                  </svg>
                </a>

                {/* Email button */}
                <button
                  type="button"
                  onClick={openMail}
                  aria-label="Send Email"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:text-black hover:bg-[rgb(203,255,0)] transition-all duration-300"
                  title="Email"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </button>

                {/* Phone button */}
                <a
                  href="tel:+13072841045"
                  aria-label="Call Us"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:text-black hover:bg-[rgb(203,255,0)] transition-all duration-300"
                  title="Call"
                >
                  <Phone className="w-5 h-5" strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
          {/* End Right Column */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Digital Networking Agency. All Rights Reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link href="/privacy" aria-label="Privacy Policy" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" aria-label="Terms of Service" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/refunds" aria-label="Refund Policy" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
