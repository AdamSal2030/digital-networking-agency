import type { Metadata } from "next";
import styles from "../get-featured-in/getfeatured.module.css";
import contact from "./contact.module.css";

const SITE = "https://www.digitalnetworkingagency.com";
const FORMSPREE = "moeadqdz"; // formspree.io form id
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
          <form
            className={contact.form}
            action={`https://formspree.io/f/${FORMSPREE}`}
            method="POST"
          >
            <div className={contact.row}>
              <label>
                First name <span className={contact.req}>*</span>
                <input type="text" name="first_name" required />
              </label>
              <label>
                Last name
                <input type="text" name="last_name" />
              </label>
            </div>

            <div className={contact.row}>
              <label>
                Email <span className={contact.req}>*</span>
                <input type="email" name="email" required />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" />
              </label>
            </div>

            <label>
              Website or social profile
              <input type="text" name="website" placeholder="https://" />
            </label>

            <label>
              Publications you have in mind
              <input
                type="text"
                name="publications"
                placeholder="e.g. Forbes, USA Today, Yahoo Finance"
              />
            </label>

            <div className={contact.row}>
              <label>
                Who are we featuring?
                <select name="featuring" defaultValue="">
                  <option value="" disabled>
                    Select…
                  </option>
                  <option>Personal brand</option>
                  <option>Company</option>
                  <option>Both</option>
                </select>
              </label>
              <label>
                Timeline
                <select name="timeline" defaultValue="">
                  <option value="" disabled>
                    Select…
                  </option>
                  <option>As soon as possible</option>
                  <option>Within a month</option>
                  <option>1–3 months</option>
                  <option>Just exploring</option>
                </select>
              </label>
            </div>

            <label>
              Budget in mind
              <select name="budget" defaultValue="">
                <option value="" disabled>
                  Select…
                </option>
                <option>Under $1,000</option>
                <option>$1,000 – $3,000</option>
                <option>$3,000 – $10,000</option>
                <option>$10,000+</option>
                <option>Not sure yet</option>
              </select>
            </label>

            <label>
              Anything else?
              <textarea name="message" rows={4} />
            </label>

            <button type="submit">Request my feature</button>
            <p className={contact.replynote}>We reply within 24 hours, every time.</p>
          </form>

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
