'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Works Link */}
        <Link
          href="/works"
          className={`text-base font-medium transition-colors ${
            pathname === '/works' ? 'text-[var(--color-orange)]' : 'text-[var(--color-dark)] hover:text-[var(--color-orange)]'
          }`}
        >
          Works
        </Link>

        {/* Logo */}
        <Link href="/" className="text-center group">
          <div className="text-[var(--color-orange)] text-lg font-medium leading-tight">
            Princeton
          </div>
          <div className="text-[var(--color-orange)] text-lg italic font-serif leading-tight">
            Idea Exchange
          </div>
        </Link>

        {/* Playground Link */}
        <Link
          href="/playground"
          className={`text-base font-medium transition-colors ${
            pathname === '/playground' ? 'text-[var(--color-orange)]' : 'text-[var(--color-dark)] hover:text-[var(--color-orange)]'
          }`}
        >
          Playground
        </Link>
      </div>
    </nav>
  );
}
