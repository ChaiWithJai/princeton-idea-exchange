import Image from 'next/image';

const cornerImages = [
  {
    src: '/images/lWqR2eOyU2CsU2ywbElKmr60eE8.png',
    position: 'top-20 left-8 lg:left-16',
    size: 'w-36 h-44 md:w-44 md:h-52 lg:w-52 lg:h-60',
    rotate: '-rotate-6',
    alt: 'Speaking at UN',
    priority: true,
  },
  {
    src: '/images/TKGvRBMgNIaA7NyVxsw4nQzdy0.png',
    position: 'top-16 right-8 lg:right-16',
    size: 'w-40 h-48 md:w-48 md:h-56 lg:w-56 lg:h-64',
    rotate: 'rotate-6',
    alt: 'NY Stock Exchange',
    priority: true,
  },
  {
    src: '/images/F3Wl1jnXNFFzJehaUAChhXgEqzo.png',
    position: 'bottom-36 left-12 lg:left-24',
    size: 'w-40 h-32 md:w-48 md:h-40 lg:w-56 lg:h-44',
    rotate: '-rotate-3',
    alt: 'Team Photo',
    priority: false,
  },
  {
    src: '/images/AuvtSc9m9fKtGyUcm2OJmdMbHXk.png',
    position: 'bottom-32 right-12 lg:right-20',
    size: 'w-36 h-28 md:w-44 md:h-36 lg:w-52 lg:h-40',
    rotate: 'rotate-3',
    alt: 'Meeting',
    priority: false,
  },
];

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Corner Images */}
      <div className="absolute inset-0 pointer-events-none">
        {cornerImages.map((img, index) => (
          <div
            key={index}
            className={`absolute ${img.position} ${img.size} ${img.rotate} hidden lg:block`}
          >
            <div
              className="relative w-full h-full rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 25px 60px rgba(0,0,0,0.15), 0 10px 25px rgba(0,0,0,0.1)',
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={img.priority}
                className="object-cover"
                sizes="(max-width: 1024px) 0px, 224px"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto text-center relative z-30 pt-20 md:pt-28 lg:pt-32">
        {/* Badge */}
        <p className="text-sm text-[var(--color-gray-500)] tracking-[0.15em] uppercase mb-8">
          Princeton Idea Exchange
        </p>

        {/* Main Headline */}
        <h1 className="mb-6 md:mb-8 text-[var(--color-navy)]">
          <span className="block">Ship AI.</span>
          <span className="block">This Weekend.</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-[var(--color-gray-700)] mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">
          Stop learning about AI. Start working with AI.
          <span className="block mt-2 font-serif italic text-[var(--color-navy)]">
            Working prototypes. Fundable MVPs. Shipped in weeks.
          </span>
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:jai@chaiwithjai.com"
            className="btn-primary text-base"
          >
            Work With Us
          </a>
          <a
            href="#works"
            className="btn-secondary text-base inline-flex items-center justify-center gap-2"
          >
            See Our Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
