"use client";

import { useEffect, useState } from "react";

export type Placement = {
  outlet: string;
  headline: string;
  meta: string;
  href: string;
  img: string | null;
  logo: string | null;
  logoWhite?: boolean;
};

function perViewFor(width: number) {
  if (width <= 640) return 1;
  if (width <= 1024) return 2;
  return 3;
}

export function PlacementsCarousel({ placements }: { placements: Placement[] }) {
  const n = placements.length;
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState(true);

  useEffect(() => {
    const calc = () => {
      setPerView(perViewFor(window.innerWidth));
      setIndex(0);
      setAnim(true);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  useEffect(() => {
    if (anim) return;
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnim(true))
    );
    return () => cancelAnimationFrame(id);
  }, [anim]);

  const items = [...placements, ...placements.slice(0, perView)];
  const cardPct = 100 / perView;

  const next = () => setIndex((i) => i + 1);

  const prev = () => {
    if (index > 0) {
      setIndex((i) => i - 1);
      return;
    }
    setAnim(false);
    setIndex(n);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        setAnim(true);
        setIndex(n - 1);
      })
    );
  };

  const handleEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (index >= n) {
      setAnim(false);
      setIndex(0);
    }
  };

  return (
    <div className="tcar pcar">
      <button
        type="button"
        className="tcar-arrow"
        onClick={prev}
        aria-label="Previous placements"
      >
        ‹
      </button>

      <div className="tcar-viewport">
        <div
          className="tcar-track"
          onTransitionEnd={handleEnd}
          style={{
            transform: `translateX(-${index * cardPct}%)`,
            transition: anim
              ? "transform .55s cubic-bezier(.16,1,.3,1)"
              : "none"
          }}
        >
          {items.map((p, i) => (
            <div
              className="tcar-slide"
              key={`${p.href}-${i}`}
              style={{ flex: `0 0 ${cardPct}%` }}
            >
              <a
                className="pc pc-photo-card"
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="pc-bar" />
                {p.img ? (
                  <div className="pc-photo">
                    <img src={p.img} alt={p.headline} loading="lazy" />
                    {p.logo ? (
                      <img
                        src={p.logo}
                        alt={p.outlet}
                        className={
                          p.logoWhite
                            ? "pc-photo-logo pc-photo-logo--white"
                            : "pc-photo-logo"
                        }
                        loading="lazy"
                      />
                    ) : (
                      <span className="pc-photo-logo pc-photo-logo--text">
                        {p.outlet}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="pc-photo pc-photo--logo">
                    {p.logo ? (
                      <img
                        src={p.logo}
                        alt={p.outlet}
                        className={
                          p.logoWhite
                            ? "pc-panel-logo pc-panel-logo--white"
                            : "pc-panel-logo"
                        }
                        loading="lazy"
                      />
                    ) : (
                      <span className="pc-panel-text">{p.outlet}</span>
                    )}
                  </div>
                )}
                <div className="pc-body">
                  <div className="po">{p.outlet}</div>
                  <div className="ph">{p.headline}</div>
                  <div className="pm">{p.meta}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="tcar-arrow"
        onClick={next}
        aria-label="Next placements"
      >
        ›
      </button>
    </div>
  );
}
