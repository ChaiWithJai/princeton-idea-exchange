import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { models, modelsCollection } from '@/data/models';
import { textColors } from '@/components/pipeline';

export const metadata: Metadata = {
  title: 'Playground | Princeton Idea Exchange',
  description: 'Deep explorations where Eastern philosophy meets computational thinking. 14 models of understanding that reveal new frameworks for seeing differently.',
  openGraph: {
    title: 'Playground | Princeton Idea Exchange',
    description: 'Deep explorations where Eastern philosophy meets computational thinking.',
  },
};

export default function PlaygroundPage() {
  // Group models by category
  const categories = modelsCollection.categories.sort((a, b) => a.order - b.order);

  return (
    <>
      <Navigation />
      <main className="min-h-screen" style={{ background: 'linear-gradient(180deg, #0d1520 0%, #1a1a2e 50%, #16213e 100%)' }}>
        {/* Hero Header - Warm and inviting */}
        <section className="pt-32 pb-16 px-4 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase font-medium mb-4" style={{ color: textColors.amberTint }}>
              The Playground
            </p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif italic mb-6 leading-tight">
              Models of Understanding
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: textColors.primary }}>
              Deep explorations where Eastern philosophy meets computational thinking.
              <span className="block mt-2" style={{ color: textColors.secondary }}>Each piece is a framework for seeing differently.</span>
            </p>
          </div>
        </section>

        {/* Content Rows - Cooper-style: Clean, honest, delightful */}
        <section className="pb-24 px-4 md:px-12 lg:px-16">
          {categories.map((category) => {
            const categoryModels = models.filter(m => m.category === category.id);
            return (
              <div key={category.id} className="mb-16 md:mb-20 max-w-7xl mx-auto">
                {/* Row Header - Warm, inviting */}
                <div className="mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-serif italic text-white mb-1">
                    {category.title}
                  </h2>
                  <p className="text-sm" style={{ color: textColors.secondary }}>
                    {category.description}
                  </p>
                </div>

                {/* Cards Grid - Clean, no overlay on images */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {categoryModels.map((model) => (
                    <Link
                      key={model.id}
                      href={`/playground/${model.slug}`}
                      className="group block"
                    >
                      {/* Card with sophisticated hover transitions */}
                      <div className="relative">
                        {/* Image Container with layered effects */}
                        <div className="relative aspect-[3/4] overflow-hidden rounded-xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-1.5 group-hover:shadow-[0_25px_60px_-12px_rgba(251,191,36,0.25)]">
                          <Image
                            src={model.image}
                            alt={model.title}
                            fill
                            className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-110 group-hover:saturate-[1.1]"
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                          {/* Subtle vignette - enhances art */}
                          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)] pointer-events-none" />

                          {/* Gradient overlay that fades on hover - reveals more of the image */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />

                          {/* Warm glow border - appears smoothly */}
                          <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-amber-400/50 transition-all duration-500" />

                          {/* Corner accent - subtle "explore" cue */}
                          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/0 group-hover:bg-amber-400/90 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100">
                            <svg className="w-4 h-4 text-[#0d1520]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>

                          {/* Difficulty badge */}
                          <div className="absolute bottom-3 left-3 px-2 py-1 rounded text-[10px] font-medium bg-black/40 backdrop-blur-sm" style={{ color: textColors.primary }}>
                            {model.ux.readTime} min
                          </div>
                        </div>

                        {/* Text with refined transitions */}
                        <div className="pt-4 pb-2">
                          <p className="text-[10px] md:text-xs tracking-[0.15em] uppercase font-medium mb-1.5 transition-all duration-300 group-hover:text-amber-300 group-hover:tracking-[0.2em]" style={{ color: textColors.secondary }}>
                            {model.subtitle}
                          </p>
                          <h3 className="text-sm md:text-base font-medium leading-snug transition-all duration-300 group-hover:text-white" style={{ color: textColors.primary }}>
                            {model.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA Section - Warm invitation */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-serif italic mb-4">
              Want to build something like this?
            </h2>
            <p className="text-base md:text-lg mb-10" style={{ color: textColors.secondary }}>
              These frameworks power real products. Let&apos;s apply them to your idea.
            </p>
            <a
              href="mailto:jai@chaiwithjai.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-[0_10px_40px_rgba(251,191,36,0.3)] hover:-translate-y-0.5"
            >
              Work With Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
