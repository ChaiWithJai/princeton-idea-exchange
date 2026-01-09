import Navigation from '@/components/Navigation';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  getStudioBySlug,
  getAllStudioSlugs,
  WORKBOOK_BASE_URL,
  type StudioData,
  type StudioOpportunity,
} from '../data/studios';

// Generate static params for all studios
export function generateStaticParams() {
  return getAllStudioSlugs().map((slug) => ({ slug }));
}

// Generate metadata for each studio page (Next.js 15: params is a Promise)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const studio = getStudioBySlug(slug);
  if (!studio) return { title: 'Studio Not Found' };

  return {
    title: `${studio.name} | NJ Creative Studios`,
    description: studio.subhook,
  };
}

function OpportunityCard({ opportunity, index }: { opportunity: StudioOpportunity; index: number }) {
  const chapterUrl = `${WORKBOOK_BASE_URL}/${opportunity.chapterSlug}`;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-orange)]/10 text-[var(--color-orange)] flex items-center justify-center font-semibold text-sm">
          {index + 1}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[var(--color-navy)] mb-2">
            {opportunity.title}
          </h3>
          <p className="text-[var(--color-gray)] mb-4">
            {opportunity.why}
          </p>
          <Link
            href={chapterUrl}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-orange)] font-medium hover:underline"
          >
            <span>Learn how: {opportunity.chapterTitle}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

