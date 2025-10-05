"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function SuccessPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{ backgroundColor: "rgb(203, 255, 0)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{ backgroundColor: "rgb(203, 255, 0)", animationDelay: "2s" }}
        />
        <div
          className="absolute top-40 left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{ backgroundColor: "rgb(203, 255, 0)", animationDelay: "4s" }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 inline-flex items-center justify-center">
          <CheckCircle2
            className="w-16 h-16"
            style={{ color: "rgb(203, 255, 0)" }}
          />
        </div>

        {/* Heading + copy */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-4 leading-tight">
          Payment Successful <span aria-hidden>🎉</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
          We’ve received your order. A confirmation email is on its way.
          You’ll hear from our team shortly to kick things off.
        </p>

        {/* Receipt / next steps card */}
        <div className="bg-gray-800/80 border border-gray-700 rounded-2xl p-6 text-left max-w-2xl mx-auto mb-10">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">
            What happens next?
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span
                className="mt-1 inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: "rgb(203, 255, 0)" }}
              />
              You’ll receive an onboarding email with a short questionnaire so we can write your article.
            </li>
            <li className="flex items-start gap-3">
              <span
                className="mt-1 inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: "rgb(203, 255, 0)" }}
              />
              Our team drafts your feature (600–1000 words) and sends it to you for review and approval.
            </li>
            <li className="flex items-start gap-3">
              <span
                className="mt-1 inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: "rgb(203, 255, 0)" }}
              />
              Once approved, we publish to a top-tier outlet and share the live link with you.
            </li>
            <li className="flex items-start gap-3">
              <span
                className="mt-1 inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: "rgb(203, 255, 0)" }}
              />
              Any questions? contact at sam@digitalnetworkingagency.com
            </li>
          </ul>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="text-black px-8 py-3 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            style={{
              backgroundColor: "rgb(203, 255, 0)",
              boxShadow: "0 10px 25px rgba(203, 255, 0, 0.2)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 20px 40px rgba(203, 255, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 10px 25px rgba(203, 255, 0, 0.2)";
            }}
          >
            Back to Home
          </Link>

          <Link
            href="/about"
            className="px-8 py-3 rounded-full font-bold text-lg border border-gray-600 text-gray-100 hover:bg-gray-800/60 transition-colors"
          >
            Learn more about us
          </Link>
        </div>

        {/* Guarantee */}
        <p className="text-gray-400 text-lg italic mt-10">
          *100% Money Back Guarantee
        </p>
      </div>

      {/* Subtle bottom accent */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-80">
        <svg
          className="w-6 h-6 animate-bounce"
          style={{ color: "rgb(203, 255, 0)" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
