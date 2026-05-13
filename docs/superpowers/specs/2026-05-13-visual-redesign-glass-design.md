# Visual Redesign — Glassmorphism UI

**Date:** 2026-05-13
**Status:** Approved

## Goal

Improve the first impression of the site by modernizing the visual design. The animated star background is preserved; all UI elements (link buttons, bio card, accordions) are redesigned with a glassmorphism style — semi-transparent with backdrop blur — layered over the existing dark starry background.

## Scope

- Both pages: `/` (home) and `/results` (achievements)
- **CSS-only changes** — no modifications to content, text, links, component structure, or data
- No new features, no routing changes, no JS logic changes

## Design Direction

**Fondo:** Dark gradient (`#0d1117` → `#1a2233`) with existing animated falling stars — unchanged.

**UI elements (glass style):**
- `background: rgba(255, 255, 255, 0.08–0.12)`
- `border: 1px solid rgba(255, 255, 255, 0.14–0.25)`
- `backdrop-filter: blur(8–10px)`
- `border-radius: 12–14px`
- `box-shadow: 0 2px 12px rgba(0,0,0,0.2–0.3)`

**Typography:**
- Name: `font-size: ~20px`, `font-weight: 700`, `letter-spacing: -0.4px`, color `#fff`
- Subtitle/role: `font-size: ~11px`, `text-transform: uppercase`, `letter-spacing: 2.5px`, color `#94a3b8`
- Body/link text: color `#e2e8f0` on glass, `font-weight: 500–600`
- Muted text: `#64748b`

**Language selector:** Small pill buttons in the top-right corner — active language with `rgba(255,255,255,0.12)` background, inactive fully transparent.

**Link buttons:** All links rendered as glass pills with arrow indicator (`→`) on the right. "Mis logros" button slightly more muted (`rgba(255,255,255,0.05)`) to differentiate as internal navigation.

**Accordions (`/results`):**
- Closed: `rgba(255,255,255,0.07)` background, subtle border
- Open/active: `rgba(255,255,255,0.10)` background, stronger border, expanded content area with `rgba(0,0,0,0.15)` background and top divider `rgba(255,255,255,0.08)`

## Files to Change

| File | What changes |
|------|-------------|
| `src/index.css` | CSS variables: `--bgColor`, `--accentColor`, add glass utility values |
| `src/App.css` | Background gradient, star animation (keep), layout/spacing |
| `src/components/HiperLink/HyperLink.jsx` (and its CSS) | Glass button style |
| `src/components/Bio/Bio.jsx` (and its CSS) | Glass card style |
| `src/components/Accordion.jsx` (and its CSS) | Glass accordion style |
| `src/components/UserName/UserName.jsx` (and its CSS) | Updated typography |
| `src/components/Title/Title.jsx` (and its CSS) | Updated typography |
| `src/components/Subtitle/Subtitle.jsx` (and its CSS) | Subtitle tag pill style |
| `src/App.js` (language selector inline styles or CSS) | Pill button style |

## What Does NOT Change

- All text content, links, URLs, bio text
- Component structure and JSX markup
- Routing (`/` and `/results`)
- Language switching logic
- The animated star background (`animStar` keyframe)
- Google Analytics, Font Awesome CDN in `public/index.html`

## Success Criteria

- Site loads and both pages render correctly
- Language switch (ES/EN) still works
- All links still navigate to the correct URLs
- Accordions on `/results` still expand/collapse
- Vimeo video still embeds in Bio
- Visual result matches the approved mockup: glass cards on dark star background
