import type { Metadata } from "next";
import Link from "next/link";
import { clientPlacements } from "@/components/landing/sections";
import styles from "../guides/guides.module.css";
import resultStyles from "./results.module.css";

const SITE = "https://www.digitalnetworkingagency.com";
const BOOKING = "https://calendly.com/dna-agency00/30min";

const DESCRIPTION =
  "Real client placements from Digital Networking Agency — live, published articles across MSN, Yahoo Finance, USA Today, Benzinga and more.";

export const metadata: Metadata = {
  title: "Client Results & Placements | Digital Networking Agency",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/results` },
  openGraph: {
    title: "Client Results & Placements | Digital Networking Agency",
    description: DESCRIPTION,
    url: `${SITE}/results`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

// Some meta strings already carry the outlet name ("Full feature · MSN").
// Strip it so the label doesn't read "MSN · Full feature · MSN".
function detail(outlet: string, meta: string) {
  if (!meta) return "";
  return meta
    .split("·")
    .map((part) => part.trim())
    .filter((part) => part && part.toLowerCase() !== outlet.toLowerCase())
    .join(" · ");
}

export default function ResultsPage() {
  const outlets = Array.from(
    new Set(clientPlacements.map((p) => p.outlet))
  ).sort();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/results#collection`,
    name: "Client Results & Placements",
    url: `${SITE}/results`,
    description: DESCRIPTION,
    hasPart: clientPlacements.map((p) => ({
      "@type": "Article",
      headline: p.headline,
      url: p.href,
      publisher: { "@type": "Organization", name: p.outlet },
    })),
  };

  return (
    <div className={styles.page}>
      <main className={styles.wrap}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
        </nav>

        <header className={styles.header}>
          <h1>Client Placements</h1>
          <p className={styles.lede}>
            Live, published articles &mdash; not a logo wall. Every link below
            opens the real piece on the publication that ran it.
          </p>
        </header>

        <div className={resultStyles.outlets}>
          <span className={resultStyles.outletsLabel}>Published in</span>
          <div className={resultStyles.outletList}>
            {outlets.map((o) => (
              <span key={o} className={resultStyles.outletChip}>
                {o}
              </span>
            ))}
          </div>
        </div>

        <ul className={resultStyles.list}>
          {clientPlacements.map((p) => (
            <li key={p.href} className={resultStyles.item}>
              <a
                className={resultStyles.card}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.img ? (
                  <span className={resultStyles.shot}>
                    <img src={p.img} alt={p.headline} loading="lazy" />
                  </span>
                ) : null}
                <span className={resultStyles.body}>
                  <span className={resultStyles.meta}>
                    {p.outlet}
                    {detail(p.outlet, p.meta) ? (
                      <>
                        {" "}
                        <span aria-hidden="true">·</span>{" "}
                        {detail(p.outlet, p.meta)}
                      </>
                    ) : null}
                  </span>
                  <span className={resultStyles.headline}>{p.headline}</span>
                  <span className={resultStyles.read}>
                    Read the article <span aria-hidden="true">&rarr;</span>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <aside className={styles.cta}>
          <span className={styles.ctaTag}>Your story, in print</span>
          <h2>
            Want results like <em>these?</em>
          </h2>
          <p>
            Book a 30-minute call. We&rsquo;ll tell you honestly which
            publications fit your business and what the process looks like.
          </p>
          <a
            className={styles.ctaBtn}
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Free Call <span aria-hidden="true">&rarr;</span>
          </a>
          <p className={styles.ctaLinks}>
            <a href="mailto:sam@digitalnetworkingagency.com">
              sam@digitalnetworkingagency.com
            </a>
            <span aria-hidden="true">·</span>
            <a href="tel:+13302276337">+1 (330) 227-6337</a>
          </p>
        </aside>
      </main>
    </div>
  );
}
