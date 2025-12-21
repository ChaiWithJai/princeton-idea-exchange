import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="text-center group">
          <div className="text-[var(--color-orange)] font-medium leading-tight">
            Princeton
          </div>
          <div className="text-[var(--color-orange)] italic font-serif leading-tight">
            Idea Exchange
          </div>
        </Link>

        {/* Copyright */}
        <p className="text-[var(--color-gray)] text-sm">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
