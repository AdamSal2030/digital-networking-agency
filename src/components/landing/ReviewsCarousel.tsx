"use client";

import { useRef } from "react";
import type { TpReview } from "@/lib/trustpilot";
import { TpRating } from "./TpRating";

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00Z");
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function VerifiedBadge() {
  return (
    <span className="rev-verified">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="12" />
        <path
          d="M7 12.5l3 3 7-7"
          fill="none"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Verified
    </span>
  );
}

export function ReviewsCarousel({ reviews }: { reviews: TpReview[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".rev-card");
    const step = card ? card.offsetWidth + 18 : 320;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="rev-carousel">
      <button
        type="button"
        className="rev-arrow rev-arrow-prev"
        aria-label="Previous reviews"
        onClick={() => scrollBy(-1)}
      >
        ‹
      </button>

      <div className="rev-track" ref={trackRef}>
        {reviews.map((r, i) => (
          <figure className="rev-card" key={`${r.author}-${i}`}>
            <TpRating rating={r.rating} boxSize={26} />
            <VerifiedBadge />
            <div className="rev-meta">
              <span className="rev-author">{r.author}</span>
              {formatDate(r.date) && (
                <span className="rev-date">, {formatDate(r.date)}</span>
              )}
            </div>
            {r.title && <div className="rev-title">{r.title}</div>}
            <blockquote className="rev-body">{r.body}</blockquote>
          </figure>
        ))}
      </div>

      <button
        type="button"
        className="rev-arrow rev-arrow-next"
        aria-label="Next reviews"
        onClick={() => scrollBy(1)}
      >
        ›
      </button>
    </div>
  );
}
