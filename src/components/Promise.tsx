// src/components/Promise.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

const ACCENT = "rgb(203, 255, 0)";

// ⚡ Strong-motion animated background blobs (float + pulse + color shift)
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

const Promise: React.FC = () => {
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
      className={`relative overflow-hidden py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 transition-all duration-1000 ${
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span style={{ color: ACCENT }}>OUR PROMISE</span>
          </h2>
          <p className="text-2xl sm:text-3xl text-gray-100 font-bold max-w-4xl mx-auto">
            <strong>Long Story Short,</strong> Here are the Results You Will See:
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Before Section */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-2xl p-8 border-2 border-red-700/30 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-3xl sm:text-4xl font-bold text-red-400 mb-4">Before</h3>
                <div className="w-16 h-1 bg-red-400 mx-auto rounded-full" />
              </div>
              <ul className="space-y-4">
                {[
                  "Blending in with Competitors.",
                  "Little to No Online Presence.",
                  "Weak SEO ranking.",
                  "High Lead Costs.",
                  "Low Sales Ratio.",
                ].map((text, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mt-1 mr-4">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-300 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* After Section */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-gradient-to-br from-green-900/20 to-yellow-600/10 rounded-2xl p-8 border-2 border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: ACCENT }}>
                  After
                </h3>
                <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: ACCENT }} />
              </div>
              <ul className="space-y-4">
                {[
                  "Featured in Top News Outlets.",
                  "Distinctive Brand Authority.",
                  "Improved SEO Ranking.",
                  "Lower Cost per Lead.",
                  "Increased Sales.",
                ].map((text, i) => (
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
                    <span className="text-lg text-gray-300 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promise;
