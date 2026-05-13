# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Dev server (localhost:3000)
npm run build    # Production build → /build
npm test         # Jest test runner (watch mode)
```

## Architecture

React 18 (Create React App) personal Linktree-style landing page. JavaScript/JSX — no TypeScript. Two routes via React Router v6:

- `/` — Home page: profile, bio, social links
- `/results` — Portfolio achievements with collapsible accordions

### State & Data Flow

Language selection is the only app-level state (`useState` in `App.js`). The active language object (`en.js` or `es.js`) is passed as `texts` prop to child components. No Context API, Redux, or external API calls — all content is hardcoded.

```
App.js (language state)
  → texts = en | es
    → Title, Bio, HyperLink, DescriptionHyperlinks receive texts.*
```

`Result.jsx` has its own hardcoded bilingual accordion data (`accordionData` / `accordionDataEn`) independent of the `texts` prop system.

### Key Files

- `src/App.js` — Root component: routing, language selector, animated background
- `src/languajes/` — Translation objects (note: folder spelled "languajes" not "languages")
- `src/components/Result/Result.jsx` — Achievements page; hardcoded job/project data
- `src/components/Accordion.jsx` — Collapsible card; `formatLinks()` auto-links URLs; `formatContent()` splits on `📌` emoji markers
- `public/index.html` — Includes Google Analytics (G-S0P0DKYVRD), Font Awesome CDN, Open Graph/SEO meta tags

### Styling

Plain CSS with CSS variables defined in `src/index.css`:

```css
--bgColor: #223344;
--bgColor2: #090a0f;
--accentColor: #E6E6E6;
--font: 'Karla', sans-serif;
```

No CSS-in-JS, no preprocessors, no Tailwind.
