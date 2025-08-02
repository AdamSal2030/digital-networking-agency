import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HowItWorks from '@/components/HowItWorks';
import Promise from '@/components/Promise';
import GetStarted from '@/components/GetStarted';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <Promise />
      <GetStarted />
      <FAQ />
      <Footer />
    </main>
  );
}