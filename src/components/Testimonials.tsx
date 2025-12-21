'use client';

import Image from 'next/image';

const testimonials = [
  {
    quote:
      '"Jai has a unique ability to absorb a chaotic, complex situation and instantly map it to a clear plan. He didn\'t just recommend tools; he implemented a full-scale operating system for our 20-person intern team, turning them from students into a productive engineering force. His guidance was the foundation that allowed us to build our IP and secure our initial funding."',
    name: 'Dr. Lola Omishore PT, DPT, OCS, ATC',
    title: 'Founder & CEO, Theramotive',
  },
  {
    quote:
      '"Being new to AI and wanting to up my knowledge to get the edge on my industry, Jai has been instrumental on breaking it down for me. AI is not for everyone, but AI IS FOR everyone. You just need to see past what the eyes call "reality". Very excited to continue my journey into a deeper understanding and implementing AI into my business and launching new businesses."',
    name: 'Milton Mendez',
    title: 'Owner, Mendez Printing Inc.',
  },
  {
    quote:
      '"Hi, my name is Samina Qureshi. I\'ve owned Community Acupuncture in Queens for 17 years. I took Jai\'s AI series to improve our practice numbers, but also because I have many personal goals as a multi-potentialite. Jai\'s class is helping me organize my projects, automate processes, and stay focused instead of pulled in too many directions. Now I can be more creative and live a lifestyle that balances work, home, and health. You don\'t know what you don\'t know until someone shows you the possibilities—Jai did that for me. I highly recommend working with him."',
    name: 'Samina Quraishi',
    title: 'Owner, Doctor of Acupuncture',
  },
];

const brandLogos = [
  { src: '/images/ufSOhcq56pNtkQS8ATUmaqCtjsA.png', alt: 'InstaCart' },
  { src: '/images/6Z88ezr8bmn5kJSBny3jUeoNE.png', alt: 'EDC' },
  { src: '/images/kvukNCFf46YgqgSMaEqHRlQBs.png', alt: 'SourceGo' },
  { src: '/images/NMUMwuTqHv5qNxX9L7kJ2s17EU.png', alt: 'Bryant Park' },
  { src: '/images/EexYSNQL8r620LfGgwaUe01AQ.png', alt: 'Partner' },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-center mb-10 md:mb-12">Kind words from Clients</h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-[var(--color-gray)] text-sm leading-relaxed mb-5 italic">
                {testimonial.quote}
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-[var(--color-dark)] text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-[var(--color-gray)]">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Logos with Infinite Scroll */}
        <div>
          <h3 className="text-center text-lg md:text-xl font-serif italic text-[var(--color-navy)] mb-8">
            Brands we&apos;ve Worked With
          </h3>

          {/* Marquee Container */}
          <div className="relative overflow-hidden py-4">
            {/* Gradient Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-cream)] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-cream)] to-transparent z-10" />

            {/* Scrolling Track */}
            <div className="flex animate-marquee">
              {/* First set of logos */}
              {[...brandLogos, ...brandLogos, ...brandLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 md:mx-12 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                >
                  <div className="relative h-10 md:h-12 w-32 md:w-40">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      sizes="160px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
