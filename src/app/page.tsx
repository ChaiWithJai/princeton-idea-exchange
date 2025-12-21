import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedWorks from '@/components/FeaturedWorks';
import ActionSection from '@/components/ActionSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FeaturedWorks />
        <ActionSection />
        <ServicesSection />
        <TeamSection />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
