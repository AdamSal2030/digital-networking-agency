"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#packages", label: "Packages" },
  { href: "#alacarte", label: "A La Carte" },
  { href: "#prime", label: "DNA Prime" },
  { href: "#branding", label: "Branding" },
  { href: "#testimonials", label: "Reviews" }
];

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${isOpen ? "menu-open " : ""}${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="nav-logo" onClick={closeMenu} aria-label="DNA PR — Home">
        <img src="/black_logo.png" alt="DNA PR" className="nav-logo-img" />
      </a>

      <button
        className={`menu-toggle ${isOpen ? "is-open" : ""}`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      <div className="nav-links">
        {links.map((link) => (
          <a href={link.href} key={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="nav-cta" onClick={closeMenu}>
          <span>Book a Call</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}
