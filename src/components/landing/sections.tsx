import { HeroCtas } from "@/components/landing/HeroCtas";
import { TestimonialsCarousel } from "@/components/landing/TestimonialsCarousel";

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-orb1" />
      <div className="hero-orb2" />
      <div className="hero-orb3" />
      <div className="hero-grid" />
      <div className="hero-sweep" />
      <div className="hero-wm">DNA</div>
      <div className="hero-left">
        <div className="hero-eyebrow">Public Relations · Done Differently</div>
        <div className="hero-head-words">
          <div className="hero-word" style={{ animationDelay: ".25s" }}>
            <span className="word-fill">DIGITAL</span>
          </div>
          <div className="hero-word" style={{ animationDelay: ".45s" }}>
            <span className="word-fill">NETWORKING</span>
          </div>
          <div className="hero-word" style={{ animationDelay: ".65s" }}>
            <span className="word-fill lime-word">AGENCY</span>
          </div>
        </div>
        <p className="hero-vp">
          We turn founders &amp; brands into household names &mdash; with{" "}
          <strong>guaranteed coverage</strong> in the world&apos;s most trusted
          publications.
        </p>
        <HeroCtas />
      </div>
      <div className="hero-right">
        <div className="hero-visual reveal-r">
          <div className="hero-visual-frame">
            <img src="/hero-media.jpg" alt="DNA PR — premium media coverage" />
            <div className="hero-visual-grad" />
          </div>
          <div className="hero-badge hero-badge--a">
            <div className="hero-badge-num">100+</div>
            <div className="hero-badge-lbl">Top-Tier Placements</div>
          </div>
          <div className="hero-badge hero-badge--b">
            <span className="hero-stars">★★★★★</span>
            <div className="hero-badge-lbl">Rated 5.0 by Clients</div>
          </div>
        </div>
      </div>
      <div className="hero-line" />
    </section>
  );
}

export function StatsSection() {
  return (
    <div className="stats-bar">
      <div className="stat-item reveal"><div className="stat-number">45+</div><div className="stat-label">Publicists &amp; Journalists</div></div>
      <div className="stat-item reveal" style={{ transitionDelay: ".1s" }}><div className="stat-number">100+</div><div className="stat-label">Top-Tier Media Outlets</div></div>
      <div className="stat-item reveal" style={{ transitionDelay: ".2s" }}><div className="stat-number">7</div><div className="stat-label">Steps to Publication</div></div>
      <div className="stat-item reveal" style={{ transitionDelay: ".3s" }}><div className="stat-number">∞</div><div className="stat-label">Brand Legacy Potential</div></div>
    </div>
  );
}

export function AboutSection() {
  return (
    <div className="about-suite">
      <section className="section section-about" id="about">
        <div className="stag reveal">Who We Are</div>
        <div className="stitle reveal">About DNA PR</div>
        <div className="sdiv reveal" />
        <div className="about-grid">
          <div className="reveal-l">
            <div className="about-body">
              <p>DNA is a public relations agency specializing in results-driven PR &amp; media relations. Our growing team of 45+ experienced publicists, journalists, broadcasters, and marketers work with brands to secure meaningful media coverage.</p>
              <p>We focus on modern media, including digital, TV, podcast, and speaking opportunities.</p>
            </div>
            <div className="about-hl">&quot;Trust us with YOUR story — because it&apos;s In our DNA.&quot;</div>
            <div className="about-body"><p>DNA PR has secured coverage for clients in Forbes, NY Times, Rolling Stone, FOX, NY Weekly, Entrepreneur, and over 100 top-tier media outlets and networks.</p></div>
          </div>
          <div className="reveal-r">
            <div className="about-visual">
              <img
                src="/about-media.jpg"
                alt="DNA PR — modern media across digital, TV, podcast and print"
                loading="lazy"
              />
              <div className="about-visual-cap">
                <span className="about-visual-eyebrow">How we tell your story</span>
                <span className="about-visual-modes">Digital · TV · Podcast · Print · Speaking</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-why">
        <div className="stag reveal">Why Choose Us</div>
        <div className="stitle reveal">The DNA Difference</div>
        <div className="sdiv reveal" />
        <div className="why-grid">
          <div className="why-card reveal"><div className="why-glow" /><div className="why-num">01</div><div className="why-ico">◈</div><h3>Proprietary Outreach</h3><p>Gone is the day of sending a press release and waiting. We monitor trends with a proprietary alert method — seeing relevant news before anyone and submitting experts for comments first.</p></div>
          <div className="why-card reveal" style={{ transitionDelay: ".15s" }}><div className="why-glow" /><div className="why-num">02</div><div className="why-ico">◉</div><h3>Private Reporter Network</h3><p>Our team has developed a private network of reporters who reach out to DNA directly for responses on breaking news. Our relationships make the difference.</p></div>
          <div className="why-card reveal" style={{ transitionDelay: ".3s" }}><div className="why-glow" /><div className="why-num">03</div><div className="why-ico">◎</div><h3>Storytelling-First</h3><p>We&apos;ve built a proprietary process that relies on communication and storytelling. We optimize our outreach to make your story visible — not just placed, but permanently remembered.</p></div>
        </div>
      </section>
    </div>
  );
}

