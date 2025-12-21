import Image from 'next/image';

// 4 corner images matching original - rounded corners, tilted
const cornerImages = [
  {
    src: '/images/lWqR2eOyU2CsU2ywbElKmr60eE8.png',
    position: 'top-16 left-4 md:left-12',
    size: 'w-40 h-48 md:w-52 md:h-60',
    rotate: '-rotate-6',
    alt: 'Speaking at UN',
  },
  {
    src: '/images/TKGvRBMgNIaA7NyVxsw4nQzdy0.png',
    position: 'top-12 right-4 md:right-12',
    size: 'w-44 h-52 md:w-56 md:h-64',
    rotate: 'rotate-6',
    alt: 'NY Stock Exchange',
  },
  {
    src: '/images/F3Wl1jnXNFFzJehaUAChhXgEqzo.png',
    position: 'bottom-32 left-8 md:left-20',
    size: 'w-44 h-36 md:w-56 md:h-44',
    rotate: '-rotate-3',
    alt: 'Team Photo',
  },
  {
    src: '/images/AuvtSc9m9fKtGyUcm2OJmdMbHXk.png',
    position: 'bottom-28 right-8 md:right-16',
    size: 'w-40 h-32 md:w-52 md:h-40',
    rotate: 'rotate-3',
    alt: 'Meeting',
  },
];

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 pb-8 px-4 relative overflow-hidden">
      {/* Corner Images - Rounded, Tilted */}
      <div className="absolute inset-0 pointer-events-none">
        {cornerImages.map((img, index) => (
          <div
            key={index}
            className={`absolute ${img.position} ${img.size} ${img.rotate} hidden lg:block transition-transform duration-500 hover:scale-105`}
          >
            <div
              className="relative w-full h-full rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 20px 50px rgba(0,0,0,0.2), 0 10px 25px rgba(0,0,0,0.15)',
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 224px"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto text-center relative z-30 pt-16 md:pt-24">
        {/* P.I.E. Badge Text */}
        <p className="text-sm md:text-base text-[var(--color-gray)] tracking-wider mb-6">
          — This is P.I.E. —
        </p>

        {/* Main Headline */}
        <h1 className="mb-4 md:mb-6">
          <span className="block">Ship AI.</span>
          <span className="block">This Weekend.</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-[var(--color-gray)] mb-8 md:mb-10 font-serif italic">
          Stop learning about AI. Start working with AI.
        </p>

        {/* CTA Button */}
        <a
          href="#works"
          className="btn-primary text-base md:text-lg inline-flex items-center gap-2"
        >
          See Our Work
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
