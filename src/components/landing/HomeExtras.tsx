import Link from "next/link";
import { CASE_STUDIES } from "@/content/caseStudies";
import styles from "./HomeExtras.module.css";

const SERVICES = [
  {
    n: "01",
    title: "Monthly Packages",
    tag: "Foundation → Platinum",
    body: "Ongoing PR with consistent placements, a dedicated team, and a strategy that compounds month over month.",
    href: "/services#packages",
  },
  {
    n: "02",
    title: "A La Carte",
    tag: "Single features",
    body: "One bespoke, high-impact article written to your niche and placed in the outlet you want. Maximum visibility, short term.",
    href: "/services#alacarte",
  },
  {
    n: "03",
    title: "DNA Prime",
    tag: "Premium strategy",
    body: "Our flagship long-game — top-tier placements, SEO, AI reputation management and media training that makes you the name.",
    href: "/services#prime",
  },
  {
    n: "04",
    title: "Elite Branding",
    tag: "Beyond PR",
    body: "Websites, ads, design, social and SEO — everything around the coverage so the attention actually converts.",
    href: "/services#branding",
  },
];

export function ServicesTeaser() {
  return (
    <section className={styles.svc} id="services">
      <div className="stag reveal">What We Do</div>
      <div className="stitle reveal">Ways to Work With DNA</div>
      <div className="sdiv reveal" />
      <div className={styles.svcGrid}>
        {SERVICES.map((s, i) => (
          <Link
            key={s.title}
            href={s.href}
            className={`${styles.svcCard} reveal`}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <span className={styles.svcNum}>{s.n}</span>
            <span className={styles.svcTag}>{s.tag}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <span className={styles.svcMore}>Explore →</span>
          </Link>
        ))}
      </div>
      <div className={styles.svcCta}>
        <Link href="/services" className="btn-g">
          See all services
        </Link>
      </div>
    </section>
  );
}

export function CaseStudiesPreview() {
  const items = CASE_STUDIES.slice(0, 3);
  return (
    <section className={styles.cs} id="results">
      <div className="stag reveal">Real Results</div>
      <div className="stitle reveal">Clients We&rsquo;ve Featured</div>
      <div className="sdiv reveal" />
      <p className={`${styles.csLede} reveal`}>
        Permanent, searchable features in outlets people actually trust — every
        one approved by the client before it went live.
      </p>
      <div className={styles.csGrid}>
        {items.map((c, i) => (
          <Link
            key={c.slug}
            href={`/case-studies/${c.slug}`}
            className={`${styles.csCard} reveal`}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <span className={styles.csShot}>
              <img src={c.image} alt={`${c.name} featured in ${c.outlet}`} loading="lazy" />
              <span className={styles.csOutlet}>{c.outlet}</span>
            </span>
            <span className={styles.csBody}>
              <span className={styles.csName}>{c.name}</span>
              <span className={styles.csRole}>{c.role}</span>
              <span className={styles.csMore}>Read the case study →</span>
            </span>
          </Link>
        ))}
      </div>
      <div className={styles.svcCta}>
        <Link href="/case-studies" className="btn-g">
          View all case studies
        </Link>
      </div>
    </section>
  );
}
