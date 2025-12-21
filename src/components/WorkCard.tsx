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
      className="group block bg-white rounded-xl overflow-hidden border border-[var(--color-gray-100)] hover:border-[var(--color-gray-200)] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
    >
      {/* Horizontal Layout: Image Left, Content Right */}
      <div className="flex flex-col md:flex-row">
        {/* Image - Left side */}
        <div className="relative w-full md:w-2/5 h-48 md:h-auto md:min-h-[260px] overflow-hidden flex-shrink-0 bg-[#f0eeeb]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>

        {/* Content - Right side */}
        <div className="p-5 md:p-6 flex flex-col justify-between flex-1">
          <div>
            <h5 className="mb-3 text-lg md:text-xl transition-colors duration-200 group-hover:text-[var(--color-orange)]">
              {title}
            </h5>
            <p className="text-[#6b6b6b] text-sm leading-relaxed mb-4">
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
