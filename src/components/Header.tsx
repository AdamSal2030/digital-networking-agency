"use client";

import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


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
      className="fixed top-0 left-0 right-0 z-50 border-b border-black/20 backdrop-blur-sm"
      style={{
        background: "linear-gradient(135deg, #cbff00 0%, #9fff00 100%)", // ✅ lime gradient like your image
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="Digital Networking Agency Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-base font-bold text-black leading-tight tracking-wide">
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

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            {/* ✅ Desktop Get Started opens chat */}
            <button
              onClick={openCTAChat}
              className="hidden sm:inline-flex text-black px-6 py-2 rounded-lg font-semibold hover:bg-black/10 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-black hover:bg-black/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#cbff00] border-t border-black/20 rounded-b-lg shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
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
                {/* ✅ Mobile Get Started */}
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
    </header>
  );
};

export default Header;
