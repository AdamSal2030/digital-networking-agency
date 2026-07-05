import type { TpData } from "@/lib/trustpilot";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="rev-stars" aria-label={`${rating} out of 5 stars`}>
      {"★★★★★".slice(0, rating)}
      <span className="rev-stars-empty">{"★★★★★".slice(rating)}</span>
    </span>
  );
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00Z");
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function ReviewsSection({ data }: { data: TpData }) {
  const { score, count, reviews, profileUrl } = data;
  return (
    <div className="plans-reviews">
      <div className="plans-tiers-title">Rated by our clients</div>

      <a
        className="rev-score"
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="rev-score-num">{score.toFixed(1)}</span>
        <span className="rev-score-meta">
          <Stars rating={Math.round(score)} />
          <span className="rev-score-count">
            {count} reviews on Trustpilot
          </span>
        </span>
      </a>

      <div className="rev-grid">
        {reviews.map((r, i) => (
          <figure className="rev-card" key={`${r.author}-${i}`}>
            <Stars rating={r.rating} />
            {r.title && <div className="rev-title">{r.title}</div>}
            <blockquote className="rev-body">{r.body}</blockquote>
            <figcaption className="rev-foot">
              <span className="rev-author">{r.author}</span>
              {formatDate(r.date) && (
                <span className="rev-date">{formatDate(r.date)}</span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

      <a
        className="plans-tp"
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="plans-tp-stars">★</span>
        Read all reviews on Trustpilot →
      </a>
    </div>
  );
}
