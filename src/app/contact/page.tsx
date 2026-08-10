import type { Metadata } from "next";
import styles from "../get-featured-in/getfeatured.module.css";
import contact from "./contact.module.css";
import { ContactForm } from "./ContactForm";

const SITE = "https://www.digitalnetworkingagency.com";
const WHATSAPP = "https://wa.me/13302276337";

export const metadata: Metadata = {
  title: "Contact Us | Digital Networking Agency",
  description:
    "Tell us who you want to reach and where you want to appear. We recommend the right publications and handle the writing and placement, start to finish.",
  alternates: { canonical: `${SITE}/contact` },
  openGraph: {
    title: "Contact Us | Digital Networking Agency",
    description:
      "Tell us who you want to reach and where you want to appear. We handle the writing and placement, start to finish.",
    url: `${SITE}/contact`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE}/contact#contact`,
    url: `${SITE}/contact`,
    name: "Contact Digital Networking Agency",
    mainEntity: {
      "@type": "Organization",
      name: "Digital Networking Agency",
      email: "sam@digitalnetworkingagency.com",
      telephone: "+1-330-227-6337",
      url: SITE,
    },
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.kicker}>Contact us</span>
          <h1>Let&rsquo;s get you featured</h1>
          <p className={styles.subhead}>
            Tell us who you want to reach and where you want to appear. We
            recommend the right publications and handle the writing and
            placement, start to finish.
          </p>
          <ul className={styles.badges}>
            <li>You approve every word</li>
            <li>Unlimited revisions</li>
            <li>We reply within 24 hours</li>
          </ul>
        </div>
      </section>

      <div className={styles.body}>
        <div className={contact.layout}>
          {/* Form */}
          <ContactForm />

          {/* Direct contact */}
          <aside className={contact.side}>
            <h2 className={contact.sideTitle}>Prefer to reach us directly?</h2>
            <a className={contact.sideItem} href="mailto:sam@digitalnetworkingagency.com">
              <span className={contact.sideIcon} aria-hidden="true">✉</span>
              <span>
                <span className={contact.sideLabel}>Email</span>
                sam@digitalnetworkingagency.com
              </span>
            </a>
            <a className={contact.sideItem} href="tel:+13302276337">
              <span className={contact.sideIcon} aria-hidden="true">✆</span>
              <span>
                <span className={contact.sideLabel}>Phone</span>
                +1 (330) 227-6337
              </span>
            </a>
            <a
              className={contact.sideItem}
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={contact.sideIcon} aria-hidden="true">✆</span>
              <span>
                <span className={contact.sideLabel}>WhatsApp</span>
                Message us
              </span>
            </a>
            <div className={contact.sideAddress}>
              6545 Market Ave N, Suite 100
              <br />
              Canton, OH 44721
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
