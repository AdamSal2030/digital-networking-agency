// src/components/GetStarted.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

const ACCENT = "rgb(203, 255, 0)";

// ⚡ Strong-motion animated background blobs
function AmbientBlobs({ accent = ACCENT }: { accent?: string }) {
  return (
    <>
      <div aria-hidden className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Blob 1 */}
        <div
          className="absolute -top-16 -left-10 w-[30rem] h-[30rem] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(closest-side, ${accent}, transparent 70%)`,
            opacity: 0.28,
            willChange: "transform, filter, opacity",
            animation:
              "blobMove1 18s ease-in-out infinite both, pulse1 6s ease-in-out infinite both, hue 12s linear infinite both",
          }}
        />
        {/* Blob 2 */}
        <div
          className="absolute top-24 -right-12 w-[32rem] h-[32rem] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(closest-side, ${accent}, transparent 70%)`,
            opacity: 0.26,
            willChange: "transform, filter, opacity",
            animation:
              "blobMove2 20s ease-in-out infinite both, pulse2 7s ease-in-out infinite both, hue 14s linear infinite both",
            animationDelay: "0.8s, 0.8s, 2s",
          }}
        />
        {/* Blob 3 */}
        <div
          className="absolute bottom-16 left-1/3 w-[24rem] h-[24rem] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(closest-side, ${accent}, transparent 70%)`,
            opacity: 0.22,
            willChange: "transform, filter, opacity",
            animation:
              "blobMove3 22s ease-in-out infinite both, pulse3 5.5s ease-in-out infinite both, hue 10s linear infinite both",
            animationDelay: "0.2s, 0.2s, 3.4s",
          }}
        />
        {/* Blob 4 */}
        <div
          className="absolute top-1/3 left-8 w-[20rem] h-[20rem] rounded-full blur-2xl"
          style={{
            background: `radial-gradient(closest-side, ${accent}, transparent 70%)`,
            opacity: 0.3,
            willChange: "transform, filter, opacity",
            animation:
              "blobMove4 19s ease-in-out infinite both, pulse4 6.5s ease-in-out infinite both, hue 18s linear infinite both",
            animationDelay: "1.6s, 1.6s, 0.6s",
          }}
        />
        {/* Blob 5 */}
        <div
          className="absolute -bottom-6 right-1/4 w-[22rem] h-[22rem] rounded-full blur-[60px]"
          style={{
            background: `radial-gradient(closest-side, ${accent}, transparent 70%)`,
            opacity: 0.2,
            willChange: "transform, filter, opacity",
            animation:
              "blobMove5 24s ease-in-out infinite both, pulse5 7.5s ease-in-out infinite both, hue 16s linear infinite both",
            animationDelay: "2.4s, 2.4s, 4s",
          }}
        />
      </div>

      {/* Keyframes */}
      <style jsx global>{`
        @keyframes hue {
          0% {
            filter: hue-rotate(0deg) saturate(130%) brightness(105%)
              drop-shadow(0 0 32px rgba(203, 255, 0, 0.25));
          }
          50% {
            filter: hue-rotate(210deg) saturate(160%) brightness(120%)
              drop-shadow(0 0 64px rgba(203, 255, 0, 0.35));
          }
          100% {
            filter: hue-rotate(360deg) saturate(130%) brightness(105%)
              drop-shadow(0 0 32px rgba(203, 255, 0, 0.25));
          }
        }

        @keyframes pulse1 {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.26; }
          50%     { transform: scale(1.18) rotate(4deg); opacity: 0.34; }
        }
        @keyframes pulse2 {
          0%, 100% { transform: scale(1.02) rotate(0deg); opacity: 0.24; }
          50%     { transform: scale(1.15) rotate(-5deg); opacity: 0.32; }
        }
        @keyframes pulse3 {
          0%, 100% { transform: scale(0.98) rotate(0deg); opacity: 0.22; }
          50%     { transform: scale(1.2) rotate(6deg); opacity: 0.3; }
        }
        @keyframes pulse4 {
          0%, 100% { transform: scale(1.05) rotate(0deg); opacity: 0.28; }
          50%     { transform: scale(1.14) rotate(-6deg); opacity: 0.34; }
        }
        @keyframes pulse5 {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.22; }
          50%     { transform: scale(1.17) rotate(5deg); opacity: 0.3; }
        }

        @keyframes blobMove1 {
          0%   { transform: translate3d(0, 0, 0) rotate(0deg); }
          20%  { transform: translate3d(12vw, -8vh, 0) rotate(3deg); }
          40%  { transform: translate3d(8vw, 10vh, 0) rotate(-2deg); }
          60%  { transform: translate3d(-10vw, 6vh, 0) rotate(4deg); }
          80%  { transform: translate3d(-6vw, -12vh, 0) rotate(-3deg); }
          100% { transform: translate3d(0, 0, 0) rotate(0deg); }
        }
        @keyframes blobMove2 {
          0%   { transform: translate3d(0, 0, 0) rotate(0deg); }
          25%  { transform: translate3d(-12vw, 8vh, 0) rotate(-4deg); }
          50%  { transform: translate3d(-4vw, -12vh, 0) rotate(5deg); }
          75%  { transform: translate3d(10vw, 4vh, 0) rotate(-3deg); }
          100% { transform: translate3d(0, 0, 0) rotate(0deg); }
        }
        @keyframes blobMove3 {
          0%   { transform: translate3d(0, 0, 0) rotate(0deg); }
          30%  { transform: translate3d(10vw, -10vh, 0) rotate(4deg); }
          60%  { transform: translate3d(-12vw, -4vh, 0) rotate(-5deg); }
          90%  { transform: translate3d(4vw, 12vh, 0) rotate(3deg); }
          100% { transform: translate3d(0, 0, 0) rotate(0deg); }
        }
        @keyframes blobMove4 {
          0%   { transform: translate3d(0, 0, 0) rotate(0deg); }
          25%  { transform: translate3d(10vw, 4vh, 0) rotate(6deg); }
          50%  { transform: translate3d(4vw, -12vh, 0) rotate(-4deg); }
          75%  { transform: translate3d(-10vw, 6vh, 0) rotate(3deg); }
          100% { transform: translate3d(0, 0, 0) rotate(0deg); }
        }
        @keyframes blobMove5 {
          0%   { transform: translate3d(0, 0, 0) rotate(0deg); }
          20%  { transform: translate3d(-10vw, -8vh, 0) rotate(-5deg); }
          40%  { transform: translate3d(-14vw, 10vh, 0) rotate(4deg); }
          60%  { transform: translate3d(12vw, 6vh, 0) rotate(-3deg); }
          80%  { transform: translate3d(8vw, -12vh, 0) rotate(5deg); }
          100% { transform: translate3d(0, 0, 0) rotate(0deg); }
        }
      `}</style>
    </>
  );
}

