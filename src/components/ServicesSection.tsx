'use client';

import Image from 'next/image';

const services = [
  'GTM Engineering',
  'Branding',
  'System Audit',
  'User Interface Design',
  'Competitive Intelligence',
  'User Experience Design',
  'User Research',
  'Campaign Design',
  'Design Systems',
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
                    className="flex-shrink-0 text-base text-[var(--color-gray)] font-medium py-2 px-4 rounded-full border border-[var(--color-gray)]/20 whitespace-nowrap"
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
                  className="text-lg text-[var(--color-gray)] font-medium py-2 px-5 rounded-full border border-[var(--color-gray)]/20 hover:border-[var(--color-orange)] hover:text-[var(--color-orange)] hover:bg-[var(--color-orange)]/5 transition-all duration-300 cursor-default"
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
              Designing strategy to help you meet the moment.
              <br />
              <span className="font-semibold text-[var(--color-dark)]">
                We focus on action, not theory.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
