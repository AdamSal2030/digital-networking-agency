import { LandingEffects } from "@/components/landing/effects";
import {
  AboutSection,
  CtaFooterSection,
  GuidesSection,
  HeroSection,
  PressMarquee,
  ProofSection,
  StatsSection,
  TestimonialsSection
} from "@/components/landing/sections";
import { ServicesTeaser } from "@/components/landing/HomeExtras";
import { VideoTestimonial } from "@/components/VideoTestimonial";
import { HomeFAQ } from "@/components/landing/HomeFAQ";
import type { Metadata } from "next";

// Refresh the homepage (and its Trustpilot testimonials) every 6 hours.
export const revalidate = 21600;

// The homepage was the only route without a canonical.
export const metadata: Metadata = {
  alternates: { canonical: "https://www.digitalnetworkingagency.com" },
};

export default function Home() {
  return (
    <>
      <div className="cursor" id="cur" />
      <div className="cursor-ring" id="curR" />
      <div id="progress" />

      <HeroSection />
      <StatsSection />
      <PressMarquee />
      <AboutSection />
      <ProofSection />
      <ServicesTeaser />
      <VideoTestimonial />
      <TestimonialsSection />
      <GuidesSection />
      <HomeFAQ />
      <CtaFooterSection />
      <LandingEffects />
    </>
  );
}
