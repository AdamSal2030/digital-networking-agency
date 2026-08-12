"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive-enhancement scroll animation.
 *
 * Content is ALWAYS visible by default. Only when this component mounts and the
 * browser supports IntersectionObserver do we add `sr-on` to <html>, which
 * activates the hidden→reveal CSS. If anything fails, or JS is disabled, or the
 * user prefers reduced motion, nothing is hidden. A safety timer also reveals
 * everything after a moment so content can never get stuck invisible.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") return; // homepage has its own reveal system
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return; // leave content visible

    const auto = document.querySelectorAll(
      "main .sr, [class*='block'], [class*='card'], [class*='step'], " +
        "[class*='faq'], [class*='takeaways'], [class*='detailSection'], " +
        "[class*='footerCta']"
    );

    const targets: Element[] = [];
    auto.forEach((el) => {
      if ((el as HTMLElement).dataset.sr) return;
      // Skip elements that already belong to the homepage `.reveal` system
      // (LandingEffects owns those) so the two don't fight and hide content.
      if (
        el.classList.contains("reveal") ||
        el.classList.contains("reveal-l") ||
        el.classList.contains("reveal-r")
      )
        return;
      (el as HTMLElement).dataset.sr = "1";
      el.classList.add("sr");
      targets.push(el);
    });
    if (!targets.length) return;

    // activate the hidden state only now that JS is confirmed running
    document.documentElement.classList.add("sr-on");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("sr-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    targets.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${Math.min(i % 5, 4) * 0.05}s`;
      io.observe(el);
    });

    // reveal anything already in view on load
    requestAnimationFrame(() => {
      targets.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.95) el.classList.add("sr-in");
      });
    });

    // hard safety net: nothing stays invisible past this point
    const failsafe = setTimeout(() => {
      document.querySelectorAll(".sr").forEach((el) => el.classList.add("sr-in"));
    }, 2200);

    return () => {
      io.disconnect();
      clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}
