import type { Metadata } from "next";
import { ArticlesPage } from "@/components/landing/ArticlesPage";

export const metadata: Metadata = {
  title: "Spotlight Publications — DNA PR",
  robots: { index: false, follow: false }
};

export default function SpotlightArticlesPage() {
  return (
    <ArticlesPage
      plan="Spotlight"
      tagline="1 Standard + 1 Premier feature article every month."
      note="Spotlight includes everything in the Momentum Standard network, plus our Premier (mid-tier) publications. The full Premier list is being added — reach out to your strategist for the complete lineup."
      groups={[]}
    />
  );
}
