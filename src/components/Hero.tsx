// src/components/Hero.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ACCENT = "rgb(203, 255, 0)";

// ⚡️ Strong-motion animated background blobs
function AmbientBlobs({ accent = ACCENT }: { accent?: string }) {
  return (
    <>
      {/* Blobs wrapper sits above image scrim, below content */}
      <div aria-hidden className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Blob 1 */}
        <div
          className="absolute -top-16 -left-10 w-[32rem] h-[32rem] rounded-full blur-3xl"
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
          className="absolute top-24 -right-12 w-[34rem] h-[34rem] rounded-full blur-3xl"
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
          className="absolute bottom-20 left-1/3 w-[26rem] h-[26rem] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(closest-side, ${accent}, transparent 70%)`,
            opacity: 0.24,
            willChange: "transform, filter, opacity",
            animation:
              "blobMove3 22s ease-in-out infinite both, pulse3 5.5s ease-in-out infinite both, hue 10s linear infinite both",
            animationDelay: "0.2s, 0.2s, 3.4s",
          }}
        />
        {/* Blob 4 */}
        <div
          className="absolute top-1/3 left-8 w-[22rem] h-[22rem] rounded-full blur-2xl"
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
          className="absolute -bottom-6 right-1/4 w-[24rem] h-[24rem] rounded-full blur-[60px]"
          style={{
            background: `radial-gradient(closest-side, ${accent}, transparent 70%)`,
            opacity: 0.22,
            willChange: "transform, filter, opacity",
            animation:
              "blobMove5 24s ease-in-out infinite both, pulse5 7.5s ease-in-out infinite both, hue 16s linear infinite both",
            animationDelay: "2.4s, 2.4s, 4s",
          }}
        />
      </div>

      {/* Keyframes: stronger travel, pulsing scale, subtle rotation + color cycle */}
      <style jsx global>{`
        /* Color cycling + glow boost */
        @keyframes hue {
          0%   { filter: hue-rotate(0deg) saturate(130%) brightness(105%) drop-shadow(0 0 40px rgba(203,255,0,0.25)); }
          50%  { filter: hue-rotate(210deg) saturate(160%) brightness(120%) drop-shadow(0 0 70px rgba(203,255,0,0.35)); }
          100% { filter: hue-rotate(360deg) saturate(130%) brightness(105%) drop-shadow(0 0 40px rgba(203,255,0,0.25)); }
        }

        /* Pulses (scale + slight opacity shimmer) */
        @keyframes pulse1 {
          0%,100% { transform: scale(1) rotate(0deg); opacity: 0.26; }
          50%     { transform: scale(1.18) rotate(4deg); opacity: 0.34; }
        }
        @keyframes pulse2 {
          0%,100% { transform: scale(1.02) rotate(0deg); opacity: 0.24; }
          50%     { transform: scale(1.15) rotate(-5deg); opacity: 0.32; }
        }
        @keyframes pulse3 {
          0%,100% { transform: scale(0.98) rotate(0deg); opacity: 0.22; }
          50%     { transform: scale(1.2) rotate(6deg); opacity: 0.30; }
        }
        @keyframes pulse4 {
          0%,100% { transform: scale(1.05) rotate(0deg); opacity: 0.28; }
          50%     { transform: scale(1.14) rotate(-6deg); opacity: 0.34; }
        }
        @keyframes pulse5 {
          0%,100% { transform: scale(1) rotate(0deg); opacity: 0.22; }
          50%     { transform: scale(1.17) rotate(5deg); opacity: 0.30; }
        }

        /* Stronger viewport-based travel so it's obvious on large screens */
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

const Hero = () => {
  const router = useRouter();

  return (
    <section
      className="relative min-h-screen overflow-hidden pt-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://s99pr.com/wp-content/uploads/2025/03/Frame-2279.png')",
      }}
    >
      {/* Dark scrim ensures contrast over bright photos */}
      <div
        aria-hidden
        className="absolute inset-0 z-[5]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.50) 35%, rgba(0,0,0,0.58) 100%)",
        }}
      />

      {/* ⚡️ Strong-motion blobs */}
      <AmbientBlobs />

      {/* Optional vignette for edge readability */}
      <div
        aria-hidden
        className="absolute inset-0 z-[12] pointer-events-none"
        style={{
          boxShadow:
            "inset 0 0 200px 80px rgba(0,0,0,0.35), inset 0 0 360px 140px rgba(0,0,0,0.25)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center uppercase">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-4 leading-tight">
            DO YOU HAVE A PERSONAL BRAND, PRODUCT, OR SERVICE?
          </h1>

          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-100 mb-4">
              <span style={{ color: ACCENT }}>GET PUBLISHED</span> IN A MAJOR NEWS OUTLET LIKE
            </h2>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-300 italic leading-relaxed">
              <div>CEO WEEKLY, US BUSINESS NEWS,</div>
              <div>WOMEN JOURNAL, WALL STREET TIMES, AND</div>
              <div>NEW YORK WEEKLY</div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-8 mb-12">
            <div className="w-full max-w-lg">
              <div
                className="p-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:shadow-yellow-400/30 border border-gray-500/20"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.12)", backdropFilter: "blur(6px)" }}
              >
                <img
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/linJJKxkNTQ3VC8ZDegR/media/67747184d515b16c479d2b7c.png"
                  alt="News Publication Example 2"
                  className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-3xl sm:text-4xl font-bold text-gray-100 mb-2">
              FOR ONLY <span style={{ color: ACCENT }}>$147</span>
            </p>
          </div>

          <div className="mb-6">
            <button
              className="text-black px-12 py-4 rounded-full font-bold text-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide"
              style={{
                backgroundColor: ACCENT,
                boxShadow: "0 10px 25px rgba(203, 255, 0, 0.28)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 22px 46px rgba(203, 255, 0, 0.38)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(203, 255, 0, 0.28)";
              }}
              onClick={() => router.push("/checkout")}
            >
              GET FEATURED TODAY
            </button>
          </div>

          <p className="text-gray-400 text-lg italic mb-16">
            *100% MONEY BACK GUARANTEE
          </p>
        </div>
      </div>

      <div className="absolute z-20 bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6" style={{ color: ACCENT }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
