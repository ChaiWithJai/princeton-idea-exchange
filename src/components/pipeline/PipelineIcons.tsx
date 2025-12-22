/**
 * Pipeline Stage Icons
 *
 * Premium SVG icons that visualize the Data-to-Wisdom journey.
 * Each icon tells a story of transformation.
 */

import { pipelineColors } from './PipelineDesignSystem';

interface IconProps {
  className?: string;
  size?: number;
}

// ═══════════════════════════════════════════════════════════════════════════
// DATA ICON - Crystalline structure, raw elements
// ═══════════════════════════════════════════════════════════════════════════
export function DataIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="dataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={pipelineColors.data.primary} />
          <stop offset="100%" stopColor={pipelineColors.data.secondary} />
        </linearGradient>
        <filter id="dataGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Base layers - stacked data */}
      <ellipse cx="24" cy="36" rx="16" ry="4" fill="url(#dataGrad)" opacity="0.3" />
      <ellipse cx="24" cy="30" rx="16" ry="4" fill="url(#dataGrad)" opacity="0.5" />
      <ellipse cx="24" cy="24" rx="16" ry="4" fill="url(#dataGrad)" opacity="0.7" />
      {/* Top layer with glow */}
      <ellipse cx="24" cy="18" rx="16" ry="4" fill="url(#dataGrad)" filter="url(#dataGlow)" />
      {/* Data points floating up */}
      <circle cx="16" cy="12" r="2" fill={pipelineColors.data.primary} opacity="0.8" />
      <circle cx="24" cy="8" r="2.5" fill={pipelineColors.data.primary} />
      <circle cx="32" cy="11" r="1.5" fill={pipelineColors.data.primary} opacity="0.6" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// INFORMATION ICON - Organized structure, tree/hierarchy
// ═══════════════════════════════════════════════════════════════════════════
export function InformationIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="infoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={pipelineColors.information.primary} />
          <stop offset="100%" stopColor={pipelineColors.information.secondary} />
        </linearGradient>
        <filter id="infoGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Central node */}
      <circle cx="24" cy="12" r="6" fill="url(#infoGrad)" filter="url(#infoGlow)" />
      {/* Connection lines */}
      <path d="M24 18 L12 28" stroke="url(#infoGrad)" strokeWidth="2" opacity="0.6" />
      <path d="M24 18 L24 28" stroke="url(#infoGrad)" strokeWidth="2" opacity="0.6" />
      <path d="M24 18 L36 28" stroke="url(#infoGrad)" strokeWidth="2" opacity="0.6" />
      {/* Branch nodes */}
      <circle cx="12" cy="32" r="5" fill="url(#infoGrad)" opacity="0.8" />
      <circle cx="24" cy="32" r="5" fill="url(#infoGrad)" opacity="0.8" />
      <circle cx="36" cy="32" r="5" fill="url(#infoGrad)" opacity="0.8" />
      {/* Leaf nodes */}
      <circle cx="8" cy="40" r="3" fill={pipelineColors.information.primary} opacity="0.5" />
      <circle cx="16" cy="40" r="3" fill={pipelineColors.information.primary} opacity="0.5" />
      <circle cx="32" cy="40" r="3" fill={pipelineColors.information.primary} opacity="0.5" />
      <circle cx="40" cy="40" r="3" fill={pipelineColors.information.primary} opacity="0.5" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// KNOWLEDGE ICON - Neural network, interconnected insights
// ═══════════════════════════════════════════════════════════════════════════
export function KnowledgeIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="knowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={pipelineColors.knowledge.primary} />
          <stop offset="100%" stopColor={pipelineColors.knowledge.secondary} />
        </linearGradient>
        <filter id="knowGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Connection web */}
      <path d="M24 8 L12 20 L12 32 L24 40 L36 32 L36 20 Z" stroke="url(#knowGrad)" strokeWidth="1.5" fill="none" opacity="0.3" />
      <path d="M24 8 L24 40" stroke="url(#knowGrad)" strokeWidth="1" opacity="0.3" />
      <path d="M12 20 L36 32" stroke="url(#knowGrad)" strokeWidth="1" opacity="0.3" />
      <path d="M36 20 L12 32" stroke="url(#knowGrad)" strokeWidth="1" opacity="0.3" />
      {/* Nodes */}
      <circle cx="24" cy="8" r="4" fill="url(#knowGrad)" filter="url(#knowGlow)" />
      <circle cx="12" cy="20" r="4" fill="url(#knowGrad)" opacity="0.8" />
      <circle cx="36" cy="20" r="4" fill="url(#knowGrad)" opacity="0.8" />
      <circle cx="12" cy="32" r="4" fill="url(#knowGrad)" opacity="0.8" />
      <circle cx="36" cy="32" r="4" fill="url(#knowGrad)" opacity="0.8" />
      <circle cx="24" cy="40" r="4" fill="url(#knowGrad)" opacity="0.8" />
      {/* Central insight - bright core */}
      <circle cx="24" cy="24" r="6" fill="url(#knowGrad)" filter="url(#knowGlow)" />
      <circle cx="24" cy="24" r="3" fill="white" opacity="0.3" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// WISDOM ICON - Radiant light, practical emanation
