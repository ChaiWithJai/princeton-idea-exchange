import Navigation from '@/components/Navigation';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const tags = ['Healthtech', 'Bespoke Application Development', 'Data Science', 'Domain Expert', 'GTM Engineering'];

export default function TheramotivePage() {
  return (
    <>
      <Navigation />
      <main className="pt-32">
        <article className="container py-12">
          {/* Header */}
          <header className="mb-12">
            <h1 className="mb-6">How Theramotive Built Fundable IP Fast</h1>
            <p className="text-[var(--color-gray)] text-lg mb-6 max-w-3xl">
              With just one week to mobilize 20 inexperienced interns, we built
              Theramotive a functioning engineering system that delivered a validated
              AI-powered medical billing MVP. The result: defensible IP and $320,000
              in seed funding secured in record time.
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
            <Image
              src="/images/kzYllvpNxXAbnOFOnaffYf15Rs.png"
              alt="Theramotive Case Study"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-[var(--color-gray)]">
              <strong>Client:</strong> Theramotive
              <br />
              <strong>Project:</strong> AI-Powered Medical Billing Workflow & Team Incubation
            </p>

            <h5 className="mt-10 mb-4">The Challenge</h5>
            <p className="text-[var(--color-gray)]">
              Founder Lola approached cashisclay.com with an urgent and complex problem:
              she had a team of <strong>20 inexperienced college interns starting in one week</strong>{' '}
              and a mission-critical mandate to build a novel software product for the first time.
              The challenge was threefold:
            </p>
            <ul className="list-disc pl-6 text-[var(--color-gray)] space-y-2">
              <li>
                <strong>Execution Risk:</strong> How to organize and manage a large, junior
                team to build production-level code.
              </li>
              <li>
                <strong>Technical Complexity:</strong> How to aggregate disparate data sources
                and build valuable, defensible IP in a niche AI vertical (medical billing).
              </li>
              <li>
                <strong>Speed to Value:</strong> The need to demonstrate tangible progress
                immediately to secure investor confidence.
              </li>
            </ul>

            <h5 className="mt-10 mb-4">The Solution</h5>
            <p className="text-[var(--color-gray)]">
              Jai Bhagat and the cashisclay.com team implemented a full-scale operating
              system for Theramotive&apos;s new engineering organization. The approach was
              not just to build software, but to build a high-functioning team.
            </p>
            <ul className="list-disc pl-6 text-[var(--color-gray)] space-y-2">
              <li>
                <strong>Structured Leadership:</strong> The 20-intern team was organized
                into pods, with a smaller cohort of &quot;leaders&quot; mentored directly by Jai
                to validate business use cases and technical feasibility.
              </li>
              <li>
                <strong>AI-Native Systems Thinking:</strong> We applied a rigorous
                &quot;build vs. buy&quot; analysis to every part of the tech stack, analyzing the
                supply chain to make rapid decisions that met immediate business needs
                while planning for future scale.
              </li>
              <li>
                <strong>Agile Rituals:</strong> We instituted a non-negotiable weekly demo
                ritual. This created a tight feedback loop, made progress visible to all
                stakeholders, and eliminated the &quot;maintenance trap&quot; of building in
                isolation for months.
              </li>
            </ul>

            <h5 className="mt-10 mb-4">The Results</h5>
            <p className="text-[var(--color-gray)]">
              By transforming a group of interns into a cohesive, productive engineering
              unit, Theramotive achieved in weeks what would typically take quarters.
            </p>
            <ul className="list-disc pl-6 text-[var(--color-gray)] space-y-2">
              <li>
                <strong>Secured Funding:</strong> Lola successfully raised{' '}
                <strong>$320,000 in seed funding</strong>, backed by a strong narrative
                and a technically validated MVP.
              </li>
              <li>
                <strong>Created Defensible IP:</strong> The team successfully built a
                proprietary workflow that uses AI to convert patient inputs into accurate
                ICD-10 codes.
              </li>
              <li>
                <strong>Built a High-Performing Culture:</strong> The team of interns was
                forged into a capable engineering force, avoiding the pitfalls of first-time
                software development and establishing a culture of transparency and rapid
                iteration.
              </li>
            </ul>

            {/* Testimonial */}
            <blockquote className="border-l-4 border-[var(--color-orange)] pl-6 my-10 italic text-[var(--color-gray)]">
              &quot;Jai has a unique ability to absorb a chaotic, complex situation and
              instantly map it to a clear plan. He didn&apos;t just recommend tools; he
              implemented a full-scale operating system for our 20-person intern team,
              turning them from students into a productive engineering force. His guidance
              was the foundation that allowed us to build our IP and secure our initial
              funding.&quot;
              <br />
              <strong className="text-[var(--color-dark)] not-italic">
                — Lola, Founder & CEO, Theramotive
              </strong>
            </blockquote>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/works"
              className="text-[var(--color-dark)] hover:text-[var(--color-orange)] transition-colors"
            >
              &larr; Back to All Works
            </Link>
            <Link
              href="/works/qedc"
              className="text-[var(--color-dark)] hover:text-[var(--color-orange)] transition-colors"
            >
              Creating Effective Curriculum for QEDC &rarr;
            </Link>
          </div>
        </article>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
