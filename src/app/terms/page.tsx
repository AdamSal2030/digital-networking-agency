import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

const SITE = "https://www.digitalnetworkingagency.com";
const UPDATED = "12 August 2026";

export const metadata: Metadata = {
  title: "Terms & Conditions | Digital Networking Agency",
  description:
    "The terms that apply when you use the Digital Networking Agency website and when you engage us for media placement work.",
  alternates: { canonical: `${SITE}/terms` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.crumbs}>
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>Terms &amp; Conditions</span>
        </div>
        <h1 className={styles.h1}>Terms &amp; Conditions</h1>
        <p className={styles.updated}>Last updated: {UPDATED}</p>

        <div className={styles.body}>
          <p>
            These terms apply to your use of digitalnetworkingagency.com,
            operated by Digital Networking Agency LLC (&ldquo;DNA&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;). By using this site you agree to
            them.
          </p>

          <h2>What we do</h2>
          <p>
            DNA is a public relations and media placement firm. We develop story
            angles, write editorial content and pitch or place that content with
            publications. The specific scope, deliverables, fees and timelines
            for any engagement are set out in the separate written agreement or
            proposal we provide before work begins. Those documents govern the
            engagement; this page governs the website.
          </p>

          <h2>What we do not promise</h2>
          <p>
            This is the most important section on this page, so we have written
            it plainly.
          </p>
          <ul>
            <li>
              We do not control editorial decisions at any publication. Where an
              engagement involves pitching for earned editorial coverage, we
              cannot and do not guarantee that a specific outlet will publish.
            </li>
            <li>
              We will always tell you before you commit whether a placement is
              earned editorial, a contributor route, or paid or sponsored
              content, because those are different products.
            </li>
            <li>
              We do not guarantee any particular business outcome, ranking,
              traffic level, revenue, or return on investment from coverage.
            </li>
            <li>
              Publications may edit, relocate, update or remove content at their
              discretion after publication. We cannot control that.
            </li>
          </ul>

          <h2>Your responsibilities</h2>
          <p>
            You are responsible for the accuracy of the information you give us
            about yourself or your business, and for ensuring you have the right
            to share any materials you provide, including images, logos, quotes
            and claims. You confirm that content you approve for publication is
            truthful and not misleading.
          </p>
          <p>
            If you operate in a regulated profession, you are responsible for
            ensuring published content meets your regulator&rsquo;s
            requirements. We will work with your compliance process, but we do
            not provide legal, financial, medical or regulatory advice.
          </p>

          <h2>Approvals</h2>
          <p>
            You review and approve content before it is submitted for
            publication. Once you have approved a piece and it has been
            published, it may not be possible to withdraw or amend it.
          </p>

          <h2>Fees</h2>
          <p>
            Fees, payment schedules, minimum terms and any refund or
            cancellation arrangements are set out in your written agreement with
            us. Nothing on this website constitutes a binding quote.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The content, design and branding on this website belong to DNA or
            our licensors and may not be copied or reproduced without
            permission. Publication names, logos and trade marks shown on this
            site belong to their respective owners and are used to describe
            where coverage has appeared or may be pitched. Their appearance does
            not imply endorsement, affiliation or partnership.
          </p>

          <h2>Third-party links</h2>
          <p>
            This site links to published articles and third-party platforms such
            as Trustpilot. We are not responsible for the content or practices
            of sites we do not operate.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, DNA is not liable for
            indirect, incidental or consequential losses arising from your use
            of this website. Nothing in these terms limits liability that cannot
            be limited by law.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Ohio, United
            States.
          </p>

          <h2>Contact us</h2>
          <p>
            Digital Networking Agency LLC
            <br />
            6545 Market Ave N, Suite 100, Canton, OH 44721, United States
            <br />
            <a href="mailto:sam@digitalnetworkingagency.com">
              sam@digitalnetworkingagency.com
            </a>
            <br />
            <a href="tel:+13302276337">+1 (330) 227-6337</a>
          </p>
        </div>
      </div>
    </div>
  );
}
