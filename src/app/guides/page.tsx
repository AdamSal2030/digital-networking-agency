import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/content/guides";
import styles from "./guides.module.css";

const SITE = "https://www.digitalnetworkingagency.com";

export const metadata: Metadata = {
  title: "PR & Media Guides — How to Get Featured | DNA",
  description:
    "Straight answers on how media placement actually works: the real routes into each publication, what they cost, and how to verify what you bought.",
  alternates: { canonical: `${SITE}/guides` },
  openGraph: {
    title: "PR & Media Guides — How to Get Featured | DNA",
    description:
      "Straight answers on how media placement actually works: the real routes into each publication, what they cost, and how to verify what you bought.",
    url: `${SITE}/guides`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

export default function GuidesIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/guides#collection`,
    name: "PR & Media Guides",
    url: `${SITE}/guides`,
    description: metadata.description as string,
    hasPart: GUIDES.map((g) => ({
      "@type": "Article",
      headline: g.h1,
      url: `${SITE}/guides/${g.slug}`,
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
        <h1>PR &amp; Media Guides</h1>
        <p className={styles.lede}>
          How media placement actually works &mdash; the real routes into each
          publication, what they cost, and how to check what you bought. Including
          the parts most agencies leave out.
        </p>
      </header>

      <ul className={styles.grid}>
        {GUIDES.map((guide) => (
          <li key={guide.slug} className={styles.card}>
            <h2>
              <Link href={`/guides/${guide.slug}`}>{guide.h1}</Link>
            </h2>
            <p>{guide.description}</p>
            <Link className={styles.readMore} href={`/guides/${guide.slug}`}>
              Read the guide &rarr;
            </Link>
          </li>
        ))}
      </ul>
      </main>
    </div>
  );
}
