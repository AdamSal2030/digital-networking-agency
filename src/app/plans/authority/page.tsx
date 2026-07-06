import type { Metadata } from "next";
import { ArticlesPage, type Group } from "@/components/landing/ArticlesPage";

export const metadata: Metadata = {
  title: "Authority Publications — DNA PR",
  robots: { index: false, follow: false }
};

const groups: Group[] = [
  {
    category: "Flagship & National",
    pubs: [
      { name: "Investing.com", dr: 94, url: "https://investing.com" },
      { name: "USA Today", dr: 92, url: "https://usatoday.com" },
      { name: "Galore Magazine", dr: 83, url: "https://galoremag.com" },
      { name: "OK Magazine", dr: 81, url: "https://okmagazine.com" },
      { name: "Radar Online", dr: 78, url: "https://radaronline.com" },
      { name: "Harper's Bazaar (Australia)", dr: 74, url: "https://harpersbazaar.com.au" },
      { name: "Rolling Stone (UK)", dr: 72, url: "https://rollingstone.co.uk" }
    ]
  },
  {
    category: "Forbes International",
    pubs: [
      { name: "Forbes Australia", dr: 82, url: "https://forbes.com.au", note: "+$1,000 add-on" },
      { name: "Forbes Mexico", dr: 80, url: "https://forbes.com.mx" },
      { name: "Forbes Türkiye", dr: 78, url: "https://forbes.com.tr" },
      { name: "Forbes Colombia", dr: 76, url: "https://forbes.co" },
      { name: "Forbes Ukraine", dr: 74, url: "https://forbes.ua" }
    ]
  }
];

export default function AuthorityArticlesPage() {
  return (
    <ArticlesPage
      plan="Authority"
      tagline="1 Standard + 1 Premier every month, plus 1 Flagship feature within your term — from the top-tier outlets below."
      groups={groups}
    />
  );
}
