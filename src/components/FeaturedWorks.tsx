'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Playground items - same content as carousel
const carouselItems = [
  {
    title: 'An Encounter with Bholenath',
    image: '/images/cAZDJDtMvh12SzPh8Nc9eFQQA.webp',
    href: '/playground',
  },
  {
    title: 'Tantra & Bhakti of Hanuman',
    image: '/images/uAVzMuxreJbNlZA9NZW8StqkrA.webp',
    href: '/playground',
  },
  {
    title: 'Sugriva\'s Atlas',
    image: '/images/Ix3P84EZD3M1XgzTyDcLtuP8E.png',
    href: '/playground',
  },
];

export default function FeaturedWorks() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section className="py-12 md:py-16 overflow-hidden">
      {/* Telescope Icon */}
      <div className="flex justify-center mb-4">
        <div className="relative w-16 h-16">
          <Image
            src="/images/fzdMmD8GaUvrvUMOv63oXQwfeo.png"
            alt="Telescope"
            fill
            className="object-contain"
            sizes="64px"
          />
        </div>
      </div>

      <div className="container mb-8">
        <h2 className="text-center">Sneak peak of our works</h2>
      </div>

      {/* 3D Carousel - Center card larger */}
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 md:gap-6">
          {/* Left partial card */}
          <div className="hidden md:block w-20 h-72 flex-shrink-0 opacity-40">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-200">
              <Image
                src={carouselItems[2].image}
                alt=""
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
          </div>

          {/* Side card - left */}
          <Link
            href={carouselItems[0].href}
            className="relative w-40 h-64 md:w-48 md:h-80 flex-shrink-0 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 group"
          >
            <Image
              src={carouselItems[0].image}
              alt={carouselItems[0].title}
              fill
              className="object-cover"
              sizes="192px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute top-3 left-3 right-3">
              <p className="text-white text-sm font-serif italic drop-shadow-lg">
                {carouselItems[0].title}
              </p>
            </div>
          </Link>

          {/* Center card - LARGER */}
          <Link
            href={carouselItems[1].href}
            className="relative w-52 h-80 md:w-64 md:h-96 flex-shrink-0 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 z-10 group"
          >
            <Image
              src={carouselItems[1].image}
              alt={carouselItems[1].title}
              fill
              className="object-cover"
              sizes="256px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute top-4 left-4 right-4">
              <p className="text-white text-base md:text-lg font-serif italic drop-shadow-lg">
                {carouselItems[1].title}
              </p>
            </div>
          </Link>

          {/* Side card - right */}
          <Link
            href={carouselItems[2].href}
            className="relative w-40 h-64 md:w-48 md:h-80 flex-shrink-0 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 group"
          >
            <Image
              src={carouselItems[2].image}
              alt={carouselItems[2].title}
              fill
              className="object-cover"
              sizes="192px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute top-3 left-3 right-3">
              <p className="text-white text-sm font-serif italic drop-shadow-lg">
                {carouselItems[2].title}
              </p>
            </div>
          </Link>

          {/* Right partial card */}
          <div className="hidden md:block w-20 h-72 flex-shrink-0 opacity-40">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-200">
              <Image
                src={carouselItems[0].image}
                alt=""
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
          </div>
        </div>

        {/* Page Dot Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? 'bg-[var(--color-dark)]'
                  : 'bg-[var(--color-gray)]/30 hover:bg-[var(--color-gray)]/50'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