export function PackagesSection() {
  return (
    <section className="pkg-section" id="packages">
      <div className="stag reveal">DNA Prime — Tiered Plans</div>
      <div className="stitle reveal">Choose Your Package</div>
      <div className="sdiv reveal" />
      <div className="pkg-grid">
        <div className="pkg-card reveal">
          <div className="pt">Tier 1</div><div className="pn">Foundation</div><div className="ptag">Establishing trust</div>
          <div className="pp"><div className="ppn">$800</div><div className="ppm">/month</div></div>
          <div className="pcom">No minimum commitment</div>
          <ul className="pf"><li>Guaranteed Publications</li><li>Pitching and Story Creation</li><li>Media Relations Team</li><li>Media Relations Strategy</li><li>Market Research</li><li>Writing Team</li><li>Digital Publication Pitching</li></ul>
          <div className="ppub"><div className="pplbl">Target Publications</div><div className="pplist">NY Weekly, Miami Wire, Music Observer, WallStreet Times, Celebrity News, The Chicago Journal, Women&apos;s Journal, Voyage New York, CEO Weekly</div></div>
          <a href="#contact" className="btn-g" style={{ display: "block", textAlign: "center" }}>Get Started</a>
        </div>
        <div className="pkg-card feat reveal" style={{ transitionDelay: ".15s" }}>
          <div className="pt">Tier 2</div><div className="pn">Signature</div><div className="ptag">Market dominance</div>
          <div className="pp"><div className="ppn">$1,500</div><div className="ppm">/month</div></div>
          <div className="pcom">Minimum 3 months</div>
          <ul className="pf"><li>3× Guaranteed Publications</li><li>1× Top Tier Publication</li><li>3× Pitching and Story Creation</li><li>Media Relations Team</li><li>Media Relations Strategy</li><li>Market Research</li><li>Writing Team</li><li>Digital Publication Pitching</li><li>Contributor Opportunity Pitching</li></ul>
          <div className="ppub"><div className="pplbl">Target Publications</div><div className="pplist">Entrepreneur Tribune, Business Insider, Fox Interviewer, Kivo Daily, Los Angeles Wire, Texas Today, New York Wire, US Insider, US Reporter, BLK News, Benzinga, Digital Journal</div></div>
          <a href="#contact" className="btn-p" style={{ display: "block", textAlign: "center" }}><span>Get Started</span></a>
        </div>
        <div className="pkg-card reveal" style={{ transitionDelay: ".3s" }}>
          <div className="pt">Tier 3</div><div className="pn">Platinum</div><div className="ptag">Category leadership</div>
          <div className="pp"><div className="ppn">$3,000</div><div className="ppm">/month</div></div>
          <div className="pcom">Minimum 3 months</div>
          <ul className="pf"><li>5× Guaranteed Publications</li><li>5× Pitching and Story Creation</li><li>1× Top Tier Publication (Guaranteed)</li><li>Contributor Opportunity Pitching</li><li>Podcast and Radio Pitching</li><li>Print Publication Pitching</li><li>Ghostwriting</li><li>Television Pitching</li><li>Media Training</li></ul>
          <div className="ppub"><div className="pplbl">Target Publications</div><div className="pplist">Hudson Weekly, Yahoo Finance, Australian Times, New York Reporter, CEO World Biz, Reality Times, OK! Magazine, Elle, Billboard, Podcast (1M+ subscriber channel)</div></div>
          <a href="#contact" className="btn-g" style={{ display: "block", textAlign: "center" }}>Get Started</a>
        </div>
      </div>
    </section>
  );
}

