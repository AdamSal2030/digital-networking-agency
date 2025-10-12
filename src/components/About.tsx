// src/components/About.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

const ACCENT = "rgb(203, 255, 0)";

// ⚡️ Strong-motion animated background blobs (same system as Hero)
function AmbientBlobs({ accent = ACCENT }: { accent?: string }) {
  return (
    <>
      <div
        aria-hidden={true}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        {/* Blob 1 */}
        <div
          className="absolute -top-16 -left-10 w-[28rem] h-[28rem] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(closest-side, ${accent}, transparent 70%)`,
            opacity: 0.26,
            willChange: "transform, filter, opacity",
            animation:
              "blobMove1 18s ease-in-out infinite both, pulse1 6s ease-in-out infinite both, hue 12s linear infinite both",
          }}
        />
        {/* Blob 2 */}
        <div
          className="absolute top-24 -right-12 w-[30rem] h-[30rem] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(closest-side, ${accent}, transparent 70%)`,
            opacity: 0.24,
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
            opacity: 0.28,
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
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.24;
          }
          50% {
            transform: scale(1.16) rotate(4deg);
            opacity: 0.32;
          }
        }
        @keyframes pulse2 {
          0%,
          100% {
            transform: scale(1.02) rotate(0deg);
            opacity: 0.22;
          }
          50% {
            transform: scale(1.14) rotate(-5deg);
            opacity: 0.3;
          }
        }
        @keyframes pulse3 {
          0%,
          100% {
            transform: scale(0.98) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.18) rotate(6deg);
            opacity: 0.28;
          }
        }
        @keyframes pulse4 {
          0%,
          100% {
            transform: scale(1.04) rotate(0deg);
            opacity: 0.26;
          }
          50% {
            transform: scale(1.12) rotate(-6deg);
            opacity: 0.32;
          }
        }
        @keyframes pulse5 {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.16) rotate(5deg);
            opacity: 0.28;
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

const About = () => {
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

  // ✅ Open LiveChat with a prefilled draft
  function openCTAChat() {
    if (typeof window === "undefined") return;
    const w = (window as any).LiveChatWidget;
    const legacy = (window as any).LC_API;
    const message = "Hi I want to get featured.";

    try {
      w?.call?.("set_session_variables", {
        page:
          typeof window !== "undefined" ? window.location.pathname : "/about",
        source: "about_start_success_story",
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
      className={`relative overflow-hidden py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* ✨ Animated blobs behind content */}
      <AmbientBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-8 leading-tight">
              <span style={{ color: ACCENT }}>WE SCALE BRANDS</span>{" "}
              INTO INDUSTRY LEADERS IN 2025
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                We know how tough it is to{" "}
                <strong className="text-gray-100">grow a business...</strong>
              </p>

              <p>
                You pour your heart, soul, and resources into building something
                amazing, but there's always a{" "}
                <strong className="text-gray-100">
                  never-ending to-do list and not enough hours in the day.
                </strong>{" "}
                But{" "}
                <em className="font-medium" style={{ color: ACCENT }}>
                  you don't have to do it all alone...
                </em>
              </p>

              <p>
                We want to see you{" "}
                <em className="font-medium" style={{ color: ACCENT }}>grow...</em>{" "}
                We want to see you{" "}
                <em className="font-medium" style={{ color: ACCENT }}>
                  help more customers...
                </em>{" "}
                We want to help you{" "}
                <em className="font-medium" style={{ color: ACCENT }}>
                  take one thing off your to-do list...
                </em>
              </p>

              <p>
                That's why{" "}
                <strong className="text-gray-100">we'll write an article</strong>{" "}
                for your business and{" "}
                <em className="font-medium" style={{ color: ACCENT }}>
                  get you featured
                </em>{" "}
                in a{" "}
                <strong className="text-gray-100">top-tier news outlet,</strong>{" "}
                just like we've done{" "}
                <em className="font-medium" style={{ color: ACCENT }}>
                  for over 1,000 other businesses...
                </em>
              </p>

              <p>
                Guaranteed to{" "}
                <em className="font-medium" style={{ color: ACCENT }}>
                  boost your SEO
                </em>{" "}
                presence and credibility...
              </p>

              <p>
                <strong className="text-gray-100">
                  No overpriced retainers or hidden costs...
                </strong>
              </p>

              <p className="text-xl font-bold text-gray-100">
                <strong>We'll handle everything</strong> for a{" "}
                <span className="text-2xl" style={{ color: ACCENT }}>
                  one-time payment of $147,
                </span>{" "}
                <strong>guaranteed</strong>.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <button
                className="text-black px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
                onClick={openCTAChat} // opens chat with draft
              >
                Start Your Success Story
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Digital Publishing and Media Success"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay with stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{ color: ACCENT }}>
                        1000+
                      </div>
                      <div className="text-sm opacity-90">Businesses Featured</div>
                    </div>
                    <div className="w-px h-12 bg-white/30" />
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{ color: ACCENT }}>
                        147
                      </div>
                      <div className="text-sm opacity-90">One-Time Payment</div>
                    </div>
                    <div className="w-px h-12 bg-white/30" />
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{ color: ACCENT }}>
                        100%
                      </div>
                      <div className="text-sm opacity-90">Guaranteed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating dots (keep your originals) */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20 animate-pulse"
                style={{ backgroundColor: ACCENT }}
              />
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20 animate-pulse"
                style={{ backgroundColor: ACCENT, animationDelay: "2s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
