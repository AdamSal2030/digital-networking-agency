"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#packages", label: "Packages" },
  { href: "#alacarte", label: "A La Carte" },
  { href: "#prime", label: "DNA Prime" },
  { href: "#branding", label: "Branding" }
];

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={isOpen ? "menu-open" : ""}>
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
          Book a Call
        </a>
      </div>
    </nav>
  );
}
