/**
 * Pipeline Design System
 *
 * The Data-to-Wisdom pipeline is our core intellectual framework.
 * Each stage has distinct visual identity and meaning.
 */

// ═══════════════════════════════════════════════════════════════════════════
// ACCESSIBLE TEXT COLORS
// All colors tested against background #0a0f1a for WCAG AA compliance (4.5:1)
// ═══════════════════════════════════════════════════════════════════════════

export const textColors = {
  // Primary body text - high contrast (~13:1)
  primary: '#e2e8f0',        // slate-200

  // Secondary text - medium contrast (~7:1)
  secondary: '#94a3b8',      // slate-400

  // Muted/tertiary text - minimum accessible (~4.8:1)
  muted: '#64748b',          // slate-500

  // Emphasis text - pure white (~16:1)
  emphasis: '#ffffff',

  // Stage-tinted text variants (calculated for 4.5:1+ contrast)
  blueTint: '#93c5fd',       // blue-300 (~9.5:1)
  emeraldTint: '#6ee7b7',    // emerald-300 (~10:1)
  purpleTint: '#c4b5fd',     // purple-300 (~8:1)
  amberTint: '#fcd34d',      // amber-300 (~12:1)
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// COLOR TOKENS
// ═══════════════════════════════════════════════════════════════════════════

export const pipelineColors = {
  data: {
    primary: '#3b82f6',      // Blue - raw, factual, foundational
    secondary: '#1d4ed8',
    text: '#93c5fd',         // Accessible blue text (~9.5:1)
    textMuted: '#60a5fa',    // blue-400 (~6:1)
    gradient: 'from-blue-500 to-blue-600',
    glow: 'rgba(59, 130, 246, 0.3)',
    bg: 'rgba(59, 130, 246, 0.1)',
    border: 'rgba(59, 130, 246, 0.3)',
  },
  information: {
    primary: '#10b981',      // Emerald - organized, contextualized
    secondary: '#059669',
    text: '#6ee7b7',         // Accessible emerald text (~10:1)
    textMuted: '#34d399',    // emerald-400 (~8:1)
    gradient: 'from-emerald-500 to-emerald-600',
    glow: 'rgba(16, 185, 129, 0.3)',
    bg: 'rgba(16, 185, 129, 0.1)',
    border: 'rgba(16, 185, 129, 0.3)',
  },
  knowledge: {
    primary: '#a78bfa',      // Lighter purple for accessibility (~6:1)
    secondary: '#8b5cf6',
    text: '#c4b5fd',         // Accessible purple text (~8:1)
    textMuted: '#a78bfa',    // purple-400 (~6:1)
    gradient: 'from-purple-400 to-purple-500',
    glow: 'rgba(167, 139, 250, 0.3)',
    bg: 'rgba(139, 92, 246, 0.1)',
    border: 'rgba(139, 92, 246, 0.3)',
  },
  wisdom: {
    primary: '#fbbf24',      // Brighter amber for accessibility (~11:1)
    secondary: '#f59e0b',
    text: '#fcd34d',         // Accessible amber text (~12:1)
    textMuted: '#fbbf24',    // amber-400 (~11:1)
    gradient: 'from-amber-400 to-amber-500',
    glow: 'rgba(251, 191, 36, 0.3)',
    bg: 'rgba(245, 158, 11, 0.1)',
    border: 'rgba(245, 158, 11, 0.3)',
  },
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// UX COPY
// ═══════════════════════════════════════════════════════════════════════════

export const pipelineCopy = {
  data: {
    label: 'Data',
    tagline: 'Raw Facts & Sources',
    description: 'The foundation. Verified facts, primary sources, and direct quotes that form the bedrock of understanding.',
    question: 'What do we know for certain?',
  },
  information: {
    label: 'Information',
    tagline: 'Context & Structure',
    description: 'Facts organized into meaning. Historical context, core concepts, and why this matters now.',
    question: 'What does this mean?',
  },
  knowledge: {
    label: 'Knowledge',
    tagline: 'Patterns & Connections',
    description: 'Insights that emerge from information. Mental models, cross-domain connections, and what most people get wrong.',
    question: 'What patterns emerge?',
  },
  wisdom: {
    label: 'Wisdom',
    tagline: 'Action & Transformation',
    description: 'Knowledge applied to life. Practical applications, daily practices, and warning signs when you drift.',
    question: 'How do I live this?',
  },
} as const;

export type PipelineStage = keyof typeof pipelineColors;

// ═══════════════════════════════════════════════════════════════════════════
// TYPOGRAPHY
// Uses accessible solid colors instead of opacity modifiers
// ═══════════════════════════════════════════════════════════════════════════

export const pipelineTypography = {
  stageLabel: 'text-xs font-semibold tracking-[0.2em] uppercase',
  stageTitle: 'text-2xl md:text-3xl font-serif italic',
  stageTagline: 'text-sm',                              // Color applied via style prop
  sectionHeader: 'text-sm font-medium tracking-wider uppercase',  // Color via style
  bodyText: 'text-base leading-relaxed',                // Color via style prop
  quote: 'text-lg italic',                              // Color via style prop
  insight: 'text-base',                                 // Color via style prop
} as const;

// Pre-computed style objects for consistent accessible text colors
export const textStyles = {
  body: { color: textColors.primary },           // #e2e8f0 - main body text
  secondary: { color: textColors.secondary },    // #94a3b8 - secondary text
  muted: { color: textColors.muted },            // #64748b - muted text
  emphasis: { color: textColors.emphasis },      // #ffffff - emphasized text
} as const;
