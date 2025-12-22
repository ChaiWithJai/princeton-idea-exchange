import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { models, getModelBySlug, getRelatedModels } from '@/data/models';
import {
  pipelineColors,
  pipelineCopy,
  textColors,
  PipelineJourney,
  PipelineSection,
  PipelineSubsection,
  PipelineFactList,
  PipelineQuote,
  PipelineInsight,
  PipelineTag,
  PipelineMisconception,
  PipelineApplication,
  PipelinePractice,
} from '@/components/pipeline';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return models.map((model) => ({
    slug: model.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const model = getModelBySlug(slug);

  if (!model) {
    return { title: 'Model Not Found | Princeton Idea Exchange' };
  }

  return {
    title: `${model.title} | Models of Understanding`,
    description: model.information.summary,
    openGraph: {
      title: `${model.title} - ${model.subtitle}`,
      description: model.information.summary,
      images: [model.image],
    },
  };
}

const categoryColors: Record<string, string> = {
  'eastern-philosophy': 'from-amber-500/20 to-orange-600/20',
  'ai-technology': 'from-blue-500/20 to-cyan-600/20',
  'mind-body': 'from-purple-500/20 to-pink-600/20',
  'shipping-strategy': 'from-emerald-500/20 to-teal-600/20',
};

const categoryLabels: Record<string, string> = {
  'eastern-philosophy': 'Eastern Philosophy',
  'ai-technology': 'AI & Technology',
  'mind-body': 'Mind & Body',
  'shipping-strategy': 'Shipping & Strategy',
};

const difficultyColors: Record<string, string> = {
  beginner: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  intermediate: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  advanced: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
};

export default async function ModelDetailPage({ params }: Props) {
  const { slug } = await params;
  const model = getModelBySlug(slug);

  if (!model) {
    notFound();
  }

  const relatedModels = getRelatedModels(model);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0a0f1a]">
        {/* ════════════════════════════════════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[75vh] flex items-end">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={model.image}
              alt={model.title}
              fill
              className="object-cover object-center"
              priority
            />
            {/* Layered gradients for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/90 via-transparent to-[#0a0f1a]/60" />
            <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[model.category]} opacity-30`} />
            {/* Subtle noise texture */}
            <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-4 md:px-12 lg:px-20 pb-16 pt-32">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <Link
                href="/playground"
                className="inline-flex items-center gap-2 hover:text-amber-400 text-sm mb-8 transition-colors group"
                style={{ color: textColors.secondary }}
              >
                <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Models of Understanding</span>
              </Link>

              {/* Category & Metadata */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-xs tracking-[0.25em] uppercase font-semibold" style={{ color: textColors.amberTint }}>
                  {categoryLabels[model.category]}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${difficultyColors[model.ux.difficulty]}`}>
                  {model.ux.difficulty}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="text-xs font-medium" style={{ color: textColors.secondary }}>
                  {model.ux.readTime} min journey
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white mb-4 leading-[1.1]">
                {model.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-light" style={{ color: textColors.secondary }}>
                {model.subtitle}
              </p>

              {/* Hero Quote */}
              {model.ux.heroQuote && (
                <blockquote className="border-l-2 border-amber-400/40 pl-5 text-lg italic max-w-2xl" style={{ color: textColors.primary }}>
                  &ldquo;{model.ux.heroQuote}&rdquo;
                </blockquote>
              )}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            PIPELINE JOURNEY VISUALIZATION
        ════════════════════════════════════════════════════════════════════ */}
        <section className="py-12 px-4 md:px-12 lg:px-20 border-y border-white/5 bg-[#0a0f1a]/80">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <p className="text-sm tracking-wider uppercase mb-2" style={{ color: textColors.secondary }}>The Journey</p>
              <h2 className="text-xl font-serif italic" style={{ color: textColors.primary }}>From Raw Facts to Lived Wisdom</h2>
            </div>
            <div className="flex justify-center overflow-x-auto pb-4">
              <PipelineJourney />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            STICKY NAVIGATION
        ════════════════════════════════════════════════════════════════════ */}
        <nav className="sticky top-0 z-30 bg-[#0a0f1a]/95 backdrop-blur-md border-b border-white/5">
          <div className="px-4 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto flex gap-1 overflow-x-auto scrollbar-hide py-3">
              {(['data', 'information', 'knowledge', 'wisdom'] as const).map((stage) => (
                <a
                  key={stage}
                  href={`#${stage}`}
                  className="px-4 py-2 text-sm rounded-lg transition-all whitespace-nowrap hover:bg-white/5"
                  style={{ color: pipelineColors[stage].primary }}
                >
                  {pipelineCopy[stage].label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* ════════════════════════════════════════════════════════════════════
            OVERVIEW SECTION
        ════════════════════════════════════════════════════════════════════ */}
        <section className="py-16 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif italic text-white mb-6">Overview</h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: textColors.primary }}>
              {model.information.summary}
            </p>

            {/* Core Concepts Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {model.information.coreConcepts.map((concept, i) => (
                <div
                  key={i}
                  className="bg-white/[0.03] rounded-xl p-5 border border-white/5 hover:border-amber-500/30 transition-colors"
                >
                  <h4 className="font-medium mb-2 text-sm tracking-wide" style={{ color: textColors.amberTint }}>
                    {concept.term}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: textColors.secondary }}>
                    {concept.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            PIPELINE SECTIONS
        ════════════════════════════════════════════════════════════════════ */}
        <div className="px-4 md:px-12 lg:px-20 pb-16 relative z-10" style={{ backgroundColor: '#0a0f1a' }}>
          <div className="max-w-4xl mx-auto space-y-8">

            {/* ─────────────────────────────────────────────────────────────────
                DATA LAYER
            ───────────────────────────────────────────────────────────────── */}
            <PipelineSection stage="data">
              <PipelineSubsection title="Key Facts" stage="data">
                <PipelineFactList facts={model.data.keyFacts} stage="data" />
              </PipelineSubsection>

              {model.data.quotes.length > 0 && (
                <PipelineSubsection title="Source Quotes" stage="data">
                  {model.data.quotes.map((quote, i) => (
                    <PipelineQuote
                      key={i}
                      text={quote.text}
                      attribution={quote.attribution}
                      stage="data"
                    />
                  ))}
                </PipelineSubsection>
              )}

              <PipelineSubsection title="Sources" stage="data">
                <div className="flex flex-wrap gap-2">
                  {model.data.sources.map((source, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20"
                      style={{ color: textColors.blueTint }}
                    >
                      {source}
                    </span>
                  ))}
                </div>
              </PipelineSubsection>
            </PipelineSection>

            {/* ─────────────────────────────────────────────────────────────────
                INFORMATION LAYER
            ───────────────────────────────────────────────────────────────── */}
            <PipelineSection stage="information">
              {model.information.historicalContext && (
                <PipelineSubsection title="Historical Context" stage="information">
                  <p className="leading-relaxed" style={{ color: textColors.primary }}>
                    {model.information.historicalContext}
                  </p>
                </PipelineSubsection>
              )}

              <PipelineSubsection title="Modern Relevance" stage="information">
                <p className="leading-relaxed" style={{ color: textColors.primary }}>
                  {model.information.modernRelevance}
                </p>
              </PipelineSubsection>
            </PipelineSection>

            {/* ─────────────────────────────────────────────────────────────────
                KNOWLEDGE LAYER
            ───────────────────────────────────────────────────────────────── */}
            <PipelineSection stage="knowledge">
              <PipelineSubsection title="Key Insights" stage="knowledge">
                {model.knowledge.keyInsights.map((insight, i) => (
                  <PipelineInsight
                    key={i}
                    number={i + 1}
                    text={insight}
                    stage="knowledge"
                  />
                ))}
              </PipelineSubsection>

              <PipelineSubsection title="Mental Models" stage="knowledge">
                <div className="flex flex-wrap gap-2">
                  {model.knowledge.mentalModels.map((mm, i) => (
                    <PipelineTag key={i} stage="knowledge">
                      {mm}
                    </PipelineTag>
                  ))}
                </div>
              </PipelineSubsection>

              {model.knowledge.commonMisconceptions && model.knowledge.commonMisconceptions.length > 0 && (
                <PipelineSubsection title="Common Misconceptions" stage="knowledge">
                  <ul className="space-y-3">
                    {model.knowledge.commonMisconceptions.map((misconception, i) => (
                      <PipelineMisconception key={i} text={misconception} />
                    ))}
                  </ul>
                </PipelineSubsection>
              )}
            </PipelineSection>

            {/* ─────────────────────────────────────────────────────────────────
                WISDOM LAYER
            ───────────────────────────────────────────────────────────────── */}
            <PipelineSection stage="wisdom">
              <PipelineSubsection title="Practical Applications" stage="wisdom">
                {model.wisdom.practicalApplications.map((app, i) => (
                  <PipelineApplication
                    key={i}
                    context={app.context}
                    action={app.action}
                    outcome={app.outcome}
                    stage="wisdom"
                  />
                ))}
              </PipelineSubsection>

              <PipelineSubsection title="Reflection Questions" stage="wisdom">
                <div className="space-y-3">
                  {model.wisdom.reflectionQuestions.map((q, i) => (
                    <p
                      key={i}
                      className="pl-4 border-l-2 border-amber-500/30 py-1"
                      style={{ color: textColors.primary }}
                    >
                      {q}
                    </p>
                  ))}
                </div>
              </PipelineSubsection>

              <div className="grid md:grid-cols-2 gap-4 mt-8">
                {model.wisdom.dailyPractice && (
                  <PipelinePractice
                    type="daily"
                    text={model.wisdom.dailyPractice}
                    stage="wisdom"
                  />
                )}

                {model.wisdom.warningSign && (
                  <PipelinePractice
                    type="warning"
                    text={model.wisdom.warningSign}
                    stage="wisdom"
                  />
                )}
              </div>
            </PipelineSection>

            {/* ─────────────────────────────────────────────────────────────────
                CONNECTIONS
            ───────────────────────────────────────────────────────────────── */}
            {model.knowledge.connections.length > 0 && (
              <section className="pt-12 border-t border-white/5">
                <h3 className="text-xl font-serif italic text-white mb-6">Connected Models</h3>
                <div className="grid gap-3">
                  {model.knowledge.connections.map((conn, i) => {
                    const connectedModel = models.find(m => m.id === conn.modelId);
                    if (!connectedModel) return null;
                    return (
                      <Link
                        key={i}
                        href={`/playground/${connectedModel.slug}`}
                        className="flex items-center gap-4 rounded-xl p-4 transition-all group border border-white/5 hover:border-purple-500/30"
                        style={{ backgroundColor: '#0c1118' }}
                      >
                        <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={connectedModel.image}
                            alt={connectedModel.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0" style={{ backgroundColor: '#0c1118' }}>
                          <p className="font-medium group-hover:text-purple-400 transition-colors" style={{ color: textColors.primary }}>
                            {connectedModel.title}
                          </p>
                          <p className="text-sm truncate" style={{ color: textColors.secondary }}>{conn.relationship}</p>
                        </div>
                        <svg className="w-5 h-5 group-hover:text-purple-400 transition-colors flex-shrink-0" style={{ color: textColors.secondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            MORE LIKE THIS
        ════════════════════════════════════════════════════════════════════ */}
        {relatedModels.length > 0 && (
          <section className="py-16 px-4 md:px-12 lg:px-20 border-t border-white/5 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-2xl font-serif italic text-white mb-8">More Like This</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {relatedModels.map((related) => (
                  <Link
                    key={related.id}
                    href={`/playground/${related.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_25px_60px_-12px_rgba(251,191,36,0.2)]">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-amber-400/40 transition-all duration-500" />
                      {/* Read time badge */}
                      <div className="absolute bottom-3 left-3 px-2 py-1 rounded text-[10px] font-medium bg-black/50 backdrop-blur-sm" style={{ color: textColors.primary }}>
                        {related.ux.readTime} min
                      </div>
                    </div>
                    <div className="pt-4">
                      <p className="text-xs tracking-[0.15em] uppercase font-medium mb-1 group-hover:text-amber-400 transition-colors" style={{ color: textColors.secondary }}>
                        {related.subtitle}
                      </p>
                      <h4 className="text-sm font-medium group-hover:text-white transition-colors" style={{ color: textColors.primary }}>
                        {related.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            CTA SECTION
        ════════════════════════════════════════════════════════════════════ */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-serif italic mb-4">
              Continue your journey
            </h2>
            <p className="text-base md:text-lg mb-10" style={{ color: textColors.secondary }}>
              Each model is a lens for seeing the world differently.
            </p>
            <Link
              href="/playground"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-[0_10px_40px_rgba(251,191,36,0.25)] hover:-translate-y-0.5"
            >
              Explore All Models
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