function StudioHeroImage({ studio }: { studio: StudioData }) {
  // Studios with generated images
  const hasImage = [
    '10-basin', '18-label', 'awakened', 'bb-props', 'big-sur', 'black-swallowtail',
    'buttertree', 'cinelease', 'east-coast-post', 'hsad', 'hudson-river', 'ironbound',
    'kvibe', 'loop', 'meadowlands', 'mediamix', 'mile-end', 'montclair-state', 'odr',
    'palisade', 'parlay', 'showman', 'silver-spoon', 'sip', 'stellar', 'sustainable'
  ].includes(studio.slug);

  if (!hasImage) {
    return (
      <div className="mb-8 aspect-video bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-orange)]/80 rounded-xl flex items-center justify-center border border-gray-200">
        <div className="text-center text-white">
          <div className="text-4xl font-bold mb-2">{studio.name}</div>
          <div className="text-white/80">{studio.location}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8 aspect-video bg-gray-100 rounded-xl overflow-hidden border border-gray-200 relative">
      <Image
        src={`/studios/${studio.slug}.png`}
        alt={`${studio.name} studio`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 800px"
      />
    </div>
  );
}

function PersonalLetterSection({ studio }: { studio: StudioData }) {
  return (
    <div className="bg-[#faf9f7] rounded-2xl p-8 md:p-12 border border-gray-200">
      {/* Studio hero image */}
      <StudioHeroImage studio={studio} />

      {/* The Letter */}
      <div className="max-w-2xl mx-auto">
        <div className="font-serif">
          <p className="text-xl text-[var(--color-dark)] mb-6 italic">
            {studio.letter.greeting}
          </p>

          <div className="space-y-4">
            {studio.letter.body.map((paragraph, index) => (
              <p key={index} className="text-[var(--color-dark)] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 whitespace-pre-line text-[var(--color-dark)]">
            {studio.letter.signoff}
          </div>
        </div>
      </div>
    </div>
  );
}

// Next.js 15: params is a Promise, so page must be async
export default async function StudioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const studio = getStudioBySlug(slug);

  if (!studio) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="pt-32">
        <article className="container py-12">
          {/* Header: The Promise */}
          <header className="mb-12 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Link
                href="/studios"
                className="text-sm text-[var(--color-gray)] hover:text-[var(--color-dark)] transition-colors"
              >
                &larr; NJ Creative Studios
              </Link>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] mb-4">
              {studio.hook}
            </h1>

            <p className="text-xl text-[var(--color-gray)] leading-relaxed">
              {studio.subhook}
            </p>
          </header>

          {/* Studio Info Bar */}
          <div className="bg-gray-50 rounded-xl p-4 mb-12 flex flex-wrap items-center gap-4 md:gap-8">
            <div>
              <span className="text-sm text-[var(--color-gray)]">Studio</span>
              <p className="font-medium text-[var(--color-dark)]">{studio.name}</p>
            </div>
            <div>
              <span className="text-sm text-[var(--color-gray)]">Contact</span>
              <p className="font-medium text-[var(--color-dark)]">{studio.contact.name}</p>
            </div>
            <div>
              <span className="text-sm text-[var(--color-gray)]">Location</span>
              <p className="font-medium text-[var(--color-dark)]">{studio.location}</p>
            </div>
            <div className="ml-auto flex gap-3">
              <a
                href={`tel:${studio.contact.phone}`}
                className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-[var(--color-dark)] hover:bg-gray-100 transition-colors"
              >
                {studio.contact.phone}
              </a>
              <a
                href={`mailto:${studio.contact.email}`}
                className="px-4 py-2 bg-[var(--color-orange)] rounded-lg text-sm font-medium text-white hover:bg-[var(--color-orange)]/90 transition-colors"
              >
                Email
              </a>
            </div>
          </div>

          {/* What Makes This Studio Special */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-6">
              What Makes {studio.name} Special
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[var(--color-dark)] mb-2">The Standout</h3>
                <p className="text-[var(--color-gray)] text-sm">{studio.marketPosition.standout}</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[var(--color-dark)] mb-2">Core Asset</h3>
                <p className="text-[var(--color-gray)] text-sm">{studio.marketPosition.asset}</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[var(--color-dark)] mb-2">The Opportunity</h3>
                <p className="text-[var(--color-gray)] text-sm">{studio.marketPosition.gap}</p>
              </div>
            </div>
          </section>

          {/* Growth Opportunities */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-2">
              Three Growth Paths
            </h2>
            <p className="text-[var(--color-gray)] mb-6">
              Based on what I&apos;ve seen working with creative studios. Each links to a free resource.
            </p>
            <div className="space-y-4">
              {studio.opportunities.map((opportunity, index) => (
                <OpportunityCard key={index} opportunity={opportunity} index={index} />
              ))}
            </div>
          </section>

          {/* Personal Letter */}
          <section className="mb-12">
            <PersonalLetterSection studio={studio} />
          </section>

          {/* Working Together */}
          <section className="mb-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-2">
                If You Want Help
              </h2>
              <p className="text-[var(--color-gray)] mb-6">
                {studio.ctaAngle}
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-5">
                  <div className="text-[var(--color-orange)] font-semibold mb-2">Starter</div>
                  <div className="text-2xl font-bold text-[var(--color-navy)]">$1,500</div>
                  <p className="text-sm text-[var(--color-gray)] mt-2">3 custom AI workflows + training</p>
                </div>
                <div className="bg-white rounded-xl p-5 ring-2 ring-[var(--color-orange)]">
                  <div className="text-[var(--color-orange)] font-semibold mb-2">90-Day Build</div>
                  <div className="text-2xl font-bold text-[var(--color-navy)]">$3K/mo</div>
                  <p className="text-sm text-[var(--color-gray)] mt-2">Full system, I work alongside your team</p>
                </div>
                <div className="bg-white rounded-xl p-5">
                  <div className="text-[var(--color-orange)] font-semibold mb-2">Ongoing</div>
                  <div className="text-2xl font-bold text-[var(--color-navy)]">$3K/mo</div>
                  <p className="text-sm text-[var(--color-gray)] mt-2">Continuous optimization + new workflows</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={WORKBOOK_BASE_URL}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-orange)] text-white rounded-lg font-medium hover:bg-[var(--color-orange)]/90 transition-colors"
                >
                  Read the Free Playbook
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
                <a
                  href={`mailto:jai@chaiwithjai.com?subject=Coffee%20re%3A%20${encodeURIComponent(studio.name)}&body=Hi%20Jai%2C%0A%0AI%20saw%20the%20page%20you%20put%20together%20for%20${encodeURIComponent(studio.name)}.%20Would%20love%20to%20grab%20coffee%20and%20hear%20more.%0A%0A${studio.contact.name}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-navy)] text-white rounded-lg font-medium hover:bg-[var(--color-navy)]/90 transition-colors"
                >
                  Let&apos;s Get Coffee
                </a>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link
              href="/studios"
              className="text-[var(--color-dark)] hover:text-[var(--color-orange)] transition-colors"
            >
              &larr; Back to Directory
            </Link>
            <Link
              href={WORKBOOK_BASE_URL}
              target="_blank"
              className="text-[var(--color-dark)] hover:text-[var(--color-orange)] transition-colors"
            >
              Free Playbook &rarr;
            </Link>
          </div>
        </article>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
