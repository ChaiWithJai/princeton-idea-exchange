import Image from 'next/image';

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24 bg-[#1a1a2e] text-white relative overflow-hidden">
      {/* Grid Background - perspective grid effect */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(30deg)',
          transformOrigin: 'center top',
        }}
      />

      {/* Fade overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a2e] to-transparent" />

      <div className="container relative z-10">
        {/* Centered Text Content */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-white mb-4 md:mb-6">Behind the curtain</h2>
          <p className="text-gray-300 mb-6 text-base md:text-lg">
            No pretty pixels. No 90-day strategy decks.
          </p>
          <div className="space-y-4 text-gray-400 text-sm md:text-base">
            <p>
              We build MVPs that get funded and demos that close deals.
              Theramotive secured $320K in seed funding. QEDC shipped curriculum
              that gets entrepreneurs from stuck to shipping in weeks.
            </p>
            <p className="font-medium text-white">
              The work has to work.
            </p>
          </div>
          <a
            href="mailto:jai@chaiwithjai.com"
            className="btn-primary mt-8 inline-block"
          >
            Work With Us
          </a>
        </div>

        {/* Team Photo - Tilted card with badge */}
        <div className="flex justify-center">
          <div className="group">
            {/* Tilted Photo Frame */}
            <div className="relative -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-52 h-64 md:w-60 md:h-72 rounded-2xl overflow-hidden shadow-2xl bg-white p-1">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/MECUsk7fOYKMoy1BZbdF8GsY.png"
                    alt="Jai"
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                </div>
              </div>
              {/* Name Badge - Blue pill */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#1e3a5f] text-white px-4 py-2 rounded-full text-sm whitespace-nowrap shadow-lg">
                Jai (Agent Engineer)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
