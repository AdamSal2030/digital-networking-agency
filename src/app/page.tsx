import { LandingEffects } from "@/components/landing/effects";
import { NavMenu } from "@/components/landing/NavMenu";
import {
  AboutSection,
  AlaCarteSection,
  BrandingSection,
  CtaFooterSection,
  HeroSection,
  PackagesSection,
  PressMarquee,
  PrimeSection,
  ProofSection,
  StatsSection,
  TestimonialsSection
} from "@/components/landing/sections";

// Refresh the homepage (and its Trustpilot testimonials) every 6 hours.
export const revalidate = 21600;

export default function Home() {
  return (
    <>
      <div className="cursor" id="cur" />
      <div className="cursor-ring" id="curR" />
      <div id="progress" />

      <NavMenu />
      <HeroSection />
      <StatsSection />
      <PressMarquee />
      <AboutSection />
      <PackagesSection />
      <AlaCarteSection />
      <PrimeSection />
      <BrandingSection />
      <ProofSection />
      <TestimonialsSection />
      <CtaFooterSection />
      <LandingEffects />
    </>
  );
}
