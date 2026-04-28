import { LandingEffects } from "@/components/landing/effects";
import { NavMenu } from "@/components/landing/NavMenu";
import {
  AboutSection,
  AlaCarteSection,
  BrandingSection,
  CtaFooterSection,
  HeroSection,
  PackagesSection,
  PrimeSection,
  ProofSection,
  StatsSection
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
      <AboutSection />
      <PackagesSection />
      <AlaCarteSection />
      <PrimeSection />
      <BrandingSection />
      <ProofSection />
      <CtaFooterSection />
      <LandingEffects />
    </>
  );
}
