# CLAUDE.md - AI Assistant Guide for Princeton Idea Exchange

## Project Overview

Princeton Idea Exchange is a **Next.js marketing website** for an AI strategy consulting firm. The site serves two purposes:
1. **Brand website** showcasing AI consulting services and case studies
2. **Sales tool** with a personalized studio directory for NJ creative studios

**Live deployment**: Netlify

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.0 | React framework with App Router |
| React | 19.2.3 | UI library |
| TypeScript | 5.x | Type-safe development |
| Tailwind CSS | 4.x | Utility-first CSS |
| PostCSS | - | CSS processing |
| ESLint | 9.x | Code linting |

## Project Structure

```
princeton-idea-exchange/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx               # Root layout (fonts, metadata)
│   │   ├── page.tsx                 # Homepage
│   │   ├── globals.css              # Global styles, CSS variables
│   │   ├── works/                   # Case studies section
│   │   │   ├── page.tsx             # Works listing
│   │   │   ├── theramotive/         # Case study page
│   │   │   └── qedc/                # Case study page
│   │   ├── studios/                 # Studio directory (32 studios)
│   │   │   ├── page.tsx             # Studios listing by region
│   │   │   ├── [slug]/page.tsx      # Dynamic studio detail pages
│   │   │   └── data/studios.ts      # Studio database (2000+ lines)
│   │   └── playground/              # Experimental projects
│   │       ├── page.tsx
│   │       └── [slug]/page.tsx
│   ├── components/                  # Reusable React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Footer.tsx
│   │   ├── CTASection.tsx
│   │   ├── WorkCard.tsx
│   │   └── pipeline/                # Pipeline visualization system
│   └── data/                        # Data models and schemas
├── public/
│   ├── images/                      # Hero, team, case study images
│   └── studios/                     # Generated studio hero images
├── scripts/
│   └── generate-studio-images.js   # Gemini API image generation
└── .agent/workflows/                # Claude workflow documentation
```

## Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Build & Production
npm run build        # Production build to .next/
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Architecture Patterns

### Next.js App Router
- Uses the App Router (not Pages Router)
- Dynamic routes use `[slug]` folder convention
- Client components marked with `'use client'` directive
- Static generation for studio pages

### Component Patterns
- Components are functional React components with TypeScript
- Use CSS variables from `globals.css` for theming: `var(--color-orange)`, `var(--color-navy)`
- Tailwind classes for layout and utilities
- Template literal syntax for conditional classes

```tsx
// Example pattern from Navigation.tsx
className={`text-sm font-medium ${
  isActive
    ? 'text-[var(--color-orange)]'
    : 'text-[var(--color-gray-700)] hover:text-[var(--color-dark)]'
}`}
```

### Styling Conventions
- **CSS Variables** defined in `globals.css` under `:root`
- **Tailwind 4.x** with `@import "tailwindcss"` syntax
- **8px spacing grid**: Use `--space-*` variables
- **Fonts**: Libre Baskerville (serif headings), DM Sans (body), Caveat (handwritten)
- Global classes: `.btn-primary`, `.btn-secondary`, `.tag`, `.card`

### Key Color Palette
```css
--color-cream: #faf9f7       /* Background */
--color-orange: #c74a15      /* Primary CTA, accents */
--color-navy: #0f1d3d        /* Headings, tags */
--color-dark: #1a1a1a        /* Text */
--color-gray-700: #3d3d3d    /* Body text */
```

## Data Architecture

### Studios Data (`src/app/studios/data/studios.ts`)
Each studio has:
- `slug`: URL identifier
- `tier`: 'tier1' | 'tier2' | 'directory' (priority levels)
- `contact`: name, title, phone, email
- `marketPosition`: standout, asset, gap analysis
- `opportunities`: 3 AI opportunities linked to playbook chapters
- `letter`: personalized sales letter content
- `ctaAngle`: custom CTA messaging

### Studio Tiers
- **Tier 1** (3 studios): Priority outreach - KVibe, Loop, SIP
- **Tier 2** (5 studios): Secondary outreach
- **Directory** (24 studios): Comprehensive listing

## Code Conventions

### TypeScript
- Strict mode enabled
- Path alias: `@/*` maps to `./src/*`
- Interfaces preferred for data structures

### Imports
```tsx
// Next.js imports
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Local imports
import { studios, StudioData } from '@/app/studios/data/studios';
```

### Component Structure
1. 'use client' directive (if needed)
2. Imports
3. TypeScript interfaces
4. Component function
5. Export

## Styling Guidelines

### Do
- Use CSS variables for colors: `text-[var(--color-orange)]`
- Use Tailwind for spacing: `px-6 py-4 md:px-12`
- Use responsive prefixes: `md:`, `lg:`
- Use global classes for common patterns: `.btn-primary`, `.card`

### Don't
- Don't hardcode color values in components
- Don't use inline styles
- Don't create new CSS files per component

### Animation Classes
Available in `globals.css`:
- `.animate-fade-in` - Fade in with slight translate
- `.animate-marquee` - Infinite horizontal scroll
- `.animate-scroll-x` - Horizontal scroll for tags
- `.animate-float` - Floating decorative elements

## Image Handling

### Static Images
Place in `/public/images/` and reference as `/images/filename.png`

### Studio Images
Generated via `scripts/generate-studio-images.js` using Google Gemini API
Stored in `/public/studios/`

### Next.js Image
```tsx
<Image
  src="/images/hero.png"
  alt="Description"
  width={1200}
  height={800}
  priority  // For above-the-fold images
/>
```

## Deployment

### Netlify Configuration (`netlify.toml`)
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Build Process
1. TypeScript compilation
2. ESLint validation
3. Next.js build to `.next/`
4. Static generation for all pages

## Testing

No formal testing framework configured. Manual testing recommended:
1. Run `npm run dev`
2. Test all pages and navigation
3. Run `npm run build` to catch any build errors
4. Run `npm run lint` before commits

## Common Tasks

### Adding a New Case Study
1. Create folder: `src/app/works/[name]/page.tsx`
2. Add images to `public/images/`
3. Update `src/app/works/page.tsx` grid

### Adding a New Studio
1. Add studio object to `src/app/studios/data/studios.ts`
2. Follow `StudioData` interface structure
3. Generate hero image if needed

### Modifying Global Styles
Edit `src/app/globals.css`:
- CSS variables in `:root`
- Global classes after Tailwind import
- Animation keyframes at bottom

## File References

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout, fonts, metadata |
| `src/app/globals.css` | All global styles and CSS variables |
| `src/app/studios/data/studios.ts` | Complete studio database |
| `DESIGN_SYSTEM.md` | Detailed design specifications |
| `netlify.toml` | Deployment configuration |

## Important Notes

1. **No .env files committed** - API keys in scripts should be environment variables
2. **Static Generation** - Pages are statically generated at build time
3. **WCAG AA Compliance** - Gray colors chosen for 4.5:1 contrast ratio
4. **Responsive Breakpoints**: Mobile (<810px), Tablet (810-1200px), Desktop (>1200px)
5. **Font Loading** - Fonts loaded via `next/font/google` for optimization
