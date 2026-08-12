"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

function scrollToSection(id: string, e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  window.location.hash = id;
}

export function HeroCtas() {
  return (
    <div className="hero-subcta">
      <a href="#contact" className="btn-p btn-glow" onClick={(e) => scrollToSection("contact", e)}>
        <span>Book a Free Consultation →</span>
      </a>
      <Link href="/services" className="btn-g">
        View Packages
      </Link>
    </div>
  );
}
