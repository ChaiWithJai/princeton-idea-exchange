import Navigation from '@/components/Navigation';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { studios, WORKBOOK_BASE_URL, type StudioData } from './data/studios';

function StudioCard({ studio }: { studio: StudioData }) {
  return (
    <Link
      href={`/studios/${studio.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100"
    >
      {/* Studio Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-[var(--color-navy)] group-hover:text-[var(--color-orange)] transition-colors">
            {studio.name}
          </h3>
        </div>

        <p className="text-sm text-[var(--color-gray)] mb-4">
          {studio.location}
        </p>

        {/* What makes them special - one line */}
        <p className="text-[var(--color-dark)] text-sm line-clamp-2 mb-4">
          {studio.marketPosition.standout}
        </p>

        {/* Contact */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm text-[var(--color-gray)]">
            {studio.contact.name}
          </span>
          <span className="text-[var(--color-orange)] text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Learn more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

// Group studios by location cluster
function getJerseyCityStudios() {
  return studios.filter(s => s.location.includes('Jersey City'));
}

function getMontclairStudios() {
  return studios.filter(s => s.location.includes('Montclair'));
}

function getNewarkStudios() {
  return studios.filter(s => s.location.includes('Newark'));
}

function getKearnyStudios() {
  return studios.filter(s => s.location.includes('Kearny'));
}

function getNorthJerseyStudios() {
  // Union City, Secaucus, Bayonne, Englewood Cliffs, Allendale, East Rutherford, Moonachie, Fairfield, East Hanover, Little Falls
  const northJerseyCities = ['Union City', 'Secaucus', 'Bayonne', 'Englewood Cliffs', 'Allendale', 'E. Rutherford', 'Moonachie', 'Fairfield', 'East Hanover', 'Little Falls'];
  return studios.filter(s => northJerseyCities.some(city => s.location.includes(city)));
}

function getCentralJerseyStudios() {
  // Hamilton, Freehold, Eatontown, Tinton Falls, Madison (town, not street), Bordentown
  const centralJerseyCities = ['Hamilton', 'Freehold', 'Eatontown', 'Tinton Falls', 'Bordentown'];
  // Madison needs special handling to avoid matching "Madison St" in Newark
  return studios.filter(s =>
    centralJerseyCities.some(city => s.location.includes(city)) ||
    (s.location.includes('Madison') && !s.location.includes('Newark'))
  );
}

function getSouthJerseyStudios() {
  // Atlantic City, Paulsboro, Mantua
  const southJerseyCities = ['Atlantic City', 'Paulsboro', 'Mantua'];
  return studios.filter(s => southJerseyCities.some(city => s.location.includes(city)));
}

function getOtherStudios() {
  const grouped = [
    ...getJerseyCityStudios(),
    ...getMontclairStudios(),
    ...getNewarkStudios(),
    ...getKearnyStudios(),
    ...getNorthJerseyStudios(),
    ...getCentralJerseyStudios(),
    ...getSouthJerseyStudios(),
  ].map(s => s.slug);
  return studios.filter(s => !grouped.includes(s.slug));
}

export default function StudiosPage() {
  const jerseyCityStudios = getJerseyCityStudios();
  const montclairStudios = getMontclairStudios();
  const newarkStudios = getNewarkStudios();
  const kearnyStudios = getKearnyStudios();
  const northJerseyStudios = getNorthJerseyStudios();
  const centralJerseyStudios = getCentralJerseyStudios();
  const southJerseyStudios = getSouthJerseyStudios();
  const otherStudios = getOtherStudios();

  return (
    <>
      <Navigation />
      <main className="pt-32">
        {/* Hero */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] mb-6">
                NJ Creative Studios
              </h1>
              <p className="text-xl text-[var(--color-gray)] mb-8">
                A curated directory of production facilities across New Jersey.
                Whether you&apos;re looking for a podcast studio, film stage, or creative community space —
                find the right fit for your next project.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="px-4 py-2 bg-[var(--color-orange)]/10 text-[var(--color-orange)] rounded-full font-medium">
                  {studios.length} Studios
                </span>
                <span className="px-4 py-2 bg-gray-100 text-[var(--color-gray)] rounded-full">
                  Jersey City
                </span>
                <span className="px-4 py-2 bg-gray-100 text-[var(--color-gray)] rounded-full">
                  Newark
                </span>
                <span className="px-4 py-2 bg-gray-100 text-[var(--color-gray)] rounded-full">
                  Montclair
                </span>
                <span className="px-4 py-2 bg-gray-100 text-[var(--color-gray)] rounded-full">
                  + More
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Jersey City Cluster */}
        {jerseyCityStudios.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-semibold text-[var(--color-navy)]">
                  Jersey City
                </h2>
                <span className="text-sm text-[var(--color-gray)]">
                  {jerseyCityStudios.length} studios
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jerseyCityStudios.map((studio) => (
                  <StudioCard key={studio.slug} studio={studio} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Montclair Cluster */}
        {montclairStudios.length > 0 && (
          <section className="py-12">
            <div className="container">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-semibold text-[var(--color-navy)]">
                  Montclair
                </h2>
                <span className="text-sm text-[var(--color-gray)]">
                  {montclairStudios.length} studios
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {montclairStudios.map((studio) => (
                  <StudioCard key={studio.slug} studio={studio} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newark Cluster */}
        {newarkStudios.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-semibold text-[var(--color-navy)]">
                  Newark
                </h2>
                <span className="text-sm text-[var(--color-gray)]">
                  {newarkStudios.length} studios
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newarkStudios.map((studio) => (
                  <StudioCard key={studio.slug} studio={studio} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Kearny Cluster */}
        {kearnyStudios.length > 0 && (
          <section className="py-12">
            <div className="container">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-semibold text-[var(--color-navy)]">
                  Kearny
                </h2>
                <span className="text-sm text-[var(--color-gray)]">
                  {kearnyStudios.length} studios
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {kearnyStudios.map((studio) => (
                  <StudioCard key={studio.slug} studio={studio} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* North Jersey */}
        {northJerseyStudios.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-semibold text-[var(--color-navy)]">
                  North Jersey
                </h2>
                <span className="text-sm text-[var(--color-gray)]">
                  {northJerseyStudios.length} studios
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {northJerseyStudios.map((studio) => (
                  <StudioCard key={studio.slug} studio={studio} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Central Jersey */}
        {centralJerseyStudios.length > 0 && (
          <section className="py-12">
            <div className="container">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-semibold text-[var(--color-navy)]">
                  Central Jersey
                </h2>
                <span className="text-sm text-[var(--color-gray)]">
                  {centralJerseyStudios.length} studios
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {centralJerseyStudios.map((studio) => (
                  <StudioCard key={studio.slug} studio={studio} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* South Jersey */}
        {southJerseyStudios.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-semibold text-[var(--color-navy)]">
                  South Jersey
                </h2>
                <span className="text-sm text-[var(--color-gray)]">
                  {southJerseyStudios.length} studios
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {southJerseyStudios.map((studio) => (
                  <StudioCard key={studio.slug} studio={studio} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other Studios */}
        {otherStudios.length > 0 && (
          <section className="py-12">
            <div className="container">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-semibold text-[var(--color-navy)]">
                  More Studios
                </h2>
                <span className="text-sm text-[var(--color-gray)]">
                  {otherStudios.length} studios
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {otherStudios.map((studio) => (
                  <StudioCard key={studio.slug} studio={studio} />
                ))}
                {/* For Studio Owners Section */}
                <section className="py-20 bg-[var(--color-navy)]">
                  <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                      <h2 className="text-3xl font-bold text-white mb-6">
                        For Studio Owners
                      </h2>
                      <p className="text-white/80 text-lg mb-8">
                        Running a studio means wearing a lot of hats. Client intake, scope management,
                        case studies that never get written. I put together a free playbook on how AI
                        can help with the 70% of your time that goes to admin instead of creating.
                      </p>
                      <div className="flex flex-wrap gap-4 justify-center">
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
                          href="mailto:jai@chaiwithjai.com?subject=Add%20my%20studio%20to%20the%20directory"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
                        >
                          Add Your Studio
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        )}


        {/* Quick Stats */}
        <section className="py-12">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[var(--color-orange)] mb-2">32</div>
                <p className="text-[var(--color-gray)]">Studios on NJ Film Commission list</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[var(--color-orange)] mb-2">{studios.length}</div>
                <p className="text-[var(--color-gray)]">Featured in this directory</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[var(--color-orange)] mb-2">5</div>
                <p className="text-[var(--color-gray)]">Major NJ regions covered</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[var(--color-orange)] mb-2">Free</div>
                <p className="text-[var(--color-gray)]">To browse and use</p>
              </div>
            </div>
          </div>
        </section>

        {/* Source Attribution */}
        <section className="py-8 border-t border-gray-200">
          <div className="container">
            <p className="text-sm text-[var(--color-gray)] text-center">
              Studio information sourced from the{' '}
              <a
                href="https://www.nj.gov/njfilm/production-nj-studios.shtml"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-orange)] hover:underline"
              >
                NJ Motion Picture & Television Commission
              </a>
              . Last updated January 2026.
            </p>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