const GetStarted: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden py-20 bg-gradient-to-br from-gray-800 via-black to-gray-900 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* ✨ Strong animated blobs behind content */}
      <AmbientBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 mb-6">
            <span style={{ color: ACCENT }}>LET'S GET STARTED</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Example Image */}
            <div className="mb-8">
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:shadow-yellow-400/20">
                <img
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/linJJKxkNTQ3VC8ZDegR/media/67747c2504db6df1adef7f0c.png"
                  alt="News Publication Example"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>

            {/* What's Included Card */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">What's included:</h3>

              <ul className="space-y-4 mb-8">
                {[
                  [
                    "Feature in a Top-Tier News Article",
                    "Like USA News, NY Weekly, Women's Insider, Biz Weekly, CEO Times, Men's Insider & AP.",
                  ],
                  [
                    "SEO Boost",
                    "High Domain Authority Backlink to your website indexed on Google.",
                  ],
                  [
                    '"Featured On" Banner',
                    "Install valuable badges to your website, ads, social media & share with clients.",
                  ],
                  [
                    "Niche-Targeted News Outlet",
                    "Publication tailored to your customer demographic.",
                  ],
                  [
                    "Staff Contributor Publication",
                    "Ensuring credibility & authority.",
                  ],
                  [
                    "Comprehensive Article Package",
                    "Up to 1,000 words, 4 images, and 7 backlinks.",
                  ],
                  [
                    "Review and Approval Process",
                    "Make any changes before publishing.",
                  ],
                  [
                    "Quick Setup",
                    "Get started in 2 minutes. Our team handles everything A to Z.",
                  ],
                ].map(([title, desc], i) => (
                  <li key={i} className="flex items-start">
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300">
                      <strong className="text-gray-100">{title}</strong> - {desc}
                    </span>
                  </li>
                ))}

                {/* Bonuses headline */}
                <li className="flex items-start">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-bold" style={{ color: ACCENT }}>
                    + Five Never-Before Released Bonuses!
                  </span>
                </li>
              </ul>

              <div className="border-t border-gray-600 pt-6">
                <p className="font-bold text-lg mb-2" style={{ color: ACCENT }}>
                  ✅ Backed by Our 100% Money Back Guarantee
                </p>
                <p className="text-gray-300 flex items-center">
                  <svg className="w-5 h-5 mr-2" style={{ color: ACCENT }} fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  100% Secure 256-Bit Encrypted Checkout
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* First Publication Image */}
            <div className="mb-8">
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:shadow-yellow-400/20">
                <img
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/linJJKxkNTQ3VC8ZDegR/media/67f73892c220406941faaf5f.png"
                  alt="News Publication Example 2"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>

            {/* Get Started Button */}
            <div className="text-center mb-8">
              <button
                className="w-full text-black px-12 py-4 rounded-full font-bold text-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide"
                style={{ backgroundColor: ACCENT, boxShadow: "0 10px 25px rgba(203, 255, 0, 0.2)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(203, 255, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(203, 255, 0, 0.2)";
                }}
              >
                GET STARTED NOW
              </button>
            </div>

            {/* Second Publication Image */}
            <div className="mb-8">
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:shadow-yellow-400/20">
                <img
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/linJJKxkNTQ3VC8ZDegR/media/67747184d515b16c479d2b7c.png"
                  alt="News Publication Example 3"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>

            {/* Pricing & Bonuses Card */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600">
              <h3 className="text-3xl font-bold text-gray-100 mb-6 text-center">
                Only <span style={{ color: ACCENT }}>$147</span> For A Top-Tier News Article
              </h3>

              <ul className="space-y-4">
                {[
                  [
                    "Bonus 1: $5 A Day Viral Brand Strategy in 2025",
                    "Access our secret viral brand machine to make your brand, products & content go viral.",
                  ],
                  [
                    "Bonus 2: Complete PR Secrets Library",
                    "Exact steps we use to get clients featured in top news outlets in 2025.",
                  ],
                  [
                    "Bonus 3: Free Major Interview Strategy",
                    "How to land TV, magazines, radio, podcasts & more in 2025.",
                  ],
                  [
                    "Bonus 4: PR to Profit Blueprint 2025",
                    "Turn your PR coverage into measurable revenue.",
                  ],
                  [
                    'Bonus 5: Exclusive "Perfect PR AI"',
                    "Our secret weapon that instantly drafts unlimited flawless PR articles in 2025.",
                  ],
                ].map(([title, desc], i) => (
                  <li key={i} className="flex items-start">
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <span className="text-black font-bold text-xs">{i + 1}</span>
                    </div>
                    <span className="text-gray-300">
                      <strong className="text-gray-100">{title}</strong> - {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Guarantee Section */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-100 mb-6">
              <span style={{ color: ACCENT }}>Everything to gain and nothing to lose</span>
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/linJJKxkNTQ3VC8ZDegR/media/65f8eac34d78695539c2441a.png"
                  alt="Money Back Guarantee"
                  className="w-24 h-24"
                />
              </div>

              <div className="text-left">
                <p className="text-xl font-bold text-gray-100 mb-4">
                  <strong>100% money-back guarantee.</strong> That's how confident we are.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  If, for any reason, we are unable to get your business featured, you will receive a full refund to your
                  credit card — no questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
