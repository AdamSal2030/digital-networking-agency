import type { Metadata } from "next";
import { ArticlesPage, type Group } from "@/components/landing/ArticlesPage";

export const metadata: Metadata = {
  title: "Momentum Publications — DNA PR",
  robots: { index: false, follow: false }
};

const groups: Group[] = [
  {
    category: "Power Network",
    pubs: [
      { name: "Business Insider", dr: 92, url: "https://businessinsider.com" },
      { name: "TechBullion", dr: 81, url: "https://techbullion.com" },
      { name: "New York Weekly", dr: 74, url: "https://nyweekly.com" },
      { name: "Los Angeles Wire", dr: 64, url: "https://losangeleswire.com" },
      { name: "CEO Weekly", dr: 62, url: "https://ceoweekly.com" },
      { name: "Kivo Daily", dr: 62, url: "https://kivodaily.com" },
      { name: "US Reporter", dr: 59, url: "https://usreporter.com" }
    ]
  },
  {
    category: "National Publications",
    pubs: [
      { name: "Market Daily", dr: 59, url: "https://marketdaily.com" },
      { name: "Economic Insider", dr: 53, url: "https://economicinsider.com" },
      { name: "US Business News", dr: 52, url: "https://usbusinessnews.com" },
      { name: "Wall Street Times", dr: 52, url: "https://wallstreettimes.com" },
      { name: "World Reporter", dr: 51, url: "https://worldreporter.com" },
      { name: "Real Estate Today", dr: 50, url: "https://realestatetoday.com" },
      { name: "US Insider", dr: 49, url: "https://usinsider.com" },
      { name: "The American News", dr: 18, url: "https://theamericannews.com" }
    ]
  },
  {
    category: "Regional Publications",
    pubs: [
      { name: "Voyage New York", dr: 58, url: "https://voyagenewyork.com" },
      { name: "Miami Wire", dr: 57, url: "https://miamiwire.com" },
      { name: "San Francisco Post", dr: 57, url: "https://sanfranciscopost.com" },
      { name: "Atlanta Wire", dr: 56, url: "https://atlantawire.com" },
      { name: "The Chicago Journal", dr: 54, url: "https://thechicagojournal.com" },
      { name: "Portland News", dr: 53, url: "https://portlandnews.com" },
      { name: "Texas Today", dr: 53, url: "https://texastoday.com" },
      { name: "New York Wire", dr: 49, url: "https://newyorkwire.com" },
      { name: "California Gazette", dr: 27, url: "https://californiagazette.com" },
      { name: "California Observer", dr: 27, url: "https://californiaobserver.com" }
    ]
  },
  {
    category: "Niche & Specialty Publications",
    pubs: [
      { name: "Women's Journal", dr: 58, url: "https://womensjournal.com" },
      { name: "Luxury LA Mag", dr: 56, url: "https://luxurylamag.com" },
      { name: "Entertainment Post", dr: 55, url: "https://entertainmentpost.com" },
      { name: "Artist Weekly", dr: 54, url: "https://artistweekly.com" },
      { name: "Music Observer", dr: 54, url: "https://musicobserver.com" },
      { name: "Celebrity News", dr: 53, url: "https://celebritynews.com" },
      { name: "Famous Times", dr: 52, url: "https://famoustimes.com" },
      { name: "BLK News", dr: 51, url: "https://blknews.com" },
      { name: "Net Worth", dr: 51, url: "https://networth.com" },
      { name: "Entertainment Monthly News", dr: 49, url: "https://entertainmentmonthlynews.com" },
      { name: "Influencer Daily", dr: 48, url: "https://influencerdaily.com" }
    ]
  }
];

export default function MomentumArticlesPage() {
  return (
    <ArticlesPage
      plan="Momentum"
      tagline="1 Standard feature article every month — published across our 80+ publication network."
      groups={groups}
    />
  );
}
