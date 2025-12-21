import Image from 'next/image';

const contactLinks = [
  {
    label: 'Email',
    value: 'jai@chaiwithjai.com',
    href: 'mailto:jai@chaiwithjai.com',
  },
  {
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/chaiwithjai/',
    href: 'https://www.linkedin.com/in/chaiwithjai/',
  },
  {
    label: 'Website',
    value: 'https://chaiwithjai.com/',
    href: 'https://chaiwithjai.com/',
  },
];

export default function CTASection() {
  return (
    <section className="py-20 text-center">
      <div className="container">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative w-16 h-16">
            <Image
              src="/images/fzdMmD8GaUvrvUMOv63oXQwfeo.png"
              alt="P.I.E. Icon"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <h2 className="mb-4">Ready to ship?</h2>
        <p className="text-[var(--color-gray)] text-lg mb-10">
          Stop learning about AI. Start working with AI.
        </p>

        {/* Contact Links */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition-all min-w-[280px]"
            >
              <span className="text-[var(--color-gray)] text-sm font-medium">
                {link.label}
              </span>
              <span className="flex-1 text-[var(--color-dark)] text-sm truncate group-hover:text-[var(--color-orange)] transition-colors">
                {link.value}
              </span>
              <svg
                className="w-4 h-4 text-[var(--color-gray)] group-hover:text-[var(--color-orange)] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