export function AlaCarteSection() {
  return (
    <section className="alc-section" id="alacarte">
      <div className="stag reveal">Flexible Option</div>
      <div className="stitle reveal">A La Carte</div>
      <div className="sdiv reveal" />
      <div className="alc-inner">
        <div className="reveal-l">
          <div className="alc-body">
            <p>Experience the ultimate flexibility with our A La Carte service — bespoke single articles tailored specifically to your niche and target audience. Designed for maximum impact in the short term, this approach provides an immediate boost to your visibility.</p>
            <p>Our reactive strategy takes a deep dive into your target market, ensuring the messaging resonates with the right people. Every article is meticulously crafted to elevate your personal brand and position you as a leading figure in your industry.</p>
            <p>You&apos;ll be assigned a dedicated PR strategist who works closely with you to select the perfect publications that amplify your voice to the right audience.</p>
          </div>
        </div>
        <div className="reveal-r">
          <div className="step"><div className="snum">01</div><div className="scont"><h4>Initial Consultation</h4><p>We schedule a consultation to understand your vision, goals, and the publication you want to be featured in.</p></div></div>
          <div className="step"><div className="snum">02</div><div className="scont"><h4>Contract &amp; Payment</h4><p>Once aligned, we send the contract. Upon signing and payment, we move forward officially.</p></div></div>
          <div className="step"><div className="snum">03</div><div className="scont"><h4>Writing Team Collaboration</h4><p>Meet our writing team one-on-one to dive deep into your story and goals for the feature.</p></div></div>
          <div className="step"><div className="snum">04</div><div className="scont"><h4>Draft, Review &amp; Revisions</h4><p>We craft the article, share for feedback, and revise until it meets your expectations perfectly.</p></div></div>
          <div className="step"><div className="snum">05</div><div className="scont"><h4>Pitch &amp; Publish</h4><p>After approval, we pitch to high-end outlets. Once accepted, your article lives permanently online.</p></div></div>
        </div>
      </div>
    </section>
  );
}

