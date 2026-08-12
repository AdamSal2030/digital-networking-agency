// Data for the short /get-featured-in/[outlet] landing pages.
// Each maps to an existing long guide under /guides for "Read the full guide".

export type Outlet = {
  slug: string; // /get-featured-in/<slug>
  guideSlug: string; // /guides/<guideSlug>
  name: string; // "USA Today"
  title: string; // meta title
  subhead: string; // hero subhead
  value: string; // hero value proposition
  about: string; // "About <outlet>"
  why: string; // "Why a feature here matters"
  audience: string; // short list of who it suits
};

export const OUTLETS: Outlet[] = [
  {
    slug: "forbes",
    guideSlug: "get-featured-in-forbes",
    name: "Forbes",
    title: "Get Featured in Forbes | Digital Networking Agency",
    subhead: "The name everyone recognises",
    value:
      "We develop your story and pitch it toward Forbes on your behalf. You approve every word before anything is submitted.",
    about:
      "Forbes is one of the most recognised business brands in the world, covering entrepreneurship, leadership, money and innovation for a global audience.",
    why:
      "A Forbes association is understood instantly, with no explanation needed. It carries weight with investors, partners and prospects long after they forget where they read it.",
    audience: "Founders, executives and established businesses.",
  },
  {
    slug: "msn",
    guideSlug: "how-to-get-featured-on-msn",
    name: "MSN",
    title: "Get Featured on MSN | Digital Networking Agency",
    subhead: "Mainstream reach through Microsoft",
    value:
      "We publish your story through outlets whose content reaches MSN. Real client features, in both solo and listicle formats.",
    about:
      "MSN is one of the largest news surfaces on the internet, sitting inside Microsoft Edge, the Windows feed and msn.com, carrying content from thousands of publishers.",
    why:
      "“As featured on MSN” is understood by anyone, mainstream and non-specialist. Your feature stays searchable and surfaces when someone looks you up.",
    audience: "Founders, brands and personal brands.",
  },
  {
    slug: "usa-today",
    guideSlug: "how-to-get-featured-in-usa-today",
    name: "USA Today",
    title: "Get Featured in USA Today | Digital Networking Agency",
    subhead: "Mainstream reach, national recognition",
    value:
      "We write a custom feature about you and manage the placement. You approve every word before it goes live.",
    about:
      "USA Today is one of America’s largest national publications, covering news, money, life, tech and travel for a broad general audience.",
    why:
      "A name every prospect, investor and client recognises instantly. It works as social proof for consumer brands, authors, speakers and public-facing experts.",
    audience: "Consumer brands, authors, speakers and public experts.",
  },
  {
    slug: "yahoo-finance",
    guideSlug: "how-to-get-featured-in-yahoo-finance",
    name: "Yahoo Finance",
    title: "Get Featured in Yahoo Finance | Digital Networking Agency",
    subhead: "One of the most-visited finance sites in the world",
    value:
      "We develop your story and place it with an outlet that reaches Yahoo Finance. We tell you exactly which route fits your business first.",
    about:
      "Yahoo Finance is a leading financial news and data platform carrying its own reporting alongside syndicated content from partner publishers and newswires.",
    why:
      "A recognised financial name that stays searchable and reads as credible to investors and a financially literate audience.",
    audience: "Founders raising, fintech and finance-facing brands.",
  },
  {
    slug: "benzinga",
    guideSlug: "how-to-get-featured-in-benzinga",
    name: "Benzinga",
    title: "Get Featured in Benzinga | Digital Networking Agency",
    subhead: "Where the finance audience reads",
    value:
      "We write your feature and manage the placement in Benzinga. You approve every word before it goes live.",
    about:
      "Benzinga is a fast-moving financial media brand read by investors, traders and a financially engaged audience.",
    why:
      "Valuable if you are raising, in fintech, or selling to people who take markets seriously. It carries credibility with a sceptical, detail-driven readership.",
    audience: "Fintech, finance and investor-facing founders.",
  },
  {
    slug: "ap-news",
    guideSlug: "how-to-get-featured-on-ap-news",
    name: "AP News",
    title: "Get Featured on AP News | Digital Networking Agency",
    subhead: "One of the most trusted names in news",
    value:
      "We write and distribute your release through a wire tier that reaches apnews.com. We confirm the tier before anything is paid.",
    about:
      "The Associated Press is a not-for-profit news cooperative whose content reaches thousands of outlets. apnews.com also carries distributed press releases.",
    why:
      "A recognised, trusted name that travels far through republication. We are straight about what a distributed release is, and what it is not.",
    audience: "Companies with a genuine announcement.",
  },
  {
    slug: "fox-interviewer",
    guideSlug: "how-to-get-featured-in-fox-interviewer",
    name: "Fox Interviewer",
    title: "Get Featured in Fox Interviewer | Digital Networking Agency",
    subhead: "An interview-led feature in your own words",
    value:
      "We develop and place your interview feature in Fox Interviewer. You approve every word before it goes live.",
    about:
      "Fox Interviewer is an independent digital publication with a strong interview and profile format. It is not affiliated with Fox News or Fox Corporation.",
    why:
      "The interview format lets your personality and expertise come through directly, which reads as more personal than a standard write-up.",
    audience: "Founders and experts with a story to tell.",
  },
  {
    slug: "ceo-weekly",
    guideSlug: "how-to-get-featured-in-ceo-weekly",
    name: "CEO Weekly",
    title: "Get Featured in CEO Weekly | Digital Networking Agency",
    subhead: "A precise, executive audience",
    value:
      "We write a dedicated feature about you and manage the placement in CEO Weekly. You approve every word before it goes live.",
    about:
      "CEO Weekly is a digital business publication focused on leadership, executives and the decisions behind companies.",
    why:
      "If you sell to executives, a precise audience is worth more than a bigger, irrelevant one. Your ideal reader is already here.",
    audience: "Executives, founders and business owners.",
  },
  {
    slug: "ny-weekly",
    guideSlug: "how-to-get-featured-in-ny-weekly",
    name: "NY Weekly",
    title: "Get Featured in NY Weekly | Digital Networking Agency",
    subhead: "A New York dateline that travels",
    value:
      "We develop and place a dedicated feature about you in NY Weekly. You approve every word before it goes live.",
    about:
      "NY Weekly is a digital publication covering business, culture and founders in and around New York.",
    why:
      "A New York association reads as serious to people who have never set foot there. It signals operating where the standard is high.",
    audience: "Founders and brands with a New York angle.",
  },
  {
    slug: "womens-journal",
    guideSlug: "how-to-get-featured-in-womens-journal",
    name: "Women's Journal",
    title: "Get Featured in Women's Journal | Digital Networking Agency",
    subhead: "Built for women founders and leaders",
    value:
      "We write a dedicated feature about you and manage the placement in Women’s Journal. You approve every word before it goes live.",
    about:
      "Women’s Journal is a digital publication covering business, wellness and leadership with a focus on women founders, executives and experts.",
    why:
      "Being in a publication built for your audience beats being lost in a general one. Its readers are already looking for the expertise you sell.",
    audience: "Women founders, coaches and executives.",
  },
  {
    slug: "healthcare-business-today",
    guideSlug: "how-to-get-featured-in-healthcare-business-today",
    name: "Healthcare Business Today",
    title: "Get Featured in Healthcare Business Today | DNA",
    subhead: "For healthcare and health-tech leaders",
    value:
      "We develop and place a feature about your work in Healthcare Business Today. You approve every word before it goes live.",
    about:
      "Healthcare Business Today covers the business of healthcare for providers, executives and health-tech founders.",
    why:
      "A targeted healthcare audience that takes clinical and operational credibility seriously. The right room for a health-focused story.",
    audience: "Providers, health-tech and medical practices.",
  },
  {
    slug: "digital-journal",
    guideSlug: "how-to-get-featured-in-digital-journal",
    name: "Digital Journal",
    title: "Get Featured in Digital Journal | Digital Networking Agency",
    subhead: "For tech and innovation stories",
    value:
      "We write and place a feature about your work in Digital Journal. You approve every word before it goes live.",
    about:
      "Digital Journal is a long-running publication covering technology, business and innovation for a professional readership.",
    why:
      "An audience that follows how industries change and reads past the headline. Room to make a real case, not just a slogan.",
    audience: "Tech founders and innovation-led companies.",
  },
  {
    slug: "la-wire",
    guideSlug: "how-to-get-featured-in-la-wire",
    name: "LA Wire",
    title: "Get Featured in LA Wire | Digital Networking Agency",
    subhead: "A West Coast dateline",
    value:
      "We develop and place a dedicated feature about you in LA Wire. You approve every word before it goes live.",
    about:
      "LA Wire is a digital publication covering business, culture and founders through a Los Angeles lens.",
    why:
      "A Los Angeles association frames you differently, especially if you sell to consumers or work anywhere near culture.",
    audience: "Consumer, creative and West Coast brands.",
  },
  {
    slug: "us-reporter",
    guideSlug: "how-to-get-featured-in-us-reporter",
    name: "US Reporter",
    title: "Get Featured in US Reporter | Digital Networking Agency",
    subhead: "National framing for a national audience",
    value:
      "We write and place a dedicated feature about you in US Reporter. You approve every word before it goes live.",
    about:
      "US Reporter is an independent digital publication covering business and human-interest stories across the United States.",
    why:
      "A national frame suits founders whose audience is not tied to one city. It works as a general-purpose credibility asset.",
    audience: "Founders with a nationwide audience.",
  },
  {
    slug: "international-business-times",
    guideSlug: "how-to-get-featured-in-international-business-times",
    name: "International Business Times",
    title: "Get Featured in IBTimes | Digital Networking Agency",
    subhead: "For a market that crosses borders",
    value:
      "We develop and place a feature about you in International Business Times. You approve every word before it goes live.",
    about:
      "International Business Times covers business, markets and economics with a global outlook across several regional editions.",
    why:
      "Cross-border credibility is harder to build and worth more when you have it. The right frame for global ambitions.",
    audience: "Companies with international reach.",
  },
  {
    slug: "entrepreneur",
    guideSlug: "how-to-get-featured-in-entrepreneur",
    name: "Entrepreneur",
    title: "Get Featured in Entrepreneur Magazine | Digital Networking Agency",
    subhead: "The title founders name without thinking",
    value:
      "We develop your story and pitch it toward Entrepreneur on your behalf. You approve every word before anything is submitted.",
    about:
      "Entrepreneur has covered startups, small business and founder stories since 1977, reaching an audience of operators and business owners across its magazine and entrepreneur.com.",
    why:
      "Its readers are founders and operators, so a feature reaches people who might actually buy from you — not just people impressed by the logo. Recognised instantly, and specific enough to mean something.",
    audience: "Founders, operators and small-business owners.",
  },
  {
    slug: "business-insider",
    guideSlug: "how-to-get-featured-in-business-insider",
    name: "Business Insider",
    title: "Get Featured in Business Insider | Digital Networking Agency",
    subhead: "Hard to get, and worth it for that reason",
    value:
      "We build the story and the press record that make coverage at this level plausible, then pitch on your behalf. We are honest with you about the odds before we start.",
    about:
      "Business Insider is one of the most-read business publications in the world, written by its own newsroom and covering companies, markets, tech and careers for business decision-makers.",
    why:
      "Because it is genuinely difficult. A Business Insider mention signals that a working journalist judged your story worth telling — and its readers are the people in a position to act on it.",
    audience: "Founders and executives with a substantive, evidenced story.",
  },
  {
    slug: "bloomberg",
    guideSlug: "how-to-get-featured-in-bloomberg",
    name: "Bloomberg",
    title: "Get Featured in Bloomberg | Digital Networking Agency",
    subhead: "The top of the financial media stack",
    value:
      "We build the press record and positioning that make top-tier financial coverage possible. We will also tell you honestly whether Bloomberg is realistic for your business.",
    about:
      "Bloomberg is a global financial news organisation covering markets, capital and the economy for investors and finance professionals.",
    why:
      "Few names carry more weight with investors. Coverage here signals genuine financial significance — which is exactly why it cannot be bought.",
    audience: "Companies with real financial or market significance.",
  },
  {
    slug: "fast-company",
    guideSlug: "how-to-get-featured-in-fast-company",
    name: "Fast Company",
    title: "Get Featured in Fast Company | Digital Networking Agency",
    subhead: "For the idea, not the announcement",
    value:
      "We shape the idea inside your business into a story that reads like an argument rather than an advertisement, then pitch it where it fits.",
    about:
      "Fast Company covers innovation, design, sustainability, leadership and the future of work, and is known for its annual lists recognising innovative companies and people.",
    why:
      "Its readers are creative and strategic professionals. A feature here frames you as someone doing something structurally different, not just successfully.",
    audience: "Innovative, design-led and future-of-work businesses.",
  },
  {
    slug: "inc",
    guideSlug: "how-to-get-featured-in-inc",
    name: "Inc.",
    title: "Get Featured in Inc. Magazine | Digital Networking Agency",
    subhead: "Written for founders, read by founders",
    value:
      "We find the lesson inside your business and build it into a piece written to editorial standard. You approve every word before anything is submitted.",
    about:
      "Inc. has covered entrepreneurs and growing companies for decades, spanning growth, hiring, leadership and funding, and is known for the Inc. 5000 ranking.",
    why:
      "Its audience is founders and operators, so the coverage reaches actual peers and buyers rather than a general audience. Commercially useful, not just flattering.",
    audience: "Founders and growing private companies.",
  },
  {
    slug: "apple-news",
    guideSlug: "how-to-get-featured-on-apple-news",
    name: "Apple News",
    title: "Get Featured on Apple News | Digital Networking Agency",
    subhead: "Reach through the app on every iPhone",
    value:
      "Apple News carries content from publishers, so the route in is a feature with a publication that syndicates there. We place the story and tell you honestly how syndication works.",
    about:
      "Apple News is a news aggregation app built into iPhone, iPad and Mac, surfacing content from publishers who distribute through it alongside Apple's own editorial curation.",
    why:
      "Enormous built-in distribution on devices people already carry. Worth understanding clearly: appearing there generally means your article ran in a publication that feeds Apple News.",
    audience: "Consumer brands and founders after mainstream reach.",
  },
  {
    slug: "google-news",
    guideSlug: "how-to-get-featured-on-google-news",
    name: "Google News",
    title: "Get Featured on Google News | Digital Networking Agency",
    subhead: "Where people look when they search your name",
    value:
      "Google News surfaces articles from sites it already indexes, so the route in is being published on one of them. We handle the placement and explain exactly how it works.",
    about:
      "Google News aggregates coverage from publishers across the web, surfacing it in the News tab, the Google News app and news carousels in search results.",
    why:
      "It is where coverage about you shows up when someone searches your name. A permanent, indexed article keeps working long after publication.",
    audience: "Anyone whose buyers research them before committing.",
  },
  {
    slug: "marketwatch",
    guideSlug: "how-to-get-featured-in-marketwatch",
    name: "MarketWatch",
    title: "Get Featured in MarketWatch | Digital Networking Agency",
    subhead: "Financial media, staff-written",
    value:
      "We build the press record and positioning that make top-tier financial coverage plausible, and tell you honestly whether MarketWatch is realistic for your business.",
    about:
      "MarketWatch is a financial news site owned by Dow Jones, covering markets, investing and personal finance for an audience that follows money closely.",
    why:
      "Dow Jones credibility with a retail-investor and finance-literate readership. Like its stablemates it is staff-written, which is exactly why coverage there carries weight.",
    audience: "Finance-facing companies with a substantive story.",
  },
];

export const getOutlet = (slug: string) =>
  OUTLETS.find((o) => o.slug === slug);
