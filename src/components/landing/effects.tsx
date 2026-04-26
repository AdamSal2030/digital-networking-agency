"use client";

import { useEffect } from "react";

export function LandingEffects() {
  useEffect(() => {
    const cur = document.getElementById("cur");
    const curR = document.getElementById("curR");
    const prog = document.getElementById("progress");
    if (!cur || !curR || !prog) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = `${mx}px`;
      cur.style.top = `${my}px`;
    };
    document.addEventListener("mousemove", onMove);

    let raf = 0;
    const animR = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      curR.style.left = `${rx}px`;
      curR.style.top = `${ry}px`;
      raf = requestAnimationFrame(animR);
    };
    raf = requestAnimationFrame(animR);

    const anchors = document.querySelectorAll("a,button");
    const onEnter = () => {
      cur.style.width = "18px";
      cur.style.height = "18px";
    };
    const onLeave = () => {
      cur.style.width = "10px";
      cur.style.height = "10px";
    };
    anchors.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const onScroll = () => {
      const s = document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = `${(s / h) * 100}%`;
    };
    window.addEventListener("scroll", onScroll);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal,.reveal-l,.reveal-r").forEach((el) => io.observe(el));

    function countUp(el: Element, target: string, suf: string) {
      if (!(el instanceof HTMLElement)) return;
      if (target === "∞") {
        el.textContent = "∞";
        return;
      }
      const n = parseInt(target, 10);
      const dur = 1600;
      const intervalMs = dur / n;
      let c = 0;
      const timer = window.setInterval(() => {
        c += 1;
        el.textContent = `${c}${suf}`;
        if (c >= n) clearInterval(timer);
      }, intervalMs);
    }

    const sio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target.querySelector(".stat-number");
            if (!el || !(el instanceof HTMLElement)) return;
            const v = el.textContent ?? "";
            const suf = v.includes("+") ? "+" : "";
            const num = v.replace("+", "");
            countUp(el, num, suf);
            sio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".stat-item").forEach((el) => sio.observe(el));

    return () => {
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      anchors.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      cancelAnimationFrame(raf);
      io.disconnect();
      sio.disconnect();
    };
  }, []);

  return null;
}
