import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES, getGuide } from "@/content/guides";
import styles from "../guides.module.css";

const SITE = "https://www.digitalnetworkingagency.com";
const AUTHOR = "Sam Harris";
const AUTHOR_ROLE = "Founder";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  const url = `${SITE}/guides/${guide.slug}`;

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: url },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url,
      siteName: "Digital Networking Agency",
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const url = `${SITE}/guides/${guide.slug}`;
  const updated = "2026-08-09";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: guide.h1,
      description: guide.description,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      datePublished: updated,
      dateModified: updated,
      inLanguage: "en-US",
      author: {
        "@type": "Person",
        name: AUTHOR,
        jobTitle: AUTHOR_ROLE,
        worksFor: { "@id": `${SITE}/#organization` },
      },
      publisher: { "@id": `${SITE}/#organization` },
      isAccessibleForFree: true,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE}/guides` },
        { "@type": "ListItem", position: 3, name: guide.h1, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${SITE}/#organization`,
      name: "Digital Networking Agency",
      alternateName: "DNA PR",
      url: `${SITE}/`,
      logo: `${SITE}/black_logo.png`,
      description:
        "Results-driven public relations and media relations agency that pitches founders' and brands' stories to editors and journalists at trusted publications.",
      telephone: "+1-330-227-6337",
      email: "sam@digitalnetworkingagency.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6545 Market Ave N, Suite 100",
        addressLocality: "Canton",
        addressRegion: "OH",
        postalCode: "44721",
        addressCountry: "US",
      },
      sameAs: ["https://instagram.com/dnateams"],
    },
  ];

  return (
    <div className={styles.page}>
      <main className={styles.wrap}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className={styles.crumbs} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/guides">Guides</Link>
      </nav>

      <article className={styles.article}>
        <header className={styles.header}>
          <h1>{guide.h1}</h1>
          <p className={styles.byline}>
            By {AUTHOR}, {AUTHOR_ROLE}, Digital Networking Agency · Last updated 9 August 2026
          </p>
        </header>

        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: guide.body }}
        />
      </article>

      <aside className={styles.cta}>
        <h2>Want a straight answer about your own situation?</h2>
        <p>
          We&rsquo;ll tell you honestly whether a placement is worth it for you &mdash;
          including when it isn&rsquo;t.
        </p>
        <p className={styles.ctaLinks}>
          <a href="mailto:sam@digitalnetworkingagency.com">
            sam@digitalnetworkingagency.com
          </a>
          <span aria-hidden="true">·</span>
          <a href="tel:+13302276337">+1 (330) 227-6337</a>
        </p>
      </aside>

      <nav className={styles.more} aria-label="More guides">
        <h2>More guides</h2>
        <ul>
          {GUIDES.filter((g) => g.slug !== guide.slug).map((g) => (
            <li key={g.slug}>
              <Link href={`/guides/${g.slug}`}>{g.h1}</Link>
            </li>
          ))}
        </ul>
      </nav>
      </main>
    </div>
  );
}
