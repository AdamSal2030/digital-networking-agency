import type { Metadata } from "next";
import Link from "next/link";
import { OUTLETS } from "@/content/outlets";
import styles from "./getfeatured.module.css";

const SITE = "https://www.digitalnetworkingagency.com";
const DESCRIPTION =
  "Get featured in the publications that matter — Forbes, USA Today, Yahoo Finance, MSN and more. We write your feature and manage the placement.";

export const metadata: Metadata = {
  title: "Get Featured in Top Publications | Digital Networking Agency",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/get-featured-in` },
  openGraph: {
    title: "Get Featured in Top Publications | Digital Networking Agency",
    description: DESCRIPTION,
    url: `${SITE}/get-featured-in`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

export default function GetFeaturedIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/get-featured-in#collection`,
    name: "Get Featured in Top Publications",
    url: `${SITE}/get-featured-in`,
    description: DESCRIPTION,
    hasPart: OUTLETS.map((o) => ({
      "@type": "Service",
      name: `Get featured in ${o.name}`,
      url: `${SITE}/get-featured-in/${o.slug}`,
    })),
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.kicker}>Get featured in</span>
          <h1>Top Publications</h1>
          <p className={styles.subhead}>
            Pick a publication. We write your feature and manage the placement —
            you approve every word.
          </p>
        </div>
      </section>

      <div className={styles.body}>
        <div className={styles.cardGrid}>
          {OUTLETS.map((o) => (
            <Link
              key={o.slug}
              className={styles.card}
              href={`/get-featured-in/${o.slug}`}
            >
              <span className={styles.cardName}>{o.name}</span>
              <span className={styles.cardSub}>{o.subhead}</span>
              <span className={styles.cardCta}>
                Get featured <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
