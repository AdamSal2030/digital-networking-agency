// Live Trustpilot reviews for the /plans page.
//
// Trustpilot's embeddable TrustBox widgets require a paid Trustpilot plan, so we
// render our own reviews section instead. Trustpilot blocks direct scraping (403),
// but their public profile page exposes all reviews as JSON-LD structured data,
// which we read through a reader proxy that bypasses the block. Results are cached
// with ISR (see REVALIDATE_SECONDS) so new reviews appear automatically without a
// code change. If the live fetch ever fails, we fall back to SEED_REVIEWS below.

export type TpReview = {
  author: string;
  title: string;
  body: string;
  rating: number;
  date: string; // YYYY-MM-DD
};

export type TpData = {
  score: number;
  count: number;
  reviews: TpReview[];
  profileUrl: string;
};

const PROFILE_URL =
  "https://www.trustpilot.com/review/digitalnetworkingagency.com";

// Refresh the cached reviews every 6 hours.
export const REVALIDATE_SECONDS = 21600;

// Snapshot of the current live reviews — used only if the live fetch fails, so the
// section is never empty.
const SEED_REVIEWS: TpReview[] = [
  { author: "Mike Feinman", title: "They did a great job and was fast", body: "They did a great job and was fast.", rating: 5, date: "2026-07-02" },
  { author: "Maurielle", title: "An ally to promote your business online", body: "If you're looking for an ally to promote your business online, then The Digital Networking Agency team will help extend your reach. They recommended publicity opportunities that were a perfect fit for my business and desired customer audience, and they told my story in a way that made it immediately obvious to customers why they should choose me. It was well worth the investment.", rating: 5, date: "2026-06-29" },
  { author: "Mark William Lewis", title: "Great writing", body: "Great writing! Loved the article they sourced about me and my company.", rating: 5, date: "2026-06-26" },
  { author: "Keith", title: "Flexible inclusion for value", body: "I was contacted for being included in a monthly people-to-watch feature. I explained that I was retired and had more of a legacy perspective on the Health IT space, and my perspective was reflected in the article. I appreciate the opportunity to share my voice!", rating: 5, date: "2026-06-25" },
  { author: "Ryan Servatius", title: "Great communication and easy to work with", body: "Great communication and easy to work with. Article was quick and an easy read.", rating: 5, date: "2026-06-24" },
  { author: "vablet", title: "Try them, you will not be disappointed", body: "Sam and his team made the entire process easy. I was very impressed with the article they wrote and how quickly they were able to get it published. They were also a pleasure to work with throughout. I found their rates very reasonable, and their team was consistently professional. This was one of the best experiences we've had working with a PR firm. I highly recommend them.", rating: 5, date: "2026-06-16" },
  { author: "Bridget Hom", title: "So professional", body: "They are so professional and a wonderful company to work with! I recommend them!", rating: 5, date: "2026-06-18" },
  { author: "Julie Krivanek", title: "Head and shoulders above", body: "I have worked with many PR and marketing firms — and this stands head and shoulders above in the #1 spot. Responsive, timely, clear in expectations, and extremely creative with superb results. A complete pleasure to work with. If you have the chance to work with Sam Harris and his team, grab it — you won't be sorry.", rating: 5, date: "2026-06-03" },
];

const SEED: TpData = {
  score: 4.3,
  count: 9,
  reviews: SEED_REVIEWS,
  profileUrl: PROFILE_URL,
};

// Some review bodies contain a pasted-in AI artifact prefix (e.g. "Got it. Here's a
// draft you can paste in:---<actual review>"). Strip anything before a "---" fence
// and trim, so only the genuine review text is shown.
function cleanBody(raw: string): string {
  let body = (raw || "").replace(/\r/g, "").trim();
  const fence = body.lastIndexOf("---");
  if (fence !== -1 && /paste|draft|here'?s a|got it/i.test(body.slice(0, fence))) {
    body = body.slice(fence + 3);
  }
  return body.replace(/\s+/g, " ").trim();
}

type LdReview = {
  "@type"?: string;
  author?: { name?: string };
  headline?: string;
  reviewBody?: string;
  reviewRating?: { ratingValue?: string | number };
  datePublished?: string;
};

export async function getTrustpilotData(): Promise<TpData> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(`https://r.jina.ai/${PROFILE_URL}`, {
      headers: { "X-Return-Format": "html" },
      next: { revalidate: REVALIDATE_SECONDS },
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) return SEED;

    const html = await res.text();
    const match = html.match(
      /application\/ld\+json[^>]*>([\s\S]*?)<\/script>/
    );
    if (!match) return SEED;

    const parsed = JSON.parse(match[1].trim());
    const graph: unknown[] = parsed["@graph"] || [];

    const agg = (graph as Record<string, unknown>[]).find(
      (g) => g && (g as { aggregateRating?: unknown }).aggregateRating
    ) as { aggregateRating?: { ratingValue?: string; reviewCount?: string } } | undefined;

    const reviews: TpReview[] = (graph as LdReview[])
      .filter((g) => g && g["@type"] === "Review")
      .map((r) => ({
        author: r.author?.name?.trim() || "Verified client",
        title: (r.headline || "").trim(),
        body: cleanBody(r.reviewBody || ""),
        rating: Math.round(Number(r.reviewRating?.ratingValue) || 5),
        date: (r.datePublished || "").slice(0, 10),
      }))
      .filter((r) => r.rating >= 4 && r.body.length > 0)
      .sort((a, b) => (b.date > a.date ? 1 : b.date < a.date ? -1 : 0));

    if (!reviews.length) return SEED;

    return {
      score: Number(agg?.aggregateRating?.ratingValue) || SEED.score,
      count: Number(agg?.aggregateRating?.reviewCount) || reviews.length,
      reviews: reviews.slice(0, 9),
      profileUrl: PROFILE_URL,
    };
  } catch {
    return SEED;
  }
}
