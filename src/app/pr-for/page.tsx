import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/content/services";
import styles from "../guides/guides.module.css";

const SITE = "https://www.digitalnetworkingagency.com";

const DESCRIPTION =
  "PR and media placement by industry — founders, coaches, realtors, attorneys, medical practices, ecommerce brands and more.";

export const metadata: Metadata = {
  title: "PR Services by Industry | Digital Networking Agency",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/pr-for` },
  openGraph: {
    title: "PR Services by Industry | Digital Networking Agency",
    description: DESCRIPTION,
    url: `${SITE}/pr-for`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

export default function ServicesIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/pr-for#collection`,
    name: "PR Services by Industry",
    url: `${SITE}/pr-for`,
    description: DESCRIPTION,
    hasPart: SERVICES.map((s) => ({
      "@type": "Service",
      name: s.h1,
      url: `${SITE}/pr-for/${s.slug}`,
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
          <h1>PR by Industry</h1>
          <p className={styles.lede}>
            Press coverage works differently depending on who you sell to. Pick
            the one that fits and we&rsquo;ll show you what it looks like for
            your business.
          </p>
        </header>

        <ul className={styles.grid}>
          {SERVICES.map((service) => (
            <li key={service.slug} className={styles.card}>
              <h2>
                <Link href={`/pr-for/${service.slug}`}>{service.h1}</Link>
              </h2>
              <p>{service.description}</p>
              <Link
                className={styles.readMore}
                href={`/pr-for/${service.slug}`}
              >
                Learn more &rarr;
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
