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
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
    >
      {/* Horizontal Layout: Image Left, Content Right */}
      <div className="flex flex-col md:flex-row">
        {/* Image - Left side */}
        <div className="relative w-full md:w-2/5 h-48 md:h-auto md:min-h-[280px] overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-[var(--color-navy)]/0 group-hover:bg-[var(--color-navy)]/10 transition-colors duration-300" />
        </div>

        {/* Content - Right side */}
        <div className="p-5 md:p-6 flex flex-col justify-between flex-1">
          <div>
            <h5 className="mb-3 text-lg md:text-xl group-hover:text-[var(--color-orange)] transition-colors duration-300">
              {title}
            </h5>
            <p className="text-[var(--color-gray)] text-sm leading-relaxed mb-4">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="tag text-xs transition-colors duration-300 group-hover:bg-[var(--color-navy)]"
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
