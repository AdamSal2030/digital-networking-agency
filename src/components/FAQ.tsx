// src/components/FAQ.tsx
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

const FAQ: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0); // First FAQ open by default
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // ✅ Open LiveChat with a prefilled draft
  function openCTAChat() {
    if (typeof window === "undefined") return;
    const w = (window as any).LiveChatWidget;
    const legacy = (window as any).LC_API;
    const message = "Hi I want to get featured.";

    try {
      w?.call?.("set_session_variables", {
        page: typeof window !== "undefined" ? window.location.pathname : "/faq",
        source: "faq_cta_button",
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

  const faqs = [
    {
      question: "Who's this perfect for?",
      answer:
        "If you're a business, entrepreneur, consultant, coach, author, expert, agency, e-commerce store, product, service, or brand, then this is perfect for you!",
    },
    {
      question: "What exactly do I get when I buy this?",
      answer:
        "This promotion covers everything, including us writing a fully custom 800–1,000 word article about your brand, unlimited revisions, and guaranteed publication in the outlet of your choice!",
    },
    {
      question: "Can I make revisions to the article?",
      answer:
        "Yes, absolutely! We offer unlimited revisions and you have final approval, so it won't be published until it's exactly as you'd like!",
    },
    {
      question: "Can I choose the news outlet?",
      answer:
        "Yes! During your intake form you'll have the choice to choose from over 60 different outlets including USA News, Women's Insider, CEO Times, Biz Weekly, Men's Insider, New York Review, and many more. We are always adding additional outlets as well!",
    },
    {
      question: "Will this help my SEO?",
      answer:
        "Yes, you'll get a high domain authority backlink that boosts your SEO, and your article will be indexed on Google.",
    },
    {
      question: 'Can I say "As Seen On"?',
      answer:
        'Yes, you can use "As Seen On" credentials on your website, ads, and social media.',
    },
    {
      question: "Is there a guarantee?",
      answer:
        "Yes, we offer a 100% money-back guarantee. If we can't get your business featured in the outlet of your choice within 10 days, you will receive a full refund, no questions asked.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* ✨ Strong animated blobs behind content */}
      <AmbientBlobs />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 mb-6">
            <span style={{ color: ACCENT }}>
              GOT QUESTIONS? WE HAVE ANSWERS.
            </span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div
          className={`space-y-4 mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl border border-gray-600 hover:border-yellow-400/30 hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
              >
                <h3 className="text-xl font-bold text-gray-100 pr-8">
                  {faq.question}
                </h3>
                <div
                  className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400/20 transition-transform duration-300 ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    style={{ color: ACCENT }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-600 pt-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
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
              onClick={openCTAChat} // ✅ Opens LiveChat instead of checkout
            >
              GET FEATURED TODAY
            </button>
          </div>

          <p className="text-gray-400 text-lg italic">
            *100% Money Back Guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
