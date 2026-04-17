# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Group 6's Digital Health Implementation** for TRA460 at Chalmers University of Technology. The product is a **multilingual surgical patient education platform** — a web app that walks patients through the preoperative, intraoperative, and postoperative phases using plain language, visuals, and videos. See `PRD.md` for the full product requirements.

Key product constraints from the PRD:
- Mobile friendly
- Multilingual from the start — language selection happens at app entry and saved to browser
- Must be accessible to users with low health literacy and low digital confidence

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Type-check + production build
npm run lint      # ESLint
npm run preview   # Preview production build locally
```

No test runner is configured yet.

## Tech Stack

- **React 19** + **TypeScript** (strict mode, `noUnusedLocals`, `noUnusedParameters`)
- **Vite 8** with `@vitejs/plugin-react` and `@tailwindcss/vite`
- **Tailwind CSS v4** + **DaisyUI v5**

## Styling: DaisyUI + Tailwind

The theme is defined entirely in `src/index.css` using the DaisyUI v5 `@plugin "daisyui/theme"` syntax. **Do not add a separate theme config elsewhere.** 

Always use DaisyUI component classes (`btn`, `card`, `badge`, `steps`, `tabs`, etc.) before reaching for raw Tailwind utilities. Use semantic color tokens (`primary`, `secondary`, `accent`, `info`) rather than hardcoded colors so the theme stays consistent.

## Code Structure: Bulletproof React

Follow the [Bulletproof React](https://github.com/alan2207/bulletproof-react) feature-based architecture:

```
src/
  app/          # App-wide setup: router, providers, global styles entry
  features/     # One folder per product feature (see below)
  components/   # Truly shared, generic UI components only
  hooks/        # Shared hooks
  lib/          # Third-party library wrappers/config
  types/        # Shared TypeScript types
  utils/        # Pure utility functions
```

**Features** map directly to the PRD sections:
- `features/language-selection/` — FR1: language picker at entry
- `features/journey/` — FR3/FR15: visual timeline (preop → surgery → recovery)
- `features/content/` — FR2/FR5–FR9: phase-specific educational content
- `features/caregiver/` — FR10: caregiver/relative view
- `features/faq/` — FR11: FAQ section
- `features/staff/` — FR14: staff-facing procedure selection interface

Each feature folder owns its own components, hooks, and types. Nothing inside a feature should be imported by another feature — promote to `src/components` or `src/hooks` only when genuinely shared.

## Accessibility Requirements

These come directly from NFR1 and the primary user profile (elderly, low digital confidence, low health literacy):
- Readable font sizes — prefer DaisyUI's `text-lg`/`text-xl` as the baseline, not `text-sm`
- High contrast — lean on the `primary`/`base-content` token pairing
- Simple, linear navigation — avoid deeply nested menus
- All interactive elements must be keyboard-accessible (DaisyUI components handle most of this)
