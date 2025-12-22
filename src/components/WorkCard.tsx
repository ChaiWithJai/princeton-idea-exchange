import Image from 'next/image';
import Link from 'next/link';

interface WorkCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
}

export default function WorkCard({ title, description, tags, image, href }: WorkCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl overflow-hidden border border-[var(--color-gray-100)] hover:border-[var(--color-orange)]/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative w-full md:w-2/5 h-48 md:h-auto md:min-h-[280px] overflow-hidden flex-shrink-0 bg-[var(--color-cream-dark)]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
          <div>
            <h5 className="mb-3 text-lg md:text-xl transition-colors duration-200 group-hover:text-[var(--color-orange)]">
              {title}
            </h5>
            <p className="text-[var(--color-gray-500)] text-sm md:text-base leading-relaxed mb-5">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="tag text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