// ═══════════════════════════════════════════════════════════════════════════
export function WisdomIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="wisdomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={pipelineColors.wisdom.primary} />
          <stop offset="100%" stopColor={pipelineColors.wisdom.secondary} />
        </linearGradient>
        <radialGradient id="wisdomRadial" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={pipelineColors.wisdom.primary} />
          <stop offset="100%" stopColor={pipelineColors.wisdom.secondary} stopOpacity="0" />
        </radialGradient>
        <filter id="wisdomGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Radiant glow */}
      <circle cx="24" cy="24" r="20" fill="url(#wisdomRadial)" opacity="0.3" />
      {/* Light rays */}
      <path d="M24 4 L24 12" stroke="url(#wisdomGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M24 36 L24 44" stroke="url(#wisdomGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M4 24 L12 24" stroke="url(#wisdomGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M36 24 L44 24" stroke="url(#wisdomGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      {/* Diagonal rays */}
      <path d="M9.86 9.86 L15.52 15.52" stroke="url(#wisdomGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M32.48 32.48 L38.14 38.14" stroke="url(#wisdomGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M38.14 9.86 L32.48 15.52" stroke="url(#wisdomGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M15.52 32.48 L9.86 38.14" stroke="url(#wisdomGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      {/* Core */}
      <circle cx="24" cy="24" r="10" fill="url(#wisdomGrad)" filter="url(#wisdomGlow)" />
      <circle cx="24" cy="24" r="5" fill="white" opacity="0.4" />
      {/* Inner symbol - action arrow */}
      <path d="M20 24 L26 24 M24 20 L28 24 L24 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// PIPELINE PROGRESS INDICATOR
