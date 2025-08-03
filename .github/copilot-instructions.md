# GitHub Copilot Instructions for UChicago DSS Website

This file guides AI coding agents to quickly understand and contribute to the `dss_web` Next.js + TailwindCSS site.

## 1. Project Overview
- **Framework**: Next.js 14 (App Router in `/src/app`) with React 18
- **Styling**: TailwindCSS v3 configured via `tailwind.config.js` & `postcss.config.js`
- **TypeScript**: Enabled (`.ts`, `.tsx`); strict mode is currently off (`tsconfig.json`)
- **Path Aliases**: `@/*` resolves to `/src/*` (defined in `tsconfig.json` and `jsconfig.json`)
- **Deployment**: Static export to GitHub Pages with custom CNAME (`uchicago-dss.com`), automated in `.github/workflows/nextjs.yml`

## 2. Big-Picture Architecture
- App Router in `/src/app`: each folder is a route; `layout.tsx` files wrap child pages (e.g. `src/app/layout.tsx`).
- Providers (`src/app/providers.tsx`): client-only contexts (e.g. `next-themes` for dark mode) live here.
- Server vs. Client Components: files without `"use client"` are server components by default; add `"use client"` at the top when you need state, effects, or browser-only APIs.
- Static Assets: `/public` serves images, fonts, and CNAME; refer to `/public/images/...` in JSX.

## 3. Key Directories
```
/.github            # CI/CD workflows
/public             # Static assets & favicon
/src/app            # Next.js App Router routes (page.tsx, layout.tsx, providers.tsx)
/src/components     # Reusable UI components grouped by feature
/src/styles         # Global CSS overrides (if any)
/src/types          # Shared TypeScript interfaces & types
```

## 4. Development & Build Workflows
- **Dev server**: `npm install && npm run dev` (default localhost:3000)
- **Lint**: `npm run lint` (uses `next lint` with `next/core-web-vitals` rules)
- **Build**: `npm run build` (Next.js build), then `npm run export` to generate `out/` for Pages
- **Preview export**: `npx serve out` or use GitHub Pages (configured automatically via Actions)

> Note: The GitHub Actions workflow (in `.github/workflows/nextjs.yml`) detects your package manager and runs `next build && next export` before deploying the `out/` directory.

## 5. Styling & Tailwind Config
- **Content globs** in `tailwind.config.js` target:
  - `/src/app/**/*.{js,ts,jsx,tsx,mdx}`
  - `/src/components/**/*.{js,ts,jsx,tsx,mdx}`
- **Dark mode**: class-based (`darkMode: 'class'`), toggled via `next-themes` in `providers.tsx`.
- **Custom theme** extensions: colors, screens, boxShadow, dropShadow under `extend`.
- **Prettier** plugin `tailwindcss` enforces class ordering (`.prettierrc`).

## 6. Routing & Data Fetching Patterns
- **App Router**: Each folder in `/src/app` corresponds to a route. `layout.tsx` in a folder wraps all child pages.
- **Providers**: `/src/app/providers.tsx` sets up global contexts (themes, analytics, etc.).
- **Dynamic routes**: Use `[param]` folder naming; fetch data via `fetch` or Sanity client in server components.

## 7. Conventions & Best Practices (Codebase-Specific)
- **Component folders**: Each component lives in `/src/components/<FeatureName>/`, exports a main `index.tsx`.
- **Naming**: `page.tsx` for render functions, `layout.tsx` for wrappers, `providers.tsx` for contexts.
- **Assets**: Import static images from `/public/images/…`; no inline URLs unless hosted externally.
- **ESLint**: Extends `next/core-web-vitals`, disables custom rules—follow Next.js recommendations.

## 8. External Integrations
- **next-themes**: Theme switching; see `providers.tsx` for `ThemeProvider` setup.
- **react-modal-video**: Modal video components under `/src/components/Video/`.
- **Sanity CDN**: `next.config.js` allows images from `cdn.sanity.io` (unoptimized for static export).

## 9. Troubleshooting & Tips
- Path-alias mismatch: Keep `tsconfig.json` and `jsconfig.json` aligned to avoid import errors.
- ESM vs. CJS: `tailwind.config.js` uses ESM syntax—if you hit parse errors, rename to `.mjs` or add `{ "type": "module" }` in `package.json`.
- GitHub Pages basePath: Update `basePath`/`assetPrefix` in `next.config.js` if serving from a subpath.

---

*Please review for gaps or any area needing more detail.*
