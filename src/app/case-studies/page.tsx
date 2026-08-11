import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES, CASE_META } from "@/content/caseStudies";
import styles from "./case.module.css";

const SITE = "https://www.digitalnetworkingagency.com";

export const metadata: Metadata = {
  title: CASE_META.title,
  description: CASE_META.description,
  alternates: { canonical: `${SITE}/case-studies` },
  openGraph: {
    title: CASE_META.title,
    description: CASE_META.description,
    url: `${SITE}/case-studies`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

export default function CaseStudiesIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/case-studies#collection`,
    name: "Client Case Studies",
    url: `${SITE}/case-studies`,
    description: CASE_META.description,
    hasPart: CASE_STUDIES.map((c) => ({
      "@type": "Article",
      headline: `${c.name} — ${c.outlet}`,
      url: `${SITE}/case-studies/${c.slug}`,
    })),
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={styles.hero}>
        <span className={styles.kicker}>Case studies</span>
        <h1>Real clients. Real features.</h1>
        <p className={styles.lede}>
          Founders and experts we developed, wrote and placed in publications
          that matter. Every one links to the live article.
        </p>
      </section>

      <div className={styles.grid}>
        {CASE_STUDIES.map((c) => (
          <Link
            key={c.slug}
            className={`${styles.card} sr`}
            href={`/case-studies/${c.slug}`}
          >
            <span className={styles.shot}>
              <img src={c.image} alt={`${c.name} featured in ${c.outlet}`} loading="lazy" />
              <span className={styles.outletTag}>{c.outlet}</span>
            </span>
            <span className={styles.cardBody}>
              <span className={styles.cardName}>{c.name}</span>
              <span className={styles.cardRole}>{c.role}</span>
              <span className={styles.cardQuote}>{c.quote}</span>
              <span className={styles.cardCta}>
                Read the story <span aria-hidden="true">&rarr;</span>
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
