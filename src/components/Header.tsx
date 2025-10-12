// src/components/Header.tsx
"use client";

import React, { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((s) => !s);

  function openCTAChat() {
    if (typeof window === "undefined") return;
    const w = (window as any).LiveChatWidget;
    const legacy = (window as any).LC_API;
    const message = "Hi I want to get featured.";
    try {
      w?.call?.("set_session_variables", {
        page: typeof window !== "undefined" ? window.location.pathname : "/",
        source: "header_get_started",
      });
    } catch {}
    try {
      w?.call?.("maximize", { messageDraft: message });
    } catch {
      try { legacy?.open_chat_window?.(); } catch {}
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-[#ccff00] ${montserrat.className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Left: Logo + Brand */}
          <div className="flex items-center gap-3">
            <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="Digital Networking Agency Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="leading-tight tracking-[0.14em] uppercase">
              <span className="text-black font-extrabold">Digital </span>
              <span className="text-black/90 font-medium">Networking Agency</span>
            </h1>
          </div>

          {/* Right: Nav + CTA */}
          <div className="ml-auto flex items-center gap-2 md:gap-3">
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-2">
              <a href="/" className="btn btn-black text-sm inline-flex">Home</a>
              <a href="/service" className="btn btn-black text-sm inline-flex">Services</a>
              <a href="/about" className="btn btn-black text-sm inline-flex">About</a>
            </nav>

            {/* Desktop-only CTA (now black too) */}
            <button
              onClick={openCTAChat}
              className="hidden md:inline-flex btn btn-black text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3 font-extrabold"
            >
              <span>Get Started</span>
              <svg
                className="w-5 h-5 -mr-0.5 arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            {/* Mobile burger */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden btn btn-black p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden overflow-hidden rounded-b-xl border-t border-black/10">
            <div className="p-2 space-y-2 bg-[#ccff00]">
              <a
                href="/"
                className="btn btn-black inline-flex w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/service"
                className="btn btn-black inline-flex w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Service
              </a>
              <a
                href="/about"
                className="btn btn-black inline-flex w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openCTAChat();
                }}
                className="btn btn-black inline-flex w-full justify-center font-extrabold"
              >
                <span>Get Started</span>
                <svg className="w-5 h-5 -mr-0.5 arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Styles */}
      <style jsx>{`
        :root { --brand: #ccff00; }

        .btn {
          /* don't set display; keep Tailwind breakpoints working */
          align-items: center;
          gap: .6rem;
          border-radius: 9999px;
          padding: .55rem .95rem;
          font-weight: 800;
          line-height: 1;
          transition:
            transform .2s ease,
            box-shadow .25s ease,
            background .2s ease,
            color .2s ease,
            border-color .2s ease;
          will-change: transform, box-shadow;
        }
        .btn:active { transform: translateY(1px) scale(.99); }

        /* 🔥 Black pill + neon hover */
        .btn-black {
          background: #0a0a0a;
          color: #fff;
          border: 1.5px solid #0a0a0a;
          box-shadow:
            0 1px 0 rgba(255,255,255,.06) inset,
            0 8px 18px rgba(0,0,0,.25);
        }
        .btn-black:hover {
          color: var(--brand);
          border-color: var(--brand);
          transform: translateY(-1px) scale(1.02);
          box-shadow:
            0 0 0 2px rgba(204,255,0,.25),
            0 10px 28px rgba(204,255,0,.35),
            0 1px 0 rgba(255,255,255,.08) inset;
        }

        /* little arrow nudge on hover */
        .btn:hover .arrow {
          transform: translateX(2px);
          transition: transform .2s ease;
        }
      `}</style>
    </header>
  );
};

export default Header;
