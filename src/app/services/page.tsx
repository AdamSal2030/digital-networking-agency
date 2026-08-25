import type { Metadata } from "next";
import Link from "next/link";
import {
  AlaCarteSection,
  BrandingSection,
  PackagesSection,
  PrimeSection,
} from "@/components/landing/sections";
import { LandingEffects } from "@/components/landing/effects";

const SITE = "https://www.digitalnetworkingagency.com";

const DESCRIPTION =
  "DNA PR services in full — monthly packages, single A La Carte features, the premium DNA Prime strategy, and elite branding.";

export const metadata: Metadata = {
  title: "Services & Packages | Digital Networking Agency",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/services` },
  openGraph: {
    title: "Services & Packages | Digital Networking Agency",
    description: DESCRIPTION,
    url: `${SITE}/services`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/services#collection`,
    name: "Services & Packages",
    url: `${SITE}/services`,
    description: DESCRIPTION,
  };

  return (
    <div className="svc-page">
      {/* effect anchors (custom cursor is hidden globally; these let the
          homepage reveal system animate the sections on this page too) */}
      <div className="cursor" id="cur" />
      <div className="cursor-ring" id="curR" />
      <div id="progress" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="svc-head">
        <div className="svc-crumbs">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>Services</span>
        </div>
        <span className="svc-eyebrow">What we do</span>
        <h1>Services &amp; Packages</h1>
        <p className="svc-lede">
          Everything DNA offers, in one place — from a single flagship feature to
          a long-term strategy that keeps your name on top. Pick what fits, or
          book a call and we&rsquo;ll map it out for you.
        </p>
        <div className="svc-headcta">
          <Link href="/contact" className="btn-p">
            <span>Book a Free Consultation →</span>
          </Link>
          <a href="#packages" className="btn-g">
            See Packages
          </a>
        </div>
      </header>

      <AlaCarteSection />
      <PackagesSection />
      <PrimeSection />
      <BrandingSection />

      <LandingEffects />
    </div>
  );
}
