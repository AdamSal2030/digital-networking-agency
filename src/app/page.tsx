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
