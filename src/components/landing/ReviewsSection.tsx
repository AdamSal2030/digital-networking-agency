import type { TpData } from "@/lib/trustpilot";
import { TpRating, TpLogo, scoreLabel } from "./TpRating";
import { ReviewsCarousel } from "./ReviewsCarousel";

export function ReviewsSection({ data }: { data: TpData }) {
  const { score, reviews, profileUrl } = data;
  return (
    <div className="plans-reviews">
      <div className="rev-band">
        <a
          className="rev-summary"
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="rev-summary-label">{scoreLabel(score)}</span>
          <TpRating rating={score} boxSize={34} />
          <TpLogo />
        </a>

        <div className="rev-cards-wrap">
          <ReviewsCarousel reviews={reviews} />
          <div className="rev-latest">Showing our latest reviews</div>
        </div>
      </div>
    </div>
  );
}
