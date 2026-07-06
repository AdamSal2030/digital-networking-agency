import type { Metadata } from "next";
import Link from "next/link";
import { ReviewsSection } from "@/components/landing/ReviewsSection";
import { getTrustpilotData } from "@/lib/trustpilot";
import { PressMarquee, clientPlacements } from "@/components/landing/sections";
import { PlacementsCarousel } from "@/components/landing/PlacementsCarousel";

export const metadata: Metadata = {
  title: "Client Plans — DNA PR",
  description: "Exclusive ongoing PR plans for DNA PR clients.",
  robots: { index: false, follow: false }
};

// Refresh the page (and its Trustpilot reviews) on the same cadence as the review fetch.
export const revalidate = 21600; // REVALIDATE_SECONDS

const plans = [
  {
    kind: "Monthly Subscription",
    name: "Momentum",
    tagline: "Stay consistently visible",
    price: "$300",
    per: "/month",
    commitment: "Billed monthly · cancel anytime",
    featured: false,
    cta: "Start Momentum",
    href: "mailto:sam@digitalnetworkingagency.com?subject=Momentum%20Plan",
    features: [
      "1 Standard feature article every month",
      "From our Standard publication network",
      "Professional story writing & editing",
      "Editor & journalist pitching",
      "Dedicated PR strategist",
      "Month-to-month — cancel anytime"
    ]
  },
  {
    kind: "Subscription",
    name: "Spotlight",
    tagline: "A high-impact prestige placement",
    price: "$800",
    per: "/month",
    commitment: "3-month minimum",
    featured: true,
    cta: "Choose Spotlight",
    href: "mailto:sam@digitalnetworkingagency.com?subject=Spotlight%20Plan",
    features: [
      "1 Standard feature article every month",
      "1 Premier feature article every month",
      "Premium ghostwriting & media strategy",
      "Editor & journalist pitching",
      "Dedicated PR strategist"
    ]
  },
  {
    kind: "Subscription",
    name: "Authority",
    tagline: "Build compounding authority",
    price: "$1,500",
    per: "/month",
    commitment: "3-month minimum",
    featured: false,
    cta: "Go Authority",
    href: "mailto:sam@digitalnetworkingagency.com?subject=Authority%20Plan",
    features: [
      "1 Standard feature article every month",
      "1 Premier feature article every month",
      "1 Flagship feature within 3 months — USA Today · Forbes AU · Rolling Stone & more",
      "Full media strategy & ghostwriting",
      "Senior strategist + priority placement"
    ]
  }
];

export default async function PlansPage() {
  const trustpilot = await getTrustpilotData();
  return (
    <main className="plans-page">
      <header className="plans-top">
        <Link href="/" className="nav-logo" aria-label="DNA PR — Home">
          <img src="/black_logo.png" alt="DNA PR" className="nav-logo-img" />
        </Link>
        <span className="plans-top-tag">Client Plans</span>
      </header>

      <section className="plans-hero">
        <div className="stag plans-stag">Exclusive · For Our Clients</div>
        <h1 className="stitle plans-title">Keep The Momentum Going</h1>
        <p className="plans-sub">
          You&apos;re in — now let&apos;s keep your name in front of the right
          audiences. Pick the plan that fits your next phase of growth.
        </p>
      </section>

      <PressMarquee />

      <section className="plans-section">
        <div className="pkg-grid plans-grid">
          {plans.map((p) => (
            <div
              className={p.featured ? "pkg-card feat" : "pkg-card"}
              key={p.name}
            >
              <div className="pt">{p.kind}</div>
              <div className="pn">{p.name}</div>
              <div className="ptag">{p.tagline}</div>
              <div className="pp">
                <div className="ppn">{p.price}</div>
                <div className="ppm">{p.per}</div>
              </div>
              <div className="pcom">{p.commitment}</div>
              <ul className="pf">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href={p.href}
                className={p.featured ? "btn-p" : "btn-g"}
                style={{ display: "block", textAlign: "center" }}
              >
                {p.featured ? <span>{p.cta}</span> : p.cta}
              </a>
              <Link
                href={`/plans/${p.name.toLowerCase()}`}
                className="pkg-articles-link"
              >
                View articles →
              </Link>
            </div>
          ))}
        </div>

        <div className="plans-placements">
          <div className="plans-tiers-title">Proof of Authority</div>
          <h2 className="plans-placements-h">Client Placements</h2>
          <PlacementsCarousel placements={clientPlacements} />
        </div>

        <ReviewsSection data={trustpilot} />

        <div className="plans-note">
          Not sure which fits? <a href="mailto:sam@digitalnetworkingagency.com?subject=Which%20plan%20is%20right%20for%20me">Reply to your strategist</a> and we&apos;ll map it to your goals.
        </div>
      </section>

      <footer className="plans-foot">
        © 2026 Digital Networking Agency LLC · It&apos;s in our DNA
      </footer>
    </main>
  );
}
