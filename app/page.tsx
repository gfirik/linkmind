import { HeroSection } from '@/components/landing/hero-section';
import { StickyScrollSection } from '@/components/landing/sticky-scroll-section';
import { EmailCTASection } from '@/components/landing/email-cta-section';
import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StickyScrollSection />
      <EmailCTASection />
      <Footer />
    </main>
  );
}