"use client";

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
      <a href="#packages" className="btn-p" onClick={(e) => scrollToSection("packages", e)}>
        <span>View Packages</span>
      </a>
      <a href="#about" className="btn-g" onClick={(e) => scrollToSection("about", e)}>
        Our Story
      </a>
    </div>
  );
}
