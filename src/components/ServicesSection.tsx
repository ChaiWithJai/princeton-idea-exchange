'use client';

import Image from 'next/image';

const services = [
  'GTM Engineering',
  'AI Prototyping',
  'Fundable MVPs',
  'Pitch Engineering',
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Services Tags - Horizontal Scroll on Mobile, Wrap on Desktop */}
          <div className="relative order-2 lg:order-1">
            {/* Mobile: Horizontal Scroll */}
            <div className="lg:hidden overflow-hidden">
              <div className="flex gap-3 animate-scroll-x">
                {[...services, ...services].map((service, index) => (
                  <span
                    key={index}
                    className="flex-shrink-0 bg-[var(--color-navy)] text-white text-sm font-medium py-2.5 px-5 rounded-full whitespace-nowrap"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Desktop: Wrapped Grid */}
            <div className="hidden lg:flex flex-wrap gap-3">
              {services.map((service, index) => (
                <span
                  key={index}
                  className="bg-[var(--color-navy)] text-white text-base font-medium py-3 px-6 rounded-full hover:bg-[var(--color-orange)] transition-all duration-300 cursor-default"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            {/* Decorative Icon */}
            <div className="relative w-16 h-16 mb-4">
              <Image
                src="/images/fzdMmD8GaUvrvUMOv63oXQwfeo.png"
                alt="P.I.E. Icon"
                fill
                className="object-contain"
                sizes="64px"
              />
            </div>
            <h2 className="mb-4 md:mb-6">What we bring to the table</h2>
            <p className="text-[var(--color-gray)] text-base md:text-lg leading-relaxed">
              Most consultants give you a deck. We give you a demo.
              <br />
              <span className="font-semibold text-[var(--color-dark)]">
                Working prototypes. Fundable MVPs. Shipped in weeks.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
