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

function Card({
  r,
  href,
  clone = false,
}: {
  r: TpReview;
  href: string;
  clone?: boolean;
}) {
  return (
    <a
      className="rev-card"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={clone || undefined}
      tabIndex={clone ? -1 : undefined}
    >
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
    </a>
  );
}

export function ReviewsCarousel({
  reviews,
  profileUrl,
}: {
  reviews: TpReview[];
  profileUrl: string;
}) {
  // Duplicate the set so the marquee can loop seamlessly (the clone is
  // decorative — hidden from assistive tech to avoid announcing reviews twice).
  return (
    <div className="rev-carousel" aria-label="Client reviews from Trustpilot">
      <div className="rev-track">
        {reviews.map((r, i) => (
          <Card r={r} href={profileUrl} key={`a-${r.author}-${i}`} />
        ))}
        {reviews.map((r, i) => (
          <Card r={r} href={profileUrl} clone key={`b-${r.author}-${i}`} />
        ))}
      </div>
    </div>
  );
}
