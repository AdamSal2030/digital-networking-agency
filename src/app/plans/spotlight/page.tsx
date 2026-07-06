import type { Metadata } from "next";
import { ArticlesPage, type Group } from "@/components/landing/ArticlesPage";

export const metadata: Metadata = {
  title: "Spotlight Publications — DNA PR",
  robots: { index: false, follow: false }
};

const groups: Group[] = [
  {
    category: "Top-Tier & National",
    pubs: [
      { name: "Yahoo Finance", dr: 94, url: "https://finance.yahoo.com" },
      { name: "AP News", dr: 91, url: "https://apnews.com" },
      { name: "Benzinga", dr: 86, url: "https://benzinga.com" },
      { name: "Digital Journal", dr: 86, url: "https://digitaljournal.com" },
      { name: "IB Times (AP)", dr: 59, url: "https://ibtimes.com" },
      { name: "Apple News (via Grit Daily)", dr: 58, url: "https://apple.news" }
    ]
  },
  {
    category: "Business & Leadership",
    pubs: [
      { name: "CEO World Biz", dr: 63, url: "https://ceoworld.biz" },
      { name: "Grit Daily", dr: 60, url: "https://gritdaily.com" },
      { name: "CEO Official Magazine", dr: 54, url: "https://ceofficialmag.com" },
      { name: "Financial Tech Times", dr: 53, url: "https://financialtechtimes.com" }
    ]
  },
  {
    category: "Lifestyle & Wealth",
    pubs: [
      { name: "Distractify", dr: 62, url: "https://distractify.com" },
      { name: "NY Magazine", dr: 57, url: "https://ny-magazine.com" },
      { name: "Dubai Weekly", dr: 56, url: "https://dubaiweekly.com" },
      { name: "High Net Worth Magazine", dr: 55, url: "https://highnetworthmag.com" },
      { name: "Net Worth.US", dr: 52, url: "https://networth.us" }
    ]
  }
];

export default function SpotlightArticlesPage() {
  return (
    <ArticlesPage
      plan="Spotlight"
      tagline="1 Standard + 1 Premier feature article every month — published across the Premier network below."
      groups={groups}
    />
  );
}
