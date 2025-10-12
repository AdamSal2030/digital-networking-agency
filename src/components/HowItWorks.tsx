// src/components/HowItWorks.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

const ACCENT = "rgb(203, 255, 0)";

// ⚡ Strong-motion animated background blobs (same system used in Hero/About)
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

      {/* Keyframes (movement + pulse + color) */}
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
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.26;
          }
          50% {
            transform: scale(1.18) rotate(4deg);
            opacity: 0.34;
          }
        }
        @keyframes pulse2 {
          0%,
          100% {
            transform: scale(1.02) rotate(0deg);
            opacity: 0.24;
          }
          50% {
            transform: scale(1.15) rotate(-5deg);
            opacity: 0.32;
          }
        }
        @keyframes pulse3 {
          0%,
          100% {
            transform: scale(0.98) rotate(0deg);
            opacity: 0.22;
          }
          50% {
            transform: scale(1.2) rotate(6deg);
            opacity: 0.3;
          }
        }
        @keyframes pulse4 {
          0%,
          100% {
            transform: scale(1.05) rotate(0deg);
            opacity: 0.28;
          }
          50% {
            transform: scale(1.14) rotate(-6deg);
            opacity: 0.34;
          }
        }
        @keyframes pulse5 {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.22;
          }
          50% {
            transform: scale(1.17) rotate(5deg);
            opacity: 0.3;
          }
        }

        @keyframes blobMove1 {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          20% {
            transform: translate3d(12vw, -8vh, 0) rotate(3deg);
          }
          40% {
            transform: translate3d(8vw, 10vh, 0) rotate(-2deg);
          }
          60% {
            transform: translate3d(-10vw, 6vh, 0) rotate(4deg);
          }
          80% {
            transform: translate3d(-6vw, -12vh, 0) rotate(-3deg);
          }
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
        }
        @keyframes blobMove2 {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          25% {
            transform: translate3d(-12vw, 8vh, 0) rotate(-4deg);
          }
          50% {
            transform: translate3d(-4vw, -12vh, 0) rotate(5deg);
          }
          75% {
            transform: translate3d(10vw, 4vh, 0) rotate(-3deg);
          }
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
        }
        @keyframes blobMove3 {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          30% {
            transform: translate3d(10vw, -10vh, 0) rotate(4deg);
          }
          60% {
            transform: translate3d(-12vw, -4vh, 0) rotate(-5deg);
          }
          90% {
            transform: translate3d(4vw, 12vh, 0) rotate(3deg);
          }
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
        }
        @keyframes blobMove4 {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          25% {
            transform: translate3d(10vw, 4vh, 0) rotate(6deg);
          }
          50% {
            transform: translate3d(4vw, -12vh, 0) rotate(-4deg);
          }
          75% {
            transform: translate3d(-10vw, 6vh, 0) rotate(3deg);
          }
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
        }
        @keyframes blobMove5 {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          20% {
            transform: translate3d(-10vw, -8vh, 0) rotate(-5deg);
          }
          40% {
            transform: translate3d(-14vw, 10vh, 0) rotate(4deg);
          }
          60% {
            transform: translate3d(12vw, 6vh, 0) rotate(-3deg);
          }
          80% {
            transform: translate3d(8vw, -12vh, 0) rotate(5deg);
          }
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
        }
      `}</style>
    </>
  );
}

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // ✅ Open LiveChat with prefilled draft
  function openCTAChat() {
    if (typeof window === "undefined") return;
    const w = (window as any).LiveChatWidget;
    const legacy = (window as any).LC_API;
    const message = "Hi I want to get featured.";

    try {
      w?.call?.("set_session_variables", {
        page:
          typeof window !== "undefined" ? window.location.pathname : "/how-it-works",
        source: "how_it_works_cta",
      });
    } catch {}
    try {
      w?.call?.("maximize", { messageDraft: message });
    } catch {
      try {
        legacy?.open_chat_window?.();
      } catch {}
    }
  }

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden py-20 bg-gradient-to-br from-gray-800 via-black to-gray-900 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* ✨ Strong animated blobs */}
      <AmbientBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 mb-6">
            HOW TO GET <span style={{ color: ACCENT }}>FEATURED</span> IN 2025
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            <strong>Top-tier media coverage in 3 simple steps.</strong> We handle the entire
            process:
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600 hover:border-yellow-400/30 hover:shadow-lg transition-all duration-300 group">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-black font-bold text-xl"
                style={{ backgroundColor: ACCENT }}
              >
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                STEP 1
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Click the button below and fill out the form at checkout.
              </p>
              <div className="mt-6 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600 hover:border-yellow-400/30 hover:shadow-lg transition-all duration-300 group">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-black font-bold text-xl"
                style={{ backgroundColor: ACCENT }}
              >
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                STEP 2
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We will write your article and send it to you for approval.
              </p>
              <div className="mt-6 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600 hover:border-yellow-400/30 hover:shadow-lg transition-all duration-300 group">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-black font-bold text-xl"
                style={{ backgroundColor: ACCENT }}
              >
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                STEP 3
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Once it's exactly how you want it, we will get it published!
              </p>
              <div className="mt-6 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`text-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <p className="text-xl sm:text-2xl font-bold text-gray-100 mb-4">
              After you checkout, we handle everything from A to Z!
            </p>
          </div>

          <div className="mb-6">
            <button
              className="text-black px-12 py-4 rounded-full font-bold text-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide"
              style={{
                backgroundColor: ACCENT,
                boxShadow: "0 10px 25px rgba(203, 255, 0, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(203, 255, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(203, 255, 0, 0.2)";
              }}
              onClick={openCTAChat}
            >
              GET FEATURED TODAY
            </button>
          </div>

          <p className="text-gray-400 text-lg italic">*100% Money Back Guarantee</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
