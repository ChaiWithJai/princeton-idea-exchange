import Navigation from '@/components/Navigation';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Image from 'next/image';

// Playground items matching original Framer site - staggered masonry layout
const playgroundItems = [
  {
    title: 'Tantra & Bhakti of Hanuman',
    image: '/images/uAVzMuxreJbNlZA9NZW8StqkrA.webp',
    size: 'tall', // Left column, tall
  },
  {
    title: "Sugriva's Atlas",
    image: '/images/Ix3P84EZD3M1XgzTyDcLtuP8E.png',
    size: 'medium', // Center, medium height, offset down
  },
  {
    title: 'Attention is all you need',
    image: '/images/7jTFpNZDmhPAYMTo83wcMvmWITY.png',
    size: 'square', // Right, square
  },
  {
    title: 'An Encounter with Bholenath',
    image: '/images/cAZDJDtMvh12SzPh8Nc9eFQQA.webp',
    size: 'tall', // Left column row 2, tall
  },
  {
    title: 'AI Stack',
    image: '/images/4PSeGfWoLaYSwmokODBf7011Eg.png',
    size: 'medium', // Center row 2
  },
  {
    title: 'Polyvagal Theory',
    image: '/images/5XRusc6uePqO8imK6sstkFHtrcU.webp',
    size: 'square', // Right row 2
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

            {/* Staggered Masonry Grid - matching original Framer layout */}
            <div className="max-w-6xl mx-auto px-4">
              {/* Row 1 */}
              <div className="flex flex-col md:flex-row gap-6 mb-6 items-start">
                {/* Left - Tall card */}
                <div className="w-full md:w-1/3 group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                  <div className="relative h-[500px]">
                    <Image
                      src={playgroundItems[0].image}
                      alt={playgroundItems[0].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 right-4">
                      <h3 className="text-white text-lg font-serif italic drop-shadow-lg">
                        {playgroundItems[0].title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Center - Medium card, offset down */}
                <div className="w-full md:w-1/3 md:mt-24 group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                  <div className="relative h-[380px]">
                    <Image
                      src={playgroundItems[1].image}
                      alt={playgroundItems[1].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 right-4">
                      <h3 className="text-white text-lg font-serif italic drop-shadow-lg">
                        {playgroundItems[1].title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Right - Square card */}
                <div className="w-full md:w-1/3 group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                  <div className="relative h-[320px]">
                    <Image
                      src={playgroundItems[2].image}
                      alt={playgroundItems[2].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 right-4">
                      <h3 className="text-white text-lg font-serif italic drop-shadow-lg">
                        {playgroundItems[2].title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Left - Tall card */}
                <div className="w-full md:w-1/3 group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                  <div className="relative h-[480px]">
                    <Image
                      src={playgroundItems[3].image}
                      alt={playgroundItems[3].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 right-4">
                      <h3 className="text-white text-lg font-serif italic drop-shadow-lg">
                        {playgroundItems[3].title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Center - Medium card, offset down */}
                <div className="w-full md:w-1/3 md:mt-16 group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                  <div className="relative h-[300px]">
                    <Image
                      src={playgroundItems[4].image}
                      alt={playgroundItems[4].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 right-4">
                      <h3 className="text-white text-lg font-serif italic drop-shadow-lg">
                        {playgroundItems[4].title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Right - Square card, offset more */}
                <div className="w-full md:w-1/3 md:mt-28 group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                  <div className="relative h-[320px]">
                    <Image
                      src={playgroundItems[5].image}
                      alt={playgroundItems[5].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 right-4">
                      <h3 className="text-white text-lg font-serif italic drop-shadow-lg">
                        {playgroundItems[5].title}
                      </h3>
                    </div>
                  </div>
                </div>
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