export function PrimeSection() {
  return (
    <section className="prime-section" id="prime">
      <div className="stag reveal">Premium Strategy</div>
      <div className="stitle reveal">The Networking<br />DNA Prime</div>
      <div className="sdiv reveal" />
      <div className="prime-intro">
        <div className="prime-body reveal-l">
          <p>Networking DNA Prime is the ultimate premium PR strategy, designed to position your brand as an irreplaceable leader in your industry. With expert guidance, cutting-edge AI technology, and strategic media relationships, this service ensures everlasting visibility and long-term impact.</p>
          <p>This is more than short-term recognition — it&apos;s a long-term legacy. The strategy we implement positions your brand as undefeatable, irreplaceable, and the most coveted name in the market.</p>
          <p>The return on investment compounds year after year, creating a network of influence and recognition that secures your place as a true industry leader.</p>
        </div>
        <div className="prime-box reveal-r">
          <h3>Who Is DNA Prime For?</h3>
          <p>Clients who choose DNA Prime are those who seek to create an indelible impact — an influence that resonates today and compounds over time. These are clients who understand that true PR value isn&apos;t just a fleeting moment, but an ongoing investment into a brand that will remain relevant and revered for generations.</p>
        </div>
      </div>
      <div className="prime-steps">
        <div className="ps reveal"><div className="psn">01</div><h4>Initial Consultation</h4><p>Discuss your vision, goals, and the type of long-term impact you want to achieve.</p></div>
        <div className="ps reveal" style={{ transitionDelay: ".08s" }}><div className="psn">02</div><h4>Contract &amp; Onboarding</h4><p>Upon signing and payment, we begin building your long-term PR strategy immediately.</p></div>
        <div className="ps reveal" style={{ transitionDelay: ".16s" }}><div className="psn">03</div><h4>Dedicated PR Strategist</h4><p>Your personal strategist crafts a fully personalized PR plan aligned with your objectives.</p></div>
        <div className="ps reveal" style={{ transitionDelay: ".04s" }}><div className="psn">04</div><h4>Expert SEO Team</h4><p>AI-powered tools ensure your name ranks highly on all major search engines long-term.</p></div>
        <div className="ps reveal" style={{ transitionDelay: ".12s" }}><div className="psn">05</div><h4>AI Reputation Management</h4><p>AI models actively track and enhance your online reputation across all digital platforms.</p></div>
        <div className="ps reveal" style={{ transitionDelay: ".2s" }}><div className="psn">06</div><h4>Top-Tier Placement</h4><p>Your story pitched to premium, high-authority outlets with editors who maximize exposure.</p></div>
        <div className="ps reveal" style={{ transitionDelay: ".08s" }}><div className="psn">07</div><h4>Contributor Pitching</h4><p>We position you as a thought leader in leading publications for consistent visibility.</p></div>
        <div className="ps reveal" style={{ transitionDelay: ".16s" }}><div className="psn">08</div><h4>Podcast &amp; TV Presence</h4><p>We secure interviews on high-impact podcasts and TV shows relevant to your niche.</p></div>
        <div className="ps reveal" style={{ transitionDelay: ".24s" }}><div className="psn">09</div><h4>Media Training &amp; AI Insights</h4><p>AI-backed training refines your messaging and delivery before every interview.</p></div>
      </div>
    </section>
  );
}

