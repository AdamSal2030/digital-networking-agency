import type { Metadata } from "next";
import Link from "next/link";
import { getTrustpilotData } from "@/lib/trustpilot";
import { VideoTestimonial } from "@/components/VideoTestimonial";
import styles from "./reviews.module.css";

// Refresh cached Trustpilot reviews every 6 hours.
export const revalidate = 21600;

const SITE = "https://www.digitalnetworkingagency.com";

export const metadata: Metadata = {
  title: "Client Reviews | Digital Networking Agency on Trustpilot",
  description:
    "Real, verified client reviews of Digital Networking Agency on Trustpilot — why founders and brands trust DNA to get them featured.",
  alternates: { canonical: `${SITE}/reviews` },
  openGraph: {
    title: "Client Reviews | Digital Networking Agency on Trustpilot",
    description:
      "Real, verified client reviews of Digital Networking Agency on Trustpilot.",
    url: `${SITE}/reviews`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

function Stars({ rating, tp = false }: { rating: number; tp?: boolean }) {
  return (
    <span
      className={`${styles.stars} ${tp ? styles.starsTp : ""}`}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`${styles.star} ${i < Math.round(rating) ? styles.starOn : ""}`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7L12 17.8 5.7 21.2l1.7-7L2 9.5l7.1-.6z" />
          </svg>
        </span>
      ))}
    </span>
  );
}

export default async function ReviewsPage() {
  const tp = await getTrustpilotData();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Digital Networking Agency",
    url: SITE,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tp.score,
      reviewCount: tp.count,
      bestRating: 5,
    },
    review: tp.reviews.slice(0, 12).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      datePublished: r.date,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      name: r.title,
      reviewBody: r.body,
    })),
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={styles.hero}>
        <span className={styles.kicker}>Reviews</span>
        <h1 className={styles.h1}>Trusted by our clients.</h1>
        <p className={styles.lede}>
          We don&rsquo;t ask you to take our word for it. Here&rsquo;s what
          founders and brands say after we&rsquo;ve told their story &mdash;
          straight from our verified Trustpilot profile.
        </p>

        <a
          className={styles.tpBadge}
          href={tp.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.tpStar} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7L12 17.8 5.7 21.2l1.7-7L2 9.5l7.1-.6z" />
            </svg>
            Trustpilot
          </span>
          <span className={styles.tpScore}>
            <Stars rating={tp.score} tp />
            <span>
              <strong>{tp.score.toFixed(1)}</strong> out of 5 &middot;{" "}
              {tp.count} reviews
            </span>
          </span>
          <span className={styles.tpGo} aria-hidden="true">
            View on Trustpilot &rarr;
          </span>
        </a>
      </section>

      <VideoTestimonial />

      <div className={styles.grid}>
        {tp.reviews.slice(0, 9).map((r, i) => (
          <article key={`${r.author}-${i}`} className={`${styles.card} sr`}>
            <div className={styles.cardTop}>
              <Stars rating={r.rating} tp />
              <span className={styles.verified}>
                <span aria-hidden="true">✓</span> Verified
              </span>
            </div>
            <h2 className={styles.cardTitle}>{r.title}</h2>
            <p className={styles.cardBody}>{r.body}</p>
            <div className={styles.cardFoot}>
              <span className={styles.avatar} aria-hidden="true">
                {r.author.charAt(0).toUpperCase()}
              </span>
              <span className={styles.cardMeta}>
                <span className={styles.author}>{r.author}</span>
                <span className={styles.date}>
                  {new Date(r.date + "T00:00:00").toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.seeAll}>
        <a
          className={styles.seeAllBtn}
          href={tp.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.tpDot} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7L12 17.8 5.7 21.2l1.7-7L2 9.5l7.1-.6z" />
            </svg>
          </span>
          Show all {tp.count} reviews on Trustpilot
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <section className={styles.endCta}>
        <div className={styles.endCtaInner}>
          <h2>
            Ready to be our <em>next 5-star story?</em>
          </h2>
          <p>
            Tell us who you want to reach. We&rsquo;ll recommend the outlets and
            handle everything, start to finish.
          </p>
          <div className={styles.endBtns}>
            <Link href="/contact" className={styles.endBtn}>
              Get featured <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
