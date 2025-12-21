'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-[var(--color-cream)]/90 backdrop-blur-xl border-b border-[var(--color-gray-200)]/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Works Link */}
        <Link
          href="/works"
          className={`text-sm font-medium tracking-tight transition-all duration-200 ${
            pathname === '/works'
              ? 'text-[var(--color-orange)]'
              : 'text-[var(--color-gray-700)] hover:text-[var(--color-dark)]'
          }`}
        >
          Works
        </Link>

        {/* Logo */}
        <Link href="/" className="text-center group transition-transform duration-200 hover:scale-[1.02]">
          <div className="text-[var(--color-orange)] text-base font-semibold leading-tight tracking-tight">
            Princeton
          </div>
          <div className="text-[var(--color-orange)] text-base italic font-serif leading-tight">
            Idea Exchange
          </div>
        </Link>

        {/* Playground Link */}
        <Link
          href="/playground"
          className={`text-sm font-medium tracking-tight transition-all duration-200 ${
            pathname === '/playground'
              ? 'text-[var(--color-orange)]'
              : 'text-[var(--color-gray-700)] hover:text-[var(--color-dark)]'
          }`}
        >
          Playground
        </Link>
      </div>
    </nav>
  );
}
