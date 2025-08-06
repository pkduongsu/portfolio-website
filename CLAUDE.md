# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website for Kim Pham, built with React 19, TypeScript, and Tailwind CSS. The project uses the App Router and features a Studio Ghibli-inspired design theme.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture

### Core Structure
- **Next.js App Router**: Using `src/app/` directory structure
- **Component Architecture**: Organized into UI components and main sections
- **Styling**: Tailwind CSS with shadcn/ui components
- **TypeScript**: Strict configuration with path aliases

### Key Directories
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page composition
│   └── globals.css        # Global styles
├── components/ui/         # Reusable UI components
│   ├── main/              # Main page sections (Hero, About, Projects, Contact, Navigation)
│   ├── constants/         # Data constants (experience.ts, projects-list.ts)
│   └── [component].tsx    # shadcn/ui components (button, card, dialog, etc.)
└── lib/
    └── utils.ts           # Utility functions (cn helper)
```

### Component System
- **shadcn/ui Integration**: Components configured via `components.json` with "new-york" style
- **Path Aliases**: `@/*` maps to `src/*`
- **Main Sections**: Hero, About, Timeline, Projects, Contact components compose the single-page layout
- **Navigation**: Client-side navigation with scroll tracking and smooth scrolling
- **Layout**: Unified layout component wrapping Navigation + content + Footer

### Styling Approach
- **Tailwind CSS v4**: Primary styling framework with PostCSS configuration
- **CSS Variables**: Theme system using CSS custom properties with Studio Ghibli-inspired palette
- **Responsive Design**: Mobile-first approach with breakpoint utilities
- **Studio Ghibli Theme**: Custom OKLCH color system with warm, natural tones
- **Animation**: Uses tw-animate-css for enhanced animations
- **Typography**: Custom fonts (Comfortaa, Inter) loaded via Google Fonts

### Data Management
- **Static Content**: Portfolio data stored in `src/components/ui/constants/`
- **Experience Data**: Professional timeline in `experience.ts`
- **Projects Data**: Portfolio projects in `projects-list.ts`
- **Type Safety**: All data structures are TypeScript-typed

### Tech Stack Details
- **React 19**: Latest React features with RSC support
- **Next.js 15**: App Router with Turbopack for development
- **Framer Motion**: Animation library for interactive elements
- **Radix UI**: Headless components for accessibility
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant management

## Key Features
- Single-page application with smooth scroll navigation
- Responsive navigation with mobile menu
- Section-based content organization (Hero, About, Timeline, Projects, Contact)
- Integrated contact and project showcase sections
- Professional experience timeline
- Studio Ghibli-inspired design aesthetic