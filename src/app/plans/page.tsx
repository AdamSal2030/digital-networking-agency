import type { Metadata } from "next";
import Link from "next/link";
import { TrustpilotWidget } from "@/components/landing/TrustpilotWidget";
import { PressMarquee } from "@/components/landing/sections";

// Paste your Trustpilot Business Unit ID here to switch on the live reviews widget.
const TRUSTPILOT_BUSINESS_UNIT_ID = "";

export const metadata: Metadata = {
  title: "Client Plans — DNA PR",
  description: "Exclusive ongoing PR plans for DNA PR clients.",
  robots: { index: false, follow: false }
};

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
      "From our 80+ Standard publication network",
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
      "1 Flagship feature within your term — USA Today · Forbes AU · Rolling Stone & more",
      "Full media strategy & ghostwriting",
      "Senior strategist + priority placement"
    ]
  }
];

const details = [
  {
    name: "Momentum — $300 / month",
    points: [
      "1 Standard feature article published every month",
      "From our 80+ Standard publication network",
      "We handle the writing, pitching & publication end-to-end",
      "Billed monthly — no contract, cancel anytime",
      "Best for staying consistently visible between bigger campaigns"
    ]
  },
  {
    name: "Spotlight — $800 / month · 3-month minimum",
    points: [
      "1 Standard feature article every month",
      "Plus 1 Premier (mid-tier) feature article every month",
      "Premium ghostwriting, pitched through our editor & journalist network",
      "Billed monthly · 3-month minimum",
      "Best for stepping up to higher-authority coverage every single month"
    ]
  },
  {
    name: "Authority — $1,500 / month · 3-month minimum",
    points: [
      "1 Standard feature article every month",
      "1 Premier (mid-tier) feature article every month",
      "1 Flagship (top-tier) feature once within your term — USA Today, Forbes AU, Rolling Stone & more",
      "The Flagship runs once across the 3 months — that runway is exactly what lets us properly pitch and land a top-tier placement",
      "Full media strategy, a senior strategist & priority placement",
      "Best for going all-in on becoming the recognized name in your space"
    ]
  }
];

const tiers = [
  {
    name: "Flagship",
    desc: "Top-tier national outlets — USA Today, Forbes AU, Rolling Stone, Digital Journal & more."
  },
  {
    name: "Premier",
    desc: "Established mid-tier business & lifestyle publications with strong domain authority."
  },
  {
    name: "Standard",
    desc: "Our 80+ network of trusted digital news & business sites for consistent coverage."
  }
];

export default function PlansPage() {
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
            </div>
          ))}
        </div>

        <div className="plans-details">
          <div className="plans-tiers-title">The full details</div>
          {details.map((d) => (
            <div className="plans-detail" key={d.name}>
              <h3>{d.name}</h3>
              <ul className="plans-detail-list">
                {d.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="plans-howitworks">
            <strong>How it works:</strong> every plan is fully managed — we write
            your story, pitch it to our editor and journalist contacts, and handle
            publication end to end. Once an article is published, it stays live.
            Spotlight and Authority require a 3-month minimum; Momentum can be
            cancelled anytime.
          </div>
        </div>

        <div className="plans-tiers">
          <div className="plans-tiers-title">How our publication tiers work</div>
          <div className="plans-tier-row">
            {tiers.map((t) => (
              <div className="plans-tier" key={t.name}>
                <h4>{t.name}</h4>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="plans-reviews">
          <div className="plans-tiers-title">Rated by our clients</div>
          {TRUSTPILOT_BUSINESS_UNIT_ID ? (
            <TrustpilotWidget businessUnitId={TRUSTPILOT_BUSINESS_UNIT_ID} />
          ) : (
            <a
              className="plans-tp"
              href="https://www.trustpilot.com/review/digitalnetworkingagency.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="plans-tp-stars">★★★★★</span>
              Read our reviews on Trustpilot →
            </a>
          )}
        </div>

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
