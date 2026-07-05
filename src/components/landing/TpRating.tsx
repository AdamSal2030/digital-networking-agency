// Trustpilot-style rating: a row of green star boxes with proportional fill.
// Pure/presentational so it can render in both server and client components.

function StarBox({ filled }: { filled: boolean }) {
  return (
    <span className={filled ? "tp-box tp-box-on" : "tp-box"}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 17.3l-6.16 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.48 4.73 1.64 7.03z" />
      </svg>
    </span>
  );
}

export function TpRating({
  rating,
  boxSize = 30,
}: {
  rating: number;
  boxSize?: number;
}) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  return (
    <span
      className="tp-rating"
      style={{ ["--tp-box" as string]: `${boxSize}px` }}
      aria-label={`${rating.toFixed(1)} out of 5 stars`}
    >
      <span className="tp-row tp-row-empty" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <StarBox key={i} filled={false} />
        ))}
      </span>
      <span
        className="tp-row tp-row-fill"
        style={{ width: `${pct}%` }}
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <StarBox key={i} filled />
        ))}
      </span>
    </span>
  );
}

export function TpLogo() {
  return (
    <span className="tp-logo" aria-label="Trustpilot">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="tp-logo-star">
        <path d="M12 17.3l-6.16 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.48 4.73 1.64 7.03z" />
      </svg>
      <span className="tp-logo-word">Trustpilot</span>
    </span>
  );
}

// Trustpilot's word label for a given score.
export function scoreLabel(score: number): string {
  if (score >= 4.5) return "Excellent";
  if (score >= 3.5) return "Great";
  if (score >= 2.5) return "Average";
  if (score >= 1.5) return "Poor";
  return "Bad";
}
