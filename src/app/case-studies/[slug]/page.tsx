import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES, getCaseStudy } from "@/content/caseStudies";
import styles from "../case.module.css";

const SITE = "https://www.digitalnetworkingagency.com";
const BOOKING = "https://calendly.com/dna-agency00/30min";

export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  const url = `${SITE}/case-studies/${c.slug}`;
  const description = `How Digital Networking Agency featured ${c.name} in ${c.outlet}. ${c.quote}`;
  return {
    title: `${c.name} in ${c.outlet} | DNA Case Study`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${c.name} in ${c.outlet} | DNA Case Study`,
      description,
      url,
      siteName: "Digital Networking Agency",
      type: "article",
      locale: "en_US",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  const url = `${SITE}/case-studies/${c.slug}`;
  const others = CASE_STUDIES.filter((x) => x.slug !== c.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: `${c.name} in ${c.outlet}`,
      description: c.quote,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Digital Networking Agency" },
      publisher: { "@id": `${SITE}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE}/case-studies` },
        { "@type": "ListItem", position: 3, name: c.name, item: url },
      ],
    },
  ];

  const sections = [
    { h: "The client", b: c.client },
    { h: "The goal", b: c.goal },
    { h: "What we did", b: c.did },
    { h: "The result", b: c.result },
  ];

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.detail}>
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/case-studies">Case Studies</Link>
        </nav>

        <div className={styles.detailHead}>
          <div className={styles.detailText}>
            <span className={styles.detailOutlet}>Featured in {c.outlet}</span>
            <h1>{c.name}</h1>
            <p className={styles.detailRole}>{c.role}</p>
            <p className={styles.detailQuote}>{c.quote}</p>
            <a
              className={styles.readLive}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the live article on {c.outlet} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <a
            className={styles.detailShot}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={c.image} alt={`${c.name} featured in ${c.outlet}`} />
          </a>
        </div>

        <div className={styles.detailBody}>
          {sections.map((s) => (
            <section key={s.h} className={`${styles.detailSection} sr`}>
              <h2>{s.h}</h2>
              <p>{s.b}</p>
            </section>
          ))}
        </div>

        <aside className={styles.cta}>
          <h2>
            Want a feature like <em>this?</em>
          </h2>
          <p>
            Book a 30-minute call. We&rsquo;ll tell you honestly which
            publications fit your story.
          </p>
          <a className={styles.ctaBtn} href={BOOKING} target="_blank" rel="noopener noreferrer">
            Book a Free Call <span aria-hidden="true">&rarr;</span>
          </a>
        </aside>

        <nav className={styles.more} aria-label="More case studies">
          <h2>More case studies</h2>
          <div className={styles.moreGrid}>
            {others.map((x) => (
              <Link key={x.slug} href={`/case-studies/${x.slug}`}>
                <img src={x.image} alt={x.name} loading="lazy" />
                <span>{x.name}</span>
                <small>{x.outlet}</small>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
