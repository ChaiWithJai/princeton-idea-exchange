'use client';

import { pipelineColors, pipelineCopy, textColors, type PipelineStage } from './PipelineDesignSystem';
import { DataIcon, InformationIcon, KnowledgeIcon, WisdomIcon } from './PipelineIcons';

interface PipelineSectionProps {
  stage: PipelineStage;
  children: React.ReactNode;
}

const icons = {
  data: DataIcon,
  information: InformationIcon,
  knowledge: KnowledgeIcon,
  wisdom: WisdomIcon,
};

export function PipelineSection({ stage, children }: PipelineSectionProps) {
  const Icon = icons[stage];
  const colors = pipelineColors[stage];
  const copy = pipelineCopy[stage];

  return (
    <section
      id={stage}
      className="pt-12 scroll-mt-20"
      style={{
        borderTop: `1px solid ${colors.border}`,
      }}
    >
      {/* Stage Header */}
      <div className="flex items-start gap-5 mb-8">
        {/* Icon with glow */}
        <div
          className="relative flex-shrink-0"
          style={{
            filter: `drop-shadow(0 0 20px ${colors.glow})`,
          }}
        >
          <div
            className="absolute inset-0 rounded-2xl blur-xl opacity-30"
            style={{ backgroundColor: colors.primary }}
          />
          <div
            className="relative w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{
              backgroundColor: colors.bg,
              border: `1px solid ${colors.border}`,
            }}
          >
            <Icon size={36} />
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1">
          {/* Stage label */}
          <div
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-1"
            style={{ color: colors.primary }}
          >
            {copy.label}
          </div>

          {/* Tagline */}
          <h2 className="text-2xl md:text-3xl font-serif italic text-white mb-2">
            {copy.tagline}
          </h2>

          {/* Description */}
          <p
            className="text-sm max-w-xl"
            style={{ color: textColors.secondary }}
          >
            {copy.description}
          </p>

          {/* Guiding question */}
          <p
            className="text-sm italic mt-2"
            style={{ color: colors.text }}
          >
            {copy.question}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="pl-0 md:pl-21">
        {children}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SUB-COMPONENTS FOR CONSISTENT STYLING
// ═══════════════════════════════════════════════════════════════════════════

export function PipelineSubsection({
  title,
  children,
  stage,
}: {
  title: string;
  children: React.ReactNode;
  stage: PipelineStage;
}) {
  const colors = pipelineColors[stage];

  return (
    <div className="mb-8">
      <h4
        className="text-sm font-medium tracking-wider uppercase mb-4"
        style={{ color: colors.text }}
      >
        {title}
      </h4>
      {children}
    </div>
  );
}

export function PipelineFactList({
  facts,
  stage,
}: {
  facts: string[];
  stage: PipelineStage;
}) {
  const colors = pipelineColors[stage];

  return (
    <ul className="space-y-3">
      {facts.map((fact, i) => (
        <li
          key={i}
          className="flex gap-3"
          style={{ color: textColors.primary }}
        >
          <span style={{ color: colors.primary }} className="mt-1 flex-shrink-0">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          {fact}
        </li>
      ))}
    </ul>
  );
}

export function PipelineQuote({
  text,
  attribution,
  stage,
}: {
  text: string;
  attribution?: string;
  stage: PipelineStage;
}) {
  const colors = pipelineColors[stage];

  return (
    <blockquote
      className="rounded-xl p-5 mb-4"
      style={{
        backgroundColor: colors.bg,
        borderLeft: `3px solid ${colors.primary}`,
      }}
    >
      <p className="italic mb-2" style={{ color: textColors.primary }}>&ldquo;{text}&rdquo;</p>
      {attribution && (
        <cite
          className="text-sm not-italic"
          style={{ color: colors.text }}
        >
          — {attribution}
        </cite>
      )}
    </blockquote>
  );
}

export function PipelineInsight({
  number,
  text,
  stage,
}: {
  number: number;
  text: string;
  stage: PipelineStage;
}) {
  const colors = pipelineColors[stage];

  return (
    <div
      className="flex gap-4 items-start rounded-lg p-4 mb-3"
      style={{ backgroundColor: colors.bg }}
    >
      <span
        className="font-bold text-lg flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: `${colors.primary}33`,
          color: colors.primary,
        }}
      >
        {number}
      </span>
      <p className="pt-1" style={{ color: textColors.primary }}>{text}</p>
    </div>
  );
}

export function PipelineTag({
  children,
  stage,
}: {
  children: string;
  stage: PipelineStage;
}) {
  const colors = pipelineColors[stage];

  return (
    <span
      className="px-4 py-2 rounded-full text-sm"
      style={{
        backgroundColor: colors.bg,
        color: colors.primary,
        border: `1px solid ${colors.border}`,
      }}
    >
      {children}
    </span>
  );
}

export function PipelineMisconception({
  text,
}: {
  text: string;
}) {
  return (
    <li className="flex gap-3" style={{ color: textColors.secondary }}>
      <span className="mt-1 flex-shrink-0" style={{ color: '#fb7185' }}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
      {text}
    </li>
  );
}

export function PipelineApplication({
  context,
  action,
  outcome,
  stage,
}: {
  context: string;
  action: string;
  outcome: string;
  stage: PipelineStage;
}) {
  const colors = pipelineColors[stage];

  return (
    <div
      className="rounded-xl p-5 mb-4"
      style={{
        background: `linear-gradient(135deg, ${colors.bg}, transparent)`,
        border: `1px solid ${colors.border}`,
      }}
    >
      <p className="text-sm font-medium mb-2" style={{ color: colors.text }}>
        When: {context}
      </p>
      <p className="mb-2" style={{ color: textColors.primary }}>
        <span style={{ color: colors.primary }}>→</span> {action}
      </p>
      <p className="text-sm" style={{ color: textColors.secondary }}>
        <span style={{ color: '#34d399' }}>✓</span> {outcome}
      </p>
    </div>
  );
}

export function PipelinePractice({
  type,
  text,
  stage,
}: {
  type: 'daily' | 'warning';
  text: string;
  stage: PipelineStage;
}) {
  const colors = pipelineColors[stage];
  const isWarning = type === 'warning';

  return (
    <div
      className="rounded-xl p-5 mb-4"
      style={{
        backgroundColor: isWarning ? 'rgba(244, 63, 94, 0.1)' : colors.bg,
        border: `1px solid ${isWarning ? 'rgba(244, 63, 94, 0.3)' : colors.border}`,
      }}
    >
      <h4
        className="font-medium mb-2 flex items-center gap-2"
        style={{ color: isWarning ? '#fb7185' : colors.text }}
      >
        {isWarning ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
        {isWarning ? 'Warning Sign' : 'Daily Practice'}
      </h4>
      <p style={{ color: textColors.primary }}>{text}</p>
    </div>
  );
}
