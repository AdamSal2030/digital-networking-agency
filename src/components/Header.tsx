// src/components/Header.tsx
"use client";

import React, { useState } from "react";

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
      try {
        legacy?.open_chat_window?.();
      } catch {}
    }
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 backdrop-blur-sm backdrop-saturate-150 shadow-[0_6px_24px_rgba(203,255,0,.15)]"
    >
      {/* Animated multi-stop gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="h-full w-full header-gradient" />
        {/* soft highlights for depth */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.12] mix-blend-overlay">
          <div className="absolute -top-1/2 -left-1/3 w-[120%] h-[140%] rounded-full"
               style={{
                 background:
                   "radial-gradient(60% 45% at 15% 20%, rgba(255,255,255,.7), rgba(255,255,255,0) 60%)",
               }} />
          <div className="absolute -bottom-1/2 -right-1/3 w-[120%] h-[140%] rounded-full"
               style={{
                 background:
                   "radial-gradient(60% 45% at 85% 80%, rgba(255,255,255,.6), rgba(255,255,255,0) 60%)",
               }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ⬆️ increased header height to fit larger logo */}
        <div className="flex justify-between items-center h-20">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="Digital Networking Agency Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-base md:text-lg font-bold text-black leading-tight tracking-wide">
                Digital Networking Agency
              </h2>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a
              href="/"
              className="text-black font-semibold hover:bg-black/10 px-3 py-2 rounded-md transition-colors"
            >
              Home
            </a>
            <a
              href="/service"
              className="text-black font-semibold hover:bg-black/10 px-3 py-2 rounded-md transition-colors"
            >
              Service
            </a>
            <a
              href="/about"
              className="text-black font-semibold hover:bg-black/10 px-3 py-2 rounded-md transition-colors"
            >
              About
            </a>
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={openCTAChat}
              className="hidden sm:inline-flex text-black px-6 py-2 rounded-lg font-semibold hover:bg-black/10 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-black hover:bg-black/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden rounded-b-lg shadow-lg border-t border-black/10 overflow-hidden">
            <div className="mobile-gradient px-2 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-black font-semibold hover:bg-black/10 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/service"
                className="block px-3 py-2 text-black font-semibold hover:bg-black/10 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Service
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-black font-semibold hover:bg-black/10 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openCTAChat();
                  }}
                  className="w-full text-black font-semibold px-6 py-2 rounded-lg hover:bg-black/10 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animated gradient styles */}
      <style jsx>{`
        .header-gradient {
          /* multi-stop neon-lime sweep */
          background: linear-gradient(
            120deg,
            #cbff00 0%,
            #c6ff00 12%,
            #bfff00 24%,
            #b2ff00 36%,
            #a4ff00 48%,
            #96ff1e 60%,
            #a9ff00 72%,
            #bfff00 84%,
            #cbff00 100%
          );
          background-size: 240% 240%;
          animation: headerShift 16s ease-in-out infinite;
        }

        .mobile-gradient {
          background: linear-gradient(
            180deg,
            #cbff00 0%,
            #bfff00 40%,
            #adff00 75%,
            #9dff00 100%
          );
        }

        @keyframes headerShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .header-gradient {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
