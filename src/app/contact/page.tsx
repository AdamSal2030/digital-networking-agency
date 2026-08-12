import type { Metadata } from "next";
import styles from "../get-featured-in/getfeatured.module.css";
import contact from "./contact.module.css";
import { ContactForm } from "./ContactForm";
import { ContactFAQ } from "./ContactFAQ";

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

      <section className={contact.chero}>
        <div className={contact.cheroInner}>
          <span className={contact.ckicker}>Contact us</span>
          <h1 className={contact.ch1}>Let&rsquo;s make headlines.</h1>
          <p className={contact.csub}>
            Tell us who you want to reach and where you want to appear — we
            recommend the outlets and handle the writing and placement, end to
            end.
          </p>
          <ul className={contact.cbadges}>
            <li>You approve every word</li>
            <li>Unlimited revisions</li>
            <li>Reply within 24 hours</li>
          </ul>
        </div>
      </section>

      <div className={contact.wide}>
        <div className={contact.panel}>
          <div className={contact.layout}>
          {/* Form */}
          <div>
            <div className={contact.formHead}>
              <span className={contact.formHeadIcon} aria-hidden="true">➤</span>
              <span className={contact.formHeadText}>
                <strong>Request your feature</strong>
                <span>Takes under a minute. No obligation.</span>
              </span>
            </div>
            <ContactForm />
          </div>

          {/* Direct contact — Publisive-style cards */}
          <aside className={contact.side}>
            <span className={contact.sideHead}>Prefer to reach us directly?</span>
            <a className={contact.card} href="tel:+13302276337">
              <span className={contact.cardIcon} aria-hidden="true">✆</span>
              <span className={contact.cardText}>
                <span className={contact.cardLabel}>Call us</span>
                <span className={contact.cardValue}>+1 (330) 227-6337</span>
              </span>
            </a>
            <a className={contact.card} href="mailto:sam@digitalnetworkingagency.com">
              <span className={contact.cardIcon} aria-hidden="true">✉</span>
              <span className={contact.cardText}>
                <span className={contact.cardLabel}>Email us</span>
                <span className={contact.cardValueSm}>sam@digitalnetworkingagency.com</span>
              </span>
            </a>
            <a className={contact.card} href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <span className={contact.cardIcon} aria-hidden="true">✆</span>
              <span className={contact.cardText}>
                <span className={contact.cardLabel}>WhatsApp</span>
                <span className={contact.cardValue}>Message us directly</span>
              </span>
            </a>

            <div className={contact.next}>
              <span className={contact.nextLabel}>What happens next</span>
              <ol className={contact.nextList}>
                <li>
                  <span className={contact.nextNum}>1</span>
                  <span>
                    <strong>Tell us your goals</strong>
                    Who you want to reach, and where you want to appear.
                  </span>
                </li>
                <li>
                  <span className={contact.nextNum}>2</span>
                  <span>
                    <strong>We map your placements</strong>
                    We shortlist the outlets that fit your audience.
                  </span>
                </li>
                <li>
                  <span className={contact.nextNum}>3</span>
                  <span>
                    <strong>We write and publish</strong>
                    Our team drafts your feature, you approve every word, then it goes live.
                  </span>
                </li>
              </ol>
              <p className={contact.nextReply}>
                <span aria-hidden="true">✓</span> We reply within 24 hours, every time.
              </p>
            </div>
          </aside>
          </div>
        </div>
      </div>

      <ContactFAQ />
    </div>
  );
}
