"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide scroll animation. On every page except the homepage (which has its
 * own reveal system), it fades content up as it enters the viewport.
 * Elements already tagged `.sr` are observed; common blocks are auto-tagged.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") return; // homepage has LandingEffects
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const auto = document.querySelectorAll(
      "main h1, main h2, main .sr, " +
        "[class*='block'], [class*='card'], [class*='step'], [class*='faq'], " +
        "[class*='takeaways'], [class*='detailSection'], [class*='footerCta'], " +
        "[class*='cta'], [class*='outlets'], [class*='item']"
    );

    const targets: Element[] = [];
    auto.forEach((el) => {
      if ((el as HTMLElement).dataset.sr) return;
      (el as HTMLElement).dataset.sr = "1";
      el.classList.add("sr");
      targets.push(el);
    });

    if (reduce) {
      targets.forEach((el) => el.classList.add("sr-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("sr-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${Math.min(i % 6, 5) * 0.05}s`;
      io.observe(el);
    });

    // anything already on-screen at load reveals immediately
    requestAnimationFrame(() => {
      targets.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.9) el.classList.add("sr-in");
      });
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
