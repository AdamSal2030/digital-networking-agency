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

  const [featured, ...rest] = CASE_STUDIES;
  const outlets = Array.from(new Set(CASE_STUDIES.map((c) => c.outlet)));

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={styles.chero}>
        <span className={styles.ckicker}>Case studies</span>
        <h1 className={styles.ch1}>Real clients.<br />Real features.</h1>
        <p className={styles.clede}>
          Founders and experts we developed, wrote and placed in publications
          that matter — every story permanent, searchable, and approved by the
          client before it went live.
        </p>
        <div className={styles.outStrip}>
          <span>Featured in</span>
          <div className={styles.outStripList}>
            {outlets.map((o) => (
              <em key={o}>{o}</em>
            ))}
          </div>
        </div>
      </section>

      {/* featured story — large split card */}
      <div className={styles.wrap}>
        <Link
          href={`/case-studies/${featured.slug}`}
          className={styles.feature}
        >
          <span className={styles.featShot}>
            <img
              src={featured.image}
              alt={`${featured.name} featured in ${featured.outlet}`}
            />
            <span className={styles.outletTag}>{featured.outlet}</span>
          </span>
          <span className={styles.featBody}>
            <span className={styles.featEy}>Featured story</span>
            <span className={styles.featName}>{featured.name}</span>
            <span className={styles.featRole}>{featured.role}</span>
            <span className={styles.featQuote}>{featured.quote}</span>
            <span className={styles.cardCta}>
              Read the case study <span aria-hidden="true">&rarr;</span>
            </span>
          </span>
        </Link>
      </div>

      <div className={styles.grid}>
        {rest.map((c) => (
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

      <section className={styles.endCta}>
        <div className={styles.endCtaInner}>
          <h2>
            Want to be our <em>next feature?</em>
          </h2>
          <p>
            Tell us who you want to reach. We&rsquo;ll recommend the outlets and
            handle the writing and placement, start to finish.
          </p>
          <Link href="/contact" className={styles.endBtn}>
            Get featured <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
