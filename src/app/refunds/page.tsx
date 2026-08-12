import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

const SITE = "https://www.digitalnetworkingagency.com";
const UPDATED = "12 August 2026";

export const metadata: Metadata = {
  title: "Refund Policy | Digital Networking Agency",
  description:
    "How refunds, cancellations and duplicate payments are handled at Digital Networking Agency, and what to do if something is not right.",
  alternates: { canonical: `${SITE}/refunds` },
  robots: { index: true, follow: true },
};

export default function RefundsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.crumbs}>
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>Refund Policy</span>
        </div>
        <h1 className={styles.h1}>Refund Policy</h1>
        <p className={styles.updated}>Last updated: {UPDATED}</p>

        <div className={styles.body}>
          <p>
            This page explains how Digital Networking Agency LLC
            (&ldquo;DNA&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles
            refunds and cancellations. The specific terms for your engagement
            &mdash; including fees, minimum terms and any cancellation
            arrangements &mdash; are set out in the written agreement or
            proposal we provide before work begins. Where this page and your
            agreement differ, your agreement governs.
          </p>

          <h2>Duplicate or accidental payments</h2>
          <p>
            If you are charged twice for the same engagement, or a payment is
            taken in error, contact us and we will refund the duplicate promptly.
            This is straightforward and we will not make it difficult.
          </p>

          <h2>Before work has started</h2>
          <p>
            If you have paid but we have not yet begun work on your engagement
            &mdash; no story development, no writing, no outreach &mdash; get in
            touch and we will discuss cancelling and refunding the unstarted
            portion.
          </p>

          <h2>Once work is underway</h2>
          <p>
            Our costs are incurred as the work happens: developing the angle,
            writing the piece to editorial standard, and managing outreach and
            placement. Where work has already been performed, refunds are
            assessed against what has been delivered at that point rather than
            issued automatically.
          </p>
          <p>
            You have unlimited revisions before anything is submitted, so if a
            draft is not right, the first step is always to tell us and we will
            rewrite it. Most concerns are resolved this way.
          </p>

          <h2>Once a piece is published</h2>
          <p>
            Placements are permanent by design. Once you have approved a piece
            and it has been published, the work has been delivered and it is
            generally not possible to unwind it, so published placements are not
            normally refundable.
          </p>

          <h2>If we cannot deliver</h2>
          <p>
            We are careful never to guarantee editorial coverage at publications
            whose decisions we do not control, and we tell you before you commit
            which route each placement uses. If we commit to a specific
            deliverable in your agreement and do not deliver it, tell us and we
            will either complete it, substitute something you are happy with, or
            refund that portion.
          </p>

          <h2>How to raise it</h2>
          <p>
            Email{" "}
            <a href="mailto:sam@digitalnetworkingagency.com">
              sam@digitalnetworkingagency.com
            </a>{" "}
            with your name, what you paid for and what has gone wrong. We reply
            within 24 hours, and we would always rather fix the work than argue
            about a refund.
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

          <p>
            See also our <Link href="/terms">Terms &amp; Conditions</Link> and{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