// ═══════════════════════════════════════════════════════════════════════════
export function PipelineProgress({ activeStage }: { activeStage: 'data' | 'information' | 'knowledge' | 'wisdom' }) {
  const stages = ['data', 'information', 'knowledge', 'wisdom'] as const;
  const activeIndex = stages.indexOf(activeStage);

  return (
    <div className="flex items-center gap-2">
      {stages.map((stage, index) => {
        const isActive = index <= activeIndex;
        const isCurrent = index === activeIndex;
        const color = pipelineColors[stage];

        return (
          <div key={stage} className="flex items-center">
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                isCurrent ? 'scale-125' : ''
              }`}
              style={{
                backgroundColor: isActive ? color.primary : 'rgba(255,255,255,0.2)',
                boxShadow: isCurrent ? `0 0 12px ${color.glow}` : 'none',
              }}
            />
            {index < stages.length - 1 && (
              <div
                className="w-8 h-0.5 mx-1"
                style={{
                  backgroundColor: index < activeIndex ? color.primary : 'rgba(255,255,255,0.1)',
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// CINEMATIC PIPELINE JOURNEY (Hero visualization)
// A premium, film-quality visualization of the Data-to-Wisdom transformation
// Designed to be meditative and easy on the eyes
// ═══════════════════════════════════════════════════════════════════════════
export function PipelineJourney({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full max-w-4xl mx-auto bg-[#080a0f] p-4 rounded-xl shadow-2xl overflow-hidden border border-white/5 ${className}`}>
      <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <defs>
          {/* SOFT GLOW - gentler than cinematic bloom */}
          <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
            <feGaussianBlur stdDeviation="4" result="soft-glow"/>
            <feMerge>
              <feMergeNode in="soft-glow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* SUBTLE FILM GRAIN */}
          <filter id="film-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.03"/>
            </feComponentTransfer>
          </filter>

          {/* MUTED GRADIENTS */}
          <linearGradient id="stream-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0e7490" stopOpacity="0" />
            <stop offset="100%" stopColor="#0e7490" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d97706" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#fef3c7" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="singularity" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#92400e" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* BACKGROUND */}
        <rect width="100%" height="100%" fill="#080a0f"/>
        <rect width="100%" height="100%" filter="url(#film-grain)" opacity="0.4" pointerEvents="none"/>

        {/* === STEP 1: DATA (ENTROPY) === */}
        <g id="step-data" filter="url(#soft-glow)">
          {/* Gentle floating points - slower, softer */}
          <g fill="#0e7490" opacity="0.6">
            <circle cx="60" cy="100" r="2.5">
              <animate attributeName="cy" values="97;103;97" dur="8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="85" cy="70" r="2">
              <animate attributeName="cy" values="70;64;70" dur="10s" repeatCount="indefinite"/>
            </circle>
            <circle cx="40" cy="90" r="1.5">
              <animate attributeName="opacity" values="0.4;0.7;0.4" dur="7s" repeatCount="indefinite"/>
            </circle>
            <circle cx="75" cy="130" r="2">
              <animate attributeName="cx" values="75;78;75" dur="12s" repeatCount="indefinite"/>
            </circle>
            <circle cx="95" cy="110" r="3">
              <animate attributeName="r" values="3;3.5;3" dur="9s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="120" r="1.5" opacity="0.4"/>
            <circle cx="100" cy="80" r="2" opacity="0.5"/>
            <circle cx="70" cy="95" r="1" opacity="0.35"/>
          </g>
          <text x="70" y="160" fill="#0e7490" fontFamily="sans-serif" fontWeight="500" fontSize="10" letterSpacing="2" textAnchor="middle" opacity="0.6">DATA</text>
        </g>

        {/* === STEP 2: INFORMATION (VECTOR) === */}
        <g id="step-info">
          {/* Slower streaming lines - adjusted to flow toward new KNOWLEDGE position */}
          <path d="M 140 80 L 380 95" stroke="url(#stream-gradient)" strokeWidth="1" strokeDasharray="4,6" opacity="0.5">
            <animate attributeName="stroke-dashoffset" from="10" to="0" dur="3s" repeatCount="indefinite"/>
          </path>
          <path d="M 140 120 L 380 105" stroke="url(#stream-gradient)" strokeWidth="1" strokeDasharray="4,6" opacity="0.5">
            <animate attributeName="stroke-dashoffset" from="10" to="0" dur="3.5s" repeatCount="indefinite"/>
          </path>
          <path d="M 130 100 L 380 100" stroke="url(#stream-gradient)" strokeWidth="1.5" strokeDasharray="6,8" opacity="0.6">
            <animate attributeName="stroke-dashoffset" from="14" to="0" dur="2.5s" repeatCount="indefinite"/>
          </path>
          <text x="260" y="160" fill="#0891b2" fontFamily="sans-serif" fontWeight="500" fontSize="10" letterSpacing="2" textAnchor="middle" opacity="0.6">INFO</text>
        </g>

        {/* === STEP 3: KNOWLEDGE (SYNTHESIS) === */}
        <g id="step-knowledge" transform="translate(420, 100)">
          {/* Slow, meditative rotation */}
          <g filter="url(#soft-glow)">
            {/* Outer Ring - very slow */}
            <circle r="28" fill="none" stroke="#6366f1" strokeWidth="1" opacity="0.3" strokeDasharray="40 20">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="60s" repeatCount="indefinite"/>
            </circle>
            {/* Inner Ring - gentle counter rotation */}
            <circle r="22" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.4">
              <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="45s" repeatCount="indefinite"/>
            </circle>
            {/* The Prism Core - subtle breathing */}
            <path d="M -12 -12 L 18 0 L -12 12 Z" fill="#7c3aed" opacity="0.7">
              <animate attributeName="opacity" values="0.6;0.8;0.6" dur="8s" repeatCount="indefinite"/>
            </path>
          </g>
          <text x="0" y="60" fill="#a78bfa" fontFamily="sans-serif" fontWeight="500" fontSize="10" letterSpacing="2" textAnchor="middle" opacity="0.6">KNOWLEDGE</text>
        </g>

        {/* === STEP 4: WISDOM (ILLUMINATION) === */}
        <g id="step-wisdom" filter="url(#soft-glow)">
          {/* Gentle beam - connects KNOWLEDGE to WISDOM */}
          <path d="M 450 100 L 700 100" stroke="url(#beam-gradient)" strokeWidth="1.5" opacity="0.6" />

          {/* Soft flare - positioned closer to singularity */}
          <rect x="540" y="99.5" width="120" height="1" fill="#fef3c7" opacity="0.3">
            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="10s" repeatCount="indefinite"/>
          </rect>

          {/* The Singularity - moved closer, calm breathing */}
          <g transform="translate(620, 100)">
            <circle r="35" fill="url(#singularity)" opacity="0.15">
              <animate attributeName="r" values="33;37;33" dur="12s" repeatCount="indefinite"/>
            </circle>
            <circle r="5" fill="#fef3c7" filter="url(#soft-glow)" opacity="0.7">
              <animate attributeName="opacity" values="0.6;0.8;0.6" dur="6s" repeatCount="indefinite"/>
            </circle>
          </g>

          <text x="620" y="160" fill="#f59e0b" fontFamily="serif" fontWeight="600" fontStyle="italic" fontSize="12" letterSpacing="3" textAnchor="middle" opacity="0.7">WISDOM</text>
        </g>
      </svg>
    </div>
  );
}

export const PipelineIcon = {
  Data: DataIcon,
  Information: InformationIcon,
  Knowledge: KnowledgeIcon,
  Wisdom: WisdomIcon,
};
