import type { Metadata } from "next";
import Script from "next/script";
import styles from "../get-featured-in/getfeatured.module.css";
import contact from "./contact.module.css";

const SITE = "https://www.digitalnetworkingagency.com";
const BOOKING = "https://calendly.com/dna-agency00/30min";
// TODO: replace with your Formspree form id (formspree.io -> New form).
// Until then the form falls back to opening the visitor's email client.
const FORMSPREE = "";

export const metadata: Metadata = {
  title: "Contact Us | Digital Networking Agency",
  description:
    "Book a call or send a message. We'll tell you honestly which publications fit your business and what the process looks like.",
  alternates: { canonical: `${SITE}/contact` },
  openGraph: {
    title: "Contact Us | Digital Networking Agency",
    description:
      "Book a call or send a message. We'll tell you honestly which publications fit your business and what the process looks like.",
    url: `${SITE}/contact`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

export default function ContactPage() {
  const formAction = FORMSPREE
    ? `https://formspree.io/f/${FORMSPREE}`
    : "mailto:sam@digitalnetworkingagency.com";

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
            Book a 30-minute call, or send a message. We&rsquo;ll tell you
            honestly which publications fit your business.
          </p>
        </div>
      </section>

      <div className={styles.body}>
        <div className={contact.grid}>
          {/* Booking */}
          <div className={contact.col}>
            <h2 className={contact.colTitle}>Book a call</h2>
            <p className={contact.colLede}>
              The fastest way to start. Pick a time that works for you.
            </p>
            <div
              className="calendly-inline-widget"
              data-url={`${BOOKING}?hide_gdpr_banner=1&background_color=181a23&text_color=f2f2f2&primary_color=8fff00`}
              style={{ minWidth: "280px", height: "640px" }}
            />
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="afterInteractive"
            />
            <a
              className={contact.fallbackLink}
              href={BOOKING}
              target="_blank"
              rel="noopener noreferrer"
            >
              Calendar not loading? Book here &rarr;
            </a>
          </div>

          {/* Message + details */}
          <div className={contact.col}>
            <h2 className={contact.colTitle}>Send a message</h2>
            <form
              className={contact.form}
              action={formAction}
              method="POST"
            >
              <label>
                Your name
                <input type="text" name="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                What do you do?
                <input type="text" name="business" placeholder="Company or role" />
              </label>
              <label>
                Which publication are you after?
                <input type="text" name="outlet" placeholder="e.g. Forbes, USA Today" />
              </label>
              <label>
                Message
                <textarea name="message" rows={4} />
              </label>
              <button type="submit">Send message</button>
            </form>

            <div className={contact.direct}>
              <span className={contact.directLabel}>Or reach us directly</span>
              <a href="mailto:sam@digitalnetworkingagency.com">
                sam@digitalnetworkingagency.com
              </a>
              <a href="tel:+13302276337">+1 (330) 227-6337</a>
              <span className={contact.address}>
                6545 Market Ave N, Suite 100, Canton, OH 44721
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
