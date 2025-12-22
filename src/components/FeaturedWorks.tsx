import Image from 'next/image';
import Link from 'next/link';

const explorations = [
  {
    title: 'An Encounter with Bholenath',
    subtitle: 'Dissolving the Self',
    image: '/images/cAZDJDtMvh12SzPh8Nc9eFQQA.webp',
    href: '/playground',
  },
  {
    title: 'Tantra & Bhakti of Hanuman',
    subtitle: 'Devotion as Technology',
    image: '/images/uAVzMuxreJbNlZA9NZW8StqkrA.webp',
    href: '/playground',
  },
  {
    title: "Sugriva's Atlas",
    subtitle: 'Mapping the Unknown',
    image: '/images/Ix3P84EZD3M1XgzTyDcLtuP8E.png',
    href: '/playground',
  },
];

export default function FeaturedWorks() {
  return (
    <section className="py-20 md:py-28 bg-[#141414] text-white relative overflow-hidden">
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-[#c74a15] font-semibold mb-3">
            The Playground
          </p>
          <h2 className="text-white mb-5">
            Models of Understanding
          </h2>
          <p className="text-[#b3b3b3] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Deep explorations where Eastern philosophy meets computational thinking.
            Each piece is a framework for seeing differently.
          </p>
        </div>

        {/* Explorations Grid - Clean cards, no overlay on images */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {explorations.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group block"
            >
              <div className="relative rounded-lg overflow-hidden bg-[#1a1a1a] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                {/* Image - NO overlay */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Content - Below image, not overlapping */}
                <div className="p-4 md:p-5 bg-[#1a1a1a]">
                  <p className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-[#c74a15] font-semibold mb-1">
                    {item.subtitle}
                  </p>
                  <h4 className="text-white text-base md:text-lg font-semibold leading-tight group-hover:text-[#c74a15] transition-colors">
                    {item.title}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/playground"
            className="inline-flex items-center gap-3 text-white hover:text-[#c74a15] transition-colors group text-sm font-medium"
          >
            <span>Explore all 14 pieces</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
