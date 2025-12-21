import Navigation from '@/components/Navigation';
import WorkCard from '@/components/WorkCard';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const works = [
  {
    title: 'How Theramotive Built Fundable IP Fast',
    description:
      'With just one week to mobilize 20 inexperienced interns, we built Theramotive a functioning engineering system that delivered a validated AI-powered medical billing MVP. The result: defensible IP and $320,000 in seed funding secured in record time.',
    tags: ['Healthtech', 'Bespoke Application Development', 'Data Science', 'Domain Expert', 'GTM Engineering'],
    image: '/images/kzYllvpNxXAbnOFOnaffYf15Rs.png',
    href: '/works/theramotive',
  },
  {
    title: 'Creating Effective Curriculum for QEDC',
    description:
      'We partnered with QEDC to design AI-powered curriculum for resource-constrained entrepreneurs, helping them move from "stuck planning" to shipping real demos in weeks through practical, assessment-driven workshops.',
    tags: ['Curriculum Design', 'GTM Engineering', 'AI', 'Visual Design'],
    image: '/images/CDzTzmLIe97GbdiyW49D14a5Rqc.png',
    href: '/works/qedc',
  },
];

export default function WorksPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32">
        <section className="py-12">
          <div className="container">
            {/* Page Header */}
            <div className="mb-12">
              <h1 className="mb-4">Works</h1>
              <p className="text-[var(--color-gray)] text-lg">
                Designing campaigns that drive long-term value.
              </p>
            </div>

            {/* Works Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {works.map((work, index) => (
                <WorkCard key={index} {...work} />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
