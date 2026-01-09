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

// Icon components
function CheckIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function OpportunityCard({ opportunity, index, isLast }: { opportunity: StudioOpportunity; index: number; isLast: boolean }) {
  const chapterUrl = `${WORKBOOK_BASE_URL}/${opportunity.chapterSlug}`;

  return (
    <div className={`opportunity-card bg-white rounded-xl p-6 border border-gray-100 ${!isLast ? 'timeline-connector' : ''}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-orange)] to-[#ff7b3a] text-white flex items-center justify-center font-semibold text-sm shadow-md">
          {index + 1}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[var(--color-navy)] mb-2 leading-tight">
            {opportunity.title}
          </h3>
          <p className="text-[var(--color-gray)] mb-4 leading-relaxed">
            {opportunity.why}
          </p>
          <Link
            href={chapterUrl}
            target="_blank"
            className="group inline-flex items-center gap-2 text-sm text-[var(--color-orange)] font-medium link-underline"
          >
            <span>Learn how: {opportunity.chapterTitle}</span>
            <span className="transition-transform group-hover:translate-x-1">
              <ExternalLinkIcon />
            </span>
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
      <div className="aspect-video bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-navy-light)] to-[var(--color-orange)]/60 rounded-2xl flex items-center justify-center border border-white/10 shadow-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
        <div className="text-center text-white relative z-10 px-6">
          <div className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">{studio.name}</div>
          <div className="text-white/70 flex items-center justify-center gap-2">
            <LocationIcon />
            {studio.location}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 relative shadow-xl hero-image-overlay group">
      <Image
        src={`/studios/${studio.slug}.png`}
        alt={`${studio.name} studio`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 800px"
        priority
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div className="text-white font-semibold text-lg drop-shadow-lg">{studio.name}</div>
        <div className="text-white/80 text-sm flex items-center gap-2">
          <LocationIcon />
          {studio.location}
        </div>
      </div>
    </div>
  );
}

function PersonalLetterSection({ studio }: { studio: StudioData }) {
  return (
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-[var(--color-orange)]/5 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--color-navy)]/5 rounded-full blur-2xl"></div>

      <div className="paper-texture rounded-2xl p-8 md:p-12 relative">
        {/* Studio hero image */}
        <div className="mb-10">
          <StudioHeroImage studio={studio} />
        </div>

        {/* The Letter */}
        <div className="max-w-2xl mx-auto relative">
          <div className="space-y-6">
            {/* Handwritten greeting */}
            <p className="font-handwritten text-3xl md:text-4xl text-[var(--color-navy)]">
              {studio.letter.greeting}
            </p>

            {/* Letter body */}
            <div className="space-y-4 text-[var(--color-dark)] leading-relaxed text-base md:text-lg">
              {studio.letter.body.map((paragraph, index) => (
                <p key={index} className="first-letter:text-xl first-letter:font-medium">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Handwritten signoff with signature line */}
            <div className="pt-6 border-t border-gray-200/50">
              <div className="font-handwritten text-2xl md:text-3xl text-[var(--color-navy)] whitespace-pre-line">
                {studio.letter.signoff}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketPositionCard({
  title,
  description,
  icon,
  bgColor,
  iconBgColor
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  iconBgColor: string;
}) {
  return (
    <div className={`market-card ${bgColor} rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
      <div className={`w-12 h-12 rounded-xl ${iconBgColor} flex items-center justify-center mb-4 shadow-sm`}>
        {icon}
      </div>
      <h3 className="font-semibold text-[var(--color-dark)] mb-2 text-lg">{title}</h3>
      <p className="text-[var(--color-gray)] text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function PricingCard({
  tier,
  price,
  description,
  isFeatured
}: {
  tier: string;
  price: string;
  description: string;
  isFeatured?: boolean;
}) {
  return (
    <div className={`pricing-card rounded-xl p-6 ${isFeatured ? 'pricing-card-featured pt-8' : 'bg-white border border-gray-100'}`}>
      <div className={`font-semibold mb-2 ${isFeatured ? 'gradient-text' : 'text-[var(--color-orange)]'}`}>
        {tier}
      </div>
      <div className="text-3xl font-bold text-[var(--color-navy)] mb-1">{price}</div>
      <p className="text-sm text-[var(--color-gray)] leading-relaxed">{description}</p>
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
      <main className="pt-32 pb-12">
        <article className="container">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Link
              href="/studios"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-gray)] hover:text-[var(--color-orange)] transition-colors group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to NJ Creative Studios
            </Link>
          </div>

          {/* Hero Section */}
          <header className="mb-16 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-navy)] mb-6 leading-[1.1]">
              {studio.hook}
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-gray)] leading-relaxed max-w-3xl">
              {studio.subhook}
            </p>
          </header>

          {/* Glassmorphism Info Bar */}
          <div className="glass-card rounded-2xl p-6 mb-16">
            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              {/* Studio Name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-navy)] flex items-center justify-center text-white font-bold text-sm">
                  {studio.name.charAt(0)}
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[var(--color-gray)] font-medium">Studio</span>
                  <p className="font-semibold text-[var(--color-dark)]">{studio.name}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-10 w-px bg-gray-200 hidden md:block"></div>

              {/* Contact */}
              <div>
                <span className="text-xs uppercase tracking-wider text-[var(--color-gray)] font-medium">Contact</span>
                <p className="font-semibold text-[var(--color-dark)]">{studio.contact.name}</p>
              </div>

              {/* Divider */}
              <div className="h-10 w-px bg-gray-200 hidden md:block"></div>

              {/* Location */}
              <div className="flex items-start gap-2">
                <LocationIcon />
                <div>
                  <span className="text-xs uppercase tracking-wider text-[var(--color-gray)] font-medium">Location</span>
                  <p className="font-semibold text-[var(--color-dark)]">{studio.location}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="ml-auto flex gap-3 flex-wrap">
                <a
                  href={`tel:${studio.contact.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl text-sm font-medium text-[var(--color-dark)] hover:bg-gray-50 transition-all border border-gray-200 hover:border-gray-300 shadow-sm icon-bounce"
                >
                  <PhoneIcon />
                  <span className="hidden sm:inline">{studio.contact.phone}</span>
                  <span className="sm:hidden">Call</span>
                </a>
                <a
                  href={`mailto:${studio.contact.email}`}
                  className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-orange)] rounded-xl text-sm font-medium text-white hover:bg-[var(--color-orange-hover)] transition-all shadow-sm"
                >
                  <MailIcon />
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* What Makes This Studio Special */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-[var(--color-orange)] to-transparent rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-navy)]">
                What Makes {studio.name} Special
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 stagger-grid">
              <MarketPositionCard
                title="The Standout"
                description={studio.marketPosition.standout}
                icon={<CheckIcon />}
                bgColor="bg-emerald-50"
                iconBgColor="bg-emerald-100 text-emerald-600"
              />
              <MarketPositionCard
                title="Core Asset"
                description={studio.marketPosition.asset}
                icon={<BuildingIcon />}
                bgColor="bg-blue-50"
                iconBgColor="bg-blue-100 text-blue-600"
              />
              <MarketPositionCard
                title="The Opportunity"
                description={studio.marketPosition.gap}
                icon={<LightningIcon />}
                bgColor="bg-amber-50"
                iconBgColor="bg-amber-100 text-amber-600"
              />
            </div>
          </section>

          {/* Growth Opportunities */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-8 bg-gradient-to-b from-[var(--color-orange)] to-transparent rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-navy)]">
                Three Growth Paths
              </h2>
            </div>
            <p className="text-[var(--color-gray)] mb-8 ml-4">
              Based on what I&apos;ve seen working with creative studios. Each links to a free resource.
            </p>
            <div className="space-y-4">
              {studio.opportunities.map((opportunity, index) => (
                <OpportunityCard
                  key={index}
                  opportunity={opportunity}
                  index={index}
                  isLast={index === studio.opportunities.length - 1}
                />
              ))}
            </div>
          </section>

          {/* Personal Letter */}
          <section className="mb-16">
            <PersonalLetterSection studio={studio} />
          </section>

          {/* Working Together */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-8 md:p-12 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1 h-8 bg-gradient-to-b from-[var(--color-orange)] to-transparent rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-navy)]">
                  If You Want Help
                </h2>
              </div>
              <p className="text-[var(--color-gray)] mb-10 text-lg ml-4">
                {studio.ctaAngle}
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <PricingCard
                  tier="Starter"
                  price="$1,500"
                  description="3 custom AI workflows + training to get you moving fast"
                />
                <PricingCard
                  tier="90-Day Build"
                  price="$3K/mo"
                  description="Full system implementation, I work alongside your team"
                  isFeatured
                />
                <PricingCard
                  tier="Ongoing"
                  price="$3K/mo"
                  description="Continuous optimization + new workflows as you grow"
                />
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-slate-50">
                <Link
                  href={WORKBOOK_BASE_URL}
                  target="_blank"
                  className="btn-primary btn-glow pulse-subtle"
                >
                  Read the Free Playbook
                  <ExternalLinkIcon />
                </Link>
                <a
                  href={`mailto:jai@chaiwithjai.com?subject=Coffee%20re%3A%20${encodeURIComponent(studio.name)}&body=Hi%20Jai%2C%0A%0AI%20saw%20the%20page%20you%20put%20together%20for%20${encodeURIComponent(studio.name)}.%20Would%20love%20to%20grab%20coffee%20and%20hear%20more.%0A%0A${studio.contact.name}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-navy)] rounded-lg font-medium hover:bg-[var(--color-navy-light)] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Let&apos;s Get Coffee
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
          </section>

          {/* Bottom Navigation */}
          <div className="flex flex-wrap justify-between items-center pt-8 border-t border-gray-200 gap-4">
            <Link
              href="/studios"
              className="inline-flex items-center gap-2 text-[var(--color-dark)] hover:text-[var(--color-orange)] transition-colors group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Directory
            </Link>
            <Link
              href={WORKBOOK_BASE_URL}
              target="_blank"
              className="inline-flex items-center gap-2 text-[var(--color-dark)] hover:text-[var(--color-orange)] transition-colors group"
            >
              Free Playbook
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
