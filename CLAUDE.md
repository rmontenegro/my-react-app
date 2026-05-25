# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Vite with HMR)
- **Build:** `npm run build` (outputs to `dist/`)
- **Preview production build:** `npm run preview`
- **Lint:** `npm run lint` (ESLint with react-hooks and react-refresh plugins)

## Architecture

Vite 8 + React 19 single-page app using plain JavaScript (JSX, no TypeScript).

Entry point is `src/main.jsx`, which renders `<App />` inside `<StrictMode>`. The app is currently a single component in `src/App.jsx`.

CSS uses vanilla CSS with custom properties defined in `src/index.css` (global theme tokens including light/dark via `prefers-color-scheme`) and component styles in `src/App.css` (uses CSS nesting).

Static assets in `public/` are served at root; assets in `src/assets/` are imported and processed by Vite.