export function BrandingSection() {
  return (
    <>
      <section className="brand-section" id="branding">
        <div className="stag reveal">Beyond PR</div>
        <div className="stitle reveal">Elite Branding Services</div>
        <div className="sdiv reveal" />
        <div className="brand-grid">
          <div className="bc reveal"><span className="bc-ico">🌐</span><h3>Website Development</h3><p>Beautiful, functional websites designed to convert visitors into clients — portfolio, e-commerce, or landing pages.</p><div className="bc-line" /></div>
          <div className="bc reveal" style={{ transitionDelay: ".08s" }}><span className="bc-ico">📣</span><h3>META Ads</h3><p>Targeted campaigns across Facebook and Instagram designed for real conversions, not just clicks.</p><div className="bc-line" /></div>
          <div className="bc reveal" style={{ transitionDelay: ".16s" }}><span className="bc-ico">⚙️</span><h3>Software Development</h3><p>Custom software solutions from mobile apps to enterprise tools that keep you ahead of the competition.</p><div className="bc-line" /></div>
          <div className="bc reveal" style={{ transitionDelay: ".24s" }}><span className="bc-ico">🎨</span><h3>Graphic Design</h3><p>Award-winning designers creating logos, graphics, creatives, and assets that make your brand unforgettable.</p><div className="bc-line" /></div>
          <div className="bc reveal" style={{ transitionDelay: ".04s" }}><span className="bc-ico">📱</span><h3>Social Media</h3><p>Content creation, posting schedules, community management, and growth strategies for loyal audiences.</p><div className="bc-line" /></div>
          <div className="bc reveal" style={{ transitionDelay: ".12s" }}><span className="bc-ico">📧</span><h3>Email Marketing</h3><p>Automated sequences, newsletters, and promotional campaigns optimized for maximum ROI.</p><div className="bc-line" /></div>
          <div className="bc reveal" style={{ transitionDelay: ".2s" }}><span className="bc-ico">🔍</span><h3>SEO &amp; Content</h3><p>Comprehensive audits, on-page optimization, and backlink profiles for sustained organic growth.</p><div className="bc-line" /></div>
          <div className="bc reveal" style={{ transitionDelay: ".28s" }}><span className="bc-ico">🧭</span><h3>Strategy Consulting</h3><p>A clear roadmap for success focused on both immediate wins and long-term brand dominance.</p><div className="bc-line" /></div>
        </div>
      </section>

      <section className="part-section">
        <div className="part-title reveal">Brands We Have Partnered With</div>
        <div className="part-grid">
          {[
            {
              src: "/techcon-removebg-preview.png",
              alt: "TechCon SoCal",
              name: "TechCon SoCal"
            },
            {
              src: "/grit-brokerage-logo-Picsart-BackgroundRemover.jpg",
              alt: "Grit Brokerage",
              large: true,
              name: "Grit Brokerage"
            },
            {
              src: "/brede_ciapciak-removebg-preview.png",
              alt: "Brede Ciapciak Dental",
              name: "Brede Ciapciak Dental"
            },
            {
              src: "/Sj-removebg-preview.png",
              alt: "Interior Design and Real Estate Service",
              name: "Interior Design & Real Estate Service"
            }
          ].map((brand, i) => (
            <div
              key={brand.alt}
              className="pi pi-logo reveal"
              style={{ transitionDelay: `${0.07 * (i + 1)}s` }}
            >
              <img
                src={brand.src}
                alt={brand.alt}
                className={
                  "large" in brand && brand.large
                    ? "partner-logo-img partner-logo-img--grit"
                    : "partner-logo-img"
                }
              />
              <span className="partner-logo-name">{brand.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function ProofSection() {
  const placements = [
    {
      outlet: "Yahoo Finance",
      headline:
        "PointOne Partners Launches Texas Real Estate Investment Platform With Four Active Development Projects",
      meta: "June 2, 2026",
      href: "https://finance.yahoo.com/markets/stocks/articles/pointone-partners-launches-texas-real-201500951.html",
      img: "/placement-shams.jpg",
      logo: null,
      logoWhite: true
    },
    {
      outlet: "USA Today",
      headline:
        "Dr. Bhuvanendram Indrakrishnan: Leadership in Medicine and Community Health",
      meta: "May 22, 2026",
      href: "https://www.usatoday.com/story/special/contributor-content/2026/05/22/dr-bhuvanendram-indrakrishnan-leadership-in-medicine-and-community-health/90214273007/",
      img: "/placement-indran.jpg",
      logo: "/USA-Today-removebg-preview.png",
      logoWhite: true
    },
    {
      outlet: "Women's Journal",
      headline:
        "Shermel A. Jeffers Chandwani: Influencing Real Estate in St. Kitts & Nevis",
      meta: "October 15, 2025",
      href: "https://womensjournal.com/shermel-a-jeffers-chandwani-influencing-real-estate-in-st-kitts-nevis/",
      img: "/placement-shermel.jpg",
      logo: null,
      logoWhite: true
    },
    {
      outlet: "Healthcare Business Today",
      headline:
        "The 25-Year Mission Behind a New Standard in Addiction Recovery",
      meta: "May 23, 2025",
      href: "https://www.healthcarebusinesstoday.com/the-25-year-mission-behind-a-new-standard-in-addiction-recovery/",
      img: null,
      logo: null,
      logoWhite: true
    },
    {
      outlet: "Wall Street Times",
      headline:
        "From Mario Kart to the Supreme Court: How Matthew Brick Built a Law Firm That Puts Clients First",
      meta: "April 23, 2026",
      href: "https://wallstreettimes.com/from-mario-kart-to-the-supreme-court-how-matthew-brick-built-a-law-firm-that-puts-clients-first/",
      img: "/placement-brick.jpg",
      logo: "/WST%20.jpeg",
      logoWhite: false
    },
    {
      outlet: "New York Weekly",
      headline: "Leaving a Mark: Andréa Albright and the Future of Legacy Publishing",
      meta: "Entrepreneur Feature",
      href: "https://nyweekly.com/entrepreneur/leaving-a-mark-andrea-albright-and-the-future-of-legacy-publishing/",
      img: "/placement-albright.jpg",
      logo: "/NY-Weekly-removebg-preview.png",
      logoWhite: true
    },
    {
      outlet: "Fox Interviewer",
      headline: "The VRDO Rate-Rigging Scandal: How Wall Street Bilked Taxpayers",
      meta: "June 3, 2025",
      href: "https://foxinterviewer.com/business/the-vrdo-rate-rigging-scandal-how-wall-street-bilked-taxpayers/",
      img: "/placement-vrdo.jpg",
      logo: "/fox-scg-logo.svg",
      logoWhite: true
    },
    {
      outlet: "CEO Weekly",
      headline: "Patrick Kelly: Giving Fresh Produce a Global Voice Through Storytelling and Innovation",
      meta: "September 18, 2025",
      href: "https://ceoweekly.com/patrick-kelly-giving-fresh-produce-a-global-voice-through-storytelling-and-innovation/",
      img: "/placement-kelly.jpg",
      logo: "/CEO_Weekly-removebg-preview.png",
      logoWhite: true
    },
    {
      outlet: "Real Estate Today",
      headline: "From Groundbreaking to Code-Breaking: How Daniel Sharpe Is Redefining Real Estate with AI",
      meta: "October 29, 2025",
      href: "https://realestatetoday.com/from-groundbreaking-to-code-breaking-how-daniel-sharpe-is-redefining-real-estate-with-ai/",
      img: "/placement-sharpe.jpg",
      logo: null,
      logoWhite: true
    },
    {
      outlet: "Benzinga",
      headline:
        "Mark Manderson: Elevating Standards of Mental Health and Addiction Care with Pacific Shores Recovery",
      meta: "July 2025",
      href: "https://www.benzinga.com/pressreleases/25/07/ab46479680/mark-manderson-elevating-standards-of-mental-health-and-addiction-care-with-pacific-shores-recove",
      img: null,
      logo: "/Benzinga-Logo-removebg-preview.png",
      logoWhite: true
    }
  ];
  return (
    <section className="proof-section">
      <div className="stag reveal">Proof of Authority</div>
      <div className="stitle reveal">Client Placements</div>
      <div className="sdiv reveal" />
      <div className="proof-grid">
        {placements.map((p, i) => (
          <a
            key={p.href}
            href={p.href}
            className="pc pc-photo-card reveal"
            style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="pc-bar" />
            {p.img ? (
              <div className="pc-photo">
                <img src={p.img} alt={p.headline} loading="lazy" />
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.outlet}
                    className={
                      p.logoWhite
                        ? "pc-photo-logo pc-photo-logo--white"
                        : "pc-photo-logo"
                    }
                    loading="lazy"
                  />
                ) : (
                  <span className="pc-photo-logo pc-photo-logo--text">
                    {p.outlet}
                  </span>
                )}
              </div>
            ) : (
              <div className="pc-photo pc-photo--logo">
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.outlet}
                    className={
                      p.logoWhite
                        ? "pc-panel-logo pc-panel-logo--white"
                        : "pc-panel-logo"
                    }
                    loading="lazy"
                  />
                ) : (
                  <span className="pc-panel-text">{p.outlet}</span>
                )}
              </div>
            )}
            <div className="pc-body">
              <div className="po">{p.outlet}</div>
              <div className="ph">{p.headline}</div>
              <div className="pm">{p.meta}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export function CtaFooterSection() {
  return (
    <>
      <section className="cta-section" id="contact">
        <div className="cta-ey reveal">Ready to get started?</div>
        <div className="cta-title reveal">
          It&apos;s In
          <br />
          <span>Our DNA.</span>
        </div>
        <div className="cta-sub reveal">Trust us with your story. Let&apos;s build your legacy together.</div>
        <div className="cta-btns reveal">
          <a href="mailto:sam@digitalnetworkingagency.com" className="btn-p">
            <span>Book a Consultation</span>
          </a>
          <a href="#packages" className="btn-g">View Packages</a>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/black_logo.png" alt="DNA PR" className="footer-logo" />
            <p className="footer-tag">
              Results-driven PR &amp; media relations. We secure meaningful coverage
              that turns brands into authorities &mdash; because it&apos;s in your DNA.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com/dnateams" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="mailto:sam@digitalnetworkingagency.com" aria-label="Email">
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
              <a href="tel:+13072841045" aria-label="Phone">
                <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              </a>
            </div>
            <a
              className="hero-tp footer-tp"
              href="https://www.trustpilot.com/review/digitalnetworkingagency.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read our reviews on Trustpilot"
            >
              <span className="hero-tp-stars">
                <span className="tp-tile"><img src="/tp-star-white.svg" alt="" /></span>
                <span className="tp-tile"><img src="/tp-star-white.svg" alt="" /></span>
                <span className="tp-tile"><img src="/tp-star-white.svg" alt="" /></span>
                <span className="tp-tile"><img src="/tp-star-white.svg" alt="" /></span>
                <span className="tp-tile"><img src="/tp-star-white.svg" alt="" /></span>
              </span>
              <span className="hero-tp-brand">
                <img src="/tp-star-green.svg" alt="" className="tp-mark" />
                Trustpilot
              </span>
            </a>
          </div>

          <div className="footer-col">
            <div className="footer-h">Contact</div>
            <a href="mailto:sam@digitalnetworkingagency.com">sam@digitalnetworkingagency.com</a>
            <a href="tel:+13072841045">+1 (307) 284-1045</a>
            <a href="https://instagram.com/dnateams" target="_blank" rel="noopener noreferrer">@dnateams</a>
          </div>

          <div className="footer-col">
            <div className="footer-h">Office</div>
            <p className="footer-addr">
              Digital Networking Agency LLC<br />
              6545 Market Ave N, Suite 100<br />
              Canton, OH 44721<br />
              United States
            </p>
          </div>

          <div className="footer-col">
            <div className="footer-h">Explore</div>
            <a href="#about">About</a>
            <a href="#packages">Packages</a>
            <a href="#testimonials">Reviews</a>
            <a href="#contact">Book a Call</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Digital Networking Agency LLC — It&apos;s in our DNA</span>
        </div>
      </footer>
    </>
  );
}

export function PressMarquee() {
  // Real publication logos, shown on white chips so every mark stays legible.
  const outlets: { name: string; src?: string }[] = [
    { name: "Forbes", src: "/logo-forbes.png" },
    { name: "Business Insider", src: "/logo-bi.png" },
    { name: "Rolling Stone", src: "/logo-rollingstone.png" },
    { name: "Esquire", src: "/logo-esquire.png" },
    { name: "Maxim", src: "/logo-maxim.png" },
    { name: "Allure", src: "/logo-allure.png" },
    { name: "Glamour", src: "/logo-glamour.png" },
    { name: "Architectural Digest", src: "/logo-ad.png" },
    { name: "Haute Beauty", src: "/logo-harpersbazaar.png" },
    { name: "Sports Illustrated", src: "/logo-si.png" },
    { name: "Us Weekly", src: "/logo-usweekly.png" },
    { name: "Los Angeles Times", src: "/logo-latimes.png" },
    { name: "Entrepreneur", src: "/logo-entrepreneur.jpg" },
    { name: "Hollywood Life", src: "/logo-hollywoodlife.png" },
    { name: "OK! Magazine", src: "/logo-ok.png" },
    { name: "Success Magazine", src: "/logo-success.png" },
    { name: "Muscle & Fitness", src: "/logo-musclefitness.png" },
    { name: "Woman's World", src: "/logo-womansworld.png" },
    { name: "IBTimes", src: "/logo-ibtimes.png" },
    { name: "Investing.com", src: "/logo-investing.png" },
    { name: "Flaunt", src: "/logo-flaunt.png" },
    { name: "Haute Residence", src: "/logo-haute.png" },
    { name: "The Business Journals", src: "/logo-bizjournals.png" },
    { name: "Law & Crime", src: "/logo-lawcrime.png" },
    { name: "Law News Day", src: "/logo-lawnewsday.png" },
    { name: "USA Today", src: "/USA-Today-removebg-preview.png" },
    { name: "Benzinga", src: "/Benzinga-Logo-removebg-preview.png" },
    { name: "FOX", src: "/fox-scg-logo.svg" },
    { name: "CEO Weekly", src: "/CEO_Weekly-removebg-preview.png" },
    { name: "New York Weekly", src: "/NY-Weekly-removebg-preview.png" }
  ];
  const row = [...outlets, ...outlets];
  return (
    <section className="press-marquee">
      <h2 className="press-heading reveal">Our Clients Get Media Mentions That Matter</h2>
      <div className="press-track-wrap">
        <div className="press-track">
          {row.map((o, i) => (
            <div className="press-item" key={`${o.name}-${i}`}>
              {o.src ? (
                <img src={o.src} alt={o.name} className="press-logo" />
              ) : (
                <span className="press-wordmark">{o.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const reviews = [
    {
      name: "David",
      meta: "Featured in MSN",
      text:
        "I have had a great experience working with Digital Networking Agency. Sam Harris and his team consistently do an excellent job of promoting brands and helping businesses stand out in a competitive market. Their professionalism, expertise, and dedication to delivering results are evident in everything they do. I truly enjoy working with them and highly recommend their services to anyone looking to enhance their brand visibility and online presence."
    },
    {
      name: "Julie Krivanek",
      meta: "Featured in CEO Weekly",
      text:
        "I have worked with many PR and marketing firms — and this stands head and shoulders above in the #1 spot. Responsive, timely, clear in expectations… and extremely creative, with superb results and a complete pleasure to work with. Honestly? If you have the chance to work with Sam Harris and his team, grab it — you won't be sorry."
    },
    {
      name: "Sahar Maknouni",
      meta: "Featured in CEO Weekly",
      text:
        "Working with Sam and the DNA team was an absolute pleasure. The process was smooth from start to finish and the final article exceeded my expectations. Looking forward to working together again soon!"
    },
    {
      name: "VAYA VAYA",
      meta: "Featured in CEO Weekly",
      text:
        "Really impressed with how professional and efficient the whole process was. Sam made everything easy and the article turned out great. Will definitely be coming back for more features!"
    },
    {
      name: "Ben Labra",
      meta: "Featured in CEO Weekly",
      text:
        "Sam and the team at Digital Networking Agency did a fantastic job. The article was well written and exactly what I was looking for. Can not wait to work with them again!"
    },
    {
      name: "Brian Haarbin",
      meta: "Featured in CEO Weekly",
      text:
        "Great experience working with DNA. Sam was communicative, professional and delivered exactly what was promised. The CEO Weekly feature was everything I hoped for and more."
    },
    {
      name: "Alan Araujo",
      meta: "Featured in CEO Weekly",
      text:
        "I was blown away by the quality of the article and the level of service. Sam made the whole process seamless and stress free. Highly recommend Digital Networking Agency!"
    },
    {
      name: "Matthew Brick",
      meta: "Featured in CEO Weekly",
      text:
        "From start to finish the experience with Sam and DNA was top notch. The article came out beautifully and the team was incredibly responsive throughout. Looking forward to future collaborations!"
    },
    {
      name: "Uch Mobayode",
      meta: "Featured in CEO Weekly",
      text:
        "Exceptional service and outstanding results. Sam took the time to understand my story and the article reflected that perfectly. Will definitely be working with DNA again!"
    },
    {
      name: "Atulh Jindal",
      meta: "Featured in CEO Weekly",
      text:
        "The team at Digital Networking Agency really delivered. Sam was professional, easy to work with and the final piece was exactly what I needed. Great experience overall!"
    },
    {
      name: "Jennifer O'Connor",
      meta: "Featured in MSN",
      text:
        "Working with Sam was a great experience from beginning to end. The MSN feature came out exactly as described and the process was incredibly straightforward. Highly recommend!"
    },
    {
      name: "Lem Garcia",
      meta: "Featured in USA Today",
      text:
        "Sam and the DNA team were fantastic to work with. The article captured my story perfectly and the whole process was smooth and professional. Looking forward to working together again soon!"
    },
    {
      name: "Lynette Laguna",
      meta: "Featured in Yahoo Finance",
      text:
        "Really happy with the service and the final article. Sam was great to work with and made the whole process easy. Will definitely be reaching out for future features!"
    }
  ];
  return (
    <section className="tst-section" id="testimonials">
      <div className="tst-glow" />
      <div className="stag reveal">Client Voices</div>
      <div className="stitle reveal">What Our Clients Say</div>
      <div className="sdiv reveal" />
      <TestimonialsCarousel reviews={reviews} />
    </section>
  );
}
