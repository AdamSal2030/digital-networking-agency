import type { Metadata } from "next";
import { ArticlesPage } from "@/components/landing/ArticlesPage";

export const metadata: Metadata = {
  title: "Authority Publications — DNA PR",
  robots: { index: false, follow: false }
};

export default function AuthorityArticlesPage() {
  return (
    <ArticlesPage
      plan="Authority"
      tagline="1 Standard + 1 Premier feature every month, plus 1 Flagship within your term."
      note="Authority includes everything in Spotlight, plus Flagship (top-tier) outlets — USA Today, Forbes AU, Rolling Stone & more. The full list is being added — reach out to your strategist for the complete lineup."
      groups={[]}
    />
  );
}
