import Navigation from '@/components/Navigation';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Image from 'next/image';

// Complete Playground inventory - ALL 14 items
const playgroundItems = [
  {
    title: 'Tantra & Bhakti of Hanuman',
    image: '/images/uAVzMuxreJbNlZA9NZW8StqkrA.webp',
  },
  {
    title: "Sugriva's Atlas",
    image: '/images/Ix3P84EZD3M1XgzTyDcLtuP8E.png',
  },
  {
    title: 'Attention is all you need',
    image: '/images/7jTFpNZDmhPAYMTo83wcMvmWITY.png',
  },
  {
    title: 'An Encounter with Bholenath',
    image: '/images/cAZDJDtMvh12SzPh8Nc9eFQQA.webp',
  },
  {
    title: 'AI Stack',
    image: '/images/4PSeGfWoLaYSwmokODBf7011Eg.png',
  },
  {
    title: 'Polyvagal Theory',
    image: '/images/5XRusc6uePqO8imK6sstkFHtrcU.webp',
  },
  {
    title: 'The Mother Goddess Society',
    image: '/images/NNas5W5pxmLAmH9dPYD4yLiYWo.png',
  },
  {
    title: 'Reverse-engineering Trauma',
    image: '/images/96mncTpGnFgqJywBnVJwez177AU.webp',
  },
  {
    title: 'AI is Your Wildcard',
    image: '/images/FMtrLvWTU9AOreaTETgbNbKRQG4.webp',
  },
  {
    title: 'The Answer is Always in The Work You\'re Avoiding',
    image: '/images/O4pJxQXvSsWlDifoKDATUiS50o.webp',
  },
  {
    title: 'AI Native Systems',
    image: '/images/pFQc7zcbvnvE89cDSlU3a6Lndk.webp',
  },
  {
    title: 'Engineering Arbitrage',
    image: '/images/4ZDDWdmtz2iA9jVibc3ms63lY.webp',
  },
  {
    title: 'Just Ship It',
    image: '/images/SHFBLYyU6PkiPfvKh8Lwh0Z7u2U.png',
  },
  {
    title: 'The Year is 2030',
    image: '/images/KO41RA0HjXQn2nw2ObilQfTzDY.png',
  },
];

export default function PlaygroundPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32">
        <section className="py-12">
          <div className="container">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="mb-4">Playground</h1>
              <p className="text-[var(--color-gray)] text-lg max-w-2xl mx-auto">
                Experimental tracks and side projects designed to push boundaries
                for emerging ventures.
              </p>
            </div>

            {/* Staggered Masonry Grid - 3 columns with varying heights */}
            <div className="max-w-6xl mx-auto px-4">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {playgroundItems.map((item, index) => {
                  // Vary heights for visual interest
                  const heights = ['h-[380px]', 'h-[320px]', 'h-[440px]', 'h-[360px]', 'h-[400px]'];
                  const height = heights[index % heights.length];

                  return (
                    <div
                      key={index}
                      className={`group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer break-inside-avoid mb-6 ${height}`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 left-4 right-4">
                        <h3 className="text-white text-lg font-serif italic drop-shadow-lg">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Love what you see CTA */}
            <div className="text-center mt-24">
              <h4 className="text-xl font-serif italic text-[var(--color-navy)] mb-4">
                Love what you see?
              </h4>
              <a
                href="mailto:jai@chaiwithjai.com"
                className="btn-primary"
              >
                Let&apos;s connect!
              </a>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
