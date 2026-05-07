import { HeroCtas } from "@/components/landing/HeroCtas";

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-orb1" />
      <div className="hero-orb2" />
      <div className="hero-grid" />
      <div className="hero-wm">DNA</div>
      <div className="hero-left">
        <div className="hero-eyebrow">PR FIRM</div>
        <div>
          <div className="hero-word" style={{ animationDelay: ".3s" }}>
            <span className="word-fill">DIGITAL</span>
          </div>
          <div className="hero-word" style={{ animationDelay: ".55s" }}>
            <span className="word-fill">NETWORKING</span>
          </div>
          <div className="hero-word" style={{ animationDelay: ".8s" }}>
            <span className="word-fill lime-word">AGENCY</span>
          </div>
        </div>
        <HeroCtas />
      </div>
      <div className="hero-right">
        <div className="tagline-block">
          <div className="its-label">Our Promise</div>
          <div className="hero-tagline">
            Authority isn&apos;t built overnight. But it can be built <em>deliberately.</em>
          </div>
        </div>
        <div className="ticker-wrap">
          <div className="ticker">
            <span>Forbes</span><span className="dot">·</span><span>NY Times</span><span className="dot">·</span>
            <span>The Rolling Stones</span><span className="dot">·</span><span>FOX</span><span className="dot">·</span>
            <span>Entrepreneur</span><span className="dot">·</span><span>Billboard</span><span className="dot">·</span>
            <span>Yahoo Finance</span><span className="dot">·</span><span>Elle</span><span className="dot">·</span>
            <span>Benzinga</span><span className="dot">·</span><span>CEO Weekly</span><span className="dot">·</span>
            <span>Forbes</span><span className="dot">·</span><span>NY Times</span><span className="dot">·</span>
            <span>The Rolling Stones</span><span className="dot">·</span><span>FOX</span><span className="dot">·</span>
            <span>Entrepreneur</span><span className="dot">·</span><span>Billboard</span><span className="dot">·</span>
            <span>Yahoo Finance</span><span className="dot">·</span><span>Elle</span><span className="dot">·</span>
            <span>Benzinga</span><span className="dot">·</span><span>CEO Weekly</span><span className="dot">·</span>
          </div>
        </div>
        <div className="dna-breakdown">
          <div className="dna-row"><div className="dna-ltr">D</div><div className="dna-desc">igital — Media that moves</div></div>
          <div className="dna-row"><div className="dna-ltr">N</div><div className="dna-desc">etworking — Relationships that last</div></div>
          <div className="dna-row"><div className="dna-ltr">A</div><div className="dna-desc">gency — Results that compound</div></div>
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
            <div className="mlabel">As seen in</div>
            <div className="mlist">
              <div className="mtag">Forbes</div><div className="mtag">NY Times</div><div className="mtag">Rolling Stone</div><div className="mtag">FOX</div><div className="mtag">NY Weekly</div><div className="mtag">Entrepreneur</div><div className="mtag">Benzinga</div><div className="mtag">Yahoo Finance</div><div className="mtag">Billboard</div><div className="mtag">Elle</div><div className="mtag">OK! Magazine</div><div className="mtag">CEO Weekly</div><div className="mtag">Business Insider</div><div className="mtag">Digital Journal</div><div className="mtag">Wall Street Times</div><div className="mtag">CEO Official Mag</div>
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
              name: "Techon SoCal"
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
  return (
    <section className="proof-section">
      <div className="stag reveal">Proof of Authority</div>
      <div className="stitle reveal">Client Placements</div>
      <div className="sdiv reveal" />
      <div className="proof-grid">
        <a
          href="https://wallstreettimes.com/from-mario-kart-to-the-supreme-court-how-matthew-brick-built-a-law-firm-that-puts-clients-first/"
          className="pc pc-corner-logo reveal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="pc-bar" />
          <div className="po">Wall Street Times</div>
          <div className="ph">From Mario Kart to the Supreme Court: How Matthew Brick Built a Law Firm That Puts Clients First</div>
          <div className="pm">April 23, 2026</div>
          <img src={`/${encodeURIComponent("WST .jpeg")}`} alt="WST" className="pc-outlet-logo" />
        </a>
        <a
          href="https://nyweekly.com/entrepreneur/leaving-a-mark-andrea-albright-and-the-future-of-legacy-publishing/"
          className="pc pc-corner-logo reveal"
          style={{ transitionDelay: ".1s" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="pc-bar" />
          <div className="po">New York Weekly</div>
          <div className="ph">Leaving a Mark: Andréa Albright and the Future of Legacy Publishing</div>
          <div className="pm">Entrepreneur Feature</div>
          <img
            src="/NY-Weekly-removebg-preview.png"
            alt="New York Weekly"
            className="pc-outlet-logo pc-outlet-logo--white"
          />
        </a>
        <a
          href="https://www.benzinga.com/pressreleases/25/09/ab47534302/vaya-vaya-announces-new-album-launch-elusive-thugs-a-powerful-exploration-of-music-and-identity"
          className="pc pc-corner-logo reveal"
          style={{ transitionDelay: ".2s" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="pc-bar" />
          <div className="po">Benzinga</div>
          <div className="ph">
            Vaya Vaya Announces New Album Launch &apos;Elusive Thugs,&apos; a Powerful Exploration of Music and Identity
          </div>
          <div className="pm">September 5, 2025</div>
          <img
            src="/Benzinga-Logo-removebg-preview.png"
            alt="Benzinga"
            className="pc-outlet-logo pc-outlet-logo--white"
          />
        </a>
        <a
          href="https://foxinterviewer.com/business/the-vrdo-rate-rigging-scandal-how-wall-street-bilked-taxpayers/"
          className="pc pc-corner-logo reveal"
          style={{ transitionDelay: ".05s" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="pc-bar" />
          <div className="po">Fox Interviewer</div>
          <div className="ph">The VRDO Rate-Rigging Scandal: How Wall Street Bilked Taxpayers</div>
          <div className="pm">June 3, 2025</div>
          <img
            src="/fox-scg-logo.svg"
            alt="Fox Interviewer"
            className="pc-outlet-logo pc-outlet-logo--white"
          />
        </a>
        <a
          href="https://ceoweekly.com/patrick-kelly-giving-fresh-produce-a-global-voice-through-storytelling-and-innovation/"
          className="pc pc-corner-logo reveal"
          style={{ transitionDelay: ".15s" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="pc-bar" />
          <div className="po">CEO Weekly</div>
          <div className="ph">Patrick Kelly: Giving Fresh Produce a Global Voice Through Storytelling and Innovation</div>
          <div className="pm">September 18, 2025</div>
          <img
            src="/CEO_Weekly-removebg-preview.png"
            alt="CEO Weekly"
            className="pc-outlet-logo pc-outlet-logo--white"
          />
        </a>
        <a
          href="https://realestatetoday.com/from-groundbreaking-to-code-breaking-how-daniel-sharpe-is-redefining-real-estate-with-ai/"
          className="pc pc-corner-logo reveal"
          style={{ transitionDelay: ".25s" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="pc-bar" />
          <div className="po">Real Estate Today</div>
          <div className="ph">From Groundbreaking to Code-Breaking: How Daniel Sharpe Is Redefining Real Estate with AI</div>
          <div className="pm">October 29, 2025</div>
          <img
            src="/Real-Estate-Today-removebg-preview.png"
            alt="Real Estate Today"
            className="pc-outlet-logo pc-outlet-logo--white"
          />
        </a>
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
      <footer>
        <div className="flogo">DNA PR</div>
        <div className="fcopy">© 2026 Digital Networking Agency — It&apos;s in our DNA</div>
      </footer>
    </>
  );
}
